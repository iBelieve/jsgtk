declare module "Atk" {
  import * as GObject from 'GObject'
  import * as GLib from 'GLib'
  
  export type AttributeSet = GLib.SList;
  
  export type State = number;
  
  export const BINARY_AGE: number;
  
  export const INTERFACE_AGE: number;
  
  export const MAJOR_VERSION: number;
  
  export const MICRO_VERSION: number;
  
  export const MINOR_VERSION: number;
  
  export const VERSION_MIN_REQUIRED: number;
  
  export function addFocusTracker(focusTracker: EventListener): number;
  
  export function addGlobalEventListener(listener: GObject.SignalEmissionHook, eventType: string): number;
  
  export function addKeyEventListener(listener: KeySnoopFunc, data: any): number;
  
  export function attributeSetFree(attribSet: AttributeSet): void;
  
  export function focusTrackerInit(init: EventListenerInit): void;
  
  export function focusTrackerNotify(object: Object): void;
  
  export function getBinaryAge(): number;
  
  export function getDefaultRegistry(): Registry;
  
  export function getFocusObject(): Object;
  
  export function getInterfaceAge(): number;
  
  export function getMajorVersion(): number;
  
  export function getMicroVersion(): number;
  
  export function getMinorVersion(): number;
  
  export function getRoot(): Object;
  
  export function getToolkitName(): string;
  
  export function getToolkitVersion(): string;
  
  export function getVersion(): string;
  
  export function relationTypeForName(name: string): RelationType;
  
  export function relationTypeGetName(type: RelationType): string;
  
  export function relationTypeRegister(name: string): RelationType;
  
  export function removeFocusTracker(trackerId: number): void;
  
  export function removeGlobalEventListener(listenerId: number): void;
  
  export function removeKeyEventListener(listenerId: number): void;
  
  export function roleForName(name: string): Role;
  
  export function roleGetLocalizedName(role: Role): string;
  
  export function roleGetName(role: Role): string;
  
  export function roleRegister(name: string): Role;
  
  export function stateTypeForName(name: string): StateType;
  
  export function stateTypeGetName(type: StateType): string;
  
  export function stateTypeRegister(name: string): StateType;
  
  export function textAttributeForName(name: string): TextAttribute;
  
  export function textAttributeGetName(attr: TextAttribute): string;
  
  export function textAttributeGetValue(attr: TextAttribute, index_: number): string;
  
  export function textAttributeRegister(name: string): TextAttribute;
  
  export function textFreeRanges(ranges: TextRange[]): void;
  
  export function valueTypeGetLocalizedName(valueType: ValueType): string;
  
  export function valueTypeGetName(valueType: ValueType): string;
  
  export interface EventListener {
  	(obj: Object): void;
  }
  
  export interface EventListenerInit {
  	(): void;
  }
  
  export interface FocusHandler {
  	(object: Object, focusIn: boolean): void;
  }
  
  export interface Function {
  	(userData: any): boolean;
  }
  
  export interface KeySnoopFunc {
  	(event: KeyEventStruct, userData: any): number;
  }
  
  export interface PropertyChangeHandler {
  	(obj: Object, vals: PropertyValues): void;
  }
  
  export enum CoordType {
    SCREEN = 0,
    WINDOW = 1
  }
  
  export enum KeyEventType {
    PRESS = 0,
    RELEASE = 1,
    LAST_DEFINED = 2
  }
  
  export enum Layer {
    INVALID = 0,
    BACKGROUND = 1,
    CANVAS = 2,
    WIDGET = 3,
    MDI = 4,
    POPUP = 5,
    OVERLAY = 6,
    WINDOW = 7
  }
  
  export enum RelationType {
    NULL = 0,
    CONTROLLED_BY = 1,
    CONTROLLER_FOR = 2,
    LABEL_FOR = 3,
    LABELLED_BY = 4,
    MEMBER_OF = 5,
    NODE_CHILD_OF = 6,
    FLOWS_TO = 7,
    FLOWS_FROM = 8,
    SUBWINDOW_OF = 9,
    EMBEDS = 10,
    EMBEDDED_BY = 11,
    POPUP_FOR = 12,
    PARENT_WINDOW_OF = 13,
    DESCRIBED_BY = 14,
    DESCRIPTION_FOR = 15,
    NODE_PARENT_OF = 16,
    LAST_DEFINED = 17
  }
  
  export enum Role {
    INVALID = 0,
    ACCELERATOR_LABEL = 1,
    ALERT = 2,
    ANIMATION = 3,
    ARROW = 4,
    CALENDAR = 5,
    CANVAS = 6,
    CHECK_BOX = 7,
    CHECK_MENU_ITEM = 8,
    COLOR_CHOOSER = 9,
    COLUMN_HEADER = 10,
    COMBO_BOX = 11,
    DATE_EDITOR = 12,
    DESKTOP_ICON = 13,
    DESKTOP_FRAME = 14,
    DIAL = 15,
    DIALOG = 16,
    DIRECTORY_PANE = 17,
    DRAWING_AREA = 18,
    FILE_CHOOSER = 19,
    FILLER = 20,
    FONT_CHOOSER = 21,
    FRAME = 22,
    GLASS_PANE = 23,
    HTML_CONTAINER = 24,
    ICON = 25,
    IMAGE = 26,
    INTERNAL_FRAME = 27,
    LABEL = 28,
    LAYERED_PANE = 29,
    LIST = 30,
    LIST_ITEM = 31,
    MENU = 32,
    MENU_BAR = 33,
    MENU_ITEM = 34,
    OPTION_PANE = 35,
    PAGE_TAB = 36,
    PAGE_TAB_LIST = 37,
    PANEL = 38,
    PASSWORD_TEXT = 39,
    POPUP_MENU = 40,
    PROGRESS_BAR = 41,
    PUSH_BUTTON = 42,
    RADIO_BUTTON = 43,
    RADIO_MENU_ITEM = 44,
    ROOT_PANE = 45,
    ROW_HEADER = 46,
    SCROLL_BAR = 47,
    SCROLL_PANE = 48,
    SEPARATOR = 49,
    SLIDER = 50,
    SPLIT_PANE = 51,
    SPIN_BUTTON = 52,
    STATUSBAR = 53,
    TABLE = 54,
    TABLE_CELL = 55,
    TABLE_COLUMN_HEADER = 56,
    TABLE_ROW_HEADER = 57,
    TEAR_OFF_MENU_ITEM = 58,
    TERMINAL = 59,
    TEXT = 60,
    TOGGLE_BUTTON = 61,
    TOOL_BAR = 62,
    TOOL_TIP = 63,
    TREE = 64,
    TREE_TABLE = 65,
    UNKNOWN = 66,
    VIEWPORT = 67,
    WINDOW = 68,
    HEADER = 69,
    FOOTER = 70,
    PARAGRAPH = 71,
    RULER = 72,
    APPLICATION = 73,
    AUTOCOMPLETE = 74,
    EDIT_BAR = 75,
    EMBEDDED = 76,
    ENTRY = 77,
    CHART = 78,
    CAPTION = 79,
    DOCUMENT_FRAME = 80,
    HEADING = 81,
    PAGE = 82,
    SECTION = 83,
    REDUNDANT_OBJECT = 84,
    FORM = 85,
    LINK = 86,
    INPUT_METHOD_WINDOW = 87,
    TABLE_ROW = 88,
    TREE_ITEM = 89,
    DOCUMENT_SPREADSHEET = 90,
    DOCUMENT_PRESENTATION = 91,
    DOCUMENT_TEXT = 92,
    DOCUMENT_WEB = 93,
    DOCUMENT_EMAIL = 94,
    COMMENT = 95,
    LIST_BOX = 96,
    GROUPING = 97,
    IMAGE_MAP = 98,
    NOTIFICATION = 99,
    INFO_BAR = 100,
    LEVEL_BAR = 101,
    TITLE_BAR = 102,
    BLOCK_QUOTE = 103,
    AUDIO = 104,
    VIDEO = 105,
    DEFINITION = 106,
    ARTICLE = 107,
    LANDMARK = 108,
    LOG = 109,
    MARQUEE = 110,
    MATH = 111,
    RATING = 112,
    TIMER = 113,
    DESCRIPTION_LIST = 114,
    DESCRIPTION_TERM = 115,
    DESCRIPTION_VALUE = 116,
    STATIC = 117,
    MATH_FRACTION = 118,
    MATH_ROOT = 119,
    SUBSCRIPT = 120,
    SUPERSCRIPT = 121,
    LAST_DEFINED = 122
  }
  
  export enum StateType {
    INVALID = 0,
    ACTIVE = 1,
    ARMED = 2,
    BUSY = 3,
    CHECKED = 4,
    DEFUNCT = 5,
    EDITABLE = 6,
    ENABLED = 7,
    EXPANDABLE = 8,
    EXPANDED = 9,
    FOCUSABLE = 10,
    FOCUSED = 11,
    HORIZONTAL = 12,
    ICONIFIED = 13,
    MODAL = 14,
    MULTI_LINE = 15,
    MULTISELECTABLE = 16,
    OPAQUE = 17,
    PRESSED = 18,
    RESIZABLE = 19,
    SELECTABLE = 20,
    SELECTED = 21,
    SENSITIVE = 22,
    SHOWING = 23,
    SINGLE_LINE = 24,
    STALE = 25,
    TRANSIENT = 26,
    VERTICAL = 27,
    VISIBLE = 28,
    MANAGES_DESCENDANTS = 29,
    INDETERMINATE = 30,
    TRUNCATED = 31,
    REQUIRED = 32,
    INVALID_ENTRY = 33,
    SUPPORTS_AUTOCOMPLETION = 34,
    SELECTABLE_TEXT = 35,
    DEFAULT = 36,
    ANIMATED = 37,
    VISITED = 38,
    CHECKABLE = 39,
    HAS_POPUP = 40,
    HAS_TOOLTIP = 41,
    READ_ONLY = 42,
    LAST_DEFINED = 43
  }
  
  export enum TextAttribute {
    INVALID = 0,
    LEFT_MARGIN = 1,
    RIGHT_MARGIN = 2,
    INDENT = 3,
    INVISIBLE = 4,
    EDITABLE = 5,
    PIXELS_ABOVE_LINES = 6,
    PIXELS_BELOW_LINES = 7,
    PIXELS_INSIDE_WRAP = 8,
    BG_FULL_HEIGHT = 9,
    RISE = 10,
    UNDERLINE = 11,
    STRIKETHROUGH = 12,
    SIZE = 13,
    SCALE = 14,
    WEIGHT = 15,
    LANGUAGE = 16,
    FAMILY_NAME = 17,
    BG_COLOR = 18,
    FG_COLOR = 19,
    BG_STIPPLE = 20,
    FG_STIPPLE = 21,
    WRAP_MODE = 22,
    DIRECTION = 23,
    JUSTIFICATION = 24,
    STRETCH = 25,
    VARIANT = 26,
    STYLE = 27,
    LAST_DEFINED = 28
  }
  
  export enum TextBoundary {
    CHAR = 0,
    WORD_START = 1,
    WORD_END = 2,
    SENTENCE_START = 3,
    SENTENCE_END = 4,
    LINE_START = 5,
    LINE_END = 6
  }
  
  export enum TextClipType {
    NONE = 0,
    MIN = 1,
    MAX = 2,
    BOTH = 3
  }
  
  export enum TextGranularity {
    CHAR = 0,
    WORD = 1,
    SENTENCE = 2,
    LINE = 3,
    PARAGRAPH = 4
  }
  
  export enum ValueType {
    VERY_WEAK = 0,
    WEAK = 1,
    ACCEPTABLE = 2,
    STRONG = 3,
    VERY_STRONG = 4,
    VERY_LOW = 5,
    LOW = 6,
    MEDIUM = 7,
    HIGH = 8,
    VERY_HIGH = 9,
    VERY_BAD = 10,
    BAD = 11,
    GOOD = 12,
    VERY_GOOD = 13,
    BEST = 14,
    LAST_DEFINED = 15
  }
  
  export enum HyperlinkStateFlags {
    INLINE = 1
  }
  
  export class ActionIface {
    public parent?: GObject.TypeInterface;
    
    doAction : { (action: Action, i: number): boolean; };
    getNActions : { (action: Action): number; };
    getDescription : { (action: Action, i: number): string; };
    getName : { (action: Action, i: number): string; };
    getKeybinding : { (action: Action, i: number): string; };
    setDescription : { (action: Action, i: number, desc: string): boolean; };
    getLocalizedName : { (action: Action, i: number): string; };
  }
  
  export class Attribute {
    public name?: string;
    public value?: string;
  }
  
  export class ComponentIface {
    public parent?: GObject.TypeInterface;
    
    addFocusHandler : { (component: Component, handler: FocusHandler): number; };
    contains : { (component: Component, x: number, _y: number, coordType: CoordType): boolean; };
    refAccessibleAtPoint : { (component: Component, x: number, _y: number, coordType: CoordType): Object; };
    getExtents : { (component: Component, x: number, _y: number, width: number, height: number, coordType: CoordType): void; };
    getPosition : { (component: Component, x: number, _y: number, coordType: CoordType): void; };
    getSize : { (component: Component, width: number, height: number): void; };
    grabFocus : { (component: Component): boolean; };
    removeFocusHandler : { (component: Component, handlerId: number): void; };
    setExtents : { (component: Component, x: number, _y: number, width: number, height: number, coordType: CoordType): boolean; };
    setPosition : { (component: Component, x: number, _y: number, coordType: CoordType): boolean; };
    setSize : { (component: Component, width: number, height: number): boolean; };
    getLayer : { (component: Component): Layer; };
    getMdiZorder : { (component: Component): number; };
    boundsChanged : { (component: Component, bounds: Rectangle): void; };
    getAlpha : { (component: Component): number; };
  }
  
  export class DocumentIface {
    public parent?: GObject.TypeInterface;
    
    getDocumentType : { (document: Document): string; };
    getDocument : { (document: Document): any; };
    getDocumentLocale : { (document: Document): string; };
    getDocumentAttributes : { (document: Document): AttributeSet; };
    getDocumentAttributeValue : { (document: Document, attributeName: string): string; };
    setDocumentAttribute : { (document: Document, attributeName: string, attributeValue: string): boolean; };
    getCurrentPageNumber : { (document: Document): number; };
    getPageCount : { (document: Document): number; };
  }
  
  export class EditableTextIface {
    public parentInterface?: GObject.TypeInterface;
    
    setRunAttributes : { (text: EditableText, attribSet: AttributeSet, startOffset: number, endOffset: number): boolean; };
    setTextContents : { (text: EditableText, string: string): void; };
    insertText : { (text: EditableText, string: string, length: number, position: number): void; };
    copyText : { (text: EditableText, startPos: number, endPos: number): void; };
    cutText : { (text: EditableText, startPos: number, endPos: number): void; };
    deleteText : { (text: EditableText, startPos: number, endPos: number): void; };
    pasteText : { (text: EditableText, position: number): void; };
  }
  
  export class GObjectAccessibleClass {
    public parentClass?: ObjectClass;
    public pad1?: Function;
    public pad2?: Function;
  }
  
  export class HyperlinkClass {
    public parent?: GObject.ObjectClass;
    public pad1?: Function;
    
    getUri : { (link_: Hyperlink, i: number): string; };
    getObject : { (link_: Hyperlink, i: number): Object; };
    getEndIndex : { (link_: Hyperlink): number; };
    getStartIndex : { (link_: Hyperlink): number; };
    isValid : { (link_: Hyperlink): boolean; };
    getNAnchors : { (link_: Hyperlink): number; };
    linkState : { (link_: Hyperlink): number; };
    isSelectedLink : { (link_: Hyperlink): boolean; };
    linkActivated : { (link_: Hyperlink): void; };
  }
  
  export class HyperlinkImplIface {
    public parent?: GObject.TypeInterface;
    
    getHyperlink : { (impl: HyperlinkImpl): Hyperlink; };
  }
  
  export class HypertextIface {
    public parent?: GObject.TypeInterface;
    
    getLink : { (hypertext: Hypertext, linkIndex: number): Hyperlink; };
    getNLinks : { (hypertext: Hypertext): number; };
    getLinkIndex : { (hypertext: Hypertext, charIndex: number): number; };
    linkSelected : { (hypertext: Hypertext, linkIndex: number): void; };
  }
  
  export class ImageIface {
    public parent?: GObject.TypeInterface;
    
    getImagePosition : { (image: Image, x: number, _y: number, coordType: CoordType): void; };
    getImageDescription : { (image: Image): string; };
    getImageSize : { (image: Image, width: number, height: number): void; };
    setImageDescription : { (image: Image, description: string): boolean; };
    getImageLocale : { (image: Image): string; };
  }
  
  export class Implementor {
    public refAccessible(): Object;
  }
  
  export class KeyEventStruct {
    public type?: number;
    public state?: number;
    public keyval?: number;
    public length?: number;
    public string?: string;
    public keycode?: number;
    public timestamp?: number;
  }
  
  export class MiscClass {
    public parent?: GObject.ObjectClass;
    public vfuncs?: any[];
    
    threadsEnter : { (misc: Misc): void; };
    threadsLeave : { (misc: Misc): void; };
  }
  
  export class NoOpObjectClass {
    public parentClass?: ObjectClass;
  }
  
  export class NoOpObjectFactoryClass {
    public parentClass?: ObjectFactoryClass;
  }
  
  export class ObjectClass {
    public parent?: GObject.ObjectClass;
    public pad1?: Function;
    
    getName : { (accessible: Object): string; };
    getDescription : { (accessible: Object): string; };
    getParent : { (accessible: Object): Object; };
    getNChildren : { (accessible: Object): number; };
    refChild : { (accessible: Object, i: number): Object; };
    getIndexInParent : { (accessible: Object): number; };
    refRelationSet : { (accessible: Object): RelationSet; };
    getRole : { (accessible: Object): Role; };
    getLayer : { (accessible: Object): Layer; };
    getMdiZorder : { (accessible: Object): number; };
    refStateSet : { (accessible: Object): StateSet; };
    setName : { (accessible: Object, name: string): void; };
    setDescription : { (accessible: Object, description: string): void; };
    setParent : { (accessible: Object, parent: Object): void; };
    setRole : { (accessible: Object, role: Role): void; };
    connectPropertyChangeHandler : { (accessible: Object, handler: PropertyChangeHandler): number; };
    removePropertyChangeHandler : { (accessible: Object, handlerId: number): void; };
    initialize : { (accessible: Object, data: any): void; };
    childrenChanged : { (accessible: Object, changeIndex: number, changedChild: any): void; };
    focusEvent : { (accessible: Object, focusIn: boolean): void; };
    propertyChange : { (accessible: Object, values: PropertyValues): void; };
    stateChange : { (accessible: Object, name: string, stateSet: boolean): void; };
    visibleDataChanged : { (accessible: Object): void; };
    activeDescendantChanged : { (accessible: Object, child: any): void; };
    getAttributes : { (accessible: Object): AttributeSet; };
    getObjectLocale : { (accessible: Object): string; };
  }
  
  export class ObjectFactoryClass {
    public parentClass?: GObject.ObjectClass;
    public pad1?: Function;
    public pad2?: Function;
    
    createAccessible : { (obj: GObject.Object): Object; };
    invalidate : { (factory: ObjectFactory): void; };
    getAccessibleType : { (): GObject.Type; };
  }
  
  export class PlugClass {
    public parentClass?: ObjectClass;
    
    getObjectId : { (obj: Plug): string; };
  }
  
  export class PropertyValues {
    public propertyName?: string;
    public oldValue?: GObject.Value;
    public newValue?: GObject.Value;
  }
  
  export class Range {
    public copy(): Range;
    public free(): void;
    public getDescription(): string;
    public getLowerLimit(): number;
    public getUpperLimit(): number;
  }
  
  export class Rectangle {
    public x?: number;
    public y?: number;
    public width?: number;
    public height?: number;
  }
  
  export class RegistryClass {
    public parentClass?: GObject.ObjectClass;
  }
  
  export class RelationClass {
    public parent?: GObject.ObjectClass;
  }
  
  export class RelationSetClass {
    public parent?: GObject.ObjectClass;
    public pad1?: Function;
    public pad2?: Function;
  }
  
  export class SelectionIface {
    public parent?: GObject.TypeInterface;
    
    addSelection : { (selection: Selection, i: number): boolean; };
    clearSelection : { (selection: Selection): boolean; };
    refSelection : { (selection: Selection, i: number): Object; };
    getSelectionCount : { (selection: Selection): number; };
    isChildSelected : { (selection: Selection, i: number): boolean; };
    removeSelection : { (selection: Selection, i: number): boolean; };
    selectAllSelection : { (selection: Selection): boolean; };
    selectionChanged : { (selection: Selection): void; };
  }
  
  export class SocketClass {
    public parentClass?: ObjectClass;
    
    embed : { (obj: Socket, plugId: string): void; };
  }
  
  export class StateSetClass {
    public parent?: GObject.ObjectClass;
  }
  
  export class StreamableContentIface {
    public parent?: GObject.TypeInterface;
    public pad1?: Function;
    public pad2?: Function;
    public pad3?: Function;
    
    getNMimeTypes : { (streamable: StreamableContent): number; };
    getMimeType : { (streamable: StreamableContent, i: number): string; };
    getStream : { (streamable: StreamableContent, mimeType: string): GLib.IOChannel; };
    getUri : { (streamable: StreamableContent, mimeType: string): string; };
  }
  
  export class TableCellIface {
    public parent?: GObject.TypeInterface;
    
    getColumnSpan : { (cell: TableCell): number; };
    getColumnHeaderCells : { (cell: TableCell): Object[]; };
    getPosition : { (cell: TableCell, _row: number, column: number): boolean; };
    getRowSpan : { (cell: TableCell): number; };
    getRowHeaderCells : { (cell: TableCell): Object[]; };
    getRowColumnSpan : { (cell: TableCell, _row: number, column: number, rowSpan: number, columnSpan: number): boolean; };
    getTable : { (cell: TableCell): Object; };
  }
  
  export class TableIface {
    public parent?: GObject.TypeInterface;
    
    refAt : { (table: Table, _row: number, column: number): Object; };
    getIndexAt : { (table: Table, _row: number, column: number): number; };
    getColumnAtIndex : { (table: Table, index_: number): number; };
    getRowAtIndex : { (table: Table, index_: number): number; };
    getNColumns : { (table: Table): number; };
    getNRows : { (table: Table): number; };
    getColumnExtentAt : { (table: Table, _row: number, column: number): number; };
    getRowExtentAt : { (table: Table, _row: number, column: number): number; };
    getCaption : { (table: Table): Object; };
    getColumnDescription : { (table: Table, column: number): string; };
    getColumnHeader : { (table: Table, column: number): Object; };
    getRowDescription : { (table: Table, _row: number): string; };
    getRowHeader : { (table: Table, _row: number): Object; };
    getSummary : { (table: Table): Object; };
    setCaption : { (table: Table, caption: Object): void; };
    setColumnDescription : { (table: Table, column: number, description: string): void; };
    setColumnHeader : { (table: Table, column: number, header: Object): void; };
    setRowDescription : { (table: Table, _row: number, description: string): void; };
    setRowHeader : { (table: Table, _row: number, header: Object): void; };
    setSummary : { (table: Table, accessible: Object): void; };
    getSelectedColumns : { (table: Table, selected: number): number; };
    getSelectedRows : { (table: Table, selected: number): number; };
    isColumnSelected : { (table: Table, column: number): boolean; };
    isRowSelected : { (table: Table, _row: number): boolean; };
    isSelected : { (table: Table, _row: number, column: number): boolean; };
    addRowSelection : { (table: Table, _row: number): boolean; };
    removeRowSelection : { (table: Table, _row: number): boolean; };
    addColumnSelection : { (table: Table, column: number): boolean; };
    removeColumnSelection : { (table: Table, column: number): boolean; };
    rowInserted : { (table: Table, _row: number, numInserted: number): void; };
    columnInserted : { (table: Table, column: number, numInserted: number): void; };
    rowDeleted : { (table: Table, _row: number, numDeleted: number): void; };
    columnDeleted : { (table: Table, column: number, numDeleted: number): void; };
    rowReordered : { (table: Table): void; };
    columnReordered : { (table: Table): void; };
    modelChanged : { (table: Table): void; };
  }
  
  export class TextIface {
    public parent?: GObject.TypeInterface;
    
    getText : { (text: Text, startOffset: number, endOffset: number): string; };
    getTextAfterOffset : { (text: Text, offset: number, boundaryType: TextBoundary, startOffset: number, endOffset: number): string; };
    getTextAtOffset : { (text: Text, offset: number, boundaryType: TextBoundary, startOffset: number, endOffset: number): string; };
    getCharacterAtOffset : { (text: Text, offset: number): string; };
    getTextBeforeOffset : { (text: Text, offset: number, boundaryType: TextBoundary, startOffset: number, endOffset: number): string; };
    getCaretOffset : { (text: Text): number; };
    getRunAttributes : { (text: Text, offset: number, startOffset: number, endOffset: number): AttributeSet; };
    getDefaultAttributes : { (text: Text): AttributeSet; };
    getCharacterExtents : { (text: Text, offset: number, x: number, _y: number, width: number, height: number, coords: CoordType): void; };
    getCharacterCount : { (text: Text): number; };
    getOffsetAtPoint : { (text: Text, x: number, _y: number, coords: CoordType): number; };
    getNSelections : { (text: Text): number; };
    getSelection : { (text: Text, selectionNum: number, startOffset: number, endOffset: number): string; };
    addSelection : { (text: Text, startOffset: number, endOffset: number): boolean; };
    removeSelection : { (text: Text, selectionNum: number): boolean; };
    setSelection : { (text: Text, selectionNum: number, startOffset: number, endOffset: number): boolean; };
    setCaretOffset : { (text: Text, offset: number): boolean; };
    textChanged : { (text: Text, position: number, length: number): void; };
    textCaretMoved : { (text: Text, location: number): void; };
    textSelectionChanged : { (text: Text): void; };
    textAttributesChanged : { (text: Text): void; };
    getRangeExtents : { (text: Text, startOffset: number, endOffset: number, coordType: CoordType, rect: TextRectangle): void; };
    getBoundedRanges : { (text: Text, rect: TextRectangle, coordType: CoordType, xClipType: TextClipType, yClipType: TextClipType): TextRange; };
    getStringAtOffset : { (text: Text, offset: number, granularity: TextGranularity, startOffset: number, endOffset: number): string; };
  }
  
  export class TextRange {
    public bounds?: TextRectangle;
    public startOffset?: number;
    public endOffset?: number;
    public content?: string;
  }
  
  export class TextRectangle {
    public x?: number;
    public y?: number;
    public width?: number;
    public height?: number;
  }
  
  export class UtilClass {
    public parent?: GObject.ObjectClass;
    
    addGlobalEventListener : { (listener: GObject.SignalEmissionHook, eventType: string): number; };
    removeGlobalEventListener : { (listenerId: number): void; };
    addKeyEventListener : { (listener: KeySnoopFunc, data: any): number; };
    removeKeyEventListener : { (listenerId: number): void; };
    getRoot : { (): Object; };
    getToolkitName : { (): string; };
    getToolkitVersion : { (): string; };
  }
  
  export class ValueIface {
    public parent?: GObject.TypeInterface;
    
    getCurrentValue : { (obj: Value, value: GObject.Value): void; };
    getMaximumValue : { (obj: Value, value: GObject.Value): void; };
    getMinimumValue : { (obj: Value, value: GObject.Value): void; };
    setCurrentValue : { (obj: Value, value: GObject.Value): boolean; };
    getMinimumIncrement : { (obj: Value, value: GObject.Value): void; };
    getValueAndText : { (obj: Value, value: number, text: string): void; };
    getRange : { (obj: Value): Range; };
    getIncrement : { (obj: Value): number; };
    getSubRanges : { (obj: Value): GLib.SList; };
    setValue : { (obj: Value, newValue: number): void; };
  }
  
  export class WindowIface {
    public parent?: GObject.TypeInterface;
  }
  
  export interface Action {
    doAction(i: number): boolean;
    getDescription(i: number): string;
    getKeybinding(i: number): string;
    getLocalizedName(i: number): string;
    getNActions(): number;
    getName(i: number): string;
    setDescription(i: number, desc: string): boolean;
  }
  
  export interface Component {
    addFocusHandler(handler: FocusHandler): number;
    contains(x: number, _y: number, coordType: CoordType): boolean;
    getAlpha(): number;
    getExtents(x: number, _y: number, width: number, height: number, coordType: CoordType): void;
    getLayer(): Layer;
    getMdiZorder(): number;
    getPosition(x: number, _y: number, coordType: CoordType): void;
    getSize(width: number, height: number): void;
    grabFocus(): boolean;
    refAccessibleAtPoint(x: number, _y: number, coordType: CoordType): Object;
    removeFocusHandler(handlerId: number): void;
    setExtents(x: number, _y: number, width: number, height: number, coordType: CoordType): boolean;
    setPosition(x: number, _y: number, coordType: CoordType): boolean;
    setSize(width: number, height: number): boolean;
    boundsChanged(bounds: Rectangle): void;
  }
  
  export interface Document {
    getAttributeValue(attributeName: string): string;
    getAttributes(): AttributeSet;
    getCurrentPageNumber(): number;
    getDocument(): any;
    getDocumentType(): string;
    getLocale(): string;
    getPageCount(): number;
    setAttributeValue(attributeName: string, attributeValue: string): boolean;
    getDocumentAttributeValue(attributeName: string): string;
    getDocumentAttributes(): AttributeSet;
    getDocumentLocale(): string;
    setDocumentAttribute(attributeName: string, attributeValue: string): boolean;
  }
  
  export interface EditableText {
    copyText(startPos: number, endPos: number): void;
    cutText(startPos: number, endPos: number): void;
    deleteText(startPos: number, endPos: number): void;
    insertText(string: string, length: number, position: number): void;
    pasteText(position: number): void;
    setRunAttributes(attribSet: AttributeSet, startOffset: number, endOffset: number): boolean;
    setTextContents(string: string): void;
  }
  
  export interface HyperlinkImpl {
    getHyperlink(): Hyperlink;
  }
  
  export interface Hypertext {
    getLink(linkIndex: number): Hyperlink;
    getLinkIndex(charIndex: number): number;
    getNLinks(): number;
    linkSelected(linkIndex: number): void;
  }
  
  export interface Image {
    getImageDescription(): string;
    getImageLocale(): string;
    getImagePosition(x: number, _y: number, coordType: CoordType): void;
    getImageSize(width: number, height: number): void;
    setImageDescription(description: string): boolean;
  }
  
  export interface ImplementorIface {
    
  }
  
  export interface Selection {
    addSelection(i: number): boolean;
    clearSelection(): boolean;
    getSelectionCount(): number;
    isChildSelected(i: number): boolean;
    refSelection(i: number): Object;
    removeSelection(i: number): boolean;
    selectAllSelection(): boolean;
    selectionChanged(): void;
  }
  
  export interface StreamableContent {
    getMimeType(i: number): string;
    getNMimeTypes(): number;
    getStream(mimeType: string): GLib.IOChannel;
    getUri(mimeType: string): string;
  }
  
  export interface Table {
    addColumnSelection(column: number): boolean;
    addRowSelection(_row: number): boolean;
    getCaption(): Object;
    getColumnAtIndex(index_: number): number;
    getColumnDescription(column: number): string;
    getColumnExtentAt(_row: number, column: number): number;
    getColumnHeader(column: number): Object;
    getIndexAt(_row: number, column: number): number;
    getNColumns(): number;
    getNRows(): number;
    getRowAtIndex(index_: number): number;
    getRowDescription(_row: number): string;
    getRowExtentAt(_row: number, column: number): number;
    getRowHeader(_row: number): Object;
    getSelectedColumns(selected: number): number;
    getSelectedRows(selected: number): number;
    getSummary(): Object;
    isColumnSelected(column: number): boolean;
    isRowSelected(_row: number): boolean;
    isSelected(_row: number, column: number): boolean;
    refAt(_row: number, column: number): Object;
    removeColumnSelection(column: number): boolean;
    removeRowSelection(_row: number): boolean;
    setCaption(caption: Object): void;
    setColumnDescription(column: number, description: string): void;
    setColumnHeader(column: number, header: Object): void;
    setRowDescription(_row: number, description: string): void;
    setRowHeader(_row: number, header: Object): void;
    setSummary(accessible: Object): void;
    columnDeleted(column: number, numDeleted: number): void;
    columnInserted(column: number, numInserted: number): void;
    columnReordered(): void;
    modelChanged(): void;
    rowDeleted(_row: number, numDeleted: number): void;
    rowInserted(_row: number, numInserted: number): void;
    rowReordered(): void;
  }
  
  export interface TableCell {
    getColumnHeaderCells(): Object[];
    getColumnSpan(): number;
    getPosition(_row: number, column: number): boolean;
    getRowColumnSpan(_row: number, column: number, rowSpan: number, columnSpan: number): boolean;
    getRowHeaderCells(): Object[];
    getRowSpan(): number;
    getTable(): Object;
  }
  
  export interface Text {
    addSelection(startOffset: number, endOffset: number): boolean;
    getBoundedRanges(rect: TextRectangle, coordType: CoordType, xClipType: TextClipType, yClipType: TextClipType): TextRange[];
    getCaretOffset(): number;
    getCharacterAtOffset(offset: number): string;
    getCharacterCount(): number;
    getCharacterExtents(offset: number, x: number, _y: number, width: number, height: number, coords: CoordType): void;
    getDefaultAttributes(): AttributeSet;
    getNSelections(): number;
    getOffsetAtPoint(x: number, _y: number, coords: CoordType): number;
    getRangeExtents(startOffset: number, endOffset: number, coordType: CoordType, rect: TextRectangle): void;
    getRunAttributes(offset: number, startOffset: number, endOffset: number): AttributeSet;
    getSelection(selectionNum: number, startOffset: number, endOffset: number): string;
    getStringAtOffset(offset: number, granularity: TextGranularity, startOffset: number, endOffset: number): string;
    getText(startOffset: number, endOffset: number): string;
    getTextAfterOffset(offset: number, boundaryType: TextBoundary, startOffset: number, endOffset: number): string;
    getTextAtOffset(offset: number, boundaryType: TextBoundary, startOffset: number, endOffset: number): string;
    getTextBeforeOffset(offset: number, boundaryType: TextBoundary, startOffset: number, endOffset: number): string;
    removeSelection(selectionNum: number): boolean;
    setCaretOffset(offset: number): boolean;
    setSelection(selectionNum: number, startOffset: number, endOffset: number): boolean;
    textAttributesChanged(): void;
    textCaretMoved(location: number): void;
    textChanged(position: number, length: number): void;
    textSelectionChanged(): void;
    
    static freeRanges(ranges: TextRange[]): void;
  }
  
  export interface Value {
    getCurrentValue(value: GObject.Value): void;
    getIncrement(): number;
    getMaximumValue(value: GObject.Value): void;
    getMinimumIncrement(value: GObject.Value): void;
    getMinimumValue(value: GObject.Value): void;
    getRange(): Range;
    getSubRanges(): GLib.SList;
    getValueAndText(value: number, text: string): void;
    setCurrentValue(value: GObject.Value): boolean;
    setValue(newValue: number): void;
  }
  
  export interface Window {
    
  }
  
  export class GObjectAccessible extends Object {
    constructor(props?: GObjectAccessibleProps);
    
    public getObject(): GObject.Object;
    
    public static forObject(obj: GObject.Object): Object;
  }
  
  interface GObjectAccessibleProps extends ObjectProps {
    
  }
  
  export class Hyperlink extends GObject.Object implements Action {
    constructor(props?: HyperlinkProps);
    
    endIndex?: number;
    numberOfAnchors?: number;
    selectedLink?: boolean;
    startIndex?: number;
    
    public getEndIndex(): number;
    public getNAnchors(): number;
    public getObject(i: number): Object;
    public getStartIndex(): number;
    public getUri(i: number): string;
    public isInline(): boolean;
    public isSelectedLink(): boolean;
    public isValid(): boolean;
    public linkActivated(): void;
    public linkState(): number;
    
    public on(event: 'linkActivated', listener: () => void): this;
  }
  
  interface HyperlinkProps extends GObject.ObjectProps, ActionProps {
    endIndex?: number;
    numberOfAnchors?: number;
    selectedLink?: boolean;
    startIndex?: number;
  }
  
  export class Misc extends GObject.Object {
    constructor(props?: MiscProps);
    
    public threadsEnter(): void;
    public threadsLeave(): void;
    
    public static getInstance(): Misc;
  }
  
  interface MiscProps extends GObject.ObjectProps {
    
  }
  
  export class NoOpObject extends Object implements Action, Component, Document, EditableText, Hypertext, Image, Selection, Table, TableCell, Text, Value, Window {
    constructor(props?: NoOpObjectProps);
  }
  
  interface NoOpObjectProps extends ObjectProps, ActionProps, ComponentProps, DocumentProps, EditableTextProps, HypertextProps, ImageProps, SelectionProps, TableProps, TableCellProps, TextProps, ValueProps, WindowProps {
    
  }
  
  export class NoOpObjectFactory extends ObjectFactory {
    constructor(props?: NoOpObjectFactoryProps);
  }
  
  interface NoOpObjectFactoryProps extends ObjectFactoryProps {
    
  }
  
  export class Object extends GObject.Object {
    constructor(props?: ObjectProps);
    
    accessibleComponentLayer?: number;
    accessibleComponentMdiZorder?: number;
    accessibleDescription?: string;
    accessibleHypertextNlinks?: number;
    accessibleName?: string;
    accessibleParent?: Object;
    accessibleRole?: number;
    accessibleTableCaption?: string;
    accessibleTableCaptionObject?: Object;
    accessibleTableColumnDescription?: string;
    accessibleTableColumnHeader?: Object;
    accessibleTableRowDescription?: string;
    accessibleTableRowHeader?: Object;
    accessibleTableSummary?: Object;
    accessibleValue?: number;
    
    public addRelationship(relationship: RelationType, target: Object): boolean;
    public connectPropertyChangeHandler(handler: PropertyChangeHandler): number;
    public getAttributes(): AttributeSet;
    public getDescription(): string;
    public getIndexInParent(): number;
    public getLayer(): Layer;
    public getMdiZorder(): number;
    public getNAccessibleChildren(): number;
    public getName(): string;
    public getObjectLocale(): string;
    public getParent(): Object;
    public getRole(): Role;
    public initialize(data: any): void;
    public notifyStateChange(state: State, value: boolean): void;
    public peekParent(): Object;
    public refAccessibleChild(i: number): Object;
    public refRelationSet(): RelationSet;
    public refStateSet(): StateSet;
    public removePropertyChangeHandler(handlerId: number): void;
    public removeRelationship(relationship: RelationType, target: Object): boolean;
    public setDescription(description: string): void;
    public setName(name: string): void;
    public setParent(parent: Object): void;
    public setRole(role: Role): void;
    public activeDescendantChanged(child: any): void;
    public childrenChanged(changeIndex: number, changedChild: any): void;
    public focusEvent(focusIn: boolean): void;
    public getNChildren(): number;
    public propertyChange(values: PropertyValues): void;
    public refChild(i: number): Object;
    public stateChange(name: string, stateSet: boolean): void;
    public visibleDataChanged(): void;
    
    public on(event: 'activeDescendantChanged', listener: (arg1: any) => void): this;
    public on(event: 'childrenChanged', listener: (arg1: number, arg2: any) => void): this;
    public on(event: 'focusEvent', listener: (arg1: boolean) => void): this;
    public on(event: 'propertyChange', listener: (arg1: any) => void): this;
    public on(event: 'stateChange', listener: (arg1: string, arg2: boolean) => void): this;
    public on(event: 'visibleDataChanged', listener: () => void): this;
  }
  
  interface ObjectProps extends GObject.ObjectProps {
    accessibleComponentLayer?: number;
    accessibleComponentMdiZorder?: number;
    accessibleDescription?: string;
    accessibleHypertextNlinks?: number;
    accessibleName?: string;
    accessibleParent?: Object;
    accessibleRole?: number;
    accessibleTableCaption?: string;
    accessibleTableCaptionObject?: Object;
    accessibleTableColumnDescription?: string;
    accessibleTableColumnHeader?: Object;
    accessibleTableRowDescription?: string;
    accessibleTableRowHeader?: Object;
    accessibleTableSummary?: Object;
    accessibleValue?: number;
  }
  
  export class ObjectFactory extends GObject.Object {
    constructor(props?: ObjectFactoryProps);
    
    public createAccessible(obj: GObject.Object): Object;
    public getAccessibleType(): GObject.Type;
    public invalidate(): void;
  }
  
  interface ObjectFactoryProps extends GObject.ObjectProps {
    
  }
  
  export class Plug extends Object implements Component {
    constructor(props?: PlugProps);
    
    public getId(): string;
    public getObjectId(): string;
  }
  
  interface PlugProps extends ObjectProps, ComponentProps {
    
  }
  
  export class Registry extends GObject.Object {
    constructor(props?: RegistryProps);
    
    public getFactory(type: GObject.Type): ObjectFactory;
    public getFactoryType(type: GObject.Type): GObject.Type;
    public setFactoryType(type: GObject.Type, factoryType: GObject.Type): void;
  }
  
  interface RegistryProps extends GObject.ObjectProps {
    
  }
  
  export class Relation extends GObject.Object {
    constructor(props?: RelationProps);
    
    relationType?: RelationType;
    target?: GObject.ValueArray;
    
    public addTarget(target: Object): void;
    public getRelationType(): RelationType;
    public getTarget(): Object[];
    public removeTarget(target: Object): boolean;
  }
  
  interface RelationProps extends GObject.ObjectProps {
    relationType?: RelationType;
    target?: GObject.ValueArray;
  }
  
  export class RelationSet extends GObject.Object {
    constructor(props?: RelationSetProps);
    
    public add(relation: Relation): void;
    public addRelationByType(relationship: RelationType, target: Object): void;
    public contains(relationship: RelationType): boolean;
    public containsTarget(relationship: RelationType, target: Object): boolean;
    public getNRelations(): number;
    public getRelation(i: number): Relation;
    public getRelationByType(relationship: RelationType): Relation;
    public remove(relation: Relation): void;
  }
  
  interface RelationSetProps extends GObject.ObjectProps {
    
  }
  
  export class Socket extends Object implements Component {
    constructor(props?: SocketProps);
    
    public embed(plugId: string): void;
    public isOccupied(): boolean;
  }
  
  interface SocketProps extends ObjectProps, ComponentProps {
    
  }
  
  export class StateSet extends GObject.Object {
    constructor(props?: StateSetProps);
    
    public addState(type: StateType): boolean;
    public addStates(types: StateType[], nTypes: number): void;
    public andSets(compareSet: StateSet): StateSet;
    public clearStates(): void;
    public containsState(type: StateType): boolean;
    public containsStates(types: StateType[], nTypes: number): boolean;
    public isEmpty(): boolean;
    public orSets(compareSet: StateSet): StateSet;
    public removeState(type: StateType): boolean;
    public xorSets(compareSet: StateSet): StateSet;
  }
  
  interface StateSetProps extends GObject.ObjectProps {
    
  }
  
  export class Util extends GObject.Object {
    constructor(props?: UtilProps);
  }
  
  interface UtilProps extends GObject.ObjectProps {
    
  }

}