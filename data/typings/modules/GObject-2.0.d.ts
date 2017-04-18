declare module "GObject" {

  export type SignalCMarshaller = ClosureMarshal;
  
  export type SignalCVaMarshaller = VaClosureMarshal;
  
  export type Type = number;
  
  export const PARAM_MASK: number;
  
  export const PARAM_STATIC_STRINGS: number;
  
  export const PARAM_USER_SHIFT: number;
  
  export const SIGNAL_FLAGS_MASK: number;
  
  export const SIGNAL_MATCH_MASK: number;
  
  export const TYPE_FLAG_RESERVED_ID_BIT: GLib.Type;
  
  export const TYPE_FUNDAMENTAL_MAX: number;
  
  export const TYPE_FUNDAMENTAL_SHIFT: number;
  
  export const TYPE_RESERVED_BSE_FIRST: number;
  
  export const TYPE_RESERVED_BSE_LAST: number;
  
  export const TYPE_RESERVED_GLIB_FIRST: number;
  
  export const TYPE_RESERVED_GLIB_LAST: number;
  
  export const TYPE_RESERVED_USER_FIRST: number;
  
  export const VALUE_COLLECT_FORMAT_MAX_LENGTH: number;
  
  export const VALUE_NOCOPY_CONTENTS: number;
  
  export function boxedCopy(boxedType: GObject.Type, srcBoxed: any): any;
  
  export function boxedFree(boxedType: GObject.Type, boxed: any): void;
  
  export function boxedTypeRegisterStatic(name: string, boxedCopy: BoxedCopyFunc, boxedFree: BoxedFreeFunc): GObject.Type;
  
  export function cclosureMarshal_BOOLEAN__BOXED_BOXED(closure: Closure, returnValue: Value, nParamValues: number, paramValues: Value, invocationHint: any, marshalData: any): void;
  
  export function cclosureMarshal_BOOLEAN__FLAGS(closure: Closure, returnValue: Value, nParamValues: number, paramValues: Value, invocationHint: any, marshalData: any): void;
  
  export function cclosureMarshal_STRING__OBJECT_POINTER(closure: Closure, returnValue: Value, nParamValues: number, paramValues: Value, invocationHint: any, marshalData: any): void;
  
  export function cclosureMarshal_VOID__BOOLEAN(closure: Closure, returnValue: Value, nParamValues: number, paramValues: Value, invocationHint: any, marshalData: any): void;
  
  export function cclosureMarshal_VOID__BOXED(closure: Closure, returnValue: Value, nParamValues: number, paramValues: Value, invocationHint: any, marshalData: any): void;
  
  export function cclosureMarshal_VOID__CHAR(closure: Closure, returnValue: Value, nParamValues: number, paramValues: Value, invocationHint: any, marshalData: any): void;
  
  export function cclosureMarshal_VOID__DOUBLE(closure: Closure, returnValue: Value, nParamValues: number, paramValues: Value, invocationHint: any, marshalData: any): void;
  
  export function cclosureMarshal_VOID__ENUM(closure: Closure, returnValue: Value, nParamValues: number, paramValues: Value, invocationHint: any, marshalData: any): void;
  
  export function cclosureMarshal_VOID__FLAGS(closure: Closure, returnValue: Value, nParamValues: number, paramValues: Value, invocationHint: any, marshalData: any): void;
  
  export function cclosureMarshal_VOID__FLOAT(closure: Closure, returnValue: Value, nParamValues: number, paramValues: Value, invocationHint: any, marshalData: any): void;
  
  export function cclosureMarshal_VOID__INT(closure: Closure, returnValue: Value, nParamValues: number, paramValues: Value, invocationHint: any, marshalData: any): void;
  
  export function cclosureMarshal_VOID__LONG(closure: Closure, returnValue: Value, nParamValues: number, paramValues: Value, invocationHint: any, marshalData: any): void;
  
  export function cclosureMarshal_VOID__OBJECT(closure: Closure, returnValue: Value, nParamValues: number, paramValues: Value, invocationHint: any, marshalData: any): void;
  
  export function cclosureMarshal_VOID__PARAM(closure: Closure, returnValue: Value, nParamValues: number, paramValues: Value, invocationHint: any, marshalData: any): void;
  
  export function cclosureMarshal_VOID__POINTER(closure: Closure, returnValue: Value, nParamValues: number, paramValues: Value, invocationHint: any, marshalData: any): void;
  
  export function cclosureMarshal_VOID__STRING(closure: Closure, returnValue: Value, nParamValues: number, paramValues: Value, invocationHint: any, marshalData: any): void;
  
  export function cclosureMarshal_VOID__UCHAR(closure: Closure, returnValue: Value, nParamValues: number, paramValues: Value, invocationHint: any, marshalData: any): void;
  
  export function cclosureMarshal_VOID__UINT(closure: Closure, returnValue: Value, nParamValues: number, paramValues: Value, invocationHint: any, marshalData: any): void;
  
  export function cclosureMarshal_VOID__UINT_POINTER(closure: Closure, returnValue: Value, nParamValues: number, paramValues: Value, invocationHint: any, marshalData: any): void;
  
  export function cclosureMarshal_VOID__ULONG(closure: Closure, returnValue: Value, nParamValues: number, paramValues: Value, invocationHint: any, marshalData: any): void;
  
  export function cclosureMarshal_VOID__VARIANT(closure: Closure, returnValue: Value, nParamValues: number, paramValues: Value, invocationHint: any, marshalData: any): void;
  
  export function cclosureMarshal_VOID__VOID(closure: Closure, returnValue: Value, nParamValues: number, paramValues: Value, invocationHint: any, marshalData: any): void;
  
  export function cclosureMarshalGeneric(closure: Closure, returnGvalue: Value, nParamValues: number, paramValues: Value, invocationHint: any, marshalData: any): void;
  
  export function cclosureNew(callbackFunc: Callback, userData: any, destroyData: ClosureNotify): Closure;
  
  export function cclosureNewObject(callbackFunc: Callback, object: Object): Closure;
  
  export function cclosureNewObjectSwap(callbackFunc: Callback, object: Object): Closure;
  
  export function cclosureNewSwap(callbackFunc: Callback, userData: any, destroyData: ClosureNotify): Closure;
  
  export function clearObject(objectPtr: Object): void;
  
  export function enumCompleteTypeInfo(gEnumType: GObject.Type, info: TypeInfo, constValues: EnumValue): void;
  
  export function enumGetValue(enumClass: EnumClass, value: number): EnumValue;
  
  export function enumGetValueByName(enumClass: EnumClass, name: string): EnumValue;
  
  export function enumGetValueByNick(enumClass: EnumClass, nick: string): EnumValue;
  
  export function enumRegisterStatic(name: string, constStaticValues: EnumValue): GObject.Type;
  
  export function flagsCompleteTypeInfo(gFlagsType: GObject.Type, info: TypeInfo, constValues: FlagsValue): void;
  
  export function flagsGetFirstValue(flagsClass: FlagsClass, value: number): FlagsValue;
  
  export function flagsGetValueByName(flagsClass: FlagsClass, name: string): FlagsValue;
  
  export function flagsGetValueByNick(flagsClass: FlagsClass, nick: string): FlagsValue;
  
  export function flagsRegisterStatic(name: string, constStaticValues: FlagsValue): GObject.Type;
  
  export function gtypeGetType(): GObject.Type;
  
  export function paramSpecBoolean(name: string, nick: string, blurb: string, defaultValue: boolean, flags: ParamFlags): ParamSpec;
  
  export function paramSpecBoxed(name: string, nick: string, blurb: string, boxedType: GObject.Type, flags: ParamFlags): ParamSpec;
  
  export function paramSpecChar(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec;
  
  export function paramSpecDouble(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec;
  
  export function paramSpecEnum(name: string, nick: string, blurb: string, enumType: GObject.Type, defaultValue: number, flags: ParamFlags): ParamSpec;
  
  export function paramSpecFlags(name: string, nick: string, blurb: string, flagsType: GObject.Type, defaultValue: number, flags: ParamFlags): ParamSpec;
  
  export function paramSpecFloat(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec;
  
  export function paramSpecGtype(name: string, nick: string, blurb: string, isAType: GObject.Type, flags: ParamFlags): ParamSpec;
  
  export function paramSpecInt(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec;
  
  export function paramSpecInt64(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec;
  
  export function paramSpecLong(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec;
  
  export function paramSpecObject(name: string, nick: string, blurb: string, objectType: GObject.Type, flags: ParamFlags): ParamSpec;
  
  export function paramSpecOverride(name: string, overridden: ParamSpec): ParamSpec;
  
  export function paramSpecParam(name: string, nick: string, blurb: string, paramType: GObject.Type, flags: ParamFlags): ParamSpec;
  
  export function paramSpecPointer(name: string, nick: string, blurb: string, flags: ParamFlags): ParamSpec;
  
  export function paramSpecPoolNew(typePrefixing: boolean): ParamSpecPool;
  
  export function paramSpecString(name: string, nick: string, blurb: string, defaultValue: string, flags: ParamFlags): ParamSpec;
  
  export function paramSpecUchar(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec;
  
  export function paramSpecUint(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec;
  
  export function paramSpecUint64(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec;
  
  export function paramSpecUlong(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec;
  
  export function paramSpecUnichar(name: string, nick: string, blurb: string, defaultValue: string, flags: ParamFlags): ParamSpec;
  
  export function paramSpecValueArray(name: string, nick: string, blurb: string, elementSpec: ParamSpec, flags: ParamFlags): ParamSpec;
  
  export function paramSpecVariant(name: string, nick: string, blurb: string, type: GLib.VariantType, defaultValue: GLib.Variant, flags: ParamFlags): ParamSpec;
  
  export function paramTypeRegisterStatic(name: string, pspecInfo: ParamSpecTypeInfo): GObject.Type;
  
  export function paramValueConvert(pspec: ParamSpec, srcValue: Value, destValue: Value, strictValidation: boolean): boolean;
  
  export function paramValueDefaults(pspec: ParamSpec, value: Value): boolean;
  
  export function paramValueSetDefault(pspec: ParamSpec, value: Value): void;
  
  export function paramValueValidate(pspec: ParamSpec, value: Value): boolean;
  
  export function paramValuesCmp(pspec: ParamSpec, value1: Value, value2: Value): number;
  
  export function pointerTypeRegisterStatic(name: string): GObject.Type;
  
  export function signalAccumulatorFirstWins(ihint: SignalInvocationHint, returnAccu: Value, handlerReturn: Value, dummy: any): boolean;
  
  export function signalAccumulatorTrueHandled(ihint: SignalInvocationHint, returnAccu: Value, handlerReturn: Value, dummy: any): boolean;
  
  export function signalAddEmissionHook(signalId: number, detail: GLib.Quark, hookFunc: SignalEmissionHook, hookData: any, dataDestroy: GLib.DestroyNotify): number;
  
  export function signalChainFromOverridden(instanceAndParams: Value[], returnValue: Value): void;
  
  export function signalChainFromOverriddenHandler(instance: TypeInstance, ...params: any[]): void;
  
  export function signalConnectClosure(instance: Object, detailedSignal: string, closure: Closure, after: boolean): number;
  
  export function signalConnectClosureById(instance: Object, signalId: number, detail: GLib.Quark, closure: Closure, after: boolean): number;
  
  export function signalConnectData(instance: Object, detailedSignal: string, cHandler: Callback, data: any, destroyData: ClosureNotify, connectFlags: ConnectFlags): number;
  
  export function signalConnectObject(instance: TypeInstance, detailedSignal: string, cHandler: Callback, gobject: Object, connectFlags: ConnectFlags): number;
  
  export function signalEmit(instance: Object, signalId: number, detail: GLib.Quark, ...params: any[]): void;
  
  export function signalEmitByName(instance: Object, detailedSignal: string, ...params: any[]): void;
  
  export function signalEmitValist(instance: TypeInstance, signalId: number, detail: GLib.Quark, varArgs: any[]): void;
  
  export function signalEmitv(instanceAndParams: Value[], signalId: number, detail: GLib.Quark, returnValue: Value): void;
  
  export function signalGetInvocationHint(instance: Object): SignalInvocationHint;
  
  export function signalHandlerBlock(instance: Object, handlerId: number): void;
  
  export function signalHandlerDisconnect(instance: Object, handlerId: number): void;
  
  export function signalHandlerFind(instance: Object, mask: SignalMatchType, signalId: number, detail: GLib.Quark, closure: Closure, func: any, data: any): number;
  
  export function signalHandlerIsConnected(instance: Object, handlerId: number): boolean;
  
  export function signalHandlerUnblock(instance: Object, handlerId: number): void;
  
  export function signalHandlersBlockMatched(instance: Object, mask: SignalMatchType, signalId: number, detail: GLib.Quark, closure: Closure, func: any, data: any): number;
  
  export function signalHandlersDestroy(instance: Object): void;
  
  export function signalHandlersDisconnectMatched(instance: Object, mask: SignalMatchType, signalId: number, detail: GLib.Quark, closure: Closure, func: any, data: any): number;
  
  export function signalHandlersUnblockMatched(instance: Object, mask: SignalMatchType, signalId: number, detail: GLib.Quark, closure: Closure, func: any, data: any): number;
  
  export function signalHasHandlerPending(instance: Object, signalId: number, detail: GLib.Quark, mayBeBlocked: boolean): boolean;
  
  export function signalListIds(itype: GObject.Type, nIds: number): number[];
  
  export function signalLookup(name: string, itype: GObject.Type): number;
  
  export function signalName(signalId: number): string;
  
  export function signalNew(signalName: string, itype: GObject.Type, signalFlags: SignalFlags, classOffset: number, accumulator: SignalAccumulator, accuData: any, cMarshaller: SignalCMarshaller, returnType: GObject.Type, nParams: number, ...params: any[]): number;
  
  export function signalNewClassHandler(signalName: string, itype: GObject.Type, signalFlags: SignalFlags, classHandler: Callback, accumulator: SignalAccumulator, accuData: any, cMarshaller: SignalCMarshaller, returnType: GObject.Type, nParams: number, ...params: any[]): number;
  
  export function signalNewValist(signalName: string, itype: GObject.Type, signalFlags: SignalFlags, classClosure: Closure, accumulator: SignalAccumulator, accuData: any, cMarshaller: SignalCMarshaller, returnType: GObject.Type, nParams: number, args: any[]): number;
  
  export function signalNewv(signalName: string, itype: GObject.Type, signalFlags: SignalFlags, classClosure: Closure, accumulator: SignalAccumulator, accuData: any, cMarshaller: SignalCMarshaller, returnType: GObject.Type, nParams: number, paramTypes: GObject.Type[]): number;
  
  export function signalOverrideClassClosure(signalId: number, instanceType: GObject.Type, classClosure: Closure): void;
  
  export function signalOverrideClassHandler(signalName: string, instanceType: GObject.Type, classHandler: Callback): void;
  
  export function signalParseName(detailedSignal: string, itype: GObject.Type, signalIdP: number, detailP: GLib.Quark, forceDetailQuark: boolean): boolean;
  
  export function signalQuery(signalId: number, query: SignalQuery): void;
  
  export function signalRemoveEmissionHook(signalId: number, hookId: number): void;
  
  export function signalSetVaMarshaller(signalId: number, instanceType: GObject.Type, vaMarshaller: SignalCVaMarshaller): void;
  
  export function signalStopEmission(instance: Object, signalId: number, detail: GLib.Quark): void;
  
  export function signalStopEmissionByName(instance: Object, detailedSignal: string): void;
  
  export function signalTypeCclosureNew(itype: GObject.Type, structOffset: number): Closure;
  
  export function sourceSetClosure(source: GLib.Source, closure: Closure): void;
  
  export function sourceSetDummyCallback(source: GLib.Source): void;
  
  export function strdupValueContents(value: Value): string;
  
  export function typeAddClassCacheFunc(cacheData: any, cacheFunc: TypeClassCacheFunc): void;
  
  export function typeAddClassPrivate(classType: GObject.Type, privateSize: number): void;
  
  export function typeAddInstancePrivate(classType: GObject.Type, privateSize: number): number;
  
  export function typeAddInterfaceCheck(checkData: any, checkFunc: TypeInterfaceCheckFunc): void;
  
  export function typeAddInterfaceDynamic(instanceType: GObject.Type, interfaceType: GObject.Type, plugin: TypePlugin): void;
  
  export function typeAddInterfaceStatic(instanceType: GObject.Type, interfaceType: GObject.Type, info: InterfaceInfo): void;
  
  export function typeCheckClassCast(gClass: TypeClass, isAType: GObject.Type): TypeClass;
  
  export function typeCheckClassIsA(gClass: TypeClass, isAType: GObject.Type): boolean;
  
  export function typeCheckInstance(instance: TypeInstance): boolean;
  
  export function typeCheckInstanceCast(instance: TypeInstance, ifaceType: GObject.Type): TypeInstance;
  
  export function typeCheckInstanceIsA(instance: TypeInstance, ifaceType: GObject.Type): boolean;
  
  export function typeCheckInstanceIsFundamentallyA(instance: TypeInstance, fundamentalType: GObject.Type): boolean;
  
  export function typeCheckIsValueType(type: GObject.Type): boolean;
  
  export function typeCheckValue(value: Value): boolean;
  
  export function typeCheckValueHolds(value: Value, type: GObject.Type): boolean;
  
  export function typeChildren(type: GObject.Type, nChildren: number): GObject.Type[];
  
  export function typeClassAdjustPrivateOffset(gClass: any, privateSizeOrOffset: number): void;
  
  export function typeClassPeek(type: GObject.Type): TypeClass;
  
  export function typeClassPeekStatic(type: GObject.Type): TypeClass;
  
  export function typeClassRef(type: GObject.Type): TypeClass;
  
  export function typeCreateInstance(type: GObject.Type): TypeInstance;
  
  export function typeDefaultInterfacePeek(gType: GObject.Type): TypeInterface;
  
  export function typeDefaultInterfaceRef(gType: GObject.Type): TypeInterface;
  
  export function typeDefaultInterfaceUnref(gIface: TypeInterface): void;
  
  export function typeDepth(type: GObject.Type): number;
  
  export function typeEnsure(type: GObject.Type): void;
  
  export function typeFreeInstance(instance: TypeInstance): void;
  
  export function typeFromName(name: string): GObject.Type;
  
  export function typeFundamental(typeId: GObject.Type): GObject.Type;
  
  export function typeFundamentalNext(): GObject.Type;
  
  export function typeGetInstanceCount(type: GObject.Type): number;
  
  export function typeGetPlugin(type: GObject.Type): TypePlugin;
  
  export function typeGetQdata(type: GObject.Type, quark: GLib.Quark): any;
  
  export function typeGetTypeRegistrationSerial(): number;
  
  export function typeInit(): void;
  
  export function typeInitWithDebugFlags(debugFlags: TypeDebugFlags): void;
  
  export function typeInterfaceAddPrerequisite(interfaceType: GObject.Type, prerequisiteType: GObject.Type): void;
  
  export function typeInterfaceGetPlugin(instanceType: GObject.Type, interfaceType: GObject.Type): TypePlugin;
  
  export function typeInterfacePeek(instanceClass: TypeClass, ifaceType: GObject.Type): TypeInterface;
  
  export function typeInterfacePrerequisites(interfaceType: GObject.Type, nPrerequisites: number): GObject.Type[];
  
  export function typeInterfaces(type: GObject.Type, nInterfaces: number): GObject.Type[];
  
  export function typeIsA(type: GObject.Type, isAType: GObject.Type): boolean;
  
  export function typeName(type: GObject.Type): string;
  
  export function typeNameFromClass(gClass: TypeClass): string;
  
  export function typeNameFromInstance(instance: TypeInstance): string;
  
  export function typeNextBase(leafType: GObject.Type, rootType: GObject.Type): GObject.Type;
  
  export function typeParent(type: GObject.Type): GObject.Type;
  
  export function typeQname(type: GObject.Type): GLib.Quark;
  
  export function typeQuery(type: GObject.Type, query: TypeQuery): void;
  
  export function typeRegisterDynamic(parentType: GObject.Type, typeName: string, plugin: TypePlugin, flags: TypeFlags): GObject.Type;
  
  export function typeRegisterFundamental(typeId: GObject.Type, typeName: string, info: TypeInfo, finfo: TypeFundamentalInfo, flags: TypeFlags): GObject.Type;
  
  export function typeRegisterStatic(parentType: GObject.Type, typeName: string, info: TypeInfo, flags: TypeFlags): GObject.Type;
  
  export function typeRegisterStaticSimple(parentType: GObject.Type, typeName: string, classSize: number, classInit: ClassInitFunc, instanceSize: number, instanceInit: InstanceInitFunc, flags: TypeFlags): GObject.Type;
  
  export function typeRemoveClassCacheFunc(cacheData: any, cacheFunc: TypeClassCacheFunc): void;
  
  export function typeRemoveInterfaceCheck(checkData: any, checkFunc: TypeInterfaceCheckFunc): void;
  
  export function typeSetQdata(type: GObject.Type, quark: GLib.Quark, data: any): void;
  
  export function typeTestFlags(type: GObject.Type, flags: number): boolean;
  
  export function typeValueTablePeek(type: GObject.Type): TypeValueTable;
  
  export function valueRegisterTransformFunc(srcType: GObject.Type, destType: GObject.Type, transformFunc: ValueTransform): void;
  
  export function valueTypeCompatible(srcType: GObject.Type, destType: GObject.Type): boolean;
  
  export function valueTypeTransformable(srcType: GObject.Type, destType: GObject.Type): boolean;
  
  export interface BaseFinalizeFunc {
  	(gClass: TypeClass): void;
  }
  
  export interface BaseInitFunc {
  	(gClass: TypeClass): void;
  }
  
  export interface BindingTransformFunc {
  	(binding: Binding, fromValue: Value, toValue: Value, userData: any): boolean;
  }
  
  export interface BoxedCopyFunc {
  	(boxed: any): any;
  }
  
  export interface BoxedFreeFunc {
  	(boxed: any): void;
  }
  
  export interface Callback {
  	(): void;
  }
  
  export interface ClassFinalizeFunc {
  	(gClass: TypeClass, classData: any): void;
  }
  
  export interface ClassInitFunc {
  	(gClass: TypeClass, classData: any): void;
  }
  
  export interface ClosureMarshal {
  	(closure: Closure, returnValue: Value, nParamValues: number, paramValues: Value[], invocationHint: any, marshalData: any): void;
  }
  
  export interface ClosureNotify {
  	(data: any, closure: Closure): void;
  }
  
  export interface InstanceInitFunc {
  	(instance: TypeInstance, gClass: TypeClass): void;
  }
  
  export interface InterfaceFinalizeFunc {
  	(gIface: TypeInterface, ifaceData: any): void;
  }
  
  export interface InterfaceInitFunc {
  	(gIface: TypeInterface, ifaceData: any): void;
  }
  
  export interface ObjectFinalizeFunc {
  	(object: Object): void;
  }
  
  export interface ObjectGetPropertyFunc {
  	(object: Object, propertyId: number, value: Value, pspec: ParamSpec): void;
  }
  
  export interface ObjectSetPropertyFunc {
  	(object: Object, propertyId: number, value: Value, pspec: ParamSpec): void;
  }
  
  export interface SignalAccumulator {
  	(ihint: SignalInvocationHint, returnAccu: Value, handlerReturn: Value, data: any): boolean;
  }
  
  export interface SignalEmissionHook {
  	(ihint: SignalInvocationHint, nParamValues: number, paramValues: Value[], data: any): boolean;
  }
  
  export interface ToggleNotify {
  	(data: any, object: Object, isLastRef: boolean): void;
  }
  
  export interface TypeClassCacheFunc {
  	(cacheData: any, gClass: TypeClass): boolean;
  }
  
  export interface TypeInterfaceCheckFunc {
  	(checkData: any, gIface: TypeInterface): void;
  }
  
  export interface TypePluginCompleteInterfaceInfo {
  	(plugin: TypePlugin, instanceType: GObject.Type, interfaceType: GObject.Type, info: InterfaceInfo): void;
  }
  
  export interface TypePluginCompleteTypeInfo {
  	(plugin: TypePlugin, gType: GObject.Type, info: TypeInfo, valueTable: TypeValueTable): void;
  }
  
  export interface TypePluginUnuse {
  	(plugin: TypePlugin): void;
  }
  
  export interface TypePluginUse {
  	(plugin: TypePlugin): void;
  }
  
  export interface VaClosureMarshal {
  	(closure: Closure, returnValue: Value, instance: TypeInstance, args: any[], marshalData: any, nParams: number, paramTypes: GObject.Type[]): void;
  }
  
  export interface ValueTransform {
  	(srcValue: Value, destValue: Value): void;
  }
  
  export interface WeakNotify {
  	(data: any, whereTheObjectWas: Object): void;
  }
  
  export enum BindingFlags {
    DEFAULT = 0,
    BIDIRECTIONAL = 1,
    SYNC_CREATE = 2,
    INVERT_BOOLEAN = 4
  }
  
  export enum ConnectFlags {
    AFTER = 1,
    SWAPPED = 2
  }
  
  export enum ParamFlags {
    READABLE = 1,
    WRITABLE = 2,
    READWRITE = 3,
    CONSTRUCT = 4,
    CONSTRUCT_ONLY = 8,
    LAX_VALIDATION = 16,
    STATIC_NAME = 32,
    PRIVATE = 32,
    STATIC_NICK = 64,
    STATIC_BLURB = 128,
    EXPLICIT_NOTIFY = 1073741824,
    DEPRECATED = 2147483648
  }
  
  export enum SignalFlags {
    RUN_FIRST = 1,
    RUN_LAST = 2,
    RUN_CLEANUP = 4,
    NO_RECURSE = 8,
    DETAILED = 16,
    ACTION = 32,
    NO_HOOKS = 64,
    MUST_COLLECT = 128,
    DEPRECATED = 256
  }
  
  export enum SignalMatchType {
    ID = 1,
    DETAIL = 2,
    CLOSURE = 4,
    FUNC = 8,
    DATA = 16,
    UNBLOCKED = 32
  }
  
  export enum TypeDebugFlags {
    NONE = 0,
    OBJECTS = 1,
    SIGNALS = 2,
    INSTANCE_COUNT = 4,
    MASK = 7
  }
  
  export enum TypeFlags {
    ABSTRACT = 16,
    VALUE_ABSTRACT = 32
  }
  
  export enum TypeFundamentalFlags {
    CLASSED = 1,
    INSTANTIATABLE = 2,
    DERIVABLE = 4,
    DEEP_DERIVABLE = 8
  }
  
  export class CClosure {
    public closure: Closure;
    public callback: any;
  }
  
  export class Closure {
    public refCount: number;
    public metaMarshalNouse: number;
    public nGuards: number;
    public nFnotifiers: number;
    public nInotifiers: number;
    public inInotify: number;
    public floating: number;
    public derivativeFlag: number;
    public inMarshal: number;
    public isInvalid: number;
    public data: any;
    public notifiers: ClosureNotifyData;
    
    marshal : { (closure: Closure, returnValue: Value, nParamValues: number, paramValues: Value, invocationHint: any, marshalData: any): void; };
    
    public addFinalizeNotifier(notifyData: any, notifyFunc: ClosureNotify): void;
    public addInvalidateNotifier(notifyData: any, notifyFunc: ClosureNotify): void;
    public addMarshalGuards(preMarshalData: any, preMarshalNotify: ClosureNotify, postMarshalData: any, postMarshalNotify: ClosureNotify): void;
    public invalidate(): void;
    public invoke(returnValue: Value, nParamValues: number, paramValues: Value[], invocationHint: any): void;
    public ref(): Closure;
    public removeFinalizeNotifier(notifyData: any, notifyFunc: ClosureNotify): void;
    public removeInvalidateNotifier(notifyData: any, notifyFunc: ClosureNotify): void;
    public setMarshal(marshal: ClosureMarshal): void;
    public setMetaMarshal(marshalData: any, metaMarshal: ClosureMarshal): void;
    public sink(): void;
    public unref(): void;
  }
  
  export class ClosureNotifyData {
    public data: any;
    public notify: ClosureNotify;
  }
  
  export class EnumClass {
    public gTypeClass: TypeClass;
    public minimum: number;
    public maximum: number;
    public nValues: number;
    public values: EnumValue;
  }
  
  export class EnumValue {
    public value: number;
    public valueName: string;
    public valueNick: string;
  }
  
  export class FlagsClass {
    public gTypeClass: TypeClass;
    public mask: number;
    public nValues: number;
    public values: FlagsValue;
  }
  
  export class FlagsValue {
    public value: number;
    public valueName: string;
    public valueNick: string;
  }
  
  export class InitiallyUnownedClass {
    public gTypeClass: TypeClass;
    public constructProperties: GLib.SList;
    public flags: number;
    public pdummy: any[];
    
    constructor_ : { (type: GObject.Type, nConstructProperties: number, constructProperties: ObjectConstructParam): Object; };
    setProperty : { (object: Object, propertyId: number, value: Value, pspec: ParamSpec): void; };
    getProperty : { (object: Object, propertyId: number, value: Value, pspec: ParamSpec): void; };
    dispose : { (object: Object): void; };
    finalize : { (object: Object): void; };
    dispatchPropertiesChanged : { (object: Object, nPspecs: number, pspecs: ParamSpec): void; };
    notify : { (object: Object, pspec: ParamSpec): void; };
    constructed : { (object: Object): void; };
  }
  
  export class InterfaceInfo {
    public interfaceInit: InterfaceInitFunc;
    public interfaceFinalize: InterfaceFinalizeFunc;
    public interfaceData: any;
  }
  
  export class ObjectClass {
    public gTypeClass: TypeClass;
    public constructProperties: GLib.SList;
    public flags: number;
    public pdummy: any[];
    
    constructor_ : { (type: GObject.Type, nConstructProperties: number, constructProperties: ObjectConstructParam): Object; };
    setProperty : { (object: Object, propertyId: number, value: Value, pspec: ParamSpec): void; };
    getProperty : { (object: Object, propertyId: number, value: Value, pspec: ParamSpec): void; };
    dispose : { (object: Object): void; };
    finalize : { (object: Object): void; };
    dispatchPropertiesChanged : { (object: Object, nPspecs: number, pspecs: ParamSpec): void; };
    notify : { (object: Object, pspec: ParamSpec): void; };
    constructed : { (object: Object): void; };
    
    public findProperty(propertyName: string): ParamSpec;
    public installProperties(nPspecs: number, pspecs: ParamSpec[]): void;
    public installProperty(propertyId: number, pspec: ParamSpec): void;
    public listProperties(nProperties: number): ParamSpec[];
    public overrideProperty(propertyId: number, name: string): void;
  }
  
  export class ObjectConstructParam {
    public pspec: ParamSpec;
    public value: Value;
  }
  
  export class ParamSpecClass {
    public gTypeClass: TypeClass;
    public valueType: GObject.Type;
    public dummy: any[];
    
    finalize : { (pspec: ParamSpec): void; };
    valueSetDefault : { (pspec: ParamSpec, value: Value): void; };
    valueValidate : { (pspec: ParamSpec, value: Value): boolean; };
    valuesCmp : { (pspec: ParamSpec, value1: Value, value2: Value): number; };
  }
  
  export class ParamSpecPool {
    public insert(pspec: ParamSpec, ownerType: GObject.Type): void;
    public list(ownerType: GObject.Type, nPspecsP: number): ParamSpec[];
    public listOwned(ownerType: GObject.Type): GLib.List;
    public lookup(paramName: string, ownerType: GObject.Type, walkAncestors: boolean): ParamSpec;
    public remove(pspec: ParamSpec): void;
  }
  
  export class ParamSpecTypeInfo {
    public instanceSize: number;
    public nPreallocs: number;
    public valueType: GObject.Type;
    
    instanceInit : { (pspec: ParamSpec): void; };
    finalize : { (pspec: ParamSpec): void; };
    valueSetDefault : { (pspec: ParamSpec, value: Value): void; };
    valueValidate : { (pspec: ParamSpec, value: Value): boolean; };
    valuesCmp : { (pspec: ParamSpec, value1: Value, value2: Value): number; };
  }
  
  export class Parameter {
    public name: string;
    public value: Value;
  }
  
  export class SignalInvocationHint {
    public signalId: number;
    public detail: GLib.Quark;
    public runType: SignalFlags;
  }
  
  export class SignalQuery {
    public signalId: number;
    public signalName: string;
    public itype: GObject.Type;
    public signalFlags: SignalFlags;
    public returnType: GObject.Type;
    public nParams: number;
    public paramTypes: GObject.Type[];
  }
  
  export class TypeClass {
    public gType: GObject.Type;
    
    public addPrivate(privateSize: number): void;
    public getInstancePrivateOffset(): number;
    public getPrivate(privateType: GObject.Type): any;
    public peekParent(): TypeClass;
    public unref(): void;
    public unrefUncached(): void;
  }
  
  export class TypeFundamentalInfo {
    public typeFlags: TypeFundamentalFlags;
  }
  
  export class TypeInfo {
    public classSize: number;
    public baseInit: BaseInitFunc;
    public baseFinalize: BaseFinalizeFunc;
    public classInit: ClassInitFunc;
    public classFinalize: ClassFinalizeFunc;
    public classData: any;
    public instanceSize: number;
    public nPreallocs: number;
    public instanceInit: InstanceInitFunc;
    public valueTable: TypeValueTable;
  }
  
  export class TypeInstance {
    public gClass: TypeClass;
    
    public getPrivate(privateType: GObject.Type): any;
  }
  
  export class TypeInterface {
    public gType: GObject.Type;
    public gInstanceType: GObject.Type;
    
    public peekParent(): TypeInterface;
  }
  
  export class TypeModuleClass {
    public parentClass: ObjectClass;
    
    load : { (module: TypeModule): boolean; };
    unload : { (module: TypeModule): void; };
    reserved1 : { (): void; };
    reserved2 : { (): void; };
    reserved3 : { (): void; };
    reserved4 : { (): void; };
  }
  
  export class TypePluginClass {
    public baseIface: TypeInterface;
    public usePlugin: TypePluginUse;
    public unusePlugin: TypePluginUnuse;
    public completeTypeInfo: TypePluginCompleteTypeInfo;
    public completeInterfaceInfo: TypePluginCompleteInterfaceInfo;
  }
  
  export class TypeQuery {
    public type: GObject.Type;
    public typeName: string;
    public classSize: number;
    public instanceSize: number;
  }
  
  export class TypeValueTable {
    public collectFormat: string;
    public lcopyFormat: string;
    
    valueInit : { (value: Value): void; };
    valueFree : { (value: Value): void; };
    valueCopy : { (srcValue: Value, destValue: Value): void; };
    valuePeekPointer : { (value: Value): any; };
    collectValue : { (value: Value, nCollectValues: number, collectValues: TypeCValue, collectFlags: number): string; };
    lcopyValue : { (value: Value, nCollectValues: number, collectValues: TypeCValue, collectFlags: number): string; };
  }
  
  export class Value {
    public gType: GObject.Type;
    public data: _Value__data__union[];
    
    public copy(destValue: Value): void;
    public dupBoxed(): any;
    public dupObject(): Object;
    public dupParam(): ParamSpec;
    public dupString(): string;
    public dupVariant(): GLib.Variant;
    public fitsPointer(): boolean;
    public getBoolean(): boolean;
    public getBoxed(): any;
    public getChar(): string;
    public getDouble(): number;
    public getEnum(): number;
    public getFlags(): number;
    public getFloat(): number;
    public getGtype(): GObject.Type;
    public getInt(): number;
    public getInt64(): number;
    public getLong(): number;
    public getObject(): Object;
    public getParam(): ParamSpec;
    public getPointer(): any;
    public getSchar(): number;
    public getString(): string;
    public getUchar(): number;
    public getUint(): number;
    public getUint64(): number;
    public getUlong(): number;
    public getVariant(): GLib.Variant;
    public init(gType: GObject.Type): Value;
    public initFromInstance(instance: TypeInstance): void;
    public peekPointer(): any;
    public reset(): Value;
    public setBoolean(vBoolean: boolean): void;
    public setBoxed(vBoxed: any): void;
    public setBoxedTakeOwnership(vBoxed: any): void;
    public setChar(vChar: string): void;
    public setDouble(vDouble: number): void;
    public setEnum(vEnum: number): void;
    public setFlags(vFlags: number): void;
    public setFloat(vFloat: number): void;
    public setGtype(vGtype: GObject.Type): void;
    public setInstance(instance: any): void;
    public setInt(vInt: number): void;
    public setInt64(vInt64: number): void;
    public setLong(vLong: number): void;
    public setObject(vObject: Object): void;
    public setObjectTakeOwnership(vObject: any): void;
    public setParam(param: ParamSpec): void;
    public setParamTakeOwnership(param: ParamSpec): void;
    public setPointer(vPointer: any): void;
    public setSchar(vChar: number): void;
    public setStaticBoxed(vBoxed: any): void;
    public setStaticString(vString: string): void;
    public setString(vString: string): void;
    public setStringTakeOwnership(vString: string): void;
    public setUchar(vUchar: number): void;
    public setUint(vUint: number): void;
    public setUint64(vUint64: number): void;
    public setUlong(vUlong: number): void;
    public setVariant(variant: GLib.Variant): void;
    public takeBoxed(vBoxed: any): void;
    public takeObject(vObject: any): void;
    public takeParam(param: ParamSpec): void;
    public takeString(vString: string): void;
    public takeVariant(variant: GLib.Variant): void;
    public transform(destValue: Value): boolean;
    public unset(): void;
  }
  
  export class ValueArray {
    public nValues: number;
    public values: Value;
    public nPrealloced: number;
    
    public append(value: Value): ValueArray;
    public copy(): ValueArray;
    public free(): void;
    public getNth(index_: number): Value;
    public insert(index_: number, value: Value): ValueArray;
    public prepend(value: Value): ValueArray;
    public remove(index_: number): ValueArray;
    public sort(compareFunc: GLib.CompareFunc): ValueArray;
    public sortWithData(compareFunc: GLib.CompareDataFunc, userData: any): ValueArray;
  }
  
  export class WeakRef {
    public clear(): void;
    public get(): Object;
    public init(object: Object): void;
    public set(object: Object): void;
  }
  
  export interface TypeCValue {}
  
  export interface _Value__data__union {}
  
  export interface TypePlugin {
    completeInterfaceInfo(instanceType: GObject.Type, interfaceType: GObject.Type, info: InterfaceInfo): void;
    completeTypeInfo(gType: GObject.Type, info: TypeInfo, valueTable: TypeValueTable): void;
    unuse(): void;
    use(): void;
  }
  
  export class Binding extends Object {
    constructor(props?: BindingProps);
    
    flags: BindingFlags;
    source: Object;
    sourceProperty: string;
    target: Object;
    targetProperty: string;
    
    public getFlags(): BindingFlags;
    public getSource(): Object;
    public getSourceProperty(): string;
    public getTarget(): Object;
    public getTargetProperty(): string;
    public unbind(): void;
  }
  
  interface BindingProps extends ObjectProps {
    flags: BindingFlags;
    source: Object;
    sourceProperty: string;
    target: Object;
    targetProperty: string;
  }
  
  export class InitiallyUnowned extends Object {
    constructor(props?: InitiallyUnownedProps);
  }
  
  interface InitiallyUnownedProps extends ObjectProps {
    
  }
  
  export class Object {
    constructor(props?: ObjectProps);
    
    public addToggleRef(notify: ToggleNotify, data: any): void;
    public addWeakPointer(weakPointerLocation: any): void;
    public bindProperty(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags): Binding;
    public bindPropertyFull(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags, transformTo: BindingTransformFunc, transformFrom: BindingTransformFunc, userData: any, notify: GLib.DestroyNotify): Binding;
    public bindPropertyWithClosures(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags, transformTo: Closure, transformFrom: Closure): Binding;
    public connect(signalSpec: string, ...params: any[]): Object;
    public disconnect(signalSpec: string, ...params: any[]): void;
    public dupData(key: string, dupFunc: GLib.DuplicateFunc, userData: any): any;
    public dupQdata(quark: GLib.Quark, dupFunc: GLib.DuplicateFunc, userData: any): any;
    public forceFloating(): void;
    public freezeNotify(): void;
    public get(firstPropertyName: string, ...params: any[]): void;
    public getData(key: string): any;
    public getProperty(propertyName: string, value: Value): void;
    public getQdata(quark: GLib.Quark): any;
    public getValist(firstPropertyName: string, varArgs: any[]): void;
    public isFloating(): boolean;
    public notify(propertyName: string): void;
    public notifyByPspec(pspec: ParamSpec): void;
    public ref(): Object;
    public refSink(): Object;
    public removeToggleRef(notify: ToggleNotify, data: any): void;
    public removeWeakPointer(weakPointerLocation: any): void;
    public replaceData(key: string, oldval: any, newval: any, destroy: GLib.DestroyNotify, oldDestroy: GLib.DestroyNotify): boolean;
    public replaceQdata(quark: GLib.Quark, oldval: any, newval: any, destroy: GLib.DestroyNotify, oldDestroy: GLib.DestroyNotify): boolean;
    public runDispose(): void;
    public set(firstPropertyName: string, ...params: any[]): void;
    public setData(key: string, data: any): void;
    public setDataFull(key: string, data: any, destroy: GLib.DestroyNotify): void;
    public setProperty(propertyName: string, value: Value): void;
    public setQdata(quark: GLib.Quark, data: any): void;
    public setQdataFull(quark: GLib.Quark, data: any, destroy: GLib.DestroyNotify): void;
    public setValist(firstPropertyName: string, varArgs: any[]): void;
    public stealData(key: string): any;
    public stealQdata(quark: GLib.Quark): any;
    public thawNotify(): void;
    public unref(): void;
    public watchClosure(closure: Closure): void;
    public weakRef(notify: WeakNotify, data: any): void;
    public weakUnref(notify: WeakNotify, data: any): void;
    public constructed(): void;
    public dispatchPropertiesChanged(nPspecs: number, pspecs: ParamSpec): void;
    public dispose(): void;
    public finalize(): void;
    
    public static compatControl(what: number, data: any): number;
    public static interfaceFindProperty(gIface: TypeInterface, propertyName: string): ParamSpec;
    public static interfaceInstallProperty(gIface: TypeInterface, pspec: ParamSpec): void;
    public static interfaceListProperties(gIface: TypeInterface, nPropertiesP: number): ParamSpec[];
  }
  
  interface ObjectProps {
    
  }
  
  export class ParamSpec {
    constructor(props?: ParamSpecProps);
    
    public getBlurb(): string;
    public getDefaultValue(): Value;
    public getName(): string;
    public getNameQuark(): GLib.Quark;
    public getNick(): string;
    public getQdata(quark: GLib.Quark): any;
    public getRedirectTarget(): ParamSpec;
    public ref(): ParamSpec;
    public refSink(): ParamSpec;
    public setQdata(quark: GLib.Quark, data: any): void;
    public setQdataFull(quark: GLib.Quark, data: any, destroy: GLib.DestroyNotify): void;
    public sink(): void;
    public stealQdata(quark: GLib.Quark): any;
    public unref(): void;
    public finalize(): void;
    public valueSetDefault(value: Value): void;
    public valueValidate(value: Value): boolean;
    public valuesCmp(value1: Value, value2: Value): number;
    
    public static internal(paramType: GObject.Type, name: string, nick: string, blurb: string, flags: ParamFlags): ParamSpec;
  }
  
  interface ParamSpecProps {
    
  }
  
  export class ParamSpecBoolean extends ParamSpec {
    constructor(props?: ParamSpecBooleanProps);
  }
  
  interface ParamSpecBooleanProps extends ParamSpecProps {
    
  }
  
  export class ParamSpecBoxed extends ParamSpec {
    constructor(props?: ParamSpecBoxedProps);
  }
  
  interface ParamSpecBoxedProps extends ParamSpecProps {
    
  }
  
  export class ParamSpecChar extends ParamSpec {
    constructor(props?: ParamSpecCharProps);
  }
  
  interface ParamSpecCharProps extends ParamSpecProps {
    
  }
  
  export class ParamSpecDouble extends ParamSpec {
    constructor(props?: ParamSpecDoubleProps);
  }
  
  interface ParamSpecDoubleProps extends ParamSpecProps {
    
  }
  
  export class ParamSpecEnum extends ParamSpec {
    constructor(props?: ParamSpecEnumProps);
  }
  
  interface ParamSpecEnumProps extends ParamSpecProps {
    
  }
  
  export class ParamSpecFlags extends ParamSpec {
    constructor(props?: ParamSpecFlagsProps);
  }
  
  interface ParamSpecFlagsProps extends ParamSpecProps {
    
  }
  
  export class ParamSpecFloat extends ParamSpec {
    constructor(props?: ParamSpecFloatProps);
  }
  
  interface ParamSpecFloatProps extends ParamSpecProps {
    
  }
  
  export class ParamSpecGType extends ParamSpec {
    constructor(props?: ParamSpecGTypeProps);
  }
  
  interface ParamSpecGTypeProps extends ParamSpecProps {
    
  }
  
  export class ParamSpecInt extends ParamSpec {
    constructor(props?: ParamSpecIntProps);
  }
  
  interface ParamSpecIntProps extends ParamSpecProps {
    
  }
  
  export class ParamSpecInt64 extends ParamSpec {
    constructor(props?: ParamSpecInt64Props);
  }
  
  interface ParamSpecInt64Props extends ParamSpecProps {
    
  }
  
  export class ParamSpecLong extends ParamSpec {
    constructor(props?: ParamSpecLongProps);
  }
  
  interface ParamSpecLongProps extends ParamSpecProps {
    
  }
  
  export class ParamSpecObject extends ParamSpec {
    constructor(props?: ParamSpecObjectProps);
  }
  
  interface ParamSpecObjectProps extends ParamSpecProps {
    
  }
  
  export class ParamSpecOverride extends ParamSpec {
    constructor(props?: ParamSpecOverrideProps);
  }
  
  interface ParamSpecOverrideProps extends ParamSpecProps {
    
  }
  
  export class ParamSpecParam extends ParamSpec {
    constructor(props?: ParamSpecParamProps);
  }
  
  interface ParamSpecParamProps extends ParamSpecProps {
    
  }
  
  export class ParamSpecPointer extends ParamSpec {
    constructor(props?: ParamSpecPointerProps);
  }
  
  interface ParamSpecPointerProps extends ParamSpecProps {
    
  }
  
  export class ParamSpecString extends ParamSpec {
    constructor(props?: ParamSpecStringProps);
  }
  
  interface ParamSpecStringProps extends ParamSpecProps {
    
  }
  
  export class ParamSpecUChar extends ParamSpec {
    constructor(props?: ParamSpecUCharProps);
  }
  
  interface ParamSpecUCharProps extends ParamSpecProps {
    
  }
  
  export class ParamSpecUInt extends ParamSpec {
    constructor(props?: ParamSpecUIntProps);
  }
  
  interface ParamSpecUIntProps extends ParamSpecProps {
    
  }
  
  export class ParamSpecUInt64 extends ParamSpec {
    constructor(props?: ParamSpecUInt64Props);
  }
  
  interface ParamSpecUInt64Props extends ParamSpecProps {
    
  }
  
  export class ParamSpecULong extends ParamSpec {
    constructor(props?: ParamSpecULongProps);
  }
  
  interface ParamSpecULongProps extends ParamSpecProps {
    
  }
  
  export class ParamSpecUnichar extends ParamSpec {
    constructor(props?: ParamSpecUnicharProps);
  }
  
  interface ParamSpecUnicharProps extends ParamSpecProps {
    
  }
  
  export class ParamSpecValueArray extends ParamSpec {
    constructor(props?: ParamSpecValueArrayProps);
  }
  
  interface ParamSpecValueArrayProps extends ParamSpecProps {
    
  }
  
  export class ParamSpecVariant extends ParamSpec {
    constructor(props?: ParamSpecVariantProps);
  }
  
  interface ParamSpecVariantProps extends ParamSpecProps {
    
  }
  
  export class TypeModule extends Object implements TypePlugin {
    constructor(props?: TypeModuleProps);
    
    public addInterface(instanceType: GObject.Type, interfaceType: GObject.Type, interfaceInfo: InterfaceInfo): void;
    public registerEnum(name: string, constStaticValues: EnumValue): GObject.Type;
    public registerFlags(name: string, constStaticValues: FlagsValue): GObject.Type;
    public registerType(parentType: GObject.Type, typeName: string, typeInfo: TypeInfo, flags: TypeFlags): GObject.Type;
    public setName(name: string): void;
    public unuse(): void;
    public use(): boolean;
    public load(): boolean;
    public unload(): void;
  }
  
  interface TypeModuleProps extends ObjectProps, TypePluginProps {
    
  }

}