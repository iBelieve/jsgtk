declare module "Gtk" {

  export type Allocation = Gdk.Rectangle;
  
  export type Stock = any;
  
  export const BINARY_AGE: number;
  
  export const INPUT_ERROR: number;
  
  export const INTERFACE_AGE: number;
  
  export const LEVEL_BAR_OFFSET_FULL: string;
  
  export const LEVEL_BAR_OFFSET_HIGH: string;
  
  export const LEVEL_BAR_OFFSET_LOW: string;
  
  export const MAJOR_VERSION: number;
  
  export const MAX_COMPOSE_LEN: number;
  
  export const MICRO_VERSION: number;
  
  export const MINOR_VERSION: number;
  
  export const PAPER_NAME_A3: string;
  
  export const PAPER_NAME_A4: string;
  
  export const PAPER_NAME_A5: string;
  
  export const PAPER_NAME_B5: string;
  
  export const PAPER_NAME_EXECUTIVE: string;
  
  export const PAPER_NAME_LEGAL: string;
  
  export const PAPER_NAME_LETTER: string;
  
  export const PATH_PRIO_MASK: number;
  
  export const PRINT_SETTINGS_COLLATE: string;
  
  export const PRINT_SETTINGS_DEFAULT_SOURCE: string;
  
  export const PRINT_SETTINGS_DITHER: string;
  
  export const PRINT_SETTINGS_DUPLEX: string;
  
  export const PRINT_SETTINGS_FINISHINGS: string;
  
  export const PRINT_SETTINGS_MEDIA_TYPE: string;
  
  export const PRINT_SETTINGS_NUMBER_UP: string;
  
  export const PRINT_SETTINGS_NUMBER_UP_LAYOUT: string;
  
  export const PRINT_SETTINGS_N_COPIES: string;
  
  export const PRINT_SETTINGS_ORIENTATION: string;
  
  export const PRINT_SETTINGS_OUTPUT_BASENAME: string;
  
  export const PRINT_SETTINGS_OUTPUT_BIN: string;
  
  export const PRINT_SETTINGS_OUTPUT_DIR: string;
  
  export const PRINT_SETTINGS_OUTPUT_FILE_FORMAT: string;
  
  export const PRINT_SETTINGS_OUTPUT_URI: string;
  
  export const PRINT_SETTINGS_PAGE_RANGES: string;
  
  export const PRINT_SETTINGS_PAGE_SET: string;
  
  export const PRINT_SETTINGS_PAPER_FORMAT: string;
  
  export const PRINT_SETTINGS_PAPER_HEIGHT: string;
  
  export const PRINT_SETTINGS_PAPER_WIDTH: string;
  
  export const PRINT_SETTINGS_PRINTER: string;
  
  export const PRINT_SETTINGS_PRINTER_LPI: string;
  
  export const PRINT_SETTINGS_PRINT_PAGES: string;
  
  export const PRINT_SETTINGS_QUALITY: string;
  
  export const PRINT_SETTINGS_RESOLUTION: string;
  
  export const PRINT_SETTINGS_RESOLUTION_X: string;
  
  export const PRINT_SETTINGS_RESOLUTION_Y: string;
  
  export const PRINT_SETTINGS_REVERSE: string;
  
  export const PRINT_SETTINGS_SCALE: string;
  
  export const PRINT_SETTINGS_USE_COLOR: string;
  
  export const PRINT_SETTINGS_WIN32_DRIVER_EXTRA: string;
  
  export const PRINT_SETTINGS_WIN32_DRIVER_VERSION: string;
  
  export const PRIORITY_RESIZE: number;
  
  export const STOCK_ABOUT: string;
  
  export const STOCK_ADD: string;
  
  export const STOCK_APPLY: string;
  
  export const STOCK_BOLD: string;
  
  export const STOCK_CANCEL: string;
  
  export const STOCK_CAPS_LOCK_WARNING: string;
  
  export const STOCK_CDROM: string;
  
  export const STOCK_CLEAR: string;
  
  export const STOCK_CLOSE: string;
  
  export const STOCK_COLOR_PICKER: string;
  
  export const STOCK_CONNECT: string;
  
  export const STOCK_CONVERT: string;
  
  export const STOCK_COPY: string;
  
  export const STOCK_CUT: string;
  
  export const STOCK_DELETE: string;
  
  export const STOCK_DIALOG_AUTHENTICATION: string;
  
  export const STOCK_DIALOG_ERROR: string;
  
  export const STOCK_DIALOG_INFO: string;
  
  export const STOCK_DIALOG_QUESTION: string;
  
  export const STOCK_DIALOG_WARNING: string;
  
  export const STOCK_DIRECTORY: string;
  
  export const STOCK_DISCARD: string;
  
  export const STOCK_DISCONNECT: string;
  
  export const STOCK_DND: string;
  
  export const STOCK_DND_MULTIPLE: string;
  
  export const STOCK_EDIT: string;
  
  export const STOCK_EXECUTE: string;
  
  export const STOCK_FILE: string;
  
  export const STOCK_FIND: string;
  
  export const STOCK_FIND_AND_REPLACE: string;
  
  export const STOCK_FLOPPY: string;
  
  export const STOCK_FULLSCREEN: string;
  
  export const STOCK_GOTO_BOTTOM: string;
  
  export const STOCK_GOTO_FIRST: string;
  
  export const STOCK_GOTO_LAST: string;
  
  export const STOCK_GOTO_TOP: string;
  
  export const STOCK_GO_BACK: string;
  
  export const STOCK_GO_DOWN: string;
  
  export const STOCK_GO_FORWARD: string;
  
  export const STOCK_GO_UP: string;
  
  export const STOCK_HARDDISK: string;
  
  export const STOCK_HELP: string;
  
  export const STOCK_HOME: string;
  
  export const STOCK_INDENT: string;
  
  export const STOCK_INDEX: string;
  
  export const STOCK_INFO: string;
  
  export const STOCK_ITALIC: string;
  
  export const STOCK_JUMP_TO: string;
  
  export const STOCK_JUSTIFY_CENTER: string;
  
  export const STOCK_JUSTIFY_FILL: string;
  
  export const STOCK_JUSTIFY_LEFT: string;
  
  export const STOCK_JUSTIFY_RIGHT: string;
  
  export const STOCK_LEAVE_FULLSCREEN: string;
  
  export const STOCK_MEDIA_FORWARD: string;
  
  export const STOCK_MEDIA_NEXT: string;
  
  export const STOCK_MEDIA_PAUSE: string;
  
  export const STOCK_MEDIA_PLAY: string;
  
  export const STOCK_MEDIA_PREVIOUS: string;
  
  export const STOCK_MEDIA_RECORD: string;
  
  export const STOCK_MEDIA_REWIND: string;
  
  export const STOCK_MEDIA_STOP: string;
  
  export const STOCK_MISSING_IMAGE: string;
  
  export const STOCK_NETWORK: string;
  
  export const STOCK_NEW: string;
  
  export const STOCK_NO: string;
  
  export const STOCK_OK: string;
  
  export const STOCK_OPEN: string;
  
  export const STOCK_ORIENTATION_LANDSCAPE: string;
  
  export const STOCK_ORIENTATION_PORTRAIT: string;
  
  export const STOCK_ORIENTATION_REVERSE_LANDSCAPE: string;
  
  export const STOCK_ORIENTATION_REVERSE_PORTRAIT: string;
  
  export const STOCK_PAGE_SETUP: string;
  
  export const STOCK_PASTE: string;
  
  export const STOCK_PREFERENCES: string;
  
  export const STOCK_PRINT: string;
  
  export const STOCK_PRINT_ERROR: string;
  
  export const STOCK_PRINT_PAUSED: string;
  
  export const STOCK_PRINT_PREVIEW: string;
  
  export const STOCK_PRINT_REPORT: string;
  
  export const STOCK_PRINT_WARNING: string;
  
  export const STOCK_PROPERTIES: string;
  
  export const STOCK_QUIT: string;
  
  export const STOCK_REDO: string;
  
  export const STOCK_REFRESH: string;
  
  export const STOCK_REMOVE: string;
  
  export const STOCK_REVERT_TO_SAVED: string;
  
  export const STOCK_SAVE: string;
  
  export const STOCK_SAVE_AS: string;
  
  export const STOCK_SELECT_ALL: string;
  
  export const STOCK_SELECT_COLOR: string;
  
  export const STOCK_SELECT_FONT: string;
  
  export const STOCK_SORT_ASCENDING: string;
  
  export const STOCK_SORT_DESCENDING: string;
  
  export const STOCK_SPELL_CHECK: string;
  
  export const STOCK_STOP: string;
  
  export const STOCK_STRIKETHROUGH: string;
  
  export const STOCK_UNDELETE: string;
  
  export const STOCK_UNDERLINE: string;
  
  export const STOCK_UNDO: string;
  
  export const STOCK_UNINDENT: string;
  
  export const STOCK_YES: string;
  
  export const STOCK_ZOOM_100: string;
  
  export const STOCK_ZOOM_FIT: string;
  
  export const STOCK_ZOOM_IN: string;
  
  export const STOCK_ZOOM_OUT: string;
  
  export const STYLE_CLASS_ACCELERATOR: string;
  
  export const STYLE_CLASS_ARROW: string;
  
  export const STYLE_CLASS_BACKGROUND: string;
  
  export const STYLE_CLASS_BOTTOM: string;
  
  export const STYLE_CLASS_BUTTON: string;
  
  export const STYLE_CLASS_CALENDAR: string;
  
  export const STYLE_CLASS_CELL: string;
  
  export const STYLE_CLASS_CHECK: string;
  
  export const STYLE_CLASS_COMBOBOX_ENTRY: string;
  
  export const STYLE_CLASS_CONTEXT_MENU: string;
  
  export const STYLE_CLASS_CSD: string;
  
  export const STYLE_CLASS_CURSOR_HANDLE: string;
  
  export const STYLE_CLASS_DEFAULT: string;
  
  export const STYLE_CLASS_DESTRUCTIVE_ACTION: string;
  
  export const STYLE_CLASS_DIM_LABEL: string;
  
  export const STYLE_CLASS_DND: string;
  
  export const STYLE_CLASS_DOCK: string;
  
  export const STYLE_CLASS_ENTRY: string;
  
  export const STYLE_CLASS_ERROR: string;
  
  export const STYLE_CLASS_EXPANDER: string;
  
  export const STYLE_CLASS_FLAT: string;
  
  export const STYLE_CLASS_FRAME: string;
  
  export const STYLE_CLASS_GRIP: string;
  
  export const STYLE_CLASS_HEADER: string;
  
  export const STYLE_CLASS_HIGHLIGHT: string;
  
  export const STYLE_CLASS_HORIZONTAL: string;
  
  export const STYLE_CLASS_IMAGE: string;
  
  export const STYLE_CLASS_INFO: string;
  
  export const STYLE_CLASS_INLINE_TOOLBAR: string;
  
  export const STYLE_CLASS_INSERTION_CURSOR: string;
  
  export const STYLE_CLASS_LABEL: string;
  
  export const STYLE_CLASS_LEFT: string;
  
  export const STYLE_CLASS_LEVEL_BAR: string;
  
  export const STYLE_CLASS_LINKED: string;
  
  export const STYLE_CLASS_LIST: string;
  
  export const STYLE_CLASS_LIST_ROW: string;
  
  export const STYLE_CLASS_MARK: string;
  
  export const STYLE_CLASS_MENU: string;
  
  export const STYLE_CLASS_MENUBAR: string;
  
  export const STYLE_CLASS_MENUITEM: string;
  
  export const STYLE_CLASS_MESSAGE_DIALOG: string;
  
  export const STYLE_CLASS_MONOSPACE: string;
  
  export const STYLE_CLASS_NEEDS_ATTENTION: string;
  
  export const STYLE_CLASS_NOTEBOOK: string;
  
  export const STYLE_CLASS_OSD: string;
  
  export const STYLE_CLASS_OVERSHOOT: string;
  
  export const STYLE_CLASS_PANE_SEPARATOR: string;
  
  export const STYLE_CLASS_PAPER: string;
  
  export const STYLE_CLASS_POPOVER: string;
  
  export const STYLE_CLASS_POPUP: string;
  
  export const STYLE_CLASS_PRIMARY_TOOLBAR: string;
  
  export const STYLE_CLASS_PROGRESSBAR: string;
  
  export const STYLE_CLASS_PULSE: string;
  
  export const STYLE_CLASS_QUESTION: string;
  
  export const STYLE_CLASS_RADIO: string;
  
  export const STYLE_CLASS_RAISED: string;
  
  export const STYLE_CLASS_READ_ONLY: string;
  
  export const STYLE_CLASS_RIGHT: string;
  
  export const STYLE_CLASS_RUBBERBAND: string;
  
  export const STYLE_CLASS_SCALE: string;
  
  export const STYLE_CLASS_SCALE_HAS_MARKS_ABOVE: string;
  
  export const STYLE_CLASS_SCALE_HAS_MARKS_BELOW: string;
  
  export const STYLE_CLASS_SCROLLBAR: string;
  
  export const STYLE_CLASS_SCROLLBARS_JUNCTION: string;
  
  export const STYLE_CLASS_SEPARATOR: string;
  
  export const STYLE_CLASS_SIDEBAR: string;
  
  export const STYLE_CLASS_SLIDER: string;
  
  export const STYLE_CLASS_SPINBUTTON: string;
  
  export const STYLE_CLASS_SPINNER: string;
  
  export const STYLE_CLASS_STATUSBAR: string;
  
  export const STYLE_CLASS_SUBTITLE: string;
  
  export const STYLE_CLASS_SUGGESTED_ACTION: string;
  
  export const STYLE_CLASS_TITLE: string;
  
  export const STYLE_CLASS_TITLEBAR: string;
  
  export const STYLE_CLASS_TOOLBAR: string;
  
  export const STYLE_CLASS_TOOLTIP: string;
  
  export const STYLE_CLASS_TOP: string;
  
  export const STYLE_CLASS_TOUCH_SELECTION: string;
  
  export const STYLE_CLASS_TROUGH: string;
  
  export const STYLE_CLASS_UNDERSHOOT: string;
  
  export const STYLE_CLASS_VERTICAL: string;
  
  export const STYLE_CLASS_VIEW: string;
  
  export const STYLE_CLASS_WARNING: string;
  
  export const STYLE_CLASS_WIDE: string;
  
  export const STYLE_PROPERTY_BACKGROUND_COLOR: string;
  
  export const STYLE_PROPERTY_BACKGROUND_IMAGE: string;
  
  export const STYLE_PROPERTY_BORDER_COLOR: string;
  
  export const STYLE_PROPERTY_BORDER_RADIUS: string;
  
  export const STYLE_PROPERTY_BORDER_STYLE: string;
  
  export const STYLE_PROPERTY_BORDER_WIDTH: string;
  
  export const STYLE_PROPERTY_COLOR: string;
  
  export const STYLE_PROPERTY_FONT: string;
  
  export const STYLE_PROPERTY_MARGIN: string;
  
  export const STYLE_PROPERTY_PADDING: string;
  
  export const STYLE_PROVIDER_PRIORITY_APPLICATION: number;
  
  export const STYLE_PROVIDER_PRIORITY_FALLBACK: number;
  
  export const STYLE_PROVIDER_PRIORITY_SETTINGS: number;
  
  export const STYLE_PROVIDER_PRIORITY_THEME: number;
  
  export const STYLE_PROVIDER_PRIORITY_USER: number;
  
  export const STYLE_REGION_COLUMN: string;
  
  export const STYLE_REGION_COLUMN_HEADER: string;
  
  export const STYLE_REGION_ROW: string;
  
  export const STYLE_REGION_TAB: string;
  
  export const TEXT_VIEW_PRIORITY_VALIDATE: number;
  
  export const TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID: number;
  
  export const TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID: number;
  
  export function accelGroupsActivate(object: GObject.Object, accelKey: number, accelMods: Gdk.ModifierType): boolean;
  
  export function accelGroupsFromObject(object: GObject.Object): GLib.SList;
  
  export function acceleratorGetDefaultModMask(): Gdk.ModifierType;
  
  export function acceleratorGetLabel(acceleratorKey: number, acceleratorMods: Gdk.ModifierType): string;
  
  export function acceleratorGetLabelWithKeycode(display: Gdk.Display, acceleratorKey: number, keycode: number, acceleratorMods: Gdk.ModifierType): string;
  
  export function acceleratorName(acceleratorKey: number, acceleratorMods: Gdk.ModifierType): string;
  
  export function acceleratorNameWithKeycode(display: Gdk.Display, acceleratorKey: number, keycode: number, acceleratorMods: Gdk.ModifierType): string;
  
  export function acceleratorParse(accelerator: string, acceleratorKey: number, acceleratorMods: Gdk.ModifierType): void;
  
  export function acceleratorParseWithKeycode(accelerator: string, acceleratorKey: number, acceleratorCodes: number[], acceleratorMods: Gdk.ModifierType): void;
  
  export function acceleratorSetDefaultModMask(defaultModMask: Gdk.ModifierType): void;
  
  export function acceleratorValid(keyval: number, modifiers: Gdk.ModifierType): boolean;
  
  export function alternativeDialogButtonOrder(screen: Gdk.Screen): boolean;
  
  export function bindingEntryAddSignalFromString(bindingSet: BindingSet, signalDesc: string): GLib.TokenType;
  
  export function bindingEntryAddSignall(bindingSet: BindingSet, keyval: number, modifiers: Gdk.ModifierType, signalName: string, bindingArgs: GLib.SList): void;
  
  export function bindingEntryRemove(bindingSet: BindingSet, keyval: number, modifiers: Gdk.ModifierType): void;
  
  export function bindingEntrySkip(bindingSet: BindingSet, keyval: number, modifiers: Gdk.ModifierType): void;
  
  export function bindingSetByClass(objectClass: any): BindingSet;
  
  export function bindingSetFind(setName: string): BindingSet;
  
  export function bindingSetNew(setName: string): BindingSet;
  
  export function bindingsActivate(object: GObject.Object, keyval: number, modifiers: Gdk.ModifierType): boolean;
  
  export function bindingsActivateEvent(object: GObject.Object, event: Gdk.EventKey): boolean;
  
  export function builderErrorQuark(): GLib.Quark;
  
  export function cairoShouldDrawWindow(cr: cairo.Context, window: Gdk.Window): boolean;
  
  export function cairoTransformToWindow(cr: cairo.Context, widget: Widget, window: Gdk.Window): void;
  
  export function checkVersion(requiredMajor: number, requiredMinor: number, requiredMicro: number): string;
  
  export function cssProviderErrorQuark(): GLib.Quark;
  
  export function deviceGrabAdd(widget: Widget, device: Gdk.Device, blockOthers: boolean): void;
  
  export function deviceGrabRemove(widget: Widget, device: Gdk.Device): void;
  
  export function disableSetlocale(): void;
  
  export function distributeNaturalAllocation(extraSpace: number, nRequestedSizes: number, sizes: RequestedSize): number;
  
  export function dragCancel(context: Gdk.DragContext): void;
  
  export function dragFinish(context: Gdk.DragContext, success: boolean, del: boolean, time_: number): void;
  
  export function dragGetSourceWidget(context: Gdk.DragContext): Widget;
  
  export function dragSetIconDefault(context: Gdk.DragContext): void;
  
  export function dragSetIconGicon(context: Gdk.DragContext, icon: Gio.Icon, hotX: number, hotY: number): void;
  
  export function dragSetIconName(context: Gdk.DragContext, iconName: string, hotX: number, hotY: number): void;
  
  export function dragSetIconPixbuf(context: Gdk.DragContext, pixbuf: GdkPixbuf.Pixbuf, hotX: number, hotY: number): void;
  
  export function dragSetIconStock(context: Gdk.DragContext, stockId: string, hotX: number, hotY: number): void;
  
  export function dragSetIconSurface(context: Gdk.DragContext, surface: cairo.Surface): void;
  
  export function dragSetIconWidget(context: Gdk.DragContext, widget: Widget, hotX: number, hotY: number): void;
  
  export function drawInsertionCursor(widget: Widget, cr: cairo.Context, location: Gdk.Rectangle, isPrimary: boolean, direction: TextDirection, drawArrow: boolean): void;
  
  export function eventsPending(): boolean;
  
  export function false(): boolean;
  
  export function fileChooserErrorQuark(): GLib.Quark;
  
  export function getBinaryAge(): number;
  
  export function getCurrentEvent(): Gdk.Event;
  
  export function getCurrentEventDevice(): Gdk.Device;
  
  export function getCurrentEventState(state: Gdk.ModifierType): boolean;
  
  export function getCurrentEventTime(): number;
  
  export function getDebugFlags(): number;
  
  export function getDefaultLanguage(): Pango.Language;
  
  export function getEventWidget(event: Gdk.Event): Widget;
  
  export function getInterfaceAge(): number;
  
  export function getLocaleDirection(): TextDirection;
  
  export function getMajorVersion(): number;
  
  export function getMicroVersion(): number;
  
  export function getMinorVersion(): number;
  
  export function getOptionGroup(openDefaultDisplay: boolean): GLib.OptionGroup;
  
  export function grabGetCurrent(): Widget;
  
  export function iconSizeFromName(name: string): number;
  
  export function iconSizeGetName(size: number): string;
  
  export function iconSizeLookup(size: number, width: number, height: number): boolean;
  
  export function iconSizeLookupForSettings(settings: Settings, size: number, width: number, height: number): boolean;
  
  export function iconSizeRegister(name: string, width: number, height: number): number;
  
  export function iconSizeRegisterAlias(alias: string, target: number): void;
  
  export function iconThemeErrorQuark(): GLib.Quark;
  
  export function init(argc: number, argv: string[]): void;
  
  export function initCheck(argc: number, argv: string[]): boolean;
  
  export function initWithArgs(argc: number, argv: string[], parameterString: string, entries: GLib.OptionEntry[], translationDomain: string): boolean;
  
  export function keySnooperInstall(snooper: KeySnoopFunc, funcData: any): number;
  
  export function keySnooperRemove(snooperHandlerId: number): void;
  
  export function main(): void;
  
  export function mainDoEvent(event: Gdk.Event): void;
  
  export function mainIteration(): boolean;
  
  export function mainIterationDo(blocking: boolean): boolean;
  
  export function mainLevel(): number;
  
  export function mainQuit(): void;
  
  export function paintArrow(style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, arrowType: ArrowType, fill: boolean, x: number, _y: number, width: number, height: number): void;
  
  export function paintBox(style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number): void;
  
  export function paintBoxGap(style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number, gapSide: PositionType, gapX: number, gapWidth: number): void;
  
  export function paintCheck(style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number): void;
  
  export function paintDiamond(style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number): void;
  
  export function paintExpander(style: Style, cr: cairo.Context, stateType: StateType, widget: Widget, detail: string, x: number, _y: number, expanderStyle: ExpanderStyle): void;
  
  export function paintExtension(style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number, gapSide: PositionType): void;
  
  export function paintFlatBox(style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number): void;
  
  export function paintFocus(style: Style, cr: cairo.Context, stateType: StateType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number): void;
  
  export function paintHandle(style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number, orientation: Orientation): void;
  
  export function paintHline(style: Style, cr: cairo.Context, stateType: StateType, widget: Widget, detail: string, x1: number, x2: number, _y: number): void;
  
  export function paintLayout(style: Style, cr: cairo.Context, stateType: StateType, useText: boolean, widget: Widget, detail: string, x: number, _y: number, layout: Pango.Layout): void;
  
  export function paintOption(style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number): void;
  
  export function paintResizeGrip(style: Style, cr: cairo.Context, stateType: StateType, widget: Widget, detail: string, edge: Gdk.WindowEdge, x: number, _y: number, width: number, height: number): void;
  
  export function paintShadow(style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number): void;
  
  export function paintShadowGap(style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number, gapSide: PositionType, gapX: number, gapWidth: number): void;
  
  export function paintSlider(style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number, orientation: Orientation): void;
  
  export function paintSpinner(style: Style, cr: cairo.Context, stateType: StateType, widget: Widget, detail: string, step: number, x: number, _y: number, width: number, height: number): void;
  
  export function paintTab(style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number): void;
  
  export function paintVline(style: Style, cr: cairo.Context, stateType: StateType, widget: Widget, detail: string, y1_: number, y2_: number, x: number): void;
  
  export function paperSizeGetDefault(): string;
  
  export function paperSizeGetPaperSizes(includeCustom: boolean): GLib.List;
  
  export function parseArgs(argc: number, argv: string[]): boolean;
  
  export function printErrorQuark(): GLib.Quark;
  
  export function printRunPageSetupDialog(parent: Window, pageSetup: PageSetup, settings: PrintSettings): PageSetup;
  
  export function printRunPageSetupDialogAsync(parent: Window, pageSetup: PageSetup, settings: PrintSettings, doneCb: PageSetupDoneFunc, data: any): void;
  
  export function propagateEvent(widget: Widget, event: Gdk.Event): void;
  
  export function rcAddDefaultFile(filename: string): void;
  
  export function rcFindModuleInPath(moduleFile: string): string;
  
  export function rcFindPixmapInPath(settings: Settings, scanner: GLib.Scanner, pixmapFile: string): string;
  
  export function rcGetDefaultFiles(): string[];
  
  export function rcGetImModuleFile(): string;
  
  export function rcGetImModulePath(): string;
  
  export function rcGetModuleDir(): string;
  
  export function rcGetStyle(widget: Widget): Style;
  
  export function rcGetStyleByPaths(settings: Settings, widgetPath: string, classPath: string, type: GObject.Type): Style;
  
  export function rcGetThemeDir(): string;
  
  export function rcParse(filename: string): void;
  
  export function rcParseColor(scanner: GLib.Scanner, color: Gdk.Color): number;
  
  export function rcParseColorFull(scanner: GLib.Scanner, style: RcStyle, color: Gdk.Color): number;
  
  export function rcParsePriority(scanner: GLib.Scanner, priority: PathPriorityType): number;
  
  export function rcParseState(scanner: GLib.Scanner, state: StateType): number;
  
  export function rcParseString(rcString: string): void;
  
  export function rcPropertyParseBorder(pspec: GObject.ParamSpec, gstring: GLib.String, propertyValue: GObject.Value): boolean;
  
  export function rcPropertyParseColor(pspec: GObject.ParamSpec, gstring: GLib.String, propertyValue: GObject.Value): boolean;
  
  export function rcPropertyParseEnum(pspec: GObject.ParamSpec, gstring: GLib.String, propertyValue: GObject.Value): boolean;
  
  export function rcPropertyParseFlags(pspec: GObject.ParamSpec, gstring: GLib.String, propertyValue: GObject.Value): boolean;
  
  export function rcPropertyParseRequisition(pspec: GObject.ParamSpec, gstring: GLib.String, propertyValue: GObject.Value): boolean;
  
  export function rcReparseAll(): boolean;
  
  export function rcReparseAllForSettings(settings: Settings, forceLoad: boolean): boolean;
  
  export function rcResetStyles(settings: Settings): void;
  
  export function rcScannerNew(): GLib.Scanner;
  
  export function rcSetDefaultFiles(filenames: string[]): void;
  
  export function recentChooserErrorQuark(): GLib.Quark;
  
  export function recentManagerErrorQuark(): GLib.Quark;
  
  export function renderActivity(context: StyleContext, cr: cairo.Context, x: number, _y: number, width: number, height: number): void;
  
  export function renderArrow(context: StyleContext, cr: cairo.Context, angle: number, x: number, _y: number, size: number): void;
  
  export function renderBackground(context: StyleContext, cr: cairo.Context, x: number, _y: number, width: number, height: number): void;
  
  export function renderBackgroundGetClip(context: StyleContext, x: number, _y: number, width: number, height: number, outClip: Gdk.Rectangle): void;
  
  export function renderCheck(context: StyleContext, cr: cairo.Context, x: number, _y: number, width: number, height: number): void;
  
  export function renderExpander(context: StyleContext, cr: cairo.Context, x: number, _y: number, width: number, height: number): void;
  
  export function renderExtension(context: StyleContext, cr: cairo.Context, x: number, _y: number, width: number, height: number, gapSide: PositionType): void;
  
  export function renderFocus(context: StyleContext, cr: cairo.Context, x: number, _y: number, width: number, height: number): void;
  
  export function renderFrame(context: StyleContext, cr: cairo.Context, x: number, _y: number, width: number, height: number): void;
  
  export function renderFrameGap(context: StyleContext, cr: cairo.Context, x: number, _y: number, width: number, height: number, gapSide: PositionType, xy0Gap: number, xy1Gap: number): void;
  
  export function renderHandle(context: StyleContext, cr: cairo.Context, x: number, _y: number, width: number, height: number): void;
  
  export function renderIcon(context: StyleContext, cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, x: number, _y: number): void;
  
  export function renderIconPixbuf(context: StyleContext, source: IconSource, size: number): GdkPixbuf.Pixbuf;
  
  export function renderIconSurface(context: StyleContext, cr: cairo.Context, surface: cairo.Surface, x: number, _y: number): void;
  
  export function renderInsertionCursor(context: StyleContext, cr: cairo.Context, x: number, _y: number, layout: Pango.Layout, index: number, direction: Pango.Direction): void;
  
  export function renderLayout(context: StyleContext, cr: cairo.Context, x: number, _y: number, layout: Pango.Layout): void;
  
  export function renderLine(context: StyleContext, cr: cairo.Context, x0: number, y0: number, x1: number, y1: number): void;
  
  export function renderOption(context: StyleContext, cr: cairo.Context, x: number, _y: number, width: number, height: number): void;
  
  export function renderSlider(context: StyleContext, cr: cairo.Context, x: number, _y: number, width: number, height: number, orientation: Orientation): void;
  
  export function rgbToHsv(_r: number, _g: number, b: number, _h: number, _s: number, v: number): void;
  
  export function selectionAddTarget(widget: Widget, selection: Gdk.Atom, target: Gdk.Atom, info: number): void;
  
  export function selectionAddTargets(widget: Widget, selection: Gdk.Atom, targets: TargetEntry[], ntargets: number): void;
  
  export function selectionClearTargets(widget: Widget, selection: Gdk.Atom): void;
  
  export function selectionConvert(widget: Widget, selection: Gdk.Atom, target: Gdk.Atom, time_: number): boolean;
  
  export function selectionOwnerSet(widget: Widget, selection: Gdk.Atom, time_: number): boolean;
  
  export function selectionOwnerSetForDisplay(display: Gdk.Display, widget: Widget, selection: Gdk.Atom, time_: number): boolean;
  
  export function selectionRemoveAll(widget: Widget): void;
  
  export function setDebugFlags(flags: number): void;
  
  export function showAboutDialog(parent: Window, firstPropertyName: string, ...params: any[]): void;
  
  export function showUri(screen: Gdk.Screen, uri: string, timestamp: number): boolean;
  
  export function showUriOnWindow(parent: Window, uri: string, timestamp: number): boolean;
  
  export function stockAdd(items: StockItem[], nItems: number): void;
  
  export function stockAddStatic(items: StockItem[], nItems: number): void;
  
  export function stockListIds(): GLib.SList;
  
  export function stockLookup(stockId: string, item: StockItem): boolean;
  
  export function stockSetTranslateFunc(domain: string, func: TranslateFunc, data: any, notify: GLib.DestroyNotify): void;
  
  export function targetTableFree(targets: TargetEntry[], nTargets: number): void;
  
  export function targetTableNewFromList(list: TargetList, nTargets: number): TargetEntry[];
  
  export function targetsIncludeImage(targets: Gdk.Atom[], nTargets: number, writable: boolean): boolean;
  
  export function targetsIncludeRichText(targets: Gdk.Atom[], nTargets: number, buffer: TextBuffer): boolean;
  
  export function targetsIncludeText(targets: Gdk.Atom[], nTargets: number): boolean;
  
  export function targetsIncludeUri(targets: Gdk.Atom[], nTargets: number): boolean;
  
  export function testCreateSimpleWindow(windowTitle: string, dialogText: string): Widget;
  
  export function testCreateWidget(widgetType: GObject.Type, firstPropertyName: string, ...params: any[]): Widget;
  
  export function testDisplayButtonWindow(windowTitle: string, dialogText: string, ...params: any[]): Widget;
  
  export function testFindLabel(widget: Widget, labelPattern: string): Widget;
  
  export function testFindSibling(baseWidget: Widget, widgetType: GObject.Type): Widget;
  
  export function testFindWidget(widget: Widget, labelPattern: string, widgetType: GObject.Type): Widget;
  
  export function testInit(argcp: number, argvp: string[], ...params: any[]): void;
  
  export function testListAllTypes(nTypes: number): GObject.Type[];
  
  export function testRegisterAllTypes(): void;
  
  export function testSliderGetValue(widget: Widget): number;
  
  export function testSliderSetPerc(widget: Widget, percentage: number): void;
  
  export function testSpinButtonClick(spinner: SpinButton, button: number, upwards: boolean): boolean;
  
  export function testTextGet(widget: Widget): string;
  
  export function testTextSet(widget: Widget, string: string): void;
  
  export function testWidgetClick(widget: Widget, button: number, modifiers: Gdk.ModifierType): boolean;
  
  export function testWidgetSendKey(widget: Widget, keyval: number, modifiers: Gdk.ModifierType): boolean;
  
  export function testWidgetWaitForDraw(widget: Widget): void;
  
  export function treeGetRowDragData(selectionData: SelectionData, treeModel: TreeModel, path: TreePath): boolean;
  
  export function treeRowReferenceDeleted(proxy: GObject.Object, path: TreePath): void;
  
  export function treeRowReferenceInserted(proxy: GObject.Object, path: TreePath): void;
  
  export function treeRowReferenceReordered(proxy: GObject.Object, path: TreePath, iter: TreeIter, newOrder: number[]): void;
  
  export function treeSetRowDragData(selectionData: SelectionData, treeModel: TreeModel, path: TreePath): boolean;
  
  export function true(): boolean;
  
  export interface AccelGroupActivate {
  	(accelGroup: AccelGroup, acceleratable: GObject.Object, keyval: number, modifier: Gdk.ModifierType): boolean;
  }
  
  export interface AccelGroupFindFunc {
  	(key: AccelKey, closure: GObject.Closure, data: any): boolean;
  }
  
  export interface AccelMapForeach {
  	(data: any, accelPath: string, accelKey: number, accelMods: Gdk.ModifierType, changed: boolean): void;
  }
  
  export interface AssistantPageFunc {
  	(currentPage: number, data: any): number;
  }
  
  export interface BuilderConnectFunc {
  	(builder: Builder, object: GObject.Object, signalName: string, handlerName: string, connectObject: GObject.Object, flags: GObject.ConnectFlags, userData: any): void;
  }
  
  export interface CalendarDetailFunc {
  	(calendar: Calendar, year: number, month: number, day: number, userData: any): string;
  }
  
  export interface Callback {
  	(widget: Widget, data: any): void;
  }
  
  export interface CellAllocCallback {
  	(renderer: CellRenderer, cellArea: Gdk.Rectangle, cellBackground: Gdk.Rectangle, data: any): boolean;
  }
  
  export interface CellCallback {
  	(renderer: CellRenderer, data: any): boolean;
  }
  
  export interface CellLayoutDataFunc {
  	(cellLayout: CellLayout, cell: CellRenderer, treeModel: TreeModel, iter: TreeIter, data: any): void;
  }
  
  export interface ClipboardClearFunc {
  	(clipboard: Clipboard, userDataOrOwner: any): void;
  }
  
  export interface ClipboardGetFunc {
  	(clipboard: Clipboard, selectionData: SelectionData, info: number, userDataOrOwner: any): void;
  }
  
  export interface ClipboardImageReceivedFunc {
  	(clipboard: Clipboard, pixbuf: GdkPixbuf.Pixbuf, data: any): void;
  }
  
  export interface ClipboardReceivedFunc {
  	(clipboard: Clipboard, selectionData: SelectionData, data: any): void;
  }
  
  export interface ClipboardRichTextReceivedFunc {
  	(clipboard: Clipboard, format: Gdk.Atom, text: string, length: number, data: any): void;
  }
  
  export interface ClipboardTargetsReceivedFunc {
  	(clipboard: Clipboard, atoms: Gdk.Atom[], nAtoms: number, data: any): void;
  }
  
  export interface ClipboardTextReceivedFunc {
  	(clipboard: Clipboard, text: string, data: any): void;
  }
  
  export interface ClipboardURIReceivedFunc {
  	(clipboard: Clipboard, uris: string[], data: any): void;
  }
  
  export interface ColorSelectionChangePaletteFunc {
  	(colors: Gdk.Color[], nColors: number): void;
  }
  
  export interface ColorSelectionChangePaletteWithScreenFunc {
  	(screen: Gdk.Screen, colors: Gdk.Color[], nColors: number): void;
  }
  
  export interface EntryCompletionMatchFunc {
  	(completion: EntryCompletion, key: string, iter: TreeIter, userData: any): boolean;
  }
  
  export interface FileFilterFunc {
  	(filterInfo: FileFilterInfo, data: any): boolean;
  }
  
  export interface FlowBoxCreateWidgetFunc {
  	(item: any, userData: any): Widget;
  }
  
  export interface FlowBoxFilterFunc {
  	(child: FlowBoxChild, userData: any): boolean;
  }
  
  export interface FlowBoxForeachFunc {
  	(box: FlowBox, child: FlowBoxChild, userData: any): void;
  }
  
  export interface FlowBoxSortFunc {
  	(child1: FlowBoxChild, child2: FlowBoxChild, userData: any): number;
  }
  
  export interface FontFilterFunc {
  	(family: Pango.FontFamily, _face: Pango.FontFace, data: any): boolean;
  }
  
  export interface IconViewForeachFunc {
  	(iconView: IconView, path: TreePath, data: any): void;
  }
  
  export interface KeySnoopFunc {
  	(grabWidget: Widget, event: Gdk.EventKey, funcData: any): number;
  }
  
  export interface ListBoxCreateWidgetFunc {
  	(item: GObject.Object, userData: any): Widget;
  }
  
  export interface ListBoxFilterFunc {
  	(_row: ListBoxRow, userData: any): boolean;
  }
  
  export interface ListBoxForeachFunc {
  	(box: ListBox, _row: ListBoxRow, userData: any): void;
  }
  
  export interface ListBoxSortFunc {
  	(row1: ListBoxRow, row2: ListBoxRow, userData: any): number;
  }
  
  export interface ListBoxUpdateHeaderFunc {
  	(_row: ListBoxRow, before: ListBoxRow, userData: any): void;
  }
  
  export interface MenuDetachFunc {
  	(attachWidget: Widget, menu: Menu): void;
  }
  
  export interface MenuPositionFunc {
  	(menu: Menu, x: number, _y: number, pushIn: boolean, userData: any): void;
  }
  
  export interface ModuleDisplayInitFunc {
  	(display: Gdk.Display): void;
  }
  
  export interface ModuleInitFunc {
  	(argc: number, argv: string[]): void;
  }
  
  export interface PageSetupDoneFunc {
  	(pageSetup: PageSetup, data: any): void;
  }
  
  export interface PrintSettingsFunc {
  	(key: string, value: string, userData: any): void;
  }
  
  export interface RcPropertyParser {
  	(pspec: GObject.ParamSpec, rcString: GLib.String, propertyValue: GObject.Value): boolean;
  }
  
  export interface RecentFilterFunc {
  	(filterInfo: RecentFilterInfo, userData: any): boolean;
  }
  
  export interface RecentSortFunc {
  	(a: RecentInfo, b: RecentInfo, userData: any): number;
  }
  
  export interface StylePropertyParser {
  	(string: string, value: GObject.Value): boolean;
  }
  
  export interface TextBufferDeserializeFunc {
  	(registerBuffer: TextBuffer, contentBuffer: TextBuffer, iter: TextIter, data: number[], length: number, createTags: boolean, userData: any): boolean;
  }
  
  export interface TextBufferSerializeFunc {
  	(registerBuffer: TextBuffer, contentBuffer: TextBuffer, start: TextIter, end: TextIter, length: number, userData: any): number;
  }
  
  export interface TextCharPredicate {
  	(_ch: string, userData: any): boolean;
  }
  
  export interface TextTagTableForeach {
  	(tag: TextTag, data: any): void;
  }
  
  export interface TickCallback {
  	(widget: Widget, frameClock: Gdk.FrameClock, userData: any): boolean;
  }
  
  export interface TranslateFunc {
  	(path: string, funcData: any): string;
  }
  
  export interface TreeCellDataFunc {
  	(treeColumn: TreeViewColumn, cell: CellRenderer, treeModel: TreeModel, iter: TreeIter, data: any): void;
  }
  
  export interface TreeDestroyCountFunc {
  	(treeView: TreeView, path: TreePath, children: number, userData: any): void;
  }
  
  export interface TreeIterCompareFunc {
  	(model: TreeModel, a: TreeIter, b: TreeIter, userData: any): number;
  }
  
  export interface TreeModelFilterModifyFunc {
  	(model: TreeModel, iter: TreeIter, value: GObject.Value, column: number, data: any): void;
  }
  
  export interface TreeModelFilterVisibleFunc {
  	(model: TreeModel, iter: TreeIter, data: any): boolean;
  }
  
  export interface TreeModelForeachFunc {
  	(model: TreeModel, path: TreePath, iter: TreeIter, data: any): boolean;
  }
  
  export interface TreeSelectionForeachFunc {
  	(model: TreeModel, path: TreePath, iter: TreeIter, data: any): void;
  }
  
  export interface TreeSelectionFunc {
  	(selection: TreeSelection, model: TreeModel, path: TreePath, pathCurrentlySelected: boolean, data: any): boolean;
  }
  
  export interface TreeViewColumnDropFunc {
  	(treeView: TreeView, column: TreeViewColumn, prevColumn: TreeViewColumn, nextColumn: TreeViewColumn, data: any): boolean;
  }
  
  export interface TreeViewMappingFunc {
  	(treeView: TreeView, path: TreePath, userData: any): void;
  }
  
  export interface TreeViewRowSeparatorFunc {
  	(model: TreeModel, iter: TreeIter, data: any): boolean;
  }
  
  export interface TreeViewSearchEqualFunc {
  	(model: TreeModel, column: number, key: string, iter: TreeIter, searchData: any): boolean;
  }
  
  export interface TreeViewSearchPositionFunc {
  	(treeView: TreeView, searchDialog: Widget, userData: any): void;
  }
  
  export enum Align {
    FILL = 0,
    START = 1,
    END = 2,
    CENTER = 3,
    BASELINE = 4
  }
  
  export enum ArrowPlacement {
    BOTH = 0,
    START = 1,
    END = 2
  }
  
  export enum ArrowType {
    UP = 0,
    DOWN = 1,
    LEFT = 2,
    RIGHT = 3,
    NONE = 4
  }
  
  export enum AssistantPageType {
    CONTENT = 0,
    INTRO = 1,
    CONFIRM = 2,
    SUMMARY = 3,
    PROGRESS = 4,
    CUSTOM = 5
  }
  
  export enum BaselinePosition {
    TOP = 0,
    CENTER = 1,
    BOTTOM = 2
  }
  
  export enum BorderStyle {
    NONE = 0,
    SOLID = 1,
    INSET = 2,
    OUTSET = 3,
    HIDDEN = 4,
    DOTTED = 5,
    DASHED = 6,
    DOUBLE = 7,
    GROOVE = 8,
    RIDGE = 9
  }
  
  export enum BuilderError {
    INVALID_TYPE_FUNCTION = 0,
    UNHANDLED_TAG = 1,
    MISSING_ATTRIBUTE = 2,
    INVALID_ATTRIBUTE = 3,
    INVALID_TAG = 4,
    MISSING_PROPERTY_VALUE = 5,
    INVALID_VALUE = 6,
    VERSION_MISMATCH = 7,
    DUPLICATE_ID = 8,
    OBJECT_TYPE_REFUSED = 9,
    TEMPLATE_MISMATCH = 10,
    INVALID_PROPERTY = 11,
    INVALID_SIGNAL = 12,
    INVALID_ID = 13
  }
  
  export enum ButtonBoxStyle {
    SPREAD = 1,
    EDGE = 2,
    START = 3,
    END = 4,
    CENTER = 5,
    EXPAND = 6
  }
  
  export enum ButtonRole {
    NORMAL = 0,
    CHECK = 1,
    RADIO = 2
  }
  
  export enum ButtonsType {
    NONE = 0,
    OK = 1,
    CLOSE = 2,
    CANCEL = 3,
    YES_NO = 4,
    OK_CANCEL = 5
  }
  
  export enum CellRendererAccelMode {
    GTK = 0,
    OTHER = 1
  }
  
  export enum CellRendererMode {
    INERT = 0,
    ACTIVATABLE = 1,
    EDITABLE = 2
  }
  
  export enum CornerType {
    TOP_LEFT = 0,
    BOTTOM_LEFT = 1,
    TOP_RIGHT = 2,
    BOTTOM_RIGHT = 3
  }
  
  export enum CssProviderError {
    FAILED = 0,
    SYNTAX = 1,
    IMPORT = 2,
    NAME = 3,
    DEPRECATED = 4,
    UNKNOWN_VALUE = 5
  }
  
  export enum CssSectionType {
    DOCUMENT = 0,
    IMPORT = 1,
    COLOR_DEFINITION = 2,
    BINDING_SET = 3,
    RULESET = 4,
    SELECTOR = 5,
    DECLARATION = 6,
    VALUE = 7,
    KEYFRAMES = 8
  }
  
  export enum DeleteType {
    CHARS = 0,
    WORD_ENDS = 1,
    WORDS = 2,
    DISPLAY_LINES = 3,
    DISPLAY_LINE_ENDS = 4,
    PARAGRAPH_ENDS = 5,
    PARAGRAPHS = 6,
    WHITESPACE = 7
  }
  
  export enum DirectionType {
    TAB_FORWARD = 0,
    TAB_BACKWARD = 1,
    UP = 2,
    DOWN = 3,
    LEFT = 4,
    RIGHT = 5
  }
  
  export enum DragResult {
    SUCCESS = 0,
    NO_TARGET = 1,
    USER_CANCELLED = 2,
    TIMEOUT_EXPIRED = 3,
    GRAB_BROKEN = 4,
    ERROR = 5
  }
  
  export enum EntryIconPosition {
    PRIMARY = 0,
    SECONDARY = 1
  }
  
  export enum EventSequenceState {
    NONE = 0,
    CLAIMED = 1,
    DENIED = 2
  }
  
  export enum ExpanderStyle {
    COLLAPSED = 0,
    SEMI_COLLAPSED = 1,
    SEMI_EXPANDED = 2,
    EXPANDED = 3
  }
  
  export enum FileChooserAction {
    OPEN = 0,
    SAVE = 1,
    SELECT_FOLDER = 2,
    CREATE_FOLDER = 3
  }
  
  export enum FileChooserConfirmation {
    CONFIRM = 0,
    ACCEPT_FILENAME = 1,
    SELECT_AGAIN = 2
  }
  
  export enum FileChooserError {
    NONEXISTENT = 0,
    BAD_FILENAME = 1,
    ALREADY_EXISTS = 2,
    INCOMPLETE_HOSTNAME = 3
  }
  
  export enum IMPreeditStyle {
    NOTHING = 0,
    CALLBACK = 1,
    NONE = 2
  }
  
  export enum IMStatusStyle {
    NOTHING = 0,
    CALLBACK = 1,
    NONE = 2
  }
  
  export enum IconSize {
    INVALID = 0,
    MENU = 1,
    SMALL_TOOLBAR = 2,
    LARGE_TOOLBAR = 3,
    BUTTON = 4,
    DND = 5,
    DIALOG = 6
  }
  
  export enum IconThemeError {
    NOT_FOUND = 0,
    FAILED = 1
  }
  
  export enum IconViewDropPosition {
    NO_DROP = 0,
    DROP_INTO = 1,
    DROP_LEFT = 2,
    DROP_RIGHT = 3,
    DROP_ABOVE = 4,
    DROP_BELOW = 5
  }
  
  export enum ImageType {
    EMPTY = 0,
    PIXBUF = 1,
    STOCK = 2,
    ICON_SET = 3,
    ANIMATION = 4,
    ICON_NAME = 5,
    GICON = 6,
    SURFACE = 7
  }
  
  export enum InputPurpose {
    FREE_FORM = 0,
    ALPHA = 1,
    DIGITS = 2,
    NUMBER = 3,
    PHONE = 4,
    URL = 5,
    EMAIL = 6,
    NAME = 7,
    PASSWORD = 8,
    PIN = 9
  }
  
  export enum Justification {
    LEFT = 0,
    RIGHT = 1,
    CENTER = 2,
    FILL = 3
  }
  
  export enum LevelBarMode {
    CONTINUOUS = 0,
    DISCRETE = 1
  }
  
  export enum License {
    UNKNOWN = 0,
    CUSTOM = 1,
    GPL_2_0 = 2,
    GPL_3_0 = 3,
    LGPL_2_1 = 4,
    LGPL_3_0 = 5,
    BSD = 6,
    MIT_X11 = 7,
    ARTISTIC = 8,
    GPL_2_0_ONLY = 9,
    GPL_3_0_ONLY = 10,
    LGPL_2_1_ONLY = 11,
    LGPL_3_0_ONLY = 12,
    AGPL_3_0 = 13
  }
  
  export enum MenuDirectionType {
    PARENT = 0,
    CHILD = 1,
    NEXT = 2,
    PREV = 3
  }
  
  export enum MessageType {
    INFO = 0,
    WARNING = 1,
    QUESTION = 2,
    ERROR = 3,
    OTHER = 4
  }
  
  export enum MovementStep {
    LOGICAL_POSITIONS = 0,
    VISUAL_POSITIONS = 1,
    WORDS = 2,
    DISPLAY_LINES = 3,
    DISPLAY_LINE_ENDS = 4,
    PARAGRAPHS = 5,
    PARAGRAPH_ENDS = 6,
    PAGES = 7,
    BUFFER_ENDS = 8,
    HORIZONTAL_PAGES = 9
  }
  
  export enum NotebookTab {
    FIRST = 0,
    LAST = 1
  }
  
  export enum NumberUpLayout {
    LRTB = 0,
    LRBT = 1,
    RLTB = 2,
    RLBT = 3,
    TBLR = 4,
    TBRL = 5,
    BTLR = 6,
    BTRL = 7
  }
  
  export enum Orientation {
    HORIZONTAL = 0,
    VERTICAL = 1
  }
  
  export enum PackDirection {
    LTR = 0,
    RTL = 1,
    TTB = 2,
    BTT = 3
  }
  
  export enum PackType {
    START = 0,
    END = 1
  }
  
  export enum PadActionType {
    BUTTON = 0,
    RING = 1,
    STRIP = 2
  }
  
  export enum PageOrientation {
    PORTRAIT = 0,
    LANDSCAPE = 1,
    REVERSE_PORTRAIT = 2,
    REVERSE_LANDSCAPE = 3
  }
  
  export enum PageSet {
    ALL = 0,
    EVEN = 1,
    ODD = 2
  }
  
  export enum PanDirection {
    LEFT = 0,
    RIGHT = 1,
    UP = 2,
    DOWN = 3
  }
  
  export enum PathPriorityType {
    LOWEST = 0,
    GTK = 4,
    APPLICATION = 8,
    THEME = 10,
    RC = 12,
    HIGHEST = 15
  }
  
  export enum PathType {
    WIDGET = 0,
    WIDGET_CLASS = 1,
    CLASS = 2
  }
  
  export enum PolicyType {
    ALWAYS = 0,
    AUTOMATIC = 1,
    NEVER = 2,
    EXTERNAL = 3
  }
  
  export enum PopoverConstraint {
    NONE = 0,
    WINDOW = 1
  }
  
  export enum PositionType {
    LEFT = 0,
    RIGHT = 1,
    TOP = 2,
    BOTTOM = 3
  }
  
  export enum PrintDuplex {
    SIMPLEX = 0,
    HORIZONTAL = 1,
    VERTICAL = 2
  }
  
  export enum PrintError {
    GENERAL = 0,
    INTERNAL_ERROR = 1,
    NOMEM = 2,
    INVALID_FILE = 3
  }
  
  export enum PrintOperationAction {
    PRINT_DIALOG = 0,
    PRINT = 1,
    PREVIEW = 2,
    EXPORT = 3
  }
  
  export enum PrintOperationResult {
    ERROR = 0,
    APPLY = 1,
    CANCEL = 2,
    IN_PROGRESS = 3
  }
  
  export enum PrintPages {
    ALL = 0,
    CURRENT = 1,
    RANGES = 2,
    SELECTION = 3
  }
  
  export enum PrintQuality {
    LOW = 0,
    NORMAL = 1,
    HIGH = 2,
    DRAFT = 3
  }
  
  export enum PrintStatus {
    INITIAL = 0,
    PREPARING = 1,
    GENERATING_DATA = 2,
    SENDING_DATA = 3,
    PENDING = 4,
    PENDING_ISSUE = 5,
    PRINTING = 6,
    FINISHED = 7,
    FINISHED_ABORTED = 8
  }
  
  export enum PropagationPhase {
    NONE = 0,
    CAPTURE = 1,
    BUBBLE = 2,
    TARGET = 3
  }
  
  export enum RcTokenType {
    INVALID = 270,
    INCLUDE = 271,
    NORMAL = 272,
    ACTIVE = 273,
    PRELIGHT = 274,
    SELECTED = 275,
    INSENSITIVE = 276,
    FG = 277,
    BG = 278,
    TEXT = 279,
    BASE = 280,
    XTHICKNESS = 281,
    YTHICKNESS = 282,
    FONT = 283,
    FONTSET = 284,
    FONT_NAME = 285,
    BG_PIXMAP = 286,
    PIXMAP_PATH = 287,
    STYLE = 288,
    BINDING = 289,
    BIND = 290,
    WIDGET = 291,
    WIDGET_CLASS = 292,
    CLASS = 293,
    LOWEST = 294,
    GTK = 295,
    APPLICATION = 296,
    THEME = 297,
    RC = 298,
    HIGHEST = 299,
    ENGINE = 300,
    MODULE_PATH = 301,
    IM_MODULE_PATH = 302,
    IM_MODULE_FILE = 303,
    STOCK = 304,
    LTR = 305,
    RTL = 306,
    COLOR = 307,
    UNBIND = 308,
    LAST = 309
  }
  
  export enum RecentChooserError {
    NOT_FOUND = 0,
    INVALID_URI = 1
  }
  
  export enum RecentManagerError {
    NOT_FOUND = 0,
    INVALID_URI = 1,
    INVALID_ENCODING = 2,
    NOT_REGISTERED = 3,
    READ = 4,
    WRITE = 5,
    UNKNOWN = 6
  }
  
  export enum RecentSortType {
    NONE = 0,
    MRU = 1,
    LRU = 2,
    CUSTOM = 3
  }
  
  export enum ReliefStyle {
    NORMAL = 0,
    HALF = 1,
    NONE = 2
  }
  
  export enum ResizeMode {
    PARENT = 0,
    QUEUE = 1,
    IMMEDIATE = 2
  }
  
  export enum ResponseType {
    NONE = -1,
    REJECT = -2,
    ACCEPT = -3,
    DELETE_EVENT = -4,
    OK = -5,
    CANCEL = -6,
    CLOSE = -7,
    YES = -8,
    NO = -9,
    APPLY = -10,
    HELP = -11
  }
  
  export enum RevealerTransitionType {
    NONE = 0,
    CROSSFADE = 1,
    SLIDE_RIGHT = 2,
    SLIDE_LEFT = 3,
    SLIDE_UP = 4,
    SLIDE_DOWN = 5
  }
  
  export enum ScrollStep {
    STEPS = 0,
    PAGES = 1,
    ENDS = 2,
    HORIZONTAL_STEPS = 3,
    HORIZONTAL_PAGES = 4,
    HORIZONTAL_ENDS = 5
  }
  
  export enum ScrollType {
    NONE = 0,
    JUMP = 1,
    STEP_BACKWARD = 2,
    STEP_FORWARD = 3,
    PAGE_BACKWARD = 4,
    PAGE_FORWARD = 5,
    STEP_UP = 6,
    STEP_DOWN = 7,
    PAGE_UP = 8,
    PAGE_DOWN = 9,
    STEP_LEFT = 10,
    STEP_RIGHT = 11,
    PAGE_LEFT = 12,
    PAGE_RIGHT = 13,
    START = 14,
    END = 15
  }
  
  export enum ScrollablePolicy {
    MINIMUM = 0,
    NATURAL = 1
  }
  
  export enum SelectionMode {
    NONE = 0,
    SINGLE = 1,
    BROWSE = 2,
    MULTIPLE = 3
  }
  
  export enum SensitivityType {
    AUTO = 0,
    ON = 1,
    OFF = 2
  }
  
  export enum ShadowType {
    NONE = 0,
    IN = 1,
    OUT = 2,
    ETCHED_IN = 3,
    ETCHED_OUT = 4
  }
  
  export enum ShortcutType {
    ACCELERATOR = 0,
    GESTURE_PINCH = 1,
    GESTURE_STRETCH = 2,
    GESTURE_ROTATE_CLOCKWISE = 3,
    GESTURE_ROTATE_COUNTERCLOCKWISE = 4,
    GESTURE_TWO_FINGER_SWIPE_LEFT = 5,
    GESTURE_TWO_FINGER_SWIPE_RIGHT = 6,
    GESTURE = 7
  }
  
  export enum SizeGroupMode {
    NONE = 0,
    HORIZONTAL = 1,
    VERTICAL = 2,
    BOTH = 3
  }
  
  export enum SizeRequestMode {
    HEIGHT_FOR_WIDTH = 0,
    WIDTH_FOR_HEIGHT = 1,
    CONSTANT_SIZE = 2
  }
  
  export enum SortType {
    ASCENDING = 0,
    DESCENDING = 1
  }
  
  export enum SpinButtonUpdatePolicy {
    ALWAYS = 0,
    IF_VALID = 1
  }
  
  export enum SpinType {
    STEP_FORWARD = 0,
    STEP_BACKWARD = 1,
    PAGE_FORWARD = 2,
    PAGE_BACKWARD = 3,
    HOME = 4,
    END = 5,
    USER_DEFINED = 6
  }
  
  export enum StackTransitionType {
    NONE = 0,
    CROSSFADE = 1,
    SLIDE_RIGHT = 2,
    SLIDE_LEFT = 3,
    SLIDE_UP = 4,
    SLIDE_DOWN = 5,
    SLIDE_LEFT_RIGHT = 6,
    SLIDE_UP_DOWN = 7,
    OVER_UP = 8,
    OVER_DOWN = 9,
    OVER_LEFT = 10,
    OVER_RIGHT = 11,
    UNDER_UP = 12,
    UNDER_DOWN = 13,
    UNDER_LEFT = 14,
    UNDER_RIGHT = 15,
    OVER_UP_DOWN = 16,
    OVER_DOWN_UP = 17,
    OVER_LEFT_RIGHT = 18,
    OVER_RIGHT_LEFT = 19
  }
  
  export enum StateType {
    NORMAL = 0,
    ACTIVE = 1,
    PRELIGHT = 2,
    SELECTED = 3,
    INSENSITIVE = 4,
    INCONSISTENT = 5,
    FOCUSED = 6
  }
  
  export enum TextBufferTargetInfo {
    BUFFER_CONTENTS = -1,
    RICH_TEXT = -2,
    TEXT = -3
  }
  
  export enum TextDirection {
    NONE = 0,
    LTR = 1,
    RTL = 2
  }
  
  export enum TextExtendSelection {
    WORD = 0,
    LINE = 1
  }
  
  export enum TextViewLayer {
    BELOW = 0,
    ABOVE = 1,
    BELOW_TEXT = 2,
    ABOVE_TEXT = 3
  }
  
  export enum TextWindowType {
    PRIVATE = 0,
    WIDGET = 1,
    TEXT = 2,
    LEFT = 3,
    RIGHT = 4,
    TOP = 5,
    BOTTOM = 6
  }
  
  export enum ToolbarSpaceStyle {
    EMPTY = 0,
    LINE = 1
  }
  
  export enum ToolbarStyle {
    ICONS = 0,
    TEXT = 1,
    BOTH = 2,
    BOTH_HORIZ = 3
  }
  
  export enum TreeViewColumnSizing {
    GROW_ONLY = 0,
    AUTOSIZE = 1,
    FIXED = 2
  }
  
  export enum TreeViewDropPosition {
    BEFORE = 0,
    AFTER = 1,
    INTO_OR_BEFORE = 2,
    INTO_OR_AFTER = 3
  }
  
  export enum TreeViewGridLines {
    NONE = 0,
    HORIZONTAL = 1,
    VERTICAL = 2,
    BOTH = 3
  }
  
  export enum Unit {
    NONE = 0,
    POINTS = 1,
    INCH = 2,
    MM = 3
  }
  
  export enum WidgetHelpType {
    TOOLTIP = 0,
    WHATS_THIS = 1
  }
  
  export enum WindowPosition {
    NONE = 0,
    CENTER = 1,
    MOUSE = 2,
    CENTER_ALWAYS = 3,
    CENTER_ON_PARENT = 4
  }
  
  export enum WindowType {
    TOPLEVEL = 0,
    POPUP = 1
  }
  
  export enum WrapMode {
    NONE = 0,
    CHAR = 1,
    WORD = 2,
    WORD_CHAR = 3
  }
  
  export enum AccelFlags {
    VISIBLE = 1,
    LOCKED = 2,
    MASK = 7
  }
  
  export enum ApplicationInhibitFlags {
    LOGOUT = 1,
    SWITCH = 2,
    SUSPEND = 4,
    IDLE = 8
  }
  
  export enum AttachOptions {
    EXPAND = 1,
    SHRINK = 2,
    FILL = 4
  }
  
  export enum CalendarDisplayOptions {
    SHOW_HEADING = 1,
    SHOW_DAY_NAMES = 2,
    NO_MONTH_CHANGE = 4,
    SHOW_WEEK_NUMBERS = 8,
    SHOW_DETAILS = 32
  }
  
  export enum CellRendererState {
    SELECTED = 1,
    PRELIT = 2,
    INSENSITIVE = 4,
    SORTED = 8,
    FOCUSED = 16,
    EXPANDABLE = 32,
    EXPANDED = 64
  }
  
  export enum DebugFlag {
    MISC = 1,
    PLUGSOCKET = 2,
    TEXT = 4,
    TREE = 8,
    UPDATES = 16,
    KEYBINDINGS = 32,
    MULTIHEAD = 64,
    MODULES = 128,
    GEOMETRY = 256,
    ICONTHEME = 512,
    PRINTING = 1024,
    BUILDER = 2048,
    SIZE_REQUEST = 4096,
    NO_CSS_CACHE = 8192,
    BASELINES = 16384,
    PIXEL_CACHE = 32768,
    NO_PIXEL_CACHE = 65536,
    INTERACTIVE = 131072,
    TOUCHSCREEN = 262144,
    ACTIONS = 524288,
    RESIZE = 1048576,
    LAYOUT = 2097152
  }
  
  export enum DestDefaults {
    MOTION = 1,
    HIGHLIGHT = 2,
    DROP = 4,
    ALL = 7
  }
  
  export enum DialogFlags {
    MODAL = 1,
    DESTROY_WITH_PARENT = 2,
    USE_HEADER_BAR = 4
  }
  
  export enum FileFilterFlags {
    FILENAME = 1,
    URI = 2,
    DISPLAY_NAME = 4,
    MIME_TYPE = 8
  }
  
  export enum IconLookupFlags {
    NO_SVG = 1,
    FORCE_SVG = 2,
    USE_BUILTIN = 4,
    GENERIC_FALLBACK = 8,
    FORCE_SIZE = 16,
    FORCE_REGULAR = 32,
    FORCE_SYMBOLIC = 64,
    DIR_LTR = 128,
    DIR_RTL = 256
  }
  
  export enum InputHints {
    NONE = 0,
    SPELLCHECK = 1,
    NO_SPELLCHECK = 2,
    WORD_COMPLETION = 4,
    LOWERCASE = 8,
    UPPERCASE_CHARS = 16,
    UPPERCASE_WORDS = 32,
    UPPERCASE_SENTENCES = 64,
    INHIBIT_OSK = 128,
    VERTICAL_WRITING = 256
  }
  
  export enum JunctionSides {
    NONE = 0,
    CORNER_TOPLEFT = 1,
    CORNER_TOPRIGHT = 2,
    CORNER_BOTTOMLEFT = 4,
    CORNER_BOTTOMRIGHT = 8,
    TOP = 3,
    BOTTOM = 12,
    LEFT = 5,
    RIGHT = 10
  }
  
  export enum PlacesOpenFlags {
    NORMAL = 1,
    NEW_TAB = 2,
    NEW_WINDOW = 4
  }
  
  export enum RcFlags {
    FG = 1,
    BG = 2,
    TEXT = 4,
    BASE = 8
  }
  
  export enum RecentFilterFlags {
    URI = 1,
    DISPLAY_NAME = 2,
    MIME_TYPE = 4,
    APPLICATION = 8,
    GROUP = 16,
    AGE = 32
  }
  
  export enum RegionFlags {
    EVEN = 1,
    ODD = 2,
    FIRST = 4,
    LAST = 8,
    ONLY = 16,
    SORTED = 32
  }
  
  export enum StateFlags {
    NORMAL = 0,
    ACTIVE = 1,
    PRELIGHT = 2,
    SELECTED = 4,
    INSENSITIVE = 8,
    INCONSISTENT = 16,
    FOCUSED = 32,
    BACKDROP = 64,
    DIR_LTR = 128,
    DIR_RTL = 256,
    LINK = 512,
    VISITED = 1024,
    CHECKED = 2048,
    DROP_ACTIVE = 4096
  }
  
  export enum StyleContextPrintFlags {
    NONE = 0,
    RECURSE = 1,
    SHOW_STYLE = 2
  }
  
  export enum TargetFlags {
    SAME_APP = 1,
    SAME_WIDGET = 2,
    OTHER_APP = 4,
    OTHER_WIDGET = 8
  }
  
  export enum TextSearchFlags {
    VISIBLE_ONLY = 1,
    TEXT_ONLY = 2,
    CASE_INSENSITIVE = 4
  }
  
  export enum ToolPaletteDragTargets {
    ITEMS = 1,
    GROUPS = 2
  }
  
  export enum TreeModelFlags {
    ITERS_PERSIST = 1,
    LIST_ONLY = 2
  }
  
  export enum UIManagerItemType {
    AUTO = 0,
    MENUBAR = 1,
    MENU = 2,
    TOOLBAR = 4,
    PLACEHOLDER = 8,
    POPUP = 16,
    MENUITEM = 32,
    TOOLITEM = 64,
    SEPARATOR = 128,
    ACCELERATOR = 256,
    POPUP_WITH_ACCELS = 512
  }
  
  export class AboutDialogClass {
    public parentClass: DialogClass;
    
    activateLink : { (dialog: AboutDialog, uri: string): boolean; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class AboutDialogPrivate {
    
  }
  
  export class AccelGroupClass {
    public parentClass: GObject.ObjectClass;
    
    accelChanged : { (accelGroup: AccelGroup, keyval: number, modifier: Gdk.ModifierType, accelClosure: GObject.Closure): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class AccelGroupEntry {
    public key: AccelKey;
    public closure: GObject.Closure;
    public accelPathQuark: GLib.Quark;
  }
  
  export class AccelGroupPrivate {
    
  }
  
  export class AccelKey {
    public accelKey: number;
    public accelMods: Gdk.ModifierType;
    public accelFlags: number;
  }
  
  export class AccelLabelClass {
    public parentClass: LabelClass;
    public signalQuote1: string;
    public signalQuote2: string;
    public modNameShift: string;
    public modNameControl: string;
    public modNameAlt: string;
    public modSeparator: string;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class AccelLabelPrivate {
    
  }
  
  export class AccelMapClass {
    
  }
  
  export class AccessibleClass {
    public parentClass: Atk.ObjectClass;
    
    connectWidgetDestroyed : { (accessible: Accessible): void; };
    widgetSet : { (accessible: Accessible): void; };
    widgetUnset : { (accessible: Accessible): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class AccessiblePrivate {
    
  }
  
  export class ActionBarClass {
    public parentClass: BinClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ActionBarPrivate {
    
  }
  
  export class ActionClass {
    public parentClass: GObject.ObjectClass;
    public menuItemType: GObject.Type;
    public toolbarItemType: GObject.Type;
    
    activate : { (action: Action): void; };
    createMenuItem : { (action: Action): Widget; };
    createToolItem : { (action: Action): Widget; };
    connectProxy : { (action: Action, proxy: Widget): void; };
    disconnectProxy : { (action: Action, proxy: Widget): void; };
    createMenu : { (action: Action): Widget; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ActionEntry {
    public name: string;
    public stockId: string;
    public label: string;
    public accelerator: string;
    public tooltip: string;
    public callback: GObject.Callback;
  }
  
  export class ActionGroupClass {
    public parentClass: GObject.ObjectClass;
    
    getAction : { (actionGroup: ActionGroup, actionName: string): Action; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ActionGroupPrivate {
    
  }
  
  export class ActionPrivate {
    
  }
  
  export class ActionableInterface {
    public gIface: GObject.TypeInterface;
    
    getActionName : { (actionable: Actionable): string; };
    setActionName : { (actionable: Actionable, actionName: string): void; };
    getActionTargetValue : { (actionable: Actionable): GLib.Variant; };
    setActionTargetValue : { (actionable: Actionable, targetValue: GLib.Variant): void; };
  }
  
  export class ActivatableIface {
    public gIface: GObject.TypeInterface;
    
    update : { (activatable: Activatable, action: Action, propertyName: string): void; };
    syncActionProperties : { (activatable: Activatable, action: Action): void; };
  }
  
  export class AdjustmentClass {
    public parentClass: GObject.InitiallyUnownedClass;
    
    changed : { (adjustment: Adjustment): void; };
    valueChanged : { (adjustment: Adjustment): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class AdjustmentPrivate {
    
  }
  
  export class AlignmentClass {
    public parentClass: BinClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class AlignmentPrivate {
    
  }
  
  export class AppChooserButtonClass {
    public parentClass: ComboBoxClass;
    public padding: any[];
    
    customItemActivated : { (self: AppChooserButton, itemName: string): void; };
  }
  
  export class AppChooserButtonPrivate {
    
  }
  
  export class AppChooserDialogClass {
    public parentClass: DialogClass;
    public padding: any[];
  }
  
  export class AppChooserDialogPrivate {
    
  }
  
  export class AppChooserWidgetClass {
    public parentClass: BoxClass;
    public padding: any[];
    
    applicationSelected : { (self: AppChooserWidget, appInfo: Gio.AppInfo): void; };
    applicationActivated : { (self: AppChooserWidget, appInfo: Gio.AppInfo): void; };
    populatePopup : { (self: AppChooserWidget, menu: Menu, appInfo: Gio.AppInfo): void; };
  }
  
  export class AppChooserWidgetPrivate {
    
  }
  
  export class ApplicationClass {
    public parentClass: Gio.ApplicationClass;
    public padding: any[];
    
    windowAdded : { (application: Application, window: Window): void; };
    windowRemoved : { (application: Application, window: Window): void; };
  }
  
  export class ApplicationPrivate {
    
  }
  
  export class ApplicationWindowClass {
    public parentClass: WindowClass;
    public padding: any[];
  }
  
  export class ApplicationWindowPrivate {
    
  }
  
  export class ArrowAccessibleClass {
    public parentClass: WidgetAccessibleClass;
  }
  
  export class ArrowAccessiblePrivate {
    
  }
  
  export class ArrowClass {
    public parentClass: MiscClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ArrowPrivate {
    
  }
  
  export class AspectFrameClass {
    public parentClass: FrameClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class AspectFramePrivate {
    
  }
  
  export class AssistantClass {
    public parentClass: WindowClass;
    
    prepare : { (assistant: Assistant, page: Widget): void; };
    apply : { (assistant: Assistant): void; };
    close : { (assistant: Assistant): void; };
    cancel : { (assistant: Assistant): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
    _gtkReserved5 : { (): void; };
  }
  
  export class AssistantPrivate {
    
  }
  
  export class BinClass {
    public parentClass: ContainerClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class BinPrivate {
    
  }
  
  export class BindingArg {
    public argType: GObject.Type;
  }
  
  export class BindingEntry {
    public keyval: number;
    public modifiers: Gdk.ModifierType;
    public bindingSet: BindingSet;
    public destroyed: number;
    public inEmission: number;
    public marksUnbound: number;
    public setNext: BindingEntry;
    public hashNext: BindingEntry;
    public signals: BindingSignal;
  }
  
  export class BindingSet {
    public setName: string;
    public priority: number;
    public widgetPathPspecs: GLib.SList;
    public widgetClassPspecs: GLib.SList;
    public classBranchPspecs: GLib.SList;
    public entries: BindingEntry;
    public current: BindingEntry;
    public parsed: number;
    
    public activate(keyval: number, modifiers: Gdk.ModifierType, object: GObject.Object): boolean;
    public addPath(pathType: PathType, pathPattern: string, priority: PathPriorityType): void;
  }
  
  export class BindingSignal {
    public next: BindingSignal;
    public signalName: string;
    public nArgs: number;
    public args: BindingArg[];
  }
  
  export class BooleanCellAccessibleClass {
    public parentClass: RendererCellAccessibleClass;
  }
  
  export class BooleanCellAccessiblePrivate {
    
  }
  
  export class Border {
    public left: number;
    public right: number;
    public top: number;
    public bottom: number;
    
    public copy(): Border;
    public free(): void;
  }
  
  export class BoxClass {
    public parentClass: ContainerClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class BoxPrivate {
    
  }
  
  export class BuildableIface {
    public gIface: GObject.TypeInterface;
    
    setName : { (buildable: Buildable, name: string): void; };
    getName : { (buildable: Buildable): string; };
    addChild : { (buildable: Buildable, builder: Builder, child: GObject.Object, type: string): void; };
    setBuildableProperty : { (buildable: Buildable, builder: Builder, name: string, value: GObject.Value): void; };
    constructChild : { (buildable: Buildable, builder: Builder, name: string): GObject.Object; };
    customTagStart : { (buildable: Buildable, builder: Builder, child: GObject.Object, tagname: string, parser: GLib.MarkupParser, data: any): boolean; };
    customTagEnd : { (buildable: Buildable, builder: Builder, child: GObject.Object, tagname: string, data: any): void; };
    customFinished : { (buildable: Buildable, builder: Builder, child: GObject.Object, tagname: string, data: any): void; };
    parserFinished : { (buildable: Buildable, builder: Builder): void; };
    getInternalChild : { (buildable: Buildable, builder: Builder, childname: string): GObject.Object; };
  }
  
  export class BuilderClass {
    public parentClass: GObject.ObjectClass;
    
    getTypeFromName : { (builder: Builder, typeName: string): GObject.Type; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
    _gtkReserved5 : { (): void; };
    _gtkReserved6 : { (): void; };
    _gtkReserved7 : { (): void; };
    _gtkReserved8 : { (): void; };
  }
  
  export class BuilderPrivate {
    
  }
  
  export class ButtonAccessibleClass {
    public parentClass: ContainerAccessibleClass;
  }
  
  export class ButtonAccessiblePrivate {
    
  }
  
  export class ButtonBoxClass {
    public parentClass: BoxClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ButtonBoxPrivate {
    
  }
  
  export class ButtonClass {
    public parentClass: BinClass;
    
    pressed : { (button: Button): void; };
    released : { (button: Button): void; };
    clicked : { (button: Button): void; };
    enter : { (button: Button): void; };
    leave : { (button: Button): void; };
    activate : { (button: Button): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ButtonPrivate {
    
  }
  
  export class CalendarClass {
    public parentClass: WidgetClass;
    
    monthChanged : { (calendar: Calendar): void; };
    daySelected : { (calendar: Calendar): void; };
    daySelectedDoubleClick : { (calendar: Calendar): void; };
    prevMonth : { (calendar: Calendar): void; };
    nextMonth : { (calendar: Calendar): void; };
    prevYear : { (calendar: Calendar): void; };
    nextYear : { (calendar: Calendar): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class CalendarPrivate {
    
  }
  
  export class CellAccessibleClass {
    public parentClass: AccessibleClass;
    
    updateCache : { (cell: CellAccessible, emitSignal: boolean): void; };
  }
  
  export class CellAccessibleParentIface {
    public parent: GObject.TypeInterface;
    
    getCellExtents : { (parent: CellAccessibleParent, cell: CellAccessible, x: number, _y: number, width: number, height: number, coordType: Atk.CoordType): void; };
    getCellArea : { (parent: CellAccessibleParent, cell: CellAccessible, cellRect: Gdk.Rectangle): void; };
    grabFocus : { (parent: CellAccessibleParent, cell: CellAccessible): boolean; };
    getChildIndex : { (parent: CellAccessibleParent, cell: CellAccessible): number; };
    getRendererState : { (parent: CellAccessibleParent, cell: CellAccessible): CellRendererState; };
    expandCollapse : { (parent: CellAccessibleParent, cell: CellAccessible): void; };
    activate : { (parent: CellAccessibleParent, cell: CellAccessible): void; };
    edit : { (parent: CellAccessibleParent, cell: CellAccessible): void; };
    updateRelationset : { (parent: CellAccessibleParent, cell: CellAccessible, relationset: Atk.RelationSet): void; };
  }
  
  export class CellAccessiblePrivate {
    
  }
  
  export class CellAreaBoxClass {
    public parentClass: CellAreaClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class CellAreaBoxPrivate {
    
  }
  
  export class CellAreaClass {
    public parentClass: GObject.InitiallyUnownedClass;
    
    add : { (area: CellArea, renderer: CellRenderer): void; };
    remove : { (area: CellArea, renderer: CellRenderer): void; };
    foreach : { (area: CellArea, callback: CellCallback, callbackData: any): void; };
    foreachAlloc : { (area: CellArea, context: CellAreaContext, widget: Widget, cellArea: Gdk.Rectangle, backgroundArea: Gdk.Rectangle, callback: CellAllocCallback, callbackData: any): void; };
    event : { (area: CellArea, context: CellAreaContext, widget: Widget, event: Gdk.Event, cellArea: Gdk.Rectangle, flags: CellRendererState): number; };
    render : { (area: CellArea, context: CellAreaContext, widget: Widget, cr: cairo.Context, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, flags: CellRendererState, paintFocus: boolean): void; };
    applyAttributes : { (area: CellArea, treeModel: TreeModel, iter: TreeIter, isExpander: boolean, isExpanded: boolean): void; };
    createContext : { (area: CellArea): CellAreaContext; };
    copyContext : { (area: CellArea, context: CellAreaContext): CellAreaContext; };
    getRequestMode : { (area: CellArea): SizeRequestMode; };
    getPreferredWidth : { (area: CellArea, context: CellAreaContext, widget: Widget, minimumWidth: number, naturalWidth: number): void; };
    getPreferredHeightForWidth : { (area: CellArea, context: CellAreaContext, widget: Widget, width: number, minimumHeight: number, naturalHeight: number): void; };
    getPreferredHeight : { (area: CellArea, context: CellAreaContext, widget: Widget, minimumHeight: number, naturalHeight: number): void; };
    getPreferredWidthForHeight : { (area: CellArea, context: CellAreaContext, widget: Widget, height: number, minimumWidth: number, naturalWidth: number): void; };
    setCellProperty : { (area: CellArea, renderer: CellRenderer, propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void; };
    getCellProperty : { (area: CellArea, renderer: CellRenderer, propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void; };
    focus : { (area: CellArea, direction: DirectionType): boolean; };
    isActivatable : { (area: CellArea): boolean; };
    activate : { (area: CellArea, context: CellAreaContext, widget: Widget, cellArea: Gdk.Rectangle, flags: CellRendererState, editOnly: boolean): boolean; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
    _gtkReserved5 : { (): void; };
    _gtkReserved6 : { (): void; };
    _gtkReserved7 : { (): void; };
    _gtkReserved8 : { (): void; };
    
    public findCellProperty(propertyName: string): GObject.ParamSpec;
    public installCellProperty(propertyId: number, pspec: GObject.ParamSpec): void;
    public listCellProperties(nProperties: number): GObject.ParamSpec[];
  }
  
  export class CellAreaContextClass {
    public parentClass: GObject.ObjectClass;
    
    allocate : { (context: CellAreaContext, width: number, height: number): void; };
    reset : { (context: CellAreaContext): void; };
    getPreferredHeightForWidth : { (context: CellAreaContext, width: number, minimumHeight: number, naturalHeight: number): void; };
    getPreferredWidthForHeight : { (context: CellAreaContext, height: number, minimumWidth: number, naturalWidth: number): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
    _gtkReserved5 : { (): void; };
    _gtkReserved6 : { (): void; };
  }
  
  export class CellAreaContextPrivate {
    
  }
  
  export class CellAreaPrivate {
    
  }
  
  export class CellEditableIface {
    public gIface: GObject.TypeInterface;
    
    editingDone : { (cellEditable: CellEditable): void; };
    removeWidget : { (cellEditable: CellEditable): void; };
    startEditing : { (cellEditable: CellEditable, event: Gdk.Event): void; };
  }
  
  export class CellLayoutIface {
    public gIface: GObject.TypeInterface;
    
    packStart : { (cellLayout: CellLayout, cell: CellRenderer, expand: boolean): void; };
    packEnd : { (cellLayout: CellLayout, cell: CellRenderer, expand: boolean): void; };
    clear : { (cellLayout: CellLayout): void; };
    addAttribute : { (cellLayout: CellLayout, cell: CellRenderer, attribute: string, column: number): void; };
    setCellDataFunc : { (cellLayout: CellLayout, cell: CellRenderer, func: CellLayoutDataFunc, funcData: any, destroy: GLib.DestroyNotify): void; };
    clearAttributes : { (cellLayout: CellLayout, cell: CellRenderer): void; };
    reorder : { (cellLayout: CellLayout, cell: CellRenderer, position: number): void; };
    getCells : { (cellLayout: CellLayout): GLib.List; };
    getArea : { (cellLayout: CellLayout): CellArea; };
  }
  
  export class CellRendererAccelClass {
    public parentClass: CellRendererTextClass;
    
    accelEdited : { (accel: CellRendererAccel, pathString: string, accelKey: number, accelMods: Gdk.ModifierType, hardwareKeycode: number): void; };
    accelCleared : { (accel: CellRendererAccel, pathString: string): void; };
    _gtkReserved0 : { (): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class CellRendererAccelPrivate {
    
  }
  
  export class CellRendererClass {
    public parentClass: GObject.InitiallyUnownedClass;
    public priv: CellRendererClassPrivate;
    
    getRequestMode : { (cell: CellRenderer): SizeRequestMode; };
    getPreferredWidth : { (cell: CellRenderer, widget: Widget, minimumSize: number, naturalSize: number): void; };
    getPreferredHeightForWidth : { (cell: CellRenderer, widget: Widget, width: number, minimumHeight: number, naturalHeight: number): void; };
    getPreferredHeight : { (cell: CellRenderer, widget: Widget, minimumSize: number, naturalSize: number): void; };
    getPreferredWidthForHeight : { (cell: CellRenderer, widget: Widget, height: number, minimumWidth: number, naturalWidth: number): void; };
    getAlignedArea : { (cell: CellRenderer, widget: Widget, flags: CellRendererState, cellArea: Gdk.Rectangle, alignedArea: Gdk.Rectangle): void; };
    getSize : { (cell: CellRenderer, widget: Widget, cellArea: Gdk.Rectangle, xOffset: number, yOffset: number, width: number, height: number): void; };
    render : { (cell: CellRenderer, cr: cairo.Context, widget: Widget, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, flags: CellRendererState): void; };
    activate : { (cell: CellRenderer, event: Gdk.Event, widget: Widget, path: string, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, flags: CellRendererState): boolean; };
    startEditing : { (cell: CellRenderer, event: Gdk.Event, widget: Widget, path: string, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, flags: CellRendererState): CellEditable; };
    editingCanceled : { (cell: CellRenderer): void; };
    editingStarted : { (cell: CellRenderer, editable: CellEditable, path: string): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
    
    public setAccessibleType(type: GObject.Type): void;
  }
  
  export class CellRendererClassPrivate {
    
  }
  
  export class CellRendererComboClass {
    public parent: CellRendererTextClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class CellRendererComboPrivate {
    
  }
  
  export class CellRendererPixbufClass {
    public parentClass: CellRendererClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class CellRendererPixbufPrivate {
    
  }
  
  export class CellRendererPrivate {
    
  }
  
  export class CellRendererProgressClass {
    public parentClass: CellRendererClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class CellRendererProgressPrivate {
    
  }
  
  export class CellRendererSpinClass {
    public parent: CellRendererTextClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class CellRendererSpinPrivate {
    
  }
  
  export class CellRendererSpinnerClass {
    public parentClass: CellRendererClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class CellRendererSpinnerPrivate {
    
  }
  
  export class CellRendererTextClass {
    public parentClass: CellRendererClass;
    
    edited : { (cellRendererText: CellRendererText, path: string, newText: string): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class CellRendererTextPrivate {
    
  }
  
  export class CellRendererToggleClass {
    public parentClass: CellRendererClass;
    
    toggled : { (cellRendererToggle: CellRendererToggle, path: string): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class CellRendererTogglePrivate {
    
  }
  
  export class CellViewClass {
    public parentClass: WidgetClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class CellViewPrivate {
    
  }
  
  export class CheckButtonClass {
    public parentClass: ToggleButtonClass;
    
    drawIndicator : { (checkButton: CheckButton, cr: cairo.Context): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class CheckMenuItemAccessibleClass {
    public parentClass: MenuItemAccessibleClass;
  }
  
  export class CheckMenuItemAccessiblePrivate {
    
  }
  
  export class CheckMenuItemClass {
    public parentClass: MenuItemClass;
    
    toggled : { (checkMenuItem: CheckMenuItem): void; };
    drawIndicator : { (checkMenuItem: CheckMenuItem, cr: cairo.Context): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class CheckMenuItemPrivate {
    
  }
  
  export class ColorButtonClass {
    public parentClass: ButtonClass;
    
    colorSet : { (cp: ColorButton): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ColorButtonPrivate {
    
  }
  
  export class ColorChooserDialogClass {
    public parentClass: DialogClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ColorChooserDialogPrivate {
    
  }
  
  export class ColorChooserInterface {
    public baseInterface: GObject.TypeInterface;
    public padding: any[];
    
    getRgba : { (chooser: ColorChooser, color: Gdk.RGBA): void; };
    setRgba : { (chooser: ColorChooser, color: Gdk.RGBA): void; };
    addPalette : { (chooser: ColorChooser, orientation: Orientation, colorsPerLine: number, nColors: number, colors: Gdk.RGBA[]): void; };
    colorActivated : { (chooser: ColorChooser, color: Gdk.RGBA): void; };
  }
  
  export class ColorChooserWidgetClass {
    public parentClass: BoxClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
    _gtkReserved5 : { (): void; };
    _gtkReserved6 : { (): void; };
    _gtkReserved7 : { (): void; };
    _gtkReserved8 : { (): void; };
  }
  
  export class ColorChooserWidgetPrivate {
    
  }
  
  export class ColorSelectionClass {
    public parentClass: BoxClass;
    
    colorChanged : { (colorSelection: ColorSelection): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ColorSelectionDialogClass {
    public parentClass: DialogClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ColorSelectionDialogPrivate {
    
  }
  
  export class ColorSelectionPrivate {
    
  }
  
  export class ComboBoxAccessibleClass {
    public parentClass: ContainerAccessibleClass;
  }
  
  export class ComboBoxAccessiblePrivate {
    
  }
  
  export class ComboBoxClass {
    public parentClass: BinClass;
    
    changed : { (comboBox: ComboBox): void; };
    formatEntryText : { (comboBox: ComboBox, path: string): string; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
  }
  
  export class ComboBoxPrivate {
    
  }
  
  export class ComboBoxTextClass {
    public parentClass: ComboBoxClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ComboBoxTextPrivate {
    
  }
  
  export class ContainerAccessibleClass {
    public parentClass: WidgetAccessibleClass;
    
    addGtk : { (container: Container, widget: Widget, data: any): number; };
    removeGtk : { (container: Container, widget: Widget, data: any): number; };
  }
  
  export class ContainerAccessiblePrivate {
    
  }
  
  export class ContainerCellAccessibleClass {
    public parentClass: CellAccessibleClass;
  }
  
  export class ContainerCellAccessiblePrivate {
    
  }
  
  export class ContainerClass {
    public parentClass: WidgetClass;
    public _handleBorderWidth: number;
    
    add : { (container: Container, widget: Widget): void; };
    remove : { (container: Container, widget: Widget): void; };
    checkResize : { (container: Container): void; };
    forall : { (container: Container, includeInternals: boolean, callback: Callback, callbackData: any): void; };
    setFocusChild : { (container: Container, child: Widget): void; };
    childType : { (container: Container): GObject.Type; };
    compositeName : { (container: Container, child: Widget): string; };
    setChildProperty : { (container: Container, child: Widget, propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void; };
    getChildProperty : { (container: Container, child: Widget, propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void; };
    getPathForChild : { (container: Container, child: Widget): WidgetPath; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
    _gtkReserved5 : { (): void; };
    _gtkReserved6 : { (): void; };
    _gtkReserved7 : { (): void; };
    _gtkReserved8 : { (): void; };
    
    public findChildProperty(propertyName: string): GObject.ParamSpec;
    public handleBorderWidth(): void;
    public installChildProperties(nPspecs: number, pspecs: GObject.ParamSpec[]): void;
    public installChildProperty(propertyId: number, pspec: GObject.ParamSpec): void;
    public listChildProperties(nProperties: number): GObject.ParamSpec[];
  }
  
  export class ContainerPrivate {
    
  }
  
  export class CssProviderClass {
    public parentClass: GObject.ObjectClass;
    
    parsingError : { (provider: CssProvider, section: CssSection, error: GLib.Error): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class CssProviderPrivate {
    
  }
  
  export class CssSection {
    public getEndLine(): number;
    public getEndPosition(): number;
    public getFile(): Gio.File;
    public getParent(): CssSection;
    public getSectionType(): CssSectionType;
    public getStartLine(): number;
    public getStartPosition(): number;
    public ref(): CssSection;
    public unref(): void;
  }
  
  export class DialogClass {
    public parentClass: WindowClass;
    
    response : { (dialog: Dialog, responseId: number): void; };
    close : { (dialog: Dialog): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class DialogPrivate {
    
  }
  
  export class DrawingAreaClass {
    public parentClass: WidgetClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class EditableInterface {
    public baseIface: GObject.TypeInterface;
    
    insertText : { (editable: Editable, newText: string, newTextLength: number, position: number): void; };
    deleteText : { (editable: Editable, startPos: number, endPos: number): void; };
    changed : { (editable: Editable): void; };
    doInsertText : { (editable: Editable, newText: string, newTextLength: number, position: number): void; };
    doDeleteText : { (editable: Editable, startPos: number, endPos: number): void; };
    getChars : { (editable: Editable, startPos: number, endPos: number): string; };
    setSelectionBounds : { (editable: Editable, startPos: number, endPos: number): void; };
    getSelectionBounds : { (editable: Editable, startPos: number, endPos: number): boolean; };
    setPosition : { (editable: Editable, position: number): void; };
    getPosition : { (editable: Editable): number; };
  }
  
  export class EntryAccessibleClass {
    public parentClass: WidgetAccessibleClass;
  }
  
  export class EntryAccessiblePrivate {
    
  }
  
  export class EntryBufferClass {
    public parentClass: GObject.ObjectClass;
    
    insertedText : { (buffer: EntryBuffer, position: number, chars: string, nChars: number): void; };
    deletedText : { (buffer: EntryBuffer, position: number, nChars: number): void; };
    getText : { (buffer: EntryBuffer, nBytes: number): string; };
    getLength : { (buffer: EntryBuffer): number; };
    insertText : { (buffer: EntryBuffer, position: number, chars: string, nChars: number): number; };
    deleteText : { (buffer: EntryBuffer, position: number, nChars: number): number; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
    _gtkReserved5 : { (): void; };
    _gtkReserved6 : { (): void; };
    _gtkReserved7 : { (): void; };
    _gtkReserved8 : { (): void; };
  }
  
  export class EntryBufferPrivate {
    
  }
  
  export class EntryClass {
    public parentClass: WidgetClass;
    
    populatePopup : { (entry: Entry, popup: Widget): void; };
    activate : { (entry: Entry): void; };
    moveCursor : { (entry: Entry, step: MovementStep, count: number, extendSelection: boolean): void; };
    insertAtCursor : { (entry: Entry, str: string): void; };
    deleteFromCursor : { (entry: Entry, type: DeleteType, count: number): void; };
    backspace : { (entry: Entry): void; };
    cutClipboard : { (entry: Entry): void; };
    copyClipboard : { (entry: Entry): void; };
    pasteClipboard : { (entry: Entry): void; };
    toggleOverwrite : { (entry: Entry): void; };
    getTextAreaSize : { (entry: Entry, x: number, _y: number, width: number, height: number): void; };
    getFrameSize : { (entry: Entry, x: number, _y: number, width: number, height: number): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
    _gtkReserved5 : { (): void; };
    _gtkReserved6 : { (): void; };
    _gtkReserved7 : { (): void; };
  }
  
  export class EntryCompletionClass {
    public parentClass: GObject.ObjectClass;
    
    matchSelected : { (completion: EntryCompletion, model: TreeModel, iter: TreeIter): boolean; };
    actionActivated : { (completion: EntryCompletion, index_: number): void; };
    insertPrefix : { (completion: EntryCompletion, prefix: string): boolean; };
    cursorOnMatch : { (completion: EntryCompletion, model: TreeModel, iter: TreeIter): boolean; };
    noMatches : { (completion: EntryCompletion): void; };
    _gtkReserved0 : { (): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
  }
  
  export class EntryCompletionPrivate {
    
  }
  
  export class EntryPrivate {
    
  }
  
  export class EventBoxClass {
    public parentClass: BinClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class EventBoxPrivate {
    
  }
  
  export class EventControllerClass {
    
  }
  
  export class ExpanderAccessibleClass {
    public parentClass: ContainerAccessibleClass;
  }
  
  export class ExpanderAccessiblePrivate {
    
  }
  
  export class ExpanderClass {
    public parentClass: BinClass;
    
    activate : { (expander: Expander): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ExpanderPrivate {
    
  }
  
  export class FileChooserButtonClass {
    public parentClass: BoxClass;
    public _GtkReserved1: any;
    public _GtkReserved2: any;
    public _GtkReserved3: any;
    public _GtkReserved4: any;
    
    fileSet : { (fc: FileChooserButton): void; };
  }
  
  export class FileChooserButtonPrivate {
    
  }
  
  export class FileChooserDialogClass {
    public parentClass: DialogClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class FileChooserDialogPrivate {
    
  }
  
  export class FileChooserNativeClass {
    public parentClass: NativeDialogClass;
  }
  
  export class FileChooserWidgetClass {
    public parentClass: BoxClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class FileChooserWidgetPrivate {
    
  }
  
  export class FileFilterInfo {
    public contains: FileFilterFlags;
    public filename: string;
    public uri: string;
    public displayName: string;
    public mimeType: string;
  }
  
  export class FixedChild {
    public widget: Widget;
    public x: number;
    public y: number;
  }
  
  export class FixedClass {
    public parentClass: ContainerClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class FixedPrivate {
    
  }
  
  export class FlowBoxAccessibleClass {
    public parentClass: ContainerAccessibleClass;
  }
  
  export class FlowBoxAccessiblePrivate {
    
  }
  
  export class FlowBoxChildAccessibleClass {
    public parentClass: ContainerAccessibleClass;
  }
  
  export class FlowBoxChildClass {
    public parentClass: BinClass;
    
    activate : { (child: FlowBoxChild): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
  }
  
  export class FlowBoxClass {
    public parentClass: ContainerClass;
    
    childActivated : { (box: FlowBox, child: FlowBoxChild): void; };
    selectedChildrenChanged : { (box: FlowBox): void; };
    activateCursorChild : { (box: FlowBox): void; };
    toggleCursorChild : { (box: FlowBox): void; };
    moveCursor : { (box: FlowBox, step: MovementStep, count: number): boolean; };
    selectAll : { (box: FlowBox): void; };
    unselectAll : { (box: FlowBox): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
    _gtkReserved5 : { (): void; };
    _gtkReserved6 : { (): void; };
  }
  
  export class FontButtonClass {
    public parentClass: ButtonClass;
    
    fontSet : { (gfp: FontButton): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class FontButtonPrivate {
    
  }
  
  export class FontChooserDialogClass {
    public parentClass: DialogClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class FontChooserDialogPrivate {
    
  }
  
  export class FontChooserIface {
    public baseIface: GObject.TypeInterface;
    public padding: any[];
    
    getFontFamily : { (fontchooser: FontChooser): Pango.FontFamily; };
    getFontFace : { (fontchooser: FontChooser): Pango.FontFace; };
    getFontSize : { (fontchooser: FontChooser): number; };
    setFilterFunc : { (fontchooser: FontChooser, filter: FontFilterFunc, userData: any, destroy: GLib.DestroyNotify): void; };
    fontActivated : { (chooser: FontChooser, fontname: string): void; };
    setFontMap : { (fontchooser: FontChooser, fontmap: Pango.FontMap): void; };
    getFontMap : { (fontchooser: FontChooser): Pango.FontMap; };
  }
  
  export class FontChooserWidgetClass {
    public parentClass: BoxClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
    _gtkReserved5 : { (): void; };
    _gtkReserved6 : { (): void; };
    _gtkReserved7 : { (): void; };
    _gtkReserved8 : { (): void; };
  }
  
  export class FontChooserWidgetPrivate {
    
  }
  
  export class FontSelectionClass {
    public parentClass: BoxClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class FontSelectionDialogClass {
    public parentClass: DialogClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class FontSelectionDialogPrivate {
    
  }
  
  export class FontSelectionPrivate {
    
  }
  
  export class FrameAccessibleClass {
    public parentClass: ContainerAccessibleClass;
  }
  
  export class FrameAccessiblePrivate {
    
  }
  
  export class FrameClass {
    public parentClass: BinClass;
    
    computeChildAllocation : { (frame: Frame, allocation: Allocation): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class FramePrivate {
    
  }
  
  export class GLAreaClass {
    public parentClass: WidgetClass;
    public _padding: any[];
    
    render : { (area: GLArea, context: Gdk.GLContext): boolean; };
    resize : { (area: GLArea, width: number, height: number): void; };
    createContext : { (area: GLArea): Gdk.GLContext; };
  }
  
  export class GestureClass {
    
  }
  
  export class GestureDragClass {
    
  }
  
  export class GestureLongPressClass {
    
  }
  
  export class GestureMultiPressClass {
    
  }
  
  export class GesturePanClass {
    
  }
  
  export class GestureRotateClass {
    
  }
  
  export class GestureSingleClass {
    
  }
  
  export class GestureSwipeClass {
    
  }
  
  export class GestureZoomClass {
    
  }
  
  export class Gradient {
    public addColorStop(offset: number, color: SymbolicColor): void;
    public ref(): Gradient;
    public resolve(props: StyleProperties, resolvedGradient: cairo.Pattern): boolean;
    public resolveForContext(context: StyleContext): cairo.Pattern;
    public toString(): string;
    public unref(): void;
  }
  
  export class GridClass {
    public parentClass: ContainerClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
    _gtkReserved5 : { (): void; };
    _gtkReserved6 : { (): void; };
    _gtkReserved7 : { (): void; };
    _gtkReserved8 : { (): void; };
  }
  
  export class GridPrivate {
    
  }
  
  export class HBoxClass {
    public parentClass: BoxClass;
  }
  
  export class HButtonBoxClass {
    public parentClass: ButtonBoxClass;
  }
  
  export class HPanedClass {
    public parentClass: PanedClass;
  }
  
  export class HSVClass {
    public parentClass: WidgetClass;
    
    changed : { (hsv: HSV): void; };
    move : { (hsv: HSV, type: DirectionType): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class HSVPrivate {
    
  }
  
  export class HScaleClass {
    public parentClass: ScaleClass;
  }
  
  export class HScrollbarClass {
    public parentClass: ScrollbarClass;
  }
  
  export class HSeparatorClass {
    public parentClass: SeparatorClass;
  }
  
  export class HandleBoxClass {
    public parentClass: BinClass;
    
    childAttached : { (handleBox: HandleBox, child: Widget): void; };
    childDetached : { (handleBox: HandleBox, child: Widget): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class HandleBoxPrivate {
    
  }
  
  export class HeaderBarClass {
    public parentClass: ContainerClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class HeaderBarPrivate {
    
  }
  
  export class IMContextClass {
    public parentClass: GObject.ObjectClass;
    
    preeditStart : { (context: IMContext): void; };
    preeditEnd : { (context: IMContext): void; };
    preeditChanged : { (context: IMContext): void; };
    commit : { (context: IMContext, str: string): void; };
    retrieveSurrounding : { (context: IMContext): boolean; };
    deleteSurrounding : { (context: IMContext, offset: number, nChars: number): boolean; };
    setClientWindow : { (context: IMContext, window: Gdk.Window): void; };
    getPreeditString : { (context: IMContext, str: string, attrs: Pango.AttrList, cursorPos: number): void; };
    filterKeypress : { (context: IMContext, event: Gdk.EventKey): boolean; };
    focusIn : { (context: IMContext): void; };
    focusOut : { (context: IMContext): void; };
    reset : { (context: IMContext): void; };
    setCursorLocation : { (context: IMContext, area: Gdk.Rectangle): void; };
    setUsePreedit : { (context: IMContext, usePreedit: boolean): void; };
    setSurrounding : { (context: IMContext, text: string, len: number, cursorIndex: number): void; };
    getSurrounding : { (context: IMContext, text: string, cursorIndex: number): boolean; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
    _gtkReserved5 : { (): void; };
    _gtkReserved6 : { (): void; };
  }
  
  export class IMContextInfo {
    public contextId: string;
    public contextName: string;
    public domain: string;
    public domainDirname: string;
    public defaultLocales: string;
  }
  
  export class IMContextSimpleClass {
    public parentClass: IMContextClass;
  }
  
  export class IMContextSimplePrivate {
    
  }
  
  export class IMMulticontextClass {
    public parentClass: IMContextClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class IMMulticontextPrivate {
    
  }
  
  export class IconFactoryClass {
    public parentClass: GObject.ObjectClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class IconFactoryPrivate {
    
  }
  
  export class IconInfoClass {
    
  }
  
  export class IconSet {
    public addSource(source: IconSource): void;
    public copy(): IconSet;
    public getSizes(sizes: number[], nSizes: number): void;
    public ref(): IconSet;
    public renderIcon(style: Style, direction: TextDirection, state: StateType, size: number, widget: Widget, detail: string): GdkPixbuf.Pixbuf;
    public renderIconPixbuf(context: StyleContext, size: number): GdkPixbuf.Pixbuf;
    public renderIconSurface(context: StyleContext, size: number, scale: number, forWindow: Gdk.Window): cairo.Surface;
    public unref(): void;
  }
  
  export class IconSource {
    public copy(): IconSource;
    public free(): void;
    public getDirection(): TextDirection;
    public getDirectionWildcarded(): boolean;
    public getFilename(): string;
    public getIconName(): string;
    public getPixbuf(): GdkPixbuf.Pixbuf;
    public getSize(): number;
    public getSizeWildcarded(): boolean;
    public getState(): StateType;
    public getStateWildcarded(): boolean;
    public setDirection(direction: TextDirection): void;
    public setDirectionWildcarded(setting: boolean): void;
    public setFilename(filename: string): void;
    public setIconName(iconName: string): void;
    public setPixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
    public setSize(size: number): void;
    public setSizeWildcarded(setting: boolean): void;
    public setState(state: StateType): void;
    public setStateWildcarded(setting: boolean): void;
  }
  
  export class IconThemeClass {
    public parentClass: GObject.ObjectClass;
    
    changed : { (iconTheme: IconTheme): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class IconThemePrivate {
    
  }
  
  export class IconViewAccessibleClass {
    public parentClass: ContainerAccessibleClass;
  }
  
  export class IconViewAccessiblePrivate {
    
  }
  
  export class IconViewClass {
    public parentClass: ContainerClass;
    
    itemActivated : { (iconView: IconView, path: TreePath): void; };
    selectionChanged : { (iconView: IconView): void; };
    selectAll : { (iconView: IconView): void; };
    unselectAll : { (iconView: IconView): void; };
    selectCursorItem : { (iconView: IconView): void; };
    toggleCursorItem : { (iconView: IconView): void; };
    moveCursor : { (iconView: IconView, step: MovementStep, count: number): boolean; };
    activateCursorItem : { (iconView: IconView): boolean; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class IconViewPrivate {
    
  }
  
  export class ImageAccessibleClass {
    public parentClass: WidgetAccessibleClass;
  }
  
  export class ImageAccessiblePrivate {
    
  }
  
  export class ImageCellAccessibleClass {
    public parentClass: RendererCellAccessibleClass;
  }
  
  export class ImageCellAccessiblePrivate {
    
  }
  
  export class ImageClass {
    public parentClass: MiscClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ImageMenuItemClass {
    public parentClass: MenuItemClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ImageMenuItemPrivate {
    
  }
  
  export class ImagePrivate {
    
  }
  
  export class InfoBarClass {
    public parentClass: BoxClass;
    
    response : { (infoBar: InfoBar, responseId: number): void; };
    close : { (infoBar: InfoBar): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class InfoBarPrivate {
    
  }
  
  export class InvisibleClass {
    public parentClass: WidgetClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class InvisiblePrivate {
    
  }
  
  export class LabelAccessibleClass {
    public parentClass: WidgetAccessibleClass;
  }
  
  export class LabelAccessiblePrivate {
    
  }
  
  export class LabelClass {
    public parentClass: MiscClass;
    
    moveCursor : { (label: Label, step: MovementStep, count: number, extendSelection: boolean): void; };
    copyClipboard : { (label: Label): void; };
    populatePopup : { (label: Label, menu: Menu): void; };
    activateLink : { (label: Label, uri: string): boolean; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
    _gtkReserved5 : { (): void; };
    _gtkReserved6 : { (): void; };
    _gtkReserved7 : { (): void; };
    _gtkReserved8 : { (): void; };
  }
  
  export class LabelPrivate {
    
  }
  
  export class LabelSelectionInfo {
    
  }
  
  export class LayoutClass {
    public parentClass: ContainerClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class LayoutPrivate {
    
  }
  
  export class LevelBarAccessibleClass {
    public parentClass: WidgetAccessibleClass;
  }
  
  export class LevelBarAccessiblePrivate {
    
  }
  
  export class LevelBarClass {
    public parentClass: WidgetClass;
    public padding: any[];
    
    offsetChanged : { (self: LevelBar, name: string): void; };
  }
  
  export class LevelBarPrivate {
    
  }
  
  export class LinkButtonAccessibleClass {
    public parentClass: ButtonAccessibleClass;
  }
  
  export class LinkButtonAccessiblePrivate {
    
  }
  
  export class LinkButtonClass {
    public parentClass: ButtonClass;
    
    activateLink : { (button: LinkButton): boolean; };
    _gtkPadding1 : { (): void; };
    _gtkPadding2 : { (): void; };
    _gtkPadding3 : { (): void; };
    _gtkPadding4 : { (): void; };
  }
  
  export class LinkButtonPrivate {
    
  }
  
  export class ListBoxAccessibleClass {
    public parentClass: ContainerAccessibleClass;
  }
  
  export class ListBoxAccessiblePrivate {
    
  }
  
  export class ListBoxClass {
    public parentClass: ContainerClass;
    
    rowSelected : { (box: ListBox, _row: ListBoxRow): void; };
    rowActivated : { (box: ListBox, _row: ListBoxRow): void; };
    activateCursorRow : { (box: ListBox): void; };
    toggleCursorRow : { (box: ListBox): void; };
    moveCursor : { (box: ListBox, step: MovementStep, count: number): void; };
    selectedRowsChanged : { (box: ListBox): void; };
    selectAll : { (box: ListBox): void; };
    unselectAll : { (box: ListBox): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
  }
  
  export class ListBoxRowAccessibleClass {
    public parentClass: ContainerAccessibleClass;
  }
  
  export class ListBoxRowClass {
    public parentClass: BinClass;
    
    activate : { (_row: ListBoxRow): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
  }
  
  export class ListStoreClass {
    public parentClass: GObject.ObjectClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ListStorePrivate {
    
  }
  
  export class LockButtonAccessibleClass {
    public parentClass: ButtonAccessibleClass;
  }
  
  export class LockButtonAccessiblePrivate {
    
  }
  
  export class LockButtonClass {
    public parentClass: ButtonClass;
    
    reserved0 : { (): void; };
    reserved1 : { (): void; };
    reserved2 : { (): void; };
    reserved3 : { (): void; };
    reserved4 : { (): void; };
    reserved5 : { (): void; };
    reserved6 : { (): void; };
    reserved7 : { (): void; };
  }
  
  export class LockButtonPrivate {
    
  }
  
  export class MenuAccessibleClass {
    public parentClass: MenuShellAccessibleClass;
  }
  
  export class MenuAccessiblePrivate {
    
  }
  
  export class MenuBarClass {
    public parentClass: MenuShellClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class MenuBarPrivate {
    
  }
  
  export class MenuButtonAccessibleClass {
    public parentClass: ToggleButtonAccessibleClass;
  }
  
  export class MenuButtonAccessiblePrivate {
    
  }
  
  export class MenuButtonClass {
    public parentClass: ToggleButtonClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class MenuButtonPrivate {
    
  }
  
  export class MenuClass {
    public parentClass: MenuShellClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class MenuItemAccessibleClass {
    public parentClass: ContainerAccessibleClass;
  }
  
  export class MenuItemAccessiblePrivate {
    
  }
  
  export class MenuItemClass {
    public parentClass: BinClass;
    public hideOnActivate: number;
    
    activate : { (menuItem: MenuItem): void; };
    activateItem : { (menuItem: MenuItem): void; };
    toggleSizeRequest : { (menuItem: MenuItem, requisition: number): void; };
    toggleSizeAllocate : { (menuItem: MenuItem, allocation: number): void; };
    setLabel : { (menuItem: MenuItem, label: string): void; };
    getLabel : { (menuItem: MenuItem): string; };
    select : { (menuItem: MenuItem): void; };
    deselect : { (menuItem: MenuItem): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class MenuItemPrivate {
    
  }
  
  export class MenuPrivate {
    
  }
  
  export class MenuShellAccessibleClass {
    public parentClass: ContainerAccessibleClass;
  }
  
  export class MenuShellAccessiblePrivate {
    
  }
  
  export class MenuShellClass {
    public parentClass: ContainerClass;
    public submenuPlacement: number;
    
    deactivate : { (menuShell: MenuShell): void; };
    selectionDone : { (menuShell: MenuShell): void; };
    moveCurrent : { (menuShell: MenuShell, direction: MenuDirectionType): void; };
    activateCurrent : { (menuShell: MenuShell, forceHide: boolean): void; };
    cancel : { (menuShell: MenuShell): void; };
    selectItem : { (menuShell: MenuShell, menuItem: Widget): void; };
    insert : { (menuShell: MenuShell, child: Widget, position: number): void; };
    getPopupDelay : { (menuShell: MenuShell): number; };
    moveSelected : { (menuShell: MenuShell, distance: number): boolean; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class MenuShellPrivate {
    
  }
  
  export class MenuToolButtonClass {
    public parentClass: ToolButtonClass;
    
    showMenu : { (button: MenuToolButton): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class MenuToolButtonPrivate {
    
  }
  
  export class MessageDialogClass {
    public parentClass: DialogClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class MessageDialogPrivate {
    
  }
  
  export class MiscClass {
    public parentClass: WidgetClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class MiscPrivate {
    
  }
  
  export class MountOperationClass {
    public parentClass: Gio.MountOperationClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class MountOperationPrivate {
    
  }
  
  export class NativeDialogClass {
    public parentClass: GObject.ObjectClass;
    
    response : { (self: NativeDialog, responseId: number): void; };
    show : { (self: NativeDialog): void; };
    hide : { (self: NativeDialog): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class NotebookAccessibleClass {
    public parentClass: ContainerAccessibleClass;
  }
  
  export class NotebookAccessiblePrivate {
    
  }
  
  export class NotebookClass {
    public parentClass: ContainerClass;
    
    switchPage : { (notebook: Notebook, page: Widget, pageNum: number): void; };
    selectPage : { (notebook: Notebook, moveFocus: boolean): boolean; };
    focusTab : { (notebook: Notebook, type: NotebookTab): boolean; };
    changeCurrentPage : { (notebook: Notebook, offset: number): boolean; };
    moveFocusOut : { (notebook: Notebook, direction: DirectionType): void; };
    reorderTab : { (notebook: Notebook, direction: DirectionType, moveToLast: boolean): boolean; };
    insertPage : { (notebook: Notebook, child: Widget, tabLabel: Widget, menuLabel: Widget, position: number): number; };
    createWindow : { (notebook: Notebook, page: Widget, x: number, _y: number): Notebook; };
    pageReordered : { (notebook: Notebook, child: Widget, pageNum: number): void; };
    pageRemoved : { (notebook: Notebook, child: Widget, pageNum: number): void; };
    pageAdded : { (notebook: Notebook, child: Widget, pageNum: number): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
    _gtkReserved5 : { (): void; };
    _gtkReserved6 : { (): void; };
    _gtkReserved7 : { (): void; };
    _gtkReserved8 : { (): void; };
  }
  
  export class NotebookPageAccessibleClass {
    public parentClass: Atk.ObjectClass;
  }
  
  export class NotebookPageAccessiblePrivate {
    
  }
  
  export class NotebookPrivate {
    
  }
  
  export class NumerableIconClass {
    public parentClass: Gio.EmblemedIconClass;
    public padding: any[];
  }
  
  export class NumerableIconPrivate {
    
  }
  
  export class OffscreenWindowClass {
    public parentClass: WindowClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class OrientableIface {
    public baseIface: GObject.TypeInterface;
  }
  
  export class OverlayClass {
    public parentClass: BinClass;
    
    getChildPosition : { (overlay: Overlay, widget: Widget, allocation: Allocation): boolean; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
    _gtkReserved5 : { (): void; };
    _gtkReserved6 : { (): void; };
    _gtkReserved7 : { (): void; };
    _gtkReserved8 : { (): void; };
  }
  
  export class OverlayPrivate {
    
  }
  
  export class PadActionEntry {
    public type: PadActionType;
    public index: number;
    public mode: number;
    public label: string;
    public actionName: string;
  }
  
  export class PadControllerClass {
    
  }
  
  export class PageRange {
    public start: number;
    public end: number;
  }
  
  export class PanedAccessibleClass {
    public parentClass: ContainerAccessibleClass;
  }
  
  export class PanedAccessiblePrivate {
    
  }
  
  export class PanedClass {
    public parentClass: ContainerClass;
    
    cycleChildFocus : { (paned: Paned, reverse: boolean): boolean; };
    toggleHandleFocus : { (paned: Paned): boolean; };
    moveHandle : { (paned: Paned, scroll: ScrollType): boolean; };
    cycleHandleFocus : { (paned: Paned, reverse: boolean): boolean; };
    acceptPosition : { (paned: Paned): boolean; };
    cancelPosition : { (paned: Paned): boolean; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class PanedPrivate {
    
  }
  
  export class PaperSize {
    public copy(): PaperSize;
    public free(): void;
    public getDefaultBottomMargin(unit: Unit): number;
    public getDefaultLeftMargin(unit: Unit): number;
    public getDefaultRightMargin(unit: Unit): number;
    public getDefaultTopMargin(unit: Unit): number;
    public getDisplayName(): string;
    public getHeight(unit: Unit): number;
    public getName(): string;
    public getPpdName(): string;
    public getWidth(unit: Unit): number;
    public isCustom(): boolean;
    public isEqual(size2: PaperSize): boolean;
    public isIpp(): boolean;
    public setSize(width: number, height: number, unit: Unit): void;
    public toGvariant(): GLib.Variant;
    public toKeyFile(keyFile: GLib.KeyFile, groupName: string): void;
  }
  
  export class PlacesSidebarClass {
    
  }
  
  export class PlugClass {
    public parentClass: WindowClass;
    
    embedded : { (plug: Plug): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class PlugPrivate {
    
  }
  
  export class PopoverAccessibleClass {
    public parentClass: ContainerAccessibleClass;
  }
  
  export class PopoverClass {
    public parentClass: BinClass;
    public reserved: any[];
    
    closed : { (popover: Popover): void; };
  }
  
  export class PopoverMenuClass {
    public parentClass: PopoverClass;
    public reserved: any[];
  }
  
  export class PopoverPrivate {
    
  }
  
  export class PrintOperationClass {
    public parentClass: GObject.ObjectClass;
    
    done : { (operation: PrintOperation, result: PrintOperationResult): void; };
    beginPrint : { (operation: PrintOperation, context: PrintContext): void; };
    paginate : { (operation: PrintOperation, context: PrintContext): boolean; };
    requestPageSetup : { (operation: PrintOperation, context: PrintContext, pageNr: number, setup: PageSetup): void; };
    drawPage : { (operation: PrintOperation, context: PrintContext, pageNr: number): void; };
    endPrint : { (operation: PrintOperation, context: PrintContext): void; };
    statusChanged : { (operation: PrintOperation): void; };
    createCustomWidget : { (operation: PrintOperation): Widget; };
    customWidgetApply : { (operation: PrintOperation, widget: Widget): void; };
    preview : { (operation: PrintOperation, preview: PrintOperationPreview, context: PrintContext, parent: Window): boolean; };
    updateCustomWidget : { (operation: PrintOperation, widget: Widget, setup: PageSetup, settings: PrintSettings): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
    _gtkReserved5 : { (): void; };
    _gtkReserved6 : { (): void; };
    _gtkReserved7 : { (): void; };
    _gtkReserved8 : { (): void; };
  }
  
  export class PrintOperationPreviewIface {
    public gIface: GObject.TypeInterface;
    
    ready : { (preview: PrintOperationPreview, context: PrintContext): void; };
    gotPageSize : { (preview: PrintOperationPreview, context: PrintContext, pageSetup: PageSetup): void; };
    renderPage : { (preview: PrintOperationPreview, pageNr: number): void; };
    isSelected : { (preview: PrintOperationPreview, pageNr: number): boolean; };
    endPreview : { (preview: PrintOperationPreview): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
    _gtkReserved5 : { (): void; };
    _gtkReserved6 : { (): void; };
    _gtkReserved7 : { (): void; };
    _gtkReserved8 : { (): void; };
  }
  
  export class PrintOperationPrivate {
    
  }
  
  export class ProgressBarAccessibleClass {
    public parentClass: WidgetAccessibleClass;
  }
  
  export class ProgressBarAccessiblePrivate {
    
  }
  
  export class ProgressBarClass {
    public parentClass: WidgetClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ProgressBarPrivate {
    
  }
  
  export class RadioActionClass {
    public parentClass: ToggleActionClass;
    
    changed : { (action: RadioAction, current: RadioAction): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class RadioActionEntry {
    public name: string;
    public stockId: string;
    public label: string;
    public accelerator: string;
    public tooltip: string;
    public value: number;
  }
  
  export class RadioActionPrivate {
    
  }
  
  export class RadioButtonAccessibleClass {
    public parentClass: ToggleButtonAccessibleClass;
  }
  
  export class RadioButtonAccessiblePrivate {
    
  }
  
  export class RadioButtonClass {
    public parentClass: CheckButtonClass;
    
    groupChanged : { (radioButton: RadioButton): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class RadioButtonPrivate {
    
  }
  
  export class RadioMenuItemAccessibleClass {
    public parentClass: CheckMenuItemAccessibleClass;
  }
  
  export class RadioMenuItemAccessiblePrivate {
    
  }
  
  export class RadioMenuItemClass {
    public parentClass: CheckMenuItemClass;
    
    groupChanged : { (radioMenuItem: RadioMenuItem): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class RadioMenuItemPrivate {
    
  }
  
  export class RadioToolButtonClass {
    public parentClass: ToggleToolButtonClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class RangeAccessibleClass {
    public parentClass: WidgetAccessibleClass;
  }
  
  export class RangeAccessiblePrivate {
    
  }
  
  export class RangeClass {
    public parentClass: WidgetClass;
    public sliderDetail: string;
    public stepperDetail: string;
    
    valueChanged : { (range: Range): void; };
    adjustBounds : { (range: Range, newValue: number): void; };
    moveSlider : { (range: Range, scroll: ScrollType): void; };
    getRangeBorder : { (range: Range, border_: Border): void; };
    changeValue : { (range: Range, scroll: ScrollType, newValue: number): boolean; };
    getRangeSizeRequest : { (range: Range, orientation: Orientation, minimum: number, natural: number): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
  }
  
  export class RangePrivate {
    
  }
  
  export class RcContext {
    
  }
  
  export class RcProperty {
    public typeName: GLib.Quark;
    public propertyName: GLib.Quark;
    public origin: string;
    public value: GObject.Value;
  }
  
  export class RcStyleClass {
    public parentClass: GObject.ObjectClass;
    
    createRcStyle : { (rcStyle: RcStyle): RcStyle; };
    parse : { (rcStyle: RcStyle, settings: Settings, scanner: GLib.Scanner): number; };
    merge : { (dest: RcStyle, src: RcStyle): void; };
    createStyle : { (rcStyle: RcStyle): Style; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class RecentActionClass {
    public parentClass: ActionClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class RecentActionPrivate {
    
  }
  
  export class RecentChooserDialogClass {
    public parentClass: DialogClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class RecentChooserDialogPrivate {
    
  }
  
  export class RecentChooserIface {
    public baseIface: GObject.TypeInterface;
    
    setCurrentUri : { (chooser: RecentChooser, uri: string): boolean; };
    getCurrentUri : { (chooser: RecentChooser): string; };
    selectUri : { (chooser: RecentChooser, uri: string): boolean; };
    unselectUri : { (chooser: RecentChooser, uri: string): void; };
    selectAll : { (chooser: RecentChooser): void; };
    unselectAll : { (chooser: RecentChooser): void; };
    getItems : { (chooser: RecentChooser): GLib.List; };
    getRecentManager : { (chooser: RecentChooser): RecentManager; };
    addFilter : { (chooser: RecentChooser, filter: RecentFilter): void; };
    removeFilter : { (chooser: RecentChooser, filter: RecentFilter): void; };
    listFilters : { (chooser: RecentChooser): GLib.SList; };
    setSortFunc : { (chooser: RecentChooser, sortFunc: RecentSortFunc, sortData: any, dataDestroy: GLib.DestroyNotify): void; };
    itemActivated : { (chooser: RecentChooser): void; };
    selectionChanged : { (chooser: RecentChooser): void; };
  }
  
  export class RecentChooserMenuClass {
    public parentClass: MenuClass;
    
    gtkRecent1 : { (): void; };
    gtkRecent2 : { (): void; };
    gtkRecent3 : { (): void; };
    gtkRecent4 : { (): void; };
  }
  
  export class RecentChooserMenuPrivate {
    
  }
  
  export class RecentChooserWidgetClass {
    public parentClass: BoxClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class RecentChooserWidgetPrivate {
    
  }
  
  export class RecentData {
    public displayName: string;
    public description: string;
    public mimeType: string;
    public appName: string;
    public appExec: string;
    public groups: string[];
    public isPrivate: boolean;
  }
  
  export class RecentFilterInfo {
    public contains: RecentFilterFlags;
    public uri: string;
    public displayName: string;
    public mimeType: string;
    public applications: string[];
    public groups: string[];
    public age: number;
  }
  
  export class RecentInfo {
    public createAppInfo(appName: string): Gio.AppInfo;
    public exists(): boolean;
    public getAdded(): number;
    public getAge(): number;
    public getApplicationInfo(appName: string, appExec: string, count: number, time_: number): boolean;
    public getApplications(length: number): string[];
    public getDescription(): string;
    public getDisplayName(): string;
    public getGicon(): Gio.Icon;
    public getGroups(length: number): string[];
    public getIcon(size: number): GdkPixbuf.Pixbuf;
    public getMimeType(): string;
    public getModified(): number;
    public getPrivateHint(): boolean;
    public getShortName(): string;
    public getUri(): string;
    public getUriDisplay(): string;
    public getVisited(): number;
    public hasApplication(appName: string): boolean;
    public hasGroup(groupName: string): boolean;
    public isLocal(): boolean;
    public lastApplication(): string;
    public match(infoB: RecentInfo): boolean;
    public ref(): RecentInfo;
    public unref(): void;
  }
  
  export class RecentManagerClass {
    public parentClass: GObject.ObjectClass;
    
    changed : { (manager: RecentManager): void; };
    _gtkRecent1 : { (): void; };
    _gtkRecent2 : { (): void; };
    _gtkRecent3 : { (): void; };
    _gtkRecent4 : { (): void; };
  }
  
  export class RecentManagerPrivate {
    
  }
  
  export class RendererCellAccessibleClass {
    public parentClass: CellAccessibleClass;
  }
  
  export class RendererCellAccessiblePrivate {
    
  }
  
  export class RequestedSize {
    public data: any;
    public minimumSize: number;
    public naturalSize: number;
  }
  
  export class Requisition {
    public width: number;
    public height: number;
    
    public copy(): Requisition;
    public free(): void;
  }
  
  export class RevealerClass {
    public parentClass: BinClass;
  }
  
  export class ScaleAccessibleClass {
    public parentClass: RangeAccessibleClass;
  }
  
  export class ScaleAccessiblePrivate {
    
  }
  
  export class ScaleButtonAccessibleClass {
    public parentClass: ButtonAccessibleClass;
  }
  
  export class ScaleButtonAccessiblePrivate {
    
  }
  
  export class ScaleButtonClass {
    public parentClass: ButtonClass;
    
    valueChanged : { (button: ScaleButton, value: number): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ScaleButtonPrivate {
    
  }
  
  export class ScaleClass {
    public parentClass: RangeClass;
    
    formatValue : { (scale: Scale, value: number): string; };
    drawValue : { (scale: Scale): void; };
    getLayoutOffsets : { (scale: Scale, x: number, _y: number): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ScalePrivate {
    
  }
  
  export class ScrollableInterface {
    public baseIface: GObject.TypeInterface;
    
    getBorder : { (scrollable: Scrollable, border: Border): boolean; };
  }
  
  export class ScrollbarClass {
    public parentClass: RangeClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ScrolledWindowAccessibleClass {
    public parentClass: ContainerAccessibleClass;
  }
  
  export class ScrolledWindowAccessiblePrivate {
    
  }
  
  export class ScrolledWindowClass {
    public parentClass: BinClass;
    public scrollbarSpacing: number;
    
    scrollChild : { (scrolledWindow: ScrolledWindow, scroll: ScrollType, horizontal: boolean): boolean; };
    moveFocusOut : { (scrolledWindow: ScrolledWindow, direction: DirectionType): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ScrolledWindowPrivate {
    
  }
  
  export class SearchBarClass {
    public parentClass: BinClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class SearchEntryClass {
    public parentClass: EntryClass;
    
    searchChanged : { (entry: SearchEntry): void; };
    nextMatch : { (entry: SearchEntry): void; };
    previousMatch : { (entry: SearchEntry): void; };
    stopSearch : { (entry: SearchEntry): void; };
  }
  
  export class SelectionData {
    public copy(): SelectionData;
    public free(): void;
    public getData(): number[];
    public getDataType(): Gdk.Atom;
    public getDataWithLength(length: number): number[];
    public getDisplay(): Gdk.Display;
    public getFormat(): number;
    public getLength(): number;
    public getPixbuf(): GdkPixbuf.Pixbuf;
    public getSelection(): Gdk.Atom;
    public getTarget(): Gdk.Atom;
    public getTargets(targets: Gdk.Atom[], nAtoms: number): boolean;
    public getText(): string;
    public getUris(): string[];
    public set(type: Gdk.Atom, format: number, data: number[], length: number): void;
    public setPixbuf(pixbuf: GdkPixbuf.Pixbuf): boolean;
    public setText(str: string, len: number): boolean;
    public setUris(uris: string[]): boolean;
    public targetsIncludeImage(writable: boolean): boolean;
    public targetsIncludeRichText(buffer: TextBuffer): boolean;
    public targetsIncludeText(): boolean;
    public targetsIncludeUri(): boolean;
  }
  
  export class SeparatorClass {
    public parentClass: WidgetClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class SeparatorMenuItemClass {
    public parentClass: MenuItemClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class SeparatorPrivate {
    
  }
  
  export class SeparatorToolItemClass {
    public parentClass: ToolItemClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class SeparatorToolItemPrivate {
    
  }
  
  export class SettingsClass {
    public parentClass: GObject.ObjectClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class SettingsPrivate {
    
  }
  
  export class SettingsValue {
    public origin: string;
    public value: GObject.Value;
  }
  
  export class ShortcutLabelClass {
    
  }
  
  export class ShortcutsGroupClass {
    
  }
  
  export class ShortcutsSectionClass {
    
  }
  
  export class ShortcutsShortcutClass {
    
  }
  
  export class ShortcutsWindowClass {
    public parentClass: WindowClass;
    
    close : { (self: ShortcutsWindow): void; };
    search : { (self: ShortcutsWindow): void; };
  }
  
  export class SizeGroupClass {
    public parentClass: GObject.ObjectClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class SizeGroupPrivate {
    
  }
  
  export class SocketClass {
    public parentClass: ContainerClass;
    
    plugAdded : { (socket_: Socket): void; };
    plugRemoved : { (socket_: Socket): boolean; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class SocketPrivate {
    
  }
  
  export class SpinButtonAccessibleClass {
    public parentClass: EntryAccessibleClass;
  }
  
  export class SpinButtonAccessiblePrivate {
    
  }
  
  export class SpinButtonClass {
    public parentClass: EntryClass;
    
    input : { (spinButton: SpinButton, newValue: number): number; };
    output : { (spinButton: SpinButton): number; };
    valueChanged : { (spinButton: SpinButton): void; };
    changeValue : { (spinButton: SpinButton, scroll: ScrollType): void; };
    wrapped : { (spinButton: SpinButton): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class SpinButtonPrivate {
    
  }
  
  export class SpinnerAccessibleClass {
    public parentClass: WidgetAccessibleClass;
  }
  
  export class SpinnerAccessiblePrivate {
    
  }
  
  export class SpinnerClass {
    public parentClass: WidgetClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class SpinnerPrivate {
    
  }
  
  export class StackAccessibleClass {
    public parentClass: ContainerAccessibleClass;
  }
  
  export class StackClass {
    public parentClass: ContainerClass;
  }
  
  export class StackSidebarClass {
    public parentClass: BinClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class StackSidebarPrivate {
    
  }
  
  export class StackSwitcherClass {
    public parentClass: BoxClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class StatusIconClass {
    public parentClass: GObject.ObjectClass;
    public _GtkReserved1: any;
    public _GtkReserved2: any;
    public _GtkReserved3: any;
    public _GtkReserved4: any;
    
    activate : { (statusIcon: StatusIcon): void; };
    popupMenu : { (statusIcon: StatusIcon, button: number, activateTime: number): void; };
    sizeChanged : { (statusIcon: StatusIcon, size: number): boolean; };
    buttonPressEvent : { (statusIcon: StatusIcon, event: Gdk.EventButton): boolean; };
    buttonReleaseEvent : { (statusIcon: StatusIcon, event: Gdk.EventButton): boolean; };
    scrollEvent : { (statusIcon: StatusIcon, event: Gdk.EventScroll): boolean; };
    queryTooltip : { (statusIcon: StatusIcon, x: number, _y: number, keyboardMode: boolean, tooltip: Tooltip): boolean; };
  }
  
  export class StatusIconPrivate {
    
  }
  
  export class StatusbarAccessibleClass {
    public parentClass: ContainerAccessibleClass;
  }
  
  export class StatusbarAccessiblePrivate {
    
  }
  
  export class StatusbarClass {
    public parentClass: BoxClass;
    public reserved: any;
    
    textPushed : { (statusbar: Statusbar, contextId: number, text: string): void; };
    textPopped : { (statusbar: Statusbar, contextId: number, text: string): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class StatusbarPrivate {
    
  }
  
  export class StockItem {
    public stockId: string;
    public label: string;
    public modifier: Gdk.ModifierType;
    public keyval: number;
    public translationDomain: string;
    
    public copy(): StockItem;
    public free(): void;
  }
  
  export class StyleClass {
    public parentClass: GObject.ObjectClass;
    
    realize : { (style: Style): void; };
    unrealize : { (style: Style): void; };
    copy : { (style: Style, src: Style): void; };
    clone : { (style: Style): Style; };
    initFromRc : { (style: Style, rcStyle: RcStyle): void; };
    setBackground : { (style: Style, window: Gdk.Window, stateType: StateType): void; };
    renderIcon : { (style: Style, source: IconSource, direction: TextDirection, state: StateType, size: number, widget: Widget, detail: string): GdkPixbuf.Pixbuf; };
    drawHline : { (style: Style, cr: cairo.Context, stateType: StateType, widget: Widget, detail: string, x1: number, x2: number, _y: number): void; };
    drawVline : { (style: Style, cr: cairo.Context, stateType: StateType, widget: Widget, detail: string, y1_: number, y2_: number, x: number): void; };
    drawShadow : { (style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number): void; };
    drawArrow : { (style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, arrowType: ArrowType, fill: boolean, x: number, _y: number, width: number, height: number): void; };
    drawDiamond : { (style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number): void; };
    drawBox : { (style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number): void; };
    drawFlatBox : { (style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number): void; };
    drawCheck : { (style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number): void; };
    drawOption : { (style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number): void; };
    drawTab : { (style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number): void; };
    drawShadowGap : { (style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number, gapSide: PositionType, gapX: number, gapWidth: number): void; };
    drawBoxGap : { (style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number, gapSide: PositionType, gapX: number, gapWidth: number): void; };
    drawExtension : { (style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number, gapSide: PositionType): void; };
    drawFocus : { (style: Style, cr: cairo.Context, stateType: StateType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number): void; };
    drawSlider : { (style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number, orientation: Orientation): void; };
    drawHandle : { (style: Style, cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number, orientation: Orientation): void; };
    drawExpander : { (style: Style, cr: cairo.Context, stateType: StateType, widget: Widget, detail: string, x: number, _y: number, expanderStyle: ExpanderStyle): void; };
    drawLayout : { (style: Style, cr: cairo.Context, stateType: StateType, useText: boolean, widget: Widget, detail: string, x: number, _y: number, layout: Pango.Layout): void; };
    drawResizeGrip : { (style: Style, cr: cairo.Context, stateType: StateType, widget: Widget, detail: string, edge: Gdk.WindowEdge, x: number, _y: number, width: number, height: number): void; };
    drawSpinner : { (style: Style, cr: cairo.Context, stateType: StateType, widget: Widget, detail: string, step: number, x: number, _y: number, width: number, height: number): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
    _gtkReserved5 : { (): void; };
    _gtkReserved6 : { (): void; };
    _gtkReserved7 : { (): void; };
    _gtkReserved8 : { (): void; };
    _gtkReserved9 : { (): void; };
    _gtkReserved10 : { (): void; };
    _gtkReserved11 : { (): void; };
  }
  
  export class StyleContextClass {
    public parentClass: GObject.ObjectClass;
    
    changed : { (context: StyleContext): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class StyleContextPrivate {
    
  }
  
  export class StylePropertiesClass {
    public parentClass: GObject.ObjectClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class StylePropertiesPrivate {
    
  }
  
  export class StyleProviderIface {
    public gIface: GObject.TypeInterface;
    
    getStyle : { (provider: StyleProvider, path: WidgetPath): StyleProperties; };
    getStyleProperty : { (provider: StyleProvider, path: WidgetPath, state: StateFlags, pspec: GObject.ParamSpec, value: GObject.Value): boolean; };
    getIconFactory : { (provider: StyleProvider, path: WidgetPath): IconFactory; };
  }
  
  export class SwitchAccessibleClass {
    public parentClass: WidgetAccessibleClass;
  }
  
  export class SwitchAccessiblePrivate {
    
  }
  
  export class SwitchClass {
    public parentClass: WidgetClass;
    
    activate : { (sw: Switch): void; };
    stateSet : { (sw: Switch, state: boolean): boolean; };
    _switchPadding_1 : { (): void; };
    _switchPadding_2 : { (): void; };
    _switchPadding_3 : { (): void; };
    _switchPadding_4 : { (): void; };
    _switchPadding_5 : { (): void; };
  }
  
  export class SwitchPrivate {
    
  }
  
  export class SymbolicColor {
    public ref(): SymbolicColor;
    public resolve(props: StyleProperties, resolvedColor: Gdk.RGBA): boolean;
    public toString(): string;
    public unref(): void;
  }
  
  export class TableChild {
    public widget: Widget;
    public leftAttach: number;
    public rightAttach: number;
    public topAttach: number;
    public bottomAttach: number;
    public xpadding: number;
    public ypadding: number;
    public xexpand: number;
    public yexpand: number;
    public xshrink: number;
    public yshrink: number;
    public xfill: number;
    public yfill: number;
  }
  
  export class TableClass {
    public parentClass: ContainerClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class TablePrivate {
    
  }
  
  export class TableRowCol {
    public requisition: number;
    public allocation: number;
    public spacing: number;
    public needExpand: number;
    public needShrink: number;
    public expand: number;
    public shrink: number;
    public empty: number;
  }
  
  export class TargetEntry {
    public target: string;
    public flags: number;
    public info: number;
    
    public copy(): TargetEntry;
    public free(): void;
  }
  
  export class TargetList {
    public add(target: Gdk.Atom, flags: number, info: number): void;
    public addImageTargets(info: number, writable: boolean): void;
    public addRichTextTargets(info: number, deserializable: boolean, buffer: TextBuffer): void;
    public addTable(targets: TargetEntry[], ntargets: number): void;
    public addTextTargets(info: number): void;
    public addUriTargets(info: number): void;
    public find(target: Gdk.Atom, info: number): boolean;
    public ref(): TargetList;
    public remove(target: Gdk.Atom): void;
    public unref(): void;
  }
  
  export class TargetPair {
    public target: Gdk.Atom;
    public flags: number;
    public info: number;
  }
  
  export class TearoffMenuItemClass {
    public parentClass: MenuItemClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class TearoffMenuItemPrivate {
    
  }
  
  export class TextAppearance {
    public bgColor: Gdk.Color;
    public fgColor: Gdk.Color;
    public rise: number;
    public underline: number;
    public strikethrough: number;
    public drawBg: number;
    public insideSelection: number;
    public isText: number;
  }
  
  export class TextAttributes {
    public refcount: number;
    public appearance: TextAppearance;
    public justification: Justification;
    public direction: TextDirection;
    public font: Pango.FontDescription;
    public fontScale: number;
    public leftMargin: number;
    public rightMargin: number;
    public indent: number;
    public pixelsAboveLines: number;
    public pixelsBelowLines: number;
    public pixelsInsideWrap: number;
    public tabs: Pango.TabArray;
    public wrapMode: WrapMode;
    public language: Pango.Language;
    public pgBgColor: Gdk.Color;
    public invisible: number;
    public bgFullHeight: number;
    public editable: number;
    public noFallback: number;
    public pgBgRgba: Gdk.RGBA;
    public letterSpacing: number;
    
    public copy(): TextAttributes;
    public copyValues(dest: TextAttributes): void;
    public ref(): TextAttributes;
    public unref(): void;
  }
  
  export class TextBTree {
    
  }
  
  export class TextBufferClass {
    public parentClass: GObject.ObjectClass;
    
    insertText : { (buffer: TextBuffer, pos: TextIter, newText: string, newTextLength: number): void; };
    insertPixbuf : { (buffer: TextBuffer, iter: TextIter, pixbuf: GdkPixbuf.Pixbuf): void; };
    insertChildAnchor : { (buffer: TextBuffer, iter: TextIter, anchor: TextChildAnchor): void; };
    deleteRange : { (buffer: TextBuffer, start: TextIter, end: TextIter): void; };
    changed : { (buffer: TextBuffer): void; };
    modifiedChanged : { (buffer: TextBuffer): void; };
    markSet : { (buffer: TextBuffer, location: TextIter, mark: TextMark): void; };
    markDeleted : { (buffer: TextBuffer, mark: TextMark): void; };
    applyTag : { (buffer: TextBuffer, tag: TextTag, start: TextIter, end: TextIter): void; };
    removeTag : { (buffer: TextBuffer, tag: TextTag, start: TextIter, end: TextIter): void; };
    beginUserAction : { (buffer: TextBuffer): void; };
    endUserAction : { (buffer: TextBuffer): void; };
    pasteDone : { (buffer: TextBuffer, clipboard: Clipboard): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class TextBufferPrivate {
    
  }
  
  export class TextCellAccessibleClass {
    public parentClass: RendererCellAccessibleClass;
  }
  
  export class TextCellAccessiblePrivate {
    
  }
  
  export class TextChildAnchorClass {
    public parentClass: GObject.ObjectClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class TextIter {
    public dummy1: any;
    public dummy2: any;
    public dummy3: number;
    public dummy4: number;
    public dummy5: number;
    public dummy6: number;
    public dummy7: number;
    public dummy8: number;
    public dummy9: any;
    public dummy10: any;
    public dummy11: number;
    public dummy12: number;
    public dummy13: number;
    public dummy14: any;
    
    public assign(other: TextIter): void;
    public backwardChar(): boolean;
    public backwardChars(count: number): boolean;
    public backwardCursorPosition(): boolean;
    public backwardCursorPositions(count: number): boolean;
    public backwardFindChar(pred: TextCharPredicate, userData: any, limit: TextIter): boolean;
    public backwardLine(): boolean;
    public backwardLines(count: number): boolean;
    public backwardSearch(str: string, flags: TextSearchFlags, matchStart: TextIter, matchEnd: TextIter, limit: TextIter): boolean;
    public backwardSentenceStart(): boolean;
    public backwardSentenceStarts(count: number): boolean;
    public backwardToTagToggle(tag: TextTag): boolean;
    public backwardVisibleCursorPosition(): boolean;
    public backwardVisibleCursorPositions(count: number): boolean;
    public backwardVisibleLine(): boolean;
    public backwardVisibleLines(count: number): boolean;
    public backwardVisibleWordStart(): boolean;
    public backwardVisibleWordStarts(count: number): boolean;
    public backwardWordStart(): boolean;
    public backwardWordStarts(count: number): boolean;
    public beginsTag(tag: TextTag): boolean;
    public canInsert(defaultEditability: boolean): boolean;
    public compare(rhs: TextIter): number;
    public copy(): TextIter;
    public editable(defaultSetting: boolean): boolean;
    public endsLine(): boolean;
    public endsSentence(): boolean;
    public endsTag(tag: TextTag): boolean;
    public endsWord(): boolean;
    public equal(rhs: TextIter): boolean;
    public forwardChar(): boolean;
    public forwardChars(count: number): boolean;
    public forwardCursorPosition(): boolean;
    public forwardCursorPositions(count: number): boolean;
    public forwardFindChar(pred: TextCharPredicate, userData: any, limit: TextIter): boolean;
    public forwardLine(): boolean;
    public forwardLines(count: number): boolean;
    public forwardSearch(str: string, flags: TextSearchFlags, matchStart: TextIter, matchEnd: TextIter, limit: TextIter): boolean;
    public forwardSentenceEnd(): boolean;
    public forwardSentenceEnds(count: number): boolean;
    public forwardToEnd(): void;
    public forwardToLineEnd(): boolean;
    public forwardToTagToggle(tag: TextTag): boolean;
    public forwardVisibleCursorPosition(): boolean;
    public forwardVisibleCursorPositions(count: number): boolean;
    public forwardVisibleLine(): boolean;
    public forwardVisibleLines(count: number): boolean;
    public forwardVisibleWordEnd(): boolean;
    public forwardVisibleWordEnds(count: number): boolean;
    public forwardWordEnd(): boolean;
    public forwardWordEnds(count: number): boolean;
    public free(): void;
    public getAttributes(values: TextAttributes): boolean;
    public getBuffer(): TextBuffer;
    public getBytesInLine(): number;
    public getChar(): string;
    public getCharsInLine(): number;
    public getChildAnchor(): TextChildAnchor;
    public getLanguage(): Pango.Language;
    public getLine(): number;
    public getLineIndex(): number;
    public getLineOffset(): number;
    public getMarks(): GLib.SList;
    public getOffset(): number;
    public getPixbuf(): GdkPixbuf.Pixbuf;
    public getSlice(end: TextIter): string;
    public getTags(): GLib.SList;
    public getText(end: TextIter): string;
    public getToggledTags(toggledOn: boolean): GLib.SList;
    public getVisibleLineIndex(): number;
    public getVisibleLineOffset(): number;
    public getVisibleSlice(end: TextIter): string;
    public getVisibleText(end: TextIter): string;
    public hasTag(tag: TextTag): boolean;
    public inRange(start: TextIter, end: TextIter): boolean;
    public insideSentence(): boolean;
    public insideWord(): boolean;
    public isCursorPosition(): boolean;
    public isEnd(): boolean;
    public isStart(): boolean;
    public order(second: TextIter): void;
    public setLine(lineNumber: number): void;
    public setLineIndex(byteOnLine: number): void;
    public setLineOffset(charOnLine: number): void;
    public setOffset(charOffset: number): void;
    public setVisibleLineIndex(byteOnLine: number): void;
    public setVisibleLineOffset(charOnLine: number): void;
    public startsLine(): boolean;
    public startsSentence(): boolean;
    public startsTag(tag: TextTag): boolean;
    public startsWord(): boolean;
    public togglesTag(tag: TextTag): boolean;
  }
  
  export class TextMarkClass {
    public parentClass: GObject.ObjectClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class TextTagClass {
    public parentClass: GObject.ObjectClass;
    
    event : { (tag: TextTag, eventObject: GObject.Object, event: Gdk.Event, iter: TextIter): boolean; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class TextTagPrivate {
    
  }
  
  export class TextTagTableClass {
    public parentClass: GObject.ObjectClass;
    
    tagChanged : { (table: TextTagTable, tag: TextTag, sizeChanged: boolean): void; };
    tagAdded : { (table: TextTagTable, tag: TextTag): void; };
    tagRemoved : { (table: TextTagTable, tag: TextTag): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class TextTagTablePrivate {
    
  }
  
  export class TextViewAccessibleClass {
    public parentClass: ContainerAccessibleClass;
  }
  
  export class TextViewAccessiblePrivate {
    
  }
  
  export class TextViewClass {
    public parentClass: ContainerClass;
    
    populatePopup : { (textView: TextView, popup: Widget): void; };
    moveCursor : { (textView: TextView, step: MovementStep, count: number, extendSelection: boolean): void; };
    setAnchor : { (textView: TextView): void; };
    insertAtCursor : { (textView: TextView, str: string): void; };
    deleteFromCursor : { (textView: TextView, type: DeleteType, count: number): void; };
    backspace : { (textView: TextView): void; };
    cutClipboard : { (textView: TextView): void; };
    copyClipboard : { (textView: TextView): void; };
    pasteClipboard : { (textView: TextView): void; };
    toggleOverwrite : { (textView: TextView): void; };
    createBuffer : { (textView: TextView): TextBuffer; };
    drawLayer : { (textView: TextView, layer: TextViewLayer, cr: cairo.Context): void; };
    extendSelection : { (textView: TextView, granularity: TextExtendSelection, location: TextIter, start: TextIter, end: TextIter): boolean; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
    _gtkReserved5 : { (): void; };
  }
  
  export class TextViewPrivate {
    
  }
  
  export class ThemeEngine {
    
  }
  
  export class ThemingEngineClass {
    public parentClass: GObject.ObjectClass;
    public padding: any[];
    
    renderLine : { (engine: ThemingEngine, cr: cairo.Context, x0: number, y0: number, x1: number, y1: number): void; };
    renderBackground : { (engine: ThemingEngine, cr: cairo.Context, x: number, _y: number, width: number, height: number): void; };
    renderFrame : { (engine: ThemingEngine, cr: cairo.Context, x: number, _y: number, width: number, height: number): void; };
    renderFrameGap : { (engine: ThemingEngine, cr: cairo.Context, x: number, _y: number, width: number, height: number, gapSide: PositionType, xy0Gap: number, xy1Gap: number): void; };
    renderExtension : { (engine: ThemingEngine, cr: cairo.Context, x: number, _y: number, width: number, height: number, gapSide: PositionType): void; };
    renderCheck : { (engine: ThemingEngine, cr: cairo.Context, x: number, _y: number, width: number, height: number): void; };
    renderOption : { (engine: ThemingEngine, cr: cairo.Context, x: number, _y: number, width: number, height: number): void; };
    renderArrow : { (engine: ThemingEngine, cr: cairo.Context, angle: number, x: number, _y: number, size: number): void; };
    renderExpander : { (engine: ThemingEngine, cr: cairo.Context, x: number, _y: number, width: number, height: number): void; };
    renderFocus : { (engine: ThemingEngine, cr: cairo.Context, x: number, _y: number, width: number, height: number): void; };
    renderLayout : { (engine: ThemingEngine, cr: cairo.Context, x: number, _y: number, layout: Pango.Layout): void; };
    renderSlider : { (engine: ThemingEngine, cr: cairo.Context, x: number, _y: number, width: number, height: number, orientation: Orientation): void; };
    renderHandle : { (engine: ThemingEngine, cr: cairo.Context, x: number, _y: number, width: number, height: number): void; };
    renderActivity : { (engine: ThemingEngine, cr: cairo.Context, x: number, _y: number, width: number, height: number): void; };
    renderIconPixbuf : { (engine: ThemingEngine, source: IconSource, size: IconSize): GdkPixbuf.Pixbuf; };
    renderIcon : { (engine: ThemingEngine, cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, x: number, _y: number): void; };
    renderIconSurface : { (engine: ThemingEngine, cr: cairo.Context, surface: cairo.Surface, x: number, _y: number): void; };
  }
  
  export class ThemingEnginePrivate {
    
  }
  
  export class ToggleActionClass {
    public parentClass: ActionClass;
    
    toggled : { (action: ToggleAction): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ToggleActionEntry {
    public name: string;
    public stockId: string;
    public label: string;
    public accelerator: string;
    public tooltip: string;
    public callback: GObject.Callback;
    public isActive: boolean;
  }
  
  export class ToggleActionPrivate {
    
  }
  
  export class ToggleButtonAccessibleClass {
    public parentClass: ButtonAccessibleClass;
  }
  
  export class ToggleButtonAccessiblePrivate {
    
  }
  
  export class ToggleButtonClass {
    public parentClass: ButtonClass;
    
    toggled : { (toggleButton: ToggleButton): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ToggleButtonPrivate {
    
  }
  
  export class ToggleToolButtonClass {
    public parentClass: ToolButtonClass;
    
    toggled : { (button: ToggleToolButton): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ToggleToolButtonPrivate {
    
  }
  
  export class ToolButtonClass {
    public parentClass: ToolItemClass;
    public buttonType: GObject.Type;
    
    clicked : { (toolItem: ToolButton): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ToolButtonPrivate {
    
  }
  
  export class ToolItemClass {
    public parentClass: BinClass;
    
    createMenuProxy : { (toolItem: ToolItem): boolean; };
    toolbarReconfigured : { (toolItem: ToolItem): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ToolItemGroupClass {
    public parentClass: ContainerClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ToolItemGroupPrivate {
    
  }
  
  export class ToolItemPrivate {
    
  }
  
  export class ToolPaletteClass {
    public parentClass: ContainerClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ToolPalettePrivate {
    
  }
  
  export class ToolShellIface {
    public gIface: GObject.TypeInterface;
    
    getIconSize : { (shell: ToolShell): IconSize; };
    getOrientation : { (shell: ToolShell): Orientation; };
    getStyle : { (shell: ToolShell): ToolbarStyle; };
    getReliefStyle : { (shell: ToolShell): ReliefStyle; };
    rebuildMenu : { (shell: ToolShell): void; };
    getTextOrientation : { (shell: ToolShell): Orientation; };
    getTextAlignment : { (shell: ToolShell): number; };
    getEllipsizeMode : { (shell: ToolShell): Pango.EllipsizeMode; };
    getTextSizeGroup : { (shell: ToolShell): SizeGroup; };
  }
  
  export class ToolbarClass {
    public parentClass: ContainerClass;
    
    orientationChanged : { (toolbar: Toolbar, orientation: Orientation): void; };
    styleChanged : { (toolbar: Toolbar, style: ToolbarStyle): void; };
    popupContextMenu : { (toolbar: Toolbar, x: number, _y: number, buttonNumber: number): boolean; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ToolbarPrivate {
    
  }
  
  export class ToplevelAccessibleClass {
    public parentClass: Atk.ObjectClass;
  }
  
  export class ToplevelAccessiblePrivate {
    
  }
  
  export class TreeDragDestIface {
    public gIface: GObject.TypeInterface;
    
    dragDataReceived : { (dragDest: TreeDragDest, dest: TreePath, selectionData: SelectionData): boolean; };
    rowDropPossible : { (dragDest: TreeDragDest, destPath: TreePath, selectionData: SelectionData): boolean; };
  }
  
  export class TreeDragSourceIface {
    public gIface: GObject.TypeInterface;
    
    rowDraggable : { (dragSource: TreeDragSource, path: TreePath): boolean; };
    dragDataGet : { (dragSource: TreeDragSource, path: TreePath, selectionData: SelectionData): boolean; };
    dragDataDelete : { (dragSource: TreeDragSource, path: TreePath): boolean; };
  }
  
  export class TreeIter {
    public stamp: number;
    public userData: any;
    public userData2: any;
    public userData3: any;
    
    public copy(): TreeIter;
    public free(): void;
  }
  
  export class TreeModelFilterClass {
    public parentClass: GObject.ObjectClass;
    
    visible : { (self: TreeModelFilter, childModel: TreeModel, iter: TreeIter): boolean; };
    modify : { (self: TreeModelFilter, childModel: TreeModel, iter: TreeIter, value: GObject.Value, column: number): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class TreeModelFilterPrivate {
    
  }
  
  export class TreeModelIface {
    public gIface: GObject.TypeInterface;
    
    rowChanged : { (treeModel: TreeModel, path: TreePath, iter: TreeIter): void; };
    rowInserted : { (treeModel: TreeModel, path: TreePath, iter: TreeIter): void; };
    rowHasChildToggled : { (treeModel: TreeModel, path: TreePath, iter: TreeIter): void; };
    rowDeleted : { (treeModel: TreeModel, path: TreePath): void; };
    rowsReordered : { (treeModel: TreeModel, path: TreePath, iter: TreeIter, newOrder: number): void; };
    getFlags : { (treeModel: TreeModel): TreeModelFlags; };
    getNColumns : { (treeModel: TreeModel): number; };
    getColumnType : { (treeModel: TreeModel, index_: number): GObject.Type; };
    getIter : { (treeModel: TreeModel, iter: TreeIter, path: TreePath): boolean; };
    getPath : { (treeModel: TreeModel, iter: TreeIter): TreePath; };
    getValue : { (treeModel: TreeModel, iter: TreeIter, column: number, value: GObject.Value): void; };
    iterNext : { (treeModel: TreeModel, iter: TreeIter): boolean; };
    iterPrevious : { (treeModel: TreeModel, iter: TreeIter): boolean; };
    iterChildren : { (treeModel: TreeModel, iter: TreeIter, parent: TreeIter): boolean; };
    iterHasChild : { (treeModel: TreeModel, iter: TreeIter): boolean; };
    iterNChildren : { (treeModel: TreeModel, iter: TreeIter): number; };
    iterNthChild : { (treeModel: TreeModel, iter: TreeIter, parent: TreeIter, _n: number): boolean; };
    iterParent : { (treeModel: TreeModel, iter: TreeIter, child: TreeIter): boolean; };
    refNode : { (treeModel: TreeModel, iter: TreeIter): void; };
    unrefNode : { (treeModel: TreeModel, iter: TreeIter): void; };
  }
  
  export class TreeModelSortClass {
    public parentClass: GObject.ObjectClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class TreeModelSortPrivate {
    
  }
  
  export class TreePath {
    public appendIndex(index_: number): void;
    public compare(b: TreePath): number;
    public copy(): TreePath;
    public down(): void;
    public free(): void;
    public getDepth(): number;
    public getIndices(): number;
    public getIndicesWithDepth(depth: number): number[];
    public isAncestor(descendant: TreePath): boolean;
    public isDescendant(ancestor: TreePath): boolean;
    public next(): void;
    public prependIndex(index_: number): void;
    public prev(): boolean;
    public toString(): string;
    public up(): boolean;
  }
  
  export class TreeRowReference {
    public copy(): TreeRowReference;
    public free(): void;
    public getModel(): TreeModel;
    public getPath(): TreePath;
    public valid(): boolean;
  }
  
  export class TreeSelectionClass {
    public parentClass: GObject.ObjectClass;
    
    changed : { (selection: TreeSelection): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class TreeSelectionPrivate {
    
  }
  
  export class TreeSortableIface {
    public gIface: GObject.TypeInterface;
    
    sortColumnChanged : { (sortable: TreeSortable): void; };
    getSortColumnId : { (sortable: TreeSortable, sortColumnId: number, order: SortType): boolean; };
    setSortColumnId : { (sortable: TreeSortable, sortColumnId: number, order: SortType): void; };
    setSortFunc : { (sortable: TreeSortable, sortColumnId: number, sortFunc: TreeIterCompareFunc, userData: any, destroy: GLib.DestroyNotify): void; };
    setDefaultSortFunc : { (sortable: TreeSortable, sortFunc: TreeIterCompareFunc, userData: any, destroy: GLib.DestroyNotify): void; };
    hasDefaultSortFunc : { (sortable: TreeSortable): boolean; };
  }
  
  export class TreeStoreClass {
    public parentClass: GObject.ObjectClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class TreeStorePrivate {
    
  }
  
  export class TreeViewAccessibleClass {
    public parentClass: ContainerAccessibleClass;
  }
  
  export class TreeViewAccessiblePrivate {
    
  }
  
  export class TreeViewClass {
    public parentClass: ContainerClass;
    
    rowActivated : { (treeView: TreeView, path: TreePath, column: TreeViewColumn): void; };
    testExpandRow : { (treeView: TreeView, iter: TreeIter, path: TreePath): boolean; };
    testCollapseRow : { (treeView: TreeView, iter: TreeIter, path: TreePath): boolean; };
    rowExpanded : { (treeView: TreeView, iter: TreeIter, path: TreePath): void; };
    rowCollapsed : { (treeView: TreeView, iter: TreeIter, path: TreePath): void; };
    columnsChanged : { (treeView: TreeView): void; };
    cursorChanged : { (treeView: TreeView): void; };
    moveCursor : { (treeView: TreeView, step: MovementStep, count: number): boolean; };
    selectAll : { (treeView: TreeView): boolean; };
    unselectAll : { (treeView: TreeView): boolean; };
    selectCursorRow : { (treeView: TreeView, startEditing: boolean): boolean; };
    toggleCursorRow : { (treeView: TreeView): boolean; };
    expandCollapseCursorRow : { (treeView: TreeView, logical: boolean, expand: boolean, openAll: boolean): boolean; };
    selectCursorParent : { (treeView: TreeView): boolean; };
    startInteractiveSearch : { (treeView: TreeView): boolean; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
    _gtkReserved5 : { (): void; };
    _gtkReserved6 : { (): void; };
    _gtkReserved7 : { (): void; };
    _gtkReserved8 : { (): void; };
  }
  
  export class TreeViewColumnClass {
    public parentClass: GObject.InitiallyUnownedClass;
    
    clicked : { (treeColumn: TreeViewColumn): void; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class TreeViewColumnPrivate {
    
  }
  
  export class TreeViewPrivate {
    
  }
  
  export class UIManagerClass {
    public parentClass: GObject.ObjectClass;
    
    addWidget : { (manager: UIManager, widget: Widget): void; };
    actionsChanged : { (manager: UIManager): void; };
    connectProxy : { (manager: UIManager, action: Action, proxy: Widget): void; };
    disconnectProxy : { (manager: UIManager, action: Action, proxy: Widget): void; };
    preActivate : { (manager: UIManager, action: Action): void; };
    postActivate : { (manager: UIManager, action: Action): void; };
    getWidget : { (manager: UIManager, path: string): Widget; };
    getAction : { (manager: UIManager, path: string): Action; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class UIManagerPrivate {
    
  }
  
  export class VBoxClass {
    public parentClass: BoxClass;
  }
  
  export class VButtonBoxClass {
    public parentClass: ButtonBoxClass;
  }
  
  export class VPanedClass {
    public parentClass: PanedClass;
  }
  
  export class VScaleClass {
    public parentClass: ScaleClass;
  }
  
  export class VScrollbarClass {
    public parentClass: ScrollbarClass;
  }
  
  export class VSeparatorClass {
    public parentClass: SeparatorClass;
  }
  
  export class ViewportClass {
    public parentClass: BinClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class ViewportPrivate {
    
  }
  
  export class VolumeButtonClass {
    public parentClass: ScaleButtonClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class WidgetAccessibleClass {
    public parentClass: AccessibleClass;
    
    notifyGtk : { (object: GObject.Object, pspec: GObject.ParamSpec): void; };
  }
  
  export class WidgetAccessiblePrivate {
    
  }
  
  export class WidgetClass {
    public parentClass: GObject.InitiallyUnownedClass;
    public activateSignal: number;
    public priv: WidgetClassPrivate;
    
    dispatchChildPropertiesChanged : { (widget: Widget, nPspecs: number, pspecs: GObject.ParamSpec): void; };
    destroy : { (widget: Widget): void; };
    show : { (widget: Widget): void; };
    showAll : { (widget: Widget): void; };
    hide : { (widget: Widget): void; };
    map : { (widget: Widget): void; };
    unmap : { (widget: Widget): void; };
    realize : { (widget: Widget): void; };
    unrealize : { (widget: Widget): void; };
    sizeAllocate : { (widget: Widget, allocation: Allocation): void; };
    stateChanged : { (widget: Widget, previousState: StateType): void; };
    stateFlagsChanged : { (widget: Widget, previousStateFlags: StateFlags): void; };
    parentSet : { (widget: Widget, previousParent: Widget): void; };
    hierarchyChanged : { (widget: Widget, previousToplevel: Widget): void; };
    styleSet : { (widget: Widget, previousStyle: Style): void; };
    directionChanged : { (widget: Widget, previousDirection: TextDirection): void; };
    grabNotify : { (widget: Widget, wasGrabbed: boolean): void; };
    childNotify : { (widget: Widget, childProperty: GObject.ParamSpec): void; };
    draw : { (widget: Widget, cr: cairo.Context): boolean; };
    getRequestMode : { (widget: Widget): SizeRequestMode; };
    getPreferredHeight : { (widget: Widget, minimumHeight: number, naturalHeight: number): void; };
    getPreferredWidthForHeight : { (widget: Widget, height: number, minimumWidth: number, naturalWidth: number): void; };
    getPreferredWidth : { (widget: Widget, minimumWidth: number, naturalWidth: number): void; };
    getPreferredHeightForWidth : { (widget: Widget, width: number, minimumHeight: number, naturalHeight: number): void; };
    mnemonicActivate : { (widget: Widget, groupCycling: boolean): boolean; };
    grabFocus : { (widget: Widget): void; };
    focus : { (widget: Widget, direction: DirectionType): boolean; };
    moveFocus : { (widget: Widget, direction: DirectionType): void; };
    keynavFailed : { (widget: Widget, direction: DirectionType): boolean; };
    event : { (widget: Widget, event: Gdk.Event): boolean; };
    buttonPressEvent : { (widget: Widget, event: Gdk.EventButton): boolean; };
    buttonReleaseEvent : { (widget: Widget, event: Gdk.EventButton): boolean; };
    scrollEvent : { (widget: Widget, event: Gdk.EventScroll): boolean; };
    motionNotifyEvent : { (widget: Widget, event: Gdk.EventMotion): boolean; };
    deleteEvent : { (widget: Widget, event: Gdk.EventAny): boolean; };
    destroyEvent : { (widget: Widget, event: Gdk.EventAny): boolean; };
    keyPressEvent : { (widget: Widget, event: Gdk.EventKey): boolean; };
    keyReleaseEvent : { (widget: Widget, event: Gdk.EventKey): boolean; };
    enterNotifyEvent : { (widget: Widget, event: Gdk.EventCrossing): boolean; };
    leaveNotifyEvent : { (widget: Widget, event: Gdk.EventCrossing): boolean; };
    configureEvent : { (widget: Widget, event: Gdk.EventConfigure): boolean; };
    focusInEvent : { (widget: Widget, event: Gdk.EventFocus): boolean; };
    focusOutEvent : { (widget: Widget, event: Gdk.EventFocus): boolean; };
    mapEvent : { (widget: Widget, event: Gdk.EventAny): boolean; };
    unmapEvent : { (widget: Widget, event: Gdk.EventAny): boolean; };
    propertyNotifyEvent : { (widget: Widget, event: Gdk.EventProperty): boolean; };
    selectionClearEvent : { (widget: Widget, event: Gdk.EventSelection): boolean; };
    selectionRequestEvent : { (widget: Widget, event: Gdk.EventSelection): boolean; };
    selectionNotifyEvent : { (widget: Widget, event: Gdk.EventSelection): boolean; };
    proximityInEvent : { (widget: Widget, event: Gdk.EventProximity): boolean; };
    proximityOutEvent : { (widget: Widget, event: Gdk.EventProximity): boolean; };
    visibilityNotifyEvent : { (widget: Widget, event: Gdk.EventVisibility): boolean; };
    windowStateEvent : { (widget: Widget, event: Gdk.EventWindowState): boolean; };
    damageEvent : { (widget: Widget, event: Gdk.EventExpose): boolean; };
    grabBrokenEvent : { (widget: Widget, event: Gdk.EventGrabBroken): boolean; };
    selectionGet : { (widget: Widget, selectionData: SelectionData, info: number, time_: number): void; };
    selectionReceived : { (widget: Widget, selectionData: SelectionData, time_: number): void; };
    dragBegin : { (widget: Widget, context: Gdk.DragContext): void; };
    dragEnd : { (widget: Widget, context: Gdk.DragContext): void; };
    dragDataGet : { (widget: Widget, context: Gdk.DragContext, selectionData: SelectionData, info: number, time_: number): void; };
    dragDataDelete : { (widget: Widget, context: Gdk.DragContext): void; };
    dragLeave : { (widget: Widget, context: Gdk.DragContext, time_: number): void; };
    dragMotion : { (widget: Widget, context: Gdk.DragContext, x: number, _y: number, time_: number): boolean; };
    dragDrop : { (widget: Widget, context: Gdk.DragContext, x: number, _y: number, time_: number): boolean; };
    dragDataReceived : { (widget: Widget, context: Gdk.DragContext, x: number, _y: number, selectionData: SelectionData, info: number, time_: number): void; };
    dragFailed : { (widget: Widget, context: Gdk.DragContext, result: DragResult): boolean; };
    popupMenu : { (widget: Widget): boolean; };
    showHelp : { (widget: Widget, helpType: WidgetHelpType): boolean; };
    getAccessible : { (widget: Widget): Atk.Object; };
    screenChanged : { (widget: Widget, previousScreen: Gdk.Screen): void; };
    canActivateAccel : { (widget: Widget, signalId: number): boolean; };
    compositedChanged : { (widget: Widget): void; };
    queryTooltip : { (widget: Widget, x: number, _y: number, keyboardTooltip: boolean, tooltip: Tooltip): boolean; };
    computeExpand : { (widget: Widget, hexpandP: boolean, vexpandP: boolean): void; };
    adjustSizeRequest : { (widget: Widget, orientation: Orientation, minimumSize: number, naturalSize: number): void; };
    adjustSizeAllocation : { (widget: Widget, orientation: Orientation, minimumSize: number, naturalSize: number, allocatedPos: number, allocatedSize: number): void; };
    styleUpdated : { (widget: Widget): void; };
    touchEvent : { (widget: Widget, event: Gdk.EventTouch): boolean; };
    getPreferredHeightAndBaselineForWidth : { (widget: Widget, width: number, minimumHeight: number, naturalHeight: number, minimumBaseline: number, naturalBaseline: number): void; };
    adjustBaselineRequest : { (widget: Widget, minimumBaseline: number, naturalBaseline: number): void; };
    adjustBaselineAllocation : { (widget: Widget, baseline: number): void; };
    queueDrawRegion : { (widget: Widget, region: cairo.Region): void; };
    _gtkReserved6 : { (): void; };
    _gtkReserved7 : { (): void; };
    
    public bindTemplateCallbackFull(callbackName: string, callbackSymbol: GObject.Callback): void;
    public bindTemplateChildFull(name: string, internalChild: boolean, structOffset: number): void;
    public findStyleProperty(propertyName: string): GObject.ParamSpec;
    public getCssName(): string;
    public installStyleProperty(pspec: GObject.ParamSpec): void;
    public installStylePropertyParser(pspec: GObject.ParamSpec, parser: RcPropertyParser): void;
    public listStyleProperties(nProperties: number): GObject.ParamSpec[];
    public setAccessibleRole(role: Atk.Role): void;
    public setAccessibleType(type: GObject.Type): void;
    public setConnectFunc(connectFunc: BuilderConnectFunc, connectData: any, connectDataDestroy: GLib.DestroyNotify): void;
    public setCssName(name: string): void;
    public setTemplate(templateBytes: GLib.Bytes): void;
    public setTemplateFromResource(resourceName: string): void;
  }
  
  export class WidgetClassPrivate {
    
  }
  
  export class WidgetPath {
    public appendForWidget(widget: Widget): number;
    public appendType(type: GObject.Type): number;
    public appendWithSiblings(siblings: WidgetPath, siblingIndex: number): number;
    public copy(): WidgetPath;
    public free(): void;
    public getObjectType(): GObject.Type;
    public hasParent(type: GObject.Type): boolean;
    public isType(type: GObject.Type): boolean;
    public iterAddClass(pos: number, name: string): void;
    public iterAddRegion(pos: number, name: string, flags: RegionFlags): void;
    public iterClearClasses(pos: number): void;
    public iterClearRegions(pos: number): void;
    public iterGetName(pos: number): string;
    public iterGetObjectName(pos: number): string;
    public iterGetObjectType(pos: number): GObject.Type;
    public iterGetSiblingIndex(pos: number): number;
    public iterGetSiblings(pos: number): WidgetPath;
    public iterGetState(pos: number): StateFlags;
    public iterHasClass(pos: number, name: string): boolean;
    public iterHasName(pos: number, name: string): boolean;
    public iterHasQclass(pos: number, qname: GLib.Quark): boolean;
    public iterHasQname(pos: number, qname: GLib.Quark): boolean;
    public iterHasQregion(pos: number, qname: GLib.Quark, flags: RegionFlags): boolean;
    public iterHasRegion(pos: number, name: string, flags: RegionFlags): boolean;
    public iterListClasses(pos: number): GLib.SList;
    public iterListRegions(pos: number): GLib.SList;
    public iterRemoveClass(pos: number, name: string): void;
    public iterRemoveRegion(pos: number, name: string): void;
    public iterSetName(pos: number, name: string): void;
    public iterSetObjectName(pos: number, name: string): void;
    public iterSetObjectType(pos: number, type: GObject.Type): void;
    public iterSetState(pos: number, state: StateFlags): void;
    public length(): number;
    public prependType(type: GObject.Type): void;
    public ref(): WidgetPath;
    public toString(): string;
    public unref(): void;
  }
  
  export class WidgetPrivate {
    
  }
  
  export class WindowAccessibleClass {
    public parentClass: ContainerAccessibleClass;
  }
  
  export class WindowAccessiblePrivate {
    
  }
  
  export class WindowClass {
    public parentClass: BinClass;
    
    setFocus : { (window: Window, focus: Widget): void; };
    activateFocus : { (window: Window): void; };
    activateDefault : { (window: Window): void; };
    keysChanged : { (window: Window): void; };
    enableDebugging : { (window: Window, toggle: boolean): boolean; };
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
  }
  
  export class WindowGeometryInfo {
    
  }
  
  export class WindowGroupClass {
    public parentClass: GObject.ObjectClass;
    
    _gtkReserved1 : { (): void; };
    _gtkReserved2 : { (): void; };
    _gtkReserved3 : { (): void; };
    _gtkReserved4 : { (): void; };
  }
  
  export class WindowGroupPrivate {
    
  }
  
  export class WindowPrivate {
    
  }
  
  export interface Actionable {
    getActionName(): string;
    getActionTargetValue(): GLib.Variant;
    setActionName(actionName: string): void;
    setActionTarget(formatString: string, ...params: any[]): void;
    setActionTargetValue(targetValue: GLib.Variant): void;
    setDetailedActionName(detailedActionName: string): void;
  }
  
  export interface Activatable {
    doSetRelatedAction(action: Action): void;
    getRelatedAction(): Action;
    getUseActionAppearance(): boolean;
    setRelatedAction(action: Action): void;
    setUseActionAppearance(useAppearance: boolean): void;
    syncActionProperties(action: Action): void;
    update(action: Action, propertyName: string): void;
  }
  
  export interface AppChooser {
    getAppInfo(): Gio.AppInfo;
    getContentType(): string;
    refresh(): void;
  }
  
  export interface Buildable {
    addChild(builder: Builder, child: GObject.Object, type: string): void;
    constructChild(builder: Builder, name: string): GObject.Object;
    customFinished(builder: Builder, child: GObject.Object, tagname: string, data: any): void;
    customTagEnd(builder: Builder, child: GObject.Object, tagname: string, data: any): void;
    customTagStart(builder: Builder, child: GObject.Object, tagname: string, parser: GLib.MarkupParser, data: any): boolean;
    getInternalChild(builder: Builder, childname: string): GObject.Object;
    getName(): string;
    parserFinished(builder: Builder): void;
    setBuildableProperty(builder: Builder, name: string, value: GObject.Value): void;
    setName(name: string): void;
  }
  
  export interface CellAccessibleParent {
    activate(cell: CellAccessible): void;
    edit(cell: CellAccessible): void;
    expandCollapse(cell: CellAccessible): void;
    getCellArea(cell: CellAccessible, cellRect: Gdk.Rectangle): void;
    getCellExtents(cell: CellAccessible, x: number, _y: number, width: number, height: number, coordType: Atk.CoordType): void;
    getChildIndex(cell: CellAccessible): number;
    getRendererState(cell: CellAccessible): CellRendererState;
    grabFocus(cell: CellAccessible): boolean;
    updateRelationset(cell: CellAccessible, relationset: Atk.RelationSet): void;
  }
  
  export interface CellEditable {
    editingDone(): void;
    removeWidget(): void;
    startEditing(event: Gdk.Event): void;
  }
  
  export interface CellLayout {
    addAttribute(cell: CellRenderer, attribute: string, column: number): void;
    clear(): void;
    clearAttributes(cell: CellRenderer): void;
    getArea(): CellArea;
    getCells(): GLib.List;
    packEnd(cell: CellRenderer, expand: boolean): void;
    packStart(cell: CellRenderer, expand: boolean): void;
    reorder(cell: CellRenderer, position: number): void;
    setAttributes(cell: CellRenderer, ...params: any[]): void;
    setCellDataFunc(cell: CellRenderer, func: CellLayoutDataFunc, funcData: any, destroy: GLib.DestroyNotify): void;
  }
  
  export interface ColorChooser {
    addPalette(orientation: Orientation, colorsPerLine: number, nColors: number, colors: Gdk.RGBA[]): void;
    getRgba(color: Gdk.RGBA): void;
    getUseAlpha(): boolean;
    setRgba(color: Gdk.RGBA): void;
    setUseAlpha(useAlpha: boolean): void;
    colorActivated(color: Gdk.RGBA): void;
  }
  
  export interface Editable {
    copyClipboard(): void;
    cutClipboard(): void;
    deleteSelection(): void;
    deleteText(startPos: number, endPos: number): void;
    getChars(startPos: number, endPos: number): string;
    getEditable(): boolean;
    getPosition(): number;
    getSelectionBounds(startPos: number, endPos: number): boolean;
    insertText(newText: string, newTextLength: number, position: number): void;
    pasteClipboard(): void;
    selectRegion(startPos: number, endPos: number): void;
    setEditable(isEditable: boolean): void;
    setPosition(position: number): void;
    changed(): void;
    doDeleteText(startPos: number, endPos: number): void;
    doInsertText(newText: string, newTextLength: number, position: number): void;
    setSelectionBounds(startPos: number, endPos: number): void;
  }
  
  export interface FileChooser {
    addChoice(_id: string, label: string, options: string, optionLabels: string): void;
    addFilter(filter: FileFilter): void;
    addShortcutFolder(folder: string): boolean;
    addShortcutFolderUri(uri: string): boolean;
    getAction(): FileChooserAction;
    getChoice(_id: string): string;
    getCreateFolders(): boolean;
    getCurrentFolder(): string;
    getCurrentFolderFile(): Gio.File;
    getCurrentFolderUri(): string;
    getCurrentName(): string;
    getDoOverwriteConfirmation(): boolean;
    getExtraWidget(): Widget;
    getFile(): Gio.File;
    getFilename(): string;
    getFilenames(): GLib.SList;
    getFiles(): GLib.SList;
    getFilter(): FileFilter;
    getLocalOnly(): boolean;
    getPreviewFile(): Gio.File;
    getPreviewFilename(): string;
    getPreviewUri(): string;
    getPreviewWidget(): Widget;
    getPreviewWidgetActive(): boolean;
    getSelectMultiple(): boolean;
    getShowHidden(): boolean;
    getUri(): string;
    getUris(): GLib.SList;
    getUsePreviewLabel(): boolean;
    listFilters(): GLib.SList;
    listShortcutFolderUris(): GLib.SList;
    listShortcutFolders(): GLib.SList;
    removeChoice(_id: string): void;
    removeFilter(filter: FileFilter): void;
    removeShortcutFolder(folder: string): boolean;
    removeShortcutFolderUri(uri: string): boolean;
    selectAll(): void;
    selectFile(file: Gio.File): boolean;
    selectFilename(filename: string): boolean;
    selectUri(uri: string): boolean;
    setAction(action: FileChooserAction): void;
    setChoice(_id: string, option: string): void;
    setCreateFolders(createFolders: boolean): void;
    setCurrentFolder(filename: string): boolean;
    setCurrentFolderFile(file: Gio.File): boolean;
    setCurrentFolderUri(uri: string): boolean;
    setCurrentName(name: string): void;
    setDoOverwriteConfirmation(doOverwriteConfirmation: boolean): void;
    setExtraWidget(extraWidget: Widget): void;
    setFile(file: Gio.File): boolean;
    setFilename(filename: string): boolean;
    setFilter(filter: FileFilter): void;
    setLocalOnly(localOnly: boolean): void;
    setPreviewWidget(previewWidget: Widget): void;
    setPreviewWidgetActive(active: boolean): void;
    setSelectMultiple(selectMultiple: boolean): void;
    setShowHidden(showHidden: boolean): void;
    setUri(uri: string): boolean;
    setUsePreviewLabel(useLabel: boolean): void;
    unselectAll(): void;
    unselectFile(file: Gio.File): void;
    unselectFilename(filename: string): void;
    unselectUri(uri: string): void;
  }
  
  export interface FontChooser {
    getFont(): string;
    getFontDesc(): Pango.FontDescription;
    getFontFace(): Pango.FontFace;
    getFontFamily(): Pango.FontFamily;
    getFontMap(): Pango.FontMap;
    getFontSize(): number;
    getPreviewText(): string;
    getShowPreviewEntry(): boolean;
    setFilterFunc(filter: FontFilterFunc, userData: any, destroy: GLib.DestroyNotify): void;
    setFont(fontname: string): void;
    setFontDesc(fontDesc: Pango.FontDescription): void;
    setFontMap(fontmap: Pango.FontMap): void;
    setPreviewText(text: string): void;
    setShowPreviewEntry(showPreviewEntry: boolean): void;
    fontActivated(fontname: string): void;
  }
  
  export interface Orientable {
    getOrientation(): Orientation;
    setOrientation(orientation: Orientation): void;
  }
  
  export interface PrintOperationPreview {
    endPreview(): void;
    isSelected(pageNr: number): boolean;
    renderPage(pageNr: number): void;
    gotPageSize(context: PrintContext, pageSetup: PageSetup): void;
    ready(context: PrintContext): void;
  }
  
  export interface RecentChooser {
    addFilter(filter: RecentFilter): void;
    getCurrentItem(): RecentInfo;
    getCurrentUri(): string;
    getFilter(): RecentFilter;
    getItems(): GLib.List;
    getLimit(): number;
    getLocalOnly(): boolean;
    getSelectMultiple(): boolean;
    getShowIcons(): boolean;
    getShowNotFound(): boolean;
    getShowPrivate(): boolean;
    getShowTips(): boolean;
    getSortType(): RecentSortType;
    getUris(length: number): string[];
    listFilters(): GLib.SList;
    removeFilter(filter: RecentFilter): void;
    selectAll(): void;
    selectUri(uri: string): boolean;
    setCurrentUri(uri: string): boolean;
    setFilter(filter: RecentFilter): void;
    setLimit(limit: number): void;
    setLocalOnly(localOnly: boolean): void;
    setSelectMultiple(selectMultiple: boolean): void;
    setShowIcons(showIcons: boolean): void;
    setShowNotFound(showNotFound: boolean): void;
    setShowPrivate(showPrivate: boolean): void;
    setShowTips(showTips: boolean): void;
    setSortFunc(sortFunc: RecentSortFunc, sortData: any, dataDestroy: GLib.DestroyNotify): void;
    setSortType(sortType: RecentSortType): void;
    unselectAll(): void;
    unselectUri(uri: string): void;
    getRecentManager(): RecentManager;
    itemActivated(): void;
    selectionChanged(): void;
  }
  
  export interface Scrollable {
    getBorder(border: Border): boolean;
    getHadjustment(): Adjustment;
    getHscrollPolicy(): ScrollablePolicy;
    getVadjustment(): Adjustment;
    getVscrollPolicy(): ScrollablePolicy;
    setHadjustment(hadjustment: Adjustment): void;
    setHscrollPolicy(policy: ScrollablePolicy): void;
    setVadjustment(vadjustment: Adjustment): void;
    setVscrollPolicy(policy: ScrollablePolicy): void;
  }
  
  export interface StyleProvider {
    getIconFactory(path: WidgetPath): IconFactory;
    getStyle(path: WidgetPath): StyleProperties;
    getStyleProperty(path: WidgetPath, state: StateFlags, pspec: GObject.ParamSpec, value: GObject.Value): boolean;
  }
  
  export interface ToolShell {
    getEllipsizeMode(): Pango.EllipsizeMode;
    getIconSize(): number;
    getOrientation(): Orientation;
    getReliefStyle(): ReliefStyle;
    getStyle(): ToolbarStyle;
    getTextAlignment(): number;
    getTextOrientation(): Orientation;
    getTextSizeGroup(): SizeGroup;
    rebuildMenu(): void;
  }
  
  export interface TreeDragDest {
    dragDataReceived(dest: TreePath, selectionData: SelectionData): boolean;
    rowDropPossible(destPath: TreePath, selectionData: SelectionData): boolean;
  }
  
  export interface TreeDragSource {
    dragDataDelete(path: TreePath): boolean;
    dragDataGet(path: TreePath, selectionData: SelectionData): boolean;
    rowDraggable(path: TreePath): boolean;
  }
  
  export interface TreeModel {
    filterNew(root: TreePath): TreeModel;
    foreach(func: TreeModelForeachFunc, userData: any): void;
    get(iter: TreeIter, ...params: any[]): void;
    getColumnType(index_: number): GObject.Type;
    getFlags(): TreeModelFlags;
    getIter(iter: TreeIter, path: TreePath): boolean;
    getIterFirst(iter: TreeIter): boolean;
    getIterFromString(iter: TreeIter, pathString: string): boolean;
    getNColumns(): number;
    getPath(iter: TreeIter): TreePath;
    getStringFromIter(iter: TreeIter): string;
    getValist(iter: TreeIter, varArgs: any[]): void;
    getValue(iter: TreeIter, column: number, value: GObject.Value): void;
    iterChildren(iter: TreeIter, parent: TreeIter): boolean;
    iterHasChild(iter: TreeIter): boolean;
    iterNChildren(iter: TreeIter): number;
    iterNext(iter: TreeIter): boolean;
    iterNthChild(iter: TreeIter, parent: TreeIter, _n: number): boolean;
    iterParent(iter: TreeIter, child: TreeIter): boolean;
    iterPrevious(iter: TreeIter): boolean;
    refNode(iter: TreeIter): void;
    rowChanged(path: TreePath, iter: TreeIter): void;
    rowDeleted(path: TreePath): void;
    rowHasChildToggled(path: TreePath, iter: TreeIter): void;
    rowInserted(path: TreePath, iter: TreeIter): void;
    rowsReordered(path: TreePath, iter: TreeIter, newOrder: number): void;
    rowsReorderedWithLength(path: TreePath, iter: TreeIter, newOrder: number[], length: number): void;
    sortNewWithModel(): TreeModel;
    unrefNode(iter: TreeIter): void;
  }
  
  export interface TreeSortable {
    getSortColumnId(sortColumnId: number, order: SortType): boolean;
    hasDefaultSortFunc(): boolean;
    setDefaultSortFunc(sortFunc: TreeIterCompareFunc, userData: any, destroy: GLib.DestroyNotify): void;
    setSortColumnId(sortColumnId: number, order: SortType): void;
    setSortFunc(sortColumnId: number, sortFunc: TreeIterCompareFunc, userData: any, destroy: GLib.DestroyNotify): void;
    sortColumnChanged(): void;
  }
  
  export class AboutDialog extends Dialog implements Atk.ImplementorIface, Buildable {
    constructor(props?: AboutDialogProps);
    
    artists: string[];
    authors: string[];
    comments: string;
    copyright: string;
    documenters: string[];
    license: string;
    licenseType: License;
    logo: GdkPixbuf.Pixbuf;
    logoIconName: string;
    programName: string;
    translatorCredits: string;
    version: string;
    website: string;
    websiteLabel: string;
    wrapLicense: boolean;
    
    public addCreditSection(sectionName: string, people: string[]): void;
    public getArtists(): string[];
    public getAuthors(): string[];
    public getComments(): string;
    public getCopyright(): string;
    public getDocumenters(): string[];
    public getLicense(): string;
    public getLicenseType(): License;
    public getLogo(): GdkPixbuf.Pixbuf;
    public getLogoIconName(): string;
    public getProgramName(): string;
    public getTranslatorCredits(): string;
    public getVersion(): string;
    public getWebsite(): string;
    public getWebsiteLabel(): string;
    public getWrapLicense(): boolean;
    public setArtists(artists: string[]): void;
    public setAuthors(authors: string[]): void;
    public setComments(comments: string): void;
    public setCopyright(copyright: string): void;
    public setDocumenters(documenters: string[]): void;
    public setLicense(license: string): void;
    public setLicenseType(licenseType: License): void;
    public setLogo(logo: GdkPixbuf.Pixbuf): void;
    public setLogoIconName(iconName: string): void;
    public setProgramName(name: string): void;
    public setTranslatorCredits(translatorCredits: string): void;
    public setVersion(version: string): void;
    public setWebsite(website: string): void;
    public setWebsiteLabel(websiteLabel: string): void;
    public setWrapLicense(wrapLicense: boolean): void;
    public activateLink(uri: string): boolean;
  }
  
  interface AboutDialogProps extends DialogProps, Atk.ImplementorIfaceProps, BuildableProps {
    artists: string[];
    authors: string[];
    comments: string;
    copyright: string;
    documenters: string[];
    license: string;
    licenseType: License;
    logo: GdkPixbuf.Pixbuf;
    logoIconName: string;
    programName: string;
    translatorCredits: string;
    version: string;
    website: string;
    websiteLabel: string;
    wrapLicense: boolean;
  }
  
  export class AccelGroup extends GObject.Object {
    constructor(props?: AccelGroupProps);
    
    isLocked: boolean;
    modifierMask: Gdk.ModifierType;
    
    public activate(accelQuark: GLib.Quark, acceleratable: GObject.Object, accelKey: number, accelMods: Gdk.ModifierType): boolean;
    public connect(accelKey: number, accelMods: Gdk.ModifierType, accelFlags: AccelFlags, closure: GObject.Closure): void;
    public connectByPath(accelPath: string, closure: GObject.Closure): void;
    public disconnect(closure: GObject.Closure): boolean;
    public disconnectKey(accelKey: number, accelMods: Gdk.ModifierType): boolean;
    public find(findFunc: AccelGroupFindFunc, data: any): AccelKey;
    public getIsLocked(): boolean;
    public getModifierMask(): Gdk.ModifierType;
    public lock(): void;
    public query(accelKey: number, accelMods: Gdk.ModifierType, nEntries: number): AccelGroupEntry[];
    public unlock(): void;
    public accelChanged(keyval: number, modifier: Gdk.ModifierType, accelClosure: GObject.Closure): void;
    
    public static fromAccelClosure(closure: GObject.Closure): AccelGroup;
  }
  
  interface AccelGroupProps extends GObject.ObjectProps {
    isLocked: boolean;
    modifierMask: Gdk.ModifierType;
  }
  
  export class AccelLabel extends Label implements Atk.ImplementorIface, Buildable {
    constructor(props?: AccelLabelProps);
    
    accelClosure: GObject.Closure;
    accelWidget: Widget;
    
    public getAccel(acceleratorKey: number, acceleratorMods: Gdk.ModifierType): void;
    public getAccelWidget(): Widget;
    public getAccelWidth(): number;
    public refetch(): boolean;
    public setAccel(acceleratorKey: number, acceleratorMods: Gdk.ModifierType): void;
    public setAccelClosure(accelClosure: GObject.Closure): void;
    public setAccelWidget(accelWidget: Widget): void;
  }
  
  interface AccelLabelProps extends LabelProps, Atk.ImplementorIfaceProps, BuildableProps {
    accelClosure: GObject.Closure;
    accelWidget: Widget;
  }
  
  export class AccelMap extends GObject.Object {
    constructor(props?: AccelMapProps);
    
    public static addEntry(accelPath: string, accelKey: number, accelMods: Gdk.ModifierType): void;
    public static addFilter(filterPattern: string): void;
    public static changeEntry(accelPath: string, accelKey: number, accelMods: Gdk.ModifierType, replace: boolean): boolean;
    public static foreach(data: any, foreachFunc: AccelMapForeach): void;
    public static foreachUnfiltered(data: any, foreachFunc: AccelMapForeach): void;
    public static get(): AccelMap;
    public static load(fileName: string): void;
    public static loadFd(fd: number): void;
    public static loadScanner(scanner: GLib.Scanner): void;
    public static lockPath(accelPath: string): void;
    public static lookupEntry(accelPath: string, key: AccelKey): boolean;
    public static save(fileName: string): void;
    public static saveFd(fd: number): void;
    public static unlockPath(accelPath: string): void;
  }
  
  interface AccelMapProps extends GObject.ObjectProps {
    
  }
  
  export class Accessible extends Atk.Object {
    constructor(props?: AccessibleProps);
    
    widget: Widget;
    
    public connectWidgetDestroyed(): void;
    public getWidget(): Widget;
    public setWidget(widget: Widget): void;
    public widgetSet(): void;
    public widgetUnset(): void;
  }
  
  interface AccessibleProps extends Atk.ObjectProps {
    widget: Widget;
  }
  
  export class Action extends GObject.Object implements Buildable {
    constructor(props?: ActionProps);
    
    actionGroup: ActionGroup;
    alwaysShowImage: boolean;
    gicon: Gio.Icon;
    hideIfEmpty: boolean;
    iconName: string;
    isImportant: boolean;
    label: string;
    name: string;
    sensitive: boolean;
    shortLabel: string;
    stockId: string;
    tooltip: string;
    visible: boolean;
    visibleHorizontal: boolean;
    visibleOverflown: boolean;
    visibleVertical: boolean;
    
    public activate(): void;
    public blockActivate(): void;
    public connectAccelerator(): void;
    public createIcon(iconSize: number): Widget;
    public createMenu(): Widget;
    public createMenuItem(): Widget;
    public createToolItem(): Widget;
    public disconnectAccelerator(): void;
    public getAccelClosure(): GObject.Closure;
    public getAccelPath(): string;
    public getAlwaysShowImage(): boolean;
    public getGicon(): Gio.Icon;
    public getIconName(): string;
    public getIsImportant(): boolean;
    public getLabel(): string;
    public getName(): string;
    public getProxies(): GLib.SList;
    public getSensitive(): boolean;
    public getShortLabel(): string;
    public getStockId(): string;
    public getTooltip(): string;
    public getVisible(): boolean;
    public getVisibleHorizontal(): boolean;
    public getVisibleVertical(): boolean;
    public isSensitive(): boolean;
    public isVisible(): boolean;
    public setAccelGroup(accelGroup: AccelGroup): void;
    public setAccelPath(accelPath: string): void;
    public setAlwaysShowImage(alwaysShow: boolean): void;
    public setGicon(icon: Gio.Icon): void;
    public setIconName(iconName: string): void;
    public setIsImportant(isImportant: boolean): void;
    public setLabel(label: string): void;
    public setSensitive(sensitive: boolean): void;
    public setShortLabel(shortLabel: string): void;
    public setStockId(stockId: string): void;
    public setTooltip(tooltip: string): void;
    public setVisible(visible: boolean): void;
    public setVisibleHorizontal(visibleHorizontal: boolean): void;
    public setVisibleVertical(visibleVertical: boolean): void;
    public unblockActivate(): void;
    public connectProxy(proxy: Widget): void;
    public disconnectProxy(proxy: Widget): void;
  }
  
  interface ActionProps extends GObject.ObjectProps, BuildableProps {
    actionGroup: ActionGroup;
    alwaysShowImage: boolean;
    gicon: Gio.Icon;
    hideIfEmpty: boolean;
    iconName: string;
    isImportant: boolean;
    label: string;
    name: string;
    sensitive: boolean;
    shortLabel: string;
    stockId: string;
    tooltip: string;
    visible: boolean;
    visibleHorizontal: boolean;
    visibleOverflown: boolean;
    visibleVertical: boolean;
  }
  
  export class ActionBar extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(props?: ActionBarProps);
    
    public getCenterWidget(): Widget;
    public packEnd(child: Widget): void;
    public packStart(child: Widget): void;
    public setCenterWidget(centerWidget: Widget): void;
  }
  
  interface ActionBarProps extends BinProps, Atk.ImplementorIfaceProps, BuildableProps {
    
  }
  
  export class ActionGroup extends GObject.Object implements Buildable {
    constructor(props?: ActionGroupProps);
    
    accelGroup: AccelGroup;
    name: string;
    sensitive: boolean;
    visible: boolean;
    
    public addAction(action: Action): void;
    public addActionWithAccel(action: Action, accelerator: string): void;
    public addActions(entries: ActionEntry[], nEntries: number, userData: any): void;
    public addActionsFull(entries: ActionEntry[], nEntries: number, userData: any, destroy: GLib.DestroyNotify): void;
    public addRadioActions(entries: RadioActionEntry[], nEntries: number, value: number, onChange: GObject.Callback, userData: any): void;
    public addRadioActionsFull(entries: RadioActionEntry[], nEntries: number, value: number, onChange: GObject.Callback, userData: any, destroy: GLib.DestroyNotify): void;
    public addToggleActions(entries: ToggleActionEntry[], nEntries: number, userData: any): void;
    public addToggleActionsFull(entries: ToggleActionEntry[], nEntries: number, userData: any, destroy: GLib.DestroyNotify): void;
    public getAccelGroup(): AccelGroup;
    public getAction(actionName: string): Action;
    public getName(): string;
    public getSensitive(): boolean;
    public getVisible(): boolean;
    public listActions(): GLib.List;
    public removeAction(action: Action): void;
    public setAccelGroup(accelGroup: AccelGroup): void;
    public setSensitive(sensitive: boolean): void;
    public setTranslateFunc(func: TranslateFunc, data: any, notify: GLib.DestroyNotify): void;
    public setTranslationDomain(domain: string): void;
    public setVisible(visible: boolean): void;
    public translateString(string: string): string;
  }
  
  interface ActionGroupProps extends GObject.ObjectProps, BuildableProps {
    accelGroup: AccelGroup;
    name: string;
    sensitive: boolean;
    visible: boolean;
  }
  
  export class Adjustment extends GObject.InitiallyUnowned {
    constructor(props?: AdjustmentProps);
    
    lower: number;
    pageIncrement: number;
    pageSize: number;
    stepIncrement: number;
    upper: number;
    value: number;
    
    public changed(): void;
    public clampPage(lower: number, upper: number): void;
    public configure(value: number, lower: number, upper: number, stepIncrement: number, pageIncrement: number, pageSize: number): void;
    public getLower(): number;
    public getMinimumIncrement(): number;
    public getPageIncrement(): number;
    public getPageSize(): number;
    public getStepIncrement(): number;
    public getUpper(): number;
    public getValue(): number;
    public setLower(lower: number): void;
    public setPageIncrement(pageIncrement: number): void;
    public setPageSize(pageSize: number): void;
    public setStepIncrement(stepIncrement: number): void;
    public setUpper(upper: number): void;
    public setValue(value: number): void;
    public valueChanged(): void;
  }
  
  interface AdjustmentProps extends GObject.InitiallyUnownedProps {
    lower: number;
    pageIncrement: number;
    pageSize: number;
    stepIncrement: number;
    upper: number;
    value: number;
  }
  
  export class Alignment extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(props?: AlignmentProps);
    
    bottomPadding: number;
    leftPadding: number;
    rightPadding: number;
    topPadding: number;
    xalign: number;
    xscale: number;
    yalign: number;
    yscale: number;
    
    public getPadding(paddingTop: number, paddingBottom: number, paddingLeft: number, paddingRight: number): void;
    public set(xalign: number, yalign: number, xscale: number, yscale: number): void;
    public setPadding(paddingTop: number, paddingBottom: number, paddingLeft: number, paddingRight: number): void;
  }
  
  interface AlignmentProps extends BinProps, Atk.ImplementorIfaceProps, BuildableProps {
    bottomPadding: number;
    leftPadding: number;
    rightPadding: number;
    topPadding: number;
    xalign: number;
    xscale: number;
    yalign: number;
    yscale: number;
  }
  
  export class AppChooserButton extends ComboBox implements Atk.ImplementorIface, AppChooser, Buildable, CellEditable, CellLayout {
    constructor(props?: AppChooserButtonProps);
    
    heading: string;
    showDefaultItem: boolean;
    showDialogItem: boolean;
    
    public appendCustomItem(name: string, label: string, icon: Gio.Icon): void;
    public appendSeparator(): void;
    public getHeading(): string;
    public getShowDefaultItem(): boolean;
    public getShowDialogItem(): boolean;
    public setActiveCustomItem(name: string): void;
    public setHeading(heading: string): void;
    public setShowDefaultItem(setting: boolean): void;
    public setShowDialogItem(setting: boolean): void;
    public customItemActivated(itemName: string): void;
  }
  
  interface AppChooserButtonProps extends ComboBoxProps, Atk.ImplementorIfaceProps, AppChooserProps, BuildableProps, CellEditableProps, CellLayoutProps {
    heading: string;
    showDefaultItem: boolean;
    showDialogItem: boolean;
  }
  
  export class AppChooserDialog extends Dialog implements Atk.ImplementorIface, AppChooser, Buildable {
    constructor(props?: AppChooserDialogProps);
    
    gfile: Gio.File;
    heading: string;
    
    public getHeading(): string;
    public getWidget(): Widget;
    public setHeading(heading: string): void;
  }
  
  interface AppChooserDialogProps extends DialogProps, Atk.ImplementorIfaceProps, AppChooserProps, BuildableProps {
    gfile: Gio.File;
    heading: string;
  }
  
  export class AppChooserWidget extends Box implements Atk.ImplementorIface, AppChooser, Buildable, Orientable {
    constructor(props?: AppChooserWidgetProps);
    
    defaultText: string;
    showAll: boolean;
    showDefault: boolean;
    showFallback: boolean;
    showOther: boolean;
    showRecommended: boolean;
    
    public getDefaultText(): string;
    public getShowAll(): boolean;
    public getShowDefault(): boolean;
    public getShowFallback(): boolean;
    public getShowOther(): boolean;
    public getShowRecommended(): boolean;
    public setDefaultText(text: string): void;
    public setShowAll(setting: boolean): void;
    public setShowDefault(setting: boolean): void;
    public setShowFallback(setting: boolean): void;
    public setShowOther(setting: boolean): void;
    public setShowRecommended(setting: boolean): void;
    public applicationActivated(appInfo: Gio.AppInfo): void;
    public applicationSelected(appInfo: Gio.AppInfo): void;
    public populatePopup(menu: Menu, appInfo: Gio.AppInfo): void;
  }
  
  interface AppChooserWidgetProps extends BoxProps, Atk.ImplementorIfaceProps, AppChooserProps, BuildableProps, OrientableProps {
    defaultText: string;
    showAll: boolean;
    showDefault: boolean;
    showFallback: boolean;
    showOther: boolean;
    showRecommended: boolean;
  }
  
  export class Application extends Gio.Application implements Gio.ActionGroup, Gio.ActionMap {
    constructor(props?: ApplicationProps);
    
    activeWindow: Window;
    appMenu: Gio.MenuModel;
    menubar: Gio.MenuModel;
    registerSession: boolean;
    
    public addAccelerator(accelerator: string, actionName: string, parameter: GLib.Variant): void;
    public addWindow(window: Window): void;
    public getAccelsForAction(detailedActionName: string): string[];
    public getActionsForAccel(accel: string): string[];
    public getActiveWindow(): Window;
    public getAppMenu(): Gio.MenuModel;
    public getMenuById(_id: string): Gio.Menu;
    public getMenubar(): Gio.MenuModel;
    public getWindowById(_id: number): Window;
    public getWindows(): GLib.List;
    public inhibit(window: Window, flags: ApplicationInhibitFlags, reason: string): number;
    public isInhibited(flags: ApplicationInhibitFlags): boolean;
    public listActionDescriptions(): string[];
    public prefersAppMenu(): boolean;
    public removeAccelerator(actionName: string, parameter: GLib.Variant): void;
    public removeWindow(window: Window): void;
    public setAccelsForAction(detailedActionName: string, accels: string[]): void;
    public setAppMenu(appMenu: Gio.MenuModel): void;
    public setMenubar(menubar: Gio.MenuModel): void;
    public uninhibit(cookie: number): void;
    public windowAdded(window: Window): void;
    public windowRemoved(window: Window): void;
  }
  
  interface ApplicationProps extends Gio.ApplicationProps, Gio.ActionGroupProps, Gio.ActionMapProps {
    activeWindow: Window;
    appMenu: Gio.MenuModel;
    menubar: Gio.MenuModel;
    registerSession: boolean;
  }
  
  export class ApplicationWindow extends Window implements Atk.ImplementorIface, Gio.ActionGroup, Gio.ActionMap, Buildable {
    constructor(props?: ApplicationWindowProps);
    
    showMenubar: boolean;
    
    public getHelpOverlay(): ShortcutsWindow;
    public getId(): number;
    public getShowMenubar(): boolean;
    public setHelpOverlay(helpOverlay: ShortcutsWindow): void;
    public setShowMenubar(showMenubar: boolean): void;
  }
  
  interface ApplicationWindowProps extends WindowProps, Atk.ImplementorIfaceProps, Gio.ActionGroupProps, Gio.ActionMapProps, BuildableProps {
    showMenubar: boolean;
  }
  
  export class Arrow extends Misc implements Atk.ImplementorIface, Buildable {
    constructor(props?: ArrowProps);
    
    arrowType: ArrowType;
    shadowType: ShadowType;
    
    public set(arrowType: ArrowType, shadowType: ShadowType): void;
  }
  
  interface ArrowProps extends MiscProps, Atk.ImplementorIfaceProps, BuildableProps {
    arrowType: ArrowType;
    shadowType: ShadowType;
  }
  
  export class ArrowAccessible extends WidgetAccessible implements Atk.Component, Atk.Image {
    constructor(props?: ArrowAccessibleProps);
  }
  
  interface ArrowAccessibleProps extends WidgetAccessibleProps, Atk.ComponentProps, Atk.ImageProps {
    
  }
  
  export class AspectFrame extends Frame implements Atk.ImplementorIface, Buildable {
    constructor(props?: AspectFrameProps);
    
    obeyChild: boolean;
    ratio: number;
    xalign: number;
    yalign: number;
    
    public set(xalign: number, yalign: number, ratio: number, obeyChild: boolean): void;
  }
  
  interface AspectFrameProps extends FrameProps, Atk.ImplementorIfaceProps, BuildableProps {
    obeyChild: boolean;
    ratio: number;
    xalign: number;
    yalign: number;
  }
  
  export class Assistant extends Window implements Atk.ImplementorIface, Buildable {
    constructor(props?: AssistantProps);
    
    useHeaderBar: number;
    
    public addActionWidget(child: Widget): void;
    public appendPage(page: Widget): number;
    public commit(): void;
    public getCurrentPage(): number;
    public getNPages(): number;
    public getNthPage(pageNum: number): Widget;
    public getPageComplete(page: Widget): boolean;
    public getPageHasPadding(page: Widget): boolean;
    public getPageHeaderImage(page: Widget): GdkPixbuf.Pixbuf;
    public getPageSideImage(page: Widget): GdkPixbuf.Pixbuf;
    public getPageTitle(page: Widget): string;
    public getPageType(page: Widget): AssistantPageType;
    public insertPage(page: Widget, position: number): number;
    public nextPage(): void;
    public prependPage(page: Widget): number;
    public previousPage(): void;
    public removeActionWidget(child: Widget): void;
    public removePage(pageNum: number): void;
    public setCurrentPage(pageNum: number): void;
    public setForwardPageFunc(pageFunc: AssistantPageFunc, data: any, destroy: GLib.DestroyNotify): void;
    public setPageComplete(page: Widget, complete: boolean): void;
    public setPageHasPadding(page: Widget, hasPadding: boolean): void;
    public setPageHeaderImage(page: Widget, pixbuf: GdkPixbuf.Pixbuf): void;
    public setPageSideImage(page: Widget, pixbuf: GdkPixbuf.Pixbuf): void;
    public setPageTitle(page: Widget, title: string): void;
    public setPageType(page: Widget, type: AssistantPageType): void;
    public updateButtonsState(): void;
    public apply(): void;
    public cancel(): void;
    public close(): void;
    public prepare(page: Widget): void;
  }
  
  interface AssistantProps extends WindowProps, Atk.ImplementorIfaceProps, BuildableProps {
    useHeaderBar: number;
  }
  
  export class Bin extends Container implements Atk.ImplementorIface, Buildable {
    constructor(props?: BinProps);
    
    public getChild(): Widget;
  }
  
  interface BinProps extends ContainerProps, Atk.ImplementorIfaceProps, BuildableProps {
    
  }
  
  export class BooleanCellAccessible extends RendererCellAccessible implements Atk.Action, Atk.Component {
    constructor(props?: BooleanCellAccessibleProps);
  }
  
  interface BooleanCellAccessibleProps extends RendererCellAccessibleProps, Atk.ActionProps, Atk.ComponentProps {
    
  }
  
  export class Box extends Container implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: BoxProps);
    
    baselinePosition: BaselinePosition;
    homogeneous: boolean;
    spacing: number;
    
    public getBaselinePosition(): BaselinePosition;
    public getCenterWidget(): Widget;
    public getHomogeneous(): boolean;
    public getSpacing(): number;
    public packEnd(child: Widget, expand: boolean, fill: boolean, padding: number): void;
    public packStart(child: Widget, expand: boolean, fill: boolean, padding: number): void;
    public queryChildPacking(child: Widget, expand: boolean, fill: boolean, padding: number, packType: PackType): void;
    public reorderChild(child: Widget, position: number): void;
    public setBaselinePosition(position: BaselinePosition): void;
    public setCenterWidget(widget: Widget): void;
    public setChildPacking(child: Widget, expand: boolean, fill: boolean, padding: number, packType: PackType): void;
    public setHomogeneous(homogeneous: boolean): void;
    public setSpacing(spacing: number): void;
  }
  
  interface BoxProps extends ContainerProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    baselinePosition: BaselinePosition;
    homogeneous: boolean;
    spacing: number;
  }
  
  export class Builder extends GObject.Object {
    constructor(props?: BuilderProps);
    
    translationDomain: string;
    
    public addCallbackSymbol(callbackName: string, callbackSymbol: GObject.Callback): void;
    public addCallbackSymbols(firstCallbackName: string, firstCallbackSymbol: GObject.Callback, ...params: any[]): void;
    public addFromFile(filename: string): number;
    public addFromResource(resourcePath: string): number;
    public addFromString(buffer: string, length: number): number;
    public addObjectsFromFile(filename: string, objectIds: string[]): number;
    public addObjectsFromResource(resourcePath: string, objectIds: string[]): number;
    public addObjectsFromString(buffer: string, length: number, objectIds: string[]): number;
    public connectSignals(userData: any): void;
    public connectSignalsFull(func: BuilderConnectFunc, userData: any): void;
    public exposeObject(name: string, object: GObject.Object): void;
    public extendWithTemplate(widget: Widget, templateType: GObject.Type, buffer: string, length: number): number;
    public getApplication(): Application;
    public getObject(name: string): GObject.Object;
    public getObjects(): GLib.SList;
    public getTranslationDomain(): string;
    public getTypeFromName(typeName: string): GObject.Type;
    public lookupCallbackSymbol(callbackName: string): GObject.Callback;
    public setApplication(application: Application): void;
    public setTranslationDomain(domain: string): void;
    public valueFromString(pspec: GObject.ParamSpec, string: string, value: GObject.Value): boolean;
    public valueFromStringType(type: GObject.Type, string: string, value: GObject.Value): boolean;
  }
  
  interface BuilderProps extends GObject.ObjectProps {
    translationDomain: string;
  }
  
  export class Button extends Bin implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(props?: ButtonProps);
    
    alwaysShowImage: boolean;
    image: Widget;
    imagePosition: PositionType;
    label: string;
    relief: ReliefStyle;
    useStock: boolean;
    useUnderline: boolean;
    xalign: number;
    yalign: number;
    
    public clicked(): void;
    public enter(): void;
    public getAlignment(xalign: number, yalign: number): void;
    public getAlwaysShowImage(): boolean;
    public getEventWindow(): Gdk.Window;
    public getFocusOnClick(): boolean;
    public getImage(): Widget;
    public getImagePosition(): PositionType;
    public getLabel(): string;
    public getRelief(): ReliefStyle;
    public getUseStock(): boolean;
    public getUseUnderline(): boolean;
    public leave(): void;
    public pressed(): void;
    public released(): void;
    public setAlignment(xalign: number, yalign: number): void;
    public setAlwaysShowImage(alwaysShow: boolean): void;
    public setFocusOnClick(focusOnClick: boolean): void;
    public setImage(image: Widget): void;
    public setImagePosition(position: PositionType): void;
    public setLabel(label: string): void;
    public setRelief(relief: ReliefStyle): void;
    public setUseStock(useStock: boolean): void;
    public setUseUnderline(useUnderline: boolean): void;
    public activate(): void;
  }
  
  interface ButtonProps extends BinProps, Atk.ImplementorIfaceProps, ActionableProps, ActivatableProps, BuildableProps {
    alwaysShowImage: boolean;
    image: Widget;
    imagePosition: PositionType;
    label: string;
    relief: ReliefStyle;
    useStock: boolean;
    useUnderline: boolean;
    xalign: number;
    yalign: number;
  }
  
  export class ButtonAccessible extends ContainerAccessible implements Atk.Action, Atk.Component, Atk.Image {
    constructor(props?: ButtonAccessibleProps);
  }
  
  interface ButtonAccessibleProps extends ContainerAccessibleProps, Atk.ActionProps, Atk.ComponentProps, Atk.ImageProps {
    
  }
  
  export class ButtonBox extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: ButtonBoxProps);
    
    layoutStyle: ButtonBoxStyle;
    
    public getChildNonHomogeneous(child: Widget): boolean;
    public getChildSecondary(child: Widget): boolean;
    public getLayout(): ButtonBoxStyle;
    public setChildNonHomogeneous(child: Widget, nonHomogeneous: boolean): void;
    public setChildSecondary(child: Widget, isSecondary: boolean): void;
    public setLayout(layoutStyle: ButtonBoxStyle): void;
  }
  
  interface ButtonBoxProps extends BoxProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    layoutStyle: ButtonBoxStyle;
  }
  
  export class Calendar extends Widget implements Atk.ImplementorIface, Buildable {
    constructor(props?: CalendarProps);
    
    day: number;
    detailHeightRows: number;
    detailWidthChars: number;
    month: number;
    noMonthChange: boolean;
    showDayNames: boolean;
    showDetails: boolean;
    showHeading: boolean;
    showWeekNumbers: boolean;
    year: number;
    
    public clearMarks(): void;
    public getDate(year: number, month: number, day: number): void;
    public getDayIsMarked(day: number): boolean;
    public getDetailHeightRows(): number;
    public getDetailWidthChars(): number;
    public getDisplayOptions(): CalendarDisplayOptions;
    public markDay(day: number): void;
    public selectDay(day: number): void;
    public selectMonth(month: number, year: number): void;
    public setDetailFunc(func: CalendarDetailFunc, data: any, destroy: GLib.DestroyNotify): void;
    public setDetailHeightRows(_rows: number): void;
    public setDetailWidthChars(chars: number): void;
    public setDisplayOptions(flags: CalendarDisplayOptions): void;
    public unmarkDay(day: number): void;
    public daySelected(): void;
    public daySelectedDoubleClick(): void;
    public monthChanged(): void;
    public nextMonth(): void;
    public nextYear(): void;
    public prevMonth(): void;
    public prevYear(): void;
  }
  
  interface CalendarProps extends WidgetProps, Atk.ImplementorIfaceProps, BuildableProps {
    day: number;
    detailHeightRows: number;
    detailWidthChars: number;
    month: number;
    noMonthChange: boolean;
    showDayNames: boolean;
    showDetails: boolean;
    showHeading: boolean;
    showWeekNumbers: boolean;
    year: number;
  }
  
  export class CellAccessible extends Accessible implements Atk.Action, Atk.Component {
    constructor(props?: CellAccessibleProps);
    
    public updateCache(emitSignal: boolean): void;
  }
  
  interface CellAccessibleProps extends AccessibleProps, Atk.ActionProps, Atk.ComponentProps {
    
  }
  
  export class CellArea extends GObject.InitiallyUnowned implements Buildable, CellLayout {
    constructor(props?: CellAreaProps);
    
    editWidget: CellEditable;
    editedCell: CellRenderer;
    focusCell: CellRenderer;
    
    public activate(context: CellAreaContext, widget: Widget, cellArea: Gdk.Rectangle, flags: CellRendererState, editOnly: boolean): boolean;
    public activateCell(widget: Widget, renderer: CellRenderer, event: Gdk.Event, cellArea: Gdk.Rectangle, flags: CellRendererState): boolean;
    public add(renderer: CellRenderer): void;
    public addFocusSibling(renderer: CellRenderer, sibling: CellRenderer): void;
    public addWithProperties(renderer: CellRenderer, firstPropName: string, ...params: any[]): void;
    public applyAttributes(treeModel: TreeModel, iter: TreeIter, isExpander: boolean, isExpanded: boolean): void;
    public attributeConnect(renderer: CellRenderer, attribute: string, column: number): void;
    public attributeDisconnect(renderer: CellRenderer, attribute: string): void;
    public attributeGetColumn(renderer: CellRenderer, attribute: string): number;
    public cellGet(renderer: CellRenderer, firstPropName: string, ...params: any[]): void;
    public cellGetProperty(renderer: CellRenderer, propertyName: string, value: GObject.Value): void;
    public cellGetValist(renderer: CellRenderer, firstPropertyName: string, varArgs: any[]): void;
    public cellSet(renderer: CellRenderer, firstPropName: string, ...params: any[]): void;
    public cellSetProperty(renderer: CellRenderer, propertyName: string, value: GObject.Value): void;
    public cellSetValist(renderer: CellRenderer, firstPropertyName: string, varArgs: any[]): void;
    public copyContext(context: CellAreaContext): CellAreaContext;
    public createContext(): CellAreaContext;
    public event(context: CellAreaContext, widget: Widget, event: Gdk.Event, cellArea: Gdk.Rectangle, flags: CellRendererState): number;
    public focus(direction: DirectionType): boolean;
    public foreach(callback: CellCallback, callbackData: any): void;
    public foreachAlloc(context: CellAreaContext, widget: Widget, cellArea: Gdk.Rectangle, backgroundArea: Gdk.Rectangle, callback: CellAllocCallback, callbackData: any): void;
    public getCellAllocation(context: CellAreaContext, widget: Widget, renderer: CellRenderer, cellArea: Gdk.Rectangle, allocation: Gdk.Rectangle): void;
    public getCellAtPosition(context: CellAreaContext, widget: Widget, cellArea: Gdk.Rectangle, x: number, _y: number, allocArea: Gdk.Rectangle): CellRenderer;
    public getCurrentPathString(): string;
    public getEditWidget(): CellEditable;
    public getEditedCell(): CellRenderer;
    public getFocusCell(): CellRenderer;
    public getFocusFromSibling(renderer: CellRenderer): CellRenderer;
    public getFocusSiblings(renderer: CellRenderer): GLib.List;
    public getPreferredHeight(context: CellAreaContext, widget: Widget, minimumHeight: number, naturalHeight: number): void;
    public getPreferredHeightForWidth(context: CellAreaContext, widget: Widget, width: number, minimumHeight: number, naturalHeight: number): void;
    public getPreferredWidth(context: CellAreaContext, widget: Widget, minimumWidth: number, naturalWidth: number): void;
    public getPreferredWidthForHeight(context: CellAreaContext, widget: Widget, height: number, minimumWidth: number, naturalWidth: number): void;
    public getRequestMode(): SizeRequestMode;
    public hasRenderer(renderer: CellRenderer): boolean;
    public innerCellArea(widget: Widget, cellArea: Gdk.Rectangle, innerArea: Gdk.Rectangle): void;
    public isActivatable(): boolean;
    public isFocusSibling(renderer: CellRenderer, sibling: CellRenderer): boolean;
    public remove(renderer: CellRenderer): void;
    public removeFocusSibling(renderer: CellRenderer, sibling: CellRenderer): void;
    public render(context: CellAreaContext, widget: Widget, cr: cairo.Context, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, flags: CellRendererState, paintFocus: boolean): void;
    public requestRenderer(renderer: CellRenderer, orientation: Orientation, widget: Widget, forSize: number, minimumSize: number, naturalSize: number): void;
    public setFocusCell(renderer: CellRenderer): void;
    public stopEditing(canceled: boolean): void;
    public getCellProperty(renderer: CellRenderer, propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void;
    public setCellProperty(renderer: CellRenderer, propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void;
  }
  
  interface CellAreaProps extends GObject.InitiallyUnownedProps, BuildableProps, CellLayoutProps {
    editWidget: CellEditable;
    editedCell: CellRenderer;
    focusCell: CellRenderer;
  }
  
  export class CellAreaBox extends CellArea implements Buildable, CellLayout, Orientable {
    constructor(props?: CellAreaBoxProps);
    
    spacing: number;
    
    public getSpacing(): number;
    public packEnd(renderer: CellRenderer, expand: boolean, align: boolean, fixed: boolean): void;
    public packStart(renderer: CellRenderer, expand: boolean, align: boolean, fixed: boolean): void;
    public setSpacing(spacing: number): void;
  }
  
  interface CellAreaBoxProps extends CellAreaProps, BuildableProps, CellLayoutProps, OrientableProps {
    spacing: number;
  }
  
  export class CellAreaContext extends GObject.Object {
    constructor(props?: CellAreaContextProps);
    
    area: CellArea;
    minimumHeight: number;
    minimumWidth: number;
    naturalHeight: number;
    naturalWidth: number;
    
    public allocate(width: number, height: number): void;
    public getAllocation(width: number, height: number): void;
    public getArea(): CellArea;
    public getPreferredHeight(minimumHeight: number, naturalHeight: number): void;
    public getPreferredHeightForWidth(width: number, minimumHeight: number, naturalHeight: number): void;
    public getPreferredWidth(minimumWidth: number, naturalWidth: number): void;
    public getPreferredWidthForHeight(height: number, minimumWidth: number, naturalWidth: number): void;
    public pushPreferredHeight(minimumHeight: number, naturalHeight: number): void;
    public pushPreferredWidth(minimumWidth: number, naturalWidth: number): void;
    public reset(): void;
  }
  
  interface CellAreaContextProps extends GObject.ObjectProps {
    area: CellArea;
    minimumHeight: number;
    minimumWidth: number;
    naturalHeight: number;
    naturalWidth: number;
  }
  
  export class CellRenderer extends GObject.InitiallyUnowned {
    constructor(props?: CellRendererProps);
    
    cellBackground: string;
    cellBackgroundGdk: Gdk.Color;
    cellBackgroundRgba: Gdk.RGBA;
    cellBackgroundSet: boolean;
    editing: boolean;
    height: number;
    isExpanded: boolean;
    isExpander: boolean;
    mode: CellRendererMode;
    sensitive: boolean;
    visible: boolean;
    width: number;
    xalign: number;
    xpad: number;
    yalign: number;
    ypad: number;
    
    public activate(event: Gdk.Event, widget: Widget, path: string, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, flags: CellRendererState): boolean;
    public getAlignedArea(widget: Widget, flags: CellRendererState, cellArea: Gdk.Rectangle, alignedArea: Gdk.Rectangle): void;
    public getAlignment(xalign: number, yalign: number): void;
    public getFixedSize(width: number, height: number): void;
    public getPadding(xpad: number, ypad: number): void;
    public getPreferredHeight(widget: Widget, minimumSize: number, naturalSize: number): void;
    public getPreferredHeightForWidth(widget: Widget, width: number, minimumHeight: number, naturalHeight: number): void;
    public getPreferredSize(widget: Widget, minimumSize: Requisition, naturalSize: Requisition): void;
    public getPreferredWidth(widget: Widget, minimumSize: number, naturalSize: number): void;
    public getPreferredWidthForHeight(widget: Widget, height: number, minimumWidth: number, naturalWidth: number): void;
    public getRequestMode(): SizeRequestMode;
    public getSensitive(): boolean;
    public getSize(widget: Widget, cellArea: Gdk.Rectangle, xOffset: number, yOffset: number, width: number, height: number): void;
    public getState(widget: Widget, cellState: CellRendererState): StateFlags;
    public getVisible(): boolean;
    public isActivatable(): boolean;
    public render(cr: cairo.Context, widget: Widget, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, flags: CellRendererState): void;
    public setAlignment(xalign: number, yalign: number): void;
    public setFixedSize(width: number, height: number): void;
    public setPadding(xpad: number, ypad: number): void;
    public setSensitive(sensitive: boolean): void;
    public setVisible(visible: boolean): void;
    public startEditing(event: Gdk.Event, widget: Widget, path: string, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, flags: CellRendererState): CellEditable;
    public stopEditing(canceled: boolean): void;
    public editingCanceled(): void;
    public editingStarted(editable: CellEditable, path: string): void;
  }
  
  interface CellRendererProps extends GObject.InitiallyUnownedProps {
    cellBackground: string;
    cellBackgroundGdk: Gdk.Color;
    cellBackgroundRgba: Gdk.RGBA;
    cellBackgroundSet: boolean;
    editing: boolean;
    height: number;
    isExpanded: boolean;
    isExpander: boolean;
    mode: CellRendererMode;
    sensitive: boolean;
    visible: boolean;
    width: number;
    xalign: number;
    xpad: number;
    yalign: number;
    ypad: number;
  }
  
  export class CellRendererAccel extends CellRendererText {
    constructor(props?: CellRendererAccelProps);
    
    accelKey: number;
    accelMode: CellRendererAccelMode;
    accelMods: Gdk.ModifierType;
    keycode: number;
    
    public accelCleared(pathString: string): void;
    public accelEdited(pathString: string, accelKey: number, accelMods: Gdk.ModifierType, hardwareKeycode: number): void;
  }
  
  interface CellRendererAccelProps extends CellRendererTextProps {
    accelKey: number;
    accelMode: CellRendererAccelMode;
    accelMods: Gdk.ModifierType;
    keycode: number;
  }
  
  export class CellRendererCombo extends CellRendererText {
    constructor(props?: CellRendererComboProps);
    
    hasEntry: boolean;
    model: TreeModel;
    textColumn: number;
  }
  
  interface CellRendererComboProps extends CellRendererTextProps {
    hasEntry: boolean;
    model: TreeModel;
    textColumn: number;
  }
  
  export class CellRendererPixbuf extends CellRenderer {
    constructor(props?: CellRendererPixbufProps);
    
    followState: boolean;
    gicon: Gio.Icon;
    iconName: string;
    pixbuf: GdkPixbuf.Pixbuf;
    pixbufExpanderClosed: GdkPixbuf.Pixbuf;
    pixbufExpanderOpen: GdkPixbuf.Pixbuf;
    stockDetail: string;
    stockId: string;
    stockSize: number;
    surface: cairo.Surface;
  }
  
  interface CellRendererPixbufProps extends CellRendererProps {
    followState: boolean;
    gicon: Gio.Icon;
    iconName: string;
    pixbuf: GdkPixbuf.Pixbuf;
    pixbufExpanderClosed: GdkPixbuf.Pixbuf;
    pixbufExpanderOpen: GdkPixbuf.Pixbuf;
    stockDetail: string;
    stockId: string;
    stockSize: number;
    surface: cairo.Surface;
  }
  
  export class CellRendererProgress extends CellRenderer implements Orientable {
    constructor(props?: CellRendererProgressProps);
    
    inverted: boolean;
    pulse: number;
    text: string;
    textXalign: number;
    textYalign: number;
    value: number;
  }
  
  interface CellRendererProgressProps extends CellRendererProps, OrientableProps {
    inverted: boolean;
    pulse: number;
    text: string;
    textXalign: number;
    textYalign: number;
    value: number;
  }
  
  export class CellRendererSpin extends CellRendererText {
    constructor(props?: CellRendererSpinProps);
    
    adjustment: Adjustment;
    climbRate: number;
    digits: number;
  }
  
  interface CellRendererSpinProps extends CellRendererTextProps {
    adjustment: Adjustment;
    climbRate: number;
    digits: number;
  }
  
  export class CellRendererSpinner extends CellRenderer {
    constructor(props?: CellRendererSpinnerProps);
    
    active: boolean;
    pulse: number;
    size: IconSize;
  }
  
  interface CellRendererSpinnerProps extends CellRendererProps {
    active: boolean;
    pulse: number;
    size: IconSize;
  }
  
  export class CellRendererText extends CellRenderer {
    constructor(props?: CellRendererTextProps);
    
    alignSet: boolean;
    alignment: Pango.Alignment;
    attributes: Pango.AttrList;
    background: string;
    backgroundGdk: Gdk.Color;
    backgroundRgba: Gdk.RGBA;
    backgroundSet: boolean;
    editable: boolean;
    editableSet: boolean;
    ellipsize: Pango.EllipsizeMode;
    ellipsizeSet: boolean;
    family: string;
    familySet: boolean;
    font: string;
    fontDesc: Pango.FontDescription;
    foreground: string;
    foregroundGdk: Gdk.Color;
    foregroundRgba: Gdk.RGBA;
    foregroundSet: boolean;
    language: string;
    languageSet: boolean;
    markup: string;
    maxWidthChars: number;
    placeholderText: string;
    rise: number;
    riseSet: boolean;
    scale: number;
    scaleSet: boolean;
    singleParagraphMode: boolean;
    size: number;
    sizePoints: number;
    sizeSet: boolean;
    stretch: Pango.Stretch;
    stretchSet: boolean;
    strikethrough: boolean;
    strikethroughSet: boolean;
    style: Pango.Style;
    styleSet: boolean;
    text: string;
    underline: Pango.Underline;
    underlineSet: boolean;
    variant: Pango.Variant;
    variantSet: boolean;
    weight: number;
    weightSet: boolean;
    widthChars: number;
    wrapMode: Pango.WrapMode;
    wrapWidth: number;
    
    public setFixedHeightFromFont(numberOfRows: number): void;
    public edited(path: string, newText: string): void;
  }
  
  interface CellRendererTextProps extends CellRendererProps {
    alignSet: boolean;
    alignment: Pango.Alignment;
    attributes: Pango.AttrList;
    background: string;
    backgroundGdk: Gdk.Color;
    backgroundRgba: Gdk.RGBA;
    backgroundSet: boolean;
    editable: boolean;
    editableSet: boolean;
    ellipsize: Pango.EllipsizeMode;
    ellipsizeSet: boolean;
    family: string;
    familySet: boolean;
    font: string;
    fontDesc: Pango.FontDescription;
    foreground: string;
    foregroundGdk: Gdk.Color;
    foregroundRgba: Gdk.RGBA;
    foregroundSet: boolean;
    language: string;
    languageSet: boolean;
    markup: string;
    maxWidthChars: number;
    placeholderText: string;
    rise: number;
    riseSet: boolean;
    scale: number;
    scaleSet: boolean;
    singleParagraphMode: boolean;
    size: number;
    sizePoints: number;
    sizeSet: boolean;
    stretch: Pango.Stretch;
    stretchSet: boolean;
    strikethrough: boolean;
    strikethroughSet: boolean;
    style: Pango.Style;
    styleSet: boolean;
    text: string;
    underline: Pango.Underline;
    underlineSet: boolean;
    variant: Pango.Variant;
    variantSet: boolean;
    weight: number;
    weightSet: boolean;
    widthChars: number;
    wrapMode: Pango.WrapMode;
    wrapWidth: number;
  }
  
  export class CellRendererToggle extends CellRenderer {
    constructor(props?: CellRendererToggleProps);
    
    activatable: boolean;
    active: boolean;
    inconsistent: boolean;
    indicatorSize: number;
    radio: boolean;
    
    public getActivatable(): boolean;
    public getActive(): boolean;
    public getRadio(): boolean;
    public setActivatable(setting: boolean): void;
    public setActive(setting: boolean): void;
    public setRadio(radio: boolean): void;
    public toggled(path: string): void;
  }
  
  interface CellRendererToggleProps extends CellRendererProps {
    activatable: boolean;
    active: boolean;
    inconsistent: boolean;
    indicatorSize: number;
    radio: boolean;
  }
  
  export class CellView extends Widget implements Atk.ImplementorIface, Buildable, CellLayout, Orientable {
    constructor(props?: CellViewProps);
    
    background: string;
    backgroundGdk: Gdk.Color;
    backgroundRgba: Gdk.RGBA;
    backgroundSet: boolean;
    cellArea: CellArea;
    cellAreaContext: CellAreaContext;
    drawSensitive: boolean;
    fitModel: boolean;
    model: TreeModel;
    
    public getDisplayedRow(): TreePath;
    public getDrawSensitive(): boolean;
    public getFitModel(): boolean;
    public getModel(): TreeModel;
    public getSizeOfRow(path: TreePath, requisition: Requisition): boolean;
    public setBackgroundColor(color: Gdk.Color): void;
    public setBackgroundRgba(rgba: Gdk.RGBA): void;
    public setDisplayedRow(path: TreePath): void;
    public setDrawSensitive(drawSensitive: boolean): void;
    public setFitModel(fitModel: boolean): void;
    public setModel(model: TreeModel): void;
  }
  
  interface CellViewProps extends WidgetProps, Atk.ImplementorIfaceProps, BuildableProps, CellLayoutProps, OrientableProps {
    background: string;
    backgroundGdk: Gdk.Color;
    backgroundRgba: Gdk.RGBA;
    backgroundSet: boolean;
    cellArea: CellArea;
    cellAreaContext: CellAreaContext;
    drawSensitive: boolean;
    fitModel: boolean;
    model: TreeModel;
  }
  
  export class CheckButton extends ToggleButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(props?: CheckButtonProps);
    
    public drawIndicator(cr: cairo.Context): void;
  }
  
  interface CheckButtonProps extends ToggleButtonProps, Atk.ImplementorIfaceProps, ActionableProps, ActivatableProps, BuildableProps {
    
  }
  
  export class CheckMenuItem extends MenuItem implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(props?: CheckMenuItemProps);
    
    active: boolean;
    drawAsRadio: boolean;
    inconsistent: boolean;
    
    public getActive(): boolean;
    public getDrawAsRadio(): boolean;
    public getInconsistent(): boolean;
    public setActive(isActive: boolean): void;
    public setDrawAsRadio(drawAsRadio: boolean): void;
    public setInconsistent(setting: boolean): void;
    public toggled(): void;
    public drawIndicator(cr: cairo.Context): void;
  }
  
  interface CheckMenuItemProps extends MenuItemProps, Atk.ImplementorIfaceProps, ActionableProps, ActivatableProps, BuildableProps {
    active: boolean;
    drawAsRadio: boolean;
    inconsistent: boolean;
  }
  
  export class CheckMenuItemAccessible extends MenuItemAccessible implements Atk.Action, Atk.Component, Atk.Selection {
    constructor(props?: CheckMenuItemAccessibleProps);
  }
  
  interface CheckMenuItemAccessibleProps extends MenuItemAccessibleProps, Atk.ActionProps, Atk.ComponentProps, Atk.SelectionProps {
    
  }
  
  export class Clipboard extends GObject.Object {
    constructor(props?: ClipboardProps);
    
    public clear(): void;
    public getDisplay(): Gdk.Display;
    public getOwner(): GObject.Object;
    public getSelection(): Gdk.Atom;
    public requestContents(target: Gdk.Atom, callback: ClipboardReceivedFunc, userData: any): void;
    public requestImage(callback: ClipboardImageReceivedFunc, userData: any): void;
    public requestRichText(buffer: TextBuffer, callback: ClipboardRichTextReceivedFunc, userData: any): void;
    public requestTargets(callback: ClipboardTargetsReceivedFunc, userData: any): void;
    public requestText(callback: ClipboardTextReceivedFunc, userData: any): void;
    public requestUris(callback: ClipboardURIReceivedFunc, userData: any): void;
    public setCanStore(targets: TargetEntry[], nTargets: number): void;
    public setImage(pixbuf: GdkPixbuf.Pixbuf): void;
    public setText(text: string, len: number): void;
    public setWithData(targets: TargetEntry[], nTargets: number, getFunc: ClipboardGetFunc, clearFunc: ClipboardClearFunc, userData: any): boolean;
    public setWithOwner(targets: TargetEntry[], nTargets: number, getFunc: ClipboardGetFunc, clearFunc: ClipboardClearFunc, owner: GObject.Object): boolean;
    public store(): void;
    public waitForContents(target: Gdk.Atom): SelectionData;
    public waitForImage(): GdkPixbuf.Pixbuf;
    public waitForRichText(buffer: TextBuffer, format: Gdk.Atom, length: number): number[];
    public waitForTargets(targets: Gdk.Atom[], nTargets: number): boolean;
    public waitForText(): string;
    public waitForUris(): string[];
    public waitIsImageAvailable(): boolean;
    public waitIsRichTextAvailable(buffer: TextBuffer): boolean;
    public waitIsTargetAvailable(target: Gdk.Atom): boolean;
    public waitIsTextAvailable(): boolean;
    public waitIsUrisAvailable(): boolean;
    
    public static get(selection: Gdk.Atom): Clipboard;
    public static getDefault(display: Gdk.Display): Clipboard;
    public static getForDisplay(display: Gdk.Display, selection: Gdk.Atom): Clipboard;
  }
  
  interface ClipboardProps extends GObject.ObjectProps {
    
  }
  
  export class ColorButton extends Button implements Atk.ImplementorIface, Actionable, Activatable, Buildable, ColorChooser {
    constructor(props?: ColorButtonProps);
    
    alpha: number;
    color: Gdk.Color;
    rgba: Gdk.RGBA;
    showEditor: boolean;
    title: string;
    useAlpha: boolean;
    
    public getAlpha(): number;
    public getColor(color: Gdk.Color): void;
    public getRgba(rgba: Gdk.RGBA): void;
    public getTitle(): string;
    public getUseAlpha(): boolean;
    public setAlpha(alpha: number): void;
    public setColor(color: Gdk.Color): void;
    public setRgba(rgba: Gdk.RGBA): void;
    public setTitle(title: string): void;
    public setUseAlpha(useAlpha: boolean): void;
    public colorSet(): void;
  }
  
  interface ColorButtonProps extends ButtonProps, Atk.ImplementorIfaceProps, ActionableProps, ActivatableProps, BuildableProps, ColorChooserProps {
    alpha: number;
    color: Gdk.Color;
    rgba: Gdk.RGBA;
    showEditor: boolean;
    title: string;
    useAlpha: boolean;
  }
  
  export class ColorChooserDialog extends Dialog implements Atk.ImplementorIface, Buildable, ColorChooser {
    constructor(props?: ColorChooserDialogProps);
    
    showEditor: boolean;
  }
  
  interface ColorChooserDialogProps extends DialogProps, Atk.ImplementorIfaceProps, BuildableProps, ColorChooserProps {
    showEditor: boolean;
  }
  
  export class ColorChooserWidget extends Box implements Atk.ImplementorIface, Buildable, ColorChooser, Orientable {
    constructor(props?: ColorChooserWidgetProps);
    
    showEditor: boolean;
  }
  
  interface ColorChooserWidgetProps extends BoxProps, Atk.ImplementorIfaceProps, BuildableProps, ColorChooserProps, OrientableProps {
    showEditor: boolean;
  }
  
  export class ColorSelection extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: ColorSelectionProps);
    
    currentAlpha: number;
    currentColor: Gdk.Color;
    currentRgba: Gdk.RGBA;
    hasOpacityControl: boolean;
    hasPalette: boolean;
    
    public getCurrentAlpha(): number;
    public getCurrentColor(color: Gdk.Color): void;
    public getCurrentRgba(rgba: Gdk.RGBA): void;
    public getHasOpacityControl(): boolean;
    public getHasPalette(): boolean;
    public getPreviousAlpha(): number;
    public getPreviousColor(color: Gdk.Color): void;
    public getPreviousRgba(rgba: Gdk.RGBA): void;
    public isAdjusting(): boolean;
    public setCurrentAlpha(alpha: number): void;
    public setCurrentColor(color: Gdk.Color): void;
    public setCurrentRgba(rgba: Gdk.RGBA): void;
    public setHasOpacityControl(hasOpacity: boolean): void;
    public setHasPalette(hasPalette: boolean): void;
    public setPreviousAlpha(alpha: number): void;
    public setPreviousColor(color: Gdk.Color): void;
    public setPreviousRgba(rgba: Gdk.RGBA): void;
    public colorChanged(): void;
    
    public static paletteFromString(str: string, colors: Gdk.Color[], nColors: number): boolean;
    public static paletteToString(colors: Gdk.Color[], nColors: number): string;
    public static setChangePaletteWithScreenHook(func: ColorSelectionChangePaletteWithScreenFunc): ColorSelectionChangePaletteWithScreenFunc;
  }
  
  interface ColorSelectionProps extends BoxProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    currentAlpha: number;
    currentColor: Gdk.Color;
    currentRgba: Gdk.RGBA;
    hasOpacityControl: boolean;
    hasPalette: boolean;
  }
  
  export class ColorSelectionDialog extends Dialog implements Atk.ImplementorIface, Buildable {
    constructor(props?: ColorSelectionDialogProps);
    
    cancelButton: Widget;
    colorSelection: Widget;
    helpButton: Widget;
    okButton: Widget;
    
    public getColorSelection(): Widget;
  }
  
  interface ColorSelectionDialogProps extends DialogProps, Atk.ImplementorIfaceProps, BuildableProps {
    cancelButton: Widget;
    colorSelection: Widget;
    helpButton: Widget;
    okButton: Widget;
  }
  
  export class ComboBox extends Bin implements Atk.ImplementorIface, Buildable, CellEditable, CellLayout {
    constructor(props?: ComboBoxProps);
    
    active: number;
    activeId: string;
    addTearoffs: boolean;
    buttonSensitivity: SensitivityType;
    cellArea: CellArea;
    columnSpanColumn: number;
    entryTextColumn: number;
    hasEntry: boolean;
    hasFrame: boolean;
    idColumn: number;
    model: TreeModel;
    popupFixedWidth: boolean;
    popupShown: boolean;
    rowSpanColumn: number;
    tearoffTitle: string;
    wrapWidth: number;
    
    public getActive(): number;
    public getActiveId(): string;
    public getActiveIter(iter: TreeIter): boolean;
    public getAddTearoffs(): boolean;
    public getButtonSensitivity(): SensitivityType;
    public getColumnSpanColumn(): number;
    public getEntryTextColumn(): number;
    public getFocusOnClick(): boolean;
    public getHasEntry(): boolean;
    public getIdColumn(): number;
    public getModel(): TreeModel;
    public getPopupAccessible(): Atk.Object;
    public getPopupFixedWidth(): boolean;
    public getRowSeparatorFunc(): TreeViewRowSeparatorFunc;
    public getRowSpanColumn(): number;
    public getTitle(): string;
    public getWrapWidth(): number;
    public popdown(): void;
    public popup(): void;
    public popupForDevice(device: Gdk.Device): void;
    public setActive(index_: number): void;
    public setActiveId(activeId: string): boolean;
    public setActiveIter(iter: TreeIter): void;
    public setAddTearoffs(addTearoffs: boolean): void;
    public setButtonSensitivity(sensitivity: SensitivityType): void;
    public setColumnSpanColumn(columnSpan: number): void;
    public setEntryTextColumn(textColumn: number): void;
    public setFocusOnClick(focusOnClick: boolean): void;
    public setIdColumn(idColumn: number): void;
    public setModel(model: TreeModel): void;
    public setPopupFixedWidth(fixed: boolean): void;
    public setRowSeparatorFunc(func: TreeViewRowSeparatorFunc, data: any, destroy: GLib.DestroyNotify): void;
    public setRowSpanColumn(rowSpan: number): void;
    public setTitle(title: string): void;
    public setWrapWidth(width: number): void;
    public changed(): void;
    public formatEntryText(path: string): string;
  }
  
  interface ComboBoxProps extends BinProps, Atk.ImplementorIfaceProps, BuildableProps, CellEditableProps, CellLayoutProps {
    active: number;
    activeId: string;
    addTearoffs: boolean;
    buttonSensitivity: SensitivityType;
    cellArea: CellArea;
    columnSpanColumn: number;
    entryTextColumn: number;
    hasEntry: boolean;
    hasFrame: boolean;
    idColumn: number;
    model: TreeModel;
    popupFixedWidth: boolean;
    popupShown: boolean;
    rowSpanColumn: number;
    tearoffTitle: string;
    wrapWidth: number;
  }
  
  export class ComboBoxAccessible extends ContainerAccessible implements Atk.Action, Atk.Component, Atk.Selection {
    constructor(props?: ComboBoxAccessibleProps);
  }
  
  interface ComboBoxAccessibleProps extends ContainerAccessibleProps, Atk.ActionProps, Atk.ComponentProps, Atk.SelectionProps {
    
  }
  
  export class ComboBoxText extends ComboBox implements Atk.ImplementorIface, Buildable, CellEditable, CellLayout {
    constructor(props?: ComboBoxTextProps);
    
    public append(_id: string, text: string): void;
    public appendText(text: string): void;
    public getActiveText(): string;
    public insert(position: number, _id: string, text: string): void;
    public insertText(position: number, text: string): void;
    public prepend(_id: string, text: string): void;
    public prependText(text: string): void;
    public remove(position: number): void;
    public removeAll(): void;
  }
  
  interface ComboBoxTextProps extends ComboBoxProps, Atk.ImplementorIfaceProps, BuildableProps, CellEditableProps, CellLayoutProps {
    
  }
  
  export class Container extends Widget implements Atk.ImplementorIface, Buildable {
    constructor(props?: ContainerProps);
    
    borderWidth: number;
    child: Widget;
    resizeMode: ResizeMode;
    
    public add(widget: Widget): void;
    public addWithProperties(widget: Widget, firstPropName: string, ...params: any[]): void;
    public checkResize(): void;
    public childGet(child: Widget, firstPropName: string, ...params: any[]): void;
    public childGetProperty(child: Widget, propertyName: string, value: GObject.Value): void;
    public childGetValist(child: Widget, firstPropertyName: string, varArgs: any[]): void;
    public childNotify(child: Widget, childProperty: string): void;
    public childNotifyByPspec(child: Widget, pspec: GObject.ParamSpec): void;
    public childSet(child: Widget, firstPropName: string, ...params: any[]): void;
    public childSetProperty(child: Widget, propertyName: string, value: GObject.Value): void;
    public childSetValist(child: Widget, firstPropertyName: string, varArgs: any[]): void;
    public childType(): GObject.Type;
    public forall(callback: Callback, callbackData: any): void;
    public foreach(callback: Callback, callbackData: any): void;
    public getBorderWidth(): number;
    public getChildren(): GLib.List;
    public getFocusChain(focusableWidgets: GLib.List): boolean;
    public getFocusChild(): Widget;
    public getFocusHadjustment(): Adjustment;
    public getFocusVadjustment(): Adjustment;
    public getPathForChild(child: Widget): WidgetPath;
    public getResizeMode(): ResizeMode;
    public propagateDraw(child: Widget, cr: cairo.Context): void;
    public remove(widget: Widget): void;
    public resizeChildren(): void;
    public setBorderWidth(borderWidth: number): void;
    public setFocusChain(focusableWidgets: GLib.List): void;
    public setFocusChild(child: Widget): void;
    public setFocusHadjustment(adjustment: Adjustment): void;
    public setFocusVadjustment(adjustment: Adjustment): void;
    public setReallocateRedraws(needsRedraws: boolean): void;
    public setResizeMode(resizeMode: ResizeMode): void;
    public unsetFocusChain(): void;
    public compositeName(child: Widget): string;
    public getChildProperty(child: Widget, propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void;
    public setChildProperty(child: Widget, propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void;
  }
  
  interface ContainerProps extends WidgetProps, Atk.ImplementorIfaceProps, BuildableProps {
    borderWidth: number;
    child: Widget;
    resizeMode: ResizeMode;
  }
  
  export class ContainerAccessible extends WidgetAccessible implements Atk.Component {
    constructor(props?: ContainerAccessibleProps);
  }
  
  interface ContainerAccessibleProps extends WidgetAccessibleProps, Atk.ComponentProps {
    
  }
  
  export class ContainerCellAccessible extends CellAccessible implements Atk.Action, Atk.Component {
    constructor(props?: ContainerCellAccessibleProps);
    
    public addChild(child: CellAccessible): void;
    public getChildren(): GLib.List;
    public removeChild(child: CellAccessible): void;
  }
  
  interface ContainerCellAccessibleProps extends CellAccessibleProps, Atk.ActionProps, Atk.ComponentProps {
    
  }
  
  export class CssProvider extends GObject.Object implements StyleProvider {
    constructor(props?: CssProviderProps);
    
    public loadFromData(data: number[], length: number): boolean;
    public loadFromFile(file: Gio.File): boolean;
    public loadFromPath(path: string): boolean;
    public loadFromResource(resourcePath: string): void;
    public toString(): string;
    public parsingError(section: CssSection, error: GLib.Error): void;
    
    public static getDefault(): CssProvider;
    public static getNamed(name: string, variant: string): CssProvider;
  }
  
  interface CssProviderProps extends GObject.ObjectProps, StyleProviderProps {
    
  }
  
  export class Dialog extends Window implements Atk.ImplementorIface, Buildable {
    constructor(props?: DialogProps);
    
    useHeaderBar: number;
    
    public addActionWidget(child: Widget, responseId: number): void;
    public addButton(buttonText: string, responseId: number): Widget;
    public addButtons(firstButtonText: string, ...params: any[]): void;
    public getActionArea(): Widget;
    public getContentArea(): Box;
    public getHeaderBar(): Widget;
    public getResponseForWidget(widget: Widget): number;
    public getWidgetForResponse(responseId: number): Widget;
    public response(responseId: number): void;
    public run(): number;
    public setAlternativeButtonOrder(firstResponseId: number, ...params: any[]): void;
    public setAlternativeButtonOrderFromArray(nParams: number, newOrder: number[]): void;
    public setDefaultResponse(responseId: number): void;
    public setResponseSensitive(responseId: number, setting: boolean): void;
    public close(): void;
  }
  
  interface DialogProps extends WindowProps, Atk.ImplementorIfaceProps, BuildableProps {
    useHeaderBar: number;
  }
  
  export class DrawingArea extends Widget implements Atk.ImplementorIface, Buildable {
    constructor(props?: DrawingAreaProps);
  }
  
  interface DrawingAreaProps extends WidgetProps, Atk.ImplementorIfaceProps, BuildableProps {
    
  }
  
  export class Entry extends Widget implements Atk.ImplementorIface, Buildable, CellEditable, Editable {
    constructor(props?: EntryProps);
    
    activatesDefault: boolean;
    attributes: Pango.AttrList;
    buffer: EntryBuffer;
    capsLockWarning: boolean;
    completion: EntryCompletion;
    cursorPosition: number;
    editable: boolean;
    hasFrame: boolean;
    imModule: string;
    innerBorder: Border;
    inputHints: InputHints;
    inputPurpose: InputPurpose;
    invisibleChar: number;
    invisibleCharSet: boolean;
    maxLength: number;
    maxWidthChars: number;
    overwriteMode: boolean;
    placeholderText: string;
    populateAll: boolean;
    primaryIconActivatable: boolean;
    primaryIconGicon: Gio.Icon;
    primaryIconName: string;
    primaryIconPixbuf: GdkPixbuf.Pixbuf;
    primaryIconSensitive: boolean;
    primaryIconStock: string;
    primaryIconStorageType: ImageType;
    primaryIconTooltipMarkup: string;
    primaryIconTooltipText: string;
    progressFraction: number;
    progressPulseStep: number;
    scrollOffset: number;
    secondaryIconActivatable: boolean;
    secondaryIconGicon: Gio.Icon;
    secondaryIconName: string;
    secondaryIconPixbuf: GdkPixbuf.Pixbuf;
    secondaryIconSensitive: boolean;
    secondaryIconStock: string;
    secondaryIconStorageType: ImageType;
    secondaryIconTooltipMarkup: string;
    secondaryIconTooltipText: string;
    selectionBound: number;
    shadowType: ShadowType;
    tabs: Pango.TabArray;
    text: string;
    textLength: number;
    truncateMultiline: boolean;
    visibility: boolean;
    widthChars: number;
    xalign: number;
    
    public getActivatesDefault(): boolean;
    public getAlignment(): number;
    public getAttributes(): Pango.AttrList;
    public getBuffer(): EntryBuffer;
    public getCompletion(): EntryCompletion;
    public getCurrentIconDragSource(): number;
    public getCursorHadjustment(): Adjustment;
    public getHasFrame(): boolean;
    public getIconActivatable(iconPos: EntryIconPosition): boolean;
    public getIconArea(iconPos: EntryIconPosition, iconArea: Gdk.Rectangle): void;
    public getIconAtPos(x: number, _y: number): number;
    public getIconGicon(iconPos: EntryIconPosition): Gio.Icon;
    public getIconName(iconPos: EntryIconPosition): string;
    public getIconPixbuf(iconPos: EntryIconPosition): GdkPixbuf.Pixbuf;
    public getIconSensitive(iconPos: EntryIconPosition): boolean;
    public getIconStock(iconPos: EntryIconPosition): string;
    public getIconStorageType(iconPos: EntryIconPosition): ImageType;
    public getIconTooltipMarkup(iconPos: EntryIconPosition): string;
    public getIconTooltipText(iconPos: EntryIconPosition): string;
    public getInnerBorder(): Border;
    public getInputHints(): InputHints;
    public getInputPurpose(): InputPurpose;
    public getInvisibleChar(): string;
    public getLayout(): Pango.Layout;
    public getLayoutOffsets(x: number, _y: number): void;
    public getMaxLength(): number;
    public getMaxWidthChars(): number;
    public getOverwriteMode(): boolean;
    public getPlaceholderText(): string;
    public getProgressFraction(): number;
    public getProgressPulseStep(): number;
    public getTabs(): Pango.TabArray;
    public getText(): string;
    public getTextArea(textArea: Gdk.Rectangle): void;
    public getTextLength(): number;
    public getVisibility(): boolean;
    public getWidthChars(): number;
    public grabFocusWithoutSelecting(): void;
    public imContextFilterKeypress(event: Gdk.EventKey): boolean;
    public layoutIndexToTextIndex(layoutIndex: number): number;
    public progressPulse(): void;
    public resetImContext(): void;
    public setActivatesDefault(setting: boolean): void;
    public setAlignment(xalign: number): void;
    public setAttributes(attrs: Pango.AttrList): void;
    public setBuffer(buffer: EntryBuffer): void;
    public setCompletion(completion: EntryCompletion): void;
    public setCursorHadjustment(adjustment: Adjustment): void;
    public setHasFrame(setting: boolean): void;
    public setIconActivatable(iconPos: EntryIconPosition, activatable: boolean): void;
    public setIconDragSource(iconPos: EntryIconPosition, targetList: TargetList, actions: Gdk.DragAction): void;
    public setIconFromGicon(iconPos: EntryIconPosition, icon: Gio.Icon): void;
    public setIconFromIconName(iconPos: EntryIconPosition, iconName: string): void;
    public setIconFromPixbuf(iconPos: EntryIconPosition, pixbuf: GdkPixbuf.Pixbuf): void;
    public setIconFromStock(iconPos: EntryIconPosition, stockId: string): void;
    public setIconSensitive(iconPos: EntryIconPosition, sensitive: boolean): void;
    public setIconTooltipMarkup(iconPos: EntryIconPosition, tooltip: string): void;
    public setIconTooltipText(iconPos: EntryIconPosition, tooltip: string): void;
    public setInnerBorder(border: Border): void;
    public setInputHints(hints: InputHints): void;
    public setInputPurpose(purpose: InputPurpose): void;
    public setInvisibleChar(_ch: string): void;
    public setMaxLength(max: number): void;
    public setMaxWidthChars(nChars: number): void;
    public setOverwriteMode(overwrite: boolean): void;
    public setPlaceholderText(text: string): void;
    public setProgressFraction(fraction: number): void;
    public setProgressPulseStep(fraction: number): void;
    public setTabs(tabs: Pango.TabArray): void;
    public setText(text: string): void;
    public setVisibility(visible: boolean): void;
    public setWidthChars(nChars: number): void;
    public textIndexToLayoutIndex(textIndex: number): number;
    public unsetInvisibleChar(): void;
    public activate(): void;
    public backspace(): void;
    public copyClipboard(): void;
    public cutClipboard(): void;
    public deleteFromCursor(type: DeleteType, count: number): void;
    public getFrameSize(x: number, _y: number, width: number, height: number): void;
    public getTextAreaSize(x: number, _y: number, width: number, height: number): void;
    public insertAtCursor(str: string): void;
    public moveCursor(step: MovementStep, count: number, extendSelection: boolean): void;
    public pasteClipboard(): void;
    public populatePopup(popup: Widget): void;
    public toggleOverwrite(): void;
  }
  
  interface EntryProps extends WidgetProps, Atk.ImplementorIfaceProps, BuildableProps, CellEditableProps, EditableProps {
    activatesDefault: boolean;
    attributes: Pango.AttrList;
    buffer: EntryBuffer;
    capsLockWarning: boolean;
    completion: EntryCompletion;
    cursorPosition: number;
    editable: boolean;
    hasFrame: boolean;
    imModule: string;
    innerBorder: Border;
    inputHints: InputHints;
    inputPurpose: InputPurpose;
    invisibleChar: number;
    invisibleCharSet: boolean;
    maxLength: number;
    maxWidthChars: number;
    overwriteMode: boolean;
    placeholderText: string;
    populateAll: boolean;
    primaryIconActivatable: boolean;
    primaryIconGicon: Gio.Icon;
    primaryIconName: string;
    primaryIconPixbuf: GdkPixbuf.Pixbuf;
    primaryIconSensitive: boolean;
    primaryIconStock: string;
    primaryIconStorageType: ImageType;
    primaryIconTooltipMarkup: string;
    primaryIconTooltipText: string;
    progressFraction: number;
    progressPulseStep: number;
    scrollOffset: number;
    secondaryIconActivatable: boolean;
    secondaryIconGicon: Gio.Icon;
    secondaryIconName: string;
    secondaryIconPixbuf: GdkPixbuf.Pixbuf;
    secondaryIconSensitive: boolean;
    secondaryIconStock: string;
    secondaryIconStorageType: ImageType;
    secondaryIconTooltipMarkup: string;
    secondaryIconTooltipText: string;
    selectionBound: number;
    shadowType: ShadowType;
    tabs: Pango.TabArray;
    text: string;
    textLength: number;
    truncateMultiline: boolean;
    visibility: boolean;
    widthChars: number;
    xalign: number;
  }
  
  export class EntryAccessible extends WidgetAccessible implements Atk.Action, Atk.Component, Atk.EditableText, Atk.Text {
    constructor(props?: EntryAccessibleProps);
  }
  
  interface EntryAccessibleProps extends WidgetAccessibleProps, Atk.ActionProps, Atk.ComponentProps, Atk.EditableTextProps, Atk.TextProps {
    
  }
  
  export class EntryBuffer extends GObject.Object {
    constructor(props?: EntryBufferProps);
    
    length: number;
    maxLength: number;
    text: string;
    
    public deleteText(position: number, nChars: number): number;
    public emitDeletedText(position: number, nChars: number): void;
    public emitInsertedText(position: number, chars: string, nChars: number): void;
    public getBytes(): number;
    public getLength(): number;
    public getMaxLength(): number;
    public getText(): string;
    public insertText(position: number, chars: string, nChars: number): number;
    public setMaxLength(maxLength: number): void;
    public setText(chars: string, nChars: number): void;
    public deletedText(position: number, nChars: number): void;
    public insertedText(position: number, chars: string, nChars: number): void;
  }
  
  interface EntryBufferProps extends GObject.ObjectProps {
    length: number;
    maxLength: number;
    text: string;
  }
  
  export class EntryCompletion extends GObject.Object implements Buildable, CellLayout {
    constructor(props?: EntryCompletionProps);
    
    cellArea: CellArea;
    inlineCompletion: boolean;
    inlineSelection: boolean;
    minimumKeyLength: number;
    model: TreeModel;
    popupCompletion: boolean;
    popupSetWidth: boolean;
    popupSingleMatch: boolean;
    textColumn: number;
    
    public complete(): void;
    public computePrefix(key: string): string;
    public deleteAction(index_: number): void;
    public getCompletionPrefix(): string;
    public getEntry(): Widget;
    public getInlineCompletion(): boolean;
    public getInlineSelection(): boolean;
    public getMinimumKeyLength(): number;
    public getModel(): TreeModel;
    public getPopupCompletion(): boolean;
    public getPopupSetWidth(): boolean;
    public getPopupSingleMatch(): boolean;
    public getTextColumn(): number;
    public insertActionMarkup(index_: number, markup: string): void;
    public insertActionText(index_: number, text: string): void;
    public insertPrefix(): void;
    public setInlineCompletion(inlineCompletion: boolean): void;
    public setInlineSelection(inlineSelection: boolean): void;
    public setMatchFunc(func: EntryCompletionMatchFunc, funcData: any, funcNotify: GLib.DestroyNotify): void;
    public setMinimumKeyLength(length: number): void;
    public setModel(model: TreeModel): void;
    public setPopupCompletion(popupCompletion: boolean): void;
    public setPopupSetWidth(popupSetWidth: boolean): void;
    public setPopupSingleMatch(popupSingleMatch: boolean): void;
    public setTextColumn(column: number): void;
    public actionActivated(index_: number): void;
    public cursorOnMatch(model: TreeModel, iter: TreeIter): boolean;
    public matchSelected(model: TreeModel, iter: TreeIter): boolean;
    public noMatches(): void;
  }
  
  interface EntryCompletionProps extends GObject.ObjectProps, BuildableProps, CellLayoutProps {
    cellArea: CellArea;
    inlineCompletion: boolean;
    inlineSelection: boolean;
    minimumKeyLength: number;
    model: TreeModel;
    popupCompletion: boolean;
    popupSetWidth: boolean;
    popupSingleMatch: boolean;
    textColumn: number;
  }
  
  export class EntryIconAccessible extends Atk.Object implements Atk.Action, Atk.Component {
    constructor(props?: EntryIconAccessibleProps);
  }
  
  interface EntryIconAccessibleProps extends Atk.ObjectProps, Atk.ActionProps, Atk.ComponentProps {
    
  }
  
  export class EventBox extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(props?: EventBoxProps);
    
    aboveChild: boolean;
    visibleWindow: boolean;
    
    public getAboveChild(): boolean;
    public getVisibleWindow(): boolean;
    public setAboveChild(aboveChild: boolean): void;
    public setVisibleWindow(visibleWindow: boolean): void;
  }
  
  interface EventBoxProps extends BinProps, Atk.ImplementorIfaceProps, BuildableProps {
    aboveChild: boolean;
    visibleWindow: boolean;
  }
  
  export class EventController extends GObject.Object {
    constructor(props?: EventControllerProps);
    
    propagationPhase: PropagationPhase;
    widget: Widget;
    
    public getPropagationPhase(): PropagationPhase;
    public getWidget(): Widget;
    public handleEvent(event: Gdk.Event): boolean;
    public reset(): void;
    public setPropagationPhase(phase: PropagationPhase): void;
  }
  
  interface EventControllerProps extends GObject.ObjectProps {
    propagationPhase: PropagationPhase;
    widget: Widget;
  }
  
  export class Expander extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(props?: ExpanderProps);
    
    expanded: boolean;
    label: string;
    labelFill: boolean;
    labelWidget: Widget;
    resizeToplevel: boolean;
    spacing: number;
    useMarkup: boolean;
    useUnderline: boolean;
    
    public getExpanded(): boolean;
    public getLabel(): string;
    public getLabelFill(): boolean;
    public getLabelWidget(): Widget;
    public getResizeToplevel(): boolean;
    public getSpacing(): number;
    public getUseMarkup(): boolean;
    public getUseUnderline(): boolean;
    public setExpanded(expanded: boolean): void;
    public setLabel(label: string): void;
    public setLabelFill(labelFill: boolean): void;
    public setLabelWidget(labelWidget: Widget): void;
    public setResizeToplevel(resizeToplevel: boolean): void;
    public setSpacing(spacing: number): void;
    public setUseMarkup(useMarkup: boolean): void;
    public setUseUnderline(useUnderline: boolean): void;
    public activate(): void;
  }
  
  interface ExpanderProps extends BinProps, Atk.ImplementorIfaceProps, BuildableProps {
    expanded: boolean;
    label: string;
    labelFill: boolean;
    labelWidget: Widget;
    resizeToplevel: boolean;
    spacing: number;
    useMarkup: boolean;
    useUnderline: boolean;
  }
  
  export class ExpanderAccessible extends ContainerAccessible implements Atk.Action, Atk.Component {
    constructor(props?: ExpanderAccessibleProps);
  }
  
  interface ExpanderAccessibleProps extends ContainerAccessibleProps, Atk.ActionProps, Atk.ComponentProps {
    
  }
  
  export class FileChooserButton extends Box implements Atk.ImplementorIface, Buildable, FileChooser, Orientable {
    constructor(props?: FileChooserButtonProps);
    
    dialog: FileChooser;
    title: string;
    widthChars: number;
    
    public getFocusOnClick(): boolean;
    public getTitle(): string;
    public getWidthChars(): number;
    public setFocusOnClick(focusOnClick: boolean): void;
    public setTitle(title: string): void;
    public setWidthChars(nChars: number): void;
    public fileSet(): void;
  }
  
  interface FileChooserButtonProps extends BoxProps, Atk.ImplementorIfaceProps, BuildableProps, FileChooserProps, OrientableProps {
    dialog: FileChooser;
    title: string;
    widthChars: number;
  }
  
  export class FileChooserDialog extends Dialog implements Atk.ImplementorIface, Buildable, FileChooser {
    constructor(props?: FileChooserDialogProps);
  }
  
  interface FileChooserDialogProps extends DialogProps, Atk.ImplementorIfaceProps, BuildableProps, FileChooserProps {
    
  }
  
  export class FileChooserNative extends NativeDialog implements FileChooser {
    constructor(props?: FileChooserNativeProps);
    
    acceptLabel: string;
    cancelLabel: string;
    
    public getAcceptLabel(): string;
    public getCancelLabel(): string;
    public setAcceptLabel(acceptLabel: string): void;
    public setCancelLabel(cancelLabel: string): void;
  }
  
  interface FileChooserNativeProps extends NativeDialogProps, FileChooserProps {
    acceptLabel: string;
    cancelLabel: string;
  }
  
  export class FileChooserWidget extends Box implements Atk.ImplementorIface, Buildable, FileChooser, Orientable {
    constructor(props?: FileChooserWidgetProps);
    
    searchMode: boolean;
    subtitle: string;
  }
  
  interface FileChooserWidgetProps extends BoxProps, Atk.ImplementorIfaceProps, BuildableProps, FileChooserProps, OrientableProps {
    searchMode: boolean;
    subtitle: string;
  }
  
  export class FileFilter extends GObject.InitiallyUnowned implements Buildable {
    constructor(props?: FileFilterProps);
    
    public addCustom(needed: FileFilterFlags, func: FileFilterFunc, data: any, notify: GLib.DestroyNotify): void;
    public addMimeType(mimeType: string): void;
    public addPattern(pattern: string): void;
    public addPixbufFormats(): void;
    public filter(filterInfo: FileFilterInfo): boolean;
    public getName(): string;
    public getNeeded(): FileFilterFlags;
    public setName(name: string): void;
    public toGvariant(): GLib.Variant;
  }
  
  interface FileFilterProps extends GObject.InitiallyUnownedProps, BuildableProps {
    
  }
  
  export class Fixed extends Container implements Atk.ImplementorIface, Buildable {
    constructor(props?: FixedProps);
    
    public move(widget: Widget, x: number, _y: number): void;
    public put(widget: Widget, x: number, _y: number): void;
  }
  
  interface FixedProps extends ContainerProps, Atk.ImplementorIfaceProps, BuildableProps {
    
  }
  
  export class FlowBox extends Container implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: FlowBoxProps);
    
    activateOnSingleClick: boolean;
    columnSpacing: number;
    homogeneous: boolean;
    maxChildrenPerLine: number;
    minChildrenPerLine: number;
    rowSpacing: number;
    selectionMode: SelectionMode;
    
    public bindModel(model: Gio.ListModel, createWidgetFunc: FlowBoxCreateWidgetFunc, userData: any, userDataFreeFunc: GLib.DestroyNotify): void;
    public getActivateOnSingleClick(): boolean;
    public getChildAtIndex(idx: number): FlowBoxChild;
    public getChildAtPos(x: number, _y: number): FlowBoxChild;
    public getColumnSpacing(): number;
    public getHomogeneous(): boolean;
    public getMaxChildrenPerLine(): number;
    public getMinChildrenPerLine(): number;
    public getRowSpacing(): number;
    public getSelectedChildren(): GLib.List;
    public getSelectionMode(): SelectionMode;
    public insert(widget: Widget, position: number): void;
    public invalidateFilter(): void;
    public invalidateSort(): void;
    public selectAll(): void;
    public selectChild(child: FlowBoxChild): void;
    public selectedForeach(func: FlowBoxForeachFunc, data: any): void;
    public setActivateOnSingleClick(single: boolean): void;
    public setColumnSpacing(spacing: number): void;
    public setFilterFunc(filterFunc: FlowBoxFilterFunc, userData: any, destroy: GLib.DestroyNotify): void;
    public setHadjustment(adjustment: Adjustment): void;
    public setHomogeneous(homogeneous: boolean): void;
    public setMaxChildrenPerLine(nChildren: number): void;
    public setMinChildrenPerLine(nChildren: number): void;
    public setRowSpacing(spacing: number): void;
    public setSelectionMode(mode: SelectionMode): void;
    public setSortFunc(sortFunc: FlowBoxSortFunc, userData: any, destroy: GLib.DestroyNotify): void;
    public setVadjustment(adjustment: Adjustment): void;
    public unselectAll(): void;
    public unselectChild(child: FlowBoxChild): void;
    public activateCursorChild(): void;
    public childActivated(child: FlowBoxChild): void;
    public moveCursor(step: MovementStep, count: number): boolean;
    public selectedChildrenChanged(): void;
    public toggleCursorChild(): void;
  }
  
  interface FlowBoxProps extends ContainerProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    activateOnSingleClick: boolean;
    columnSpacing: number;
    homogeneous: boolean;
    maxChildrenPerLine: number;
    minChildrenPerLine: number;
    rowSpacing: number;
    selectionMode: SelectionMode;
  }
  
  export class FlowBoxAccessible extends ContainerAccessible implements Atk.Component, Atk.Selection {
    constructor(props?: FlowBoxAccessibleProps);
  }
  
  interface FlowBoxAccessibleProps extends ContainerAccessibleProps, Atk.ComponentProps, Atk.SelectionProps {
    
  }
  
  export class FlowBoxChild extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(props?: FlowBoxChildProps);
    
    public changed(): void;
    public getIndex(): number;
    public isSelected(): boolean;
    public activate(): void;
  }
  
  interface FlowBoxChildProps extends BinProps, Atk.ImplementorIfaceProps, BuildableProps {
    
  }
  
  export class FlowBoxChildAccessible extends ContainerAccessible implements Atk.Component {
    constructor(props?: FlowBoxChildAccessibleProps);
  }
  
  interface FlowBoxChildAccessibleProps extends ContainerAccessibleProps, Atk.ComponentProps {
    
  }
  
  export class FontButton extends Button implements Atk.ImplementorIface, Actionable, Activatable, Buildable, FontChooser {
    constructor(props?: FontButtonProps);
    
    fontName: string;
    showSize: boolean;
    showStyle: boolean;
    title: string;
    useFont: boolean;
    useSize: boolean;
    
    public getFontName(): string;
    public getShowSize(): boolean;
    public getShowStyle(): boolean;
    public getTitle(): string;
    public getUseFont(): boolean;
    public getUseSize(): boolean;
    public setFontName(fontname: string): boolean;
    public setShowSize(showSize: boolean): void;
    public setShowStyle(showStyle: boolean): void;
    public setTitle(title: string): void;
    public setUseFont(useFont: boolean): void;
    public setUseSize(useSize: boolean): void;
    public fontSet(): void;
  }
  
  interface FontButtonProps extends ButtonProps, Atk.ImplementorIfaceProps, ActionableProps, ActivatableProps, BuildableProps, FontChooserProps {
    fontName: string;
    showSize: boolean;
    showStyle: boolean;
    title: string;
    useFont: boolean;
    useSize: boolean;
  }
  
  export class FontChooserDialog extends Dialog implements Atk.ImplementorIface, Buildable, FontChooser {
    constructor(props?: FontChooserDialogProps);
  }
  
  interface FontChooserDialogProps extends DialogProps, Atk.ImplementorIfaceProps, BuildableProps, FontChooserProps {
    
  }
  
  export class FontChooserWidget extends Box implements Atk.ImplementorIface, Buildable, FontChooser, Orientable {
    constructor(props?: FontChooserWidgetProps);
  }
  
  interface FontChooserWidgetProps extends BoxProps, Atk.ImplementorIfaceProps, BuildableProps, FontChooserProps, OrientableProps {
    
  }
  
  export class FontSelection extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: FontSelectionProps);
    
    fontName: string;
    previewText: string;
    
    public getFace(): Pango.FontFace;
    public getFaceList(): Widget;
    public getFamily(): Pango.FontFamily;
    public getFamilyList(): Widget;
    public getFontName(): string;
    public getPreviewEntry(): Widget;
    public getPreviewText(): string;
    public getSize(): number;
    public getSizeEntry(): Widget;
    public getSizeList(): Widget;
    public setFontName(fontname: string): boolean;
    public setPreviewText(text: string): void;
  }
  
  interface FontSelectionProps extends BoxProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    fontName: string;
    previewText: string;
  }
  
  export class FontSelectionDialog extends Dialog implements Atk.ImplementorIface, Buildable {
    constructor(props?: FontSelectionDialogProps);
    
    public getCancelButton(): Widget;
    public getFontName(): string;
    public getFontSelection(): Widget;
    public getOkButton(): Widget;
    public getPreviewText(): string;
    public setFontName(fontname: string): boolean;
    public setPreviewText(text: string): void;
  }
  
  interface FontSelectionDialogProps extends DialogProps, Atk.ImplementorIfaceProps, BuildableProps {
    
  }
  
  export class Frame extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(props?: FrameProps);
    
    label: string;
    labelWidget: Widget;
    labelXalign: number;
    labelYalign: number;
    shadowType: ShadowType;
    
    public getLabel(): string;
    public getLabelAlign(xalign: number, yalign: number): void;
    public getLabelWidget(): Widget;
    public getShadowType(): ShadowType;
    public setLabel(label: string): void;
    public setLabelAlign(xalign: number, yalign: number): void;
    public setLabelWidget(labelWidget: Widget): void;
    public setShadowType(type: ShadowType): void;
    public computeChildAllocation(allocation: Allocation): void;
  }
  
  interface FrameProps extends BinProps, Atk.ImplementorIfaceProps, BuildableProps {
    label: string;
    labelWidget: Widget;
    labelXalign: number;
    labelYalign: number;
    shadowType: ShadowType;
  }
  
  export class FrameAccessible extends ContainerAccessible implements Atk.Component {
    constructor(props?: FrameAccessibleProps);
  }
  
  interface FrameAccessibleProps extends ContainerAccessibleProps, Atk.ComponentProps {
    
  }
  
  export class GLArea extends Widget implements Atk.ImplementorIface, Buildable {
    constructor(props?: GLAreaProps);
    
    autoRender: boolean;
    context: Gdk.GLContext;
    hasAlpha: boolean;
    hasDepthBuffer: boolean;
    hasStencilBuffer: boolean;
    useEs: boolean;
    
    public attachBuffers(): void;
    public getAutoRender(): boolean;
    public getContext(): Gdk.GLContext;
    public getError(): GLib.Error;
    public getHasAlpha(): boolean;
    public getHasDepthBuffer(): boolean;
    public getHasStencilBuffer(): boolean;
    public getRequiredVersion(major: number, minor: number): void;
    public getUseEs(): boolean;
    public makeCurrent(): void;
    public queueRender(): void;
    public setAutoRender(autoRender: boolean): void;
    public setError(error: GLib.Error): void;
    public setHasAlpha(hasAlpha: boolean): void;
    public setHasDepthBuffer(hasDepthBuffer: boolean): void;
    public setHasStencilBuffer(hasStencilBuffer: boolean): void;
    public setRequiredVersion(major: number, minor: number): void;
    public setUseEs(useEs: boolean): void;
    public createContext(): Gdk.GLContext;
    public render(context: Gdk.GLContext): boolean;
    public resize(width: number, height: number): void;
  }
  
  interface GLAreaProps extends WidgetProps, Atk.ImplementorIfaceProps, BuildableProps {
    autoRender: boolean;
    context: Gdk.GLContext;
    hasAlpha: boolean;
    hasDepthBuffer: boolean;
    hasStencilBuffer: boolean;
    useEs: boolean;
  }
  
  export class Gesture extends EventController {
    constructor(props?: GestureProps);
    
    nPoints: number;
    window: Gdk.Window;
    
    public getBoundingBox(rect: Gdk.Rectangle): boolean;
    public getBoundingBoxCenter(x: number, _y: number): boolean;
    public getDevice(): Gdk.Device;
    public getGroup(): GLib.List;
    public getLastEvent(sequence: Gdk.EventSequence): Gdk.Event;
    public getLastUpdatedSequence(): Gdk.EventSequence;
    public getPoint(sequence: Gdk.EventSequence, x: number, _y: number): boolean;
    public getSequenceState(sequence: Gdk.EventSequence): EventSequenceState;
    public getSequences(): GLib.List;
    public getWindow(): Gdk.Window;
    public group(gesture: Gesture): void;
    public handlesSequence(sequence: Gdk.EventSequence): boolean;
    public isActive(): boolean;
    public isGroupedWith(other: Gesture): boolean;
    public isRecognized(): boolean;
    public setSequenceState(sequence: Gdk.EventSequence, state: EventSequenceState): boolean;
    public setState(state: EventSequenceState): boolean;
    public setWindow(window: Gdk.Window): void;
    public ungroup(): void;
  }
  
  interface GestureProps extends EventControllerProps {
    nPoints: number;
    window: Gdk.Window;
  }
  
  export class GestureDrag extends GestureSingle {
    constructor(props?: GestureDragProps);
    
    public getOffset(x: number, _y: number): boolean;
    public getStartPoint(x: number, _y: number): boolean;
  }
  
  interface GestureDragProps extends GestureSingleProps {
    
  }
  
  export class GestureLongPress extends GestureSingle {
    constructor(props?: GestureLongPressProps);
    
    delayFactor: number;
  }
  
  interface GestureLongPressProps extends GestureSingleProps {
    delayFactor: number;
  }
  
  export class GestureMultiPress extends GestureSingle {
    constructor(props?: GestureMultiPressProps);
    
    public getArea(rect: Gdk.Rectangle): boolean;
    public setArea(rect: Gdk.Rectangle): void;
  }
  
  interface GestureMultiPressProps extends GestureSingleProps {
    
  }
  
  export class GesturePan extends GestureDrag {
    constructor(props?: GesturePanProps);
    
    orientation: Orientation;
    
    public getOrientation(): Orientation;
    public setOrientation(orientation: Orientation): void;
  }
  
  interface GesturePanProps extends GestureDragProps {
    orientation: Orientation;
  }
  
  export class GestureRotate extends Gesture {
    constructor(props?: GestureRotateProps);
    
    public getAngleDelta(): number;
  }
  
  interface GestureRotateProps extends GestureProps {
    
  }
  
  export class GestureSingle extends Gesture {
    constructor(props?: GestureSingleProps);
    
    button: number;
    exclusive: boolean;
    touchOnly: boolean;
    
    public getButton(): number;
    public getCurrentButton(): number;
    public getCurrentSequence(): Gdk.EventSequence;
    public getExclusive(): boolean;
    public getTouchOnly(): boolean;
    public setButton(button: number): void;
    public setExclusive(exclusive: boolean): void;
    public setTouchOnly(touchOnly: boolean): void;
  }
  
  interface GestureSingleProps extends GestureProps {
    button: number;
    exclusive: boolean;
    touchOnly: boolean;
  }
  
  export class GestureSwipe extends GestureSingle {
    constructor(props?: GestureSwipeProps);
    
    public getVelocity(velocityX: number, velocityY: number): boolean;
  }
  
  interface GestureSwipeProps extends GestureSingleProps {
    
  }
  
  export class GestureZoom extends Gesture {
    constructor(props?: GestureZoomProps);
    
    public getScaleDelta(): number;
  }
  
  interface GestureZoomProps extends GestureProps {
    
  }
  
  export class Grid extends Container implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: GridProps);
    
    baselineRow: number;
    columnHomogeneous: boolean;
    columnSpacing: number;
    rowHomogeneous: boolean;
    rowSpacing: number;
    
    public attach(child: Widget, left: number, top: number, width: number, height: number): void;
    public attachNextTo(child: Widget, sibling: Widget, side: PositionType, width: number, height: number): void;
    public getBaselineRow(): number;
    public getChildAt(left: number, top: number): Widget;
    public getColumnHomogeneous(): boolean;
    public getColumnSpacing(): number;
    public getRowBaselinePosition(_row: number): BaselinePosition;
    public getRowHomogeneous(): boolean;
    public getRowSpacing(): number;
    public insertColumn(position: number): void;
    public insertNextTo(sibling: Widget, side: PositionType): void;
    public insertRow(position: number): void;
    public removeColumn(position: number): void;
    public removeRow(position: number): void;
    public setBaselineRow(_row: number): void;
    public setColumnHomogeneous(homogeneous: boolean): void;
    public setColumnSpacing(spacing: number): void;
    public setRowBaselinePosition(_row: number, pos: BaselinePosition): void;
    public setRowHomogeneous(homogeneous: boolean): void;
    public setRowSpacing(spacing: number): void;
  }
  
  interface GridProps extends ContainerProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    baselineRow: number;
    columnHomogeneous: boolean;
    columnSpacing: number;
    rowHomogeneous: boolean;
    rowSpacing: number;
  }
  
  export class HBox extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: HBoxProps);
  }
  
  interface HBoxProps extends BoxProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    
  }
  
  export class HButtonBox extends ButtonBox implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: HButtonBoxProps);
  }
  
  interface HButtonBoxProps extends ButtonBoxProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    
  }
  
  export class HPaned extends Paned implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: HPanedProps);
  }
  
  interface HPanedProps extends PanedProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    
  }
  
  export class HSV extends Widget implements Atk.ImplementorIface, Buildable {
    constructor(props?: HSVProps);
    
    public getColor(_h: number, _s: number, v: number): void;
    public getMetrics(size: number, ringWidth: number): void;
    public isAdjusting(): boolean;
    public setColor(_h: number, _s: number, v: number): void;
    public setMetrics(size: number, ringWidth: number): void;
    public changed(): void;
    public move(type: DirectionType): void;
    
    public static toRgb(_h: number, _s: number, v: number, _r: number, _g: number, b: number): void;
  }
  
  interface HSVProps extends WidgetProps, Atk.ImplementorIfaceProps, BuildableProps {
    
  }
  
  export class HScale extends Scale implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: HScaleProps);
  }
  
  interface HScaleProps extends ScaleProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    
  }
  
  export class HScrollbar extends Scrollbar implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: HScrollbarProps);
  }
  
  interface HScrollbarProps extends ScrollbarProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    
  }
  
  export class HSeparator extends Separator implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: HSeparatorProps);
  }
  
  interface HSeparatorProps extends SeparatorProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    
  }
  
  export class HandleBox extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(props?: HandleBoxProps);
    
    childDetached: boolean;
    handlePosition: PositionType;
    shadowType: ShadowType;
    snapEdge: PositionType;
    snapEdgeSet: boolean;
    
    public getChildDetached(): boolean;
    public getHandlePosition(): PositionType;
    public getShadowType(): ShadowType;
    public getSnapEdge(): PositionType;
    public setHandlePosition(position: PositionType): void;
    public setShadowType(type: ShadowType): void;
    public setSnapEdge(edge: PositionType): void;
    public childAttached(child: Widget): void;
    public childDetached(child: Widget): void;
  }
  
  interface HandleBoxProps extends BinProps, Atk.ImplementorIfaceProps, BuildableProps {
    childDetached: boolean;
    handlePosition: PositionType;
    shadowType: ShadowType;
    snapEdge: PositionType;
    snapEdgeSet: boolean;
  }
  
  export class HeaderBar extends Container implements Atk.ImplementorIface, Buildable {
    constructor(props?: HeaderBarProps);
    
    customTitle: Widget;
    decorationLayout: string;
    decorationLayoutSet: boolean;
    hasSubtitle: boolean;
    showCloseButton: boolean;
    spacing: number;
    subtitle: string;
    title: string;
    
    public getCustomTitle(): Widget;
    public getDecorationLayout(): string;
    public getHasSubtitle(): boolean;
    public getShowCloseButton(): boolean;
    public getSubtitle(): string;
    public getTitle(): string;
    public packEnd(child: Widget): void;
    public packStart(child: Widget): void;
    public setCustomTitle(titleWidget: Widget): void;
    public setDecorationLayout(layout: string): void;
    public setHasSubtitle(setting: boolean): void;
    public setShowCloseButton(setting: boolean): void;
    public setSubtitle(subtitle: string): void;
    public setTitle(title: string): void;
  }
  
  interface HeaderBarProps extends ContainerProps, Atk.ImplementorIfaceProps, BuildableProps {
    customTitle: Widget;
    decorationLayout: string;
    decorationLayoutSet: boolean;
    hasSubtitle: boolean;
    showCloseButton: boolean;
    spacing: number;
    subtitle: string;
    title: string;
  }
  
  export class IMContext extends GObject.Object {
    constructor(props?: IMContextProps);
    
    inputHints: InputHints;
    inputPurpose: InputPurpose;
    
    public deleteSurrounding(offset: number, nChars: number): boolean;
    public filterKeypress(event: Gdk.EventKey): boolean;
    public focusIn(): void;
    public focusOut(): void;
    public getPreeditString(str: string, attrs: Pango.AttrList, cursorPos: number): void;
    public getSurrounding(text: string, cursorIndex: number): boolean;
    public reset(): void;
    public setClientWindow(window: Gdk.Window): void;
    public setCursorLocation(area: Gdk.Rectangle): void;
    public setSurrounding(text: string, len: number, cursorIndex: number): void;
    public setUsePreedit(usePreedit: boolean): void;
    public commit(str: string): void;
    public preeditChanged(): void;
    public preeditEnd(): void;
    public preeditStart(): void;
    public retrieveSurrounding(): boolean;
  }
  
  interface IMContextProps extends GObject.ObjectProps {
    inputHints: InputHints;
    inputPurpose: InputPurpose;
  }
  
  export class IMContextSimple extends IMContext {
    constructor(props?: IMContextSimpleProps);
    
    public addComposeFile(composeFile: string): void;
    public addTable(data: number[], maxSeqLen: number, nSeqs: number): void;
  }
  
  interface IMContextSimpleProps extends IMContextProps {
    
  }
  
  export class IMMulticontext extends IMContext {
    constructor(props?: IMMulticontextProps);
    
    public appendMenuitems(menushell: MenuShell): void;
    public getContextId(): string;
    public setContextId(contextId: string): void;
  }
  
  interface IMMulticontextProps extends IMContextProps {
    
  }
  
  export class IconFactory extends GObject.Object implements Buildable {
    constructor(props?: IconFactoryProps);
    
    public add(stockId: string, iconSet: IconSet): void;
    public addDefault(): void;
    public lookup(stockId: string): IconSet;
    public removeDefault(): void;
    
    public static lookupDefault(stockId: string): IconSet;
  }
  
  interface IconFactoryProps extends GObject.ObjectProps, BuildableProps {
    
  }
  
  export class IconInfo extends GObject.Object {
    constructor(props?: IconInfoProps);
    
    public copy(): IconInfo;
    public free(): void;
    public getAttachPoints(points: Gdk.Point[], nPoints: number): boolean;
    public getBaseScale(): number;
    public getBaseSize(): number;
    public getBuiltinPixbuf(): GdkPixbuf.Pixbuf;
    public getDisplayName(): string;
    public getEmbeddedRect(rectangle: Gdk.Rectangle): boolean;
    public getFilename(): string;
    public isSymbolic(): boolean;
    public loadIcon(): GdkPixbuf.Pixbuf;
    public loadIconAsync(cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback, userData: any): void;
    public loadIconFinish(res: Gio.AsyncResult): GdkPixbuf.Pixbuf;
    public loadSurface(forWindow: Gdk.Window): cairo.Surface;
    public loadSymbolic(fg: Gdk.RGBA, successColor: Gdk.RGBA, warningColor: Gdk.RGBA, errorColor: Gdk.RGBA, wasSymbolic: boolean): GdkPixbuf.Pixbuf;
    public loadSymbolicAsync(fg: Gdk.RGBA, successColor: Gdk.RGBA, warningColor: Gdk.RGBA, errorColor: Gdk.RGBA, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback, userData: any): void;
    public loadSymbolicFinish(res: Gio.AsyncResult, wasSymbolic: boolean): GdkPixbuf.Pixbuf;
    public loadSymbolicForContext(context: StyleContext, wasSymbolic: boolean): GdkPixbuf.Pixbuf;
    public loadSymbolicForContextAsync(context: StyleContext, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback, userData: any): void;
    public loadSymbolicForContextFinish(res: Gio.AsyncResult, wasSymbolic: boolean): GdkPixbuf.Pixbuf;
    public loadSymbolicForStyle(style: Style, state: StateType, wasSymbolic: boolean): GdkPixbuf.Pixbuf;
    public setRawCoordinates(rawCoordinates: boolean): void;
  }
  
  interface IconInfoProps extends GObject.ObjectProps {
    
  }
  
  export class IconTheme extends GObject.Object {
    constructor(props?: IconThemeProps);
    
    public addResourcePath(path: string): void;
    public appendSearchPath(path: string): void;
    public chooseIcon(iconNames: string[], size: number, flags: IconLookupFlags): IconInfo;
    public chooseIconForScale(iconNames: string[], size: number, scale: number, flags: IconLookupFlags): IconInfo;
    public getExampleIconName(): string;
    public getIconSizes(iconName: string): number[];
    public getSearchPath(path: string[], nElements: number): void;
    public hasIcon(iconName: string): boolean;
    public listContexts(): GLib.List;
    public listIcons(context: string): GLib.List;
    public loadIcon(iconName: string, size: number, flags: IconLookupFlags): GdkPixbuf.Pixbuf;
    public loadIconForScale(iconName: string, size: number, scale: number, flags: IconLookupFlags): GdkPixbuf.Pixbuf;
    public loadSurface(iconName: string, size: number, scale: number, forWindow: Gdk.Window, flags: IconLookupFlags): cairo.Surface;
    public lookupByGicon(icon: Gio.Icon, size: number, flags: IconLookupFlags): IconInfo;
    public lookupByGiconForScale(icon: Gio.Icon, size: number, scale: number, flags: IconLookupFlags): IconInfo;
    public lookupIcon(iconName: string, size: number, flags: IconLookupFlags): IconInfo;
    public lookupIconForScale(iconName: string, size: number, scale: number, flags: IconLookupFlags): IconInfo;
    public prependSearchPath(path: string): void;
    public rescanIfNeeded(): boolean;
    public setCustomTheme(themeName: string): void;
    public setScreen(screen: Gdk.Screen): void;
    public setSearchPath(path: string[], nElements: number): void;
    public changed(): void;
    
    public static addBuiltinIcon(iconName: string, size: number, pixbuf: GdkPixbuf.Pixbuf): void;
    public static getDefault(): IconTheme;
    public static getForScreen(screen: Gdk.Screen): IconTheme;
  }
  
  interface IconThemeProps extends GObject.ObjectProps {
    
  }
  
  export class IconView extends Container implements Atk.ImplementorIface, Buildable, CellLayout, Scrollable {
    constructor(props?: IconViewProps);
    
    activateOnSingleClick: boolean;
    cellArea: CellArea;
    columnSpacing: number;
    columns: number;
    itemOrientation: Orientation;
    itemPadding: number;
    itemWidth: number;
    margin: number;
    markupColumn: number;
    model: TreeModel;
    pixbufColumn: number;
    reorderable: boolean;
    rowSpacing: number;
    selectionMode: SelectionMode;
    spacing: number;
    textColumn: number;
    tooltipColumn: number;
    
    public convertWidgetToBinWindowCoords(wx: number, wy: number, bx: number, by: number): void;
    public createDragIcon(path: TreePath): cairo.Surface;
    public enableModelDragDest(targets: TargetEntry[], nTargets: number, actions: Gdk.DragAction): void;
    public enableModelDragSource(startButtonMask: Gdk.ModifierType, targets: TargetEntry[], nTargets: number, actions: Gdk.DragAction): void;
    public getActivateOnSingleClick(): boolean;
    public getCellRect(path: TreePath, cell: CellRenderer, rect: Gdk.Rectangle): boolean;
    public getColumnSpacing(): number;
    public getColumns(): number;
    public getCursor(path: TreePath, cell: CellRenderer): boolean;
    public getDestItemAtPos(dragX: number, dragY: number, path: TreePath, pos: IconViewDropPosition): boolean;
    public getDragDestItem(path: TreePath, pos: IconViewDropPosition): void;
    public getItemAtPos(x: number, _y: number, path: TreePath, cell: CellRenderer): boolean;
    public getItemColumn(path: TreePath): number;
    public getItemOrientation(): Orientation;
    public getItemPadding(): number;
    public getItemRow(path: TreePath): number;
    public getItemWidth(): number;
    public getMargin(): number;
    public getMarkupColumn(): number;
    public getModel(): TreeModel;
    public getPathAtPos(x: number, _y: number): TreePath;
    public getPixbufColumn(): number;
    public getReorderable(): boolean;
    public getRowSpacing(): number;
    public getSelectedItems(): GLib.List;
    public getSelectionMode(): SelectionMode;
    public getSpacing(): number;
    public getTextColumn(): number;
    public getTooltipColumn(): number;
    public getTooltipContext(x: number, _y: number, keyboardTip: boolean, model: TreeModel, path: TreePath, iter: TreeIter): boolean;
    public getVisibleRange(startPath: TreePath, endPath: TreePath): boolean;
    public itemActivated(path: TreePath): void;
    public pathIsSelected(path: TreePath): boolean;
    public scrollToPath(path: TreePath, useAlign: boolean, rowAlign: number, colAlign: number): void;
    public selectAll(): void;
    public selectPath(path: TreePath): void;
    public selectedForeach(func: IconViewForeachFunc, data: any): void;
    public setActivateOnSingleClick(single: boolean): void;
    public setColumnSpacing(columnSpacing: number): void;
    public setColumns(columns: number): void;
    public setCursor(path: TreePath, cell: CellRenderer, startEditing: boolean): void;
    public setDragDestItem(path: TreePath, pos: IconViewDropPosition): void;
    public setItemOrientation(orientation: Orientation): void;
    public setItemPadding(itemPadding: number): void;
    public setItemWidth(itemWidth: number): void;
    public setMargin(margin: number): void;
    public setMarkupColumn(column: number): void;
    public setModel(model: TreeModel): void;
    public setPixbufColumn(column: number): void;
    public setReorderable(reorderable: boolean): void;
    public setRowSpacing(rowSpacing: number): void;
    public setSelectionMode(mode: SelectionMode): void;
    public setSpacing(spacing: number): void;
    public setTextColumn(column: number): void;
    public setTooltipCell(tooltip: Tooltip, path: TreePath, cell: CellRenderer): void;
    public setTooltipColumn(column: number): void;
    public setTooltipItem(tooltip: Tooltip, path: TreePath): void;
    public unselectAll(): void;
    public unselectPath(path: TreePath): void;
    public unsetModelDragDest(): void;
    public unsetModelDragSource(): void;
    public activateCursorItem(): boolean;
    public moveCursor(step: MovementStep, count: number): boolean;
    public selectCursorItem(): void;
    public selectionChanged(): void;
    public toggleCursorItem(): void;
  }
  
  interface IconViewProps extends ContainerProps, Atk.ImplementorIfaceProps, BuildableProps, CellLayoutProps, ScrollableProps {
    activateOnSingleClick: boolean;
    cellArea: CellArea;
    columnSpacing: number;
    columns: number;
    itemOrientation: Orientation;
    itemPadding: number;
    itemWidth: number;
    margin: number;
    markupColumn: number;
    model: TreeModel;
    pixbufColumn: number;
    reorderable: boolean;
    rowSpacing: number;
    selectionMode: SelectionMode;
    spacing: number;
    textColumn: number;
    tooltipColumn: number;
  }
  
  export class IconViewAccessible extends ContainerAccessible implements Atk.Component, Atk.Selection {
    constructor(props?: IconViewAccessibleProps);
  }
  
  interface IconViewAccessibleProps extends ContainerAccessibleProps, Atk.ComponentProps, Atk.SelectionProps {
    
  }
  
  export class Image extends Misc implements Atk.ImplementorIface, Buildable {
    constructor(props?: ImageProps);
    
    file: string;
    gicon: Gio.Icon;
    iconName: string;
    iconSet: IconSet;
    iconSize: number;
    pixbuf: GdkPixbuf.Pixbuf;
    pixbufAnimation: GdkPixbuf.PixbufAnimation;
    pixelSize: number;
    resource: string;
    stock: string;
    storageType: ImageType;
    surface: cairo.Surface;
    useFallback: boolean;
    
    public clear(): void;
    public getAnimation(): GdkPixbuf.PixbufAnimation;
    public getGicon(gicon: Gio.Icon, size: number): void;
    public getIconName(iconName: string, size: number): void;
    public getIconSet(iconSet: IconSet, size: number): void;
    public getPixbuf(): GdkPixbuf.Pixbuf;
    public getPixelSize(): number;
    public getStock(stockId: string, size: number): void;
    public getStorageType(): ImageType;
    public setFromAnimation(animation: GdkPixbuf.PixbufAnimation): void;
    public setFromFile(filename: string): void;
    public setFromGicon(icon: Gio.Icon, size: number): void;
    public setFromIconName(iconName: string, size: number): void;
    public setFromIconSet(iconSet: IconSet, size: number): void;
    public setFromPixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
    public setFromResource(resourcePath: string): void;
    public setFromStock(stockId: string, size: number): void;
    public setFromSurface(surface: cairo.Surface): void;
    public setPixelSize(pixelSize: number): void;
  }
  
  interface ImageProps extends MiscProps, Atk.ImplementorIfaceProps, BuildableProps {
    file: string;
    gicon: Gio.Icon;
    iconName: string;
    iconSet: IconSet;
    iconSize: number;
    pixbuf: GdkPixbuf.Pixbuf;
    pixbufAnimation: GdkPixbuf.PixbufAnimation;
    pixelSize: number;
    resource: string;
    stock: string;
    storageType: ImageType;
    surface: cairo.Surface;
    useFallback: boolean;
  }
  
  export class ImageAccessible extends WidgetAccessible implements Atk.Component, Atk.Image {
    constructor(props?: ImageAccessibleProps);
  }
  
  interface ImageAccessibleProps extends WidgetAccessibleProps, Atk.ComponentProps, Atk.ImageProps {
    
  }
  
  export class ImageCellAccessible extends RendererCellAccessible implements Atk.Action, Atk.Component, Atk.Image {
    constructor(props?: ImageCellAccessibleProps);
  }
  
  interface ImageCellAccessibleProps extends RendererCellAccessibleProps, Atk.ActionProps, Atk.ComponentProps, Atk.ImageProps {
    
  }
  
  export class ImageMenuItem extends MenuItem implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(props?: ImageMenuItemProps);
    
    accelGroup: AccelGroup;
    alwaysShowImage: boolean;
    image: Widget;
    useStock: boolean;
    
    public getAlwaysShowImage(): boolean;
    public getImage(): Widget;
    public getUseStock(): boolean;
    public setAccelGroup(accelGroup: AccelGroup): void;
    public setAlwaysShowImage(alwaysShow: boolean): void;
    public setImage(image: Widget): void;
    public setUseStock(useStock: boolean): void;
  }
  
  interface ImageMenuItemProps extends MenuItemProps, Atk.ImplementorIfaceProps, ActionableProps, ActivatableProps, BuildableProps {
    accelGroup: AccelGroup;
    alwaysShowImage: boolean;
    image: Widget;
    useStock: boolean;
  }
  
  export class InfoBar extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: InfoBarProps);
    
    messageType: MessageType;
    showCloseButton: boolean;
    
    public addActionWidget(child: Widget, responseId: number): void;
    public addButton(buttonText: string, responseId: number): Button;
    public addButtons(firstButtonText: string, ...params: any[]): void;
    public getActionArea(): Widget;
    public getContentArea(): Widget;
    public getMessageType(): MessageType;
    public getShowCloseButton(): boolean;
    public response(responseId: number): void;
    public setDefaultResponse(responseId: number): void;
    public setMessageType(messageType: MessageType): void;
    public setResponseSensitive(responseId: number, setting: boolean): void;
    public setShowCloseButton(setting: boolean): void;
    public close(): void;
  }
  
  interface InfoBarProps extends BoxProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    messageType: MessageType;
    showCloseButton: boolean;
  }
  
  export class Invisible extends Widget implements Atk.ImplementorIface, Buildable {
    constructor(props?: InvisibleProps);
    
    screen: Gdk.Screen;
    
    public getScreen(): Gdk.Screen;
    public setScreen(screen: Gdk.Screen): void;
  }
  
  interface InvisibleProps extends WidgetProps, Atk.ImplementorIfaceProps, BuildableProps {
    screen: Gdk.Screen;
  }
  
  export class Label extends Misc implements Atk.ImplementorIface, Buildable {
    constructor(props?: LabelProps);
    
    angle: number;
    attributes: Pango.AttrList;
    cursorPosition: number;
    ellipsize: Pango.EllipsizeMode;
    justify: Justification;
    label: string;
    lines: number;
    maxWidthChars: number;
    mnemonicKeyval: number;
    mnemonicWidget: Widget;
    pattern: string;
    selectable: boolean;
    selectionBound: number;
    singleLineMode: boolean;
    trackVisitedLinks: boolean;
    useMarkup: boolean;
    useUnderline: boolean;
    widthChars: number;
    wrap: boolean;
    wrapMode: Pango.WrapMode;
    xalign: number;
    yalign: number;
    
    public getAngle(): number;
    public getAttributes(): Pango.AttrList;
    public getCurrentUri(): string;
    public getEllipsize(): Pango.EllipsizeMode;
    public getJustify(): Justification;
    public getLabel(): string;
    public getLayout(): Pango.Layout;
    public getLayoutOffsets(x: number, _y: number): void;
    public getLineWrap(): boolean;
    public getLineWrapMode(): Pango.WrapMode;
    public getLines(): number;
    public getMaxWidthChars(): number;
    public getMnemonicKeyval(): number;
    public getMnemonicWidget(): Widget;
    public getSelectable(): boolean;
    public getSelectionBounds(start: number, end: number): boolean;
    public getSingleLineMode(): boolean;
    public getText(): string;
    public getTrackVisitedLinks(): boolean;
    public getUseMarkup(): boolean;
    public getUseUnderline(): boolean;
    public getWidthChars(): number;
    public getXalign(): number;
    public getYalign(): number;
    public selectRegion(startOffset: number, endOffset: number): void;
    public setAngle(angle: number): void;
    public setAttributes(attrs: Pango.AttrList): void;
    public setEllipsize(mode: Pango.EllipsizeMode): void;
    public setJustify(jtype: Justification): void;
    public setLabel(str: string): void;
    public setLineWrap(wrap: boolean): void;
    public setLineWrapMode(wrapMode: Pango.WrapMode): void;
    public setLines(lines: number): void;
    public setMarkup(str: string): void;
    public setMarkupWithMnemonic(str: string): void;
    public setMaxWidthChars(nChars: number): void;
    public setMnemonicWidget(widget: Widget): void;
    public setPattern(pattern: string): void;
    public setSelectable(setting: boolean): void;
    public setSingleLineMode(singleLineMode: boolean): void;
    public setText(str: string): void;
    public setTextWithMnemonic(str: string): void;
    public setTrackVisitedLinks(trackLinks: boolean): void;
    public setUseMarkup(setting: boolean): void;
    public setUseUnderline(setting: boolean): void;
    public setWidthChars(nChars: number): void;
    public setXalign(xalign: number): void;
    public setYalign(yalign: number): void;
    public activateLink(uri: string): boolean;
    public copyClipboard(): void;
    public moveCursor(step: MovementStep, count: number, extendSelection: boolean): void;
    public populatePopup(menu: Menu): void;
  }
  
  interface LabelProps extends MiscProps, Atk.ImplementorIfaceProps, BuildableProps {
    angle: number;
    attributes: Pango.AttrList;
    cursorPosition: number;
    ellipsize: Pango.EllipsizeMode;
    justify: Justification;
    label: string;
    lines: number;
    maxWidthChars: number;
    mnemonicKeyval: number;
    mnemonicWidget: Widget;
    pattern: string;
    selectable: boolean;
    selectionBound: number;
    singleLineMode: boolean;
    trackVisitedLinks: boolean;
    useMarkup: boolean;
    useUnderline: boolean;
    widthChars: number;
    wrap: boolean;
    wrapMode: Pango.WrapMode;
    xalign: number;
    yalign: number;
  }
  
  export class LabelAccessible extends WidgetAccessible implements Atk.Component, Atk.Hypertext, Atk.Text {
    constructor(props?: LabelAccessibleProps);
  }
  
  interface LabelAccessibleProps extends WidgetAccessibleProps, Atk.ComponentProps, Atk.HypertextProps, Atk.TextProps {
    
  }
  
  export class Layout extends Container implements Atk.ImplementorIface, Buildable, Scrollable {
    constructor(props?: LayoutProps);
    
    height: number;
    width: number;
    
    public getBinWindow(): Gdk.Window;
    public getHadjustment(): Adjustment;
    public getSize(width: number, height: number): void;
    public getVadjustment(): Adjustment;
    public move(childWidget: Widget, x: number, _y: number): void;
    public put(childWidget: Widget, x: number, _y: number): void;
    public setHadjustment(adjustment: Adjustment): void;
    public setSize(width: number, height: number): void;
    public setVadjustment(adjustment: Adjustment): void;
  }
  
  interface LayoutProps extends ContainerProps, Atk.ImplementorIfaceProps, BuildableProps, ScrollableProps {
    height: number;
    width: number;
  }
  
  export class LevelBar extends Widget implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: LevelBarProps);
    
    inverted: boolean;
    maxValue: number;
    minValue: number;
    mode: LevelBarMode;
    value: number;
    
    public addOffsetValue(name: string, value: number): void;
    public getInverted(): boolean;
    public getMaxValue(): number;
    public getMinValue(): number;
    public getMode(): LevelBarMode;
    public getOffsetValue(name: string, value: number): boolean;
    public getValue(): number;
    public removeOffsetValue(name: string): void;
    public setInverted(inverted: boolean): void;
    public setMaxValue(value: number): void;
    public setMinValue(value: number): void;
    public setMode(mode: LevelBarMode): void;
    public setValue(value: number): void;
    public offsetChanged(name: string): void;
  }
  
  interface LevelBarProps extends WidgetProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    inverted: boolean;
    maxValue: number;
    minValue: number;
    mode: LevelBarMode;
    value: number;
  }
  
  export class LevelBarAccessible extends WidgetAccessible implements Atk.Component, Atk.Value {
    constructor(props?: LevelBarAccessibleProps);
  }
  
  interface LevelBarAccessibleProps extends WidgetAccessibleProps, Atk.ComponentProps, Atk.ValueProps {
    
  }
  
  export class LinkButton extends Button implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(props?: LinkButtonProps);
    
    uri: string;
    visited: boolean;
    
    public getUri(): string;
    public getVisited(): boolean;
    public setUri(uri: string): void;
    public setVisited(visited: boolean): void;
    public activateLink(): boolean;
  }
  
  interface LinkButtonProps extends ButtonProps, Atk.ImplementorIfaceProps, ActionableProps, ActivatableProps, BuildableProps {
    uri: string;
    visited: boolean;
  }
  
  export class LinkButtonAccessible extends ButtonAccessible implements Atk.Action, Atk.Component, Atk.HyperlinkImpl, Atk.Image {
    constructor(props?: LinkButtonAccessibleProps);
  }
  
  interface LinkButtonAccessibleProps extends ButtonAccessibleProps, Atk.ActionProps, Atk.ComponentProps, Atk.HyperlinkImplProps, Atk.ImageProps {
    
  }
  
  export class ListBox extends Container implements Atk.ImplementorIface, Buildable {
    constructor(props?: ListBoxProps);
    
    activateOnSingleClick: boolean;
    selectionMode: SelectionMode;
    
    public bindModel(model: Gio.ListModel, createWidgetFunc: ListBoxCreateWidgetFunc, userData: any, userDataFreeFunc: GLib.DestroyNotify): void;
    public dragHighlightRow(_row: ListBoxRow): void;
    public dragUnhighlightRow(): void;
    public getActivateOnSingleClick(): boolean;
    public getAdjustment(): Adjustment;
    public getRowAtIndex(index_: number): ListBoxRow;
    public getRowAtY(_y: number): ListBoxRow;
    public getSelectedRow(): ListBoxRow;
    public getSelectedRows(): GLib.List;
    public getSelectionMode(): SelectionMode;
    public insert(child: Widget, position: number): void;
    public invalidateFilter(): void;
    public invalidateHeaders(): void;
    public invalidateSort(): void;
    public prepend(child: Widget): void;
    public selectAll(): void;
    public selectRow(_row: ListBoxRow): void;
    public selectedForeach(func: ListBoxForeachFunc, data: any): void;
    public setActivateOnSingleClick(single: boolean): void;
    public setAdjustment(adjustment: Adjustment): void;
    public setFilterFunc(filterFunc: ListBoxFilterFunc, userData: any, destroy: GLib.DestroyNotify): void;
    public setHeaderFunc(updateHeader: ListBoxUpdateHeaderFunc, userData: any, destroy: GLib.DestroyNotify): void;
    public setPlaceholder(placeholder: Widget): void;
    public setSelectionMode(mode: SelectionMode): void;
    public setSortFunc(sortFunc: ListBoxSortFunc, userData: any, destroy: GLib.DestroyNotify): void;
    public unselectAll(): void;
    public unselectRow(_row: ListBoxRow): void;
    public activateCursorRow(): void;
    public moveCursor(step: MovementStep, count: number): void;
    public rowActivated(_row: ListBoxRow): void;
    public rowSelected(_row: ListBoxRow): void;
    public selectedRowsChanged(): void;
    public toggleCursorRow(): void;
  }
  
  interface ListBoxProps extends ContainerProps, Atk.ImplementorIfaceProps, BuildableProps {
    activateOnSingleClick: boolean;
    selectionMode: SelectionMode;
  }
  
  export class ListBoxAccessible extends ContainerAccessible implements Atk.Component, Atk.Selection {
    constructor(props?: ListBoxAccessibleProps);
  }
  
  interface ListBoxAccessibleProps extends ContainerAccessibleProps, Atk.ComponentProps, Atk.SelectionProps {
    
  }
  
  export class ListBoxRow extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(props?: ListBoxRowProps);
    
    activatable: boolean;
    selectable: boolean;
    
    public changed(): void;
    public getActivatable(): boolean;
    public getHeader(): Widget;
    public getIndex(): number;
    public getSelectable(): boolean;
    public isSelected(): boolean;
    public setActivatable(activatable: boolean): void;
    public setHeader(header: Widget): void;
    public setSelectable(selectable: boolean): void;
    public activate(): void;
  }
  
  interface ListBoxRowProps extends BinProps, Atk.ImplementorIfaceProps, BuildableProps {
    activatable: boolean;
    selectable: boolean;
  }
  
  export class ListBoxRowAccessible extends ContainerAccessible implements Atk.Component {
    constructor(props?: ListBoxRowAccessibleProps);
  }
  
  interface ListBoxRowAccessibleProps extends ContainerAccessibleProps, Atk.ComponentProps {
    
  }
  
  export class ListStore extends GObject.Object implements Buildable, TreeDragDest, TreeDragSource, TreeModel, TreeSortable {
    constructor(props?: ListStoreProps);
    
    public append(iter: TreeIter): void;
    public clear(): void;
    public insert(iter: TreeIter, position: number): void;
    public insertAfter(iter: TreeIter, sibling: TreeIter): void;
    public insertBefore(iter: TreeIter, sibling: TreeIter): void;
    public insertWithValues(iter: TreeIter, position: number, ...params: any[]): void;
    public insertWithValuesv(iter: TreeIter, position: number, columns: number[], values: GObject.Value[], nValues: number): void;
    public iterIsValid(iter: TreeIter): boolean;
    public moveAfter(iter: TreeIter, position: TreeIter): void;
    public moveBefore(iter: TreeIter, position: TreeIter): void;
    public prepend(iter: TreeIter): void;
    public remove(iter: TreeIter): boolean;
    public reorder(newOrder: number[]): void;
    public set(iter: TreeIter, ...params: any[]): void;
    public setColumnTypes(nColumns: number, types: GObject.Type[]): void;
    public setValist(iter: TreeIter, varArgs: any[]): void;
    public setValue(iter: TreeIter, column: number, value: GObject.Value): void;
    public setValuesv(iter: TreeIter, columns: number[], values: GObject.Value[], nValues: number): void;
    public swap(a: TreeIter, b: TreeIter): void;
  }
  
  interface ListStoreProps extends GObject.ObjectProps, BuildableProps, TreeDragDestProps, TreeDragSourceProps, TreeModelProps, TreeSortableProps {
    
  }
  
  export class LockButton extends Button implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(props?: LockButtonProps);
    
    permission: Gio.Permission;
    textLock: string;
    textUnlock: string;
    tooltipLock: string;
    tooltipNotAuthorized: string;
    tooltipUnlock: string;
    
    public getPermission(): Gio.Permission;
    public setPermission(permission: Gio.Permission): void;
  }
  
  interface LockButtonProps extends ButtonProps, Atk.ImplementorIfaceProps, ActionableProps, ActivatableProps, BuildableProps {
    permission: Gio.Permission;
    textLock: string;
    textUnlock: string;
    tooltipLock: string;
    tooltipNotAuthorized: string;
    tooltipUnlock: string;
  }
  
  export class LockButtonAccessible extends ButtonAccessible implements Atk.Action, Atk.Component, Atk.Image {
    constructor(props?: LockButtonAccessibleProps);
  }
  
  interface LockButtonAccessibleProps extends ButtonAccessibleProps, Atk.ActionProps, Atk.ComponentProps, Atk.ImageProps {
    
  }
  
  export class Menu extends MenuShell implements Atk.ImplementorIface, Buildable {
    constructor(props?: MenuProps);
    
    accelGroup: AccelGroup;
    accelPath: string;
    active: number;
    anchorHints: Gdk.AnchorHints;
    attachWidget: Widget;
    menuTypeHint: Gdk.WindowTypeHint;
    monitor: number;
    rectAnchorDx: number;
    rectAnchorDy: number;
    reserveToggleSize: boolean;
    tearoffState: boolean;
    tearoffTitle: string;
    
    public attach(child: Widget, leftAttach: number, rightAttach: number, topAttach: number, bottomAttach: number): void;
    public attachToWidget(attachWidget: Widget, detacher: MenuDetachFunc): void;
    public detach(): void;
    public getAccelGroup(): AccelGroup;
    public getAccelPath(): string;
    public getActive(): Widget;
    public getAttachWidget(): Widget;
    public getMonitor(): number;
    public getReserveToggleSize(): boolean;
    public getTearoffState(): boolean;
    public getTitle(): string;
    public placeOnMonitor(monitor: Gdk.Monitor): void;
    public popdown(): void;
    public popup(parentMenuShell: Widget, parentMenuItem: Widget, func: MenuPositionFunc, data: any, button: number, activateTime: number): void;
    public popupAtPointer(triggerEvent: Gdk.Event): void;
    public popupAtRect(rectWindow: Gdk.Window, rect: Gdk.Rectangle, rectAnchor: Gdk.Gravity, menuAnchor: Gdk.Gravity, triggerEvent: Gdk.Event): void;
    public popupAtWidget(widget: Widget, widgetAnchor: Gdk.Gravity, menuAnchor: Gdk.Gravity, triggerEvent: Gdk.Event): void;
    public popupForDevice(device: Gdk.Device, parentMenuShell: Widget, parentMenuItem: Widget, func: MenuPositionFunc, data: any, destroy: GLib.DestroyNotify, button: number, activateTime: number): void;
    public reorderChild(child: Widget, position: number): void;
    public reposition(): void;
    public setAccelGroup(accelGroup: AccelGroup): void;
    public setAccelPath(accelPath: string): void;
    public setActive(index: number): void;
    public setMonitor(monitorNum: number): void;
    public setReserveToggleSize(reserveToggleSize: boolean): void;
    public setScreen(screen: Gdk.Screen): void;
    public setTearoffState(tornOff: boolean): void;
    public setTitle(title: string): void;
    
    public static getForAttachWidget(widget: Widget): GLib.List;
  }
  
  interface MenuProps extends MenuShellProps, Atk.ImplementorIfaceProps, BuildableProps {
    accelGroup: AccelGroup;
    accelPath: string;
    active: number;
    anchorHints: Gdk.AnchorHints;
    attachWidget: Widget;
    menuTypeHint: Gdk.WindowTypeHint;
    monitor: number;
    rectAnchorDx: number;
    rectAnchorDy: number;
    reserveToggleSize: boolean;
    tearoffState: boolean;
    tearoffTitle: string;
  }
  
  export class MenuAccessible extends MenuShellAccessible implements Atk.Component, Atk.Selection {
    constructor(props?: MenuAccessibleProps);
  }
  
  interface MenuAccessibleProps extends MenuShellAccessibleProps, Atk.ComponentProps, Atk.SelectionProps {
    
  }
  
  export class MenuBar extends MenuShell implements Atk.ImplementorIface, Buildable {
    constructor(props?: MenuBarProps);
    
    childPackDirection: PackDirection;
    packDirection: PackDirection;
    
    public getChildPackDirection(): PackDirection;
    public getPackDirection(): PackDirection;
    public setChildPackDirection(childPackDir: PackDirection): void;
    public setPackDirection(packDir: PackDirection): void;
  }
  
  interface MenuBarProps extends MenuShellProps, Atk.ImplementorIfaceProps, BuildableProps {
    childPackDirection: PackDirection;
    packDirection: PackDirection;
  }
  
  export class MenuButton extends ToggleButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(props?: MenuButtonProps);
    
    alignWidget: Container;
    direction: ArrowType;
    menuModel: Gio.MenuModel;
    popover: Popover;
    popup: Menu;
    usePopover: boolean;
    
    public getAlignWidget(): Widget;
    public getDirection(): ArrowType;
    public getMenuModel(): Gio.MenuModel;
    public getPopover(): Popover;
    public getPopup(): Menu;
    public getUsePopover(): boolean;
    public setAlignWidget(alignWidget: Widget): void;
    public setDirection(direction: ArrowType): void;
    public setMenuModel(menuModel: Gio.MenuModel): void;
    public setPopover(popover: Widget): void;
    public setPopup(menu: Widget): void;
    public setUsePopover(usePopover: boolean): void;
  }
  
  interface MenuButtonProps extends ToggleButtonProps, Atk.ImplementorIfaceProps, ActionableProps, ActivatableProps, BuildableProps {
    alignWidget: Container;
    direction: ArrowType;
    menuModel: Gio.MenuModel;
    popover: Popover;
    popup: Menu;
    usePopover: boolean;
  }
  
  export class MenuButtonAccessible extends ToggleButtonAccessible implements Atk.Action, Atk.Component, Atk.Image {
    constructor(props?: MenuButtonAccessibleProps);
  }
  
  interface MenuButtonAccessibleProps extends ToggleButtonAccessibleProps, Atk.ActionProps, Atk.ComponentProps, Atk.ImageProps {
    
  }
  
  export class MenuItem extends Bin implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(props?: MenuItemProps);
    
    accelPath: string;
    label: string;
    rightJustified: boolean;
    submenu: Menu;
    useUnderline: boolean;
    
    public activate(): void;
    public deselect(): void;
    public getAccelPath(): string;
    public getLabel(): string;
    public getReserveIndicator(): boolean;
    public getRightJustified(): boolean;
    public getSubmenu(): Widget;
    public getUseUnderline(): boolean;
    public select(): void;
    public setAccelPath(accelPath: string): void;
    public setLabel(label: string): void;
    public setReserveIndicator(reserve: boolean): void;
    public setRightJustified(rightJustified: boolean): void;
    public setSubmenu(submenu: Menu): void;
    public setUseUnderline(setting: boolean): void;
    public toggleSizeAllocate(allocation: number): void;
    public toggleSizeRequest(requisition: number): void;
    public activateItem(): void;
  }
  
  interface MenuItemProps extends BinProps, Atk.ImplementorIfaceProps, ActionableProps, ActivatableProps, BuildableProps {
    accelPath: string;
    label: string;
    rightJustified: boolean;
    submenu: Menu;
    useUnderline: boolean;
  }
  
  export class MenuItemAccessible extends ContainerAccessible implements Atk.Action, Atk.Component, Atk.Selection {
    constructor(props?: MenuItemAccessibleProps);
  }
  
  interface MenuItemAccessibleProps extends ContainerAccessibleProps, Atk.ActionProps, Atk.ComponentProps, Atk.SelectionProps {
    
  }
  
  export class MenuShell extends Container implements Atk.ImplementorIface, Buildable {
    constructor(props?: MenuShellProps);
    
    takeFocus: boolean;
    
    public activateItem(menuItem: Widget, forceDeactivate: boolean): void;
    public append(child: MenuItem): void;
    public bindModel(model: Gio.MenuModel, actionNamespace: string, withSeparators: boolean): void;
    public cancel(): void;
    public deactivate(): void;
    public deselect(): void;
    public getParentShell(): Widget;
    public getSelectedItem(): Widget;
    public getTakeFocus(): boolean;
    public insert(child: Widget, position: number): void;
    public prepend(child: Widget): void;
    public selectFirst(searchSensitive: boolean): void;
    public selectItem(menuItem: Widget): void;
    public setTakeFocus(takeFocus: boolean): void;
    public activateCurrent(forceHide: boolean): void;
    public getPopupDelay(): number;
    public moveCurrent(direction: MenuDirectionType): void;
    public moveSelected(distance: number): boolean;
    public selectionDone(): void;
  }
  
  interface MenuShellProps extends ContainerProps, Atk.ImplementorIfaceProps, BuildableProps {
    takeFocus: boolean;
  }
  
  export class MenuShellAccessible extends ContainerAccessible implements Atk.Component, Atk.Selection {
    constructor(props?: MenuShellAccessibleProps);
  }
  
  interface MenuShellAccessibleProps extends ContainerAccessibleProps, Atk.ComponentProps, Atk.SelectionProps {
    
  }
  
  export class MenuToolButton extends ToolButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(props?: MenuToolButtonProps);
    
    menu: Menu;
    
    public getMenu(): Widget;
    public setArrowTooltipMarkup(markup: string): void;
    public setArrowTooltipText(text: string): void;
    public setMenu(menu: Widget): void;
    public showMenu(): void;
  }
  
  interface MenuToolButtonProps extends ToolButtonProps, Atk.ImplementorIfaceProps, ActionableProps, ActivatableProps, BuildableProps {
    menu: Menu;
  }
  
  export class MessageDialog extends Dialog implements Atk.ImplementorIface, Buildable {
    constructor(props?: MessageDialogProps);
    
    buttons: ButtonsType;
    image: Widget;
    messageArea: Widget;
    messageType: MessageType;
    secondaryText: string;
    secondaryUseMarkup: boolean;
    text: string;
    useMarkup: boolean;
    
    public formatSecondaryMarkup(messageFormat: string, ...params: any[]): void;
    public formatSecondaryText(messageFormat: string, ...params: any[]): void;
    public getImage(): Widget;
    public getMessageArea(): Widget;
    public setImage(image: Widget): void;
    public setMarkup(str: string): void;
  }
  
  interface MessageDialogProps extends DialogProps, Atk.ImplementorIfaceProps, BuildableProps {
    buttons: ButtonsType;
    image: Widget;
    messageArea: Widget;
    messageType: MessageType;
    secondaryText: string;
    secondaryUseMarkup: boolean;
    text: string;
    useMarkup: boolean;
  }
  
  export class Misc extends Widget implements Atk.ImplementorIface, Buildable {
    constructor(props?: MiscProps);
    
    xalign: number;
    xpad: number;
    yalign: number;
    ypad: number;
    
    public getAlignment(xalign: number, yalign: number): void;
    public getPadding(xpad: number, ypad: number): void;
    public setAlignment(xalign: number, yalign: number): void;
    public setPadding(xpad: number, ypad: number): void;
  }
  
  interface MiscProps extends WidgetProps, Atk.ImplementorIfaceProps, BuildableProps {
    xalign: number;
    xpad: number;
    yalign: number;
    ypad: number;
  }
  
  export class ModelButton extends Button implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(props?: ModelButtonProps);
    
    active: boolean;
    centered: boolean;
    icon: Gio.Icon;
    iconic: boolean;
    inverted: boolean;
    menuName: string;
    role: ButtonRole;
    text: string;
  }
  
  interface ModelButtonProps extends ButtonProps, Atk.ImplementorIfaceProps, ActionableProps, ActivatableProps, BuildableProps {
    active: boolean;
    centered: boolean;
    icon: Gio.Icon;
    iconic: boolean;
    inverted: boolean;
    menuName: string;
    role: ButtonRole;
    text: string;
  }
  
  export class MountOperation extends Gio.MountOperation {
    constructor(props?: MountOperationProps);
    
    isShowing: boolean;
    parent: Window;
    screen: Gdk.Screen;
    
    public getParent(): Window;
    public getScreen(): Gdk.Screen;
    public isShowing(): boolean;
    public setParent(parent: Window): void;
    public setScreen(screen: Gdk.Screen): void;
  }
  
  interface MountOperationProps extends Gio.MountOperationProps {
    isShowing: boolean;
    parent: Window;
    screen: Gdk.Screen;
  }
  
  export class NativeDialog extends GObject.Object {
    constructor(props?: NativeDialogProps);
    
    modal: boolean;
    title: string;
    transientFor: Window;
    visible: boolean;
    
    public destroy(): void;
    public getModal(): boolean;
    public getTitle(): string;
    public getTransientFor(): Window;
    public getVisible(): boolean;
    public hide(): void;
    public run(): number;
    public setModal(modal: boolean): void;
    public setTitle(title: string): void;
    public setTransientFor(parent: Window): void;
    public show(): void;
    public response(responseId: number): void;
  }
  
  interface NativeDialogProps extends GObject.ObjectProps {
    modal: boolean;
    title: string;
    transientFor: Window;
    visible: boolean;
  }
  
  export class Notebook extends Container implements Atk.ImplementorIface, Buildable {
    constructor(props?: NotebookProps);
    
    enablePopup: boolean;
    groupName: string;
    page: number;
    scrollable: boolean;
    showBorder: boolean;
    showTabs: boolean;
    tabPos: PositionType;
    
    public appendPage(child: Widget, tabLabel: Widget): number;
    public appendPageMenu(child: Widget, tabLabel: Widget, menuLabel: Widget): number;
    public detachTab(child: Widget): void;
    public getActionWidget(packType: PackType): Widget;
    public getCurrentPage(): number;
    public getGroupName(): string;
    public getMenuLabel(child: Widget): Widget;
    public getMenuLabelText(child: Widget): string;
    public getNPages(): number;
    public getNthPage(pageNum: number): Widget;
    public getScrollable(): boolean;
    public getShowBorder(): boolean;
    public getShowTabs(): boolean;
    public getTabDetachable(child: Widget): boolean;
    public getTabHborder(): number;
    public getTabLabel(child: Widget): Widget;
    public getTabLabelText(child: Widget): string;
    public getTabPos(): PositionType;
    public getTabReorderable(child: Widget): boolean;
    public getTabVborder(): number;
    public insertPage(child: Widget, tabLabel: Widget, position: number): number;
    public insertPageMenu(child: Widget, tabLabel: Widget, menuLabel: Widget, position: number): number;
    public nextPage(): void;
    public pageNum(child: Widget): number;
    public popupDisable(): void;
    public popupEnable(): void;
    public prependPage(child: Widget, tabLabel: Widget): number;
    public prependPageMenu(child: Widget, tabLabel: Widget, menuLabel: Widget): number;
    public prevPage(): void;
    public removePage(pageNum: number): void;
    public reorderChild(child: Widget, position: number): void;
    public setActionWidget(widget: Widget, packType: PackType): void;
    public setCurrentPage(pageNum: number): void;
    public setGroupName(groupName: string): void;
    public setMenuLabel(child: Widget, menuLabel: Widget): void;
    public setMenuLabelText(child: Widget, menuText: string): void;
    public setScrollable(scrollable: boolean): void;
    public setShowBorder(showBorder: boolean): void;
    public setShowTabs(showTabs: boolean): void;
    public setTabDetachable(child: Widget, detachable: boolean): void;
    public setTabLabel(child: Widget, tabLabel: Widget): void;
    public setTabLabelText(child: Widget, tabText: string): void;
    public setTabPos(pos: PositionType): void;
    public setTabReorderable(child: Widget, reorderable: boolean): void;
    public changeCurrentPage(offset: number): boolean;
    public createWindow(page: Widget, x: number, _y: number): Notebook;
    public focusTab(type: NotebookTab): boolean;
    public moveFocusOut(direction: DirectionType): void;
    public pageAdded(child: Widget, pageNum: number): void;
    public pageRemoved(child: Widget, pageNum: number): void;
    public pageReordered(child: Widget, pageNum: number): void;
    public reorderTab(direction: DirectionType, moveToLast: boolean): boolean;
    public selectPage(moveFocus: boolean): boolean;
    public switchPage(page: Widget, pageNum: number): void;
  }
  
  interface NotebookProps extends ContainerProps, Atk.ImplementorIfaceProps, BuildableProps {
    enablePopup: boolean;
    groupName: string;
    page: number;
    scrollable: boolean;
    showBorder: boolean;
    showTabs: boolean;
    tabPos: PositionType;
  }
  
  export class NotebookAccessible extends ContainerAccessible implements Atk.Component, Atk.Selection {
    constructor(props?: NotebookAccessibleProps);
  }
  
  interface NotebookAccessibleProps extends ContainerAccessibleProps, Atk.ComponentProps, Atk.SelectionProps {
    
  }
  
  export class NotebookPageAccessible extends Atk.Object implements Atk.Component {
    constructor(props?: NotebookPageAccessibleProps);
    
    public invalidate(): void;
  }
  
  interface NotebookPageAccessibleProps extends Atk.ObjectProps, Atk.ComponentProps {
    
  }
  
  export class NumerableIcon extends Gio.EmblemedIcon implements Gio.Icon {
    constructor(props?: NumerableIconProps);
    
    backgroundIcon: Gio.Icon;
    backgroundIconName: string;
    count: number;
    label: string;
    styleContext: StyleContext;
    
    public getBackgroundGicon(): Gio.Icon;
    public getBackgroundIconName(): string;
    public getCount(): number;
    public getLabel(): string;
    public getStyleContext(): StyleContext;
    public setBackgroundGicon(icon: Gio.Icon): void;
    public setBackgroundIconName(iconName: string): void;
    public setCount(count: number): void;
    public setLabel(label: string): void;
    public setStyleContext(style: StyleContext): void;
    
    public static new(baseIcon: Gio.Icon): Gio.Icon;
    public static newWithStyleContext(baseIcon: Gio.Icon, context: StyleContext): Gio.Icon;
  }
  
  interface NumerableIconProps extends Gio.EmblemedIconProps, Gio.IconProps {
    backgroundIcon: Gio.Icon;
    backgroundIconName: string;
    count: number;
    label: string;
    styleContext: StyleContext;
  }
  
  export class OffscreenWindow extends Window implements Atk.ImplementorIface, Buildable {
    constructor(props?: OffscreenWindowProps);
    
    public getPixbuf(): GdkPixbuf.Pixbuf;
    public getSurface(): cairo.Surface;
  }
  
  interface OffscreenWindowProps extends WindowProps, Atk.ImplementorIfaceProps, BuildableProps {
    
  }
  
  export class Overlay extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(props?: OverlayProps);
    
    public addOverlay(widget: Widget): void;
    public getOverlayPassThrough(widget: Widget): boolean;
    public reorderOverlay(child: Widget, position: number): void;
    public setOverlayPassThrough(widget: Widget, passThrough: boolean): void;
    public getChildPosition(widget: Widget, allocation: Allocation): boolean;
  }
  
  interface OverlayProps extends BinProps, Atk.ImplementorIfaceProps, BuildableProps {
    
  }
  
  export class PadController extends EventController {
    constructor(props?: PadControllerProps);
    
    actionGroup: Gio.ActionGroup;
    pad: Gdk.Device;
    
    public setAction(type: PadActionType, index: number, mode: number, label: string, actionName: string): void;
    public setActionEntries(entries: PadActionEntry[], nEntries: number): void;
  }
  
  interface PadControllerProps extends EventControllerProps {
    actionGroup: Gio.ActionGroup;
    pad: Gdk.Device;
  }
  
  export class PageSetup extends GObject.Object {
    constructor(props?: PageSetupProps);
    
    public copy(): PageSetup;
    public getBottomMargin(unit: Unit): number;
    public getLeftMargin(unit: Unit): number;
    public getOrientation(): PageOrientation;
    public getPageHeight(unit: Unit): number;
    public getPageWidth(unit: Unit): number;
    public getPaperHeight(unit: Unit): number;
    public getPaperSize(): PaperSize;
    public getPaperWidth(unit: Unit): number;
    public getRightMargin(unit: Unit): number;
    public getTopMargin(unit: Unit): number;
    public loadFile(fileName: string): boolean;
    public loadKeyFile(keyFile: GLib.KeyFile, groupName: string): boolean;
    public setBottomMargin(margin: number, unit: Unit): void;
    public setLeftMargin(margin: number, unit: Unit): void;
    public setOrientation(orientation: PageOrientation): void;
    public setPaperSize(size: PaperSize): void;
    public setPaperSizeAndDefaultMargins(size: PaperSize): void;
    public setRightMargin(margin: number, unit: Unit): void;
    public setTopMargin(margin: number, unit: Unit): void;
    public toFile(fileName: string): boolean;
    public toGvariant(): GLib.Variant;
    public toKeyFile(keyFile: GLib.KeyFile, groupName: string): void;
  }
  
  interface PageSetupProps extends GObject.ObjectProps {
    
  }
  
  export class Paned extends Container implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: PanedProps);
    
    maxPosition: number;
    minPosition: number;
    position: number;
    positionSet: boolean;
    wideHandle: boolean;
    
    public add1(child: Widget): void;
    public add2(child: Widget): void;
    public getChild1(): Widget;
    public getChild2(): Widget;
    public getHandleWindow(): Gdk.Window;
    public getPosition(): number;
    public getWideHandle(): boolean;
    public pack1(child: Widget, resize: boolean, shrink: boolean): void;
    public pack2(child: Widget, resize: boolean, shrink: boolean): void;
    public setPosition(position: number): void;
    public setWideHandle(wide: boolean): void;
    public acceptPosition(): boolean;
    public cancelPosition(): boolean;
    public cycleChildFocus(reverse: boolean): boolean;
    public cycleHandleFocus(reverse: boolean): boolean;
    public moveHandle(scroll: ScrollType): boolean;
    public toggleHandleFocus(): boolean;
  }
  
  interface PanedProps extends ContainerProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    maxPosition: number;
    minPosition: number;
    position: number;
    positionSet: boolean;
    wideHandle: boolean;
  }
  
  export class PanedAccessible extends ContainerAccessible implements Atk.Component, Atk.Value {
    constructor(props?: PanedAccessibleProps);
  }
  
  interface PanedAccessibleProps extends ContainerAccessibleProps, Atk.ComponentProps, Atk.ValueProps {
    
  }
  
  export class PlacesSidebar extends ScrolledWindow implements Atk.ImplementorIface, Buildable {
    constructor(props?: PlacesSidebarProps);
    
    localOnly: boolean;
    location: Gio.File;
    openFlags: PlacesOpenFlags;
    populateAll: boolean;
    showConnectToServer: boolean;
    showDesktop: boolean;
    showEnterLocation: boolean;
    showOtherLocations: boolean;
    showRecent: boolean;
    showTrash: boolean;
    
    public addShortcut(location: Gio.File): void;
    public getLocalOnly(): boolean;
    public getLocation(): Gio.File;
    public getNthBookmark(_n: number): Gio.File;
    public getOpenFlags(): PlacesOpenFlags;
    public getShowConnectToServer(): boolean;
    public getShowDesktop(): boolean;
    public getShowEnterLocation(): boolean;
    public getShowOtherLocations(): boolean;
    public getShowRecent(): boolean;
    public getShowTrash(): boolean;
    public listShortcuts(): GLib.SList;
    public removeShortcut(location: Gio.File): void;
    public setDropTargetsVisible(visible: boolean, context: Gdk.DragContext): void;
    public setLocalOnly(localOnly: boolean): void;
    public setLocation(location: Gio.File): void;
    public setOpenFlags(flags: PlacesOpenFlags): void;
    public setShowConnectToServer(showConnectToServer: boolean): void;
    public setShowDesktop(showDesktop: boolean): void;
    public setShowEnterLocation(showEnterLocation: boolean): void;
    public setShowOtherLocations(showOtherLocations: boolean): void;
    public setShowRecent(showRecent: boolean): void;
    public setShowTrash(showTrash: boolean): void;
  }
  
  interface PlacesSidebarProps extends ScrolledWindowProps, Atk.ImplementorIfaceProps, BuildableProps {
    localOnly: boolean;
    location: Gio.File;
    openFlags: PlacesOpenFlags;
    populateAll: boolean;
    showConnectToServer: boolean;
    showDesktop: boolean;
    showEnterLocation: boolean;
    showOtherLocations: boolean;
    showRecent: boolean;
    showTrash: boolean;
  }
  
  export class Plug extends Window implements Atk.ImplementorIface, Buildable {
    constructor(props?: PlugProps);
    
    embedded: boolean;
    socketWindow: Gdk.Window;
    
    public construct(socketId: xlib.Window): void;
    public constructForDisplay(display: Gdk.Display, socketId: xlib.Window): void;
    public getEmbedded(): boolean;
    public getId(): xlib.Window;
    public getSocketWindow(): Gdk.Window;
    public embedded(): void;
  }
  
  interface PlugProps extends WindowProps, Atk.ImplementorIfaceProps, BuildableProps {
    embedded: boolean;
    socketWindow: Gdk.Window;
  }
  
  export class Popover extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(props?: PopoverProps);
    
    constrainTo: PopoverConstraint;
    modal: boolean;
    pointingTo: Gdk.Rectangle;
    position: PositionType;
    relativeTo: Widget;
    transitionsEnabled: boolean;
    
    public bindModel(model: Gio.MenuModel, actionNamespace: string): void;
    public getConstrainTo(): PopoverConstraint;
    public getDefaultWidget(): Widget;
    public getModal(): boolean;
    public getPointingTo(rect: Gdk.Rectangle): boolean;
    public getPosition(): PositionType;
    public getRelativeTo(): Widget;
    public getTransitionsEnabled(): boolean;
    public popdown(): void;
    public popup(): void;
    public setConstrainTo(constraint: PopoverConstraint): void;
    public setDefaultWidget(widget: Widget): void;
    public setModal(modal: boolean): void;
    public setPointingTo(rect: Gdk.Rectangle): void;
    public setPosition(position: PositionType): void;
    public setRelativeTo(relativeTo: Widget): void;
    public setTransitionsEnabled(transitionsEnabled: boolean): void;
    public closed(): void;
  }
  
  interface PopoverProps extends BinProps, Atk.ImplementorIfaceProps, BuildableProps {
    constrainTo: PopoverConstraint;
    modal: boolean;
    pointingTo: Gdk.Rectangle;
    position: PositionType;
    relativeTo: Widget;
    transitionsEnabled: boolean;
  }
  
  export class PopoverAccessible extends ContainerAccessible implements Atk.Component {
    constructor(props?: PopoverAccessibleProps);
  }
  
  interface PopoverAccessibleProps extends ContainerAccessibleProps, Atk.ComponentProps {
    
  }
  
  export class PopoverMenu extends Popover implements Atk.ImplementorIface, Buildable {
    constructor(props?: PopoverMenuProps);
    
    visibleSubmenu: string;
    
    public openSubmenu(name: string): void;
  }
  
  interface PopoverMenuProps extends PopoverProps, Atk.ImplementorIfaceProps, BuildableProps {
    visibleSubmenu: string;
  }
  
  export class PrintContext extends GObject.Object {
    constructor(props?: PrintContextProps);
    
    public createPangoContext(): Pango.Context;
    public createPangoLayout(): Pango.Layout;
    public getCairoContext(): cairo.Context;
    public getDpiX(): number;
    public getDpiY(): number;
    public getHardMargins(top: number, bottom: number, left: number, right: number): boolean;
    public getHeight(): number;
    public getPageSetup(): PageSetup;
    public getPangoFontmap(): Pango.FontMap;
    public getWidth(): number;
    public setCairoContext(cr: cairo.Context, dpiX: number, dpiY: number): void;
  }
  
  interface PrintContextProps extends GObject.ObjectProps {
    
  }
  
  export class PrintOperation extends GObject.Object implements PrintOperationPreview {
    constructor(props?: PrintOperationProps);
    
    allowAsync: boolean;
    currentPage: number;
    customTabLabel: string;
    defaultPageSetup: PageSetup;
    embedPageSetup: boolean;
    exportFilename: string;
    hasSelection: boolean;
    jobName: string;
    nPages: number;
    nPagesToPrint: number;
    printSettings: PrintSettings;
    showProgress: boolean;
    status: PrintStatus;
    statusString: string;
    supportSelection: boolean;
    trackPrintStatus: boolean;
    unit: Unit;
    useFullPage: boolean;
    
    public cancel(): void;
    public drawPageFinish(): void;
    public getDefaultPageSetup(): PageSetup;
    public getEmbedPageSetup(): boolean;
    public getError(): void;
    public getHasSelection(): boolean;
    public getNPagesToPrint(): number;
    public getPrintSettings(): PrintSettings;
    public getStatus(): PrintStatus;
    public getStatusString(): string;
    public getSupportSelection(): boolean;
    public isFinished(): boolean;
    public run(action: PrintOperationAction, parent: Window): PrintOperationResult;
    public setAllowAsync(allowAsync: boolean): void;
    public setCurrentPage(currentPage: number): void;
    public setCustomTabLabel(label: string): void;
    public setDefaultPageSetup(defaultPageSetup: PageSetup): void;
    public setDeferDrawing(): void;
    public setEmbedPageSetup(embed: boolean): void;
    public setExportFilename(filename: string): void;
    public setHasSelection(hasSelection: boolean): void;
    public setJobName(jobName: string): void;
    public setNPages(nPages: number): void;
    public setPrintSettings(printSettings: PrintSettings): void;
    public setShowProgress(showProgress: boolean): void;
    public setSupportSelection(supportSelection: boolean): void;
    public setTrackPrintStatus(trackStatus: boolean): void;
    public setUnit(unit: Unit): void;
    public setUseFullPage(fullPage: boolean): void;
    public beginPrint(context: PrintContext): void;
    public createCustomWidget(): Widget;
    public customWidgetApply(widget: Widget): void;
    public done(result: PrintOperationResult): void;
    public drawPage(context: PrintContext, pageNr: number): void;
    public endPrint(context: PrintContext): void;
    public paginate(context: PrintContext): boolean;
    public preview(preview: PrintOperationPreview, context: PrintContext, parent: Window): boolean;
    public requestPageSetup(context: PrintContext, pageNr: number, setup: PageSetup): void;
    public statusChanged(): void;
    public updateCustomWidget(widget: Widget, setup: PageSetup, settings: PrintSettings): void;
  }
  
  interface PrintOperationProps extends GObject.ObjectProps, PrintOperationPreviewProps {
    allowAsync: boolean;
    currentPage: number;
    customTabLabel: string;
    defaultPageSetup: PageSetup;
    embedPageSetup: boolean;
    exportFilename: string;
    hasSelection: boolean;
    jobName: string;
    nPages: number;
    nPagesToPrint: number;
    printSettings: PrintSettings;
    showProgress: boolean;
    status: PrintStatus;
    statusString: string;
    supportSelection: boolean;
    trackPrintStatus: boolean;
    unit: Unit;
    useFullPage: boolean;
  }
  
  export class PrintSettings extends GObject.Object {
    constructor(props?: PrintSettingsProps);
    
    public copy(): PrintSettings;
    public foreach(func: PrintSettingsFunc, userData: any): void;
    public get(key: string): string;
    public getBool(key: string): boolean;
    public getCollate(): boolean;
    public getDefaultSource(): string;
    public getDither(): string;
    public getDouble(key: string): number;
    public getDoubleWithDefault(key: string, def: number): number;
    public getDuplex(): PrintDuplex;
    public getFinishings(): string;
    public getInt(key: string): number;
    public getIntWithDefault(key: string, def: number): number;
    public getLength(key: string, unit: Unit): number;
    public getMediaType(): string;
    public getNCopies(): number;
    public getNumberUp(): number;
    public getNumberUpLayout(): NumberUpLayout;
    public getOrientation(): PageOrientation;
    public getOutputBin(): string;
    public getPageRanges(numRanges: number): PageRange[];
    public getPageSet(): PageSet;
    public getPaperHeight(unit: Unit): number;
    public getPaperSize(): PaperSize;
    public getPaperWidth(unit: Unit): number;
    public getPrintPages(): PrintPages;
    public getPrinter(): string;
    public getPrinterLpi(): number;
    public getQuality(): PrintQuality;
    public getResolution(): number;
    public getResolutionX(): number;
    public getResolutionY(): number;
    public getReverse(): boolean;
    public getScale(): number;
    public getUseColor(): boolean;
    public hasKey(key: string): boolean;
    public loadFile(fileName: string): boolean;
    public loadKeyFile(keyFile: GLib.KeyFile, groupName: string): boolean;
    public set(key: string, value: string): void;
    public setBool(key: string, value: boolean): void;
    public setCollate(collate: boolean): void;
    public setDefaultSource(defaultSource: string): void;
    public setDither(dither: string): void;
    public setDouble(key: string, value: number): void;
    public setDuplex(duplex: PrintDuplex): void;
    public setFinishings(finishings: string): void;
    public setInt(key: string, value: number): void;
    public setLength(key: string, value: number, unit: Unit): void;
    public setMediaType(mediaType: string): void;
    public setNCopies(numCopies: number): void;
    public setNumberUp(numberUp: number): void;
    public setNumberUpLayout(numberUpLayout: NumberUpLayout): void;
    public setOrientation(orientation: PageOrientation): void;
    public setOutputBin(outputBin: string): void;
    public setPageRanges(pageRanges: PageRange[], numRanges: number): void;
    public setPageSet(pageSet: PageSet): void;
    public setPaperHeight(height: number, unit: Unit): void;
    public setPaperSize(paperSize: PaperSize): void;
    public setPaperWidth(width: number, unit: Unit): void;
    public setPrintPages(pages: PrintPages): void;
    public setPrinter(printer: string): void;
    public setPrinterLpi(lpi: number): void;
    public setQuality(quality: PrintQuality): void;
    public setResolution(resolution: number): void;
    public setResolutionXy(resolutionX: number, resolutionY: number): void;
    public setReverse(reverse: boolean): void;
    public setScale(scale: number): void;
    public setUseColor(useColor: boolean): void;
    public toFile(fileName: string): boolean;
    public toGvariant(): GLib.Variant;
    public toKeyFile(keyFile: GLib.KeyFile, groupName: string): void;
    public unset(key: string): void;
  }
  
  interface PrintSettingsProps extends GObject.ObjectProps {
    
  }
  
  export class ProgressBar extends Widget implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: ProgressBarProps);
    
    ellipsize: Pango.EllipsizeMode;
    fraction: number;
    inverted: boolean;
    pulseStep: number;
    showText: boolean;
    text: string;
    
    public getEllipsize(): Pango.EllipsizeMode;
    public getFraction(): number;
    public getInverted(): boolean;
    public getPulseStep(): number;
    public getShowText(): boolean;
    public getText(): string;
    public pulse(): void;
    public setEllipsize(mode: Pango.EllipsizeMode): void;
    public setFraction(fraction: number): void;
    public setInverted(inverted: boolean): void;
    public setPulseStep(fraction: number): void;
    public setShowText(showText: boolean): void;
    public setText(text: string): void;
  }
  
  interface ProgressBarProps extends WidgetProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    ellipsize: Pango.EllipsizeMode;
    fraction: number;
    inverted: boolean;
    pulseStep: number;
    showText: boolean;
    text: string;
  }
  
  export class ProgressBarAccessible extends WidgetAccessible implements Atk.Component, Atk.Value {
    constructor(props?: ProgressBarAccessibleProps);
  }
  
  interface ProgressBarAccessibleProps extends WidgetAccessibleProps, Atk.ComponentProps, Atk.ValueProps {
    
  }
  
  export class RadioAction extends ToggleAction implements Buildable {
    constructor(props?: RadioActionProps);
    
    currentValue: number;
    group: RadioAction;
    value: number;
    
    public getCurrentValue(): number;
    public getGroup(): GLib.SList;
    public joinGroup(groupSource: RadioAction): void;
    public setCurrentValue(currentValue: number): void;
    public setGroup(group: GLib.SList): void;
    public changed(current: RadioAction): void;
  }
  
  interface RadioActionProps extends ToggleActionProps, BuildableProps {
    currentValue: number;
    group: RadioAction;
    value: number;
  }
  
  export class RadioButton extends CheckButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(props?: RadioButtonProps);
    
    group: RadioButton;
    
    public getGroup(): GLib.SList;
    public joinGroup(groupSource: RadioButton): void;
    public setGroup(group: GLib.SList): void;
    public groupChanged(): void;
  }
  
  interface RadioButtonProps extends CheckButtonProps, Atk.ImplementorIfaceProps, ActionableProps, ActivatableProps, BuildableProps {
    group: RadioButton;
  }
  
  export class RadioButtonAccessible extends ToggleButtonAccessible implements Atk.Action, Atk.Component, Atk.Image {
    constructor(props?: RadioButtonAccessibleProps);
  }
  
  interface RadioButtonAccessibleProps extends ToggleButtonAccessibleProps, Atk.ActionProps, Atk.ComponentProps, Atk.ImageProps {
    
  }
  
  export class RadioMenuItem extends CheckMenuItem implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(props?: RadioMenuItemProps);
    
    group: RadioMenuItem;
    
    public getGroup(): GLib.SList;
    public joinGroup(groupSource: RadioMenuItem): void;
    public setGroup(group: GLib.SList): void;
    public groupChanged(): void;
  }
  
  interface RadioMenuItemProps extends CheckMenuItemProps, Atk.ImplementorIfaceProps, ActionableProps, ActivatableProps, BuildableProps {
    group: RadioMenuItem;
  }
  
  export class RadioMenuItemAccessible extends CheckMenuItemAccessible implements Atk.Action, Atk.Component, Atk.Selection {
    constructor(props?: RadioMenuItemAccessibleProps);
  }
  
  interface RadioMenuItemAccessibleProps extends CheckMenuItemAccessibleProps, Atk.ActionProps, Atk.ComponentProps, Atk.SelectionProps {
    
  }
  
  export class RadioToolButton extends ToggleToolButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(props?: RadioToolButtonProps);
    
    group: RadioToolButton;
    
    public getGroup(): GLib.SList;
    public setGroup(group: GLib.SList): void;
  }
  
  interface RadioToolButtonProps extends ToggleToolButtonProps, Atk.ImplementorIfaceProps, ActionableProps, ActivatableProps, BuildableProps {
    group: RadioToolButton;
  }
  
  export class Range extends Widget implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: RangeProps);
    
    adjustment: Adjustment;
    fillLevel: number;
    inverted: boolean;
    lowerStepperSensitivity: SensitivityType;
    restrictToFillLevel: boolean;
    roundDigits: number;
    showFillLevel: boolean;
    upperStepperSensitivity: SensitivityType;
    
    public getAdjustment(): Adjustment;
    public getFillLevel(): number;
    public getFlippable(): boolean;
    public getInverted(): boolean;
    public getLowerStepperSensitivity(): SensitivityType;
    public getMinSliderSize(): number;
    public getRangeRect(rangeRect: Gdk.Rectangle): void;
    public getRestrictToFillLevel(): boolean;
    public getRoundDigits(): number;
    public getShowFillLevel(): boolean;
    public getSliderRange(sliderStart: number, sliderEnd: number): void;
    public getSliderSizeFixed(): boolean;
    public getUpperStepperSensitivity(): SensitivityType;
    public getValue(): number;
    public setAdjustment(adjustment: Adjustment): void;
    public setFillLevel(fillLevel: number): void;
    public setFlippable(flippable: boolean): void;
    public setIncrements(step: number, page: number): void;
    public setInverted(setting: boolean): void;
    public setLowerStepperSensitivity(sensitivity: SensitivityType): void;
    public setMinSliderSize(minSize: number): void;
    public setRange(min: number, max: number): void;
    public setRestrictToFillLevel(restrictToFillLevel: boolean): void;
    public setRoundDigits(roundDigits: number): void;
    public setShowFillLevel(showFillLevel: boolean): void;
    public setSliderSizeFixed(sizeFixed: boolean): void;
    public setUpperStepperSensitivity(sensitivity: SensitivityType): void;
    public setValue(value: number): void;
    public adjustBounds(newValue: number): void;
    public changeValue(scroll: ScrollType, newValue: number): boolean;
    public getRangeBorder(border_: Border): void;
    public getRangeSizeRequest(orientation: Orientation, minimum: number, natural: number): void;
    public moveSlider(scroll: ScrollType): void;
    public valueChanged(): void;
  }
  
  interface RangeProps extends WidgetProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    adjustment: Adjustment;
    fillLevel: number;
    inverted: boolean;
    lowerStepperSensitivity: SensitivityType;
    restrictToFillLevel: boolean;
    roundDigits: number;
    showFillLevel: boolean;
    upperStepperSensitivity: SensitivityType;
  }
  
  export class RangeAccessible extends WidgetAccessible implements Atk.Component, Atk.Value {
    constructor(props?: RangeAccessibleProps);
  }
  
  interface RangeAccessibleProps extends WidgetAccessibleProps, Atk.ComponentProps, Atk.ValueProps {
    
  }
  
  export class RcStyle extends GObject.Object {
    constructor(props?: RcStyleProps);
    
    public copy(): RcStyle;
    public createRcStyle(): RcStyle;
    public createStyle(): Style;
    public merge(src: RcStyle): void;
    public parse(settings: Settings, scanner: GLib.Scanner): number;
  }
  
  interface RcStyleProps extends GObject.ObjectProps {
    
  }
  
  export class RecentAction extends Action implements Buildable, RecentChooser {
    constructor(props?: RecentActionProps);
    
    showNumbers: boolean;
    
    public getShowNumbers(): boolean;
    public setShowNumbers(showNumbers: boolean): void;
  }
  
  interface RecentActionProps extends ActionProps, BuildableProps, RecentChooserProps {
    showNumbers: boolean;
  }
  
  export class RecentChooserDialog extends Dialog implements Atk.ImplementorIface, Buildable, RecentChooser {
    constructor(props?: RecentChooserDialogProps);
  }
  
  interface RecentChooserDialogProps extends DialogProps, Atk.ImplementorIfaceProps, BuildableProps, RecentChooserProps {
    
  }
  
  export class RecentChooserMenu extends Menu implements Atk.ImplementorIface, Activatable, Buildable, RecentChooser {
    constructor(props?: RecentChooserMenuProps);
    
    showNumbers: boolean;
    
    public getShowNumbers(): boolean;
    public setShowNumbers(showNumbers: boolean): void;
  }
  
  interface RecentChooserMenuProps extends MenuProps, Atk.ImplementorIfaceProps, ActivatableProps, BuildableProps, RecentChooserProps {
    showNumbers: boolean;
  }
  
  export class RecentChooserWidget extends Box implements Atk.ImplementorIface, Buildable, Orientable, RecentChooser {
    constructor(props?: RecentChooserWidgetProps);
  }
  
  interface RecentChooserWidgetProps extends BoxProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps, RecentChooserProps {
    
  }
  
  export class RecentFilter extends GObject.InitiallyUnowned implements Buildable {
    constructor(props?: RecentFilterProps);
    
    public addAge(days: number): void;
    public addApplication(application: string): void;
    public addCustom(needed: RecentFilterFlags, func: RecentFilterFunc, data: any, dataDestroy: GLib.DestroyNotify): void;
    public addGroup(group: string): void;
    public addMimeType(mimeType: string): void;
    public addPattern(pattern: string): void;
    public addPixbufFormats(): void;
    public filter(filterInfo: RecentFilterInfo): boolean;
    public getName(): string;
    public getNeeded(): RecentFilterFlags;
    public setName(name: string): void;
  }
  
  interface RecentFilterProps extends GObject.InitiallyUnownedProps, BuildableProps {
    
  }
  
  export class RecentManager extends GObject.Object {
    constructor(props?: RecentManagerProps);
    
    filename: string;
    size: number;
    
    public addFull(uri: string, recentData: RecentData): boolean;
    public addItem(uri: string): boolean;
    public getItems(): GLib.List;
    public hasItem(uri: string): boolean;
    public lookupItem(uri: string): RecentInfo;
    public moveItem(uri: string, newUri: string): boolean;
    public purgeItems(): number;
    public removeItem(uri: string): boolean;
    public changed(): void;
    
    public static getDefault(): RecentManager;
  }
  
  interface RecentManagerProps extends GObject.ObjectProps {
    filename: string;
    size: number;
  }
  
  export class RendererCellAccessible extends CellAccessible implements Atk.Action, Atk.Component {
    constructor(props?: RendererCellAccessibleProps);
    
    renderer: CellRenderer;
  }
  
  interface RendererCellAccessibleProps extends CellAccessibleProps, Atk.ActionProps, Atk.ComponentProps {
    renderer: CellRenderer;
  }
  
  export class Revealer extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(props?: RevealerProps);
    
    childRevealed: boolean;
    revealChild: boolean;
    transitionDuration: number;
    transitionType: RevealerTransitionType;
    
    public getChildRevealed(): boolean;
    public getRevealChild(): boolean;
    public getTransitionDuration(): number;
    public getTransitionType(): RevealerTransitionType;
    public setRevealChild(revealChild: boolean): void;
    public setTransitionDuration(duration: number): void;
    public setTransitionType(transition: RevealerTransitionType): void;
  }
  
  interface RevealerProps extends BinProps, Atk.ImplementorIfaceProps, BuildableProps {
    childRevealed: boolean;
    revealChild: boolean;
    transitionDuration: number;
    transitionType: RevealerTransitionType;
  }
  
  export class Scale extends Range implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: ScaleProps);
    
    digits: number;
    drawValue: boolean;
    hasOrigin: boolean;
    valuePos: PositionType;
    
    public addMark(value: number, position: PositionType, markup: string): void;
    public clearMarks(): void;
    public getDigits(): number;
    public getDrawValue(): boolean;
    public getHasOrigin(): boolean;
    public getLayout(): Pango.Layout;
    public getLayoutOffsets(x: number, _y: number): void;
    public getValuePos(): PositionType;
    public setDigits(digits: number): void;
    public setDrawValue(drawValue: boolean): void;
    public setHasOrigin(hasOrigin: boolean): void;
    public setValuePos(pos: PositionType): void;
    public drawValue(): void;
    public formatValue(value: number): string;
  }
  
  interface ScaleProps extends RangeProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    digits: number;
    drawValue: boolean;
    hasOrigin: boolean;
    valuePos: PositionType;
  }
  
  export class ScaleAccessible extends RangeAccessible implements Atk.Component, Atk.Value {
    constructor(props?: ScaleAccessibleProps);
  }
  
  interface ScaleAccessibleProps extends RangeAccessibleProps, Atk.ComponentProps, Atk.ValueProps {
    
  }
  
  export class ScaleButton extends Button implements Atk.ImplementorIface, Actionable, Activatable, Buildable, Orientable {
    constructor(props?: ScaleButtonProps);
    
    adjustment: Adjustment;
    icons: string[];
    size: IconSize;
    value: number;
    
    public getAdjustment(): Adjustment;
    public getMinusButton(): Button;
    public getPlusButton(): Button;
    public getPopup(): Widget;
    public getValue(): number;
    public setAdjustment(adjustment: Adjustment): void;
    public setIcons(icons: string[]): void;
    public setValue(value: number): void;
    public valueChanged(value: number): void;
  }
  
  interface ScaleButtonProps extends ButtonProps, Atk.ImplementorIfaceProps, ActionableProps, ActivatableProps, BuildableProps, OrientableProps {
    adjustment: Adjustment;
    icons: string[];
    size: IconSize;
    value: number;
  }
  
  export class ScaleButtonAccessible extends ButtonAccessible implements Atk.Action, Atk.Component, Atk.Image, Atk.Value {
    constructor(props?: ScaleButtonAccessibleProps);
  }
  
  interface ScaleButtonAccessibleProps extends ButtonAccessibleProps, Atk.ActionProps, Atk.ComponentProps, Atk.ImageProps, Atk.ValueProps {
    
  }
  
  export class Scrollbar extends Range implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: ScrollbarProps);
  }
  
  interface ScrollbarProps extends RangeProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    
  }
  
  export class ScrolledWindow extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(props?: ScrolledWindowProps);
    
    hadjustment: Adjustment;
    hscrollbarPolicy: PolicyType;
    kineticScrolling: boolean;
    maxContentHeight: number;
    maxContentWidth: number;
    minContentHeight: number;
    minContentWidth: number;
    overlayScrolling: boolean;
    propagateNaturalHeight: boolean;
    propagateNaturalWidth: boolean;
    shadowType: ShadowType;
    vadjustment: Adjustment;
    vscrollbarPolicy: PolicyType;
    windowPlacement: CornerType;
    windowPlacementSet: boolean;
    
    public addWithViewport(child: Widget): void;
    public getCaptureButtonPress(): boolean;
    public getHadjustment(): Adjustment;
    public getHscrollbar(): Widget;
    public getKineticScrolling(): boolean;
    public getMaxContentHeight(): number;
    public getMaxContentWidth(): number;
    public getMinContentHeight(): number;
    public getMinContentWidth(): number;
    public getOverlayScrolling(): boolean;
    public getPlacement(): CornerType;
    public getPolicy(hscrollbarPolicy: PolicyType, vscrollbarPolicy: PolicyType): void;
    public getPropagateNaturalHeight(): boolean;
    public getPropagateNaturalWidth(): boolean;
    public getShadowType(): ShadowType;
    public getVadjustment(): Adjustment;
    public getVscrollbar(): Widget;
    public setCaptureButtonPress(captureButtonPress: boolean): void;
    public setHadjustment(hadjustment: Adjustment): void;
    public setKineticScrolling(kineticScrolling: boolean): void;
    public setMaxContentHeight(height: number): void;
    public setMaxContentWidth(width: number): void;
    public setMinContentHeight(height: number): void;
    public setMinContentWidth(width: number): void;
    public setOverlayScrolling(overlayScrolling: boolean): void;
    public setPlacement(windowPlacement: CornerType): void;
    public setPolicy(hscrollbarPolicy: PolicyType, vscrollbarPolicy: PolicyType): void;
    public setPropagateNaturalHeight(propagate: boolean): void;
    public setPropagateNaturalWidth(propagate: boolean): void;
    public setShadowType(type: ShadowType): void;
    public setVadjustment(vadjustment: Adjustment): void;
    public unsetPlacement(): void;
    public moveFocusOut(direction: DirectionType): void;
    public scrollChild(scroll: ScrollType, horizontal: boolean): boolean;
  }
  
  interface ScrolledWindowProps extends BinProps, Atk.ImplementorIfaceProps, BuildableProps {
    hadjustment: Adjustment;
    hscrollbarPolicy: PolicyType;
    kineticScrolling: boolean;
    maxContentHeight: number;
    maxContentWidth: number;
    minContentHeight: number;
    minContentWidth: number;
    overlayScrolling: boolean;
    propagateNaturalHeight: boolean;
    propagateNaturalWidth: boolean;
    shadowType: ShadowType;
    vadjustment: Adjustment;
    vscrollbarPolicy: PolicyType;
    windowPlacement: CornerType;
    windowPlacementSet: boolean;
  }
  
  export class ScrolledWindowAccessible extends ContainerAccessible implements Atk.Component {
    constructor(props?: ScrolledWindowAccessibleProps);
  }
  
  interface ScrolledWindowAccessibleProps extends ContainerAccessibleProps, Atk.ComponentProps {
    
  }
  
  export class SearchBar extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(props?: SearchBarProps);
    
    searchModeEnabled: boolean;
    showCloseButton: boolean;
    
    public connectEntry(entry: Entry): void;
    public getSearchMode(): boolean;
    public getShowCloseButton(): boolean;
    public handleEvent(event: Gdk.Event): boolean;
    public setSearchMode(searchMode: boolean): void;
    public setShowCloseButton(visible: boolean): void;
  }
  
  interface SearchBarProps extends BinProps, Atk.ImplementorIfaceProps, BuildableProps {
    searchModeEnabled: boolean;
    showCloseButton: boolean;
  }
  
  export class SearchEntry extends Entry implements Atk.ImplementorIface, Buildable, CellEditable, Editable {
    constructor(props?: SearchEntryProps);
    
    public handleEvent(event: Gdk.Event): boolean;
    public nextMatch(): void;
    public previousMatch(): void;
    public searchChanged(): void;
    public stopSearch(): void;
  }
  
  interface SearchEntryProps extends EntryProps, Atk.ImplementorIfaceProps, BuildableProps, CellEditableProps, EditableProps {
    
  }
  
  export class Separator extends Widget implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: SeparatorProps);
  }
  
  interface SeparatorProps extends WidgetProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    
  }
  
  export class SeparatorMenuItem extends MenuItem implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(props?: SeparatorMenuItemProps);
  }
  
  interface SeparatorMenuItemProps extends MenuItemProps, Atk.ImplementorIfaceProps, ActionableProps, ActivatableProps, BuildableProps {
    
  }
  
  export class SeparatorToolItem extends ToolItem implements Atk.ImplementorIface, Activatable, Buildable {
    constructor(props?: SeparatorToolItemProps);
    
    draw: boolean;
    
    public getDraw(): boolean;
    public setDraw(draw: boolean): void;
  }
  
  interface SeparatorToolItemProps extends ToolItemProps, Atk.ImplementorIfaceProps, ActivatableProps, BuildableProps {
    draw: boolean;
  }
  
  export class Settings extends GObject.Object implements StyleProvider {
    constructor(props?: SettingsProps);
    
    colorHash: GLib.HashTable;
    gtkAlternativeButtonOrder: boolean;
    gtkAlternativeSortArrows: boolean;
    gtkApplicationPreferDarkTheme: boolean;
    gtkAutoMnemonics: boolean;
    gtkButtonImages: boolean;
    gtkCanChangeAccels: boolean;
    gtkColorPalette: string;
    gtkColorScheme: string;
    gtkCursorBlink: boolean;
    gtkCursorBlinkTime: number;
    gtkCursorBlinkTimeout: number;
    gtkCursorThemeName: string;
    gtkCursorThemeSize: number;
    gtkDecorationLayout: string;
    gtkDialogsUseHeader: boolean;
    gtkDndDragThreshold: number;
    gtkDoubleClickDistance: number;
    gtkDoubleClickTime: number;
    gtkEnableAccels: boolean;
    gtkEnableAnimations: boolean;
    gtkEnableEventSounds: boolean;
    gtkEnableInputFeedbackSounds: boolean;
    gtkEnableMnemonics: boolean;
    gtkEnablePrimaryPaste: boolean;
    gtkEnableTooltips: boolean;
    gtkEntryPasswordHintTimeout: number;
    gtkEntrySelectOnFocus: boolean;
    gtkErrorBell: boolean;
    gtkFallbackIconTheme: string;
    gtkFileChooserBackend: string;
    gtkFontName: string;
    gtkFontconfigTimestamp: number;
    gtkIconSizes: string;
    gtkIconThemeName: string;
    gtkImModule: string;
    gtkImPreeditStyle: IMPreeditStyle;
    gtkImStatusStyle: IMStatusStyle;
    gtkKeyThemeName: string;
    gtkKeynavCursorOnly: boolean;
    gtkKeynavUseCaret: boolean;
    gtkKeynavWrapAround: boolean;
    gtkLabelSelectOnFocus: boolean;
    gtkLongPressTime: number;
    gtkMenuBarAccel: string;
    gtkMenuBarPopupDelay: number;
    gtkMenuImages: boolean;
    gtkMenuPopdownDelay: number;
    gtkMenuPopupDelay: number;
    gtkModules: string;
    gtkPrimaryButtonWarpsSlider: boolean;
    gtkPrintBackends: string;
    gtkPrintPreviewCommand: string;
    gtkRecentFilesEnabled: boolean;
    gtkRecentFilesLimit: number;
    gtkRecentFilesMaxAge: number;
    gtkScrolledWindowPlacement: CornerType;
    gtkShellShowsAppMenu: boolean;
    gtkShellShowsDesktop: boolean;
    gtkShellShowsMenubar: boolean;
    gtkShowInputMethodMenu: boolean;
    gtkShowUnicodeMenu: boolean;
    gtkSoundThemeName: string;
    gtkSplitCursor: boolean;
    gtkThemeName: string;
    gtkTimeoutExpand: number;
    gtkTimeoutInitial: number;
    gtkTimeoutRepeat: number;
    gtkTitlebarDoubleClick: string;
    gtkTitlebarMiddleClick: string;
    gtkTitlebarRightClick: string;
    gtkToolbarIconSize: IconSize;
    gtkToolbarStyle: ToolbarStyle;
    gtkTooltipBrowseModeTimeout: number;
    gtkTooltipBrowseTimeout: number;
    gtkTooltipTimeout: number;
    gtkTouchscreenMode: boolean;
    gtkVisibleFocus: PolicyType;
    gtkXftAntialias: number;
    gtkXftDpi: number;
    gtkXftHinting: number;
    gtkXftHintstyle: string;
    gtkXftRgba: string;
    
    public resetProperty(name: string): void;
    public setDoubleProperty(name: string, vDouble: number, origin: string): void;
    public setLongProperty(name: string, vLong: number, origin: string): void;
    public setPropertyValue(name: string, svalue: SettingsValue): void;
    public setStringProperty(name: string, vString: string, origin: string): void;
    
    public static getDefault(): Settings;
    public static getForScreen(screen: Gdk.Screen): Settings;
    public static installProperty(pspec: GObject.ParamSpec): void;
    public static installPropertyParser(pspec: GObject.ParamSpec, parser: RcPropertyParser): void;
  }
  
  interface SettingsProps extends GObject.ObjectProps, StyleProviderProps {
    colorHash: GLib.HashTable;
    gtkAlternativeButtonOrder: boolean;
    gtkAlternativeSortArrows: boolean;
    gtkApplicationPreferDarkTheme: boolean;
    gtkAutoMnemonics: boolean;
    gtkButtonImages: boolean;
    gtkCanChangeAccels: boolean;
    gtkColorPalette: string;
    gtkColorScheme: string;
    gtkCursorBlink: boolean;
    gtkCursorBlinkTime: number;
    gtkCursorBlinkTimeout: number;
    gtkCursorThemeName: string;
    gtkCursorThemeSize: number;
    gtkDecorationLayout: string;
    gtkDialogsUseHeader: boolean;
    gtkDndDragThreshold: number;
    gtkDoubleClickDistance: number;
    gtkDoubleClickTime: number;
    gtkEnableAccels: boolean;
    gtkEnableAnimations: boolean;
    gtkEnableEventSounds: boolean;
    gtkEnableInputFeedbackSounds: boolean;
    gtkEnableMnemonics: boolean;
    gtkEnablePrimaryPaste: boolean;
    gtkEnableTooltips: boolean;
    gtkEntryPasswordHintTimeout: number;
    gtkEntrySelectOnFocus: boolean;
    gtkErrorBell: boolean;
    gtkFallbackIconTheme: string;
    gtkFileChooserBackend: string;
    gtkFontName: string;
    gtkFontconfigTimestamp: number;
    gtkIconSizes: string;
    gtkIconThemeName: string;
    gtkImModule: string;
    gtkImPreeditStyle: IMPreeditStyle;
    gtkImStatusStyle: IMStatusStyle;
    gtkKeyThemeName: string;
    gtkKeynavCursorOnly: boolean;
    gtkKeynavUseCaret: boolean;
    gtkKeynavWrapAround: boolean;
    gtkLabelSelectOnFocus: boolean;
    gtkLongPressTime: number;
    gtkMenuBarAccel: string;
    gtkMenuBarPopupDelay: number;
    gtkMenuImages: boolean;
    gtkMenuPopdownDelay: number;
    gtkMenuPopupDelay: number;
    gtkModules: string;
    gtkPrimaryButtonWarpsSlider: boolean;
    gtkPrintBackends: string;
    gtkPrintPreviewCommand: string;
    gtkRecentFilesEnabled: boolean;
    gtkRecentFilesLimit: number;
    gtkRecentFilesMaxAge: number;
    gtkScrolledWindowPlacement: CornerType;
    gtkShellShowsAppMenu: boolean;
    gtkShellShowsDesktop: boolean;
    gtkShellShowsMenubar: boolean;
    gtkShowInputMethodMenu: boolean;
    gtkShowUnicodeMenu: boolean;
    gtkSoundThemeName: string;
    gtkSplitCursor: boolean;
    gtkThemeName: string;
    gtkTimeoutExpand: number;
    gtkTimeoutInitial: number;
    gtkTimeoutRepeat: number;
    gtkTitlebarDoubleClick: string;
    gtkTitlebarMiddleClick: string;
    gtkTitlebarRightClick: string;
    gtkToolbarIconSize: IconSize;
    gtkToolbarStyle: ToolbarStyle;
    gtkTooltipBrowseModeTimeout: number;
    gtkTooltipBrowseTimeout: number;
    gtkTooltipTimeout: number;
    gtkTouchscreenMode: boolean;
    gtkVisibleFocus: PolicyType;
    gtkXftAntialias: number;
    gtkXftDpi: number;
    gtkXftHinting: number;
    gtkXftHintstyle: string;
    gtkXftRgba: string;
  }
  
  export class ShortcutLabel extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: ShortcutLabelProps);
    
    accelerator: string;
    disabledText: string;
    
    public getAccelerator(): string;
    public getDisabledText(): string;
    public setAccelerator(accelerator: string): void;
    public setDisabledText(disabledText: string): void;
  }
  
  interface ShortcutLabelProps extends BoxProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    accelerator: string;
    disabledText: string;
  }
  
  export class ShortcutsGroup extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: ShortcutsGroupProps);
    
    accelSizeGroup: SizeGroup;
    height: number;
    title: string;
    titleSizeGroup: SizeGroup;
    view: string;
  }
  
  interface ShortcutsGroupProps extends BoxProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    accelSizeGroup: SizeGroup;
    height: number;
    title: string;
    titleSizeGroup: SizeGroup;
    view: string;
  }
  
  export class ShortcutsSection extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: ShortcutsSectionProps);
    
    maxHeight: number;
    sectionName: string;
    title: string;
    viewName: string;
  }
  
  interface ShortcutsSectionProps extends BoxProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    maxHeight: number;
    sectionName: string;
    title: string;
    viewName: string;
  }
  
  export class ShortcutsShortcut extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: ShortcutsShortcutProps);
    
    accelSizeGroup: SizeGroup;
    accelerator: string;
    actionName: string;
    direction: TextDirection;
    icon: Gio.Icon;
    iconSet: boolean;
    shortcutType: ShortcutType;
    subtitle: string;
    subtitleSet: boolean;
    title: string;
    titleSizeGroup: SizeGroup;
  }
  
  interface ShortcutsShortcutProps extends BoxProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    accelSizeGroup: SizeGroup;
    accelerator: string;
    actionName: string;
    direction: TextDirection;
    icon: Gio.Icon;
    iconSet: boolean;
    shortcutType: ShortcutType;
    subtitle: string;
    subtitleSet: boolean;
    title: string;
    titleSizeGroup: SizeGroup;
  }
  
  export class ShortcutsWindow extends Window implements Atk.ImplementorIface, Buildable {
    constructor(props?: ShortcutsWindowProps);
    
    sectionName: string;
    viewName: string;
    
    public close(): void;
    public search(): void;
  }
  
  interface ShortcutsWindowProps extends WindowProps, Atk.ImplementorIfaceProps, BuildableProps {
    sectionName: string;
    viewName: string;
  }
  
  export class SizeGroup extends GObject.Object implements Buildable {
    constructor(props?: SizeGroupProps);
    
    ignoreHidden: boolean;
    mode: SizeGroupMode;
    
    public addWidget(widget: Widget): void;
    public getIgnoreHidden(): boolean;
    public getMode(): SizeGroupMode;
    public getWidgets(): GLib.SList;
    public removeWidget(widget: Widget): void;
    public setIgnoreHidden(ignoreHidden: boolean): void;
    public setMode(mode: SizeGroupMode): void;
  }
  
  interface SizeGroupProps extends GObject.ObjectProps, BuildableProps {
    ignoreHidden: boolean;
    mode: SizeGroupMode;
  }
  
  export class Socket extends Container implements Atk.ImplementorIface, Buildable {
    constructor(props?: SocketProps);
    
    public addId(window: xlib.Window): void;
    public getId(): xlib.Window;
    public getPlugWindow(): Gdk.Window;
    public plugAdded(): void;
    public plugRemoved(): boolean;
  }
  
  interface SocketProps extends ContainerProps, Atk.ImplementorIfaceProps, BuildableProps {
    
  }
  
  export class SpinButton extends Entry implements Atk.ImplementorIface, Buildable, CellEditable, Editable, Orientable {
    constructor(props?: SpinButtonProps);
    
    adjustment: Adjustment;
    climbRate: number;
    digits: number;
    numeric: boolean;
    snapToTicks: boolean;
    updatePolicy: SpinButtonUpdatePolicy;
    value: number;
    wrap: boolean;
    
    public configure(adjustment: Adjustment, climbRate: number, digits: number): void;
    public getAdjustment(): Adjustment;
    public getDigits(): number;
    public getIncrements(step: number, page: number): void;
    public getNumeric(): boolean;
    public getRange(min: number, max: number): void;
    public getSnapToTicks(): boolean;
    public getUpdatePolicy(): SpinButtonUpdatePolicy;
    public getValue(): number;
    public getValueAsInt(): number;
    public getWrap(): boolean;
    public setAdjustment(adjustment: Adjustment): void;
    public setDigits(digits: number): void;
    public setIncrements(step: number, page: number): void;
    public setNumeric(numeric: boolean): void;
    public setRange(min: number, max: number): void;
    public setSnapToTicks(snapToTicks: boolean): void;
    public setUpdatePolicy(policy: SpinButtonUpdatePolicy): void;
    public setValue(value: number): void;
    public setWrap(wrap: boolean): void;
    public spin(direction: SpinType, increment: number): void;
    public update(): void;
    public changeValue(scroll: ScrollType): void;
    public input(newValue: number): number;
    public output(): number;
    public valueChanged(): void;
    public wrapped(): void;
  }
  
  interface SpinButtonProps extends EntryProps, Atk.ImplementorIfaceProps, BuildableProps, CellEditableProps, EditableProps, OrientableProps {
    adjustment: Adjustment;
    climbRate: number;
    digits: number;
    numeric: boolean;
    snapToTicks: boolean;
    updatePolicy: SpinButtonUpdatePolicy;
    value: number;
    wrap: boolean;
  }
  
  export class SpinButtonAccessible extends EntryAccessible implements Atk.Action, Atk.Component, Atk.EditableText, Atk.Text, Atk.Value {
    constructor(props?: SpinButtonAccessibleProps);
  }
  
  interface SpinButtonAccessibleProps extends EntryAccessibleProps, Atk.ActionProps, Atk.ComponentProps, Atk.EditableTextProps, Atk.TextProps, Atk.ValueProps {
    
  }
  
  export class Spinner extends Widget implements Atk.ImplementorIface, Buildable {
    constructor(props?: SpinnerProps);
    
    active: boolean;
    
    public start(): void;
    public stop(): void;
  }
  
  interface SpinnerProps extends WidgetProps, Atk.ImplementorIfaceProps, BuildableProps {
    active: boolean;
  }
  
  export class SpinnerAccessible extends WidgetAccessible implements Atk.Component, Atk.Image {
    constructor(props?: SpinnerAccessibleProps);
  }
  
  interface SpinnerAccessibleProps extends WidgetAccessibleProps, Atk.ComponentProps, Atk.ImageProps {
    
  }
  
  export class Stack extends Container implements Atk.ImplementorIface, Buildable {
    constructor(props?: StackProps);
    
    hhomogeneous: boolean;
    homogeneous: boolean;
    interpolateSize: boolean;
    transitionDuration: number;
    transitionRunning: boolean;
    transitionType: StackTransitionType;
    vhomogeneous: boolean;
    visibleChild: Widget;
    visibleChildName: string;
    
    public addNamed(child: Widget, name: string): void;
    public addTitled(child: Widget, name: string, title: string): void;
    public getChildByName(name: string): Widget;
    public getHhomogeneous(): boolean;
    public getHomogeneous(): boolean;
    public getInterpolateSize(): boolean;
    public getTransitionDuration(): number;
    public getTransitionRunning(): boolean;
    public getTransitionType(): StackTransitionType;
    public getVhomogeneous(): boolean;
    public getVisibleChild(): Widget;
    public getVisibleChildName(): string;
    public setHhomogeneous(hhomogeneous: boolean): void;
    public setHomogeneous(homogeneous: boolean): void;
    public setInterpolateSize(interpolateSize: boolean): void;
    public setTransitionDuration(duration: number): void;
    public setTransitionType(transition: StackTransitionType): void;
    public setVhomogeneous(vhomogeneous: boolean): void;
    public setVisibleChild(child: Widget): void;
    public setVisibleChildFull(name: string, transition: StackTransitionType): void;
    public setVisibleChildName(name: string): void;
  }
  
  interface StackProps extends ContainerProps, Atk.ImplementorIfaceProps, BuildableProps {
    hhomogeneous: boolean;
    homogeneous: boolean;
    interpolateSize: boolean;
    transitionDuration: number;
    transitionRunning: boolean;
    transitionType: StackTransitionType;
    vhomogeneous: boolean;
    visibleChild: Widget;
    visibleChildName: string;
  }
  
  export class StackAccessible extends ContainerAccessible implements Atk.Component {
    constructor(props?: StackAccessibleProps);
  }
  
  interface StackAccessibleProps extends ContainerAccessibleProps, Atk.ComponentProps {
    
  }
  
  export class StackSidebar extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(props?: StackSidebarProps);
    
    stack: Stack;
    
    public getStack(): Stack;
    public setStack(stack: Stack): void;
  }
  
  interface StackSidebarProps extends BinProps, Atk.ImplementorIfaceProps, BuildableProps {
    stack: Stack;
  }
  
  export class StackSwitcher extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: StackSwitcherProps);
    
    iconSize: number;
    stack: Stack;
    
    public getStack(): Stack;
    public setStack(stack: Stack): void;
  }
  
  interface StackSwitcherProps extends BoxProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    iconSize: number;
    stack: Stack;
  }
  
  export class StatusIcon extends GObject.Object {
    constructor(props?: StatusIconProps);
    
    embedded: boolean;
    file: string;
    gicon: Gio.Icon;
    hasTooltip: boolean;
    iconName: string;
    orientation: Orientation;
    pixbuf: GdkPixbuf.Pixbuf;
    screen: Gdk.Screen;
    size: number;
    stock: string;
    storageType: ImageType;
    title: string;
    tooltipMarkup: string;
    tooltipText: string;
    visible: boolean;
    
    public getGeometry(screen: Gdk.Screen, area: Gdk.Rectangle, orientation: Orientation): boolean;
    public getGicon(): Gio.Icon;
    public getHasTooltip(): boolean;
    public getIconName(): string;
    public getPixbuf(): GdkPixbuf.Pixbuf;
    public getScreen(): Gdk.Screen;
    public getSize(): number;
    public getStock(): string;
    public getStorageType(): ImageType;
    public getTitle(): string;
    public getTooltipMarkup(): string;
    public getTooltipText(): string;
    public getVisible(): boolean;
    public getX11WindowId(): number;
    public isEmbedded(): boolean;
    public setFromFile(filename: string): void;
    public setFromGicon(icon: Gio.Icon): void;
    public setFromIconName(iconName: string): void;
    public setFromPixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
    public setFromStock(stockId: string): void;
    public setHasTooltip(hasTooltip: boolean): void;
    public setName(name: string): void;
    public setScreen(screen: Gdk.Screen): void;
    public setTitle(title: string): void;
    public setTooltipMarkup(markup: string): void;
    public setTooltipText(text: string): void;
    public setVisible(visible: boolean): void;
    public activate(): void;
    public buttonPressEvent(event: Gdk.EventButton): boolean;
    public buttonReleaseEvent(event: Gdk.EventButton): boolean;
    public popupMenu(button: number, activateTime: number): void;
    public queryTooltip(x: number, _y: number, keyboardMode: boolean, tooltip: Tooltip): boolean;
    public scrollEvent(event: Gdk.EventScroll): boolean;
    public sizeChanged(size: number): boolean;
    
    public static positionMenu(menu: Menu, x: number, _y: number, pushIn: boolean, userData: StatusIcon): void;
  }
  
  interface StatusIconProps extends GObject.ObjectProps {
    embedded: boolean;
    file: string;
    gicon: Gio.Icon;
    hasTooltip: boolean;
    iconName: string;
    orientation: Orientation;
    pixbuf: GdkPixbuf.Pixbuf;
    screen: Gdk.Screen;
    size: number;
    stock: string;
    storageType: ImageType;
    title: string;
    tooltipMarkup: string;
    tooltipText: string;
    visible: boolean;
  }
  
  export class Statusbar extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: StatusbarProps);
    
    public getContextId(contextDescription: string): number;
    public getMessageArea(): Box;
    public pop(contextId: number): void;
    public push(contextId: number, text: string): number;
    public remove(contextId: number, messageId: number): void;
    public removeAll(contextId: number): void;
    public textPopped(contextId: number, text: string): void;
    public textPushed(contextId: number, text: string): void;
  }
  
  interface StatusbarProps extends BoxProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    
  }
  
  export class StatusbarAccessible extends ContainerAccessible implements Atk.Component {
    constructor(props?: StatusbarAccessibleProps);
  }
  
  interface StatusbarAccessibleProps extends ContainerAccessibleProps, Atk.ComponentProps {
    
  }
  
  export class Style extends GObject.Object {
    constructor(props?: StyleProps);
    
    context: StyleContext;
    
    public applyDefaultBackground(cr: cairo.Context, window: Gdk.Window, stateType: StateType, x: number, _y: number, width: number, height: number): void;
    public attach(window: Gdk.Window): Style;
    public copy(): Style;
    public detach(): void;
    public get(widgetType: GObject.Type, firstPropertyName: string, ...params: any[]): void;
    public getStyleProperty(widgetType: GObject.Type, propertyName: string, value: GObject.Value): void;
    public getValist(widgetType: GObject.Type, firstPropertyName: string, varArgs: any[]): void;
    public hasContext(): boolean;
    public lookupColor(colorName: string, color: Gdk.Color): boolean;
    public lookupIconSet(stockId: string): IconSet;
    public renderIcon(source: IconSource, direction: TextDirection, state: StateType, size: number, widget: Widget, detail: string): GdkPixbuf.Pixbuf;
    public setBackground(window: Gdk.Window, stateType: StateType): void;
    public clone(): Style;
    public drawArrow(cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, arrowType: ArrowType, fill: boolean, x: number, _y: number, width: number, height: number): void;
    public drawBox(cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number): void;
    public drawBoxGap(cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number, gapSide: PositionType, gapX: number, gapWidth: number): void;
    public drawCheck(cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number): void;
    public drawDiamond(cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number): void;
    public drawExpander(cr: cairo.Context, stateType: StateType, widget: Widget, detail: string, x: number, _y: number, expanderStyle: ExpanderStyle): void;
    public drawExtension(cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number, gapSide: PositionType): void;
    public drawFlatBox(cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number): void;
    public drawFocus(cr: cairo.Context, stateType: StateType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number): void;
    public drawHandle(cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number, orientation: Orientation): void;
    public drawHline(cr: cairo.Context, stateType: StateType, widget: Widget, detail: string, x1: number, x2: number, _y: number): void;
    public drawLayout(cr: cairo.Context, stateType: StateType, useText: boolean, widget: Widget, detail: string, x: number, _y: number, layout: Pango.Layout): void;
    public drawOption(cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number): void;
    public drawResizeGrip(cr: cairo.Context, stateType: StateType, widget: Widget, detail: string, edge: Gdk.WindowEdge, x: number, _y: number, width: number, height: number): void;
    public drawShadow(cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number): void;
    public drawShadowGap(cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number, gapSide: PositionType, gapX: number, gapWidth: number): void;
    public drawSlider(cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number, orientation: Orientation): void;
    public drawSpinner(cr: cairo.Context, stateType: StateType, widget: Widget, detail: string, step: number, x: number, _y: number, width: number, height: number): void;
    public drawTab(cr: cairo.Context, stateType: StateType, shadowType: ShadowType, widget: Widget, detail: string, x: number, _y: number, width: number, height: number): void;
    public drawVline(cr: cairo.Context, stateType: StateType, widget: Widget, detail: string, y1_: number, y2_: number, x: number): void;
    public initFromRc(rcStyle: RcStyle): void;
    public realize(): void;
    public unrealize(): void;
  }
  
  interface StyleProps extends GObject.ObjectProps {
    context: StyleContext;
  }
  
  export class StyleContext extends GObject.Object {
    constructor(props?: StyleContextProps);
    
    direction: TextDirection;
    paintClock: Gdk.FrameClock;
    parent: StyleContext;
    screen: Gdk.Screen;
    
    public addClass(className: string): void;
    public addProvider(provider: StyleProvider, priority: number): void;
    public addRegion(regionName: string, flags: RegionFlags): void;
    public cancelAnimations(regionId: any): void;
    public get(state: StateFlags, ...params: any[]): void;
    public getBackgroundColor(state: StateFlags, color: Gdk.RGBA): void;
    public getBorder(state: StateFlags, border: Border): void;
    public getBorderColor(state: StateFlags, color: Gdk.RGBA): void;
    public getColor(state: StateFlags, color: Gdk.RGBA): void;
    public getDirection(): TextDirection;
    public getFont(state: StateFlags): Pango.FontDescription;
    public getFrameClock(): Gdk.FrameClock;
    public getJunctionSides(): JunctionSides;
    public getMargin(state: StateFlags, margin: Border): void;
    public getPadding(state: StateFlags, padding: Border): void;
    public getParent(): StyleContext;
    public getPath(): WidgetPath;
    public getProperty(property: string, state: StateFlags, value: GObject.Value): void;
    public getScale(): number;
    public getScreen(): Gdk.Screen;
    public getSection(property: string): CssSection;
    public getState(): StateFlags;
    public getStyle(...params: any[]): void;
    public getStyleProperty(propertyName: string, value: GObject.Value): void;
    public getStyleValist(args: any[]): void;
    public getValist(state: StateFlags, args: any[]): void;
    public hasClass(className: string): boolean;
    public hasRegion(regionName: string, flagsReturn: RegionFlags): boolean;
    public invalidate(): void;
    public listClasses(): GLib.List;
    public listRegions(): GLib.List;
    public lookupColor(colorName: string, color: Gdk.RGBA): boolean;
    public lookupIconSet(stockId: string): IconSet;
    public notifyStateChange(window: Gdk.Window, regionId: any, state: StateType, stateValue: boolean): void;
    public popAnimatableRegion(): void;
    public pushAnimatableRegion(regionId: any): void;
    public removeClass(className: string): void;
    public removeProvider(provider: StyleProvider): void;
    public removeRegion(regionName: string): void;
    public restore(): void;
    public save(): void;
    public scrollAnimations(window: Gdk.Window, dx: number, dy: number): void;
    public setBackground(window: Gdk.Window): void;
    public setDirection(direction: TextDirection): void;
    public setFrameClock(frameClock: Gdk.FrameClock): void;
    public setJunctionSides(sides: JunctionSides): void;
    public setParent(parent: StyleContext): void;
    public setPath(path: WidgetPath): void;
    public setScale(scale: number): void;
    public setScreen(screen: Gdk.Screen): void;
    public setState(flags: StateFlags): void;
    public stateIsRunning(state: StateType, progress: number): boolean;
    public toString(flags: StyleContextPrintFlags): string;
    public changed(): void;
    
    public static addProviderForScreen(screen: Gdk.Screen, provider: StyleProvider, priority: number): void;
    public static removeProviderForScreen(screen: Gdk.Screen, provider: StyleProvider): void;
    public static resetWidgets(screen: Gdk.Screen): void;
  }
  
  interface StyleContextProps extends GObject.ObjectProps {
    direction: TextDirection;
    paintClock: Gdk.FrameClock;
    parent: StyleContext;
    screen: Gdk.Screen;
  }
  
  export class StyleProperties extends GObject.Object implements StyleProvider {
    constructor(props?: StylePropertiesProps);
    
    public clear(): void;
    public get(state: StateFlags, ...params: any[]): void;
    public getProperty(property: string, state: StateFlags, value: GObject.Value): boolean;
    public getValist(state: StateFlags, args: any[]): void;
    public lookupColor(name: string): SymbolicColor;
    public mapColor(name: string, color: SymbolicColor): void;
    public merge(propsToMerge: StyleProperties, replace: boolean): void;
    public set(state: StateFlags, ...params: any[]): void;
    public setProperty(property: string, state: StateFlags, value: GObject.Value): void;
    public setValist(state: StateFlags, args: any[]): void;
    public unsetProperty(property: string, state: StateFlags): void;
    
    public static lookupProperty(propertyName: string, parseFunc: StylePropertyParser, pspec: GObject.ParamSpec): boolean;
    public static registerProperty(parseFunc: StylePropertyParser, pspec: GObject.ParamSpec): void;
  }
  
  interface StylePropertiesProps extends GObject.ObjectProps, StyleProviderProps {
    
  }
  
  export class Switch extends Widget implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(props?: SwitchProps);
    
    active: boolean;
    state: boolean;
    
    public getActive(): boolean;
    public getState(): boolean;
    public setActive(isActive: boolean): void;
    public setState(state: boolean): void;
    public activate(): void;
    public stateSet(state: boolean): boolean;
  }
  
  interface SwitchProps extends WidgetProps, Atk.ImplementorIfaceProps, ActionableProps, ActivatableProps, BuildableProps {
    active: boolean;
    state: boolean;
  }
  
  export class SwitchAccessible extends WidgetAccessible implements Atk.Action, Atk.Component {
    constructor(props?: SwitchAccessibleProps);
  }
  
  interface SwitchAccessibleProps extends WidgetAccessibleProps, Atk.ActionProps, Atk.ComponentProps {
    
  }
  
  export class Table extends Container implements Atk.ImplementorIface, Buildable {
    constructor(props?: TableProps);
    
    columnSpacing: number;
    homogeneous: boolean;
    nColumns: number;
    nRows: number;
    rowSpacing: number;
    
    public attach(child: Widget, leftAttach: number, rightAttach: number, topAttach: number, bottomAttach: number, xoptions: AttachOptions, yoptions: AttachOptions, xpadding: number, ypadding: number): void;
    public attachDefaults(widget: Widget, leftAttach: number, rightAttach: number, topAttach: number, bottomAttach: number): void;
    public getColSpacing(column: number): number;
    public getDefaultColSpacing(): number;
    public getDefaultRowSpacing(): number;
    public getHomogeneous(): boolean;
    public getRowSpacing(_row: number): number;
    public getSize(_rows: number, columns: number): void;
    public resize(_rows: number, columns: number): void;
    public setColSpacing(column: number, spacing: number): void;
    public setColSpacings(spacing: number): void;
    public setHomogeneous(homogeneous: boolean): void;
    public setRowSpacing(_row: number, spacing: number): void;
    public setRowSpacings(spacing: number): void;
  }
  
  interface TableProps extends ContainerProps, Atk.ImplementorIfaceProps, BuildableProps {
    columnSpacing: number;
    homogeneous: boolean;
    nColumns: number;
    nRows: number;
    rowSpacing: number;
  }
  
  export class TearoffMenuItem extends MenuItem implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(props?: TearoffMenuItemProps);
  }
  
  interface TearoffMenuItemProps extends MenuItemProps, Atk.ImplementorIfaceProps, ActionableProps, ActivatableProps, BuildableProps {
    
  }
  
  export class TextBuffer extends GObject.Object {
    constructor(props?: TextBufferProps);
    
    copyTargetList: TargetList;
    cursorPosition: number;
    hasSelection: boolean;
    pasteTargetList: TargetList;
    tagTable: TextTagTable;
    text: string;
    
    public addMark(mark: TextMark, where: TextIter): void;
    public addSelectionClipboard(clipboard: Clipboard): void;
    public applyTag(tag: TextTag, start: TextIter, end: TextIter): void;
    public applyTagByName(name: string, start: TextIter, end: TextIter): void;
    public backspace(iter: TextIter, interactive: boolean, defaultEditable: boolean): boolean;
    public beginUserAction(): void;
    public copyClipboard(clipboard: Clipboard): void;
    public createChildAnchor(iter: TextIter): TextChildAnchor;
    public createMark(markName: string, where: TextIter, leftGravity: boolean): TextMark;
    public createTag(tagName: string, firstPropertyName: string, ...params: any[]): TextTag;
    public cutClipboard(clipboard: Clipboard, defaultEditable: boolean): void;
    public delete(start: TextIter, end: TextIter): void;
    public deleteInteractive(startIter: TextIter, endIter: TextIter, defaultEditable: boolean): boolean;
    public deleteMark(mark: TextMark): void;
    public deleteMarkByName(name: string): void;
    public deleteSelection(interactive: boolean, defaultEditable: boolean): boolean;
    public deserialize(contentBuffer: TextBuffer, format: Gdk.Atom, iter: TextIter, data: number[], length: number): boolean;
    public deserializeGetCanCreateTags(format: Gdk.Atom): boolean;
    public deserializeSetCanCreateTags(format: Gdk.Atom, canCreateTags: boolean): void;
    public endUserAction(): void;
    public getBounds(start: TextIter, end: TextIter): void;
    public getCharCount(): number;
    public getCopyTargetList(): TargetList;
    public getDeserializeFormats(nFormats: number): Gdk.Atom[];
    public getEndIter(iter: TextIter): void;
    public getHasSelection(): boolean;
    public getInsert(): TextMark;
    public getIterAtChildAnchor(iter: TextIter, anchor: TextChildAnchor): void;
    public getIterAtLine(iter: TextIter, lineNumber: number): void;
    public getIterAtLineIndex(iter: TextIter, lineNumber: number, byteIndex: number): void;
    public getIterAtLineOffset(iter: TextIter, lineNumber: number, charOffset: number): void;
    public getIterAtMark(iter: TextIter, mark: TextMark): void;
    public getIterAtOffset(iter: TextIter, charOffset: number): void;
    public getLineCount(): number;
    public getMark(name: string): TextMark;
    public getModified(): boolean;
    public getPasteTargetList(): TargetList;
    public getSelectionBound(): TextMark;
    public getSelectionBounds(start: TextIter, end: TextIter): boolean;
    public getSerializeFormats(nFormats: number): Gdk.Atom[];
    public getSlice(start: TextIter, end: TextIter, includeHiddenChars: boolean): string;
    public getStartIter(iter: TextIter): void;
    public getTagTable(): TextTagTable;
    public getText(start: TextIter, end: TextIter, includeHiddenChars: boolean): string;
    public insert(iter: TextIter, text: string, len: number): void;
    public insertAtCursor(text: string, len: number): void;
    public insertChildAnchor(iter: TextIter, anchor: TextChildAnchor): void;
    public insertInteractive(iter: TextIter, text: string, len: number, defaultEditable: boolean): boolean;
    public insertInteractiveAtCursor(text: string, len: number, defaultEditable: boolean): boolean;
    public insertMarkup(iter: TextIter, markup: string, len: number): void;
    public insertPixbuf(iter: TextIter, pixbuf: GdkPixbuf.Pixbuf): void;
    public insertRange(iter: TextIter, start: TextIter, end: TextIter): void;
    public insertRangeInteractive(iter: TextIter, start: TextIter, end: TextIter, defaultEditable: boolean): boolean;
    public insertWithTags(iter: TextIter, text: string, len: number, firstTag: TextTag, ...params: any[]): void;
    public insertWithTagsByName(iter: TextIter, text: string, len: number, firstTagName: string, ...params: any[]): void;
    public moveMark(mark: TextMark, where: TextIter): void;
    public moveMarkByName(name: string, where: TextIter): void;
    public pasteClipboard(clipboard: Clipboard, overrideLocation: TextIter, defaultEditable: boolean): void;
    public placeCursor(where: TextIter): void;
    public registerDeserializeFormat(mimeType: string, _function: TextBufferDeserializeFunc, userData: any, userDataDestroy: GLib.DestroyNotify): Gdk.Atom;
    public registerDeserializeTagset(tagsetName: string): Gdk.Atom;
    public registerSerializeFormat(mimeType: string, _function: TextBufferSerializeFunc, userData: any, userDataDestroy: GLib.DestroyNotify): Gdk.Atom;
    public registerSerializeTagset(tagsetName: string): Gdk.Atom;
    public removeAllTags(start: TextIter, end: TextIter): void;
    public removeSelectionClipboard(clipboard: Clipboard): void;
    public removeTag(tag: TextTag, start: TextIter, end: TextIter): void;
    public removeTagByName(name: string, start: TextIter, end: TextIter): void;
    public selectRange(ins: TextIter, bound: TextIter): void;
    public serialize(contentBuffer: TextBuffer, format: Gdk.Atom, start: TextIter, end: TextIter, length: number): number[];
    public setModified(setting: boolean): void;
    public setText(text: string, len: number): void;
    public unregisterDeserializeFormat(format: Gdk.Atom): void;
    public unregisterSerializeFormat(format: Gdk.Atom): void;
    public changed(): void;
    public deleteRange(start: TextIter, end: TextIter): void;
    public insertText(pos: TextIter, newText: string, newTextLength: number): void;
    public markDeleted(mark: TextMark): void;
    public markSet(location: TextIter, mark: TextMark): void;
    public modifiedChanged(): void;
    public pasteDone(clipboard: Clipboard): void;
  }
  
  interface TextBufferProps extends GObject.ObjectProps {
    copyTargetList: TargetList;
    cursorPosition: number;
    hasSelection: boolean;
    pasteTargetList: TargetList;
    tagTable: TextTagTable;
    text: string;
  }
  
  export class TextCellAccessible extends RendererCellAccessible implements Atk.Action, Atk.Component, Atk.Text {
    constructor(props?: TextCellAccessibleProps);
  }
  
  interface TextCellAccessibleProps extends RendererCellAccessibleProps, Atk.ActionProps, Atk.ComponentProps, Atk.TextProps {
    
  }
  
  export class TextChildAnchor extends GObject.Object {
    constructor(props?: TextChildAnchorProps);
    
    public getDeleted(): boolean;
    public getWidgets(): GLib.List;
  }
  
  interface TextChildAnchorProps extends GObject.ObjectProps {
    
  }
  
  export class TextMark extends GObject.Object {
    constructor(props?: TextMarkProps);
    
    leftGravity: boolean;
    name: string;
    
    public getBuffer(): TextBuffer;
    public getDeleted(): boolean;
    public getLeftGravity(): boolean;
    public getName(): string;
    public getVisible(): boolean;
    public setVisible(setting: boolean): void;
  }
  
  interface TextMarkProps extends GObject.ObjectProps {
    leftGravity: boolean;
    name: string;
  }
  
  export class TextTag extends GObject.Object {
    constructor(props?: TextTagProps);
    
    accumulativeMargin: boolean;
    background: string;
    backgroundFullHeight: boolean;
    backgroundFullHeightSet: boolean;
    backgroundGdk: Gdk.Color;
    backgroundRgba: Gdk.RGBA;
    backgroundSet: boolean;
    direction: TextDirection;
    editable: boolean;
    editableSet: boolean;
    fallback: boolean;
    fallbackSet: boolean;
    family: string;
    familySet: boolean;
    font: string;
    fontDesc: Pango.FontDescription;
    fontFeatures: string;
    fontFeaturesSet: boolean;
    foreground: string;
    foregroundGdk: Gdk.Color;
    foregroundRgba: Gdk.RGBA;
    foregroundSet: boolean;
    indent: number;
    indentSet: boolean;
    invisible: boolean;
    invisibleSet: boolean;
    justification: Justification;
    justificationSet: boolean;
    language: string;
    languageSet: boolean;
    leftMargin: number;
    leftMarginSet: boolean;
    letterSpacing: number;
    letterSpacingSet: boolean;
    name: string;
    paragraphBackground: string;
    paragraphBackgroundGdk: Gdk.Color;
    paragraphBackgroundRgba: Gdk.RGBA;
    paragraphBackgroundSet: boolean;
    pixelsAboveLines: number;
    pixelsAboveLinesSet: boolean;
    pixelsBelowLines: number;
    pixelsBelowLinesSet: boolean;
    pixelsInsideWrap: number;
    pixelsInsideWrapSet: boolean;
    rightMargin: number;
    rightMarginSet: boolean;
    rise: number;
    riseSet: boolean;
    scale: number;
    scaleSet: boolean;
    size: number;
    sizePoints: number;
    sizeSet: boolean;
    stretch: Pango.Stretch;
    stretchSet: boolean;
    strikethrough: boolean;
    strikethroughRgba: Gdk.RGBA;
    strikethroughRgbaSet: boolean;
    strikethroughSet: boolean;
    style: Pango.Style;
    styleSet: boolean;
    tabs: Pango.TabArray;
    tabsSet: boolean;
    underline: Pango.Underline;
    underlineRgba: Gdk.RGBA;
    underlineRgbaSet: boolean;
    underlineSet: boolean;
    variant: Pango.Variant;
    variantSet: boolean;
    weight: number;
    weightSet: boolean;
    wrapMode: WrapMode;
    wrapModeSet: boolean;
    
    public changed(sizeChanged: boolean): void;
    public event(eventObject: GObject.Object, event: Gdk.Event, iter: TextIter): boolean;
    public getPriority(): number;
    public setPriority(priority: number): void;
  }
  
  interface TextTagProps extends GObject.ObjectProps {
    accumulativeMargin: boolean;
    background: string;
    backgroundFullHeight: boolean;
    backgroundFullHeightSet: boolean;
    backgroundGdk: Gdk.Color;
    backgroundRgba: Gdk.RGBA;
    backgroundSet: boolean;
    direction: TextDirection;
    editable: boolean;
    editableSet: boolean;
    fallback: boolean;
    fallbackSet: boolean;
    family: string;
    familySet: boolean;
    font: string;
    fontDesc: Pango.FontDescription;
    fontFeatures: string;
    fontFeaturesSet: boolean;
    foreground: string;
    foregroundGdk: Gdk.Color;
    foregroundRgba: Gdk.RGBA;
    foregroundSet: boolean;
    indent: number;
    indentSet: boolean;
    invisible: boolean;
    invisibleSet: boolean;
    justification: Justification;
    justificationSet: boolean;
    language: string;
    languageSet: boolean;
    leftMargin: number;
    leftMarginSet: boolean;
    letterSpacing: number;
    letterSpacingSet: boolean;
    name: string;
    paragraphBackground: string;
    paragraphBackgroundGdk: Gdk.Color;
    paragraphBackgroundRgba: Gdk.RGBA;
    paragraphBackgroundSet: boolean;
    pixelsAboveLines: number;
    pixelsAboveLinesSet: boolean;
    pixelsBelowLines: number;
    pixelsBelowLinesSet: boolean;
    pixelsInsideWrap: number;
    pixelsInsideWrapSet: boolean;
    rightMargin: number;
    rightMarginSet: boolean;
    rise: number;
    riseSet: boolean;
    scale: number;
    scaleSet: boolean;
    size: number;
    sizePoints: number;
    sizeSet: boolean;
    stretch: Pango.Stretch;
    stretchSet: boolean;
    strikethrough: boolean;
    strikethroughRgba: Gdk.RGBA;
    strikethroughRgbaSet: boolean;
    strikethroughSet: boolean;
    style: Pango.Style;
    styleSet: boolean;
    tabs: Pango.TabArray;
    tabsSet: boolean;
    underline: Pango.Underline;
    underlineRgba: Gdk.RGBA;
    underlineRgbaSet: boolean;
    underlineSet: boolean;
    variant: Pango.Variant;
    variantSet: boolean;
    weight: number;
    weightSet: boolean;
    wrapMode: WrapMode;
    wrapModeSet: boolean;
  }
  
  export class TextTagTable extends GObject.Object implements Buildable {
    constructor(props?: TextTagTableProps);
    
    public add(tag: TextTag): boolean;
    public foreach(func: TextTagTableForeach, data: any): void;
    public getSize(): number;
    public lookup(name: string): TextTag;
    public remove(tag: TextTag): void;
    public tagAdded(tag: TextTag): void;
    public tagChanged(tag: TextTag, sizeChanged: boolean): void;
    public tagRemoved(tag: TextTag): void;
  }
  
  interface TextTagTableProps extends GObject.ObjectProps, BuildableProps {
    
  }
  
  export class TextView extends Container implements Atk.ImplementorIface, Buildable, Scrollable {
    constructor(props?: TextViewProps);
    
    acceptsTab: boolean;
    bottomMargin: number;
    buffer: TextBuffer;
    cursorVisible: boolean;
    editable: boolean;
    imModule: string;
    indent: number;
    inputHints: InputHints;
    inputPurpose: InputPurpose;
    justification: Justification;
    leftMargin: number;
    monospace: boolean;
    overwrite: boolean;
    pixelsAboveLines: number;
    pixelsBelowLines: number;
    pixelsInsideWrap: number;
    populateAll: boolean;
    rightMargin: number;
    tabs: Pango.TabArray;
    topMargin: number;
    wrapMode: WrapMode;
    
    public addChildAtAnchor(child: Widget, anchor: TextChildAnchor): void;
    public addChildInWindow(child: Widget, whichWindow: TextWindowType, xpos: number, ypos: number): void;
    public backwardDisplayLine(iter: TextIter): boolean;
    public backwardDisplayLineStart(iter: TextIter): boolean;
    public bufferToWindowCoords(win: TextWindowType, bufferX: number, bufferY: number, windowX: number, windowY: number): void;
    public forwardDisplayLine(iter: TextIter): boolean;
    public forwardDisplayLineEnd(iter: TextIter): boolean;
    public getAcceptsTab(): boolean;
    public getBorderWindowSize(type: TextWindowType): number;
    public getBottomMargin(): number;
    public getBuffer(): TextBuffer;
    public getCursorLocations(iter: TextIter, strong: Gdk.Rectangle, weak: Gdk.Rectangle): void;
    public getCursorVisible(): boolean;
    public getDefaultAttributes(): TextAttributes;
    public getEditable(): boolean;
    public getHadjustment(): Adjustment;
    public getIndent(): number;
    public getInputHints(): InputHints;
    public getInputPurpose(): InputPurpose;
    public getIterAtLocation(iter: TextIter, x: number, _y: number): boolean;
    public getIterAtPosition(iter: TextIter, trailing: number, x: number, _y: number): boolean;
    public getIterLocation(iter: TextIter, location: Gdk.Rectangle): void;
    public getJustification(): Justification;
    public getLeftMargin(): number;
    public getLineAtY(targetIter: TextIter, _y: number, lineTop: number): void;
    public getLineYrange(iter: TextIter, _y: number, height: number): void;
    public getMonospace(): boolean;
    public getOverwrite(): boolean;
    public getPixelsAboveLines(): number;
    public getPixelsBelowLines(): number;
    public getPixelsInsideWrap(): number;
    public getRightMargin(): number;
    public getTabs(): Pango.TabArray;
    public getTopMargin(): number;
    public getVadjustment(): Adjustment;
    public getVisibleRect(visibleRect: Gdk.Rectangle): void;
    public getWindow(win: TextWindowType): Gdk.Window;
    public getWindowType(window: Gdk.Window): TextWindowType;
    public getWrapMode(): WrapMode;
    public imContextFilterKeypress(event: Gdk.EventKey): boolean;
    public moveChild(child: Widget, xpos: number, ypos: number): void;
    public moveMarkOnscreen(mark: TextMark): boolean;
    public moveVisually(iter: TextIter, count: number): boolean;
    public placeCursorOnscreen(): boolean;
    public resetCursorBlink(): void;
    public resetImContext(): void;
    public scrollMarkOnscreen(mark: TextMark): void;
    public scrollToIter(iter: TextIter, withinMargin: number, useAlign: boolean, xalign: number, yalign: number): boolean;
    public scrollToMark(mark: TextMark, withinMargin: number, useAlign: boolean, xalign: number, yalign: number): void;
    public setAcceptsTab(acceptsTab: boolean): void;
    public setBorderWindowSize(type: TextWindowType, size: number): void;
    public setBottomMargin(bottomMargin: number): void;
    public setBuffer(buffer: TextBuffer): void;
    public setCursorVisible(setting: boolean): void;
    public setEditable(setting: boolean): void;
    public setIndent(indent: number): void;
    public setInputHints(hints: InputHints): void;
    public setInputPurpose(purpose: InputPurpose): void;
    public setJustification(justification: Justification): void;
    public setLeftMargin(leftMargin: number): void;
    public setMonospace(monospace: boolean): void;
    public setOverwrite(overwrite: boolean): void;
    public setPixelsAboveLines(pixelsAboveLines: number): void;
    public setPixelsBelowLines(pixelsBelowLines: number): void;
    public setPixelsInsideWrap(pixelsInsideWrap: number): void;
    public setRightMargin(rightMargin: number): void;
    public setTabs(tabs: Pango.TabArray): void;
    public setTopMargin(topMargin: number): void;
    public setWrapMode(wrapMode: WrapMode): void;
    public startsDisplayLine(iter: TextIter): boolean;
    public windowToBufferCoords(win: TextWindowType, windowX: number, windowY: number, bufferX: number, bufferY: number): void;
    public backspace(): void;
    public copyClipboard(): void;
    public createBuffer(): TextBuffer;
    public cutClipboard(): void;
    public deleteFromCursor(type: DeleteType, count: number): void;
    public drawLayer(layer: TextViewLayer, cr: cairo.Context): void;
    public extendSelection(granularity: TextExtendSelection, location: TextIter, start: TextIter, end: TextIter): boolean;
    public insertAtCursor(str: string): void;
    public moveCursor(step: MovementStep, count: number, extendSelection: boolean): void;
    public pasteClipboard(): void;
    public populatePopup(popup: Widget): void;
    public setAnchor(): void;
    public toggleOverwrite(): void;
  }
  
  interface TextViewProps extends ContainerProps, Atk.ImplementorIfaceProps, BuildableProps, ScrollableProps {
    acceptsTab: boolean;
    bottomMargin: number;
    buffer: TextBuffer;
    cursorVisible: boolean;
    editable: boolean;
    imModule: string;
    indent: number;
    inputHints: InputHints;
    inputPurpose: InputPurpose;
    justification: Justification;
    leftMargin: number;
    monospace: boolean;
    overwrite: boolean;
    pixelsAboveLines: number;
    pixelsBelowLines: number;
    pixelsInsideWrap: number;
    populateAll: boolean;
    rightMargin: number;
    tabs: Pango.TabArray;
    topMargin: number;
    wrapMode: WrapMode;
  }
  
  export class TextViewAccessible extends ContainerAccessible implements Atk.Component, Atk.EditableText, Atk.StreamableContent, Atk.Text {
    constructor(props?: TextViewAccessibleProps);
  }
  
  interface TextViewAccessibleProps extends ContainerAccessibleProps, Atk.ComponentProps, Atk.EditableTextProps, Atk.StreamableContentProps, Atk.TextProps {
    
  }
  
  export class ThemingEngine extends GObject.Object {
    constructor(props?: ThemingEngineProps);
    
    name: string;
    
    public get(state: StateFlags, ...params: any[]): void;
    public getBackgroundColor(state: StateFlags, color: Gdk.RGBA): void;
    public getBorder(state: StateFlags, border: Border): void;
    public getBorderColor(state: StateFlags, color: Gdk.RGBA): void;
    public getColor(state: StateFlags, color: Gdk.RGBA): void;
    public getDirection(): TextDirection;
    public getFont(state: StateFlags): Pango.FontDescription;
    public getJunctionSides(): JunctionSides;
    public getMargin(state: StateFlags, margin: Border): void;
    public getPadding(state: StateFlags, padding: Border): void;
    public getPath(): WidgetPath;
    public getProperty(property: string, state: StateFlags, value: GObject.Value): void;
    public getScreen(): Gdk.Screen;
    public getState(): StateFlags;
    public getStyle(...params: any[]): void;
    public getStyleProperty(propertyName: string, value: GObject.Value): void;
    public getStyleValist(args: any[]): void;
    public getValist(state: StateFlags, args: any[]): void;
    public hasClass(styleClass: string): boolean;
    public hasRegion(styleRegion: string, flags: RegionFlags): boolean;
    public lookupColor(colorName: string, color: Gdk.RGBA): boolean;
    public stateIsRunning(state: StateType, progress: number): boolean;
    public renderActivity(cr: cairo.Context, x: number, _y: number, width: number, height: number): void;
    public renderArrow(cr: cairo.Context, angle: number, x: number, _y: number, size: number): void;
    public renderBackground(cr: cairo.Context, x: number, _y: number, width: number, height: number): void;
    public renderCheck(cr: cairo.Context, x: number, _y: number, width: number, height: number): void;
    public renderExpander(cr: cairo.Context, x: number, _y: number, width: number, height: number): void;
    public renderExtension(cr: cairo.Context, x: number, _y: number, width: number, height: number, gapSide: PositionType): void;
    public renderFocus(cr: cairo.Context, x: number, _y: number, width: number, height: number): void;
    public renderFrame(cr: cairo.Context, x: number, _y: number, width: number, height: number): void;
    public renderFrameGap(cr: cairo.Context, x: number, _y: number, width: number, height: number, gapSide: PositionType, xy0Gap: number, xy1Gap: number): void;
    public renderHandle(cr: cairo.Context, x: number, _y: number, width: number, height: number): void;
    public renderIcon(cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, x: number, _y: number): void;
    public renderIconPixbuf(source: IconSource, size: IconSize): GdkPixbuf.Pixbuf;
    public renderIconSurface(cr: cairo.Context, surface: cairo.Surface, x: number, _y: number): void;
    public renderLayout(cr: cairo.Context, x: number, _y: number, layout: Pango.Layout): void;
    public renderLine(cr: cairo.Context, x0: number, y0: number, x1: number, y1: number): void;
    public renderOption(cr: cairo.Context, x: number, _y: number, width: number, height: number): void;
    public renderSlider(cr: cairo.Context, x: number, _y: number, width: number, height: number, orientation: Orientation): void;
    
    public static load(name: string): ThemingEngine;
    public static registerProperty(nameSpace: string, parseFunc: StylePropertyParser, pspec: GObject.ParamSpec): void;
  }
  
  interface ThemingEngineProps extends GObject.ObjectProps {
    name: string;
  }
  
  export class ToggleAction extends Action implements Buildable {
    constructor(props?: ToggleActionProps);
    
    active: boolean;
    drawAsRadio: boolean;
    
    public getActive(): boolean;
    public getDrawAsRadio(): boolean;
    public setActive(isActive: boolean): void;
    public setDrawAsRadio(drawAsRadio: boolean): void;
    public toggled(): void;
  }
  
  interface ToggleActionProps extends ActionProps, BuildableProps {
    active: boolean;
    drawAsRadio: boolean;
  }
  
  export class ToggleButton extends Button implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(props?: ToggleButtonProps);
    
    active: boolean;
    drawIndicator: boolean;
    inconsistent: boolean;
    
    public getActive(): boolean;
    public getInconsistent(): boolean;
    public getMode(): boolean;
    public setActive(isActive: boolean): void;
    public setInconsistent(setting: boolean): void;
    public setMode(drawIndicator: boolean): void;
    public toggled(): void;
  }
  
  interface ToggleButtonProps extends ButtonProps, Atk.ImplementorIfaceProps, ActionableProps, ActivatableProps, BuildableProps {
    active: boolean;
    drawIndicator: boolean;
    inconsistent: boolean;
  }
  
  export class ToggleButtonAccessible extends ButtonAccessible implements Atk.Action, Atk.Component, Atk.Image {
    constructor(props?: ToggleButtonAccessibleProps);
  }
  
  interface ToggleButtonAccessibleProps extends ButtonAccessibleProps, Atk.ActionProps, Atk.ComponentProps, Atk.ImageProps {
    
  }
  
  export class ToggleToolButton extends ToolButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(props?: ToggleToolButtonProps);
    
    active: boolean;
    
    public getActive(): boolean;
    public setActive(isActive: boolean): void;
    public toggled(): void;
  }
  
  interface ToggleToolButtonProps extends ToolButtonProps, Atk.ImplementorIfaceProps, ActionableProps, ActivatableProps, BuildableProps {
    active: boolean;
  }
  
  export class ToolButton extends ToolItem implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    constructor(props?: ToolButtonProps);
    
    iconName: string;
    iconWidget: Widget;
    label: string;
    labelWidget: Widget;
    stockId: string;
    useUnderline: boolean;
    
    public getIconName(): string;
    public getIconWidget(): Widget;
    public getLabel(): string;
    public getLabelWidget(): Widget;
    public getStockId(): string;
    public getUseUnderline(): boolean;
    public setIconName(iconName: string): void;
    public setIconWidget(iconWidget: Widget): void;
    public setLabel(label: string): void;
    public setLabelWidget(labelWidget: Widget): void;
    public setStockId(stockId: string): void;
    public setUseUnderline(useUnderline: boolean): void;
    public clicked(): void;
  }
  
  interface ToolButtonProps extends ToolItemProps, Atk.ImplementorIfaceProps, ActionableProps, ActivatableProps, BuildableProps {
    iconName: string;
    iconWidget: Widget;
    label: string;
    labelWidget: Widget;
    stockId: string;
    useUnderline: boolean;
  }
  
  export class ToolItem extends Bin implements Atk.ImplementorIface, Activatable, Buildable {
    constructor(props?: ToolItemProps);
    
    isImportant: boolean;
    visibleHorizontal: boolean;
    visibleVertical: boolean;
    
    public getEllipsizeMode(): Pango.EllipsizeMode;
    public getExpand(): boolean;
    public getHomogeneous(): boolean;
    public getIconSize(): number;
    public getIsImportant(): boolean;
    public getOrientation(): Orientation;
    public getProxyMenuItem(menuItemId: string): Widget;
    public getReliefStyle(): ReliefStyle;
    public getTextAlignment(): number;
    public getTextOrientation(): Orientation;
    public getTextSizeGroup(): SizeGroup;
    public getToolbarStyle(): ToolbarStyle;
    public getUseDragWindow(): boolean;
    public getVisibleHorizontal(): boolean;
    public getVisibleVertical(): boolean;
    public rebuildMenu(): void;
    public retrieveProxyMenuItem(): Widget;
    public setExpand(expand: boolean): void;
    public setHomogeneous(homogeneous: boolean): void;
    public setIsImportant(isImportant: boolean): void;
    public setProxyMenuItem(menuItemId: string, menuItem: Widget): void;
    public setTooltipMarkup(markup: string): void;
    public setTooltipText(text: string): void;
    public setUseDragWindow(useDragWindow: boolean): void;
    public setVisibleHorizontal(visibleHorizontal: boolean): void;
    public setVisibleVertical(visibleVertical: boolean): void;
    public toolbarReconfigured(): void;
    public createMenuProxy(): boolean;
  }
  
  interface ToolItemProps extends BinProps, Atk.ImplementorIfaceProps, ActivatableProps, BuildableProps {
    isImportant: boolean;
    visibleHorizontal: boolean;
    visibleVertical: boolean;
  }
  
  export class ToolItemGroup extends Container implements Atk.ImplementorIface, Buildable, ToolShell {
    constructor(props?: ToolItemGroupProps);
    
    collapsed: boolean;
    ellipsize: Pango.EllipsizeMode;
    headerRelief: ReliefStyle;
    label: string;
    labelWidget: Widget;
    
    public getCollapsed(): boolean;
    public getDropItem(x: number, _y: number): ToolItem;
    public getEllipsize(): Pango.EllipsizeMode;
    public getHeaderRelief(): ReliefStyle;
    public getItemPosition(item: ToolItem): number;
    public getLabel(): string;
    public getLabelWidget(): Widget;
    public getNItems(): number;
    public getNthItem(index: number): ToolItem;
    public insert(item: ToolItem, position: number): void;
    public setCollapsed(collapsed: boolean): void;
    public setEllipsize(ellipsize: Pango.EllipsizeMode): void;
    public setHeaderRelief(style: ReliefStyle): void;
    public setItemPosition(item: ToolItem, position: number): void;
    public setLabel(label: string): void;
    public setLabelWidget(labelWidget: Widget): void;
  }
  
  interface ToolItemGroupProps extends ContainerProps, Atk.ImplementorIfaceProps, BuildableProps, ToolShellProps {
    collapsed: boolean;
    ellipsize: Pango.EllipsizeMode;
    headerRelief: ReliefStyle;
    label: string;
    labelWidget: Widget;
  }
  
  export class ToolPalette extends Container implements Atk.ImplementorIface, Buildable, Orientable, Scrollable {
    constructor(props?: ToolPaletteProps);
    
    iconSize: IconSize;
    iconSizeSet: boolean;
    toolbarStyle: ToolbarStyle;
    
    public addDragDest(widget: Widget, flags: DestDefaults, targets: ToolPaletteDragTargets, actions: Gdk.DragAction): void;
    public getDragItem(selection: SelectionData): Widget;
    public getDropGroup(x: number, _y: number): ToolItemGroup;
    public getDropItem(x: number, _y: number): ToolItem;
    public getExclusive(group: ToolItemGroup): boolean;
    public getExpand(group: ToolItemGroup): boolean;
    public getGroupPosition(group: ToolItemGroup): number;
    public getHadjustment(): Adjustment;
    public getIconSize(): number;
    public getStyle(): ToolbarStyle;
    public getVadjustment(): Adjustment;
    public setDragSource(targets: ToolPaletteDragTargets): void;
    public setExclusive(group: ToolItemGroup, exclusive: boolean): void;
    public setExpand(group: ToolItemGroup, expand: boolean): void;
    public setGroupPosition(group: ToolItemGroup, position: number): void;
    public setIconSize(iconSize: number): void;
    public setStyle(style: ToolbarStyle): void;
    public unsetIconSize(): void;
    public unsetStyle(): void;
    
    public static getDragTargetGroup(): TargetEntry;
    public static getDragTargetItem(): TargetEntry;
  }
  
  interface ToolPaletteProps extends ContainerProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps, ScrollableProps {
    iconSize: IconSize;
    iconSizeSet: boolean;
    toolbarStyle: ToolbarStyle;
  }
  
  export class Toolbar extends Container implements Atk.ImplementorIface, Buildable, Orientable, ToolShell {
    constructor(props?: ToolbarProps);
    
    iconSize: IconSize;
    iconSizeSet: boolean;
    showArrow: boolean;
    toolbarStyle: ToolbarStyle;
    
    public getDropIndex(x: number, _y: number): number;
    public getIconSize(): IconSize;
    public getItemIndex(item: ToolItem): number;
    public getNItems(): number;
    public getNthItem(_n: number): ToolItem;
    public getReliefStyle(): ReliefStyle;
    public getShowArrow(): boolean;
    public getStyle(): ToolbarStyle;
    public insert(item: ToolItem, pos: number): void;
    public setDropHighlightItem(toolItem: ToolItem, index_: number): void;
    public setIconSize(iconSize: IconSize): void;
    public setShowArrow(showArrow: boolean): void;
    public setStyle(style: ToolbarStyle): void;
    public unsetIconSize(): void;
    public unsetStyle(): void;
    public orientationChanged(orientation: Orientation): void;
    public popupContextMenu(x: number, _y: number, buttonNumber: number): boolean;
    public styleChanged(style: ToolbarStyle): void;
  }
  
  interface ToolbarProps extends ContainerProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps, ToolShellProps {
    iconSize: IconSize;
    iconSizeSet: boolean;
    showArrow: boolean;
    toolbarStyle: ToolbarStyle;
  }
  
  export class Tooltip extends GObject.Object {
    constructor(props?: TooltipProps);
    
    public setCustom(customWidget: Widget): void;
    public setIcon(pixbuf: GdkPixbuf.Pixbuf): void;
    public setIconFromGicon(gicon: Gio.Icon, size: number): void;
    public setIconFromIconName(iconName: string, size: number): void;
    public setIconFromStock(stockId: string, size: number): void;
    public setMarkup(markup: string): void;
    public setText(text: string): void;
    public setTipArea(rect: Gdk.Rectangle): void;
    
    public static triggerTooltipQuery(display: Gdk.Display): void;
  }
  
  interface TooltipProps extends GObject.ObjectProps {
    
  }
  
  export class ToplevelAccessible extends Atk.Object {
    constructor(props?: ToplevelAccessibleProps);
    
    public getChildren(): GLib.List;
  }
  
  interface ToplevelAccessibleProps extends Atk.ObjectProps {
    
  }
  
  export class TreeModelFilter extends GObject.Object implements TreeDragSource, TreeModel {
    constructor(props?: TreeModelFilterProps);
    
    childModel: TreeModel;
    virtualRoot: TreePath;
    
    public clearCache(): void;
    public convertChildIterToIter(filterIter: TreeIter, childIter: TreeIter): boolean;
    public convertChildPathToPath(childPath: TreePath): TreePath;
    public convertIterToChildIter(childIter: TreeIter, filterIter: TreeIter): void;
    public convertPathToChildPath(filterPath: TreePath): TreePath;
    public getModel(): TreeModel;
    public refilter(): void;
    public setModifyFunc(nColumns: number, types: GObject.Type[], func: TreeModelFilterModifyFunc, data: any, destroy: GLib.DestroyNotify): void;
    public setVisibleColumn(column: number): void;
    public setVisibleFunc(func: TreeModelFilterVisibleFunc, data: any, destroy: GLib.DestroyNotify): void;
    public modify(childModel: TreeModel, iter: TreeIter, value: GObject.Value, column: number): void;
    public visible(childModel: TreeModel, iter: TreeIter): boolean;
  }
  
  interface TreeModelFilterProps extends GObject.ObjectProps, TreeDragSourceProps, TreeModelProps {
    childModel: TreeModel;
    virtualRoot: TreePath;
  }
  
  export class TreeModelSort extends GObject.Object implements TreeDragSource, TreeModel, TreeSortable {
    constructor(props?: TreeModelSortProps);
    
    model: TreeModel;
    
    public clearCache(): void;
    public convertChildIterToIter(sortIter: TreeIter, childIter: TreeIter): boolean;
    public convertChildPathToPath(childPath: TreePath): TreePath;
    public convertIterToChildIter(childIter: TreeIter, sortedIter: TreeIter): void;
    public convertPathToChildPath(sortedPath: TreePath): TreePath;
    public getModel(): TreeModel;
    public iterIsValid(iter: TreeIter): boolean;
    public resetDefaultSortFunc(): void;
  }
  
  interface TreeModelSortProps extends GObject.ObjectProps, TreeDragSourceProps, TreeModelProps, TreeSortableProps {
    model: TreeModel;
  }
  
  export class TreeSelection extends GObject.Object {
    constructor(props?: TreeSelectionProps);
    
    mode: SelectionMode;
    
    public countSelectedRows(): number;
    public getMode(): SelectionMode;
    public getSelectFunction(): TreeSelectionFunc;
    public getSelected(model: TreeModel, iter: TreeIter): boolean;
    public getSelectedRows(model: TreeModel): GLib.List;
    public getTreeView(): TreeView;
    public getUserData(): any;
    public iterIsSelected(iter: TreeIter): boolean;
    public pathIsSelected(path: TreePath): boolean;
    public selectAll(): void;
    public selectIter(iter: TreeIter): void;
    public selectPath(path: TreePath): void;
    public selectRange(startPath: TreePath, endPath: TreePath): void;
    public selectedForeach(func: TreeSelectionForeachFunc, data: any): void;
    public setMode(type: SelectionMode): void;
    public setSelectFunction(func: TreeSelectionFunc, data: any, destroy: GLib.DestroyNotify): void;
    public unselectAll(): void;
    public unselectIter(iter: TreeIter): void;
    public unselectPath(path: TreePath): void;
    public unselectRange(startPath: TreePath, endPath: TreePath): void;
    public changed(): void;
  }
  
  interface TreeSelectionProps extends GObject.ObjectProps {
    mode: SelectionMode;
  }
  
  export class TreeStore extends GObject.Object implements Buildable, TreeDragDest, TreeDragSource, TreeModel, TreeSortable {
    constructor(props?: TreeStoreProps);
    
    public append(iter: TreeIter, parent: TreeIter): void;
    public clear(): void;
    public insert(iter: TreeIter, parent: TreeIter, position: number): void;
    public insertAfter(iter: TreeIter, parent: TreeIter, sibling: TreeIter): void;
    public insertBefore(iter: TreeIter, parent: TreeIter, sibling: TreeIter): void;
    public insertWithValues(iter: TreeIter, parent: TreeIter, position: number, ...params: any[]): void;
    public insertWithValuesv(iter: TreeIter, parent: TreeIter, position: number, columns: number[], values: GObject.Value[], nValues: number): void;
    public isAncestor(iter: TreeIter, descendant: TreeIter): boolean;
    public iterDepth(iter: TreeIter): number;
    public iterIsValid(iter: TreeIter): boolean;
    public moveAfter(iter: TreeIter, position: TreeIter): void;
    public moveBefore(iter: TreeIter, position: TreeIter): void;
    public prepend(iter: TreeIter, parent: TreeIter): void;
    public remove(iter: TreeIter): boolean;
    public reorder(parent: TreeIter, newOrder: number[]): void;
    public set(iter: TreeIter, ...params: any[]): void;
    public setColumnTypes(nColumns: number, types: GObject.Type[]): void;
    public setValist(iter: TreeIter, varArgs: any[]): void;
    public setValue(iter: TreeIter, column: number, value: GObject.Value): void;
    public setValuesv(iter: TreeIter, columns: number[], values: GObject.Value[], nValues: number): void;
    public swap(a: TreeIter, b: TreeIter): void;
  }
  
  interface TreeStoreProps extends GObject.ObjectProps, BuildableProps, TreeDragDestProps, TreeDragSourceProps, TreeModelProps, TreeSortableProps {
    
  }
  
  export class TreeView extends Container implements Atk.ImplementorIface, Buildable, Scrollable {
    constructor(props?: TreeViewProps);
    
    activateOnSingleClick: boolean;
    enableGridLines: TreeViewGridLines;
    enableSearch: boolean;
    enableTreeLines: boolean;
    expanderColumn: TreeViewColumn;
    fixedHeightMode: boolean;
    headersClickable: boolean;
    headersVisible: boolean;
    hoverExpand: boolean;
    hoverSelection: boolean;
    levelIndentation: number;
    model: TreeModel;
    reorderable: boolean;
    rubberBanding: boolean;
    rulesHint: boolean;
    searchColumn: number;
    showExpanders: boolean;
    tooltipColumn: number;
    
    public appendColumn(column: TreeViewColumn): number;
    public collapseAll(): void;
    public collapseRow(path: TreePath): boolean;
    public columnsAutosize(): void;
    public convertBinWindowToTreeCoords(bx: number, by: number, tx: number, ty: number): void;
    public convertBinWindowToWidgetCoords(bx: number, by: number, wx: number, wy: number): void;
    public convertTreeToBinWindowCoords(tx: number, ty: number, bx: number, by: number): void;
    public convertTreeToWidgetCoords(tx: number, ty: number, wx: number, wy: number): void;
    public convertWidgetToBinWindowCoords(wx: number, wy: number, bx: number, by: number): void;
    public convertWidgetToTreeCoords(wx: number, wy: number, tx: number, ty: number): void;
    public createRowDragIcon(path: TreePath): cairo.Surface;
    public enableModelDragDest(targets: TargetEntry[], nTargets: number, actions: Gdk.DragAction): void;
    public enableModelDragSource(startButtonMask: Gdk.ModifierType, targets: TargetEntry[], nTargets: number, actions: Gdk.DragAction): void;
    public expandAll(): void;
    public expandRow(path: TreePath, openAll: boolean): boolean;
    public expandToPath(path: TreePath): void;
    public getActivateOnSingleClick(): boolean;
    public getBackgroundArea(path: TreePath, column: TreeViewColumn, rect: Gdk.Rectangle): void;
    public getBinWindow(): Gdk.Window;
    public getCellArea(path: TreePath, column: TreeViewColumn, rect: Gdk.Rectangle): void;
    public getColumn(_n: number): TreeViewColumn;
    public getColumns(): GLib.List;
    public getCursor(path: TreePath, focusColumn: TreeViewColumn): void;
    public getDestRowAtPos(dragX: number, dragY: number, path: TreePath, pos: TreeViewDropPosition): boolean;
    public getDragDestRow(path: TreePath, pos: TreeViewDropPosition): void;
    public getEnableSearch(): boolean;
    public getEnableTreeLines(): boolean;
    public getExpanderColumn(): TreeViewColumn;
    public getFixedHeightMode(): boolean;
    public getGridLines(): TreeViewGridLines;
    public getHadjustment(): Adjustment;
    public getHeadersClickable(): boolean;
    public getHeadersVisible(): boolean;
    public getHoverExpand(): boolean;
    public getHoverSelection(): boolean;
    public getLevelIndentation(): number;
    public getModel(): TreeModel;
    public getNColumns(): number;
    public getPathAtPos(x: number, _y: number, path: TreePath, column: TreeViewColumn, cellX: number, cellY: number): boolean;
    public getReorderable(): boolean;
    public getRowSeparatorFunc(): TreeViewRowSeparatorFunc;
    public getRubberBanding(): boolean;
    public getRulesHint(): boolean;
    public getSearchColumn(): number;
    public getSearchEntry(): Entry;
    public getSearchEqualFunc(): TreeViewSearchEqualFunc;
    public getSearchPositionFunc(): TreeViewSearchPositionFunc;
    public getSelection(): TreeSelection;
    public getShowExpanders(): boolean;
    public getTooltipColumn(): number;
    public getTooltipContext(x: number, _y: number, keyboardTip: boolean, model: TreeModel, path: TreePath, iter: TreeIter): boolean;
    public getVadjustment(): Adjustment;
    public getVisibleRange(startPath: TreePath, endPath: TreePath): boolean;
    public getVisibleRect(visibleRect: Gdk.Rectangle): void;
    public insertColumn(column: TreeViewColumn, position: number): number;
    public insertColumnWithAttributes(position: number, title: string, cell: CellRenderer, ...params: any[]): number;
    public insertColumnWithDataFunc(position: number, title: string, cell: CellRenderer, func: TreeCellDataFunc, data: any, dnotify: GLib.DestroyNotify): number;
    public isBlankAtPos(x: number, _y: number, path: TreePath, column: TreeViewColumn, cellX: number, cellY: number): boolean;
    public isRubberBandingActive(): boolean;
    public mapExpandedRows(func: TreeViewMappingFunc, data: any): void;
    public moveColumnAfter(column: TreeViewColumn, baseColumn: TreeViewColumn): void;
    public removeColumn(column: TreeViewColumn): number;
    public rowActivated(path: TreePath, column: TreeViewColumn): void;
    public rowExpanded(path: TreePath): boolean;
    public scrollToCell(path: TreePath, column: TreeViewColumn, useAlign: boolean, rowAlign: number, colAlign: number): void;
    public scrollToPoint(treeX: number, treeY: number): void;
    public setActivateOnSingleClick(single: boolean): void;
    public setColumnDragFunction(func: TreeViewColumnDropFunc, userData: any, destroy: GLib.DestroyNotify): void;
    public setCursor(path: TreePath, focusColumn: TreeViewColumn, startEditing: boolean): void;
    public setCursorOnCell(path: TreePath, focusColumn: TreeViewColumn, focusCell: CellRenderer, startEditing: boolean): void;
    public setDestroyCountFunc(func: TreeDestroyCountFunc, data: any, destroy: GLib.DestroyNotify): void;
    public setDragDestRow(path: TreePath, pos: TreeViewDropPosition): void;
    public setEnableSearch(enableSearch: boolean): void;
    public setEnableTreeLines(enabled: boolean): void;
    public setExpanderColumn(column: TreeViewColumn): void;
    public setFixedHeightMode(enable: boolean): void;
    public setGridLines(gridLines: TreeViewGridLines): void;
    public setHadjustment(adjustment: Adjustment): void;
    public setHeadersClickable(setting: boolean): void;
    public setHeadersVisible(headersVisible: boolean): void;
    public setHoverExpand(expand: boolean): void;
    public setHoverSelection(hover: boolean): void;
    public setLevelIndentation(indentation: number): void;
    public setModel(model: TreeModel): void;
    public setReorderable(reorderable: boolean): void;
    public setRowSeparatorFunc(func: TreeViewRowSeparatorFunc, data: any, destroy: GLib.DestroyNotify): void;
    public setRubberBanding(enable: boolean): void;
    public setRulesHint(setting: boolean): void;
    public setSearchColumn(column: number): void;
    public setSearchEntry(entry: Entry): void;
    public setSearchEqualFunc(searchEqualFunc: TreeViewSearchEqualFunc, searchUserData: any, searchDestroy: GLib.DestroyNotify): void;
    public setSearchPositionFunc(func: TreeViewSearchPositionFunc, data: any, destroy: GLib.DestroyNotify): void;
    public setShowExpanders(enabled: boolean): void;
    public setTooltipCell(tooltip: Tooltip, path: TreePath, column: TreeViewColumn, cell: CellRenderer): void;
    public setTooltipColumn(column: number): void;
    public setTooltipRow(tooltip: Tooltip, path: TreePath): void;
    public setVadjustment(adjustment: Adjustment): void;
    public unsetRowsDragDest(): void;
    public unsetRowsDragSource(): void;
    public columnsChanged(): void;
    public cursorChanged(): void;
    public expandCollapseCursorRow(logical: boolean, expand: boolean, openAll: boolean): boolean;
    public moveCursor(step: MovementStep, count: number): boolean;
    public rowCollapsed(iter: TreeIter, path: TreePath): void;
    public selectAll(): boolean;
    public selectCursorParent(): boolean;
    public selectCursorRow(startEditing: boolean): boolean;
    public startInteractiveSearch(): boolean;
    public testCollapseRow(iter: TreeIter, path: TreePath): boolean;
    public testExpandRow(iter: TreeIter, path: TreePath): boolean;
    public toggleCursorRow(): boolean;
    public unselectAll(): boolean;
  }
  
  interface TreeViewProps extends ContainerProps, Atk.ImplementorIfaceProps, BuildableProps, ScrollableProps {
    activateOnSingleClick: boolean;
    enableGridLines: TreeViewGridLines;
    enableSearch: boolean;
    enableTreeLines: boolean;
    expanderColumn: TreeViewColumn;
    fixedHeightMode: boolean;
    headersClickable: boolean;
    headersVisible: boolean;
    hoverExpand: boolean;
    hoverSelection: boolean;
    levelIndentation: number;
    model: TreeModel;
    reorderable: boolean;
    rubberBanding: boolean;
    rulesHint: boolean;
    searchColumn: number;
    showExpanders: boolean;
    tooltipColumn: number;
  }
  
  export class TreeViewAccessible extends ContainerAccessible implements Atk.Component, Atk.Selection, Atk.Table, CellAccessibleParent {
    constructor(props?: TreeViewAccessibleProps);
  }
  
  interface TreeViewAccessibleProps extends ContainerAccessibleProps, Atk.ComponentProps, Atk.SelectionProps, Atk.TableProps, CellAccessibleParentProps {
    
  }
  
  export class TreeViewColumn extends GObject.InitiallyUnowned implements Buildable, CellLayout {
    constructor(props?: TreeViewColumnProps);
    
    alignment: number;
    cellArea: CellArea;
    clickable: boolean;
    expand: boolean;
    fixedWidth: number;
    maxWidth: number;
    minWidth: number;
    reorderable: boolean;
    resizable: boolean;
    sizing: TreeViewColumnSizing;
    sortColumnId: number;
    sortIndicator: boolean;
    sortOrder: SortType;
    spacing: number;
    title: string;
    visible: boolean;
    widget: Widget;
    width: number;
    xOffset: number;
    
    public addAttribute(cellRenderer: CellRenderer, attribute: string, column: number): void;
    public cellGetPosition(cellRenderer: CellRenderer, xOffset: number, width: number): boolean;
    public cellGetSize(cellArea: Gdk.Rectangle, xOffset: number, yOffset: number, width: number, height: number): void;
    public cellIsVisible(): boolean;
    public cellSetCellData(treeModel: TreeModel, iter: TreeIter, isExpander: boolean, isExpanded: boolean): void;
    public clear(): void;
    public clearAttributes(cellRenderer: CellRenderer): void;
    public clicked(): void;
    public focusCell(cell: CellRenderer): void;
    public getAlignment(): number;
    public getButton(): Widget;
    public getClickable(): boolean;
    public getExpand(): boolean;
    public getFixedWidth(): number;
    public getMaxWidth(): number;
    public getMinWidth(): number;
    public getReorderable(): boolean;
    public getResizable(): boolean;
    public getSizing(): TreeViewColumnSizing;
    public getSortColumnId(): number;
    public getSortIndicator(): boolean;
    public getSortOrder(): SortType;
    public getSpacing(): number;
    public getTitle(): string;
    public getTreeView(): Widget;
    public getVisible(): boolean;
    public getWidget(): Widget;
    public getWidth(): number;
    public getXOffset(): number;
    public packEnd(cell: CellRenderer, expand: boolean): void;
    public packStart(cell: CellRenderer, expand: boolean): void;
    public queueResize(): void;
    public setAlignment(xalign: number): void;
    public setAttributes(cellRenderer: CellRenderer, ...params: any[]): void;
    public setCellDataFunc(cellRenderer: CellRenderer, func: TreeCellDataFunc, funcData: any, destroy: GLib.DestroyNotify): void;
    public setClickable(clickable: boolean): void;
    public setExpand(expand: boolean): void;
    public setFixedWidth(fixedWidth: number): void;
    public setMaxWidth(maxWidth: number): void;
    public setMinWidth(minWidth: number): void;
    public setReorderable(reorderable: boolean): void;
    public setResizable(resizable: boolean): void;
    public setSizing(type: TreeViewColumnSizing): void;
    public setSortColumnId(sortColumnId: number): void;
    public setSortIndicator(setting: boolean): void;
    public setSortOrder(order: SortType): void;
    public setSpacing(spacing: number): void;
    public setTitle(title: string): void;
    public setVisible(visible: boolean): void;
    public setWidget(widget: Widget): void;
  }
  
  interface TreeViewColumnProps extends GObject.InitiallyUnownedProps, BuildableProps, CellLayoutProps {
    alignment: number;
    cellArea: CellArea;
    clickable: boolean;
    expand: boolean;
    fixedWidth: number;
    maxWidth: number;
    minWidth: number;
    reorderable: boolean;
    resizable: boolean;
    sizing: TreeViewColumnSizing;
    sortColumnId: number;
    sortIndicator: boolean;
    sortOrder: SortType;
    spacing: number;
    title: string;
    visible: boolean;
    widget: Widget;
    width: number;
    xOffset: number;
  }
  
  export class UIManager extends GObject.Object implements Buildable {
    constructor(props?: UIManagerProps);
    
    addTearoffs: boolean;
    ui: string;
    
    public addUi(mergeId: number, path: string, name: string, action: string, type: UIManagerItemType, top: boolean): void;
    public addUiFromFile(filename: string): number;
    public addUiFromResource(resourcePath: string): number;
    public addUiFromString(buffer: string, length: number): number;
    public ensureUpdate(): void;
    public getAccelGroup(): AccelGroup;
    public getAction(path: string): Action;
    public getActionGroups(): GLib.List;
    public getAddTearoffs(): boolean;
    public getToplevels(types: UIManagerItemType): GLib.SList;
    public getUi(): string;
    public getWidget(path: string): Widget;
    public insertActionGroup(actionGroup: ActionGroup, pos: number): void;
    public newMergeId(): number;
    public removeActionGroup(actionGroup: ActionGroup): void;
    public removeUi(mergeId: number): void;
    public setAddTearoffs(addTearoffs: boolean): void;
    public actionsChanged(): void;
    public addWidget(widget: Widget): void;
    public connectProxy(action: Action, proxy: Widget): void;
    public disconnectProxy(action: Action, proxy: Widget): void;
    public postActivate(action: Action): void;
    public preActivate(action: Action): void;
  }
  
  interface UIManagerProps extends GObject.ObjectProps, BuildableProps {
    addTearoffs: boolean;
    ui: string;
  }
  
  export class VBox extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: VBoxProps);
  }
  
  interface VBoxProps extends BoxProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    
  }
  
  export class VButtonBox extends ButtonBox implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: VButtonBoxProps);
  }
  
  interface VButtonBoxProps extends ButtonBoxProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    
  }
  
  export class VPaned extends Paned implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: VPanedProps);
  }
  
  interface VPanedProps extends PanedProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    
  }
  
  export class VScale extends Scale implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: VScaleProps);
  }
  
  interface VScaleProps extends ScaleProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    
  }
  
  export class VScrollbar extends Scrollbar implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: VScrollbarProps);
  }
  
  interface VScrollbarProps extends ScrollbarProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    
  }
  
  export class VSeparator extends Separator implements Atk.ImplementorIface, Buildable, Orientable {
    constructor(props?: VSeparatorProps);
  }
  
  interface VSeparatorProps extends SeparatorProps, Atk.ImplementorIfaceProps, BuildableProps, OrientableProps {
    
  }
  
  export class Viewport extends Bin implements Atk.ImplementorIface, Buildable, Scrollable {
    constructor(props?: ViewportProps);
    
    shadowType: ShadowType;
    
    public getBinWindow(): Gdk.Window;
    public getHadjustment(): Adjustment;
    public getShadowType(): ShadowType;
    public getVadjustment(): Adjustment;
    public getViewWindow(): Gdk.Window;
    public setHadjustment(adjustment: Adjustment): void;
    public setShadowType(type: ShadowType): void;
    public setVadjustment(adjustment: Adjustment): void;
  }
  
  interface ViewportProps extends BinProps, Atk.ImplementorIfaceProps, BuildableProps, ScrollableProps {
    shadowType: ShadowType;
  }
  
  export class VolumeButton extends ScaleButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable, Orientable {
    constructor(props?: VolumeButtonProps);
    
    useSymbolic: boolean;
  }
  
  interface VolumeButtonProps extends ScaleButtonProps, Atk.ImplementorIfaceProps, ActionableProps, ActivatableProps, BuildableProps, OrientableProps {
    useSymbolic: boolean;
  }
  
  export class Widget extends GObject.InitiallyUnowned implements Atk.ImplementorIface, Buildable {
    constructor(props?: WidgetProps);
    
    appPaintable: boolean;
    canDefault: boolean;
    canFocus: boolean;
    compositeChild: boolean;
    doubleBuffered: boolean;
    events: Gdk.EventMask;
    expand: boolean;
    focusOnClick: boolean;
    halign: Align;
    hasDefault: boolean;
    hasFocus: boolean;
    hasTooltip: boolean;
    heightRequest: number;
    hexpand: boolean;
    hexpandSet: boolean;
    isFocus: boolean;
    margin: number;
    marginBottom: number;
    marginEnd: number;
    marginLeft: number;
    marginRight: number;
    marginStart: number;
    marginTop: number;
    name: string;
    noShowAll: boolean;
    opacity: number;
    parent: Container;
    receivesDefault: boolean;
    scaleFactor: number;
    sensitive: boolean;
    style: Style;
    tooltipMarkup: string;
    tooltipText: string;
    valign: Align;
    vexpand: boolean;
    vexpandSet: boolean;
    visible: boolean;
    widthRequest: number;
    window: Gdk.Window;
    
    public activate(): boolean;
    public addAccelerator(accelSignal: string, accelGroup: AccelGroup, accelKey: number, accelMods: Gdk.ModifierType, accelFlags: AccelFlags): void;
    public addDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void;
    public addEvents(events: number): void;
    public addMnemonicLabel(label: Widget): void;
    public addTickCallback(callback: TickCallback, userData: any, notify: GLib.DestroyNotify): number;
    public canActivateAccel(signalId: number): boolean;
    public childFocus(direction: DirectionType): boolean;
    public childNotify(childProperty: string): void;
    public classPath(pathLength: number, path: string, pathReversed: string): void;
    public computeExpand(orientation: Orientation): boolean;
    public createPangoContext(): Pango.Context;
    public createPangoLayout(text: string): Pango.Layout;
    public destroy(): void;
    public destroyed(widgetPointer: Widget): void;
    public deviceIsShadowed(device: Gdk.Device): boolean;
    public dragBegin(targets: TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event): Gdk.DragContext;
    public dragBeginWithCoordinates(targets: TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event, x: number, _y: number): Gdk.DragContext;
    public dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean;
    public dragDestAddImageTargets(): void;
    public dragDestAddTextTargets(): void;
    public dragDestAddUriTargets(): void;
    public dragDestFindTarget(context: Gdk.DragContext, targetList: TargetList): Gdk.Atom;
    public dragDestGetTargetList(): TargetList;
    public dragDestGetTrackMotion(): boolean;
    public dragDestSet(flags: DestDefaults, targets: TargetEntry[], nTargets: number, actions: Gdk.DragAction): void;
    public dragDestSetProxy(proxyWindow: Gdk.Window, protocol: Gdk.DragProtocol, useCoordinates: boolean): void;
    public dragDestSetTargetList(targetList: TargetList): void;
    public dragDestSetTrackMotion(trackMotion: boolean): void;
    public dragDestUnset(): void;
    public dragGetData(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void;
    public dragHighlight(): void;
    public dragSourceAddImageTargets(): void;
    public dragSourceAddTextTargets(): void;
    public dragSourceAddUriTargets(): void;
    public dragSourceGetTargetList(): TargetList;
    public dragSourceSet(startButtonMask: Gdk.ModifierType, targets: TargetEntry[], nTargets: number, actions: Gdk.DragAction): void;
    public dragSourceSetIconGicon(icon: Gio.Icon): void;
    public dragSourceSetIconName(iconName: string): void;
    public dragSourceSetIconPixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
    public dragSourceSetIconStock(stockId: string): void;
    public dragSourceSetTargetList(targetList: TargetList): void;
    public dragSourceUnset(): void;
    public dragUnhighlight(): void;
    public draw(cr: cairo.Context): void;
    public ensureStyle(): void;
    public errorBell(): void;
    public event(event: Gdk.Event): boolean;
    public freezeChildNotify(): void;
    public getAccessible(): Atk.Object;
    public getActionGroup(prefix: string): Gio.ActionGroup;
    public getAllocatedBaseline(): number;
    public getAllocatedHeight(): number;
    public getAllocatedSize(allocation: Allocation, baseline: number): void;
    public getAllocatedWidth(): number;
    public getAllocation(allocation: Allocation): void;
    public getAncestor(widgetType: GObject.Type): Widget;
    public getAppPaintable(): boolean;
    public getCanDefault(): boolean;
    public getCanFocus(): boolean;
    public getChildRequisition(requisition: Requisition): void;
    public getChildVisible(): boolean;
    public getClip(clip: Allocation): void;
    public getClipboard(selection: Gdk.Atom): Clipboard;
    public getCompositeName(): string;
    public getDeviceEnabled(device: Gdk.Device): boolean;
    public getDeviceEvents(device: Gdk.Device): Gdk.EventMask;
    public getDirection(): TextDirection;
    public getDisplay(): Gdk.Display;
    public getDoubleBuffered(): boolean;
    public getEvents(): number;
    public getFocusOnClick(): boolean;
    public getFontMap(): Pango.FontMap;
    public getFontOptions(): cairo.FontOptions;
    public getFrameClock(): Gdk.FrameClock;
    public getHalign(): Align;
    public getHasTooltip(): boolean;
    public getHasWindow(): boolean;
    public getHexpand(): boolean;
    public getHexpandSet(): boolean;
    public getMapped(): boolean;
    public getMarginBottom(): number;
    public getMarginEnd(): number;
    public getMarginLeft(): number;
    public getMarginRight(): number;
    public getMarginStart(): number;
    public getMarginTop(): number;
    public getModifierMask(intent: Gdk.ModifierIntent): Gdk.ModifierType;
    public getModifierStyle(): RcStyle;
    public getName(): string;
    public getNoShowAll(): boolean;
    public getOpacity(): number;
    public getPangoContext(): Pango.Context;
    public getParent(): Widget;
    public getParentWindow(): Gdk.Window;
    public getPath(): WidgetPath;
    public getPointer(x: number, _y: number): void;
    public getPreferredHeight(minimumHeight: number, naturalHeight: number): void;
    public getPreferredHeightAndBaselineForWidth(width: number, minimumHeight: number, naturalHeight: number, minimumBaseline: number, naturalBaseline: number): void;
    public getPreferredHeightForWidth(width: number, minimumHeight: number, naturalHeight: number): void;
    public getPreferredSize(minimumSize: Requisition, naturalSize: Requisition): void;
    public getPreferredWidth(minimumWidth: number, naturalWidth: number): void;
    public getPreferredWidthForHeight(height: number, minimumWidth: number, naturalWidth: number): void;
    public getRealized(): boolean;
    public getReceivesDefault(): boolean;
    public getRequestMode(): SizeRequestMode;
    public getRequisition(requisition: Requisition): void;
    public getRootWindow(): Gdk.Window;
    public getScaleFactor(): number;
    public getScreen(): Gdk.Screen;
    public getSensitive(): boolean;
    public getSettings(): Settings;
    public getSizeRequest(width: number, height: number): void;
    public getState(): StateType;
    public getStateFlags(): StateFlags;
    public getStyle(): Style;
    public getStyleContext(): StyleContext;
    public getSupportMultidevice(): boolean;
    public getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object;
    public getTooltipMarkup(): string;
    public getTooltipText(): string;
    public getTooltipWindow(): Window;
    public getToplevel(): Widget;
    public getValign(): Align;
    public getValignWithBaseline(): Align;
    public getVexpand(): boolean;
    public getVexpandSet(): boolean;
    public getVisible(): boolean;
    public getVisual(): Gdk.Visual;
    public getWindow(): Gdk.Window;
    public grabAdd(): void;
    public grabDefault(): void;
    public grabFocus(): void;
    public grabRemove(): void;
    public hasDefault(): boolean;
    public hasFocus(): boolean;
    public hasGrab(): boolean;
    public hasRcStyle(): boolean;
    public hasScreen(): boolean;
    public hasVisibleFocus(): boolean;
    public hide(): void;
    public hideOnDelete(): boolean;
    public inDestruction(): boolean;
    public initTemplate(): void;
    public inputShapeCombineRegion(region: cairo.Region): void;
    public insertActionGroup(name: string, group: Gio.ActionGroup): void;
    public intersect(area: Gdk.Rectangle, intersection: Gdk.Rectangle): boolean;
    public isAncestor(ancestor: Widget): boolean;
    public isComposited(): boolean;
    public isDrawable(): boolean;
    public isFocus(): boolean;
    public isSensitive(): boolean;
    public isToplevel(): boolean;
    public isVisible(): boolean;
    public keynavFailed(direction: DirectionType): boolean;
    public listAccelClosures(): GLib.List;
    public listActionPrefixes(): string[];
    public listMnemonicLabels(): GLib.List;
    public map(): void;
    public mnemonicActivate(groupCycling: boolean): boolean;
    public modifyBase(state: StateType, color: Gdk.Color): void;
    public modifyBg(state: StateType, color: Gdk.Color): void;
    public modifyCursor(primary: Gdk.Color, secondary: Gdk.Color): void;
    public modifyFg(state: StateType, color: Gdk.Color): void;
    public modifyFont(fontDesc: Pango.FontDescription): void;
    public modifyStyle(style: RcStyle): void;
    public modifyText(state: StateType, color: Gdk.Color): void;
    public overrideBackgroundColor(state: StateFlags, color: Gdk.RGBA): void;
    public overrideColor(state: StateFlags, color: Gdk.RGBA): void;
    public overrideCursor(cursor: Gdk.RGBA, secondaryCursor: Gdk.RGBA): void;
    public overrideFont(fontDesc: Pango.FontDescription): void;
    public overrideSymbolicColor(name: string, color: Gdk.RGBA): void;
    public path(pathLength: number, path: string, pathReversed: string): void;
    public queueAllocate(): void;
    public queueComputeExpand(): void;
    public queueDraw(): void;
    public queueDrawArea(x: number, _y: number, width: number, height: number): void;
    public queueDrawRegion(region: cairo.Region): void;
    public queueResize(): void;
    public queueResizeNoRedraw(): void;
    public realize(): void;
    public regionIntersect(region: cairo.Region): cairo.Region;
    public registerWindow(window: Gdk.Window): void;
    public removeAccelerator(accelGroup: AccelGroup, accelKey: number, accelMods: Gdk.ModifierType): boolean;
    public removeMnemonicLabel(label: Widget): void;
    public removeTickCallback(_id: number): void;
    public renderIcon(stockId: string, size: number, detail: string): GdkPixbuf.Pixbuf;
    public renderIconPixbuf(stockId: string, size: number): GdkPixbuf.Pixbuf;
    public reparent(newParent: Widget): void;
    public resetRcStyles(): void;
    public resetStyle(): void;
    public sendExpose(event: Gdk.Event): number;
    public sendFocusChange(event: Gdk.Event): boolean;
    public setAccelPath(accelPath: string, accelGroup: AccelGroup): void;
    public setAllocation(allocation: Allocation): void;
    public setAppPaintable(appPaintable: boolean): void;
    public setCanDefault(canDefault: boolean): void;
    public setCanFocus(canFocus: boolean): void;
    public setChildVisible(isVisible: boolean): void;
    public setClip(clip: Allocation): void;
    public setCompositeName(name: string): void;
    public setDeviceEnabled(device: Gdk.Device, enabled: boolean): void;
    public setDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void;
    public setDirection(dir: TextDirection): void;
    public setDoubleBuffered(doubleBuffered: boolean): void;
    public setEvents(events: number): void;
    public setFocusOnClick(focusOnClick: boolean): void;
    public setFontMap(fontMap: Pango.FontMap): void;
    public setFontOptions(options: cairo.FontOptions): void;
    public setHalign(align: Align): void;
    public setHasTooltip(hasTooltip: boolean): void;
    public setHasWindow(hasWindow: boolean): void;
    public setHexpand(expand: boolean): void;
    public setHexpandSet(set: boolean): void;
    public setMapped(mapped: boolean): void;
    public setMarginBottom(margin: number): void;
    public setMarginEnd(margin: number): void;
    public setMarginLeft(margin: number): void;
    public setMarginRight(margin: number): void;
    public setMarginStart(margin: number): void;
    public setMarginTop(margin: number): void;
    public setName(name: string): void;
    public setNoShowAll(noShowAll: boolean): void;
    public setOpacity(opacity: number): void;
    public setParent(parent: Widget): void;
    public setParentWindow(parentWindow: Gdk.Window): void;
    public setRealized(realized: boolean): void;
    public setReceivesDefault(receivesDefault: boolean): void;
    public setRedrawOnAllocate(redrawOnAllocate: boolean): void;
    public setSensitive(sensitive: boolean): void;
    public setSizeRequest(width: number, height: number): void;
    public setState(state: StateType): void;
    public setStateFlags(flags: StateFlags, clear: boolean): void;
    public setStyle(style: Style): void;
    public setSupportMultidevice(supportMultidevice: boolean): void;
    public setTooltipMarkup(markup: string): void;
    public setTooltipText(text: string): void;
    public setTooltipWindow(customWindow: Window): void;
    public setValign(align: Align): void;
    public setVexpand(expand: boolean): void;
    public setVexpandSet(set: boolean): void;
    public setVisible(visible: boolean): void;
    public setVisual(visual: Gdk.Visual): void;
    public setWindow(window: Gdk.Window): void;
    public shapeCombineRegion(region: cairo.Region): void;
    public show(): void;
    public showAll(): void;
    public showNow(): void;
    public sizeAllocate(allocation: Allocation): void;
    public sizeAllocateWithBaseline(allocation: Allocation, baseline: number): void;
    public sizeRequest(requisition: Requisition): void;
    public styleAttach(): void;
    public styleGet(firstPropertyName: string, ...params: any[]): void;
    public styleGetProperty(propertyName: string, value: GObject.Value): void;
    public styleGetValist(firstPropertyName: string, varArgs: any[]): void;
    public thawChildNotify(): void;
    public translateCoordinates(destWidget: Widget, srcX: number, srcY: number, destX: number, destY: number): boolean;
    public triggerTooltipQuery(): void;
    public unmap(): void;
    public unparent(): void;
    public unrealize(): void;
    public unregisterWindow(window: Gdk.Window): void;
    public unsetStateFlags(flags: StateFlags): void;
    public adjustBaselineAllocation(baseline: number): void;
    public adjustBaselineRequest(minimumBaseline: number, naturalBaseline: number): void;
    public adjustSizeAllocation(orientation: Orientation, minimumSize: number, naturalSize: number, allocatedPos: number, allocatedSize: number): void;
    public adjustSizeRequest(orientation: Orientation, minimumSize: number, naturalSize: number): void;
    public buttonPressEvent(event: Gdk.EventButton): boolean;
    public buttonReleaseEvent(event: Gdk.EventButton): boolean;
    public compositedChanged(): void;
    public configureEvent(event: Gdk.EventConfigure): boolean;
    public damageEvent(event: Gdk.EventExpose): boolean;
    public deleteEvent(event: Gdk.EventAny): boolean;
    public destroyEvent(event: Gdk.EventAny): boolean;
    public directionChanged(previousDirection: TextDirection): void;
    public dispatchChildPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void;
    public dragDataDelete(context: Gdk.DragContext): void;
    public dragDataGet(context: Gdk.DragContext, selectionData: SelectionData, info: number, time_: number): void;
    public dragDataReceived(context: Gdk.DragContext, x: number, _y: number, selectionData: SelectionData, info: number, time_: number): void;
    public dragDrop(context: Gdk.DragContext, x: number, _y: number, time_: number): boolean;
    public dragEnd(context: Gdk.DragContext): void;
    public dragFailed(context: Gdk.DragContext, result: DragResult): boolean;
    public dragLeave(context: Gdk.DragContext, time_: number): void;
    public dragMotion(context: Gdk.DragContext, x: number, _y: number, time_: number): boolean;
    public enterNotifyEvent(event: Gdk.EventCrossing): boolean;
    public focus(direction: DirectionType): boolean;
    public focusInEvent(event: Gdk.EventFocus): boolean;
    public focusOutEvent(event: Gdk.EventFocus): boolean;
    public grabBrokenEvent(event: Gdk.EventGrabBroken): boolean;
    public grabNotify(wasGrabbed: boolean): void;
    public hierarchyChanged(previousToplevel: Widget): void;
    public keyPressEvent(event: Gdk.EventKey): boolean;
    public keyReleaseEvent(event: Gdk.EventKey): boolean;
    public leaveNotifyEvent(event: Gdk.EventCrossing): boolean;
    public mapEvent(event: Gdk.EventAny): boolean;
    public motionNotifyEvent(event: Gdk.EventMotion): boolean;
    public moveFocus(direction: DirectionType): void;
    public parentSet(previousParent: Widget): void;
    public popupMenu(): boolean;
    public propertyNotifyEvent(event: Gdk.EventProperty): boolean;
    public proximityInEvent(event: Gdk.EventProximity): boolean;
    public proximityOutEvent(event: Gdk.EventProximity): boolean;
    public queryTooltip(x: number, _y: number, keyboardTooltip: boolean, tooltip: Tooltip): boolean;
    public screenChanged(previousScreen: Gdk.Screen): void;
    public scrollEvent(event: Gdk.EventScroll): boolean;
    public selectionClearEvent(event: Gdk.EventSelection): boolean;
    public selectionGet(selectionData: SelectionData, info: number, time_: number): void;
    public selectionNotifyEvent(event: Gdk.EventSelection): boolean;
    public selectionReceived(selectionData: SelectionData, time_: number): void;
    public selectionRequestEvent(event: Gdk.EventSelection): boolean;
    public showHelp(helpType: WidgetHelpType): boolean;
    public stateChanged(previousState: StateType): void;
    public stateFlagsChanged(previousStateFlags: StateFlags): void;
    public styleSet(previousStyle: Style): void;
    public styleUpdated(): void;
    public touchEvent(event: Gdk.EventTouch): boolean;
    public unmapEvent(event: Gdk.EventAny): boolean;
    public visibilityNotifyEvent(event: Gdk.EventVisibility): boolean;
    public windowStateEvent(event: Gdk.EventWindowState): boolean;
    
    public static getDefaultDirection(): TextDirection;
    public static getDefaultStyle(): Style;
    public static popCompositeChild(): void;
    public static pushCompositeChild(): void;
    public static setDefaultDirection(dir: TextDirection): void;
  }
  
  interface WidgetProps extends GObject.InitiallyUnownedProps, Atk.ImplementorIfaceProps, BuildableProps {
    appPaintable: boolean;
    canDefault: boolean;
    canFocus: boolean;
    compositeChild: boolean;
    doubleBuffered: boolean;
    events: Gdk.EventMask;
    expand: boolean;
    focusOnClick: boolean;
    halign: Align;
    hasDefault: boolean;
    hasFocus: boolean;
    hasTooltip: boolean;
    heightRequest: number;
    hexpand: boolean;
    hexpandSet: boolean;
    isFocus: boolean;
    margin: number;
    marginBottom: number;
    marginEnd: number;
    marginLeft: number;
    marginRight: number;
    marginStart: number;
    marginTop: number;
    name: string;
    noShowAll: boolean;
    opacity: number;
    parent: Container;
    receivesDefault: boolean;
    scaleFactor: number;
    sensitive: boolean;
    style: Style;
    tooltipMarkup: string;
    tooltipText: string;
    valign: Align;
    vexpand: boolean;
    vexpandSet: boolean;
    visible: boolean;
    widthRequest: number;
    window: Gdk.Window;
  }
  
  export class WidgetAccessible extends Accessible implements Atk.Component {
    constructor(props?: WidgetAccessibleProps);
  }
  
  interface WidgetAccessibleProps extends AccessibleProps, Atk.ComponentProps {
    
  }
  
  export class Window extends Bin implements Atk.ImplementorIface, Buildable {
    constructor(props?: WindowProps);
    
    acceptFocus: boolean;
    application: Application;
    attachedTo: Widget;
    decorated: boolean;
    defaultHeight: number;
    defaultWidth: number;
    deletable: boolean;
    destroyWithParent: boolean;
    focusOnMap: boolean;
    focusVisible: boolean;
    gravity: Gdk.Gravity;
    hasResizeGrip: boolean;
    hasToplevelFocus: boolean;
    hideTitlebarWhenMaximized: boolean;
    icon: GdkPixbuf.Pixbuf;
    iconName: string;
    isActive: boolean;
    isMaximized: boolean;
    mnemonicsVisible: boolean;
    modal: boolean;
    resizable: boolean;
    resizeGripVisible: boolean;
    role: string;
    screen: Gdk.Screen;
    skipPagerHint: boolean;
    skipTaskbarHint: boolean;
    startupId: string;
    title: string;
    transientFor: Window;
    type: WindowType;
    typeHint: Gdk.WindowTypeHint;
    urgencyHint: boolean;
    windowPosition: WindowPosition;
    
    public activateDefault(): boolean;
    public activateFocus(): boolean;
    public activateKey(event: Gdk.EventKey): boolean;
    public addAccelGroup(accelGroup: AccelGroup): void;
    public addMnemonic(keyval: number, target: Widget): void;
    public beginMoveDrag(button: number, rootX: number, rootY: number, timestamp: number): void;
    public beginResizeDrag(edge: Gdk.WindowEdge, button: number, rootX: number, rootY: number, timestamp: number): void;
    public close(): void;
    public deiconify(): void;
    public fullscreen(): void;
    public fullscreenOnMonitor(screen: Gdk.Screen, monitor: number): void;
    public getAcceptFocus(): boolean;
    public getApplication(): Application;
    public getAttachedTo(): Widget;
    public getDecorated(): boolean;
    public getDefaultSize(width: number, height: number): void;
    public getDefaultWidget(): Widget;
    public getDeletable(): boolean;
    public getDestroyWithParent(): boolean;
    public getFocus(): Widget;
    public getFocusOnMap(): boolean;
    public getFocusVisible(): boolean;
    public getGravity(): Gdk.Gravity;
    public getGroup(): WindowGroup;
    public getHasResizeGrip(): boolean;
    public getHideTitlebarWhenMaximized(): boolean;
    public getIcon(): GdkPixbuf.Pixbuf;
    public getIconList(): GLib.List;
    public getIconName(): string;
    public getMnemonicModifier(): Gdk.ModifierType;
    public getMnemonicsVisible(): boolean;
    public getModal(): boolean;
    public getOpacity(): number;
    public getPosition(rootX: number, rootY: number): void;
    public getResizable(): boolean;
    public getResizeGripArea(rect: Gdk.Rectangle): boolean;
    public getRole(): string;
    public getScreen(): Gdk.Screen;
    public getSize(width: number, height: number): void;
    public getSkipPagerHint(): boolean;
    public getSkipTaskbarHint(): boolean;
    public getTitle(): string;
    public getTitlebar(): Widget;
    public getTransientFor(): Window;
    public getTypeHint(): Gdk.WindowTypeHint;
    public getUrgencyHint(): boolean;
    public getWindowType(): WindowType;
    public hasGroup(): boolean;
    public hasToplevelFocus(): boolean;
    public iconify(): void;
    public isActive(): boolean;
    public isMaximized(): boolean;
    public maximize(): void;
    public mnemonicActivate(keyval: number, modifier: Gdk.ModifierType): boolean;
    public move(x: number, _y: number): void;
    public parseGeometry(geometry: string): boolean;
    public present(): void;
    public presentWithTime(timestamp: number): void;
    public propagateKeyEvent(event: Gdk.EventKey): boolean;
    public removeAccelGroup(accelGroup: AccelGroup): void;
    public removeMnemonic(keyval: number, target: Widget): void;
    public reshowWithInitialSize(): void;
    public resize(width: number, height: number): void;
    public resizeGripIsVisible(): boolean;
    public resizeToGeometry(width: number, height: number): void;
    public setAcceptFocus(setting: boolean): void;
    public setApplication(application: Application): void;
    public setAttachedTo(attachWidget: Widget): void;
    public setDecorated(setting: boolean): void;
    public setDefault(defaultWidget: Widget): void;
    public setDefaultGeometry(width: number, height: number): void;
    public setDefaultSize(width: number, height: number): void;
    public setDeletable(setting: boolean): void;
    public setDestroyWithParent(setting: boolean): void;
    public setFocus(focus: Widget): void;
    public setFocusOnMap(setting: boolean): void;
    public setFocusVisible(setting: boolean): void;
    public setGeometryHints(geometryWidget: Widget, geometry: Gdk.Geometry, geomMask: Gdk.WindowHints): void;
    public setGravity(gravity: Gdk.Gravity): void;
    public setHasResizeGrip(value: boolean): void;
    public setHasUserRefCount(setting: boolean): void;
    public setHideTitlebarWhenMaximized(setting: boolean): void;
    public setIcon(icon: GdkPixbuf.Pixbuf): void;
    public setIconFromFile(filename: string): boolean;
    public setIconList(list: GLib.List): void;
    public setIconName(name: string): void;
    public setKeepAbove(setting: boolean): void;
    public setKeepBelow(setting: boolean): void;
    public setMnemonicModifier(modifier: Gdk.ModifierType): void;
    public setMnemonicsVisible(setting: boolean): void;
    public setModal(modal: boolean): void;
    public setOpacity(opacity: number): void;
    public setPosition(position: WindowPosition): void;
    public setResizable(resizable: boolean): void;
    public setRole(role: string): void;
    public setScreen(screen: Gdk.Screen): void;
    public setSkipPagerHint(setting: boolean): void;
    public setSkipTaskbarHint(setting: boolean): void;
    public setStartupId(startupId: string): void;
    public setTitle(title: string): void;
    public setTitlebar(titlebar: Widget): void;
    public setTransientFor(parent: Window): void;
    public setTypeHint(hint: Gdk.WindowTypeHint): void;
    public setUrgencyHint(setting: boolean): void;
    public setWmclass(wmclassName: string, wmclassClass: string): void;
    public stick(): void;
    public unfullscreen(): void;
    public unmaximize(): void;
    public unstick(): void;
    public enableDebugging(toggle: boolean): boolean;
    public keysChanged(): void;
    
    public static getDefaultIconList(): GLib.List;
    public static getDefaultIconName(): string;
    public static listToplevels(): GLib.List;
    public static setAutoStartupNotification(setting: boolean): void;
    public static setDefaultIcon(icon: GdkPixbuf.Pixbuf): void;
    public static setDefaultIconFromFile(filename: string): boolean;
    public static setDefaultIconList(list: GLib.List): void;
    public static setDefaultIconName(name: string): void;
    public static setInteractiveDebugging(enable: boolean): void;
  }
  
  interface WindowProps extends BinProps, Atk.ImplementorIfaceProps, BuildableProps {
    acceptFocus: boolean;
    application: Application;
    attachedTo: Widget;
    decorated: boolean;
    defaultHeight: number;
    defaultWidth: number;
    deletable: boolean;
    destroyWithParent: boolean;
    focusOnMap: boolean;
    focusVisible: boolean;
    gravity: Gdk.Gravity;
    hasResizeGrip: boolean;
    hasToplevelFocus: boolean;
    hideTitlebarWhenMaximized: boolean;
    icon: GdkPixbuf.Pixbuf;
    iconName: string;
    isActive: boolean;
    isMaximized: boolean;
    mnemonicsVisible: boolean;
    modal: boolean;
    resizable: boolean;
    resizeGripVisible: boolean;
    role: string;
    screen: Gdk.Screen;
    skipPagerHint: boolean;
    skipTaskbarHint: boolean;
    startupId: string;
    title: string;
    transientFor: Window;
    type: WindowType;
    typeHint: Gdk.WindowTypeHint;
    urgencyHint: boolean;
    windowPosition: WindowPosition;
  }
  
  export class WindowAccessible extends ContainerAccessible implements Atk.Component, Atk.Window {
    constructor(props?: WindowAccessibleProps);
  }
  
  interface WindowAccessibleProps extends ContainerAccessibleProps, Atk.ComponentProps, Atk.WindowProps {
    
  }
  
  export class WindowGroup extends GObject.Object {
    constructor(props?: WindowGroupProps);
    
    public addWindow(window: Window): void;
    public getCurrentDeviceGrab(device: Gdk.Device): Widget;
    public getCurrentGrab(): Widget;
    public listWindows(): GLib.List;
    public removeWindow(window: Window): void;
  }
  
  interface WindowGroupProps extends GObject.ObjectProps {
    
  }

}