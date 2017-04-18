import { uniqBy } from 'lodash'
import {
  Node, ConstantNode, NamespaceNode, ClassNode, InterfaceNode, FunctionNode, ParameterNode,
  ParametersNode, RecordNode, EnumNode
} from './girxml'
import { GeneratorOptions } from './generator'
import { getTypeFromParameterNode, getTypeFromParametersNode } from './convert'
import reservedWords from './reserved'

const _az = /[_-]([a-z])/g
const aZ = /([a-z])([A-Z]+)/g
const camel = s => s[0] + s.slice(1).replace(_az, ($0, $1) => $1.toUpperCase())
const classHeader = (name, ifaces) => `class ${name}${ifaces.length > 0 ? ` extends ${ifaces.join(', ')}` : ''}`
const interfaceHeader = (name, ifaces) => `interface ${name}${ifaces.length > 0 ? ` extends ${ifaces.join(', ')}` : ''}`

type PropertyOptions = {
  modifiers?: string[]
}

type ParamOptions = {
  forExternalInterfaceInNamespace?: string
}

type MethodOptions = {
  modifiers?: string[],
  includeName?: boolean,
  forExternalInterfaceInNamespace?: string
}

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

function renderProperty(node: ParameterNode, { modifiers = [] }: PropertyOptions = {}, options: GeneratorOptions) {
  let name = node.$.name
    .replace(/-/g, '_')

  if (options.jsgtk) {
    name = camel(name)
  }

  if (name === 'constructor') {
    name += '_'
  }

  return `${modifiers ? modifiers.join(' ') + ' ' : ''}${name}: ${getTypeFromParameterNode(node).type};`
}

function renderParam(node: ParameterNode, { forExternalInterfaceInNamespace }: ParamOptions, options: GeneratorOptions) {
  let name = node.$.name

  if (reservedWords.includes(node.$.name)) {
    name = '_' + name
  }

  if (options.jsgtk) {
    name = camel(name)
  }

  let { type, isPrimitive } = getTypeFromParameterNode(node)

  if (!isPrimitive && forExternalInterfaceInNamespace) {
    type = forExternalInterfaceInNamespace + '.' + type
  }

  return `${name}: ${type}`
}

function renderMethod(node: FunctionNode, { modifiers = [], includeName = true, forExternalInterfaceInNamespace }: MethodOptions = {}, options: GeneratorOptions) {
  const returnType = getTypeFromParametersNode(node['return-value'])
  const params = getParamNodes(node.parameters)
    .map(param => renderParam(param, { forExternalInterfaceInNamespace }, options))

  let method = ''

  if (modifiers.length > 0) {
    method += modifiers.join(' ') + ' '
  }

  if (includeName) {
    method += options.jsgtk ? camel(node.$.name) : node.$.name
  }

  method += `(${params.join(', ')}): ${returnType};`

  return method
}

function renderAlias(node: ParameterNode, options: GeneratorOptions) {
  return `type ${node.$.name} = ${getTypeFromParameterNode(node).type};`
}

function renderConstant(node: ConstantNode, options: GeneratorOptions) {
  return `const ${node.$.name}: ${getTypeFromParameterNode(node).type};`
}

function renderCallbackField(node: FunctionNode, options: GeneratorOptions): string {
  let name = node.$.name
  if (options.jsgtk) {
    name = camel(name)
  }
  if (name === 'constructor') {
    name += '_'
  }
  return `${name} : { ${renderMethod(node, { includeName: false }, options)} };`
}

function renderCallback(node: FunctionNode, options: GeneratorOptions): string {
  let name = node.$.name

  if (options.jsgtk) {
    name = camel(name)
  }
  return `interface ${name} {\n\t${renderMethod(node, { includeName: false }, options)}\n}`
}

function renderEnum(node: EnumNode, options: GeneratorOptions): string {
  const members = node.member
    .map(member => {
      let name = member.$.name.toUpperCase()
      if (parseInt(name)) {
        name = '_' + name
      }

      return `${name} = ${member.$.value}`
    })
    .join(',\n')

  return `enum ${node.$.name} {\n${indent(members)}\n}`
}

function renderRecord(node: RecordNode, options: GeneratorOptions): string {
  const props = (node.field || [])
    .filter(field => !!field.type || !!field.array)
    .map(field => renderProperty(field, { modifiers: ['public'] }, options))
    .join('\n')
  const callbacks = (node.field || [])
    .filter(field => !!field.callback)
    .map(field => field.callback![0])
    .map(callback => renderCallbackField(callback, options))
    .join('\n')

  const methods = getMethods(node)
    .map(method => renderMethod(method, { modifiers: ['public'] }, options))
    .join('\n')

  const groups = [
    props,
    callbacks,
    methods
  ]

  const body = groups
    .filter(group => !!group)
    .join('\n\n')

  return `class ${node.$.name} {\n${indent(body)}\n}`;
}

function renderClass(node: ClassNode, options: GeneratorOptions) {
  const ifaces = (node.$.parent ? [node.$.parent] : [])
    .concat((node.implements || []).map(iface => iface.$.name))

  const props = (node.property || [])
    .map(prop => renderProperty(prop, { modifiers: ['public'] }, options))
    .join('\n')

  const groups = [
    `constructor(props: ${node.$.name}Props);`,
    props,
    getMethods(node)
      .map(method => renderMethod(method, {}, options))
      .join('\n'),
    (node.function || [])
      .map(method => renderMethod(method, { modifiers: ['static'] }, options))
      .join('\n')
  ]

  const body = groups
    .filter(group => !!group)
    .join('\n\n')

  let classInterface = `${classHeader(node.$.name, ifaces)} {\n${indent(body)}\n}`
  let propsInterface = `${interfaceHeader(node.$.name + 'Props', ifaces.map(iface => iface + 'Props'))} {\n${indent(props)}\n}`

  return classInterface + '\n\n' + propsInterface
}

function renderInterface(node: InterfaceNode, options: GeneratorOptions) {
  const groups = [
    getMethods(node)
      .map(method => renderMethod(method, {}, options))
      .join('\n'),
    (node.function || [])
      .map(method => renderMethod(method, { modifiers: ['static'] }, options))
      .join('\n')
  ]

  let body = groups
    .filter(group => !!group)
    .join('\n\n')

  return `${interfaceHeader(node.$.name, [])} {\n${indent(body)}\n}`
}

export function renderNamespace(node: NamespaceNode, options: GeneratorOptions) {
  const entries = [
    { name: 'alias', render: renderAlias },
    { name: 'constant', render: renderConstant },
    { name: 'callback', render: renderCallback },
    { name: 'enumeration', render: renderEnum },
    { name: 'record', render: renderRecord },
    { name: 'interface', render: renderInterface },
    { name: 'class', render: renderClass }
  ]

  const body = entries
    .map(({ name, render }: { name: string, render: (node: Node, options: GeneratorOptions) => string }) => (
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
