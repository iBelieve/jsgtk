import { uniqBy } from 'lodash'
import { NamespaceNode, ClassNode, InterfaceNode, FunctionNode, ParametersNode } from './girxml'
import { GeneratorOptions } from './generator'
import { getTypeFromParameterNode } from './convert'
import reservedWords from './reserved'

const _az = /[_-]([a-z])/g
const aZ = /([a-z])([A-Z]+)/g
const camel = s => s[0] + s.slice(1).replace(_az, ($0, $1) => $1.toUpperCase())

function indent(block: string, spaces: number = 2) {
  const spacing = ' '.repeat(spaces)
  return spacing + block.replace(/\n/g, '\n' + spacing)
}

function getMethods(object: { method: FunctionNode[] }): FunctionNode[] {
  const methods = (object.method || [])
    .concat(object['virtual-method'] || [])

  return uniqBy(methods, method => method.$.name)
}

function getParamNodes(nodes: ParametersNode[]) {
  if (nodes && 'parameter' in nodes[0]) {
    return nodes[0].parameter
  } else {
    return []
  }
}

function renderMethod(node: FunctionNode, isPublic: boolean, includeName: boolean, forExternalInterfaceInNamespace: string, options: GeneratorOptions) {
  const params = getParamNodes(node.parameters)
    .map(param => {
      let name = param.$.name

      if (reservedWords.includes(param.$.name)) {
        name = name + '_' + name
      }

      if (options.jsgtk) {
        name = camel(name)
      }

      let { type, isPrimitive } = getTypeFromParameterNode(param)

      if (!isPrimitive && forExternalInterfaceInNamespace) {
        type = forExternalInterfaceInNamespace + '.' + type
      }

      return `${name}: ${type}`
    })

  const returnType = getTypeFromParameterNode(node['return-value'][0]).type

  let method = ''

  if (isPublic) {
    method += 'public '
  }

  if (includeName) {
    method += options.jsgtk ? camel(node.$.name) : node.$.name
  }

  method += `(${params.join(', ')}): ${returnType};`

  return method
}

function renderClassAsInterface(node: ClassNode, options: GeneratorOptions) {
  const ifaces = (node.implements || []).map(iface => iface.$.name)

  let header = `interface ${node.$.name}`

  if (ifaces.length > 0) {
    header += ` extends ${ifaces.join(', ')}`
  }

  let body = getMethods(node)
    .map(method => renderMethod(method, false, true, null, options))
    .join('\n')

  return `${header} {\n${indent(body)}\n}`
}

function renderInterface(node: InterfaceNode, options: GeneratorOptions) {
  let header = `interface ${node.$.name}`

  const body = getMethods(node)
    .map(method => renderMethod(method, false, true, null, options))
    .join('\n')

  return `${header} {\n${indent(body)}\n}`
}

export function renderNamespace(node: NamespaceNode, options: GeneratorOptions) {
  const entries = [
    { name: 'class', render: renderClassAsInterface },
    { name: 'interface', render: renderInterface }
  ]

  const body = entries
    .map(({ name, render }) => (
      node[name]
        ? node[name]
          .map(entry => render(entry, options))
        : []
    ))
    .flatten()
    .join('\n\n')

  return options.jsgtk
    ? `declare module ${node.$.name} {\n\n${indent(body)}\n\n}`
    : `declare namespace imports.gi.${node.$.name} {\n\n${indent(body)}\n\n}`
}
