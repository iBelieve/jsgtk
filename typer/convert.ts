import { ParameterNode, FunctionNode, FunctionInfo, Parameter } from './girxml'
import js_reserved_words from './reserved'

function convertToJSType(nativeType: string): string {
  switch (nativeType) {
    case 'guint':
    case 'guint8':
    case 'guint16':
    case 'guint32':
    case 'guint64':
    case 'gint':
    case 'gint8':
    case 'gint16':
    case 'gint32':
    case 'gint64':
    case 'glong':
    case 'gulong':
    case 'gshort':
    case 'gushort':
    case 'guint':
    case 'gfloat':
    case 'gufloat':
    case 'gdouble':
    case 'gudouble':
    case 'gsize':
    case 'gssize':
    case 'long double':
      return 'number';
    case 'utf8':
    case 'gchar':
    case 'gunichar':
    case 'filename':
      return 'string';
    case 'gboolean':
      return 'boolean';
    case 'none':
      return 'void';
    case 'GType':
      return 'GObject.Type';
    case 'gpointer':
      return 'any';
    case 'va_list':
      return 'any[]';
    default:
      return nativeType;
  }
}

export function getTypeFromParameterNode(param_node: ParameterNode) {
  let type: string = ''
  let isPrimitive = false

  if (param_node.type) {
    type = convertToJSType(param_node.type[0].$.name)
    isPrimitive = (type !== param_node.type[0].$.name)
  } else if (param_node.array) {
    let arrayType = getTypeFromParameterNode(param_node.array[0])
    type = arrayType.type + '[]'
    isPrimitive = arrayType.isPrimitive
  }

  return { type, isPrimitive }
}

export function getTypeFromParametersNode(param_node: ParameterNode[]): string {
  let type: string = ''
  let isPrimitive = false

  if (param_node.length > 1) {
    return '[' + param_node.map(param => getTypeFromParameterNode(param).type) + ']'
  } else {
    return getTypeFromParameterNode(param_node[0]).type
  }
}
