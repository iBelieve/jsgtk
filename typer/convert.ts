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
    type = convertToJSType(param_node.array[0].type[0].$.name) + '[]'
    isPrimitive = (type !== (param_node.array[0].type[0].$.name + '[]'))
  }

  return { type, isPrimitive }
}

export function getFunctionInfo(func_node: FunctionNode): FunctionInfo {
  var func_name = func_node.$.name;
  var return_type = getTypeFromParameterNode(func_node['return-value'][0])[0];
  var params: Parameter[] = [];
  //var has_params = "parameter" in method_node.parameters[0];

  if (func_node.parameters && func_node.parameters[0].parameter) {
    for (var param_node of func_node.parameters[0].parameter) {
      if (param_node.$.name === '...') continue;
      let param_name = param_node.$.name;
      if (js_reserved_words.indexOf(param_name) !== -1) { // if clashes with JS reserved word.
        param_name = '_' + param_name;
      }
      let [type, is_primitive] = getTypeFromParameterNode(param_node);
      params.push({
        name: param_name,
        type: type
      });
    }
  }

  return {
    name: func_name,
    return_type: return_type,
    params: params
  }
}
