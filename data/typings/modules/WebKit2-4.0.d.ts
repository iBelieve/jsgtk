declare module "WebKit2" {
  import * as GObject from 'GObject'
  import * as GLib from 'GLib'
  import * as Gtk from 'Gtk'
  import * as Atk from 'Atk'
  import * as Gdk from 'Gdk'
  import * as GdkPixbuf from 'GdkPixbuf'
  import * as Gio from 'Gio'
  import * as Pango from 'Pango'
  import * as cairo from 'cairo'
  import * as xlib from 'xlib'
  import * as JavaScriptCore from 'JavaScriptCore'
  import * as Soup from 'Soup'
  
  export const EDITING_COMMAND_COPY: string;
  
  export const EDITING_COMMAND_CREATE_LINK: string;
  
  export const EDITING_COMMAND_CUT: string;
  
  export const EDITING_COMMAND_INSERT_IMAGE: string;
  
  export const EDITING_COMMAND_PASTE: string;
  
  export const EDITING_COMMAND_REDO: string;
  
  export const EDITING_COMMAND_SELECT_ALL: string;
  
  export const EDITING_COMMAND_UNDO: string;
  
  export const MAJOR_VERSION: number;
  
  export const MICRO_VERSION: number;
  
  export const MINOR_VERSION: number;
  
  export function downloadErrorQuark(): GLib.Quark;
  
  export function faviconDatabaseErrorQuark(): GLib.Quark;
  
  export function getMajorVersion(): number;
  
  export function getMicroVersion(): number;
  
  export function getMinorVersion(): number;
  
  export function javascriptErrorQuark(): GLib.Quark;
  
  export function networkErrorQuark(): GLib.Quark;
  
  export function pluginErrorQuark(): GLib.Quark;
  
  export function policyErrorQuark(): GLib.Quark;
  
  export function printErrorQuark(): GLib.Quark;
  
  export function snapshotErrorQuark(): GLib.Quark;
  
  export function userMediaPermissionIsForAudioDevice(request: UserMediaPermissionRequest): boolean;
  
  export function userMediaPermissionIsForVideoDevice(request: UserMediaPermissionRequest): boolean;
  
  export interface URISchemeRequestCallback {
  	(request: URISchemeRequest, userData: any): void;
  }
  
  export enum AuthenticationScheme {
    DEFAULT = 1,
    HTTP_BASIC = 2,
    HTTP_DIGEST = 3,
    HTML_FORM = 4,
    NTLM = 5,
    NEGOTIATE = 6,
    CLIENT_CERTIFICATE_REQUESTED = 7,
    SERVER_TRUST_EVALUATION_REQUESTED = 8,
    UNKNOWN = 100
  }
  
  export enum CacheModel {
    DOCUMENT_VIEWER = 0,
    WEB_BROWSER = 1,
    DOCUMENT_BROWSER = 2
  }
  
  export enum ContextMenuAction {
    NO_ACTION = 0,
    OPEN_LINK = 1,
    OPEN_LINK_IN_NEW_WINDOW = 2,
    DOWNLOAD_LINK_TO_DISK = 3,
    COPY_LINK_TO_CLIPBOARD = 4,
    OPEN_IMAGE_IN_NEW_WINDOW = 5,
    DOWNLOAD_IMAGE_TO_DISK = 6,
    COPY_IMAGE_TO_CLIPBOARD = 7,
    COPY_IMAGE_URL_TO_CLIPBOARD = 8,
    OPEN_FRAME_IN_NEW_WINDOW = 9,
    GO_BACK = 10,
    GO_FORWARD = 11,
    STOP = 12,
    RELOAD = 13,
    COPY = 14,
    CUT = 15,
    PASTE = 16,
    DELETE = 17,
    SELECT_ALL = 18,
    INPUT_METHODS = 19,
    UNICODE = 20,
    SPELLING_GUESS = 21,
    NO_GUESSES_FOUND = 22,
    IGNORE_SPELLING = 23,
    LEARN_SPELLING = 24,
    IGNORE_GRAMMAR = 25,
    FONT_MENU = 26,
    BOLD = 27,
    ITALIC = 28,
    UNDERLINE = 29,
    OUTLINE = 30,
    INSPECT_ELEMENT = 31,
    OPEN_VIDEO_IN_NEW_WINDOW = 32,
    OPEN_AUDIO_IN_NEW_WINDOW = 33,
    COPY_VIDEO_LINK_TO_CLIPBOARD = 34,
    COPY_AUDIO_LINK_TO_CLIPBOARD = 35,
    TOGGLE_MEDIA_CONTROLS = 36,
    TOGGLE_MEDIA_LOOP = 37,
    ENTER_VIDEO_FULLSCREEN = 38,
    MEDIA_PLAY = 39,
    MEDIA_PAUSE = 40,
    MEDIA_MUTE = 41,
    DOWNLOAD_VIDEO_TO_DISK = 42,
    DOWNLOAD_AUDIO_TO_DISK = 43,
    CUSTOM = 10000
  }
  
  export enum CookieAcceptPolicy {
    ALWAYS = 0,
    NEVER = 1,
    NO_THIRD_PARTY = 2
  }
  
  export enum CookiePersistentStorage {
    TEXT = 0,
    SQLITE = 1
  }
  
  export enum CredentialPersistence {
    NONE = 0,
    FOR_SESSION = 1,
    PERMANENT = 2
  }
  
  export enum DownloadError {
    NETWORK = 499,
    CANCELLED_BY_USER = 400,
    DESTINATION = 401
  }
  
  export enum FaviconDatabaseError {
    NOT_INITIALIZED = 0,
    FAVICON_NOT_FOUND = 1,
    FAVICON_UNKNOWN = 2
  }
  
  export enum InsecureContentEvent {
    RUN = 0,
    DISPLAYED = 1
  }
  
  export enum JavascriptError {
    FAILED = 699
  }
  
  export enum LoadEvent {
    STARTED = 0,
    REDIRECTED = 1,
    COMMITTED = 2,
    FINISHED = 3
  }
  
  export enum NavigationType {
    LINK_CLICKED = 0,
    FORM_SUBMITTED = 1,
    BACK_FORWARD = 2,
    RELOAD = 3,
    FORM_RESUBMITTED = 4,
    OTHER = 5
  }
  
  export enum NetworkError {
    FAILED = 399,
    TRANSPORT = 300,
    UNKNOWN_PROTOCOL = 301,
    CANCELLED = 302,
    FILE_DOES_NOT_EXIST = 303
  }
  
  export enum PluginError {
    FAILED = 299,
    CANNOT_FIND_PLUGIN = 200,
    CANNOT_LOAD_PLUGIN = 201,
    JAVA_UNAVAILABLE = 202,
    CONNECTION_CANCELLED = 203,
    WILL_HANDLE_LOAD = 204
  }
  
  export enum PolicyDecisionType {
    NAVIGATION_ACTION = 0,
    NEW_WINDOW_ACTION = 1,
    RESPONSE = 2
  }
  
  export enum PolicyError {
    FAILED = 199,
    CANNOT_SHOW_MIME_TYPE = 100,
    CANNOT_SHOW_URI = 101,
    FRAME_LOAD_INTERRUPTED_BY_POLICY_CHANGE = 102,
    CANNOT_USE_RESTRICTED_PORT = 103
  }
  
  export enum PrintError {
    GENERAL = 599,
    PRINTER_NOT_FOUND = 500,
    INVALID_PAGE_RANGE = 501
  }
  
  export enum PrintOperationResponse {
    PRINT = 0,
    CANCEL = 1
  }
  
  export enum ProcessModel {
    SHARED_SECONDARY_PROCESS = 0,
    MULTIPLE_SECONDARY_PROCESSES = 1
  }
  
  export enum SaveMode {
    MHTML = 0
  }
  
  export enum ScriptDialogType {
    ALERT = 0,
    CONFIRM = 1,
    PROMPT = 2,
    BEFORE_UNLOAD_CONFIRM = 3
  }
  
  export enum SnapshotError {
    CREATE = 799
  }
  
  export enum SnapshotRegion {
    VISIBLE = 0,
    FULL_DOCUMENT = 1
  }
  
  export enum TLSErrorsPolicy {
    IGNORE = 0,
    FAIL = 1
  }
  
  export enum UserContentInjectedFrames {
    ALL_FRAMES = 0,
    TOP_FRAME = 1
  }
  
  export enum UserScriptInjectionTime {
    START = 0,
    END = 1
  }
  
  export enum UserStyleLevel {
    USER = 0,
    AUTHOR = 1
  }
  
  export enum EditorTypingAttributes {
    NONE = 2,
    BOLD = 4,
    ITALIC = 8,
    UNDERLINE = 16,
    STRIKETHROUGH = 32
  }
  
  export enum FindOptions {
    NONE = 0,
    CASE_INSENSITIVE = 1,
    AT_WORD_STARTS = 2,
    TREAT_MEDIAL_CAPITAL_AS_WORD_START = 4,
    BACKWARDS = 8,
    WRAP_AROUND = 16
  }
  
  export enum HitTestResultContext {
    DOCUMENT = 2,
    LINK = 4,
    IMAGE = 8,
    MEDIA = 16,
    EDITABLE = 32,
    SCROLLBAR = 64,
    SELECTION = 128
  }
  
  export enum SnapshotOptions {
    NONE = 0,
    INCLUDE_SELECTION_HIGHLIGHTING = 1,
    TRANSPARENT_BACKGROUND = 2
  }
  
  export class AuthenticationRequestClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class AuthenticationRequestPrivate {
    
  }
  
  export class BackForwardListClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class BackForwardListItemClass {
    public parentClass?: GObject.InitiallyUnownedClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class BackForwardListItemPrivate {
    
  }
  
  export class BackForwardListPrivate {
    
  }
  
  export class ColorChooserRequestClass {
    public parentClass?: GObject.ObjectClass;
  }
  
  export class ColorChooserRequestPrivate {
    
  }
  
  export class ContextMenuClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class ContextMenuItemClass {
    public parentClass?: GObject.InitiallyUnownedClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class ContextMenuItemPrivate {
    
  }
  
  export class ContextMenuPrivate {
    
  }
  
  export class CookieManagerClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class CookieManagerPrivate {
    
  }
  
  export class Credential {
    public copy(): Credential;
    public free(): void;
    public getPassword(): string;
    public getPersistence(): CredentialPersistence;
    public getUsername(): string;
    public hasPassword(): boolean;
  }
  
  export class DownloadClass {
    public parentClass?: GObject.ObjectClass;
    
    decideDestination : { (download: Download, suggestedFilename: string): boolean; };
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class DownloadPrivate {
    
  }
  
  export class EditorStateClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class EditorStatePrivate {
    
  }
  
  export class FaviconDatabaseClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class FaviconDatabasePrivate {
    
  }
  
  export class FileChooserRequestClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class FileChooserRequestPrivate {
    
  }
  
  export class FindControllerClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class FindControllerPrivate {
    
  }
  
  export class FormSubmissionRequestClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class FormSubmissionRequestPrivate {
    
  }
  
  export class GeolocationPermissionRequestClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class GeolocationPermissionRequestPrivate {
    
  }
  
  export class HitTestResultClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class HitTestResultPrivate {
    
  }
  
  export class InstallMissingMediaPluginsPermissionRequestClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class InstallMissingMediaPluginsPermissionRequestPrivate {
    
  }
  
  export class JavascriptResult {
    public getGlobalContext(): JavaScriptCore.GlobalContext;
    public getValue(): JavaScriptCore.Value;
    public ref(): JavascriptResult;
    public unref(): void;
  }
  
  export class MimeInfo {
    public getDescription(): string;
    public getExtensions(): string[];
    public getMimeType(): string;
    public ref(): MimeInfo;
    public unref(): void;
  }
  
  export class NavigationAction {
    public copy(): NavigationAction;
    public free(): void;
    public getModifiers(): number;
    public getMouseButton(): number;
    public getNavigationType(): NavigationType;
    public getRequest(): URIRequest;
    public isUserGesture(): boolean;
  }
  
  export class NavigationPolicyDecisionClass {
    public parentClass?: PolicyDecisionClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class NavigationPolicyDecisionPrivate {
    
  }
  
  export class NotificationClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
    _webkitReserved4 : { (): void; };
    _webkitReserved5 : { (): void; };
  }
  
  export class NotificationPermissionRequestClass {
    public parentClass?: GObject.ObjectClass;
  }
  
  export class NotificationPermissionRequestPrivate {
    
  }
  
  export class NotificationPrivate {
    
  }
  
  export class PermissionRequestIface {
    public parentInterface?: GObject.TypeInterface;
    
    allow : { (request: PermissionRequest): void; };
    deny : { (request: PermissionRequest): void; };
  }
  
  export class PluginClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class PluginPrivate {
    
  }
  
  export class PolicyDecisionClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class PolicyDecisionPrivate {
    
  }
  
  export class PrintOperationClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class PrintOperationPrivate {
    
  }
  
  export class ResponsePolicyDecisionClass {
    public parentClass?: PolicyDecisionClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class ResponsePolicyDecisionPrivate {
    
  }
  
  export class ScriptDialog {
    public confirmSetConfirmed(confirmed: boolean): void;
    public getDialogType(): ScriptDialogType;
    public getMessage(): string;
    public promptGetDefaultText(): string;
    public promptSetText(text: string): void;
  }
  
  export class SecurityManagerClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class SecurityManagerPrivate {
    
  }
  
  export class SettingsClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class SettingsPrivate {
    
  }
  
  export class URIRequestClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class URIRequestPrivate {
    
  }
  
  export class URIResponseClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class URIResponsePrivate {
    
  }
  
  export class URISchemeRequestClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class URISchemeRequestPrivate {
    
  }
  
  export class UserContentManagerClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class UserContentManagerPrivate {
    
  }
  
  export class UserMediaPermissionRequestClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class UserMediaPermissionRequestPrivate {
    
  }
  
  export class UserScript {
    public ref(): UserScript;
    public unref(): void;
  }
  
  export class UserStyleSheet {
    public ref(): UserStyleSheet;
    public unref(): void;
  }
  
  export class WebContextClass {
    public parent?: GObject.ObjectClass;
    
    downloadStarted : { (context: WebContext, download: Download): void; };
    initializeWebExtensions : { (context: WebContext): void; };
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
    _webkitReserved4 : { (): void; };
    _webkitReserved5 : { (): void; };
  }
  
  export class WebContextPrivate {
    
  }
  
  export class WebInspectorClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class WebInspectorPrivate {
    
  }
  
  export class WebResourceClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class WebResourcePrivate {
    
  }
  
  export class WebViewBaseClass {
    public parentClass?: Gtk.ContainerClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class WebViewBasePrivate {
    
  }
  
  export class WebViewClass {
    public parent?: WebViewBaseClass;
    
    loadChanged : { (webView: WebView, loadEvent: LoadEvent): void; };
    loadFailed : { (webView: WebView, loadEvent: LoadEvent, failingUri: string, error: GLib.Error): boolean; };
    create : { (webView: WebView, navigationAction: NavigationAction): Gtk.Widget; };
    readyToShow : { (webView: WebView): void; };
    runAsModal : { (webView: WebView): void; };
    close : { (webView: WebView): void; };
    scriptDialog : { (webView: WebView, dialog: ScriptDialog): boolean; };
    decidePolicy : { (webView: WebView, decision: PolicyDecision, type: PolicyDecisionType): boolean; };
    permissionRequest : { (webView: WebView, permissionRequest: PermissionRequest): boolean; };
    mouseTargetChanged : { (webView: WebView, hitTestResult: HitTestResult, modifiers: number): void; };
    print : { (webView: WebView, printOperation: PrintOperation): boolean; };
    resourceLoadStarted : { (webView: WebView, resource: WebResource, request: URIRequest): void; };
    enterFullscreen : { (webView: WebView): boolean; };
    leaveFullscreen : { (webView: WebView): boolean; };
    runFileChooser : { (webView: WebView, request: FileChooserRequest): boolean; };
    contextMenu : { (webView: WebView, contextMenu: ContextMenu, event: Gdk.Event, hitTestResult: HitTestResult): boolean; };
    contextMenuDismissed : { (webView: WebView): void; };
    submitForm : { (webView: WebView, request: FormSubmissionRequest): void; };
    insecureContentDetected : { (webView: WebView, event: InsecureContentEvent): void; };
    webProcessCrashed : { (webView: WebView): boolean; };
    authenticate : { (webView: WebView, request: AuthenticationRequest): boolean; };
    loadFailedWithTlsErrors : { (webView: WebView, failingUri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean; };
    showNotification : { (webView: WebView, notification: Notification): boolean; };
    runColorChooser : { (webView: WebView, request: ColorChooserRequest): boolean; };
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class WebViewPrivate {
    
  }
  
  export class WebViewSessionState {
    public ref(): WebViewSessionState;
    public serialize(): GLib.Bytes;
    public unref(): void;
  }
  
  export class WebsiteDataManagerClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class WebsiteDataManagerPrivate {
    
  }
  
  export class WindowPropertiesClass {
    public parentClass?: GObject.ObjectClass;
    
    _webkitReserved0 : { (): void; };
    _webkitReserved1 : { (): void; };
    _webkitReserved2 : { (): void; };
    _webkitReserved3 : { (): void; };
  }
  
  export class WindowPropertiesPrivate {
    
  }
  
  export interface PermissionRequest {
    allow(): void;
    deny(): void;
  }
  
  export class AuthenticationRequest extends GObject.Object {
    constructor(props?: AuthenticationRequestProps);
    
    public authenticate(credential: Credential): void;
    public canSaveCredentials(): boolean;
    public cancel(): void;
    public getHost(): string;
    public getPort(): number;
    public getProposedCredential(): Credential;
    public getRealm(): string;
    public getScheme(): AuthenticationScheme;
    public isForProxy(): boolean;
    public isRetry(): boolean;
    
    public on(event: 'cancelled', listener: () => void): this;
  }
  
  interface AuthenticationRequestProps extends GObject.ObjectProps {
    
  }
  
  export class BackForwardList extends GObject.Object {
    constructor(props?: BackForwardListProps);
    
    public getBackItem(): BackForwardListItem;
    public getBackList(): GLib.List;
    public getBackListWithLimit(limit: number): GLib.List;
    public getCurrentItem(): BackForwardListItem;
    public getForwardItem(): BackForwardListItem;
    public getForwardList(): GLib.List;
    public getForwardListWithLimit(limit: number): GLib.List;
    public getLength(): number;
    public getNthItem(index: number): BackForwardListItem;
    
    public on(event: 'changed', listener: (itemAdded: BackForwardListItem, itemsRemoved: any) => void): this;
  }
  
  interface BackForwardListProps extends GObject.ObjectProps {
    
  }
  
  export class BackForwardListItem extends GObject.InitiallyUnowned {
    constructor(props?: BackForwardListItemProps);
    
    public getOriginalUri(): string;
    public getTitle(): string;
    public getUri(): string;
  }
  
  interface BackForwardListItemProps extends GObject.InitiallyUnownedProps {
    
  }
  
  export class ColorChooserRequest extends GObject.Object {
    constructor(props?: ColorChooserRequestProps);
    
    rgba?: Gdk.RGBA;
    
    public cancel(): void;
    public finish(): void;
    public getElementRectangle(rect: Gdk.Rectangle): void;
    public getRgba(rgba: Gdk.RGBA): void;
    public setRgba(rgba: Gdk.RGBA): void;
    
    public on(event: 'finished', listener: () => void): this;
  }
  
  interface ColorChooserRequestProps extends GObject.ObjectProps {
    rgba?: Gdk.RGBA;
  }
  
  export class ContextMenu extends GObject.Object {
    constructor(props?: ContextMenuProps);
    
    public append(item: ContextMenuItem): void;
    public first(): ContextMenuItem;
    public getItemAtPosition(position: number): ContextMenuItem;
    public getItems(): GLib.List;
    public getNItems(): number;
    public getUserData(): GLib.Variant;
    public insert(item: ContextMenuItem, position: number): void;
    public last(): ContextMenuItem;
    public moveItem(item: ContextMenuItem, position: number): void;
    public prepend(item: ContextMenuItem): void;
    public remove(item: ContextMenuItem): void;
    public removeAll(): void;
    public setUserData(userData: GLib.Variant): void;
  }
  
  interface ContextMenuProps extends GObject.ObjectProps {
    
  }
  
  export class ContextMenuItem extends GObject.InitiallyUnowned {
    constructor(props?: ContextMenuItemProps);
    
    public getAction(): Gtk.Action;
    public getStockAction(): ContextMenuAction;
    public getSubmenu(): ContextMenu;
    public isSeparator(): boolean;
    public setSubmenu(submenu: ContextMenu): void;
  }
  
  interface ContextMenuItemProps extends GObject.InitiallyUnownedProps {
    
  }
  
  export class CookieManager extends GObject.Object {
    constructor(props?: CookieManagerProps);
    
    public deleteAllCookies(): void;
    public deleteCookiesForDomain(domain: string): void;
    public getAcceptPolicy(cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback, userData: any): void;
    public getAcceptPolicyFinish(result: Gio.AsyncResult): CookieAcceptPolicy;
    public getDomainsWithCookies(cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback, userData: any): void;
    public getDomainsWithCookiesFinish(result: Gio.AsyncResult): string[];
    public setAcceptPolicy(policy: CookieAcceptPolicy): void;
    public setPersistentStorage(filename: string, storage: CookiePersistentStorage): void;
    
    public on(event: 'changed', listener: () => void): this;
  }
  
  interface CookieManagerProps extends GObject.ObjectProps {
    
  }
  
  export class Download extends GObject.Object {
    constructor(props?: DownloadProps);
    
    allowOverwrite?: boolean;
    destination?: string;
    estimatedProgress?: number;
    response?: URIResponse;
    
    public cancel(): void;
    public getAllowOverwrite(): boolean;
    public getDestination(): string;
    public getElapsedTime(): number;
    public getEstimatedProgress(): number;
    public getReceivedDataLength(): number;
    public getRequest(): URIRequest;
    public getResponse(): URIResponse;
    public getWebView(): WebView;
    public setAllowOverwrite(allowed: boolean): void;
    public setDestination(uri: string): void;
    public decideDestination(suggestedFilename: string): boolean;
    
    public on(event: 'createdDestination', listener: (destination: string) => void): this;
    public on(event: 'decideDestination', listener: (suggestedFilename: string) => boolean): this;
    public on(event: 'failed', listener: (error: GLib.Error) => void): this;
    public on(event: 'finished', listener: () => void): this;
    public on(event: 'receivedData', listener: (dataLength: number) => void): this;
  }
  
  interface DownloadProps extends GObject.ObjectProps {
    allowOverwrite?: boolean;
    destination?: string;
    estimatedProgress?: number;
    response?: URIResponse;
  }
  
  export class EditorState extends GObject.Object {
    constructor(props?: EditorStateProps);
    
    typingAttributes?: number;
    
    public getTypingAttributes(): number;
  }
  
  interface EditorStateProps extends GObject.ObjectProps {
    typingAttributes?: number;
  }
  
  export class FaviconDatabase extends GObject.Object {
    constructor(props?: FaviconDatabaseProps);
    
    public clear(): void;
    public getFavicon(pageUri: string, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback, userData: any): void;
    public getFaviconFinish(result: Gio.AsyncResult): cairo.Surface;
    public getFaviconUri(pageUri: string): string;
    
    public on(event: 'faviconChanged', listener: (pageUri: string, faviconUri: string) => void): this;
  }
  
  interface FaviconDatabaseProps extends GObject.ObjectProps {
    
  }
  
  export class FileChooserRequest extends GObject.Object {
    constructor(props?: FileChooserRequestProps);
    
    filter?: Gtk.FileFilter;
    mimeTypes?: string[];
    selectMultiple?: boolean;
    selectedFiles?: string[];
    
    public cancel(): void;
    public getMimeTypes(): string[];
    public getMimeTypesFilter(): Gtk.FileFilter;
    public getSelectMultiple(): boolean;
    public getSelectedFiles(): string[];
    public selectFiles(files: string[]): void;
  }
  
  interface FileChooserRequestProps extends GObject.ObjectProps {
    filter?: Gtk.FileFilter;
    mimeTypes?: string[];
    selectMultiple?: boolean;
    selectedFiles?: string[];
  }
  
  export class FindController extends GObject.Object {
    constructor(props?: FindControllerProps);
    
    maxMatchCount?: number;
    options?: FindOptions;
    text?: string;
    webView?: WebView;
    
    public countMatches(searchText: string, findOptions: number, maxMatchCount: number): void;
    public getMaxMatchCount(): number;
    public getOptions(): number;
    public getSearchText(): string;
    public getWebView(): WebView;
    public search(searchText: string, findOptions: number, maxMatchCount: number): void;
    public searchFinish(): void;
    public searchNext(): void;
    public searchPrevious(): void;
    
    public on(event: 'countedMatches', listener: (matchCount: number) => void): this;
    public on(event: 'failedToFindText', listener: () => void): this;
    public on(event: 'foundText', listener: (matchCount: number) => void): this;
  }
  
  interface FindControllerProps extends GObject.ObjectProps {
    maxMatchCount?: number;
    options?: FindOptions;
    text?: string;
    webView?: WebView;
  }
  
  export class FormSubmissionRequest extends GObject.Object {
    constructor(props?: FormSubmissionRequestProps);
    
    public getTextFields(): GLib.HashTable;
    public submit(): void;
  }
  
  interface FormSubmissionRequestProps extends GObject.ObjectProps {
    
  }
  
  export class GeolocationPermissionRequest extends GObject.Object implements PermissionRequest {
    constructor(props?: GeolocationPermissionRequestProps);
  }
  
  interface GeolocationPermissionRequestProps extends GObject.ObjectProps, PermissionRequestProps {
    
  }
  
  export class HitTestResult extends GObject.Object {
    constructor(props?: HitTestResultProps);
    
    context?: number;
    imageUri?: string;
    linkLabel?: string;
    linkTitle?: string;
    linkUri?: string;
    mediaUri?: string;
    
    public contextIsEditable(): boolean;
    public contextIsImage(): boolean;
    public contextIsLink(): boolean;
    public contextIsMedia(): boolean;
    public contextIsScrollbar(): boolean;
    public contextIsSelection(): boolean;
    public getContext(): number;
    public getImageUri(): string;
    public getLinkLabel(): string;
    public getLinkTitle(): string;
    public getLinkUri(): string;
    public getMediaUri(): string;
  }
  
  interface HitTestResultProps extends GObject.ObjectProps {
    context?: number;
    imageUri?: string;
    linkLabel?: string;
    linkTitle?: string;
    linkUri?: string;
    mediaUri?: string;
  }
  
  export class InstallMissingMediaPluginsPermissionRequest extends GObject.Object implements PermissionRequest {
    constructor(props?: InstallMissingMediaPluginsPermissionRequestProps);
    
    public getDescription(): string;
  }
  
  interface InstallMissingMediaPluginsPermissionRequestProps extends GObject.ObjectProps, PermissionRequestProps {
    
  }
  
  export class NavigationPolicyDecision extends PolicyDecision {
    constructor(props?: NavigationPolicyDecisionProps);
    
    frameName?: string;
    modifiers?: number;
    mouseButton?: number;
    navigationAction?: NavigationAction;
    navigationType?: NavigationType;
    request?: URIRequest;
    
    public getFrameName(): string;
    public getModifiers(): number;
    public getMouseButton(): number;
    public getNavigationAction(): NavigationAction;
    public getNavigationType(): NavigationType;
    public getRequest(): URIRequest;
  }
  
  interface NavigationPolicyDecisionProps extends PolicyDecisionProps {
    frameName?: string;
    modifiers?: number;
    mouseButton?: number;
    navigationAction?: NavigationAction;
    navigationType?: NavigationType;
    request?: URIRequest;
  }
  
  export class Notification extends GObject.Object {
    constructor(props?: NotificationProps);
    
    body?: string;
    id?: number;
    title?: string;
    
    public clicked(): void;
    public close(): void;
    public getBody(): string;
    public getId(): number;
    public getTitle(): string;
    
    public on(event: 'clicked', listener: () => void): this;
    public on(event: 'closed', listener: () => void): this;
  }
  
  interface NotificationProps extends GObject.ObjectProps {
    body?: string;
    id?: number;
    title?: string;
  }
  
  export class NotificationPermissionRequest extends GObject.Object implements PermissionRequest {
    constructor(props?: NotificationPermissionRequestProps);
  }
  
  interface NotificationPermissionRequestProps extends GObject.ObjectProps, PermissionRequestProps {
    
  }
  
  export class Plugin extends GObject.Object {
    constructor(props?: PluginProps);
    
    public getDescription(): string;
    public getMimeInfoList(): GLib.List;
    public getName(): string;
    public getPath(): string;
  }
  
  interface PluginProps extends GObject.ObjectProps {
    
  }
  
  export class PolicyDecision extends GObject.Object {
    constructor(props?: PolicyDecisionProps);
    
    public download(): void;
    public ignore(): void;
    public use(): void;
  }
  
  interface PolicyDecisionProps extends GObject.ObjectProps {
    
  }
  
  export class PrintOperation extends GObject.Object {
    constructor(props?: PrintOperationProps);
    
    pageSetup?: Gtk.PageSetup;
    printSettings?: Gtk.PrintSettings;
    webView?: WebView;
    
    public getPageSetup(): Gtk.PageSetup;
    public getPrintSettings(): Gtk.PrintSettings;
    public print(): void;
    public runDialog(parent: Gtk.Window): PrintOperationResponse;
    public setPageSetup(pageSetup: Gtk.PageSetup): void;
    public setPrintSettings(printSettings: Gtk.PrintSettings): void;
    
    public on(event: 'failed', listener: (error: GLib.Error) => void): this;
    public on(event: 'finished', listener: () => void): this;
  }
  
  interface PrintOperationProps extends GObject.ObjectProps {
    pageSetup?: Gtk.PageSetup;
    printSettings?: Gtk.PrintSettings;
    webView?: WebView;
  }
  
  export class ResponsePolicyDecision extends PolicyDecision {
    constructor(props?: ResponsePolicyDecisionProps);
    
    request?: URIRequest;
    response?: URIResponse;
    
    public getRequest(): URIRequest;
    public getResponse(): URIResponse;
    public isMimeTypeSupported(): boolean;
  }
  
  interface ResponsePolicyDecisionProps extends PolicyDecisionProps {
    request?: URIRequest;
    response?: URIResponse;
  }
  
  export class SecurityManager extends GObject.Object {
    constructor(props?: SecurityManagerProps);
    
    public registerUriSchemeAsCorsEnabled(scheme: string): void;
    public registerUriSchemeAsDisplayIsolated(scheme: string): void;
    public registerUriSchemeAsEmptyDocument(scheme: string): void;
    public registerUriSchemeAsLocal(scheme: string): void;
    public registerUriSchemeAsNoAccess(scheme: string): void;
    public registerUriSchemeAsSecure(scheme: string): void;
    public uriSchemeIsCorsEnabled(scheme: string): boolean;
    public uriSchemeIsDisplayIsolated(scheme: string): boolean;
    public uriSchemeIsEmptyDocument(scheme: string): boolean;
    public uriSchemeIsLocal(scheme: string): boolean;
    public uriSchemeIsNoAccess(scheme: string): boolean;
    public uriSchemeIsSecure(scheme: string): boolean;
  }
  
  interface SecurityManagerProps extends GObject.ObjectProps {
    
  }
  
  export class Settings extends GObject.Object {
    constructor(props?: SettingsProps);
    
    allowFileAccessFromFileUrls?: boolean;
    allowModalDialogs?: boolean;
    allowUniversalAccessFromFileUrls?: boolean;
    autoLoadImages?: boolean;
    cursiveFontFamily?: string;
    defaultCharset?: string;
    defaultFontFamily?: string;
    defaultFontSize?: number;
    defaultMonospaceFontSize?: number;
    drawCompositingIndicators?: boolean;
    enableAccelerated_2dCanvas?: boolean;
    enableCaretBrowsing?: boolean;
    enableDeveloperExtras?: boolean;
    enableDnsPrefetching?: boolean;
    enableFrameFlattening?: boolean;
    enableFullscreen?: boolean;
    enableHtml5Database?: boolean;
    enableHtml5LocalStorage?: boolean;
    enableHyperlinkAuditing?: boolean;
    enableJava?: boolean;
    enableJavascript?: boolean;
    enableMediaStream?: boolean;
    enableMediasource?: boolean;
    enableOfflineWebApplicationCache?: boolean;
    enablePageCache?: boolean;
    enablePlugins?: boolean;
    enablePrivateBrowsing?: boolean;
    enableResizableTextAreas?: boolean;
    enableSiteSpecificQuirks?: boolean;
    enableSmoothScrolling?: boolean;
    enableSpatialNavigation?: boolean;
    enableTabsToLinks?: boolean;
    enableWebaudio?: boolean;
    enableWebgl?: boolean;
    enableWriteConsoleMessagesToStdout?: boolean;
    enableXssAuditor?: boolean;
    fantasyFontFamily?: string;
    javascriptCanAccessClipboard?: boolean;
    javascriptCanOpenWindowsAutomatically?: boolean;
    loadIconsIgnoringImageLoadSetting?: boolean;
    mediaPlaybackAllowsInline?: boolean;
    mediaPlaybackRequiresUserGesture?: boolean;
    minimumFontSize?: number;
    monospaceFontFamily?: string;
    pictographFontFamily?: string;
    printBackgrounds?: boolean;
    sansSerifFontFamily?: string;
    serifFontFamily?: string;
    userAgent?: string;
    zoomTextOnly?: boolean;
    
    public getAllowFileAccessFromFileUrls(): boolean;
    public getAllowModalDialogs(): boolean;
    public getAllowUniversalAccessFromFileUrls(): boolean;
    public getAutoLoadImages(): boolean;
    public getCursiveFontFamily(): string;
    public getDefaultCharset(): string;
    public getDefaultFontFamily(): string;
    public getDefaultFontSize(): number;
    public getDefaultMonospaceFontSize(): number;
    public getDrawCompositingIndicators(): boolean;
    public getEnableAccelerated_2dCanvas(): boolean;
    public getEnableCaretBrowsing(): boolean;
    public getEnableDeveloperExtras(): boolean;
    public getEnableDnsPrefetching(): boolean;
    public getEnableFrameFlattening(): boolean;
    public getEnableFullscreen(): boolean;
    public getEnableHtml5Database(): boolean;
    public getEnableHtml5LocalStorage(): boolean;
    public getEnableHyperlinkAuditing(): boolean;
    public getEnableJava(): boolean;
    public getEnableJavascript(): boolean;
    public getEnableMediaStream(): boolean;
    public getEnableMediasource(): boolean;
    public getEnableOfflineWebApplicationCache(): boolean;
    public getEnablePageCache(): boolean;
    public getEnablePlugins(): boolean;
    public getEnablePrivateBrowsing(): boolean;
    public getEnableResizableTextAreas(): boolean;
    public getEnableSiteSpecificQuirks(): boolean;
    public getEnableSmoothScrolling(): boolean;
    public getEnableSpatialNavigation(): boolean;
    public getEnableTabsToLinks(): boolean;
    public getEnableWebaudio(): boolean;
    public getEnableWebgl(): boolean;
    public getEnableWriteConsoleMessagesToStdout(): boolean;
    public getEnableXssAuditor(): boolean;
    public getFantasyFontFamily(): string;
    public getJavascriptCanAccessClipboard(): boolean;
    public getJavascriptCanOpenWindowsAutomatically(): boolean;
    public getLoadIconsIgnoringImageLoadSetting(): boolean;
    public getMediaPlaybackAllowsInline(): boolean;
    public getMediaPlaybackRequiresUserGesture(): boolean;
    public getMinimumFontSize(): number;
    public getMonospaceFontFamily(): string;
    public getPictographFontFamily(): string;
    public getPrintBackgrounds(): boolean;
    public getSansSerifFontFamily(): string;
    public getSerifFontFamily(): string;
    public getUserAgent(): string;
    public getZoomTextOnly(): boolean;
    public setAllowFileAccessFromFileUrls(allowed: boolean): void;
    public setAllowModalDialogs(allowed: boolean): void;
    public setAllowUniversalAccessFromFileUrls(allowed: boolean): void;
    public setAutoLoadImages(enabled: boolean): void;
    public setCursiveFontFamily(cursiveFontFamily: string): void;
    public setDefaultCharset(defaultCharset: string): void;
    public setDefaultFontFamily(defaultFontFamily: string): void;
    public setDefaultFontSize(fontSize: number): void;
    public setDefaultMonospaceFontSize(fontSize: number): void;
    public setDrawCompositingIndicators(enabled: boolean): void;
    public setEnableAccelerated_2dCanvas(enabled: boolean): void;
    public setEnableCaretBrowsing(enabled: boolean): void;
    public setEnableDeveloperExtras(enabled: boolean): void;
    public setEnableDnsPrefetching(enabled: boolean): void;
    public setEnableFrameFlattening(enabled: boolean): void;
    public setEnableFullscreen(enabled: boolean): void;
    public setEnableHtml5Database(enabled: boolean): void;
    public setEnableHtml5LocalStorage(enabled: boolean): void;
    public setEnableHyperlinkAuditing(enabled: boolean): void;
    public setEnableJava(enabled: boolean): void;
    public setEnableJavascript(enabled: boolean): void;
    public setEnableMediaStream(enabled: boolean): void;
    public setEnableMediasource(enabled: boolean): void;
    public setEnableOfflineWebApplicationCache(enabled: boolean): void;
    public setEnablePageCache(enabled: boolean): void;
    public setEnablePlugins(enabled: boolean): void;
    public setEnablePrivateBrowsing(enabled: boolean): void;
    public setEnableResizableTextAreas(enabled: boolean): void;
    public setEnableSiteSpecificQuirks(enabled: boolean): void;
    public setEnableSmoothScrolling(enabled: boolean): void;
    public setEnableSpatialNavigation(enabled: boolean): void;
    public setEnableTabsToLinks(enabled: boolean): void;
    public setEnableWebaudio(enabled: boolean): void;
    public setEnableWebgl(enabled: boolean): void;
    public setEnableWriteConsoleMessagesToStdout(enabled: boolean): void;
    public setEnableXssAuditor(enabled: boolean): void;
    public setFantasyFontFamily(fantasyFontFamily: string): void;
    public setJavascriptCanAccessClipboard(enabled: boolean): void;
    public setJavascriptCanOpenWindowsAutomatically(enabled: boolean): void;
    public setLoadIconsIgnoringImageLoadSetting(enabled: boolean): void;
    public setMediaPlaybackAllowsInline(enabled: boolean): void;
    public setMediaPlaybackRequiresUserGesture(enabled: boolean): void;
    public setMinimumFontSize(fontSize: number): void;
    public setMonospaceFontFamily(monospaceFontFamily: string): void;
    public setPictographFontFamily(pictographFontFamily: string): void;
    public setPrintBackgrounds(printBackgrounds: boolean): void;
    public setSansSerifFontFamily(sansSerifFontFamily: string): void;
    public setSerifFontFamily(serifFontFamily: string): void;
    public setUserAgent(userAgent: string): void;
    public setUserAgentWithApplicationDetails(applicationName: string, applicationVersion: string): void;
    public setZoomTextOnly(zoomTextOnly: boolean): void;
  }
  
  interface SettingsProps extends GObject.ObjectProps {
    allowFileAccessFromFileUrls?: boolean;
    allowModalDialogs?: boolean;
    allowUniversalAccessFromFileUrls?: boolean;
    autoLoadImages?: boolean;
    cursiveFontFamily?: string;
    defaultCharset?: string;
    defaultFontFamily?: string;
    defaultFontSize?: number;
    defaultMonospaceFontSize?: number;
    drawCompositingIndicators?: boolean;
    enableAccelerated_2dCanvas?: boolean;
    enableCaretBrowsing?: boolean;
    enableDeveloperExtras?: boolean;
    enableDnsPrefetching?: boolean;
    enableFrameFlattening?: boolean;
    enableFullscreen?: boolean;
    enableHtml5Database?: boolean;
    enableHtml5LocalStorage?: boolean;
    enableHyperlinkAuditing?: boolean;
    enableJava?: boolean;
    enableJavascript?: boolean;
    enableMediaStream?: boolean;
    enableMediasource?: boolean;
    enableOfflineWebApplicationCache?: boolean;
    enablePageCache?: boolean;
    enablePlugins?: boolean;
    enablePrivateBrowsing?: boolean;
    enableResizableTextAreas?: boolean;
    enableSiteSpecificQuirks?: boolean;
    enableSmoothScrolling?: boolean;
    enableSpatialNavigation?: boolean;
    enableTabsToLinks?: boolean;
    enableWebaudio?: boolean;
    enableWebgl?: boolean;
    enableWriteConsoleMessagesToStdout?: boolean;
    enableXssAuditor?: boolean;
    fantasyFontFamily?: string;
    javascriptCanAccessClipboard?: boolean;
    javascriptCanOpenWindowsAutomatically?: boolean;
    loadIconsIgnoringImageLoadSetting?: boolean;
    mediaPlaybackAllowsInline?: boolean;
    mediaPlaybackRequiresUserGesture?: boolean;
    minimumFontSize?: number;
    monospaceFontFamily?: string;
    pictographFontFamily?: string;
    printBackgrounds?: boolean;
    sansSerifFontFamily?: string;
    serifFontFamily?: string;
    userAgent?: string;
    zoomTextOnly?: boolean;
  }
  
  export class URIRequest extends GObject.Object {
    constructor(props?: URIRequestProps);
    
    uri?: string;
    
    public getHttpHeaders(): Soup.MessageHeaders;
    public getHttpMethod(): string;
    public getUri(): string;
    public setUri(uri: string): void;
  }
  
  interface URIRequestProps extends GObject.ObjectProps {
    uri?: string;
  }
  
  export class URIResponse extends GObject.Object {
    constructor(props?: URIResponseProps);
    
    contentLength?: number;
    httpHeaders?: Soup.MessageHeaders;
    mimeType?: string;
    statusCode?: number;
    suggestedFilename?: string;
    uri?: string;
    
    public getContentLength(): number;
    public getHttpHeaders(): Soup.MessageHeaders;
    public getMimeType(): string;
    public getStatusCode(): number;
    public getSuggestedFilename(): string;
    public getUri(): string;
  }
  
  interface URIResponseProps extends GObject.ObjectProps {
    contentLength?: number;
    httpHeaders?: Soup.MessageHeaders;
    mimeType?: string;
    statusCode?: number;
    suggestedFilename?: string;
    uri?: string;
  }
  
  export class URISchemeRequest extends GObject.Object {
    constructor(props?: URISchemeRequestProps);
    
    public finish(stream: Gio.InputStream, streamLength: number, mimeType: string): void;
    public finishError(error: GLib.Error): void;
    public getPath(): string;
    public getScheme(): string;
    public getUri(): string;
    public getWebView(): WebView;
  }
  
  interface URISchemeRequestProps extends GObject.ObjectProps {
    
  }
  
  export class UserContentManager extends GObject.Object {
    constructor(props?: UserContentManagerProps);
    
    public addScript(script: UserScript): void;
    public addStyleSheet(stylesheet: UserStyleSheet): void;
    public registerScriptMessageHandler(name: string): boolean;
    public removeAllScripts(): void;
    public removeAllStyleSheets(): void;
    public unregisterScriptMessageHandler(name: string): void;
    
    public on(event: 'scriptMessageReceived', listener: (jsResult: JavascriptResult) => void): this;
  }
  
  interface UserContentManagerProps extends GObject.ObjectProps {
    
  }
  
  export class UserMediaPermissionRequest extends GObject.Object implements PermissionRequest {
    constructor(props?: UserMediaPermissionRequestProps);
    
    isForAudioDevice?: boolean;
    isForVideoDevice?: boolean;
  }
  
  interface UserMediaPermissionRequestProps extends GObject.ObjectProps, PermissionRequestProps {
    isForAudioDevice?: boolean;
    isForVideoDevice?: boolean;
  }
  
  export class WebContext extends GObject.Object {
    constructor(props?: WebContextProps);
    
    localStorageDirectory?: string;
    websiteDataManager?: WebsiteDataManager;
    
    public allowTlsCertificateForHost(certificate: Gio.TlsCertificate, host: string): void;
    public clearCache(): void;
    public downloadUri(uri: string): Download;
    public getCacheModel(): CacheModel;
    public getCookieManager(): CookieManager;
    public getFaviconDatabase(): FaviconDatabase;
    public getFaviconDatabaseDirectory(): string;
    public getPlugins(cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback, userData: any): void;
    public getPluginsFinish(result: Gio.AsyncResult): GLib.List;
    public getProcessModel(): ProcessModel;
    public getSecurityManager(): SecurityManager;
    public getSpellCheckingEnabled(): boolean;
    public getSpellCheckingLanguages(): string[];
    public getTlsErrorsPolicy(): TLSErrorsPolicy;
    public getWebProcessCountLimit(): number;
    public getWebsiteDataManager(): WebsiteDataManager;
    public prefetchDns(hostname: string): void;
    public registerUriScheme(scheme: string, callback: URISchemeRequestCallback, userData: any, userDataDestroyFunc: GLib.DestroyNotify): void;
    public setAdditionalPluginsDirectory(directory: string): void;
    public setCacheModel(cacheModel: CacheModel): void;
    public setDiskCacheDirectory(directory: string): void;
    public setFaviconDatabaseDirectory(path: string): void;
    public setPreferredLanguages(languages: string[]): void;
    public setProcessModel(processModel: ProcessModel): void;
    public setSpellCheckingEnabled(enabled: boolean): void;
    public setSpellCheckingLanguages(languages: string[]): void;
    public setTlsErrorsPolicy(policy: TLSErrorsPolicy): void;
    public setWebExtensionsDirectory(directory: string): void;
    public setWebExtensionsInitializationUserData(userData: GLib.Variant): void;
    public setWebProcessCountLimit(limit: number): void;
    public downloadStarted(download: Download): void;
    public initializeWebExtensions(): void;
    
    public on(event: 'downloadStarted', listener: (download: Download) => void): this;
    public on(event: 'initializeWebExtensions', listener: () => void): this;
    
    public static getDefault(): WebContext;
  }
  
  interface WebContextProps extends GObject.ObjectProps {
    localStorageDirectory?: string;
    websiteDataManager?: WebsiteDataManager;
  }
  
  export class WebInspector extends GObject.Object {
    constructor(props?: WebInspectorProps);
    
    attachedHeight?: number;
    canAttach?: boolean;
    inspectedUri?: string;
    
    public attach(): void;
    public close(): void;
    public detach(): void;
    public getAttachedHeight(): number;
    public getCanAttach(): boolean;
    public getInspectedUri(): string;
    public getWebView(): WebViewBase;
    public isAttached(): boolean;
    public show(): void;
    
    public on(event: 'attach', listener: () => boolean): this;
    public on(event: 'bringToFront', listener: () => boolean): this;
    public on(event: 'closed', listener: () => void): this;
    public on(event: 'detach', listener: () => boolean): this;
    public on(event: 'openWindow', listener: () => boolean): this;
  }
  
  interface WebInspectorProps extends GObject.ObjectProps {
    attachedHeight?: number;
    canAttach?: boolean;
    inspectedUri?: string;
  }
  
  export class WebResource extends GObject.Object {
    constructor(props?: WebResourceProps);
    
    response?: URIResponse;
    uri?: string;
    
    public getData(cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback, userData: any): void;
    public getDataFinish(result: Gio.AsyncResult, length: number): number[];
    public getResponse(): URIResponse;
    public getUri(): string;
    
    public on(event: 'failed', listener: (error: GLib.Error) => void): this;
    public on(event: 'failedWithTlsErrors', listener: (certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => void): this;
    public on(event: 'finished', listener: () => void): this;
    public on(event: 'receivedData', listener: (dataLength: number) => void): this;
    public on(event: 'sentRequest', listener: (request: URIRequest, redirectedResponse: URIResponse) => void): this;
  }
  
  interface WebResourceProps extends GObject.ObjectProps {
    response?: URIResponse;
    uri?: string;
  }
  
  export class WebView extends WebViewBase implements Atk.ImplementorIface, Gtk.Buildable {
    constructor(props?: WebViewProps);
    
    editable?: boolean;
    estimatedLoadProgress?: number;
    favicon?: any;
    isLoading?: boolean;
    isPlayingAudio?: boolean;
    relatedView?: WebView;
    settings?: Settings;
    title?: string;
    uri?: string;
    userContentManager?: UserContentManager;
    webContext?: WebContext;
    zoomLevel?: number;
    
    public canExecuteEditingCommand(command: string, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback, userData: any): void;
    public canExecuteEditingCommandFinish(result: Gio.AsyncResult): boolean;
    public canGoBack(): boolean;
    public canGoForward(): boolean;
    public canShowMimeType(mimeType: string): boolean;
    public downloadUri(uri: string): Download;
    public executeEditingCommand(command: string): void;
    public executeEditingCommandWithArgument(command: string, argument: string): void;
    public getBackForwardList(): BackForwardList;
    public getBackgroundColor(rgba: Gdk.RGBA): void;
    public getContext(): WebContext;
    public getCustomCharset(): string;
    public getEditorState(): EditorState;
    public getEstimatedLoadProgress(): number;
    public getFavicon(): cairo.Surface;
    public getFindController(): FindController;
    public getInspector(): WebInspector;
    public getJavascriptGlobalContext(): JavaScriptCore.GlobalContext;
    public getMainResource(): WebResource;
    public getPageId(): number;
    public getSessionState(): WebViewSessionState;
    public getSettings(): Settings;
    public getSnapshot(region: SnapshotRegion, options: SnapshotOptions, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback, userData: any): void;
    public getSnapshotFinish(result: Gio.AsyncResult): cairo.Surface;
    public getTitle(): string;
    public getTlsInfo(certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean;
    public getUri(): string;
    public getUserContentManager(): UserContentManager;
    public getWindowProperties(): WindowProperties;
    public getZoomLevel(): number;
    public goBack(): void;
    public goForward(): void;
    public goToBackForwardListItem(listItem: BackForwardListItem): void;
    public isEditable(): boolean;
    public isLoading(): boolean;
    public isPlayingAudio(): boolean;
    public loadAlternateHtml(content: string, contentUri: string, baseUri: string): void;
    public loadBytes(bytes: GLib.Bytes, mimeType: string, encoding: string, baseUri: string): void;
    public loadHtml(content: string, baseUri: string): void;
    public loadPlainText(plainText: string): void;
    public loadRequest(request: URIRequest): void;
    public loadUri(uri: string): void;
    public newWithRelatedView(): Gtk.Widget;
    public reload(): void;
    public reloadBypassCache(): void;
    public restoreSessionState(state: WebViewSessionState): void;
    public runJavascript(script: string, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback, userData: any): void;
    public runJavascriptFinish(result: Gio.AsyncResult): JavascriptResult;
    public runJavascriptFromGresource(resource: string, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback, userData: any): void;
    public runJavascriptFromGresourceFinish(result: Gio.AsyncResult): JavascriptResult;
    public save(saveMode: SaveMode, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback, userData: any): void;
    public saveFinish(result: Gio.AsyncResult): Gio.InputStream;
    public saveToFile(file: Gio.File, saveMode: SaveMode, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback, userData: any): void;
    public saveToFileFinish(result: Gio.AsyncResult): boolean;
    public setBackgroundColor(rgba: Gdk.RGBA): void;
    public setCustomCharset(charset: string): void;
    public setEditable(editable: boolean): void;
    public setSettings(settings: Settings): void;
    public setZoomLevel(zoomLevel: number): void;
    public stopLoading(): void;
    public tryClose(): void;
    public authenticate(request: AuthenticationRequest): boolean;
    public close(): void;
    public contextMenu(contextMenu: ContextMenu, event: Gdk.Event, hitTestResult: HitTestResult): boolean;
    public contextMenuDismissed(): void;
    public create(navigationAction: NavigationAction): Gtk.Widget;
    public decidePolicy(decision: PolicyDecision, type: PolicyDecisionType): boolean;
    public enterFullscreen(): boolean;
    public insecureContentDetected(event: InsecureContentEvent): void;
    public leaveFullscreen(): boolean;
    public loadChanged(loadEvent: LoadEvent): void;
    public loadFailed(loadEvent: LoadEvent, failingUri: string, error: GLib.Error): boolean;
    public loadFailedWithTlsErrors(failingUri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean;
    public mouseTargetChanged(hitTestResult: HitTestResult, modifiers: number): void;
    public permissionRequest(permissionRequest: PermissionRequest): boolean;
    public print(printOperation: PrintOperation): boolean;
    public readyToShow(): void;
    public resourceLoadStarted(resource: WebResource, request: URIRequest): void;
    public runAsModal(): void;
    public runColorChooser(request: ColorChooserRequest): boolean;
    public runFileChooser(request: FileChooserRequest): boolean;
    public scriptDialog(dialog: ScriptDialog): boolean;
    public showNotification(notification: Notification): boolean;
    public submitForm(request: FormSubmissionRequest): void;
    public webProcessCrashed(): boolean;
    
    public on(event: 'authenticate', listener: (request: AuthenticationRequest) => boolean): this;
    public on(event: 'close', listener: () => void): this;
    public on(event: 'contextMenu', listener: (contextMenu: ContextMenu, event: Gdk.Event, hitTestResult: HitTestResult) => boolean): this;
    public on(event: 'contextMenuDismissed', listener: () => void): this;
    public on(event: 'create', listener: (navigationAction: NavigationAction) => Gtk.Widget): this;
    public on(event: 'decidePolicy', listener: (decision: PolicyDecision, decisionType: PolicyDecisionType) => boolean): this;
    public on(event: 'enterFullscreen', listener: () => boolean): this;
    public on(event: 'insecureContentDetected', listener: (event: InsecureContentEvent) => void): this;
    public on(event: 'leaveFullscreen', listener: () => boolean): this;
    public on(event: 'loadChanged', listener: (loadEvent: LoadEvent) => void): this;
    public on(event: 'loadFailed', listener: (loadEvent: LoadEvent, failingUri: string, error: GLib.Error) => boolean): this;
    public on(event: 'loadFailedWithTlsErrors', listener: (failingUri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean): this;
    public on(event: 'mouseTargetChanged', listener: (hitTestResult: HitTestResult, modifiers: number) => void): this;
    public on(event: 'permissionRequest', listener: (request: PermissionRequest) => boolean): this;
    public on(event: 'print', listener: (printOperation: PrintOperation) => boolean): this;
    public on(event: 'readyToShow', listener: () => void): this;
    public on(event: 'resourceLoadStarted', listener: (resource: WebResource, request: URIRequest) => void): this;
    public on(event: 'runAsModal', listener: () => void): this;
    public on(event: 'runColorChooser', listener: (request: ColorChooserRequest) => boolean): this;
    public on(event: 'runFileChooser', listener: (request: FileChooserRequest) => boolean): this;
    public on(event: 'scriptDialog', listener: (dialog: ScriptDialog) => boolean): this;
    public on(event: 'showNotification', listener: (notification: Notification) => boolean): this;
    public on(event: 'submitForm', listener: (request: FormSubmissionRequest) => void): this;
    public on(event: 'webProcessCrashed', listener: () => boolean): this;
  }
  
  interface WebViewProps extends WebViewBaseProps, Atk.ImplementorIfaceProps, Gtk.BuildableProps {
    editable?: boolean;
    estimatedLoadProgress?: number;
    favicon?: any;
    isLoading?: boolean;
    isPlayingAudio?: boolean;
    relatedView?: WebView;
    settings?: Settings;
    title?: string;
    uri?: string;
    userContentManager?: UserContentManager;
    webContext?: WebContext;
    zoomLevel?: number;
  }
  
  export class WebViewBase extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable {
    constructor(props?: WebViewBaseProps);
  }
  
  interface WebViewBaseProps extends Gtk.ContainerProps, Atk.ImplementorIfaceProps, Gtk.BuildableProps {
    
  }
  
  export class WebsiteDataManager extends GObject.Object {
    constructor(props?: WebsiteDataManagerProps);
    
    baseCacheDirectory?: string;
    baseDataDirectory?: string;
    diskCacheDirectory?: string;
    indexeddbDirectory?: string;
    localStorageDirectory?: string;
    offlineApplicationCacheDirectory?: string;
    websqlDirectory?: string;
    
    public getBaseCacheDirectory(): string;
    public getBaseDataDirectory(): string;
    public getDiskCacheDirectory(): string;
    public getIndexeddbDirectory(): string;
    public getLocalStorageDirectory(): string;
    public getOfflineApplicationCacheDirectory(): string;
    public getWebsqlDirectory(): string;
  }
  
  interface WebsiteDataManagerProps extends GObject.ObjectProps {
    baseCacheDirectory?: string;
    baseDataDirectory?: string;
    diskCacheDirectory?: string;
    indexeddbDirectory?: string;
    localStorageDirectory?: string;
    offlineApplicationCacheDirectory?: string;
    websqlDirectory?: string;
  }
  
  export class WindowProperties extends GObject.Object {
    constructor(props?: WindowPropertiesProps);
    
    fullscreen?: boolean;
    geometry?: Gdk.Rectangle;
    locationbarVisible?: boolean;
    menubarVisible?: boolean;
    resizable?: boolean;
    scrollbarsVisible?: boolean;
    statusbarVisible?: boolean;
    toolbarVisible?: boolean;
    
    public getFullscreen(): boolean;
    public getGeometry(geometry: Gdk.Rectangle): void;
    public getLocationbarVisible(): boolean;
    public getMenubarVisible(): boolean;
    public getResizable(): boolean;
    public getScrollbarsVisible(): boolean;
    public getStatusbarVisible(): boolean;
    public getToolbarVisible(): boolean;
  }
  
  interface WindowPropertiesProps extends GObject.ObjectProps {
    fullscreen?: boolean;
    geometry?: Gdk.Rectangle;
    locationbarVisible?: boolean;
    menubarVisible?: boolean;
    resizable?: boolean;
    scrollbarsVisible?: boolean;
    statusbarVisible?: boolean;
    toolbarVisible?: boolean;
  }

}