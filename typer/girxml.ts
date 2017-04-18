export interface NodeAttributes {
  name: string;
}

export interface ParameterAttributes extends NodeAttributes {
  direction?: string;
}

export interface MemberAttributes extends NodeAttributes {
  value: number;
}

export interface ClassAttributes extends NodeAttributes {
  parent?: string;
}

export interface Node {
  "$": NodeAttributes
}

export interface ParameterNode extends Node {
  $: ParameterAttributes;
  type?: Node[];
  array?: NodeWithType[];
}

export interface NodeWithType extends Node {
  type: Node[];
}

export interface ParametersNode extends Node {
  parameter: ParameterNode[];
}

export interface FunctionNode extends Node {
  "return-value": ParameterNode[];
  parameters: ParametersNode[];
}

export interface Parameter {
  type: string;
  name: string;
}

export interface FunctionInfo {
  name: string;
  returnType: string;
  params: Parameter[];
}

export interface MemberNode extends Node {
  $: MemberAttributes;
}

export interface EnumNode extends Node {
  member: MemberNode[];
}

export interface FieldNode extends ParameterNode {
  "callback"?: FunctionNode[];
}

export interface RecordNode extends Node {
  "field": FieldNode[];
  "method": FunctionNode[];
}

export interface ClassNode extends Node {
  $: ClassAttributes;
  "implements": Node[];
  "constructor": FunctionNode[];
  "function": FunctionNode[];
  //"field": NodeWithType[];
  "glib-signal": Node[];
  "method": FunctionNode[];
  "virtual-method": FunctionNode[];
  "property": ParameterNode[];
}

export interface InterfaceNode extends Node {
  "function": FunctionNode[];
  "method": FunctionNode[];
  "virtual-method": FunctionNode[];
  "property": ParameterNode[];
}

export interface ConstantNode extends ParameterNode {

}

export interface NamespaceNode extends Node {
  "class": ClassNode[];
  "record": RecordNode[];
  "interface": InterfaceNode[];
  "enumeration": EnumNode[];
  "bitfield": EnumNode[];
  "callback": FunctionNode[];
  "function": FunctionNode[];
  "union": Node[];
  "alias": ParameterNode[];
  "constant": ConstantNode[];
}

export interface IncludeNode extends Node {

}

export interface GIRepositoryXML {
  repository: {
    include: IncludeNode[]
    namespace: NamespaceNode[]
  }
}
