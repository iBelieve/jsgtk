declare module "Gio" {

  export const DESKTOP_APP_INFO_LOOKUP_EXTENSION_POINT_NAME: string;
  
  export const FILE_ATTRIBUTE_ACCESS_CAN_DELETE: string;
  
  export const FILE_ATTRIBUTE_ACCESS_CAN_EXECUTE: string;
  
  export const FILE_ATTRIBUTE_ACCESS_CAN_READ: string;
  
  export const FILE_ATTRIBUTE_ACCESS_CAN_RENAME: string;
  
  export const FILE_ATTRIBUTE_ACCESS_CAN_TRASH: string;
  
  export const FILE_ATTRIBUTE_ACCESS_CAN_WRITE: string;
  
  export const FILE_ATTRIBUTE_DOS_IS_ARCHIVE: string;
  
  export const FILE_ATTRIBUTE_DOS_IS_SYSTEM: string;
  
  export const FILE_ATTRIBUTE_ETAG_VALUE: string;
  
  export const FILE_ATTRIBUTE_FILESYSTEM_FREE: string;
  
  export const FILE_ATTRIBUTE_FILESYSTEM_READONLY: string;
  
  export const FILE_ATTRIBUTE_FILESYSTEM_REMOTE: string;
  
  export const FILE_ATTRIBUTE_FILESYSTEM_SIZE: string;
  
  export const FILE_ATTRIBUTE_FILESYSTEM_TYPE: string;
  
  export const FILE_ATTRIBUTE_FILESYSTEM_USED: string;
  
  export const FILE_ATTRIBUTE_FILESYSTEM_USE_PREVIEW: string;
  
  export const FILE_ATTRIBUTE_GVFS_BACKEND: string;
  
  export const FILE_ATTRIBUTE_ID_FILE: string;
  
  export const FILE_ATTRIBUTE_ID_FILESYSTEM: string;
  
  export const FILE_ATTRIBUTE_MOUNTABLE_CAN_EJECT: string;
  
  export const FILE_ATTRIBUTE_MOUNTABLE_CAN_MOUNT: string;
  
  export const FILE_ATTRIBUTE_MOUNTABLE_CAN_POLL: string;
  
  export const FILE_ATTRIBUTE_MOUNTABLE_CAN_START: string;
  
  export const FILE_ATTRIBUTE_MOUNTABLE_CAN_START_DEGRADED: string;
  
  export const FILE_ATTRIBUTE_MOUNTABLE_CAN_STOP: string;
  
  export const FILE_ATTRIBUTE_MOUNTABLE_CAN_UNMOUNT: string;
  
  export const FILE_ATTRIBUTE_MOUNTABLE_HAL_UDI: string;
  
  export const FILE_ATTRIBUTE_MOUNTABLE_IS_MEDIA_CHECK_AUTOMATIC: string;
  
  export const FILE_ATTRIBUTE_MOUNTABLE_START_STOP_TYPE: string;
  
  export const FILE_ATTRIBUTE_MOUNTABLE_UNIX_DEVICE: string;
  
  export const FILE_ATTRIBUTE_MOUNTABLE_UNIX_DEVICE_FILE: string;
  
  export const FILE_ATTRIBUTE_OWNER_GROUP: string;
  
  export const FILE_ATTRIBUTE_OWNER_USER: string;
  
  export const FILE_ATTRIBUTE_OWNER_USER_REAL: string;
  
  export const FILE_ATTRIBUTE_PREVIEW_ICON: string;
  
  export const FILE_ATTRIBUTE_SELINUX_CONTEXT: string;
  
  export const FILE_ATTRIBUTE_STANDARD_ALLOCATED_SIZE: string;
  
  export const FILE_ATTRIBUTE_STANDARD_CONTENT_TYPE: string;
  
  export const FILE_ATTRIBUTE_STANDARD_COPY_NAME: string;
  
  export const FILE_ATTRIBUTE_STANDARD_DESCRIPTION: string;
  
  export const FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME: string;
  
  export const FILE_ATTRIBUTE_STANDARD_EDIT_NAME: string;
  
  export const FILE_ATTRIBUTE_STANDARD_FAST_CONTENT_TYPE: string;
  
  export const FILE_ATTRIBUTE_STANDARD_ICON: string;
  
  export const FILE_ATTRIBUTE_STANDARD_IS_BACKUP: string;
  
  export const FILE_ATTRIBUTE_STANDARD_IS_HIDDEN: string;
  
  export const FILE_ATTRIBUTE_STANDARD_IS_SYMLINK: string;
  
  export const FILE_ATTRIBUTE_STANDARD_IS_VIRTUAL: string;
  
  export const FILE_ATTRIBUTE_STANDARD_IS_VOLATILE: string;
  
  export const FILE_ATTRIBUTE_STANDARD_NAME: string;
  
  export const FILE_ATTRIBUTE_STANDARD_SIZE: string;
  
  export const FILE_ATTRIBUTE_STANDARD_SORT_ORDER: string;
  
  export const FILE_ATTRIBUTE_STANDARD_SYMBOLIC_ICON: string;
  
  export const FILE_ATTRIBUTE_STANDARD_SYMLINK_TARGET: string;
  
  export const FILE_ATTRIBUTE_STANDARD_TARGET_URI: string;
  
  export const FILE_ATTRIBUTE_STANDARD_TYPE: string;
  
  export const FILE_ATTRIBUTE_THUMBNAILING_FAILED: string;
  
  export const FILE_ATTRIBUTE_THUMBNAIL_IS_VALID: string;
  
  export const FILE_ATTRIBUTE_THUMBNAIL_PATH: string;
  
  export const FILE_ATTRIBUTE_TIME_ACCESS: string;
  
  export const FILE_ATTRIBUTE_TIME_ACCESS_USEC: string;
  
  export const FILE_ATTRIBUTE_TIME_CHANGED: string;
  
  export const FILE_ATTRIBUTE_TIME_CHANGED_USEC: string;
  
  export const FILE_ATTRIBUTE_TIME_CREATED: string;
  
  export const FILE_ATTRIBUTE_TIME_CREATED_USEC: string;
  
  export const FILE_ATTRIBUTE_TIME_MODIFIED: string;
  
  export const FILE_ATTRIBUTE_TIME_MODIFIED_USEC: string;
  
  export const FILE_ATTRIBUTE_TRASH_DELETION_DATE: string;
  
  export const FILE_ATTRIBUTE_TRASH_ITEM_COUNT: string;
  
  export const FILE_ATTRIBUTE_TRASH_ORIG_PATH: string;
  
  export const FILE_ATTRIBUTE_UNIX_BLOCKS: string;
  
  export const FILE_ATTRIBUTE_UNIX_BLOCK_SIZE: string;
  
  export const FILE_ATTRIBUTE_UNIX_DEVICE: string;
  
  export const FILE_ATTRIBUTE_UNIX_GID: string;
  
  export const FILE_ATTRIBUTE_UNIX_INODE: string;
  
  export const FILE_ATTRIBUTE_UNIX_IS_MOUNTPOINT: string;
  
  export const FILE_ATTRIBUTE_UNIX_MODE: string;
  
  export const FILE_ATTRIBUTE_UNIX_NLINK: string;
  
  export const FILE_ATTRIBUTE_UNIX_RDEV: string;
  
  export const FILE_ATTRIBUTE_UNIX_UID: string;
  
  export const MENU_ATTRIBUTE_ACTION: string;
  
  export const MENU_ATTRIBUTE_ACTION_NAMESPACE: string;
  
  export const MENU_ATTRIBUTE_ICON: string;
  
  export const MENU_ATTRIBUTE_LABEL: string;
  
  export const MENU_ATTRIBUTE_TARGET: string;
  
  export const MENU_LINK_SECTION: string;
  
  export const MENU_LINK_SUBMENU: string;
  
  export const NATIVE_VOLUME_MONITOR_EXTENSION_POINT_NAME: string;
  
  export const NETWORK_MONITOR_EXTENSION_POINT_NAME: string;
  
  export const PROXY_EXTENSION_POINT_NAME: string;
  
  export const PROXY_RESOLVER_EXTENSION_POINT_NAME: string;
  
  export const SETTINGS_BACKEND_EXTENSION_POINT_NAME: string;
  
  export const TLS_BACKEND_EXTENSION_POINT_NAME: string;
  
  export const TLS_DATABASE_PURPOSE_AUTHENTICATE_CLIENT: string;
  
  export const TLS_DATABASE_PURPOSE_AUTHENTICATE_SERVER: string;
  
  export const VFS_EXTENSION_POINT_NAME: string;
  
  export const VOLUME_IDENTIFIER_KIND_CLASS: string;
  
  export const VOLUME_IDENTIFIER_KIND_HAL_UDI: string;
  
  export const VOLUME_IDENTIFIER_KIND_LABEL: string;
  
  export const VOLUME_IDENTIFIER_KIND_NFS_MOUNT: string;
  
  export const VOLUME_IDENTIFIER_KIND_UNIX_DEVICE: string;
  
  export const VOLUME_IDENTIFIER_KIND_UUID: string;
  
  export const VOLUME_MONITOR_EXTENSION_POINT_NAME: string;
  
  export function actionNameIsValid(actionName: string): boolean;
  
  export function actionParseDetailedName(detailedName: string, actionName: string, targetValue: GLib.Variant): boolean;
  
  export function actionPrintDetailedName(actionName: string, targetValue: GLib.Variant): string;
  
  export function appInfoCreateFromCommandline(commandline: string, applicationName: string, flags: AppInfoCreateFlags): AppInfo;
  
  export function appInfoGetAll(): GLib.List;
  
  export function appInfoGetAllForType(contentType: string): GLib.List;
  
  export function appInfoGetDefaultForType(contentType: string, mustSupportUris: boolean): AppInfo;
  
  export function appInfoGetDefaultForUriScheme(uriScheme: string): AppInfo;
  
  export function appInfoGetFallbackForType(contentType: string): GLib.List;
  
  export function appInfoGetRecommendedForType(contentType: string): GLib.List;
  
  export function appInfoLaunchDefaultForUri(uri: string, launchContext: AppLaunchContext): boolean;
  
  export function appInfoLaunchDefaultForUriAsync(uri: string, launchContext: AppLaunchContext, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
  
  export function appInfoLaunchDefaultForUriFinish(result: AsyncResult): boolean;
  
  export function appInfoResetTypeAssociations(contentType: string): void;
  
  export function asyncInitableNewvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
  
  export function busGet(busType: BusType, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
  
  export function busGetFinish(res: AsyncResult): DBusConnection;
  
  export function busGetSync(busType: BusType, cancellable: Cancellable): DBusConnection;
  
  export function busOwnName(busType: BusType, name: string, flags: BusNameOwnerFlags, busAcquiredHandler: BusAcquiredCallback, nameAcquiredHandler: BusNameAcquiredCallback, nameLostHandler: BusNameLostCallback, userData: any, userDataFreeFunc: GLib.DestroyNotify): number;
  
  export function busOwnNameOnConnection(connection: DBusConnection, name: string, flags: BusNameOwnerFlags, nameAcquiredHandler: BusNameAcquiredCallback, nameLostHandler: BusNameLostCallback, userData: any, userDataFreeFunc: GLib.DestroyNotify): number;
  
  export function busOwnNameOnConnectionWithClosures(connection: DBusConnection, name: string, flags: BusNameOwnerFlags, nameAcquiredClosure: GObject.Closure, nameLostClosure: GObject.Closure): number;
  
  export function busOwnNameWithClosures(busType: BusType, name: string, flags: BusNameOwnerFlags, busAcquiredClosure: GObject.Closure, nameAcquiredClosure: GObject.Closure, nameLostClosure: GObject.Closure): number;
  
  export function busUnownName(ownerId: number): void;
  
  export function busUnwatchName(watcherId: number): void;
  
  export function busWatchName(busType: BusType, name: string, flags: BusNameWatcherFlags, nameAppearedHandler: BusNameAppearedCallback, nameVanishedHandler: BusNameVanishedCallback, userData: any, userDataFreeFunc: GLib.DestroyNotify): number;
  
  export function busWatchNameOnConnection(connection: DBusConnection, name: string, flags: BusNameWatcherFlags, nameAppearedHandler: BusNameAppearedCallback, nameVanishedHandler: BusNameVanishedCallback, userData: any, userDataFreeFunc: GLib.DestroyNotify): number;
  
  export function busWatchNameOnConnectionWithClosures(connection: DBusConnection, name: string, flags: BusNameWatcherFlags, nameAppearedClosure: GObject.Closure, nameVanishedClosure: GObject.Closure): number;
  
  export function busWatchNameWithClosures(busType: BusType, name: string, flags: BusNameWatcherFlags, nameAppearedClosure: GObject.Closure, nameVanishedClosure: GObject.Closure): number;
  
  export function contentTypeCanBeExecutable(type: string): boolean;
  
  export function contentTypeEquals(type1: string, type2: string): boolean;
  
  export function contentTypeFromMimeType(mimeType: string): string;
  
  export function contentTypeGetDescription(type: string): string;
  
  export function contentTypeGetGenericIconName(type: string): string;
  
  export function contentTypeGetIcon(type: string): Icon;
  
  export function contentTypeGetMimeType(type: string): string;
  
  export function contentTypeGetSymbolicIcon(type: string): Icon;
  
  export function contentTypeGuess(filename: string, data: number[], dataSize: number, resultUncertain: boolean): string;
  
  export function contentTypeGuessForTree(root: File): string[];
  
  export function contentTypeIsA(type: string, supertype: string): boolean;
  
  export function contentTypeIsUnknown(type: string): boolean;
  
  export function contentTypesGetRegistered(): GLib.List;
  
  export function dbusAddressEscapeValue(string: string): string;
  
  export function dbusAddressGetForBusSync(busType: BusType, cancellable: Cancellable): string;
  
  export function dbusAddressGetStream(address: string, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
  
  export function dbusAddressGetStreamFinish(res: AsyncResult, outGuid: string): IOStream;
  
  export function dbusAddressGetStreamSync(address: string, outGuid: string, cancellable: Cancellable): IOStream;
  
  export function dbusAnnotationInfoLookup(annotations: DBusAnnotationInfo[], name: string): string;
  
  export function dbusErrorEncodeGerror(error: GLib.Error): string;
  
  export function dbusErrorGetRemoteError(error: GLib.Error): string;
  
  export function dbusErrorIsRemoteError(error: GLib.Error): boolean;
  
  export function dbusErrorNewForDbusError(dbusErrorName: string, dbusErrorMessage: string): GLib.Error;
  
  export function dbusErrorQuark(): GLib.Quark;
  
  export function dbusErrorRegisterError(errorDomain: GLib.Quark, errorCode: number, dbusErrorName: string): boolean;
  
  export function dbusErrorRegisterErrorDomain(errorDomainQuarkName: string, quarkVolatile: number, entries: DBusErrorEntry, numEntries: number): void;
  
  export function dbusErrorStripRemoteError(error: GLib.Error): boolean;
  
  export function dbusErrorUnregisterError(errorDomain: GLib.Quark, errorCode: number, dbusErrorName: string): boolean;
  
  export function dbusGenerateGuid(): string;
  
  export function dbusGvalueToGvariant(gvalue: GObject.Value, type: GLib.VariantType): GLib.Variant;
  
  export function dbusGvariantToGvalue(value: GLib.Variant, outGvalue: GObject.Value): void;
  
  export function dbusIsAddress(string: string): boolean;
  
  export function dbusIsGuid(string: string): boolean;
  
  export function dbusIsInterfaceName(string: string): boolean;
  
  export function dbusIsMemberName(string: string): boolean;
  
  export function dbusIsName(string: string): boolean;
  
  export function dbusIsSupportedAddress(string: string): boolean;
  
  export function dbusIsUniqueName(string: string): boolean;
  
  export function dtlsClientConnectionNew(baseSocket: DatagramBased, serverIdentity: SocketConnectable): DtlsClientConnection;
  
  export function dtlsServerConnectionNew(baseSocket: DatagramBased, certificate: TlsCertificate): DtlsServerConnection;
  
  export function fileNewForCommandlineArg(arg: string): File;
  
  export function fileNewForCommandlineArgAndCwd(arg: string, cwd: string): File;
  
  export function fileNewForPath(path: string): File;
  
  export function fileNewForUri(uri: string): File;
  
  export function fileNewTmp(tmpl: string, iostream: FileIOStream): File;
  
  export function fileParseName(parseName: string): File;
  
  export function iconDeserialize(value: GLib.Variant): Icon;
  
  export function iconHash(icon: any): number;
  
  export function iconNewForString(str: string): Icon;
  
  export function initableNewv(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter[], cancellable: Cancellable): GObject.Object;
  
  export function ioErrorFromErrno(errNo: number): IOErrorEnum;
  
  export function ioErrorQuark(): GLib.Quark;
  
  export function ioExtensionPointImplement(extensionPointName: string, type: GObject.Type, extensionName: string, priority: number): IOExtension;
  
  export function ioExtensionPointLookup(name: string): IOExtensionPoint;
  
  export function ioExtensionPointRegister(name: string): IOExtensionPoint;
  
  export function ioModulesLoadAllInDirectory(dirname: string): GLib.List;
  
  export function ioModulesLoadAllInDirectoryWithScope(dirname: string, scope: IOModuleScope): GLib.List;
  
  export function ioModulesScanAllInDirectory(dirname: string): void;
  
  export function ioModulesScanAllInDirectoryWithScope(dirname: string, scope: IOModuleScope): void;
  
  export function ioSchedulerCancelAllJobs(): void;
  
  export function ioSchedulerPushJob(jobFunc: IOSchedulerJobFunc, userData: any, notify: GLib.DestroyNotify, ioPriority: number, cancellable: Cancellable): void;
  
  export function keyfileSettingsBackendNew(filename: string, rootPath: string, rootGroup: string): SettingsBackend;
  
  export function memorySettingsBackendNew(): SettingsBackend;
  
  export function networkMonitorGetDefault(): NetworkMonitor;
  
  export function networkingInit(): void;
  
  export function nullSettingsBackendNew(): SettingsBackend;
  
  export function pollableSourceNew(pollableStream: GObject.Object): GLib.Source;
  
  export function pollableSourceNewFull(pollableStream: GObject.Object, childSource: GLib.Source, cancellable: Cancellable): GLib.Source;
  
  export function pollableStreamRead(stream: InputStream, buffer: number[], count: number, blocking: boolean, cancellable: Cancellable): number;
  
  export function pollableStreamWrite(stream: OutputStream, buffer: number[], count: number, blocking: boolean, cancellable: Cancellable): number;
  
  export function pollableStreamWriteAll(stream: OutputStream, buffer: number[], count: number, blocking: boolean, bytesWritten: number, cancellable: Cancellable): boolean;
  
  export function proxyGetDefaultForProtocol(protocol: string): Proxy;
  
  export function proxyResolverGetDefault(): ProxyResolver;
  
  export function resolverErrorQuark(): GLib.Quark;
  
  export function resourceErrorQuark(): GLib.Quark;
  
  export function resourceLoad(filename: string): Resource;
  
  export function resourcesEnumerateChildren(path: string, lookupFlags: ResourceLookupFlags): string[];
  
  export function resourcesGetInfo(path: string, lookupFlags: ResourceLookupFlags, size: number, flags: number): boolean;
  
  export function resourcesLookupData(path: string, lookupFlags: ResourceLookupFlags): GLib.Bytes;
  
  export function resourcesOpenStream(path: string, lookupFlags: ResourceLookupFlags): InputStream;
  
  export function resourcesRegister(resource: Resource): void;
  
  export function resourcesUnregister(resource: Resource): void;
  
  export function settingsSchemaSourceGetDefault(): SettingsSchemaSource;
  
  export function simpleAsyncReportErrorInIdle(object: GObject.Object, callback: AsyncReadyCallback, userData: any, domain: GLib.Quark, code: number, format: string, ...params: any[]): void;
  
  export function simpleAsyncReportGerrorInIdle(object: GObject.Object, callback: AsyncReadyCallback, userData: any, error: GLib.Error): void;
  
  export function simpleAsyncReportTakeGerrorInIdle(object: GObject.Object, callback: AsyncReadyCallback, userData: any, error: GLib.Error): void;
  
  export function srvTargetListSort(targets: GLib.List): GLib.List;
  
  export function tlsBackendGetDefault(): TlsBackend;
  
  export function tlsClientConnectionNew(baseIoStream: IOStream, serverIdentity: SocketConnectable): TlsClientConnection;
  
  export function tlsErrorQuark(): GLib.Quark;
  
  export function tlsFileDatabaseNew(anchors: string): TlsFileDatabase;
  
  export function tlsServerConnectionNew(baseIoStream: IOStream, certificate: TlsCertificate): TlsServerConnection;
  
  export function unixIsMountPathSystemInternal(mountPath: string): boolean;
  
  export function unixMountAt(mountPath: string, timeRead: number): UnixMountEntry;
  
  export function unixMountCompare(mount1: UnixMountEntry, mount2: UnixMountEntry): number;
  
  export function unixMountFree(mountEntry: UnixMountEntry): void;
  
  export function unixMountGetDevicePath(mountEntry: UnixMountEntry): string;
  
  export function unixMountGetFsType(mountEntry: UnixMountEntry): string;
  
  export function unixMountGetMountPath(mountEntry: UnixMountEntry): string;
  
  export function unixMountGuessCanEject(mountEntry: UnixMountEntry): boolean;
  
  export function unixMountGuessIcon(mountEntry: UnixMountEntry): Icon;
  
  export function unixMountGuessName(mountEntry: UnixMountEntry): string;
  
  export function unixMountGuessShouldDisplay(mountEntry: UnixMountEntry): boolean;
  
  export function unixMountGuessSymbolicIcon(mountEntry: UnixMountEntry): Icon;
  
  export function unixMountIsReadonly(mountEntry: UnixMountEntry): boolean;
  
  export function unixMountIsSystemInternal(mountEntry: UnixMountEntry): boolean;
  
  export function unixMountPointsChangedSince(time: number): boolean;
  
  export function unixMountPointsGet(timeRead: number): GLib.List;
  
  export function unixMountsChangedSince(time: number): boolean;
  
  export function unixMountsGet(timeRead: number): GLib.List;
  
  export interface AsyncReadyCallback {
  	(sourceObject: GObject.Object, res: AsyncResult, userData: any): void;
  }
  
  export interface BusAcquiredCallback {
  	(connection: DBusConnection, name: string, userData: any): void;
  }
  
  export interface BusNameAcquiredCallback {
  	(connection: DBusConnection, name: string, userData: any): void;
  }
  
  export interface BusNameAppearedCallback {
  	(connection: DBusConnection, name: string, nameOwner: string, userData: any): void;
  }
  
  export interface BusNameLostCallback {
  	(connection: DBusConnection, name: string, userData: any): void;
  }
  
  export interface BusNameVanishedCallback {
  	(connection: DBusConnection, name: string, userData: any): void;
  }
  
  export interface CancellableSourceFunc {
  	(cancellable: Cancellable, userData: any): boolean;
  }
  
  export interface DBusInterfaceGetPropertyFunc {
  	(connection: DBusConnection, sender: string, objectPath: string, interfaceName: string, propertyName: string, error: GLib.Error, userData: any): GLib.Variant;
  }
  
  export interface DBusInterfaceMethodCallFunc {
  	(connection: DBusConnection, sender: string, objectPath: string, interfaceName: string, methodName: string, parameters: GLib.Variant, invocation: DBusMethodInvocation, userData: any): void;
  }
  
  export interface DBusInterfaceSetPropertyFunc {
  	(connection: DBusConnection, sender: string, objectPath: string, interfaceName: string, propertyName: string, value: GLib.Variant, error: GLib.Error, userData: any): boolean;
  }
  
  export interface DBusMessageFilterFunction {
  	(connection: DBusConnection, message: DBusMessage, incoming: boolean, userData: any): DBusMessage;
  }
  
  export interface DBusProxyTypeFunc {
  	(manager: DBusObjectManagerClient, objectPath: string, interfaceName: string, userData: any): GObject.Type;
  }
  
  export interface DBusSignalCallback {
  	(connection: DBusConnection, senderName: string, objectPath: string, interfaceName: string, signalName: string, parameters: GLib.Variant, userData: any): void;
  }
  
  export interface DBusSubtreeDispatchFunc {
  	(connection: DBusConnection, sender: string, objectPath: string, interfaceName: string, node: string, outUserData: any, userData: any): DBusInterfaceVTable;
  }
  
  export interface DBusSubtreeEnumerateFunc {
  	(connection: DBusConnection, sender: string, objectPath: string, userData: any): string[];
  }
  
  export interface DBusSubtreeIntrospectFunc {
  	(connection: DBusConnection, sender: string, objectPath: string, node: string, userData: any): DBusInterfaceInfo;
  }
  
  export interface DatagramBasedSourceFunc {
  	(datagramBased: DatagramBased, condition: GLib.IOCondition, userData: any): boolean;
  }
  
  export interface DesktopAppLaunchCallback {
  	(appinfo: DesktopAppInfo, pid: GLib.Pid, userData: any): void;
  }
  
  export interface FileMeasureProgressCallback {
  	(reporting: boolean, currentSize: number, numDirs: number, numFiles: number, userData: any): void;
  }
  
  export interface FileProgressCallback {
  	(currentNumBytes: number, totalNumBytes: number, userData: any): void;
  }
  
  export interface FileReadMoreCallback {
  	(fileContents: string, fileSize: number, callbackData: any): boolean;
  }
  
  export interface IOSchedulerJobFunc {
  	(job: IOSchedulerJob, cancellable: Cancellable, userData: any): boolean;
  }
  
  export interface PollableSourceFunc {
  	(pollableStream: GObject.Object, userData: any): boolean;
  }
  
  export interface ReallocFunc {
  	(data: any, size: number): any;
  }
  
  export interface SettingsBindGetMapping {
  	(value: GObject.Value, variant: GLib.Variant, userData: any): boolean;
  }
  
  export interface SettingsBindSetMapping {
  	(value: GObject.Value, expectedType: GLib.VariantType, userData: any): GLib.Variant;
  }
  
  export interface SettingsGetMapping {
  	(value: GLib.Variant, result: any, userData: any): boolean;
  }
  
  export interface SimpleAsyncThreadFunc {
  	(res: SimpleAsyncResult, object: GObject.Object, cancellable: Cancellable): void;
  }
  
  export interface SocketSourceFunc {
  	(socket: Socket, condition: GLib.IOCondition, userData: any): boolean;
  }
  
  export interface TaskThreadFunc {
  	(task: Task, sourceObject: GObject.Object, taskData: any, cancellable: Cancellable): void;
  }
  
  export interface VfsFileLookupFunc {
  	(vfs: Vfs, identifier: string, userData: any): File;
  }
  
  export enum BusType {
    STARTER = -1,
    NONE = 0,
    SYSTEM = 1,
    SESSION = 2
  }
  
  export enum ConverterResult {
    ERROR = 0,
    CONVERTED = 1,
    FINISHED = 2,
    FLUSHED = 3
  }
  
  export enum CredentialsType {
    INVALID = 0,
    LINUX_UCRED = 1,
    FREEBSD_CMSGCRED = 2,
    OPENBSD_SOCKPEERCRED = 3,
    SOLARIS_UCRED = 4,
    NETBSD_UNPCBID = 5
  }
  
  export enum DBusError {
    FAILED = 0,
    NO_MEMORY = 1,
    SERVICE_UNKNOWN = 2,
    NAME_HAS_NO_OWNER = 3,
    NO_REPLY = 4,
    IO_ERROR = 5,
    BAD_ADDRESS = 6,
    NOT_SUPPORTED = 7,
    LIMITS_EXCEEDED = 8,
    ACCESS_DENIED = 9,
    AUTH_FAILED = 10,
    NO_SERVER = 11,
    TIMEOUT = 12,
    NO_NETWORK = 13,
    ADDRESS_IN_USE = 14,
    DISCONNECTED = 15,
    INVALID_ARGS = 16,
    FILE_NOT_FOUND = 17,
    FILE_EXISTS = 18,
    UNKNOWN_METHOD = 19,
    TIMED_OUT = 20,
    MATCH_RULE_NOT_FOUND = 21,
    MATCH_RULE_INVALID = 22,
    SPAWN_EXEC_FAILED = 23,
    SPAWN_FORK_FAILED = 24,
    SPAWN_CHILD_EXITED = 25,
    SPAWN_CHILD_SIGNALED = 26,
    SPAWN_FAILED = 27,
    SPAWN_SETUP_FAILED = 28,
    SPAWN_CONFIG_INVALID = 29,
    SPAWN_SERVICE_INVALID = 30,
    SPAWN_SERVICE_NOT_FOUND = 31,
    SPAWN_PERMISSIONS_INVALID = 32,
    SPAWN_FILE_INVALID = 33,
    SPAWN_NO_MEMORY = 34,
    UNIX_PROCESS_ID_UNKNOWN = 35,
    INVALID_SIGNATURE = 36,
    INVALID_FILE_CONTENT = 37,
    SELINUX_SECURITY_CONTEXT_UNKNOWN = 38,
    ADT_AUDIT_DATA_UNKNOWN = 39,
    OBJECT_PATH_IN_USE = 40,
    UNKNOWN_OBJECT = 41,
    UNKNOWN_INTERFACE = 42,
    UNKNOWN_PROPERTY = 43,
    PROPERTY_READ_ONLY = 44
  }
  
  export enum DBusMessageByteOrder {
    BIG_ENDIAN = 66,
    LITTLE_ENDIAN = 108
  }
  
  export enum DBusMessageHeaderField {
    INVALID = 0,
    PATH = 1,
    INTERFACE = 2,
    MEMBER = 3,
    ERROR_NAME = 4,
    REPLY_SERIAL = 5,
    DESTINATION = 6,
    SENDER = 7,
    SIGNATURE = 8,
    NUM_UNIX_FDS = 9
  }
  
  export enum DBusMessageType {
    INVALID = 0,
    METHOD_CALL = 1,
    METHOD_RETURN = 2,
    ERROR = 3,
    SIGNAL = 4
  }
  
  export enum DataStreamByteOrder {
    BIG_ENDIAN = 0,
    LITTLE_ENDIAN = 1,
    HOST_ENDIAN = 2
  }
  
  export enum DataStreamNewlineType {
    LF = 0,
    CR = 1,
    CR_LF = 2,
    ANY = 3
  }
  
  export enum DriveStartStopType {
    UNKNOWN = 0,
    SHUTDOWN = 1,
    NETWORK = 2,
    MULTIDISK = 3,
    PASSWORD = 4
  }
  
  export enum EmblemOrigin {
    UNKNOWN = 0,
    DEVICE = 1,
    LIVEMETADATA = 2,
    TAG = 3
  }
  
  export enum FileAttributeStatus {
    UNSET = 0,
    SET = 1,
    ERROR_SETTING = 2
  }
  
  export enum FileAttributeType {
    INVALID = 0,
    STRING = 1,
    BYTE_STRING = 2,
    BOOLEAN = 3,
    UINT32 = 4,
    INT32 = 5,
    UINT64 = 6,
    INT64 = 7,
    OBJECT = 8,
    STRINGV = 9
  }
  
  export enum FileMonitorEvent {
    CHANGED = 0,
    CHANGES_DONE_HINT = 1,
    DELETED = 2,
    CREATED = 3,
    ATTRIBUTE_CHANGED = 4,
    PRE_UNMOUNT = 5,
    UNMOUNTED = 6,
    MOVED = 7,
    RENAMED = 8,
    MOVED_IN = 9,
    MOVED_OUT = 10
  }
  
  export enum FileType {
    UNKNOWN = 0,
    REGULAR = 1,
    DIRECTORY = 2,
    SYMBOLIC_LINK = 3,
    SPECIAL = 4,
    SHORTCUT = 5,
    MOUNTABLE = 6
  }
  
  export enum FilesystemPreviewType {
    IF_ALWAYS = 0,
    IF_LOCAL = 1,
    NEVER = 2
  }
  
  export enum IOErrorEnum {
    FAILED = 0,
    NOT_FOUND = 1,
    EXISTS = 2,
    IS_DIRECTORY = 3,
    NOT_DIRECTORY = 4,
    NOT_EMPTY = 5,
    NOT_REGULAR_FILE = 6,
    NOT_SYMBOLIC_LINK = 7,
    NOT_MOUNTABLE_FILE = 8,
    FILENAME_TOO_LONG = 9,
    INVALID_FILENAME = 10,
    TOO_MANY_LINKS = 11,
    NO_SPACE = 12,
    INVALID_ARGUMENT = 13,
    PERMISSION_DENIED = 14,
    NOT_SUPPORTED = 15,
    NOT_MOUNTED = 16,
    ALREADY_MOUNTED = 17,
    CLOSED = 18,
    CANCELLED = 19,
    PENDING = 20,
    READ_ONLY = 21,
    CANT_CREATE_BACKUP = 22,
    WRONG_ETAG = 23,
    TIMED_OUT = 24,
    WOULD_RECURSE = 25,
    BUSY = 26,
    WOULD_BLOCK = 27,
    HOST_NOT_FOUND = 28,
    WOULD_MERGE = 29,
    FAILED_HANDLED = 30,
    TOO_MANY_OPEN_FILES = 31,
    NOT_INITIALIZED = 32,
    ADDRESS_IN_USE = 33,
    PARTIAL_INPUT = 34,
    INVALID_DATA = 35,
    DBUS_ERROR = 36,
    HOST_UNREACHABLE = 37,
    NETWORK_UNREACHABLE = 38,
    CONNECTION_REFUSED = 39,
    PROXY_FAILED = 40,
    PROXY_AUTH_FAILED = 41,
    PROXY_NEED_AUTH = 42,
    PROXY_NOT_ALLOWED = 43,
    BROKEN_PIPE = 44,
    CONNECTION_CLOSED = 44,
    NOT_CONNECTED = 45,
    MESSAGE_TOO_LARGE = 46
  }
  
  export enum IOModuleScopeFlags {
    NONE = 0,
    BLOCK_DUPLICATES = 1
  }
  
  export enum MountOperationResult {
    HANDLED = 0,
    ABORTED = 1,
    UNHANDLED = 2
  }
  
  export enum NetworkConnectivity {
    LOCAL = 1,
    LIMITED = 2,
    PORTAL = 3,
    FULL = 4
  }
  
  export enum NotificationPriority {
    NORMAL = 0,
    LOW = 1,
    HIGH = 2,
    URGENT = 3
  }
  
  export enum PasswordSave {
    NEVER = 0,
    FOR_SESSION = 1,
    PERMANENTLY = 2
  }
  
  export enum ResolverError {
    NOT_FOUND = 0,
    TEMPORARY_FAILURE = 1,
    INTERNAL = 2
  }
  
  export enum ResolverRecordType {
    SRV = 1,
    MX = 2,
    TXT = 3,
    SOA = 4,
    NS = 5
  }
  
  export enum ResourceError {
    NOT_FOUND = 0,
    INTERNAL = 1
  }
  
  export enum SocketClientEvent {
    RESOLVING = 0,
    RESOLVED = 1,
    CONNECTING = 2,
    CONNECTED = 3,
    PROXY_NEGOTIATING = 4,
    PROXY_NEGOTIATED = 5,
    TLS_HANDSHAKING = 6,
    TLS_HANDSHAKED = 7,
    COMPLETE = 8
  }
  
  export enum SocketFamily {
    INVALID = 0,
    UNIX = 1,
    IPV4 = 2,
    IPV6 = 10
  }
  
  export enum SocketListenerEvent {
    BINDING = 0,
    BOUND = 1,
    LISTENING = 2,
    LISTENED = 3
  }
  
  export enum SocketProtocol {
    UNKNOWN = -1,
    DEFAULT = 0,
    TCP = 6,
    UDP = 17,
    SCTP = 132
  }
  
  export enum SocketType {
    INVALID = 0,
    STREAM = 1,
    DATAGRAM = 2,
    SEQPACKET = 3
  }
  
  export enum TlsAuthenticationMode {
    NONE = 0,
    REQUESTED = 1,
    REQUIRED = 2
  }
  
  export enum TlsCertificateRequestFlags {
    NONE = 0
  }
  
  export enum TlsDatabaseLookupFlags {
    NONE = 0,
    KEYPAIR = 1
  }
  
  export enum TlsError {
    UNAVAILABLE = 0,
    MISC = 1,
    BAD_CERTIFICATE = 2,
    NOT_TLS = 3,
    HANDSHAKE = 4,
    CERTIFICATE_REQUIRED = 5,
    EOF = 6
  }
  
  export enum TlsInteractionResult {
    UNHANDLED = 0,
    HANDLED = 1,
    FAILED = 2
  }
  
  export enum TlsRehandshakeMode {
    NEVER = 0,
    SAFELY = 1,
    UNSAFELY = 2
  }
  
  export enum UnixSocketAddressType {
    INVALID = 0,
    ANONYMOUS = 1,
    PATH = 2,
    ABSTRACT = 3,
    ABSTRACT_PADDED = 4
  }
  
  export enum ZlibCompressorFormat {
    ZLIB = 0,
    GZIP = 1,
    RAW = 2
  }
  
  export enum AppInfoCreateFlags {
    NONE = 0,
    NEEDS_TERMINAL = 1,
    SUPPORTS_URIS = 2,
    SUPPORTS_STARTUP_NOTIFICATION = 4
  }
  
  export enum ApplicationFlags {
    FLAGS_NONE = 0,
    IS_SERVICE = 1,
    IS_LAUNCHER = 2,
    HANDLES_OPEN = 4,
    HANDLES_COMMAND_LINE = 8,
    SEND_ENVIRONMENT = 16,
    NON_UNIQUE = 32,
    CAN_OVERRIDE_APP_ID = 64
  }
  
  export enum AskPasswordFlags {
    NEED_PASSWORD = 1,
    NEED_USERNAME = 2,
    NEED_DOMAIN = 4,
    SAVING_SUPPORTED = 8,
    ANONYMOUS_SUPPORTED = 16
  }
  
  export enum BusNameOwnerFlags {
    NONE = 0,
    ALLOW_REPLACEMENT = 1,
    REPLACE = 2
  }
  
  export enum BusNameWatcherFlags {
    NONE = 0,
    AUTO_START = 1
  }
  
  export enum ConverterFlags {
    NONE = 0,
    INPUT_AT_END = 1,
    FLUSH = 2
  }
  
  export enum DBusCallFlags {
    NONE = 0,
    NO_AUTO_START = 1,
    ALLOW_INTERACTIVE_AUTHORIZATION = 2
  }
  
  export enum DBusCapabilityFlags {
    NONE = 0,
    UNIX_FD_PASSING = 1
  }
  
  export enum DBusConnectionFlags {
    NONE = 0,
    AUTHENTICATION_CLIENT = 1,
    AUTHENTICATION_SERVER = 2,
    AUTHENTICATION_ALLOW_ANONYMOUS = 4,
    MESSAGE_BUS_CONNECTION = 8,
    DELAY_MESSAGE_PROCESSING = 16
  }
  
  export enum DBusInterfaceSkeletonFlags {
    NONE = 0,
    HANDLE_METHOD_INVOCATIONS_IN_THREAD = 1
  }
  
  export enum DBusMessageFlags {
    NONE = 0,
    NO_REPLY_EXPECTED = 1,
    NO_AUTO_START = 2,
    ALLOW_INTERACTIVE_AUTHORIZATION = 4
  }
  
  export enum DBusObjectManagerClientFlags {
    NONE = 0,
    DO_NOT_AUTO_START = 1
  }
  
  export enum DBusPropertyInfoFlags {
    NONE = 0,
    READABLE = 1,
    WRITABLE = 2
  }
  
  export enum DBusProxyFlags {
    NONE = 0,
    DO_NOT_LOAD_PROPERTIES = 1,
    DO_NOT_CONNECT_SIGNALS = 2,
    DO_NOT_AUTO_START = 4,
    GET_INVALIDATED_PROPERTIES = 8,
    DO_NOT_AUTO_START_AT_CONSTRUCTION = 16
  }
  
  export enum DBusSendMessageFlags {
    NONE = 0,
    PRESERVE_SERIAL = 1
  }
  
  export enum DBusServerFlags {
    NONE = 0,
    RUN_IN_THREAD = 1,
    AUTHENTICATION_ALLOW_ANONYMOUS = 2
  }
  
  export enum DBusSignalFlags {
    NONE = 0,
    NO_MATCH_RULE = 1,
    MATCH_ARG0_NAMESPACE = 2,
    MATCH_ARG0_PATH = 4
  }
  
  export enum DBusSubtreeFlags {
    NONE = 0,
    DISPATCH_TO_UNENUMERATED_NODES = 1
  }
  
  export enum DriveStartFlags {
    NONE = 0
  }
  
  export enum FileAttributeInfoFlags {
    NONE = 0,
    COPY_WITH_FILE = 1,
    COPY_WHEN_MOVED = 2
  }
  
  export enum FileCopyFlags {
    NONE = 0,
    OVERWRITE = 1,
    BACKUP = 2,
    NOFOLLOW_SYMLINKS = 4,
    ALL_METADATA = 8,
    NO_FALLBACK_FOR_MOVE = 16,
    TARGET_DEFAULT_PERMS = 32
  }
  
  export enum FileCreateFlags {
    NONE = 0,
    PRIVATE = 1,
    REPLACE_DESTINATION = 2
  }
  
  export enum FileMeasureFlags {
    NONE = 0,
    REPORT_ANY_ERROR = 2,
    APPARENT_SIZE = 4,
    NO_XDEV = 8
  }
  
  export enum FileMonitorFlags {
    NONE = 0,
    WATCH_MOUNTS = 1,
    SEND_MOVED = 2,
    WATCH_HARD_LINKS = 4,
    WATCH_MOVES = 8
  }
  
  export enum FileQueryInfoFlags {
    NONE = 0,
    NOFOLLOW_SYMLINKS = 1
  }
  
  export enum IOStreamSpliceFlags {
    NONE = 0,
    CLOSE_STREAM1 = 1,
    CLOSE_STREAM2 = 2,
    WAIT_FOR_BOTH = 4
  }
  
  export enum MountMountFlags {
    NONE = 0
  }
  
  export enum MountUnmountFlags {
    NONE = 0,
    FORCE = 1
  }
  
  export enum OutputStreamSpliceFlags {
    NONE = 0,
    CLOSE_SOURCE = 1,
    CLOSE_TARGET = 2
  }
  
  export enum ResourceFlags {
    NONE = 0,
    COMPRESSED = 1
  }
  
  export enum ResourceLookupFlags {
    NONE = 0
  }
  
  export enum SettingsBindFlags {
    DEFAULT = 0,
    GET = 1,
    SET = 2,
    NO_SENSITIVITY = 4,
    GET_NO_CHANGES = 8,
    INVERT_BOOLEAN = 16
  }
  
  export enum SocketMsgFlags {
    NONE = 0,
    OOB = 1,
    PEEK = 2,
    DONTROUTE = 4
  }
  
  export enum SubprocessFlags {
    NONE = 0,
    STDIN_PIPE = 1,
    STDIN_INHERIT = 2,
    STDOUT_PIPE = 4,
    STDOUT_SILENCE = 8,
    STDERR_PIPE = 16,
    STDERR_SILENCE = 32,
    STDERR_MERGE = 64,
    INHERIT_FDS = 128
  }
  
  export enum TestDBusFlags {
    NONE = 0
  }
  
  export enum TlsCertificateFlags {
    UNKNOWN_CA = 1,
    BAD_IDENTITY = 2,
    NOT_ACTIVATED = 4,
    EXPIRED = 8,
    REVOKED = 16,
    INSECURE = 32,
    GENERIC_ERROR = 64,
    VALIDATE_ALL = 127
  }
  
  export enum TlsDatabaseVerifyFlags {
    NONE = 0
  }
  
  export enum TlsPasswordFlags {
    NONE = 0,
    RETRY = 2,
    MANY_TRIES = 4,
    FINAL_TRY = 8
  }
  
  export class ActionEntry {
    public name: string;
    public parameterType: string;
    public state: string;
    public padding: number[];
    
    activate : { (action: SimpleAction, parameter: GLib.Variant, userData: any): void; };
    changeState : { (action: SimpleAction, value: GLib.Variant, userData: any): void; };
  }
  
  export class ActionGroupInterface {
    public gIface: GObject.TypeInterface;
    
    hasAction : { (actionGroup: ActionGroup, actionName: string): boolean; };
    listActions : { (actionGroup: ActionGroup): string[]; };
    getActionEnabled : { (actionGroup: ActionGroup, actionName: string): boolean; };
    getActionParameterType : { (actionGroup: ActionGroup, actionName: string): GLib.VariantType; };
    getActionStateType : { (actionGroup: ActionGroup, actionName: string): GLib.VariantType; };
    getActionStateHint : { (actionGroup: ActionGroup, actionName: string): GLib.Variant; };
    getActionState : { (actionGroup: ActionGroup, actionName: string): GLib.Variant; };
    changeActionState : { (actionGroup: ActionGroup, actionName: string, value: GLib.Variant): void; };
    activateAction : { (actionGroup: ActionGroup, actionName: string, parameter: GLib.Variant): void; };
    actionAdded : { (actionGroup: ActionGroup, actionName: string): void; };
    actionRemoved : { (actionGroup: ActionGroup, actionName: string): void; };
    actionEnabledChanged : { (actionGroup: ActionGroup, actionName: string, enabled: boolean): void; };
    actionStateChanged : { (actionGroup: ActionGroup, actionName: string, state: GLib.Variant): void; };
    queryAction : { (actionGroup: ActionGroup, actionName: string, enabled: boolean, parameterType: GLib.VariantType, stateType: GLib.VariantType, stateHint: GLib.Variant, state: GLib.Variant): boolean; };
  }
  
  export class ActionInterface {
    public gIface: GObject.TypeInterface;
    
    getName : { (action: Action): string; };
    getParameterType : { (action: Action): GLib.VariantType; };
    getStateType : { (action: Action): GLib.VariantType; };
    getStateHint : { (action: Action): GLib.Variant; };
    getEnabled : { (action: Action): boolean; };
    getState : { (action: Action): GLib.Variant; };
    changeState : { (action: Action, value: GLib.Variant): void; };
    activate : { (action: Action, parameter: GLib.Variant): void; };
  }
  
  export class ActionMapInterface {
    public gIface: GObject.TypeInterface;
    
    lookupAction : { (actionMap: ActionMap, actionName: string): Action; };
    addAction : { (actionMap: ActionMap, action: Action): void; };
    removeAction : { (actionMap: ActionMap, actionName: string): void; };
  }
  
  export class AppInfoIface {
    public gIface: GObject.TypeInterface;
    
    dup : { (appinfo: AppInfo): AppInfo; };
    equal : { (appinfo1: AppInfo, appinfo2: AppInfo): boolean; };
    getId : { (appinfo: AppInfo): string; };
    getName : { (appinfo: AppInfo): string; };
    getDescription : { (appinfo: AppInfo): string; };
    getExecutable : { (appinfo: AppInfo): string; };
    getIcon : { (appinfo: AppInfo): Icon; };
    launch : { (appinfo: AppInfo, files: GLib.List, launchContext: AppLaunchContext): boolean; };
    supportsUris : { (appinfo: AppInfo): boolean; };
    supportsFiles : { (appinfo: AppInfo): boolean; };
    launchUris : { (appinfo: AppInfo, uris: GLib.List, launchContext: AppLaunchContext): boolean; };
    shouldShow : { (appinfo: AppInfo): boolean; };
    setAsDefaultForType : { (appinfo: AppInfo, contentType: string): boolean; };
    setAsDefaultForExtension : { (appinfo: AppInfo, extension: string): boolean; };
    addSupportsType : { (appinfo: AppInfo, contentType: string): boolean; };
    canRemoveSupportsType : { (appinfo: AppInfo): boolean; };
    removeSupportsType : { (appinfo: AppInfo, contentType: string): boolean; };
    canDelete : { (appinfo: AppInfo): boolean; };
    doDelete : { (appinfo: AppInfo): boolean; };
    getCommandline : { (appinfo: AppInfo): string; };
    getDisplayName : { (appinfo: AppInfo): string; };
    setAsLastUsedForType : { (appinfo: AppInfo, contentType: string): boolean; };
    getSupportedTypes : { (appinfo: AppInfo): string[]; };
  }
  
  export class AppLaunchContextClass {
    public parentClass: GObject.ObjectClass;
    
    getDisplay : { (context: AppLaunchContext, info: AppInfo, files: GLib.List): string; };
    getStartupNotifyId : { (context: AppLaunchContext, info: AppInfo, files: GLib.List): string; };
    launchFailed : { (context: AppLaunchContext, startupNotifyId: string): void; };
    launched : { (context: AppLaunchContext, info: AppInfo, platformData: GLib.Variant): void; };
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
  }
  
  export class AppLaunchContextPrivate {
    
  }
  
  export class ApplicationClass {
    public parentClass: GObject.ObjectClass;
    public padding: any[];
    
    startup : { (application: Application): void; };
    activate : { (application: Application): void; };
    open : { (application: Application, files: File[], nFiles: number, hint: string): void; };
    commandLine : { (application: Application, commandLine: ApplicationCommandLine): number; };
    localCommandLine : { (application: Application, _arguments: string[], exitStatus: number): boolean; };
    beforeEmit : { (application: Application, platformData: GLib.Variant): void; };
    afterEmit : { (application: Application, platformData: GLib.Variant): void; };
    addPlatformData : { (application: Application, builder: GLib.VariantBuilder): void; };
    quitMainloop : { (application: Application): void; };
    runMainloop : { (application: Application): void; };
    shutdown : { (application: Application): void; };
    dbusRegister : { (application: Application, connection: DBusConnection, objectPath: string): boolean; };
    dbusUnregister : { (application: Application, connection: DBusConnection, objectPath: string): void; };
    handleLocalOptions : { (application: Application, options: GLib.VariantDict): number; };
  }
  
  export class ApplicationCommandLineClass {
    public parentClass: GObject.ObjectClass;
    public padding: any[];
    
    printLiteral : { (cmdline: ApplicationCommandLine, message: string): void; };
    printerrLiteral : { (cmdline: ApplicationCommandLine, message: string): void; };
    getStdin : { (cmdline: ApplicationCommandLine): InputStream; };
  }
  
  export class ApplicationCommandLinePrivate {
    
  }
  
  export class ApplicationPrivate {
    
  }
  
  export class AsyncInitableIface {
    public gIface: GObject.TypeInterface;
    
    initAsync : { (initable: AsyncInitable, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    initFinish : { (initable: AsyncInitable, res: AsyncResult): boolean; };
  }
  
  export class AsyncResultIface {
    public gIface: GObject.TypeInterface;
    
    getUserData : { (res: AsyncResult): any; };
    getSourceObject : { (res: AsyncResult): GObject.Object; };
    isTagged : { (res: AsyncResult, sourceTag: any): boolean; };
  }
  
  export class BufferedInputStreamClass {
    public parentClass: FilterInputStreamClass;
    
    fill : { (stream: BufferedInputStream, count: number, cancellable: Cancellable): number; };
    fillAsync : { (stream: BufferedInputStream, count: number, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    fillFinish : { (stream: BufferedInputStream, result: AsyncResult): number; };
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
  }
  
  export class BufferedInputStreamPrivate {
    
  }
  
  export class BufferedOutputStreamClass {
    public parentClass: FilterOutputStreamClass;
    
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
  }
  
  export class BufferedOutputStreamPrivate {
    
  }
  
  export class CancellableClass {
    public parentClass: GObject.ObjectClass;
    
    cancelled : { (cancellable: Cancellable): void; };
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
  }
  
  export class CancellablePrivate {
    
  }
  
  export class CharsetConverterClass {
    public parentClass: GObject.ObjectClass;
  }
  
  export class ConverterIface {
    public gIface: GObject.TypeInterface;
    
    convert : { (converter: Converter, inbuf: number[], inbufSize: number, outbuf: number[], outbufSize: number, flags: ConverterFlags, bytesRead: number, bytesWritten: number): ConverterResult; };
    reset : { (converter: Converter): void; };
  }
  
  export class ConverterInputStreamClass {
    public parentClass: FilterInputStreamClass;
    
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
  }
  
  export class ConverterInputStreamPrivate {
    
  }
  
  export class ConverterOutputStreamClass {
    public parentClass: FilterOutputStreamClass;
    
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
  }
  
  export class ConverterOutputStreamPrivate {
    
  }
  
  export class CredentialsClass {
    
  }
  
  export class DBusAnnotationInfo {
    public refCount: number;
    public key: string;
    public value: string;
    public annotations: DBusAnnotationInfo[];
    
    public ref(): DBusAnnotationInfo;
    public unref(): void;
  }
  
  export class DBusArgInfo {
    public refCount: number;
    public name: string;
    public signature: string;
    public annotations: DBusAnnotationInfo[];
    
    public ref(): DBusArgInfo;
    public unref(): void;
  }
  
  export class DBusErrorEntry {
    public errorCode: number;
    public dbusErrorName: string;
  }
  
  export class DBusInterfaceIface {
    public parentIface: GObject.TypeInterface;
    
    getInfo : { (interface_: DBusInterface): DBusInterfaceInfo; };
    getObject : { (interface_: DBusInterface): DBusObject; };
    setObject : { (interface_: DBusInterface, object: DBusObject): void; };
    dupObject : { (interface_: DBusInterface): DBusObject; };
  }
  
  export class DBusInterfaceInfo {
    public refCount: number;
    public name: string;
    public methods: DBusMethodInfo[];
    public signals: DBusSignalInfo[];
    public properties: DBusPropertyInfo[];
    public annotations: DBusAnnotationInfo[];
    
    public cacheBuild(): void;
    public cacheRelease(): void;
    public generateXml(indent: number, stringBuilder: GLib.String): void;
    public lookupMethod(name: string): DBusMethodInfo;
    public lookupProperty(name: string): DBusPropertyInfo;
    public lookupSignal(name: string): DBusSignalInfo;
    public ref(): DBusInterfaceInfo;
    public unref(): void;
  }
  
  export class DBusInterfaceSkeletonClass {
    public parentClass: GObject.ObjectClass;
    public vfuncPadding: any[];
    public signalPadding: any[];
    
    getInfo : { (interface_: DBusInterfaceSkeleton): DBusInterfaceInfo; };
    getVtable : { (interface_: DBusInterfaceSkeleton): DBusInterfaceVTable; };
    getProperties : { (interface_: DBusInterfaceSkeleton): GLib.Variant; };
    flush : { (interface_: DBusInterfaceSkeleton): void; };
    gAuthorizeMethod : { (interface_: DBusInterfaceSkeleton, invocation: DBusMethodInvocation): boolean; };
  }
  
  export class DBusInterfaceSkeletonPrivate {
    
  }
  
  export class DBusInterfaceVTable {
    public methodCall: DBusInterfaceMethodCallFunc;
    public getProperty: DBusInterfaceGetPropertyFunc;
    public setProperty: DBusInterfaceSetPropertyFunc;
    public padding: any[];
  }
  
  export class DBusMethodInfo {
    public refCount: number;
    public name: string;
    public inArgs: DBusArgInfo[];
    public outArgs: DBusArgInfo[];
    public annotations: DBusAnnotationInfo[];
    
    public ref(): DBusMethodInfo;
    public unref(): void;
  }
  
  export class DBusNodeInfo {
    public refCount: number;
    public path: string;
    public interfaces: DBusInterfaceInfo[];
    public nodes: DBusNodeInfo[];
    public annotations: DBusAnnotationInfo[];
    
    public generateXml(indent: number, stringBuilder: GLib.String): void;
    public lookupInterface(name: string): DBusInterfaceInfo;
    public ref(): DBusNodeInfo;
    public unref(): void;
  }
  
  export class DBusObjectIface {
    public parentIface: GObject.TypeInterface;
    
    getObjectPath : { (object: DBusObject): string; };
    getInterfaces : { (object: DBusObject): GLib.List; };
    getInterface : { (object: DBusObject, interfaceName: string): DBusInterface; };
    interfaceAdded : { (object: DBusObject, interface_: DBusInterface): void; };
    interfaceRemoved : { (object: DBusObject, interface_: DBusInterface): void; };
  }
  
  export class DBusObjectManagerClientClass {
    public parentClass: GObject.ObjectClass;
    public padding: any[];
    
    interfaceProxySignal : { (manager: DBusObjectManagerClient, objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant): void; };
    interfaceProxyPropertiesChanged : { (manager: DBusObjectManagerClient, objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string): void; };
  }
  
  export class DBusObjectManagerClientPrivate {
    
  }
  
  export class DBusObjectManagerIface {
    public parentIface: GObject.TypeInterface;
    
    getObjectPath : { (manager: DBusObjectManager): string; };
    getObjects : { (manager: DBusObjectManager): GLib.List; };
    getObject : { (manager: DBusObjectManager, objectPath: string): DBusObject; };
    getInterface : { (manager: DBusObjectManager, objectPath: string, interfaceName: string): DBusInterface; };
    objectAdded : { (manager: DBusObjectManager, object: DBusObject): void; };
    objectRemoved : { (manager: DBusObjectManager, object: DBusObject): void; };
    interfaceAdded : { (manager: DBusObjectManager, object: DBusObject, interface_: DBusInterface): void; };
    interfaceRemoved : { (manager: DBusObjectManager, object: DBusObject, interface_: DBusInterface): void; };
  }
  
  export class DBusObjectManagerServerClass {
    public parentClass: GObject.ObjectClass;
    public padding: any[];
  }
  
  export class DBusObjectManagerServerPrivate {
    
  }
  
  export class DBusObjectProxyClass {
    public parentClass: GObject.ObjectClass;
    public padding: any[];
  }
  
  export class DBusObjectProxyPrivate {
    
  }
  
  export class DBusObjectSkeletonClass {
    public parentClass: GObject.ObjectClass;
    public padding: any[];
    
    authorizeMethod : { (object: DBusObjectSkeleton, interface_: DBusInterfaceSkeleton, invocation: DBusMethodInvocation): boolean; };
  }
  
  export class DBusObjectSkeletonPrivate {
    
  }
  
  export class DBusPropertyInfo {
    public refCount: number;
    public name: string;
    public signature: string;
    public flags: DBusPropertyInfoFlags;
    public annotations: DBusAnnotationInfo[];
    
    public ref(): DBusPropertyInfo;
    public unref(): void;
  }
  
  export class DBusProxyClass {
    public parentClass: GObject.ObjectClass;
    public padding: any[];
    
    gPropertiesChanged : { (proxy: DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string): void; };
    gSignal : { (proxy: DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant): void; };
  }
  
  export class DBusProxyPrivate {
    
  }
  
  export class DBusSignalInfo {
    public refCount: number;
    public name: string;
    public args: DBusArgInfo[];
    public annotations: DBusAnnotationInfo[];
    
    public ref(): DBusSignalInfo;
    public unref(): void;
  }
  
  export class DBusSubtreeVTable {
    public enumerate: DBusSubtreeEnumerateFunc;
    public introspect: DBusSubtreeIntrospectFunc;
    public dispatch: DBusSubtreeDispatchFunc;
    public padding: any[];
  }
  
  export class DataInputStreamClass {
    public parentClass: BufferedInputStreamClass;
    
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
  }
  
  export class DataInputStreamPrivate {
    
  }
  
  export class DataOutputStreamClass {
    public parentClass: FilterOutputStreamClass;
    
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
  }
  
  export class DataOutputStreamPrivate {
    
  }
  
  export class DatagramBasedInterface {
    public gIface: GObject.TypeInterface;
    
    receiveMessages : { (datagramBased: DatagramBased, messages: InputMessage[], numMessages: number, flags: number, timeout: number, cancellable: Cancellable): number; };
    sendMessages : { (datagramBased: DatagramBased, messages: OutputMessage[], numMessages: number, flags: number, timeout: number, cancellable: Cancellable): number; };
    createSource : { (datagramBased: DatagramBased, condition: GLib.IOCondition, cancellable: Cancellable): GLib.Source; };
    conditionCheck : { (datagramBased: DatagramBased, condition: GLib.IOCondition): GLib.IOCondition; };
    conditionWait : { (datagramBased: DatagramBased, condition: GLib.IOCondition, timeout: number, cancellable: Cancellable): boolean; };
  }
  
  export class DesktopAppInfoClass {
    public parentClass: GObject.ObjectClass;
  }
  
  export class DesktopAppInfoLookupIface {
    public gIface: GObject.TypeInterface;
    
    getDefaultForUriScheme : { (lookup: DesktopAppInfoLookup, uriScheme: string): AppInfo; };
  }
  
  export class DriveIface {
    public gIface: GObject.TypeInterface;
    
    changed : { (drive: Drive): void; };
    disconnected : { (drive: Drive): void; };
    ejectButton : { (drive: Drive): void; };
    getName : { (drive: Drive): string; };
    getIcon : { (drive: Drive): Icon; };
    hasVolumes : { (drive: Drive): boolean; };
    getVolumes : { (drive: Drive): GLib.List; };
    isMediaRemovable : { (drive: Drive): boolean; };
    hasMedia : { (drive: Drive): boolean; };
    isMediaCheckAutomatic : { (drive: Drive): boolean; };
    canEject : { (drive: Drive): boolean; };
    canPollForMedia : { (drive: Drive): boolean; };
    eject : { (drive: Drive, flags: MountUnmountFlags, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    ejectFinish : { (drive: Drive, result: AsyncResult): boolean; };
    pollForMedia : { (drive: Drive, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    pollForMediaFinish : { (drive: Drive, result: AsyncResult): boolean; };
    getIdentifier : { (drive: Drive, kind: string): string; };
    enumerateIdentifiers : { (drive: Drive): string[]; };
    getStartStopType : { (drive: Drive): DriveStartStopType; };
    canStart : { (drive: Drive): boolean; };
    canStartDegraded : { (drive: Drive): boolean; };
    start : { (drive: Drive, flags: DriveStartFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    startFinish : { (drive: Drive, result: AsyncResult): boolean; };
    canStop : { (drive: Drive): boolean; };
    stop : { (drive: Drive, flags: MountUnmountFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    stopFinish : { (drive: Drive, result: AsyncResult): boolean; };
    stopButton : { (drive: Drive): void; };
    ejectWithOperation : { (drive: Drive, flags: MountUnmountFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    ejectWithOperationFinish : { (drive: Drive, result: AsyncResult): boolean; };
    getSortKey : { (drive: Drive): string; };
    getSymbolicIcon : { (drive: Drive): Icon; };
    isRemovable : { (drive: Drive): boolean; };
  }
  
  export class DtlsClientConnectionInterface {
    public gIface: GObject.TypeInterface;
  }
  
  export class DtlsConnectionInterface {
    public gIface: GObject.TypeInterface;
    
    acceptCertificate : { (connection: DtlsConnection, peerCert: TlsCertificate, errors: TlsCertificateFlags): boolean; };
    handshake : { (conn: DtlsConnection, cancellable: Cancellable): boolean; };
    handshakeAsync : { (conn: DtlsConnection, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    handshakeFinish : { (conn: DtlsConnection, result: AsyncResult): boolean; };
    shutdown : { (conn: DtlsConnection, shutdownRead: boolean, shutdownWrite: boolean, cancellable: Cancellable): boolean; };
    shutdownAsync : { (conn: DtlsConnection, shutdownRead: boolean, shutdownWrite: boolean, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    shutdownFinish : { (conn: DtlsConnection, result: AsyncResult): boolean; };
  }
  
  export class DtlsServerConnectionInterface {
    public gIface: GObject.TypeInterface;
  }
  
  export class EmblemClass {
    
  }
  
  export class EmblemedIconClass {
    public parentClass: GObject.ObjectClass;
  }
  
  export class EmblemedIconPrivate {
    
  }
  
  export class FileAttributeInfo {
    public name: string;
    public type: FileAttributeType;
    public flags: FileAttributeInfoFlags;
  }
  
  export class FileAttributeInfoList {
    public infos: FileAttributeInfo;
    public nInfos: number;
    
    public add(name: string, type: FileAttributeType, flags: FileAttributeInfoFlags): void;
    public dup(): FileAttributeInfoList;
    public lookup(name: string): FileAttributeInfo;
    public ref(): FileAttributeInfoList;
    public unref(): void;
  }
  
  export class FileAttributeMatcher {
    public enumerateNamespace(ns: string): boolean;
    public enumerateNext(): string;
    public matches(attribute: string): boolean;
    public matchesOnly(attribute: string): boolean;
    public ref(): FileAttributeMatcher;
    public subtract(subtract: FileAttributeMatcher): FileAttributeMatcher;
    public toString(): string;
    public unref(): void;
  }
  
  export class FileDescriptorBasedIface {
    public gIface: GObject.TypeInterface;
    
    getFd : { (fdBased: FileDescriptorBased): number; };
  }
  
  export class FileEnumeratorClass {
    public parentClass: GObject.ObjectClass;
    
    nextFile : { (enumerator: FileEnumerator, cancellable: Cancellable): FileInfo; };
    closeFn : { (enumerator: FileEnumerator, cancellable: Cancellable): boolean; };
    nextFilesAsync : { (enumerator: FileEnumerator, numFiles: number, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    nextFilesFinish : { (enumerator: FileEnumerator, result: AsyncResult): GLib.List; };
    closeAsync : { (enumerator: FileEnumerator, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    closeFinish : { (enumerator: FileEnumerator, result: AsyncResult): boolean; };
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
    _gReserved6 : { (): void; };
    _gReserved7 : { (): void; };
  }
  
  export class FileEnumeratorPrivate {
    
  }
  
  export class FileIOStreamClass {
    public parentClass: IOStreamClass;
    
    tell : { (stream: FileIOStream): number; };
    canSeek : { (stream: FileIOStream): boolean; };
    seek : { (stream: FileIOStream, offset: number, type: GLib.SeekType, cancellable: Cancellable): boolean; };
    canTruncate : { (stream: FileIOStream): boolean; };
    truncateFn : { (stream: FileIOStream, size: number, cancellable: Cancellable): boolean; };
    queryInfo : { (stream: FileIOStream, attributes: string, cancellable: Cancellable): FileInfo; };
    queryInfoAsync : { (stream: FileIOStream, attributes: string, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    queryInfoFinish : { (stream: FileIOStream, result: AsyncResult): FileInfo; };
    getEtag : { (stream: FileIOStream): string; };
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
  }
  
  export class FileIOStreamPrivate {
    
  }
  
  export class FileIconClass {
    
  }
  
  export class FileIface {
    public gIface: GObject.TypeInterface;
    public supportsThreadContexts: boolean;
    
    dup : { (file: File): File; };
    hash : { (file: File): number; };
    equal : { (file1: File, file2: File): boolean; };
    isNative : { (file: File): boolean; };
    hasUriScheme : { (file: File, uriScheme: string): boolean; };
    getUriScheme : { (file: File): string; };
    getBasename : { (file: File): string; };
    getPath : { (file: File): string; };
    getUri : { (file: File): string; };
    getParseName : { (file: File): string; };
    getParent : { (file: File): File; };
    prefixMatches : { (prefix: File, file: File): boolean; };
    getRelativePath : { (parent: File, descendant: File): string; };
    resolveRelativePath : { (file: File, relativePath: string): File; };
    getChildForDisplayName : { (file: File, displayName: string): File; };
    enumerateChildren : { (file: File, attributes: string, flags: FileQueryInfoFlags, cancellable: Cancellable): FileEnumerator; };
    enumerateChildrenAsync : { (file: File, attributes: string, flags: FileQueryInfoFlags, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    enumerateChildrenFinish : { (file: File, res: AsyncResult): FileEnumerator; };
    queryInfo : { (file: File, attributes: string, flags: FileQueryInfoFlags, cancellable: Cancellable): FileInfo; };
    queryInfoAsync : { (file: File, attributes: string, flags: FileQueryInfoFlags, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    queryInfoFinish : { (file: File, res: AsyncResult): FileInfo; };
    queryFilesystemInfo : { (file: File, attributes: string, cancellable: Cancellable): FileInfo; };
    queryFilesystemInfoAsync : { (file: File, attributes: string, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    queryFilesystemInfoFinish : { (file: File, res: AsyncResult): FileInfo; };
    findEnclosingMount : { (file: File, cancellable: Cancellable): Mount; };
    findEnclosingMountAsync : { (file: File, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    findEnclosingMountFinish : { (file: File, res: AsyncResult): Mount; };
    setDisplayName : { (file: File, displayName: string, cancellable: Cancellable): File; };
    setDisplayNameAsync : { (file: File, displayName: string, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    setDisplayNameFinish : { (file: File, res: AsyncResult): File; };
    querySettableAttributes : { (file: File, cancellable: Cancellable): FileAttributeInfoList; };
    _querySettableAttributesAsync : { (): void; };
    _querySettableAttributesFinish : { (): void; };
    queryWritableNamespaces : { (file: File, cancellable: Cancellable): FileAttributeInfoList; };
    _queryWritableNamespacesAsync : { (): void; };
    _queryWritableNamespacesFinish : { (): void; };
    setAttribute : { (file: File, attribute: string, type: FileAttributeType, valueP: any, flags: FileQueryInfoFlags, cancellable: Cancellable): boolean; };
    setAttributesFromInfo : { (file: File, info: FileInfo, flags: FileQueryInfoFlags, cancellable: Cancellable): boolean; };
    setAttributesAsync : { (file: File, info: FileInfo, flags: FileQueryInfoFlags, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    setAttributesFinish : { (file: File, result: AsyncResult, info: FileInfo): boolean; };
    readFn : { (file: File, cancellable: Cancellable): FileInputStream; };
    readAsync : { (file: File, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    readFinish : { (file: File, res: AsyncResult): FileInputStream; };
    appendTo : { (file: File, flags: FileCreateFlags, cancellable: Cancellable): FileOutputStream; };
    appendToAsync : { (file: File, flags: FileCreateFlags, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    appendToFinish : { (file: File, res: AsyncResult): FileOutputStream; };
    create : { (file: File, flags: FileCreateFlags, cancellable: Cancellable): FileOutputStream; };
    createAsync : { (file: File, flags: FileCreateFlags, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    createFinish : { (file: File, res: AsyncResult): FileOutputStream; };
    replace : { (file: File, etag: string, makeBackup: boolean, flags: FileCreateFlags, cancellable: Cancellable): FileOutputStream; };
    replaceAsync : { (file: File, etag: string, makeBackup: boolean, flags: FileCreateFlags, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    replaceFinish : { (file: File, res: AsyncResult): FileOutputStream; };
    deleteFile : { (file: File, cancellable: Cancellable): boolean; };
    deleteFileAsync : { (file: File, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    deleteFileFinish : { (file: File, result: AsyncResult): boolean; };
    trash : { (file: File, cancellable: Cancellable): boolean; };
    trashAsync : { (file: File, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    trashFinish : { (file: File, result: AsyncResult): boolean; };
    makeDirectory : { (file: File, cancellable: Cancellable): boolean; };
    makeDirectoryAsync : { (file: File, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    makeDirectoryFinish : { (file: File, result: AsyncResult): boolean; };
    makeSymbolicLink : { (file: File, symlinkValue: string, cancellable: Cancellable): boolean; };
    _makeSymbolicLinkAsync : { (): void; };
    _makeSymbolicLinkFinish : { (): void; };
    copy : { (source: File, destination: File, flags: FileCopyFlags, cancellable: Cancellable, progressCallback: FileProgressCallback, progressCallbackData: any): boolean; };
    copyAsync : { (source: File, destination: File, flags: FileCopyFlags, ioPriority: number, cancellable: Cancellable, progressCallback: FileProgressCallback, progressCallbackData: any, callback: AsyncReadyCallback, userData: any): void; };
    copyFinish : { (file: File, res: AsyncResult): boolean; };
    move : { (source: File, destination: File, flags: FileCopyFlags, cancellable: Cancellable, progressCallback: FileProgressCallback, progressCallbackData: any): boolean; };
    _moveAsync : { (): void; };
    _moveFinish : { (): void; };
    mountMountable : { (file: File, flags: MountMountFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    mountMountableFinish : { (file: File, result: AsyncResult): File; };
    unmountMountable : { (file: File, flags: MountUnmountFlags, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    unmountMountableFinish : { (file: File, result: AsyncResult): boolean; };
    ejectMountable : { (file: File, flags: MountUnmountFlags, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    ejectMountableFinish : { (file: File, result: AsyncResult): boolean; };
    mountEnclosingVolume : { (location: File, flags: MountMountFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    mountEnclosingVolumeFinish : { (location: File, result: AsyncResult): boolean; };
    monitorDir : { (file: File, flags: FileMonitorFlags, cancellable: Cancellable): FileMonitor; };
    monitorFile : { (file: File, flags: FileMonitorFlags, cancellable: Cancellable): FileMonitor; };
    openReadwrite : { (file: File, cancellable: Cancellable): FileIOStream; };
    openReadwriteAsync : { (file: File, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    openReadwriteFinish : { (file: File, res: AsyncResult): FileIOStream; };
    createReadwrite : { (file: File, flags: FileCreateFlags, cancellable: Cancellable): FileIOStream; };
    createReadwriteAsync : { (file: File, flags: FileCreateFlags, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    createReadwriteFinish : { (file: File, res: AsyncResult): FileIOStream; };
    replaceReadwrite : { (file: File, etag: string, makeBackup: boolean, flags: FileCreateFlags, cancellable: Cancellable): FileIOStream; };
    replaceReadwriteAsync : { (file: File, etag: string, makeBackup: boolean, flags: FileCreateFlags, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    replaceReadwriteFinish : { (file: File, res: AsyncResult): FileIOStream; };
    startMountable : { (file: File, flags: DriveStartFlags, startOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    startMountableFinish : { (file: File, result: AsyncResult): boolean; };
    stopMountable : { (file: File, flags: MountUnmountFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    stopMountableFinish : { (file: File, result: AsyncResult): boolean; };
    unmountMountableWithOperation : { (file: File, flags: MountUnmountFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    unmountMountableWithOperationFinish : { (file: File, result: AsyncResult): boolean; };
    ejectMountableWithOperation : { (file: File, flags: MountUnmountFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    ejectMountableWithOperationFinish : { (file: File, result: AsyncResult): boolean; };
    pollMountable : { (file: File, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    pollMountableFinish : { (file: File, result: AsyncResult): boolean; };
    measureDiskUsage : { (file: File, flags: FileMeasureFlags, cancellable: Cancellable, progressCallback: FileMeasureProgressCallback, progressData: any, diskUsage: number, numDirs: number, numFiles: number): boolean; };
    measureDiskUsageAsync : { (file: File, flags: FileMeasureFlags, ioPriority: number, cancellable: Cancellable, progressCallback: FileMeasureProgressCallback, progressData: any, callback: AsyncReadyCallback, userData: any): void; };
    measureDiskUsageFinish : { (file: File, result: AsyncResult, diskUsage: number, numDirs: number, numFiles: number): boolean; };
  }
  
  export class FileInfoClass {
    
  }
  
  export class FileInputStreamClass {
    public parentClass: InputStreamClass;
    
    tell : { (stream: FileInputStream): number; };
    canSeek : { (stream: FileInputStream): boolean; };
    seek : { (stream: FileInputStream, offset: number, type: GLib.SeekType, cancellable: Cancellable): boolean; };
    queryInfo : { (stream: FileInputStream, attributes: string, cancellable: Cancellable): FileInfo; };
    queryInfoAsync : { (stream: FileInputStream, attributes: string, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    queryInfoFinish : { (stream: FileInputStream, result: AsyncResult): FileInfo; };
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
  }
  
  export class FileInputStreamPrivate {
    
  }
  
  export class FileMonitorClass {
    public parentClass: GObject.ObjectClass;
    
    changed : { (monitor: FileMonitor, file: File, otherFile: File, eventType: FileMonitorEvent): void; };
    cancel : { (monitor: FileMonitor): boolean; };
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
  }
  
  export class FileMonitorPrivate {
    
  }
  
  export class FileOutputStreamClass {
    public parentClass: OutputStreamClass;
    
    tell : { (stream: FileOutputStream): number; };
    canSeek : { (stream: FileOutputStream): boolean; };
    seek : { (stream: FileOutputStream, offset: number, type: GLib.SeekType, cancellable: Cancellable): boolean; };
    canTruncate : { (stream: FileOutputStream): boolean; };
    truncateFn : { (stream: FileOutputStream, size: number, cancellable: Cancellable): boolean; };
    queryInfo : { (stream: FileOutputStream, attributes: string, cancellable: Cancellable): FileInfo; };
    queryInfoAsync : { (stream: FileOutputStream, attributes: string, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    queryInfoFinish : { (stream: FileOutputStream, result: AsyncResult): FileInfo; };
    getEtag : { (stream: FileOutputStream): string; };
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
  }
  
  export class FileOutputStreamPrivate {
    
  }
  
  export class FilenameCompleterClass {
    public parentClass: GObject.ObjectClass;
    
    gotCompletionData : { (filenameCompleter: FilenameCompleter): void; };
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
  }
  
  export class FilterInputStreamClass {
    public parentClass: InputStreamClass;
    
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
  }
  
  export class FilterOutputStreamClass {
    public parentClass: OutputStreamClass;
    
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
  }
  
  export class IOExtension {
    public getName(): string;
    public getPriority(): number;
    public getType(): GObject.Type;
    public refClass(): GObject.TypeClass;
  }
  
  export class IOExtensionPoint {
    public getExtensionByName(name: string): IOExtension;
    public getExtensions(): GLib.List;
    public getRequiredType(): GObject.Type;
    public setRequiredType(type: GObject.Type): void;
  }
  
  export class IOModuleClass {
    
  }
  
  export class IOModuleScope {
    public block(basename: string): void;
    public free(): void;
  }
  
  export class IOSchedulerJob {
    public sendToMainloop(func: GLib.SourceFunc, userData: any, notify: GLib.DestroyNotify): boolean;
    public sendToMainloopAsync(func: GLib.SourceFunc, userData: any, notify: GLib.DestroyNotify): void;
  }
  
  export class IOStreamAdapter {
    
  }
  
  export class IOStreamClass {
    public parentClass: GObject.ObjectClass;
    
    getInputStream : { (stream: IOStream): InputStream; };
    getOutputStream : { (stream: IOStream): OutputStream; };
    closeFn : { (stream: IOStream, cancellable: Cancellable): boolean; };
    closeAsync : { (stream: IOStream, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    closeFinish : { (stream: IOStream, result: AsyncResult): boolean; };
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
    _gReserved6 : { (): void; };
    _gReserved7 : { (): void; };
    _gReserved8 : { (): void; };
    _gReserved9 : { (): void; };
    _gReserved10 : { (): void; };
  }
  
  export class IOStreamPrivate {
    
  }
  
  export class IconIface {
    public gIface: GObject.TypeInterface;
    
    hash : { (icon: Icon): number; };
    equal : { (icon1: Icon, icon2: Icon): boolean; };
    toTokens : { (icon: Icon, tokens: any[], outVersion: number): boolean; };
    fromTokens : { (tokens: string, numTokens: number, version: number): Icon; };
    serialize : { (icon: Icon): GLib.Variant; };
  }
  
  export class InetAddressClass {
    public parentClass: GObject.ObjectClass;
    
    toString : { (address: InetAddress): string; };
    toBytes : { (address: InetAddress): number; };
  }
  
  export class InetAddressMaskClass {
    public parentClass: GObject.ObjectClass;
  }
  
  export class InetAddressMaskPrivate {
    
  }
  
  export class InetAddressPrivate {
    
  }
  
  export class InetSocketAddressClass {
    public parentClass: SocketAddressClass;
  }
  
  export class InetSocketAddressPrivate {
    
  }
  
  export class InitableIface {
    public gIface: GObject.TypeInterface;
    
    init : { (initable: Initable, cancellable: Cancellable): boolean; };
  }
  
  export class InputMessage {
    public address: SocketAddress;
    public vectors: InputVector[];
    public numVectors: number;
    public bytesReceived: number;
    public flags: number;
    public controlMessages: SocketControlMessage[];
    public numControlMessages: number;
  }
  
  export class InputStreamClass {
    public parentClass: GObject.ObjectClass;
    
    readFn : { (stream: InputStream, buffer: any, count: number, cancellable: Cancellable): number; };
    skip : { (stream: InputStream, count: number, cancellable: Cancellable): number; };
    closeFn : { (stream: InputStream, cancellable: Cancellable): boolean; };
    readAsync : { (stream: InputStream, buffer: number[], count: number, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    readFinish : { (stream: InputStream, result: AsyncResult): number; };
    skipAsync : { (stream: InputStream, count: number, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    skipFinish : { (stream: InputStream, result: AsyncResult): number; };
    closeAsync : { (stream: InputStream, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    closeFinish : { (stream: InputStream, result: AsyncResult): boolean; };
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
  }
  
  export class InputStreamPrivate {
    
  }
  
  export class InputVector {
    public buffer: any;
    public size: number;
  }
  
  export class ListModelInterface {
    public gIface: GObject.TypeInterface;
    
    getItemType : { (list: ListModel): GObject.Type; };
    getNItems : { (list: ListModel): number; };
    getItem : { (list: ListModel, position: number): any; };
  }
  
  export class ListStoreClass {
    public parentClass: GObject.ObjectClass;
  }
  
  export class LoadableIconIface {
    public gIface: GObject.TypeInterface;
    
    load : { (icon: LoadableIcon, size: number, type: string, cancellable: Cancellable): InputStream; };
    loadAsync : { (icon: LoadableIcon, size: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    loadFinish : { (icon: LoadableIcon, res: AsyncResult, type: string): InputStream; };
  }
  
  export class MemoryInputStreamClass {
    public parentClass: InputStreamClass;
    
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
  }
  
  export class MemoryInputStreamPrivate {
    
  }
  
  export class MemoryOutputStreamClass {
    public parentClass: OutputStreamClass;
    
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
  }
  
  export class MemoryOutputStreamPrivate {
    
  }
  
  export class MenuAttributeIterClass {
    public parentClass: GObject.ObjectClass;
    
    getNext : { (iter: MenuAttributeIter, outName: string, value: GLib.Variant): boolean; };
  }
  
  export class MenuAttributeIterPrivate {
    
  }
  
  export class MenuLinkIterClass {
    public parentClass: GObject.ObjectClass;
    
    getNext : { (iter: MenuLinkIter, outLink: string, value: MenuModel): boolean; };
  }
  
  export class MenuLinkIterPrivate {
    
  }
  
  export class MenuModelClass {
    public parentClass: GObject.ObjectClass;
    
    isMutable : { (model: MenuModel): boolean; };
    getNItems : { (model: MenuModel): number; };
    getItemAttributes : { (model: MenuModel, itemIndex: number, attributes: GLib.HashTable): void; };
    iterateItemAttributes : { (model: MenuModel, itemIndex: number): MenuAttributeIter; };
    getItemAttributeValue : { (model: MenuModel, itemIndex: number, attribute: string, expectedType: GLib.VariantType): GLib.Variant; };
    getItemLinks : { (model: MenuModel, itemIndex: number, links: GLib.HashTable): void; };
    iterateItemLinks : { (model: MenuModel, itemIndex: number): MenuLinkIter; };
    getItemLink : { (model: MenuModel, itemIndex: number, link: string): MenuModel; };
  }
  
  export class MenuModelPrivate {
    
  }
  
  export class MountIface {
    public gIface: GObject.TypeInterface;
    
    changed : { (mount: Mount): void; };
    unmounted : { (mount: Mount): void; };
    getRoot : { (mount: Mount): File; };
    getName : { (mount: Mount): string; };
    getIcon : { (mount: Mount): Icon; };
    getUuid : { (mount: Mount): string; };
    getVolume : { (mount: Mount): Volume; };
    getDrive : { (mount: Mount): Drive; };
    canUnmount : { (mount: Mount): boolean; };
    canEject : { (mount: Mount): boolean; };
    unmount : { (mount: Mount, flags: MountUnmountFlags, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    unmountFinish : { (mount: Mount, result: AsyncResult): boolean; };
    eject : { (mount: Mount, flags: MountUnmountFlags, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    ejectFinish : { (mount: Mount, result: AsyncResult): boolean; };
    remount : { (mount: Mount, flags: MountMountFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    remountFinish : { (mount: Mount, result: AsyncResult): boolean; };
    guessContentType : { (mount: Mount, forceRescan: boolean, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    guessContentTypeFinish : { (mount: Mount, result: AsyncResult): string[]; };
    guessContentTypeSync : { (mount: Mount, forceRescan: boolean, cancellable: Cancellable): string[]; };
    preUnmount : { (mount: Mount): void; };
    unmountWithOperation : { (mount: Mount, flags: MountUnmountFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    unmountWithOperationFinish : { (mount: Mount, result: AsyncResult): boolean; };
    ejectWithOperation : { (mount: Mount, flags: MountUnmountFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    ejectWithOperationFinish : { (mount: Mount, result: AsyncResult): boolean; };
    getDefaultLocation : { (mount: Mount): File; };
    getSortKey : { (mount: Mount): string; };
    getSymbolicIcon : { (mount: Mount): Icon; };
  }
  
  export class MountOperationClass {
    public parentClass: GObject.ObjectClass;
    
    askPassword : { (op: MountOperation, message: string, defaultUser: string, defaultDomain: string, flags: AskPasswordFlags): void; };
    askQuestion : { (op: MountOperation, message: string, choices: string): void; };
    reply : { (op: MountOperation, result: MountOperationResult): void; };
    aborted : { (op: MountOperation): void; };
    showProcesses : { (op: MountOperation, message: string, processes: any[], choices: string): void; };
    showUnmountProgress : { (op: MountOperation, message: string, timeLeft: number, bytesLeft: number): void; };
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
    _gReserved6 : { (): void; };
    _gReserved7 : { (): void; };
    _gReserved8 : { (): void; };
    _gReserved9 : { (): void; };
  }
  
  export class MountOperationPrivate {
    
  }
  
  export class NativeSocketAddress {
    
  }
  
  export class NativeVolumeMonitorClass {
    public parentClass: VolumeMonitorClass;
    
    getMountForMountPath : { (mountPath: string, cancellable: Cancellable): Mount; };
  }
  
  export class NetworkAddressClass {
    public parentClass: GObject.ObjectClass;
  }
  
  export class NetworkAddressPrivate {
    
  }
  
  export class NetworkMonitorInterface {
    public gIface: GObject.TypeInterface;
    
    networkChanged : { (monitor: NetworkMonitor, available: boolean): void; };
    canReach : { (monitor: NetworkMonitor, connectable: SocketConnectable, cancellable: Cancellable): boolean; };
    canReachAsync : { (monitor: NetworkMonitor, connectable: SocketConnectable, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    canReachFinish : { (monitor: NetworkMonitor, result: AsyncResult): boolean; };
  }
  
  export class NetworkServiceClass {
    public parentClass: GObject.ObjectClass;
  }
  
  export class NetworkServicePrivate {
    
  }
  
  export class OutputMessage {
    public address: SocketAddress;
    public vectors: OutputVector;
    public numVectors: number;
    public bytesSent: number;
    public controlMessages: SocketControlMessage[];
    public numControlMessages: number;
  }
  
  export class OutputStreamClass {
    public parentClass: GObject.ObjectClass;
    
    writeFn : { (stream: OutputStream, buffer: number[], count: number, cancellable: Cancellable): number; };
    splice : { (stream: OutputStream, source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable): number; };
    flush : { (stream: OutputStream, cancellable: Cancellable): boolean; };
    closeFn : { (stream: OutputStream, cancellable: Cancellable): boolean; };
    writeAsync : { (stream: OutputStream, buffer: number[], count: number, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    writeFinish : { (stream: OutputStream, result: AsyncResult): number; };
    spliceAsync : { (stream: OutputStream, source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    spliceFinish : { (stream: OutputStream, result: AsyncResult): number; };
    flushAsync : { (stream: OutputStream, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    flushFinish : { (stream: OutputStream, result: AsyncResult): boolean; };
    closeAsync : { (stream: OutputStream, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    closeFinish : { (stream: OutputStream, result: AsyncResult): boolean; };
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
    _gReserved6 : { (): void; };
    _gReserved7 : { (): void; };
    _gReserved8 : { (): void; };
  }
  
  export class OutputStreamPrivate {
    
  }
  
  export class OutputVector {
    public buffer: any;
    public size: number;
  }
  
  export class PermissionClass {
    public parentClass: GObject.ObjectClass;
    public reserved: any[];
    
    acquire : { (permission: Permission, cancellable: Cancellable): boolean; };
    acquireAsync : { (permission: Permission, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    acquireFinish : { (permission: Permission, result: AsyncResult): boolean; };
    release : { (permission: Permission, cancellable: Cancellable): boolean; };
    releaseAsync : { (permission: Permission, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    releaseFinish : { (permission: Permission, result: AsyncResult): boolean; };
  }
  
  export class PermissionPrivate {
    
  }
  
  export class PollableInputStreamInterface {
    public gIface: GObject.TypeInterface;
    
    canPoll : { (stream: PollableInputStream): boolean; };
    isReadable : { (stream: PollableInputStream): boolean; };
    createSource : { (stream: PollableInputStream, cancellable: Cancellable): GLib.Source; };
    readNonblocking : { (stream: PollableInputStream, buffer: number[], count: number): number; };
  }
  
  export class PollableOutputStreamInterface {
    public gIface: GObject.TypeInterface;
    
    canPoll : { (stream: PollableOutputStream): boolean; };
    isWritable : { (stream: PollableOutputStream): boolean; };
    createSource : { (stream: PollableOutputStream, cancellable: Cancellable): GLib.Source; };
    writeNonblocking : { (stream: PollableOutputStream, buffer: number[], count: number): number; };
  }
  
  export class ProxyAddressClass {
    public parentClass: InetSocketAddressClass;
  }
  
  export class ProxyAddressEnumeratorClass {
    public parentClass: SocketAddressEnumeratorClass;
    
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
    _gReserved6 : { (): void; };
    _gReserved7 : { (): void; };
  }
  
  export class ProxyAddressEnumeratorPrivate {
    
  }
  
  export class ProxyAddressPrivate {
    
  }
  
  export class ProxyInterface {
    public gIface: GObject.TypeInterface;
    
    connect : { (proxy: Proxy, connection: IOStream, proxyAddress: ProxyAddress, cancellable: Cancellable): IOStream; };
    connectAsync : { (proxy: Proxy, connection: IOStream, proxyAddress: ProxyAddress, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    connectFinish : { (proxy: Proxy, result: AsyncResult): IOStream; };
    supportsHostname : { (proxy: Proxy): boolean; };
  }
  
  export class ProxyResolverInterface {
    public gIface: GObject.TypeInterface;
    
    isSupported : { (resolver: ProxyResolver): boolean; };
    lookup : { (resolver: ProxyResolver, uri: string, cancellable: Cancellable): string[]; };
    lookupAsync : { (resolver: ProxyResolver, uri: string, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    lookupFinish : { (resolver: ProxyResolver, result: AsyncResult): string[]; };
  }
  
  export class RemoteActionGroupInterface {
    public gIface: GObject.TypeInterface;
    
    activateActionFull : { (remote: RemoteActionGroup, actionName: string, parameter: GLib.Variant, platformData: GLib.Variant): void; };
    changeActionStateFull : { (remote: RemoteActionGroup, actionName: string, value: GLib.Variant, platformData: GLib.Variant): void; };
  }
  
  export class ResolverClass {
    public parentClass: GObject.ObjectClass;
    
    reload : { (resolver: Resolver): void; };
    lookupByName : { (resolver: Resolver, hostname: string, cancellable: Cancellable): GLib.List; };
    lookupByNameAsync : { (resolver: Resolver, hostname: string, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    lookupByNameFinish : { (resolver: Resolver, result: AsyncResult): GLib.List; };
    lookupByAddress : { (resolver: Resolver, address: InetAddress, cancellable: Cancellable): string; };
    lookupByAddressAsync : { (resolver: Resolver, address: InetAddress, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    lookupByAddressFinish : { (resolver: Resolver, result: AsyncResult): string; };
    lookupService : { (resolver: Resolver, rrname: string, cancellable: Cancellable): GLib.List; };
    lookupServiceAsync : { (resolver: Resolver, rrname: string, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    lookupServiceFinish : { (resolver: Resolver, result: AsyncResult): GLib.List; };
    lookupRecords : { (resolver: Resolver, rrname: string, recordType: ResolverRecordType, cancellable: Cancellable): GLib.List; };
    lookupRecordsAsync : { (resolver: Resolver, rrname: string, recordType: ResolverRecordType, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    lookupRecordsFinish : { (resolver: Resolver, result: AsyncResult): GLib.List; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
    _gReserved6 : { (): void; };
  }
  
  export class ResolverPrivate {
    
  }
  
  export class Resource {
    public _register(): void;
    public _unregister(): void;
    public enumerateChildren(path: string, lookupFlags: ResourceLookupFlags): string[];
    public getInfo(path: string, lookupFlags: ResourceLookupFlags, size: number, flags: number): boolean;
    public lookupData(path: string, lookupFlags: ResourceLookupFlags): GLib.Bytes;
    public openStream(path: string, lookupFlags: ResourceLookupFlags): InputStream;
    public ref(): Resource;
    public unref(): void;
  }
  
  export class SeekableIface {
    public gIface: GObject.TypeInterface;
    
    tell : { (seekable: Seekable): number; };
    canSeek : { (seekable: Seekable): boolean; };
    seek : { (seekable: Seekable, offset: number, type: GLib.SeekType, cancellable: Cancellable): boolean; };
    canTruncate : { (seekable: Seekable): boolean; };
    truncateFn : { (seekable: Seekable, offset: number, cancellable: Cancellable): boolean; };
  }
  
  export class SettingsBackendClass {
    public parentClass: GObject.ObjectClass;
    public padding: any[];
    
    read : { (backend: SettingsBackend, key: string, expectedType: GLib.VariantType, defaultValue: boolean): GLib.Variant; };
    getWritable : { (backend: SettingsBackend, key: string): boolean; };
    write : { (backend: SettingsBackend, key: string, value: GLib.Variant, originTag: any): boolean; };
    writeTree : { (backend: SettingsBackend, tree: GLib.Tree, originTag: any): boolean; };
    reset : { (backend: SettingsBackend, key: string, originTag: any): void; };
    subscribe : { (backend: SettingsBackend, name: string): void; };
    unsubscribe : { (backend: SettingsBackend, name: string): void; };
    sync : { (backend: SettingsBackend): void; };
    getPermission : { (backend: SettingsBackend, path: string): Permission; };
    readUserValue : { (backend: SettingsBackend, key: string, expectedType: GLib.VariantType): GLib.Variant; };
  }
  
  export class SettingsBackendPrivate {
    
  }
  
  export class SettingsClass {
    public parentClass: GObject.ObjectClass;
    public padding: any[];
    
    writableChanged : { (settings: Settings, key: string): void; };
    changed : { (settings: Settings, key: string): void; };
    writableChangeEvent : { (settings: Settings, key: GLib.Quark): boolean; };
    changeEvent : { (settings: Settings, keys: GLib.Quark, nKeys: number): boolean; };
  }
  
  export class SettingsPrivate {
    
  }
  
  export class SettingsSchema {
    public getId(): string;
    public getKey(name: string): SettingsSchemaKey;
    public getPath(): string;
    public hasKey(name: string): boolean;
    public listChildren(): string[];
    public listKeys(): string[];
    public ref(): SettingsSchema;
    public unref(): void;
  }
  
  export class SettingsSchemaKey {
    public getDefaultValue(): GLib.Variant;
    public getDescription(): string;
    public getName(): string;
    public getRange(): GLib.Variant;
    public getSummary(): string;
    public getValueType(): GLib.VariantType;
    public rangeCheck(value: GLib.Variant): boolean;
    public ref(): SettingsSchemaKey;
    public unref(): void;
  }
  
  export class SettingsSchemaSource {
    public listSchemas(recursive: boolean, nonRelocatable: string[], relocatable: string[]): void;
    public lookup(schemaId: string, recursive: boolean): SettingsSchema;
    public ref(): SettingsSchemaSource;
    public unref(): void;
  }
  
  export class SimpleActionGroupClass {
    public parentClass: GObject.ObjectClass;
    public padding: any[];
  }
  
  export class SimpleActionGroupPrivate {
    
  }
  
  export class SimpleAsyncResultClass {
    
  }
  
  export class SimpleProxyResolverClass {
    public parentClass: GObject.ObjectClass;
    
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
  }
  
  export class SimpleProxyResolverPrivate {
    
  }
  
  export class SocketAddressClass {
    public parentClass: GObject.ObjectClass;
    
    getFamily : { (address: SocketAddress): SocketFamily; };
    getNativeSize : { (address: SocketAddress): number; };
    toNative : { (address: SocketAddress, dest: any, destlen: number): boolean; };
  }
  
  export class SocketAddressEnumeratorClass {
    public parentClass: GObject.ObjectClass;
    
    next : { (enumerator: SocketAddressEnumerator, cancellable: Cancellable): SocketAddress; };
    nextAsync : { (enumerator: SocketAddressEnumerator, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    nextFinish : { (enumerator: SocketAddressEnumerator, result: AsyncResult): SocketAddress; };
  }
  
  export class SocketClass {
    public parentClass: GObject.ObjectClass;
    
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
    _gReserved6 : { (): void; };
    _gReserved7 : { (): void; };
    _gReserved8 : { (): void; };
    _gReserved9 : { (): void; };
    _gReserved10 : { (): void; };
  }
  
  export class SocketClientClass {
    public parentClass: GObject.ObjectClass;
    
    event : { (client: SocketClient, event: SocketClientEvent, connectable: SocketConnectable, connection: IOStream): void; };
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
  }
  
  export class SocketClientPrivate {
    
  }
  
  export class SocketConnectableIface {
    public gIface: GObject.TypeInterface;
    
    enumerate : { (connectable: SocketConnectable): SocketAddressEnumerator; };
    proxyEnumerate : { (connectable: SocketConnectable): SocketAddressEnumerator; };
    toString : { (connectable: SocketConnectable): string; };
  }
  
  export class SocketConnectionClass {
    public parentClass: IOStreamClass;
    
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
    _gReserved6 : { (): void; };
  }
  
  export class SocketConnectionPrivate {
    
  }
  
  export class SocketControlMessageClass {
    public parentClass: GObject.ObjectClass;
    
    getSize : { (message: SocketControlMessage): number; };
    getLevel : { (message: SocketControlMessage): number; };
    getType : { (message: SocketControlMessage): number; };
    serialize : { (message: SocketControlMessage, data: any): void; };
    deserialize : { (level: number, type: number, size: number, data: any): SocketControlMessage; };
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
  }
  
  export class SocketControlMessagePrivate {
    
  }
  
  export class SocketListenerClass {
    public parentClass: GObject.ObjectClass;
    
    changed : { (listener: SocketListener): void; };
    event : { (listener: SocketListener, event: SocketListenerEvent, socket: Socket): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
    _gReserved6 : { (): void; };
  }
  
  export class SocketListenerPrivate {
    
  }
  
  export class SocketPrivate {
    
  }
  
  export class SocketServiceClass {
    public parentClass: SocketListenerClass;
    
    incoming : { (service: SocketService, connection: SocketConnection, sourceObject: GObject.Object): boolean; };
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
    _gReserved6 : { (): void; };
  }
  
  export class SocketServicePrivate {
    
  }
  
  export class SrvTarget {
    public copy(): SrvTarget;
    public free(): void;
    public getHostname(): string;
    public getPort(): number;
    public getPriority(): number;
    public getWeight(): number;
  }
  
  export class StaticResource {
    public data: number;
    public dataLen: number;
    public resource: Resource;
    public next: StaticResource;
    public padding: any;
    
    public fini(): void;
    public getResource(): Resource;
    public init(): void;
  }
  
  export class TaskClass {
    
  }
  
  export class TcpConnectionClass {
    public parentClass: SocketConnectionClass;
  }
  
  export class TcpConnectionPrivate {
    
  }
  
  export class TcpWrapperConnectionClass {
    public parentClass: TcpConnectionClass;
  }
  
  export class TcpWrapperConnectionPrivate {
    
  }
  
  export class ThemedIconClass {
    
  }
  
  export class ThreadedSocketServiceClass {
    public parentClass: SocketServiceClass;
    
    run : { (service: ThreadedSocketService, connection: SocketConnection, sourceObject: GObject.Object): boolean; };
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
  }
  
  export class ThreadedSocketServicePrivate {
    
  }
  
  export class TlsBackendInterface {
    public gIface: GObject.TypeInterface;
    
    supportsTls : { (backend: TlsBackend): boolean; };
    getCertificateType : { (): GObject.Type; };
    getClientConnectionType : { (): GObject.Type; };
    getServerConnectionType : { (): GObject.Type; };
    getFileDatabaseType : { (): GObject.Type; };
    getDefaultDatabase : { (backend: TlsBackend): TlsDatabase; };
    supportsDtls : { (backend: TlsBackend): boolean; };
    getDtlsClientConnectionType : { (): GObject.Type; };
    getDtlsServerConnectionType : { (): GObject.Type; };
  }
  
  export class TlsCertificateClass {
    public parentClass: GObject.ObjectClass;
    public padding: any[];
    
    verify : { (cert: TlsCertificate, identity: SocketConnectable, trustedCa: TlsCertificate): TlsCertificateFlags; };
  }
  
  export class TlsCertificatePrivate {
    
  }
  
  export class TlsClientConnectionInterface {
    public gIface: GObject.TypeInterface;
    
    copySessionState : { (conn: TlsClientConnection, source: TlsClientConnection): void; };
  }
  
  export class TlsConnectionClass {
    public parentClass: IOStreamClass;
    public padding: any[];
    
    acceptCertificate : { (connection: TlsConnection, peerCert: TlsCertificate, errors: TlsCertificateFlags): boolean; };
    handshake : { (conn: TlsConnection, cancellable: Cancellable): boolean; };
    handshakeAsync : { (conn: TlsConnection, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    handshakeFinish : { (conn: TlsConnection, result: AsyncResult): boolean; };
  }
  
  export class TlsConnectionPrivate {
    
  }
  
  export class TlsDatabaseClass {
    public parentClass: GObject.ObjectClass;
    public padding: any[];
    
    verifyChain : { (self: TlsDatabase, chain: TlsCertificate, purpose: string, identity: SocketConnectable, interaction: TlsInteraction, flags: TlsDatabaseVerifyFlags, cancellable: Cancellable): TlsCertificateFlags; };
    verifyChainAsync : { (self: TlsDatabase, chain: TlsCertificate, purpose: string, identity: SocketConnectable, interaction: TlsInteraction, flags: TlsDatabaseVerifyFlags, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    verifyChainFinish : { (self: TlsDatabase, result: AsyncResult): TlsCertificateFlags; };
    createCertificateHandle : { (self: TlsDatabase, certificate: TlsCertificate): string; };
    lookupCertificateForHandle : { (self: TlsDatabase, handle: string, interaction: TlsInteraction, flags: TlsDatabaseLookupFlags, cancellable: Cancellable): TlsCertificate; };
    lookupCertificateForHandleAsync : { (self: TlsDatabase, handle: string, interaction: TlsInteraction, flags: TlsDatabaseLookupFlags, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    lookupCertificateForHandleFinish : { (self: TlsDatabase, result: AsyncResult): TlsCertificate; };
    lookupCertificateIssuer : { (self: TlsDatabase, certificate: TlsCertificate, interaction: TlsInteraction, flags: TlsDatabaseLookupFlags, cancellable: Cancellable): TlsCertificate; };
    lookupCertificateIssuerAsync : { (self: TlsDatabase, certificate: TlsCertificate, interaction: TlsInteraction, flags: TlsDatabaseLookupFlags, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    lookupCertificateIssuerFinish : { (self: TlsDatabase, result: AsyncResult): TlsCertificate; };
    lookupCertificatesIssuedBy : { (self: TlsDatabase, issuerRawDn: number[], interaction: TlsInteraction, flags: TlsDatabaseLookupFlags, cancellable: Cancellable): GLib.List; };
    lookupCertificatesIssuedByAsync : { (self: TlsDatabase, issuerRawDn: number[], interaction: TlsInteraction, flags: TlsDatabaseLookupFlags, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    lookupCertificatesIssuedByFinish : { (self: TlsDatabase, result: AsyncResult): GLib.List; };
  }
  
  export class TlsDatabasePrivate {
    
  }
  
  export class TlsFileDatabaseInterface {
    public gIface: GObject.TypeInterface;
    public padding: any[];
  }
  
  export class TlsInteractionClass {
    public parentClass: GObject.ObjectClass;
    public padding: any[];
    
    askPassword : { (interaction: TlsInteraction, password: TlsPassword, cancellable: Cancellable): TlsInteractionResult; };
    askPasswordAsync : { (interaction: TlsInteraction, password: TlsPassword, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    askPasswordFinish : { (interaction: TlsInteraction, result: AsyncResult): TlsInteractionResult; };
    requestCertificate : { (interaction: TlsInteraction, connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable: Cancellable): TlsInteractionResult; };
    requestCertificateAsync : { (interaction: TlsInteraction, connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    requestCertificateFinish : { (interaction: TlsInteraction, result: AsyncResult): TlsInteractionResult; };
  }
  
  export class TlsInteractionPrivate {
    
  }
  
  export class TlsPasswordClass {
    public parentClass: GObject.ObjectClass;
    public padding: any[];
    
    getValue : { (password: TlsPassword, length: number): number; };
    setValue : { (password: TlsPassword, value: number, length: number, destroy: GLib.DestroyNotify): void; };
    getDefaultWarning : { (password: TlsPassword): string; };
  }
  
  export class TlsPasswordPrivate {
    
  }
  
  export class TlsServerConnectionInterface {
    public gIface: GObject.TypeInterface;
  }
  
  export class UnixConnectionClass {
    public parentClass: SocketConnectionClass;
  }
  
  export class UnixConnectionPrivate {
    
  }
  
  export class UnixCredentialsMessageClass {
    public parentClass: SocketControlMessageClass;
    
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
  }
  
  export class UnixCredentialsMessagePrivate {
    
  }
  
  export class UnixFDListClass {
    public parentClass: GObject.ObjectClass;
    
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
  }
  
  export class UnixFDListPrivate {
    
  }
  
  export class UnixFDMessageClass {
    public parentClass: SocketControlMessageClass;
    
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
  }
  
  export class UnixFDMessagePrivate {
    
  }
  
  export class UnixInputStreamClass {
    public parentClass: InputStreamClass;
    
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
  }
  
  export class UnixInputStreamPrivate {
    
  }
  
  export class UnixMountEntry {
    
  }
  
  export class UnixMountMonitorClass {
    
  }
  
  export class UnixMountPoint {
    public compare(mount2: UnixMountPoint): number;
    public free(): void;
    public getDevicePath(): string;
    public getFsType(): string;
    public getMountPath(): string;
    public getOptions(): string;
    public guessCanEject(): boolean;
    public guessIcon(): Icon;
    public guessName(): string;
    public guessSymbolicIcon(): Icon;
    public isLoopback(): boolean;
    public isReadonly(): boolean;
    public isUserMountable(): boolean;
  }
  
  export class UnixOutputStreamClass {
    public parentClass: OutputStreamClass;
    
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
  }
  
  export class UnixOutputStreamPrivate {
    
  }
  
  export class UnixSocketAddressClass {
    public parentClass: SocketAddressClass;
  }
  
  export class UnixSocketAddressPrivate {
    
  }
  
  export class VfsClass {
    public parentClass: GObject.ObjectClass;
    
    isActive : { (vfs: Vfs): boolean; };
    getFileForPath : { (vfs: Vfs, path: string): File; };
    getFileForUri : { (vfs: Vfs, uri: string): File; };
    getSupportedUriSchemes : { (vfs: Vfs): string[]; };
    parseName : { (vfs: Vfs, parseName: string): File; };
    localFileAddInfo : { (vfs: Vfs, filename: string, device: number, attributeMatcher: FileAttributeMatcher, info: FileInfo, cancellable: Cancellable, extraData: any, freeExtraData: GLib.DestroyNotify): void; };
    addWritableNamespaces : { (vfs: Vfs, list: FileAttributeInfoList): void; };
    localFileSetAttributes : { (vfs: Vfs, filename: string, info: FileInfo, flags: FileQueryInfoFlags, cancellable: Cancellable): boolean; };
    localFileRemoved : { (vfs: Vfs, filename: string): void; };
    localFileMoved : { (vfs: Vfs, source: string, dest: string): void; };
    deserializeIcon : { (vfs: Vfs, value: GLib.Variant): Icon; };
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
    _gReserved6 : { (): void; };
  }
  
  export class VolumeIface {
    public gIface: GObject.TypeInterface;
    
    changed : { (volume: Volume): void; };
    removed : { (volume: Volume): void; };
    getName : { (volume: Volume): string; };
    getIcon : { (volume: Volume): Icon; };
    getUuid : { (volume: Volume): string; };
    getDrive : { (volume: Volume): Drive; };
    getMount : { (volume: Volume): Mount; };
    canMount : { (volume: Volume): boolean; };
    canEject : { (volume: Volume): boolean; };
    mountFn : { (volume: Volume, flags: MountMountFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    mountFinish : { (volume: Volume, result: AsyncResult): boolean; };
    eject : { (volume: Volume, flags: MountUnmountFlags, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    ejectFinish : { (volume: Volume, result: AsyncResult): boolean; };
    getIdentifier : { (volume: Volume, kind: string): string; };
    enumerateIdentifiers : { (volume: Volume): string[]; };
    shouldAutomount : { (volume: Volume): boolean; };
    getActivationRoot : { (volume: Volume): File; };
    ejectWithOperation : { (volume: Volume, flags: MountUnmountFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void; };
    ejectWithOperationFinish : { (volume: Volume, result: AsyncResult): boolean; };
    getSortKey : { (volume: Volume): string; };
    getSymbolicIcon : { (volume: Volume): Icon; };
  }
  
  export class VolumeMonitorClass {
    public parentClass: GObject.ObjectClass;
    
    volumeAdded : { (volumeMonitor: VolumeMonitor, volume: Volume): void; };
    volumeRemoved : { (volumeMonitor: VolumeMonitor, volume: Volume): void; };
    volumeChanged : { (volumeMonitor: VolumeMonitor, volume: Volume): void; };
    mountAdded : { (volumeMonitor: VolumeMonitor, mount: Mount): void; };
    mountRemoved : { (volumeMonitor: VolumeMonitor, mount: Mount): void; };
    mountPreUnmount : { (volumeMonitor: VolumeMonitor, mount: Mount): void; };
    mountChanged : { (volumeMonitor: VolumeMonitor, mount: Mount): void; };
    driveConnected : { (volumeMonitor: VolumeMonitor, drive: Drive): void; };
    driveDisconnected : { (volumeMonitor: VolumeMonitor, drive: Drive): void; };
    driveChanged : { (volumeMonitor: VolumeMonitor, drive: Drive): void; };
    isSupported : { (): boolean; };
    getConnectedDrives : { (volumeMonitor: VolumeMonitor): GLib.List; };
    getVolumes : { (volumeMonitor: VolumeMonitor): GLib.List; };
    getMounts : { (volumeMonitor: VolumeMonitor): GLib.List; };
    getVolumeForUuid : { (volumeMonitor: VolumeMonitor, uuid: string): Volume; };
    getMountForUuid : { (volumeMonitor: VolumeMonitor, uuid: string): Mount; };
    adoptOrphanMount : { (mount: Mount, volumeMonitor: VolumeMonitor): Volume; };
    driveEjectButton : { (volumeMonitor: VolumeMonitor, drive: Drive): void; };
    driveStopButton : { (volumeMonitor: VolumeMonitor, drive: Drive): void; };
    _gReserved1 : { (): void; };
    _gReserved2 : { (): void; };
    _gReserved3 : { (): void; };
    _gReserved4 : { (): void; };
    _gReserved5 : { (): void; };
    _gReserved6 : { (): void; };
  }
  
  export class ZlibCompressorClass {
    public parentClass: GObject.ObjectClass;
  }
  
  export class ZlibDecompressorClass {
    public parentClass: GObject.ObjectClass;
  }
  
  export interface Action {
    activate(parameter: GLib.Variant): void;
    changeState(value: GLib.Variant): void;
    getEnabled(): boolean;
    getName(): string;
    getParameterType(): GLib.VariantType;
    getState(): GLib.Variant;
    getStateHint(): GLib.Variant;
    getStateType(): GLib.VariantType;
    
    static nameIsValid(actionName: string): boolean;
    static parseDetailedName(detailedName: string, actionName: string, targetValue: GLib.Variant): boolean;
    static printDetailedName(actionName: string, targetValue: GLib.Variant): string;
  }
  
  export interface ActionGroup {
    actionAdded(actionName: string): void;
    actionEnabledChanged(actionName: string, enabled: boolean): void;
    actionRemoved(actionName: string): void;
    actionStateChanged(actionName: string, state: GLib.Variant): void;
    activateAction(actionName: string, parameter: GLib.Variant): void;
    changeActionState(actionName: string, value: GLib.Variant): void;
    getActionEnabled(actionName: string): boolean;
    getActionParameterType(actionName: string): GLib.VariantType;
    getActionState(actionName: string): GLib.Variant;
    getActionStateHint(actionName: string): GLib.Variant;
    getActionStateType(actionName: string): GLib.VariantType;
    hasAction(actionName: string): boolean;
    listActions(): string[];
    queryAction(actionName: string, enabled: boolean, parameterType: GLib.VariantType, stateType: GLib.VariantType, stateHint: GLib.Variant, state: GLib.Variant): boolean;
  }
  
  export interface ActionMap {
    addAction(action: Action): void;
    addActionEntries(entries: ActionEntry[], nEntries: number, userData: any): void;
    lookupAction(actionName: string): Action;
    removeAction(actionName: string): void;
  }
  
  export interface AppInfo {
    addSupportsType(contentType: string): boolean;
    canDelete(): boolean;
    canRemoveSupportsType(): boolean;
    delete(): boolean;
    dup(): AppInfo;
    equal(appinfo2: AppInfo): boolean;
    getCommandline(): string;
    getDescription(): string;
    getDisplayName(): string;
    getExecutable(): string;
    getIcon(): Icon;
    getId(): string;
    getName(): string;
    getSupportedTypes(): string[];
    launch(files: GLib.List, launchContext: AppLaunchContext): boolean;
    launchUris(uris: GLib.List, launchContext: AppLaunchContext): boolean;
    removeSupportsType(contentType: string): boolean;
    setAsDefaultForExtension(extension: string): boolean;
    setAsDefaultForType(contentType: string): boolean;
    setAsLastUsedForType(contentType: string): boolean;
    shouldShow(): boolean;
    supportsFiles(): boolean;
    supportsUris(): boolean;
    doDelete(): boolean;
    
    static createFromCommandline(commandline: string, applicationName: string, flags: AppInfoCreateFlags): AppInfo;
    static getAll(): GLib.List;
    static getAllForType(contentType: string): GLib.List;
    static getDefaultForType(contentType: string, mustSupportUris: boolean): AppInfo;
    static getDefaultForUriScheme(uriScheme: string): AppInfo;
    static getFallbackForType(contentType: string): GLib.List;
    static getRecommendedForType(contentType: string): GLib.List;
    static launchDefaultForUri(uri: string, launchContext: AppLaunchContext): boolean;
    static launchDefaultForUriAsync(uri: string, launchContext: AppLaunchContext, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    static launchDefaultForUriFinish(result: AsyncResult): boolean;
    static resetTypeAssociations(contentType: string): void;
  }
  
  export interface AsyncInitable {
    initAsync(ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    initFinish(res: AsyncResult): boolean;
    newFinish(res: AsyncResult): GObject.Object;
    
    static newAsync(objectType: GObject.Type, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any, firstPropertyName: string, ...params: any[]): void;
    static newValistAsync(objectType: GObject.Type, firstPropertyName: string, varArgs: any[], ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
  }
  
  export interface AsyncResult {
    getSourceObject(): GObject.Object;
    getUserData(): any;
    isTagged(sourceTag: any): boolean;
    legacyPropagateError(): boolean;
  }
  
  export interface Converter {
    convert(inbuf: number[], inbufSize: number, outbuf: number[], outbufSize: number, flags: ConverterFlags, bytesRead: number, bytesWritten: number): ConverterResult;
    reset(): void;
  }
  
  export interface DBusInterface {
    dupObject(): DBusObject;
    getInfo(): DBusInterfaceInfo;
    getObject(): DBusObject;
    setObject(object: DBusObject): void;
  }
  
  export interface DBusObject {
    getInterface(interfaceName: string): DBusInterface;
    getInterfaces(): GLib.List;
    getObjectPath(): string;
    interfaceAdded(interface_: DBusInterface): void;
    interfaceRemoved(interface_: DBusInterface): void;
  }
  
  export interface DBusObjectManager {
    getInterface(objectPath: string, interfaceName: string): DBusInterface;
    getObject(objectPath: string): DBusObject;
    getObjectPath(): string;
    getObjects(): GLib.List;
    interfaceAdded(object: DBusObject, interface_: DBusInterface): void;
    interfaceRemoved(object: DBusObject, interface_: DBusInterface): void;
    objectAdded(object: DBusObject): void;
    objectRemoved(object: DBusObject): void;
  }
  
  export interface DatagramBased {
    conditionCheck(condition: GLib.IOCondition): GLib.IOCondition;
    conditionWait(condition: GLib.IOCondition, timeout: number, cancellable: Cancellable): boolean;
    createSource(condition: GLib.IOCondition, cancellable: Cancellable): GLib.Source;
    receiveMessages(messages: InputMessage[], numMessages: number, flags: number, timeout: number, cancellable: Cancellable): number;
    sendMessages(messages: OutputMessage[], numMessages: number, flags: number, timeout: number, cancellable: Cancellable): number;
  }
  
  export interface DesktopAppInfoLookup {
    getDefaultForUriScheme(uriScheme: string): AppInfo;
  }
  
  export interface Drive {
    canEject(): boolean;
    canPollForMedia(): boolean;
    canStart(): boolean;
    canStartDegraded(): boolean;
    canStop(): boolean;
    eject(flags: MountUnmountFlags, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    ejectFinish(result: AsyncResult): boolean;
    ejectWithOperation(flags: MountUnmountFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    ejectWithOperationFinish(result: AsyncResult): boolean;
    enumerateIdentifiers(): string[];
    getIcon(): Icon;
    getIdentifier(kind: string): string;
    getName(): string;
    getSortKey(): string;
    getStartStopType(): DriveStartStopType;
    getSymbolicIcon(): Icon;
    getVolumes(): GLib.List;
    hasMedia(): boolean;
    hasVolumes(): boolean;
    isMediaCheckAutomatic(): boolean;
    isMediaRemovable(): boolean;
    isRemovable(): boolean;
    pollForMedia(cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    pollForMediaFinish(result: AsyncResult): boolean;
    start(flags: DriveStartFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    startFinish(result: AsyncResult): boolean;
    stop(flags: MountUnmountFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    stopFinish(result: AsyncResult): boolean;
    changed(): void;
    disconnected(): void;
    ejectButton(): void;
    stopButton(): void;
  }
  
  export interface DtlsClientConnection {
    getAcceptedCas(): GLib.List;
    getServerIdentity(): SocketConnectable;
    getValidationFlags(): TlsCertificateFlags;
    setServerIdentity(identity: SocketConnectable): void;
    setValidationFlags(flags: TlsCertificateFlags): void;
    
    static new(baseSocket: DatagramBased, serverIdentity: SocketConnectable): DtlsClientConnection;
  }
  
  export interface DtlsConnection {
    close(cancellable: Cancellable): boolean;
    closeAsync(ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    closeFinish(result: AsyncResult): boolean;
    emitAcceptCertificate(peerCert: TlsCertificate, errors: TlsCertificateFlags): boolean;
    getCertificate(): TlsCertificate;
    getDatabase(): TlsDatabase;
    getInteraction(): TlsInteraction;
    getPeerCertificate(): TlsCertificate;
    getPeerCertificateErrors(): TlsCertificateFlags;
    getRehandshakeMode(): TlsRehandshakeMode;
    getRequireCloseNotify(): boolean;
    handshake(cancellable: Cancellable): boolean;
    handshakeAsync(ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    handshakeFinish(result: AsyncResult): boolean;
    setCertificate(certificate: TlsCertificate): void;
    setDatabase(database: TlsDatabase): void;
    setInteraction(interaction: TlsInteraction): void;
    setRehandshakeMode(mode: TlsRehandshakeMode): void;
    setRequireCloseNotify(requireCloseNotify: boolean): void;
    shutdown(shutdownRead: boolean, shutdownWrite: boolean, cancellable: Cancellable): boolean;
    shutdownAsync(shutdownRead: boolean, shutdownWrite: boolean, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    shutdownFinish(result: AsyncResult): boolean;
    acceptCertificate(peerCert: TlsCertificate, errors: TlsCertificateFlags): boolean;
  }
  
  export interface DtlsServerConnection {
    static new(baseSocket: DatagramBased, certificate: TlsCertificate): DtlsServerConnection;
  }
  
  export interface File {
    appendTo(flags: FileCreateFlags, cancellable: Cancellable): FileOutputStream;
    appendToAsync(flags: FileCreateFlags, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    appendToFinish(res: AsyncResult): FileOutputStream;
    copy(destination: File, flags: FileCopyFlags, cancellable: Cancellable, progressCallback: FileProgressCallback, progressCallbackData: any): boolean;
    copyAsync(destination: File, flags: FileCopyFlags, ioPriority: number, cancellable: Cancellable, progressCallback: FileProgressCallback, progressCallbackData: any, callback: AsyncReadyCallback, userData: any): void;
    copyAttributes(destination: File, flags: FileCopyFlags, cancellable: Cancellable): boolean;
    copyFinish(res: AsyncResult): boolean;
    create(flags: FileCreateFlags, cancellable: Cancellable): FileOutputStream;
    createAsync(flags: FileCreateFlags, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    createFinish(res: AsyncResult): FileOutputStream;
    createReadwrite(flags: FileCreateFlags, cancellable: Cancellable): FileIOStream;
    createReadwriteAsync(flags: FileCreateFlags, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    createReadwriteFinish(res: AsyncResult): FileIOStream;
    delete(cancellable: Cancellable): boolean;
    deleteAsync(ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    deleteFinish(result: AsyncResult): boolean;
    dup(): File;
    ejectMountable(flags: MountUnmountFlags, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    ejectMountableFinish(result: AsyncResult): boolean;
    ejectMountableWithOperation(flags: MountUnmountFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    ejectMountableWithOperationFinish(result: AsyncResult): boolean;
    enumerateChildren(attributes: string, flags: FileQueryInfoFlags, cancellable: Cancellable): FileEnumerator;
    enumerateChildrenAsync(attributes: string, flags: FileQueryInfoFlags, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    enumerateChildrenFinish(res: AsyncResult): FileEnumerator;
    equal(file2: File): boolean;
    findEnclosingMount(cancellable: Cancellable): Mount;
    findEnclosingMountAsync(ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    findEnclosingMountFinish(res: AsyncResult): Mount;
    getBasename(): string;
    getChild(name: string): File;
    getChildForDisplayName(displayName: string): File;
    getParent(): File;
    getParseName(): string;
    getPath(): string;
    getRelativePath(descendant: File): string;
    getUri(): string;
    getUriScheme(): string;
    hasParent(parent: File): boolean;
    hasPrefix(prefix: File): boolean;
    hasUriScheme(uriScheme: string): boolean;
    hash(): number;
    isNative(): boolean;
    loadContents(cancellable: Cancellable, contents: number[], length: number, etagOut: string): boolean;
    loadContentsAsync(cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    loadContentsFinish(res: AsyncResult, contents: number[], length: number, etagOut: string): boolean;
    loadPartialContentsAsync(cancellable: Cancellable, readMoreCallback: FileReadMoreCallback, callback: AsyncReadyCallback, userData: any): void;
    loadPartialContentsFinish(res: AsyncResult, contents: number[], length: number, etagOut: string): boolean;
    makeDirectory(cancellable: Cancellable): boolean;
    makeDirectoryAsync(ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    makeDirectoryFinish(result: AsyncResult): boolean;
    makeDirectoryWithParents(cancellable: Cancellable): boolean;
    makeSymbolicLink(symlinkValue: string, cancellable: Cancellable): boolean;
    measureDiskUsage(flags: FileMeasureFlags, cancellable: Cancellable, progressCallback: FileMeasureProgressCallback, progressData: any, diskUsage: number, numDirs: number, numFiles: number): boolean;
    measureDiskUsageAsync(flags: FileMeasureFlags, ioPriority: number, cancellable: Cancellable, progressCallback: FileMeasureProgressCallback, progressData: any, callback: AsyncReadyCallback, userData: any): void;
    measureDiskUsageFinish(result: AsyncResult, diskUsage: number, numDirs: number, numFiles: number): boolean;
    monitor(flags: FileMonitorFlags, cancellable: Cancellable): FileMonitor;
    monitorDirectory(flags: FileMonitorFlags, cancellable: Cancellable): FileMonitor;
    monitorFile(flags: FileMonitorFlags, cancellable: Cancellable): FileMonitor;
    mountEnclosingVolume(flags: MountMountFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    mountEnclosingVolumeFinish(result: AsyncResult): boolean;
    mountMountable(flags: MountMountFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    mountMountableFinish(result: AsyncResult): File;
    move(destination: File, flags: FileCopyFlags, cancellable: Cancellable, progressCallback: FileProgressCallback, progressCallbackData: any): boolean;
    openReadwrite(cancellable: Cancellable): FileIOStream;
    openReadwriteAsync(ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    openReadwriteFinish(res: AsyncResult): FileIOStream;
    pollMountable(cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    pollMountableFinish(result: AsyncResult): boolean;
    queryDefaultHandler(cancellable: Cancellable): AppInfo;
    queryExists(cancellable: Cancellable): boolean;
    queryFileType(flags: FileQueryInfoFlags, cancellable: Cancellable): FileType;
    queryFilesystemInfo(attributes: string, cancellable: Cancellable): FileInfo;
    queryFilesystemInfoAsync(attributes: string, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    queryFilesystemInfoFinish(res: AsyncResult): FileInfo;
    queryInfo(attributes: string, flags: FileQueryInfoFlags, cancellable: Cancellable): FileInfo;
    queryInfoAsync(attributes: string, flags: FileQueryInfoFlags, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    queryInfoFinish(res: AsyncResult): FileInfo;
    querySettableAttributes(cancellable: Cancellable): FileAttributeInfoList;
    queryWritableNamespaces(cancellable: Cancellable): FileAttributeInfoList;
    read(cancellable: Cancellable): FileInputStream;
    readAsync(ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    readFinish(res: AsyncResult): FileInputStream;
    replace(etag: string, makeBackup: boolean, flags: FileCreateFlags, cancellable: Cancellable): FileOutputStream;
    replaceAsync(etag: string, makeBackup: boolean, flags: FileCreateFlags, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    replaceContents(contents: number[], length: number, etag: string, makeBackup: boolean, flags: FileCreateFlags, newEtag: string, cancellable: Cancellable): boolean;
    replaceContentsAsync(contents: number[], length: number, etag: string, makeBackup: boolean, flags: FileCreateFlags, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    replaceContentsBytesAsync(contents: GLib.Bytes, etag: string, makeBackup: boolean, flags: FileCreateFlags, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    replaceContentsFinish(res: AsyncResult, newEtag: string): boolean;
    replaceFinish(res: AsyncResult): FileOutputStream;
    replaceReadwrite(etag: string, makeBackup: boolean, flags: FileCreateFlags, cancellable: Cancellable): FileIOStream;
    replaceReadwriteAsync(etag: string, makeBackup: boolean, flags: FileCreateFlags, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    replaceReadwriteFinish(res: AsyncResult): FileIOStream;
    resolveRelativePath(relativePath: string): File;
    setAttribute(attribute: string, type: FileAttributeType, valueP: any, flags: FileQueryInfoFlags, cancellable: Cancellable): boolean;
    setAttributeByteString(attribute: string, value: string, flags: FileQueryInfoFlags, cancellable: Cancellable): boolean;
    setAttributeInt32(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable: Cancellable): boolean;
    setAttributeInt64(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable: Cancellable): boolean;
    setAttributeString(attribute: string, value: string, flags: FileQueryInfoFlags, cancellable: Cancellable): boolean;
    setAttributeUint32(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable: Cancellable): boolean;
    setAttributeUint64(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable: Cancellable): boolean;
    setAttributesAsync(info: FileInfo, flags: FileQueryInfoFlags, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    setAttributesFinish(result: AsyncResult, info: FileInfo): boolean;
    setAttributesFromInfo(info: FileInfo, flags: FileQueryInfoFlags, cancellable: Cancellable): boolean;
    setDisplayName(displayName: string, cancellable: Cancellable): File;
    setDisplayNameAsync(displayName: string, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    setDisplayNameFinish(res: AsyncResult): File;
    startMountable(flags: DriveStartFlags, startOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    startMountableFinish(result: AsyncResult): boolean;
    stopMountable(flags: MountUnmountFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    stopMountableFinish(result: AsyncResult): boolean;
    supportsThreadContexts(): boolean;
    trash(cancellable: Cancellable): boolean;
    trashAsync(ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    trashFinish(result: AsyncResult): boolean;
    unmountMountable(flags: MountUnmountFlags, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    unmountMountableFinish(result: AsyncResult): boolean;
    unmountMountableWithOperation(flags: MountUnmountFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    unmountMountableWithOperationFinish(result: AsyncResult): boolean;
    deleteFile(cancellable: Cancellable): boolean;
    deleteFileAsync(ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    deleteFileFinish(result: AsyncResult): boolean;
    monitorDir(flags: FileMonitorFlags, cancellable: Cancellable): FileMonitor;
    prefixMatches(file: File): boolean;
    readFn(cancellable: Cancellable): FileInputStream;
    
    static newForCommandlineArg(arg: string): File;
    static newForCommandlineArgAndCwd(arg: string, cwd: string): File;
    static newForPath(path: string): File;
    static newForUri(uri: string): File;
    static newTmp(tmpl: string, iostream: FileIOStream): File;
    static parseName(parseName: string): File;
  }
  
  export interface FileDescriptorBased {
    getFd(): number;
  }
  
  export interface Icon {
    equal(icon2: Icon): boolean;
    serialize(): GLib.Variant;
    toString(): string;
    hash(): number;
    toTokens(tokens: any[], outVersion: number): boolean;
    
    static deserialize(value: GLib.Variant): Icon;
    static hash(icon: any): number;
    static newForString(str: string): Icon;
  }
  
  export interface Initable {
    init(cancellable: Cancellable): boolean;
    
    static new(objectType: GObject.Type, cancellable: Cancellable, error: GLib.Error, firstPropertyName: string, ...params: any[]): GObject.Object;
    static newValist(objectType: GObject.Type, firstPropertyName: string, varArgs: any[], cancellable: Cancellable): GObject.Object;
    static newv(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter[], cancellable: Cancellable): GObject.Object;
  }
  
  export interface ListModel {
    getItem(position: number): GObject.Object;
    getItemType(): GObject.Type;
    getNItems(): number;
    getObject(position: number): GObject.Object;
    itemsChanged(position: number, removed: number, added: number): void;
  }
  
  export interface LoadableIcon {
    load(size: number, type: string, cancellable: Cancellable): InputStream;
    loadAsync(size: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    loadFinish(res: AsyncResult, type: string): InputStream;
  }
  
  export interface Mount {
    canEject(): boolean;
    canUnmount(): boolean;
    eject(flags: MountUnmountFlags, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    ejectFinish(result: AsyncResult): boolean;
    ejectWithOperation(flags: MountUnmountFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    ejectWithOperationFinish(result: AsyncResult): boolean;
    getDefaultLocation(): File;
    getDrive(): Drive;
    getIcon(): Icon;
    getName(): string;
    getRoot(): File;
    getSortKey(): string;
    getSymbolicIcon(): Icon;
    getUuid(): string;
    getVolume(): Volume;
    guessContentType(forceRescan: boolean, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    guessContentTypeFinish(result: AsyncResult): string[];
    guessContentTypeSync(forceRescan: boolean, cancellable: Cancellable): string[];
    isShadowed(): boolean;
    remount(flags: MountMountFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    remountFinish(result: AsyncResult): boolean;
    shadow(): void;
    unmount(flags: MountUnmountFlags, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    unmountFinish(result: AsyncResult): boolean;
    unmountWithOperation(flags: MountUnmountFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    unmountWithOperationFinish(result: AsyncResult): boolean;
    unshadow(): void;
    changed(): void;
    preUnmount(): void;
    unmounted(): void;
  }
  
  export interface NetworkMonitor {
    canReach(connectable: SocketConnectable, cancellable: Cancellable): boolean;
    canReachAsync(connectable: SocketConnectable, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    canReachFinish(result: AsyncResult): boolean;
    getConnectivity(): NetworkConnectivity;
    getNetworkAvailable(): boolean;
    getNetworkMetered(): boolean;
    networkChanged(available: boolean): void;
    
    static getDefault(): NetworkMonitor;
  }
  
  export interface PollableInputStream {
    canPoll(): boolean;
    createSource(cancellable: Cancellable): GLib.Source;
    isReadable(): boolean;
    readNonblocking(buffer: number[], count: number, cancellable: Cancellable): number;
  }
  
  export interface PollableOutputStream {
    canPoll(): boolean;
    createSource(cancellable: Cancellable): GLib.Source;
    isWritable(): boolean;
    writeNonblocking(buffer: number[], count: number, cancellable: Cancellable): number;
  }
  
  export interface Proxy {
    connect(connection: IOStream, proxyAddress: ProxyAddress, cancellable: Cancellable): IOStream;
    connectAsync(connection: IOStream, proxyAddress: ProxyAddress, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    connectFinish(result: AsyncResult): IOStream;
    supportsHostname(): boolean;
    
    static getDefaultForProtocol(protocol: string): Proxy;
  }
  
  export interface ProxyResolver {
    isSupported(): boolean;
    lookup(uri: string, cancellable: Cancellable): string[];
    lookupAsync(uri: string, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    lookupFinish(result: AsyncResult): string[];
    
    static getDefault(): ProxyResolver;
  }
  
  export interface RemoteActionGroup {
    activateActionFull(actionName: string, parameter: GLib.Variant, platformData: GLib.Variant): void;
    changeActionStateFull(actionName: string, value: GLib.Variant, platformData: GLib.Variant): void;
  }
  
  export interface Seekable {
    canSeek(): boolean;
    canTruncate(): boolean;
    seek(offset: number, type: GLib.SeekType, cancellable: Cancellable): boolean;
    tell(): number;
    truncate(offset: number, cancellable: Cancellable): boolean;
    truncateFn(offset: number, cancellable: Cancellable): boolean;
  }
  
  export interface SocketConnectable {
    enumerate(): SocketAddressEnumerator;
    proxyEnumerate(): SocketAddressEnumerator;
    toString(): string;
  }
  
  export interface TlsBackend {
    getCertificateType(): GObject.Type;
    getClientConnectionType(): GObject.Type;
    getDefaultDatabase(): TlsDatabase;
    getDtlsClientConnectionType(): GObject.Type;
    getDtlsServerConnectionType(): GObject.Type;
    getFileDatabaseType(): GObject.Type;
    getServerConnectionType(): GObject.Type;
    supportsDtls(): boolean;
    supportsTls(): boolean;
    
    static getDefault(): TlsBackend;
  }
  
  export interface TlsClientConnection {
    copySessionState(source: TlsClientConnection): void;
    getAcceptedCas(): GLib.List;
    getServerIdentity(): SocketConnectable;
    getUseSsl3(): boolean;
    getValidationFlags(): TlsCertificateFlags;
    setServerIdentity(identity: SocketConnectable): void;
    setUseSsl3(useSsl3: boolean): void;
    setValidationFlags(flags: TlsCertificateFlags): void;
    
    static new(baseIoStream: IOStream, serverIdentity: SocketConnectable): TlsClientConnection;
  }
  
  export interface TlsFileDatabase {
    static new(anchors: string): TlsFileDatabase;
  }
  
  export interface TlsServerConnection {
    static new(baseIoStream: IOStream, certificate: TlsCertificate): TlsServerConnection;
  }
  
  export interface Volume {
    canEject(): boolean;
    canMount(): boolean;
    eject(flags: MountUnmountFlags, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    ejectFinish(result: AsyncResult): boolean;
    ejectWithOperation(flags: MountUnmountFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    ejectWithOperationFinish(result: AsyncResult): boolean;
    enumerateIdentifiers(): string[];
    getActivationRoot(): File;
    getDrive(): Drive;
    getIcon(): Icon;
    getIdentifier(kind: string): string;
    getMount(): Mount;
    getName(): string;
    getSortKey(): string;
    getSymbolicIcon(): Icon;
    getUuid(): string;
    mount(flags: MountMountFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    mountFinish(result: AsyncResult): boolean;
    shouldAutomount(): boolean;
    changed(): void;
    mountFn(flags: MountMountFlags, mountOperation: MountOperation, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    removed(): void;
  }
  
  export class AppInfoMonitor extends GObject.Object {
    constructor(props?: AppInfoMonitorProps);
    
    public static get(): AppInfoMonitor;
  }
  
  interface AppInfoMonitorProps extends GObject.ObjectProps {
    
  }
  
  export class AppLaunchContext extends GObject.Object {
    constructor(props?: AppLaunchContextProps);
    
    public getDisplay(info: AppInfo, files: GLib.List): string;
    public getEnvironment(): string[];
    public getStartupNotifyId(info: AppInfo, files: GLib.List): string;
    public launchFailed(startupNotifyId: string): void;
    public setenv(variable: string, value: string): void;
    public unsetenv(variable: string): void;
    public launched(info: AppInfo, platformData: GLib.Variant): void;
  }
  
  interface AppLaunchContextProps extends GObject.ObjectProps {
    
  }
  
  export class Application extends GObject.Object implements ActionGroup, ActionMap {
    constructor(props?: ApplicationProps);
    
    actionGroup: ActionGroup;
    applicationId: string;
    flags: ApplicationFlags;
    inactivityTimeout: number;
    isBusy: boolean;
    isRegistered: boolean;
    isRemote: boolean;
    resourceBasePath: string;
    
    public activate(): void;
    public addMainOption(longName: string, shortName: string, flags: GLib.OptionFlags, arg: GLib.OptionArg, description: string, argDescription: string): void;
    public addMainOptionEntries(entries: GLib.OptionEntry[]): void;
    public addOptionGroup(group: GLib.OptionGroup): void;
    public bindBusyProperty(object: GObject.Object, property: string): void;
    public getApplicationId(): string;
    public getDbusConnection(): DBusConnection;
    public getDbusObjectPath(): string;
    public getFlags(): ApplicationFlags;
    public getInactivityTimeout(): number;
    public getIsBusy(): boolean;
    public getIsRegistered(): boolean;
    public getIsRemote(): boolean;
    public getResourceBasePath(): string;
    public hold(): void;
    public markBusy(): void;
    public open(files: File[], nFiles: number, hint: string): void;
    public quit(): void;
    public register(cancellable: Cancellable): boolean;
    public release(): void;
    public run(argc: number, argv: string[]): number;
    public sendNotification(_id: string, notification: Notification): void;
    public setActionGroup(actionGroup: ActionGroup): void;
    public setApplicationId(applicationId: string): void;
    public setDefault(): void;
    public setFlags(flags: ApplicationFlags): void;
    public setInactivityTimeout(inactivityTimeout: number): void;
    public setResourceBasePath(resourcePath: string): void;
    public unbindBusyProperty(object: GObject.Object, property: string): void;
    public unmarkBusy(): void;
    public withdrawNotification(_id: string): void;
    public addPlatformData(builder: GLib.VariantBuilder): void;
    public afterEmit(platformData: GLib.Variant): void;
    public beforeEmit(platformData: GLib.Variant): void;
    public commandLine(commandLine: ApplicationCommandLine): number;
    public dbusRegister(connection: DBusConnection, objectPath: string): boolean;
    public dbusUnregister(connection: DBusConnection, objectPath: string): void;
    public handleLocalOptions(options: GLib.VariantDict): number;
    public localCommandLine(_arguments: string[], exitStatus: number): boolean;
    public quitMainloop(): void;
    public runMainloop(): void;
    public shutdown(): void;
    public startup(): void;
    
    public static getDefault(): Application;
    public static idIsValid(applicationId: string): boolean;
  }
  
  interface ApplicationProps extends GObject.ObjectProps, ActionGroupProps, ActionMapProps {
    actionGroup: ActionGroup;
    applicationId: string;
    flags: ApplicationFlags;
    inactivityTimeout: number;
    isBusy: boolean;
    isRegistered: boolean;
    isRemote: boolean;
    resourceBasePath: string;
  }
  
  export class ApplicationCommandLine extends GObject.Object {
    constructor(props?: ApplicationCommandLineProps);
    
    arguments: GLib.Variant;
    isRemote: boolean;
    options: GLib.Variant;
    platformData: GLib.Variant;
    
    public createFileForArg(arg: string): File;
    public getArguments(argc: number): string[];
    public getCwd(): string;
    public getEnviron(): string[];
    public getExitStatus(): number;
    public getIsRemote(): boolean;
    public getOptionsDict(): GLib.VariantDict;
    public getPlatformData(): GLib.Variant;
    public getStdin(): InputStream;
    public getenv(name: string): string;
    public print(format: string, ...params: any[]): void;
    public printerr(format: string, ...params: any[]): void;
    public setExitStatus(exitStatus: number): void;
    public printLiteral(message: string): void;
    public printerrLiteral(message: string): void;
  }
  
  interface ApplicationCommandLineProps extends GObject.ObjectProps {
    arguments: GLib.Variant;
    isRemote: boolean;
    options: GLib.Variant;
    platformData: GLib.Variant;
  }
  
  export class BufferedInputStream extends FilterInputStream implements Seekable {
    constructor(props?: BufferedInputStreamProps);
    
    bufferSize: number;
    
    public fill(count: number, cancellable: Cancellable): number;
    public fillAsync(count: number, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public fillFinish(result: AsyncResult): number;
    public getAvailable(): number;
    public getBufferSize(): number;
    public peek(buffer: number[], offset: number, count: number): number;
    public peekBuffer(count: number): number[];
    public readByte(cancellable: Cancellable): number;
    public setBufferSize(size: number): void;
  }
  
  interface BufferedInputStreamProps extends FilterInputStreamProps, SeekableProps {
    bufferSize: number;
  }
  
  export class BufferedOutputStream extends FilterOutputStream implements Seekable {
    constructor(props?: BufferedOutputStreamProps);
    
    autoGrow: boolean;
    bufferSize: number;
    
    public getAutoGrow(): boolean;
    public getBufferSize(): number;
    public setAutoGrow(autoGrow: boolean): void;
    public setBufferSize(size: number): void;
  }
  
  interface BufferedOutputStreamProps extends FilterOutputStreamProps, SeekableProps {
    autoGrow: boolean;
    bufferSize: number;
  }
  
  export class BytesIcon extends GObject.Object implements Icon, LoadableIcon {
    constructor(props?: BytesIconProps);
    
    bytes: GLib.Bytes;
    
    public getBytes(): GLib.Bytes;
  }
  
  interface BytesIconProps extends GObject.ObjectProps, IconProps, LoadableIconProps {
    bytes: GLib.Bytes;
  }
  
  export class Cancellable extends GObject.Object {
    constructor(props?: CancellableProps);
    
    public cancel(): void;
    public connect(callback: GObject.Callback, data: any, dataDestroyFunc: GLib.DestroyNotify): number;
    public disconnect(handlerId: number): void;
    public getFd(): number;
    public isCancelled(): boolean;
    public makePollfd(pollfd: GLib.PollFD): boolean;
    public popCurrent(): void;
    public pushCurrent(): void;
    public releaseFd(): void;
    public reset(): void;
    public setErrorIfCancelled(): boolean;
    public sourceNew(): GLib.Source;
    public cancelled(): void;
    
    public static getCurrent(): Cancellable;
  }
  
  interface CancellableProps extends GObject.ObjectProps {
    
  }
  
  export class CharsetConverter extends GObject.Object implements Converter, Initable {
    constructor(props?: CharsetConverterProps);
    
    fromCharset: string;
    toCharset: string;
    useFallback: boolean;
    
    public getNumFallbacks(): number;
    public getUseFallback(): boolean;
    public setUseFallback(useFallback: boolean): void;
  }
  
  interface CharsetConverterProps extends GObject.ObjectProps, ConverterProps, InitableProps {
    fromCharset: string;
    toCharset: string;
    useFallback: boolean;
  }
  
  export class ConverterInputStream extends FilterInputStream implements PollableInputStream {
    constructor(props?: ConverterInputStreamProps);
    
    converter: Converter;
    
    public getConverter(): Converter;
  }
  
  interface ConverterInputStreamProps extends FilterInputStreamProps, PollableInputStreamProps {
    converter: Converter;
  }
  
  export class ConverterOutputStream extends FilterOutputStream implements PollableOutputStream {
    constructor(props?: ConverterOutputStreamProps);
    
    converter: Converter;
    
    public getConverter(): Converter;
  }
  
  interface ConverterOutputStreamProps extends FilterOutputStreamProps, PollableOutputStreamProps {
    converter: Converter;
  }
  
  export class Credentials extends GObject.Object {
    constructor(props?: CredentialsProps);
    
    public getNative(nativeType: CredentialsType): any;
    public getUnixPid(): number;
    public getUnixUser(): number;
    public isSameUser(otherCredentials: Credentials): boolean;
    public setNative(nativeType: CredentialsType, _native: any): void;
    public setUnixUser(uid: number): boolean;
    public toString(): string;
  }
  
  interface CredentialsProps extends GObject.ObjectProps {
    
  }
  
  export class DBusActionGroup extends GObject.Object implements ActionGroup, RemoteActionGroup {
    constructor(props?: DBusActionGroupProps);
    
    public static get(connection: DBusConnection, busName: string, objectPath: string): DBusActionGroup;
  }
  
  interface DBusActionGroupProps extends GObject.ObjectProps, ActionGroupProps, RemoteActionGroupProps {
    
  }
  
  export class DBusAuthObserver extends GObject.Object {
    constructor(props?: DBusAuthObserverProps);
    
    public allowMechanism(mechanism: string): boolean;
    public authorizeAuthenticatedPeer(stream: IOStream, credentials: Credentials): boolean;
  }
  
  interface DBusAuthObserverProps extends GObject.ObjectProps {
    
  }
  
  export class DBusConnection extends GObject.Object implements AsyncInitable, Initable {
    constructor(props?: DBusConnectionProps);
    
    address: string;
    authenticationObserver: DBusAuthObserver;
    capabilities: DBusCapabilityFlags;
    closed: boolean;
    exitOnClose: boolean;
    flags: DBusConnectionFlags;
    guid: string;
    stream: IOStream;
    uniqueName: string;
    
    public addFilter(filterFunction: DBusMessageFilterFunction, userData: any, userDataFreeFunc: GLib.DestroyNotify): number;
    public call(busName: string, objectPath: string, interfaceName: string, methodName: string, parameters: GLib.Variant, replyType: GLib.VariantType, flags: DBusCallFlags, timeoutMsec: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public callFinish(res: AsyncResult): GLib.Variant;
    public callSync(busName: string, objectPath: string, interfaceName: string, methodName: string, parameters: GLib.Variant, replyType: GLib.VariantType, flags: DBusCallFlags, timeoutMsec: number, cancellable: Cancellable): GLib.Variant;
    public callWithUnixFdList(busName: string, objectPath: string, interfaceName: string, methodName: string, parameters: GLib.Variant, replyType: GLib.VariantType, flags: DBusCallFlags, timeoutMsec: number, fdList: UnixFDList, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public callWithUnixFdListFinish(outFdList: UnixFDList, res: AsyncResult): GLib.Variant;
    public callWithUnixFdListSync(busName: string, objectPath: string, interfaceName: string, methodName: string, parameters: GLib.Variant, replyType: GLib.VariantType, flags: DBusCallFlags, timeoutMsec: number, fdList: UnixFDList, outFdList: UnixFDList, cancellable: Cancellable): GLib.Variant;
    public close(cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public closeFinish(res: AsyncResult): boolean;
    public closeSync(cancellable: Cancellable): boolean;
    public emitSignal(destinationBusName: string, objectPath: string, interfaceName: string, signalName: string, parameters: GLib.Variant): boolean;
    public exportActionGroup(objectPath: string, actionGroup: ActionGroup): number;
    public exportMenuModel(objectPath: string, menu: MenuModel): number;
    public flush(cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public flushFinish(res: AsyncResult): boolean;
    public flushSync(cancellable: Cancellable): boolean;
    public getCapabilities(): DBusCapabilityFlags;
    public getExitOnClose(): boolean;
    public getGuid(): string;
    public getLastSerial(): number;
    public getPeerCredentials(): Credentials;
    public getStream(): IOStream;
    public getUniqueName(): string;
    public isClosed(): boolean;
    public registerObject(objectPath: string, interfaceInfo: DBusInterfaceInfo, vtable: DBusInterfaceVTable, userData: any, userDataFreeFunc: GLib.DestroyNotify): number;
    public registerObjectWithClosures(objectPath: string, interfaceInfo: DBusInterfaceInfo, methodCallClosure: GObject.Closure, getPropertyClosure: GObject.Closure, setPropertyClosure: GObject.Closure): number;
    public registerSubtree(objectPath: string, vtable: DBusSubtreeVTable, flags: DBusSubtreeFlags, userData: any, userDataFreeFunc: GLib.DestroyNotify): number;
    public removeFilter(filterId: number): void;
    public sendMessage(message: DBusMessage, flags: DBusSendMessageFlags, outSerial: number): boolean;
    public sendMessageWithReply(message: DBusMessage, flags: DBusSendMessageFlags, timeoutMsec: number, outSerial: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public sendMessageWithReplyFinish(res: AsyncResult): DBusMessage;
    public sendMessageWithReplySync(message: DBusMessage, flags: DBusSendMessageFlags, timeoutMsec: number, outSerial: number, cancellable: Cancellable): DBusMessage;
    public setExitOnClose(exitOnClose: boolean): void;
    public signalSubscribe(sender: string, interfaceName: string, member: string, objectPath: string, arg0: string, flags: DBusSignalFlags, callback: DBusSignalCallback, userData: any, userDataFreeFunc: GLib.DestroyNotify): number;
    public signalUnsubscribe(subscriptionId: number): void;
    public startMessageProcessing(): void;
    public unexportActionGroup(exportId: number): void;
    public unexportMenuModel(exportId: number): void;
    public unregisterObject(registrationId: number): boolean;
    public unregisterSubtree(registrationId: number): boolean;
    
    public static new(stream: IOStream, guid: string, flags: DBusConnectionFlags, observer: DBusAuthObserver, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public static newForAddress(address: string, flags: DBusConnectionFlags, observer: DBusAuthObserver, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
  }
  
  interface DBusConnectionProps extends GObject.ObjectProps, AsyncInitableProps, InitableProps {
    address: string;
    authenticationObserver: DBusAuthObserver;
    capabilities: DBusCapabilityFlags;
    closed: boolean;
    exitOnClose: boolean;
    flags: DBusConnectionFlags;
    guid: string;
    stream: IOStream;
    uniqueName: string;
  }
  
  export class DBusInterfaceSkeleton extends GObject.Object implements DBusInterface {
    constructor(props?: DBusInterfaceSkeletonProps);
    
    gFlags: DBusInterfaceSkeletonFlags;
    
    public export(connection: DBusConnection, objectPath: string): boolean;
    public flush(): void;
    public getConnection(): DBusConnection;
    public getConnections(): GLib.List;
    public getFlags(): DBusInterfaceSkeletonFlags;
    public getInfo(): DBusInterfaceInfo;
    public getObjectPath(): string;
    public getProperties(): GLib.Variant;
    public getVtable(): DBusInterfaceVTable;
    public hasConnection(connection: DBusConnection): boolean;
    public setFlags(flags: DBusInterfaceSkeletonFlags): void;
    public unexport(): void;
    public unexportFromConnection(connection: DBusConnection): void;
    public gAuthorizeMethod(invocation: DBusMethodInvocation): boolean;
  }
  
  interface DBusInterfaceSkeletonProps extends GObject.ObjectProps, DBusInterfaceProps {
    gFlags: DBusInterfaceSkeletonFlags;
  }
  
  export class DBusMenuModel extends MenuModel {
    constructor(props?: DBusMenuModelProps);
    
    public static get(connection: DBusConnection, busName: string, objectPath: string): DBusMenuModel;
  }
  
  interface DBusMenuModelProps extends MenuModelProps {
    
  }
  
  export class DBusMessage extends GObject.Object {
    constructor(props?: DBusMessageProps);
    
    locked: boolean;
    
    public copy(): DBusMessage;
    public getArg0(): string;
    public getBody(): GLib.Variant;
    public getByteOrder(): DBusMessageByteOrder;
    public getDestination(): string;
    public getErrorName(): string;
    public getFlags(): DBusMessageFlags;
    public getHeader(headerField: DBusMessageHeaderField): GLib.Variant;
    public getHeaderFields(): number[];
    public getInterface(): string;
    public getLocked(): boolean;
    public getMember(): string;
    public getMessageType(): DBusMessageType;
    public getNumUnixFds(): number;
    public getPath(): string;
    public getReplySerial(): number;
    public getSender(): string;
    public getSerial(): number;
    public getSignature(): string;
    public getUnixFdList(): UnixFDList;
    public lock(): void;
    public newMethodError(errorName: string, errorMessageFormat: string, ...params: any[]): DBusMessage;
    public newMethodErrorLiteral(errorName: string, errorMessage: string): DBusMessage;
    public newMethodErrorValist(errorName: string, errorMessageFormat: string, varArgs: any[]): DBusMessage;
    public newMethodReply(): DBusMessage;
    public print(indent: number): string;
    public setBody(body: GLib.Variant): void;
    public setByteOrder(byteOrder: DBusMessageByteOrder): void;
    public setDestination(value: string): void;
    public setErrorName(value: string): void;
    public setFlags(flags: DBusMessageFlags): void;
    public setHeader(headerField: DBusMessageHeaderField, value: GLib.Variant): void;
    public setInterface(value: string): void;
    public setMember(value: string): void;
    public setMessageType(type: DBusMessageType): void;
    public setNumUnixFds(value: number): void;
    public setPath(value: string): void;
    public setReplySerial(value: number): void;
    public setSender(value: string): void;
    public setSerial(serial: number): void;
    public setSignature(value: string): void;
    public setUnixFdList(fdList: UnixFDList): void;
    public toBlob(outSize: number, capabilities: DBusCapabilityFlags): number[];
    public toGerror(): boolean;
    
    public static bytesNeeded(blob: number[], blobLen: number): number;
  }
  
  interface DBusMessageProps extends GObject.ObjectProps {
    locked: boolean;
  }
  
  export class DBusMethodInvocation extends GObject.Object {
    constructor(props?: DBusMethodInvocationProps);
    
    public getConnection(): DBusConnection;
    public getInterfaceName(): string;
    public getMessage(): DBusMessage;
    public getMethodInfo(): DBusMethodInfo;
    public getMethodName(): string;
    public getObjectPath(): string;
    public getParameters(): GLib.Variant;
    public getPropertyInfo(): DBusPropertyInfo;
    public getSender(): string;
    public getUserData(): any;
    public returnDbusError(errorName: string, errorMessage: string): void;
    public returnError(domain: GLib.Quark, code: number, format: string, ...params: any[]): void;
    public returnErrorLiteral(domain: GLib.Quark, code: number, message: string): void;
    public returnErrorValist(domain: GLib.Quark, code: number, format: string, varArgs: any[]): void;
    public returnGerror(error: GLib.Error): void;
    public returnValue(parameters: GLib.Variant): void;
    public returnValueWithUnixFdList(parameters: GLib.Variant, fdList: UnixFDList): void;
    public takeError(error: GLib.Error): void;
  }
  
  interface DBusMethodInvocationProps extends GObject.ObjectProps {
    
  }
  
  export class DBusObjectManagerClient extends GObject.Object implements AsyncInitable, DBusObjectManager, Initable {
    constructor(props?: DBusObjectManagerClientProps);
    
    busType: BusType;
    connection: DBusConnection;
    flags: DBusObjectManagerClientFlags;
    getProxyTypeDestroyNotify: any;
    getProxyTypeFunc: any;
    getProxyTypeUserData: any;
    name: string;
    nameOwner: string;
    objectPath: string;
    
    public getConnection(): DBusConnection;
    public getFlags(): DBusObjectManagerClientFlags;
    public getName(): string;
    public getNameOwner(): string;
    public interfaceProxyPropertiesChanged(objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, changedProperties: GLib.Variant, invalidatedProperties: string): void;
    public interfaceProxySignal(objectProxy: DBusObjectProxy, interfaceProxy: DBusProxy, senderName: string, signalName: string, parameters: GLib.Variant): void;
    
    public static new(connection: DBusConnection, flags: DBusObjectManagerClientFlags, name: string, objectPath: string, getProxyTypeFunc: DBusProxyTypeFunc, getProxyTypeUserData: any, getProxyTypeDestroyNotify: GLib.DestroyNotify, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public static newForBus(busType: BusType, flags: DBusObjectManagerClientFlags, name: string, objectPath: string, getProxyTypeFunc: DBusProxyTypeFunc, getProxyTypeUserData: any, getProxyTypeDestroyNotify: GLib.DestroyNotify, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
  }
  
  interface DBusObjectManagerClientProps extends GObject.ObjectProps, AsyncInitableProps, DBusObjectManagerProps, InitableProps {
    busType: BusType;
    connection: DBusConnection;
    flags: DBusObjectManagerClientFlags;
    getProxyTypeDestroyNotify: any;
    getProxyTypeFunc: any;
    getProxyTypeUserData: any;
    name: string;
    nameOwner: string;
    objectPath: string;
  }
  
  export class DBusObjectManagerServer extends GObject.Object implements DBusObjectManager {
    constructor(props?: DBusObjectManagerServerProps);
    
    connection: DBusConnection;
    objectPath: string;
    
    public export(object: DBusObjectSkeleton): void;
    public exportUniquely(object: DBusObjectSkeleton): void;
    public getConnection(): DBusConnection;
    public isExported(object: DBusObjectSkeleton): boolean;
    public setConnection(connection: DBusConnection): void;
    public unexport(objectPath: string): boolean;
  }
  
  interface DBusObjectManagerServerProps extends GObject.ObjectProps, DBusObjectManagerProps {
    connection: DBusConnection;
    objectPath: string;
  }
  
  export class DBusObjectProxy extends GObject.Object implements DBusObject {
    constructor(props?: DBusObjectProxyProps);
    
    gConnection: DBusConnection;
    gObjectPath: string;
    
    public getConnection(): DBusConnection;
  }
  
  interface DBusObjectProxyProps extends GObject.ObjectProps, DBusObjectProps {
    gConnection: DBusConnection;
    gObjectPath: string;
  }
  
  export class DBusObjectSkeleton extends GObject.Object implements DBusObject {
    constructor(props?: DBusObjectSkeletonProps);
    
    gObjectPath: string;
    
    public addInterface(interface_: DBusInterfaceSkeleton): void;
    public flush(): void;
    public removeInterface(interface_: DBusInterfaceSkeleton): void;
    public removeInterfaceByName(interfaceName: string): void;
    public setObjectPath(objectPath: string): void;
    public authorizeMethod(interface_: DBusInterfaceSkeleton, invocation: DBusMethodInvocation): boolean;
  }
  
  interface DBusObjectSkeletonProps extends GObject.ObjectProps, DBusObjectProps {
    gObjectPath: string;
  }
  
  export class DBusProxy extends GObject.Object implements AsyncInitable, DBusInterface, Initable {
    constructor(props?: DBusProxyProps);
    
    gBusType: BusType;
    gConnection: DBusConnection;
    gDefaultTimeout: number;
    gFlags: DBusProxyFlags;
    gInterfaceInfo: DBusInterfaceInfo;
    gInterfaceName: string;
    gName: string;
    gNameOwner: string;
    gObjectPath: string;
    
    public call(methodName: string, parameters: GLib.Variant, flags: DBusCallFlags, timeoutMsec: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public callFinish(res: AsyncResult): GLib.Variant;
    public callSync(methodName: string, parameters: GLib.Variant, flags: DBusCallFlags, timeoutMsec: number, cancellable: Cancellable): GLib.Variant;
    public callWithUnixFdList(methodName: string, parameters: GLib.Variant, flags: DBusCallFlags, timeoutMsec: number, fdList: UnixFDList, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public callWithUnixFdListFinish(outFdList: UnixFDList, res: AsyncResult): GLib.Variant;
    public callWithUnixFdListSync(methodName: string, parameters: GLib.Variant, flags: DBusCallFlags, timeoutMsec: number, fdList: UnixFDList, outFdList: UnixFDList, cancellable: Cancellable): GLib.Variant;
    public getCachedProperty(propertyName: string): GLib.Variant;
    public getCachedPropertyNames(): string[];
    public getConnection(): DBusConnection;
    public getDefaultTimeout(): number;
    public getFlags(): DBusProxyFlags;
    public getInterfaceInfo(): DBusInterfaceInfo;
    public getInterfaceName(): string;
    public getName(): string;
    public getNameOwner(): string;
    public getObjectPath(): string;
    public setCachedProperty(propertyName: string, value: GLib.Variant): void;
    public setDefaultTimeout(timeoutMsec: number): void;
    public setInterfaceInfo(info: DBusInterfaceInfo): void;
    public gPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void;
    public gSignal(senderName: string, signalName: string, parameters: GLib.Variant): void;
    
    public static new(connection: DBusConnection, flags: DBusProxyFlags, info: DBusInterfaceInfo, name: string, objectPath: string, interfaceName: string, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public static newForBus(busType: BusType, flags: DBusProxyFlags, info: DBusInterfaceInfo, name: string, objectPath: string, interfaceName: string, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
  }
  
  interface DBusProxyProps extends GObject.ObjectProps, AsyncInitableProps, DBusInterfaceProps, InitableProps {
    gBusType: BusType;
    gConnection: DBusConnection;
    gDefaultTimeout: number;
    gFlags: DBusProxyFlags;
    gInterfaceInfo: DBusInterfaceInfo;
    gInterfaceName: string;
    gName: string;
    gNameOwner: string;
    gObjectPath: string;
  }
  
  export class DBusServer extends GObject.Object implements Initable {
    constructor(props?: DBusServerProps);
    
    active: boolean;
    address: string;
    authenticationObserver: DBusAuthObserver;
    clientAddress: string;
    flags: DBusServerFlags;
    guid: string;
    
    public getClientAddress(): string;
    public getFlags(): DBusServerFlags;
    public getGuid(): string;
    public isActive(): boolean;
    public start(): void;
    public stop(): void;
  }
  
  interface DBusServerProps extends GObject.ObjectProps, InitableProps {
    active: boolean;
    address: string;
    authenticationObserver: DBusAuthObserver;
    clientAddress: string;
    flags: DBusServerFlags;
    guid: string;
  }
  
  export class DataInputStream extends BufferedInputStream implements Seekable {
    constructor(props?: DataInputStreamProps);
    
    byteOrder: DataStreamByteOrder;
    newlineType: DataStreamNewlineType;
    
    public getByteOrder(): DataStreamByteOrder;
    public getNewlineType(): DataStreamNewlineType;
    public readByte(cancellable: Cancellable): number;
    public readInt16(cancellable: Cancellable): number;
    public readInt32(cancellable: Cancellable): number;
    public readInt64(cancellable: Cancellable): number;
    public readLine(length: number, cancellable: Cancellable): number[];
    public readLineAsync(ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public readLineFinish(result: AsyncResult, length: number): number[];
    public readLineFinishUtf8(result: AsyncResult, length: number): string;
    public readLineUtf8(length: number, cancellable: Cancellable): string;
    public readUint16(cancellable: Cancellable): number;
    public readUint32(cancellable: Cancellable): number;
    public readUint64(cancellable: Cancellable): number;
    public readUntil(stopChars: string, length: number, cancellable: Cancellable): string;
    public readUntilAsync(stopChars: string, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public readUntilFinish(result: AsyncResult, length: number): string;
    public readUpto(stopChars: string, stopCharsLen: number, length: number, cancellable: Cancellable): string;
    public readUptoAsync(stopChars: string, stopCharsLen: number, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public readUptoFinish(result: AsyncResult, length: number): string;
    public setByteOrder(order: DataStreamByteOrder): void;
    public setNewlineType(type: DataStreamNewlineType): void;
  }
  
  interface DataInputStreamProps extends BufferedInputStreamProps, SeekableProps {
    byteOrder: DataStreamByteOrder;
    newlineType: DataStreamNewlineType;
  }
  
  export class DataOutputStream extends FilterOutputStream implements Seekable {
    constructor(props?: DataOutputStreamProps);
    
    byteOrder: DataStreamByteOrder;
    
    public getByteOrder(): DataStreamByteOrder;
    public putByte(data: number, cancellable: Cancellable): boolean;
    public putInt16(data: number, cancellable: Cancellable): boolean;
    public putInt32(data: number, cancellable: Cancellable): boolean;
    public putInt64(data: number, cancellable: Cancellable): boolean;
    public putString(str: string, cancellable: Cancellable): boolean;
    public putUint16(data: number, cancellable: Cancellable): boolean;
    public putUint32(data: number, cancellable: Cancellable): boolean;
    public putUint64(data: number, cancellable: Cancellable): boolean;
    public setByteOrder(order: DataStreamByteOrder): void;
  }
  
  interface DataOutputStreamProps extends FilterOutputStreamProps, SeekableProps {
    byteOrder: DataStreamByteOrder;
  }
  
  export class DesktopAppInfo extends GObject.Object implements AppInfo {
    constructor(props?: DesktopAppInfoProps);
    
    filename: string;
    
    public getActionName(actionName: string): string;
    public getBoolean(key: string): boolean;
    public getCategories(): string;
    public getFilename(): string;
    public getGenericName(): string;
    public getIsHidden(): boolean;
    public getKeywords(): string[];
    public getNodisplay(): boolean;
    public getShowIn(desktopEnv: string): boolean;
    public getStartupWmClass(): string;
    public getString(key: string): string;
    public hasKey(key: string): boolean;
    public launchAction(actionName: string, launchContext: AppLaunchContext): void;
    public launchUrisAsManager(uris: GLib.List, launchContext: AppLaunchContext, spawnFlags: GLib.SpawnFlags, userSetup: GLib.SpawnChildSetupFunc, userSetupData: any, pidCallback: DesktopAppLaunchCallback, pidCallbackData: any): boolean;
    public listActions(): string[];
    
    public static getImplementations(_interface: string): GLib.List;
    public static search(searchString: string): string[][];
    public static setDesktopEnv(desktopEnv: string): void;
  }
  
  interface DesktopAppInfoProps extends GObject.ObjectProps, AppInfoProps {
    filename: string;
  }
  
  export class Emblem extends GObject.Object implements Icon {
    constructor(props?: EmblemProps);
    
    icon: GObject.Object;
    origin: EmblemOrigin;
    
    public getIcon(): Icon;
    public getOrigin(): EmblemOrigin;
  }
  
  interface EmblemProps extends GObject.ObjectProps, IconProps {
    icon: GObject.Object;
    origin: EmblemOrigin;
  }
  
  export class EmblemedIcon extends GObject.Object implements Icon {
    constructor(props?: EmblemedIconProps);
    
    gicon: Icon;
    
    public addEmblem(emblem: Emblem): void;
    public clearEmblems(): void;
    public getEmblems(): GLib.List;
    public getIcon(): Icon;
  }
  
  interface EmblemedIconProps extends GObject.ObjectProps, IconProps {
    gicon: Icon;
  }
  
  export class FileEnumerator extends GObject.Object {
    constructor(props?: FileEnumeratorProps);
    
    container: File;
    
    public close(cancellable: Cancellable): boolean;
    public closeAsync(ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public closeFinish(result: AsyncResult): boolean;
    public getChild(info: FileInfo): File;
    public getContainer(): File;
    public hasPending(): boolean;
    public isClosed(): boolean;
    public iterate(outInfo: FileInfo, outChild: File, cancellable: Cancellable): boolean;
    public nextFile(cancellable: Cancellable): FileInfo;
    public nextFilesAsync(numFiles: number, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public nextFilesFinish(result: AsyncResult): GLib.List;
    public setPending(pending: boolean): void;
    public closeFn(cancellable: Cancellable): boolean;
  }
  
  interface FileEnumeratorProps extends GObject.ObjectProps {
    container: File;
  }
  
  export class FileIOStream extends IOStream implements Seekable {
    constructor(props?: FileIOStreamProps);
    
    public getEtag(): string;
    public queryInfo(attributes: string, cancellable: Cancellable): FileInfo;
    public queryInfoAsync(attributes: string, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public queryInfoFinish(result: AsyncResult): FileInfo;
    public canSeek(): boolean;
    public canTruncate(): boolean;
    public seek(offset: number, type: GLib.SeekType, cancellable: Cancellable): boolean;
    public tell(): number;
    public truncateFn(size: number, cancellable: Cancellable): boolean;
  }
  
  interface FileIOStreamProps extends IOStreamProps, SeekableProps {
    
  }
  
  export class FileIcon extends GObject.Object implements Icon, LoadableIcon {
    constructor(props?: FileIconProps);
    
    file: File;
    
    public getFile(): File;
  }
  
  interface FileIconProps extends GObject.ObjectProps, IconProps, LoadableIconProps {
    file: File;
  }
  
  export class FileInfo extends GObject.Object {
    constructor(props?: FileInfoProps);
    
    public clearStatus(): void;
    public copyInto(destInfo: FileInfo): void;
    public dup(): FileInfo;
    public getAttributeAsString(attribute: string): string;
    public getAttributeBoolean(attribute: string): boolean;
    public getAttributeByteString(attribute: string): string;
    public getAttributeData(attribute: string, type: FileAttributeType, valuePp: any, status: FileAttributeStatus): boolean;
    public getAttributeInt32(attribute: string): number;
    public getAttributeInt64(attribute: string): number;
    public getAttributeObject(attribute: string): GObject.Object;
    public getAttributeStatus(attribute: string): FileAttributeStatus;
    public getAttributeString(attribute: string): string;
    public getAttributeStringv(attribute: string): string[];
    public getAttributeType(attribute: string): FileAttributeType;
    public getAttributeUint32(attribute: string): number;
    public getAttributeUint64(attribute: string): number;
    public getContentType(): string;
    public getDeletionDate(): GLib.DateTime;
    public getDisplayName(): string;
    public getEditName(): string;
    public getEtag(): string;
    public getFileType(): FileType;
    public getIcon(): Icon;
    public getIsBackup(): boolean;
    public getIsHidden(): boolean;
    public getIsSymlink(): boolean;
    public getModificationTime(result: GLib.TimeVal): void;
    public getName(): string;
    public getSize(): number;
    public getSortOrder(): number;
    public getSymbolicIcon(): Icon;
    public getSymlinkTarget(): string;
    public hasAttribute(attribute: string): boolean;
    public hasNamespace(nameSpace: string): boolean;
    public listAttributes(nameSpace: string): string[];
    public removeAttribute(attribute: string): void;
    public setAttribute(attribute: string, type: FileAttributeType, valueP: any): void;
    public setAttributeBoolean(attribute: string, attrValue: boolean): void;
    public setAttributeByteString(attribute: string, attrValue: string): void;
    public setAttributeInt32(attribute: string, attrValue: number): void;
    public setAttributeInt64(attribute: string, attrValue: number): void;
    public setAttributeMask(mask: FileAttributeMatcher): void;
    public setAttributeObject(attribute: string, attrValue: GObject.Object): void;
    public setAttributeStatus(attribute: string, status: FileAttributeStatus): boolean;
    public setAttributeString(attribute: string, attrValue: string): void;
    public setAttributeStringv(attribute: string, attrValue: string[]): void;
    public setAttributeUint32(attribute: string, attrValue: number): void;
    public setAttributeUint64(attribute: string, attrValue: number): void;
    public setContentType(contentType: string): void;
    public setDisplayName(displayName: string): void;
    public setEditName(editName: string): void;
    public setFileType(type: FileType): void;
    public setIcon(icon: Icon): void;
    public setIsHidden(isHidden: boolean): void;
    public setIsSymlink(isSymlink: boolean): void;
    public setModificationTime(mtime: GLib.TimeVal): void;
    public setName(name: string): void;
    public setSize(size: number): void;
    public setSortOrder(sortOrder: number): void;
    public setSymbolicIcon(icon: Icon): void;
    public setSymlinkTarget(symlinkTarget: string): void;
    public unsetAttributeMask(): void;
  }
  
  interface FileInfoProps extends GObject.ObjectProps {
    
  }
  
  export class FileInputStream extends InputStream implements Seekable {
    constructor(props?: FileInputStreamProps);
    
    public queryInfo(attributes: string, cancellable: Cancellable): FileInfo;
    public queryInfoAsync(attributes: string, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public queryInfoFinish(result: AsyncResult): FileInfo;
    public canSeek(): boolean;
    public seek(offset: number, type: GLib.SeekType, cancellable: Cancellable): boolean;
    public tell(): number;
  }
  
  interface FileInputStreamProps extends InputStreamProps, SeekableProps {
    
  }
  
  export class FileMonitor extends GObject.Object {
    constructor(props?: FileMonitorProps);
    
    cancelled: boolean;
    rateLimit: number;
    
    public cancel(): boolean;
    public emitEvent(child: File, otherFile: File, eventType: FileMonitorEvent): void;
    public isCancelled(): boolean;
    public setRateLimit(limitMsecs: number): void;
    public changed(file: File, otherFile: File, eventType: FileMonitorEvent): void;
  }
  
  interface FileMonitorProps extends GObject.ObjectProps {
    cancelled: boolean;
    rateLimit: number;
  }
  
  export class FileOutputStream extends OutputStream implements Seekable {
    constructor(props?: FileOutputStreamProps);
    
    public getEtag(): string;
    public queryInfo(attributes: string, cancellable: Cancellable): FileInfo;
    public queryInfoAsync(attributes: string, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public queryInfoFinish(result: AsyncResult): FileInfo;
    public canSeek(): boolean;
    public canTruncate(): boolean;
    public seek(offset: number, type: GLib.SeekType, cancellable: Cancellable): boolean;
    public tell(): number;
    public truncateFn(size: number, cancellable: Cancellable): boolean;
  }
  
  interface FileOutputStreamProps extends OutputStreamProps, SeekableProps {
    
  }
  
  export class FilenameCompleter extends GObject.Object {
    constructor(props?: FilenameCompleterProps);
    
    public getCompletionSuffix(initialText: string): string;
    public getCompletions(initialText: string): string[];
    public setDirsOnly(dirsOnly: boolean): void;
    public gotCompletionData(): void;
  }
  
  interface FilenameCompleterProps extends GObject.ObjectProps {
    
  }
  
  export class FilterInputStream extends InputStream {
    constructor(props?: FilterInputStreamProps);
    
    baseStream: InputStream;
    closeBaseStream: boolean;
    
    public getBaseStream(): InputStream;
    public getCloseBaseStream(): boolean;
    public setCloseBaseStream(closeBase: boolean): void;
  }
  
  interface FilterInputStreamProps extends InputStreamProps {
    baseStream: InputStream;
    closeBaseStream: boolean;
  }
  
  export class FilterOutputStream extends OutputStream {
    constructor(props?: FilterOutputStreamProps);
    
    baseStream: OutputStream;
    closeBaseStream: boolean;
    
    public getBaseStream(): OutputStream;
    public getCloseBaseStream(): boolean;
    public setCloseBaseStream(closeBase: boolean): void;
  }
  
  interface FilterOutputStreamProps extends OutputStreamProps {
    baseStream: OutputStream;
    closeBaseStream: boolean;
  }
  
  export class IOModule extends GObject.TypeModule implements GObject.TypePlugin {
    constructor(props?: IOModuleProps);
    
    public load(): void;
    public unload(): void;
    
    public static query(): string[];
  }
  
  interface IOModuleProps extends GObject.TypeModuleProps, GObject.TypePluginProps {
    
  }
  
  export class IOStream extends GObject.Object {
    constructor(props?: IOStreamProps);
    
    closed: boolean;
    inputStream: InputStream;
    outputStream: OutputStream;
    
    public clearPending(): void;
    public close(cancellable: Cancellable): boolean;
    public closeAsync(ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public closeFinish(result: AsyncResult): boolean;
    public getInputStream(): InputStream;
    public getOutputStream(): OutputStream;
    public hasPending(): boolean;
    public isClosed(): boolean;
    public setPending(): boolean;
    public spliceAsync(stream2: IOStream, flags: IOStreamSpliceFlags, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public closeFn(cancellable: Cancellable): boolean;
    
    public static spliceFinish(result: AsyncResult): boolean;
  }
  
  interface IOStreamProps extends GObject.ObjectProps {
    closed: boolean;
    inputStream: InputStream;
    outputStream: OutputStream;
  }
  
  export class InetAddress extends GObject.Object {
    constructor(props?: InetAddressProps);
    
    bytes: any;
    family: SocketFamily;
    isAny: boolean;
    isLinkLocal: boolean;
    isLoopback: boolean;
    isMcGlobal: boolean;
    isMcLinkLocal: boolean;
    isMcNodeLocal: boolean;
    isMcOrgLocal: boolean;
    isMcSiteLocal: boolean;
    isMulticast: boolean;
    isSiteLocal: boolean;
    
    public equal(otherAddress: InetAddress): boolean;
    public getFamily(): SocketFamily;
    public getIsAny(): boolean;
    public getIsLinkLocal(): boolean;
    public getIsLoopback(): boolean;
    public getIsMcGlobal(): boolean;
    public getIsMcLinkLocal(): boolean;
    public getIsMcNodeLocal(): boolean;
    public getIsMcOrgLocal(): boolean;
    public getIsMcSiteLocal(): boolean;
    public getIsMulticast(): boolean;
    public getIsSiteLocal(): boolean;
    public getNativeSize(): number;
    public toBytes(): number;
    public toString(): string;
  }
  
  interface InetAddressProps extends GObject.ObjectProps {
    bytes: any;
    family: SocketFamily;
    isAny: boolean;
    isLinkLocal: boolean;
    isLoopback: boolean;
    isMcGlobal: boolean;
    isMcLinkLocal: boolean;
    isMcNodeLocal: boolean;
    isMcOrgLocal: boolean;
    isMcSiteLocal: boolean;
    isMulticast: boolean;
    isSiteLocal: boolean;
  }
  
  export class InetAddressMask extends GObject.Object implements Initable {
    constructor(props?: InetAddressMaskProps);
    
    address: InetAddress;
    family: SocketFamily;
    length: number;
    
    public equal(mask2: InetAddressMask): boolean;
    public getAddress(): InetAddress;
    public getFamily(): SocketFamily;
    public getLength(): number;
    public matches(address: InetAddress): boolean;
    public toString(): string;
  }
  
  interface InetAddressMaskProps extends GObject.ObjectProps, InitableProps {
    address: InetAddress;
    family: SocketFamily;
    length: number;
  }
  
  export class InetSocketAddress extends SocketAddress implements SocketConnectable {
    constructor(props?: InetSocketAddressProps);
    
    address: InetAddress;
    flowinfo: number;
    port: number;
    scopeId: number;
    
    public getAddress(): InetAddress;
    public getFlowinfo(): number;
    public getPort(): number;
    public getScopeId(): number;
  }
  
  interface InetSocketAddressProps extends SocketAddressProps, SocketConnectableProps {
    address: InetAddress;
    flowinfo: number;
    port: number;
    scopeId: number;
  }
  
  export class InputStream extends GObject.Object {
    constructor(props?: InputStreamProps);
    
    public clearPending(): void;
    public close(cancellable: Cancellable): boolean;
    public closeAsync(ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public closeFinish(result: AsyncResult): boolean;
    public hasPending(): boolean;
    public isClosed(): boolean;
    public read(buffer: number[], count: number, cancellable: Cancellable): number;
    public readAll(buffer: number[], count: number, bytesRead: number, cancellable: Cancellable): boolean;
    public readAllAsync(buffer: number[], count: number, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public readAllFinish(result: AsyncResult, bytesRead: number): boolean;
    public readAsync(buffer: number[], count: number, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public readBytes(count: number, cancellable: Cancellable): GLib.Bytes;
    public readBytesAsync(count: number, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public readBytesFinish(result: AsyncResult): GLib.Bytes;
    public readFinish(result: AsyncResult): number;
    public setPending(): boolean;
    public skip(count: number, cancellable: Cancellable): number;
    public skipAsync(count: number, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public skipFinish(result: AsyncResult): number;
    public closeFn(cancellable: Cancellable): boolean;
    public readFn(buffer: any, count: number, cancellable: Cancellable): number;
  }
  
  interface InputStreamProps extends GObject.ObjectProps {
    
  }
  
  export class ListStore extends GObject.Object implements ListModel {
    constructor(props?: ListStoreProps);
    
    itemType: GObject.Type;
    
    public append(item: GObject.Object): void;
    public insert(position: number, item: GObject.Object): void;
    public insertSorted(item: GObject.Object, compareFunc: GLib.CompareDataFunc, userData: any): number;
    public remove(position: number): void;
    public removeAll(): void;
    public sort(compareFunc: GLib.CompareDataFunc, userData: any): void;
    public splice(position: number, nRemovals: number, additions: GObject.Object[], nAdditions: number): void;
  }
  
  interface ListStoreProps extends GObject.ObjectProps, ListModelProps {
    itemType: GObject.Type;
  }
  
  export class MemoryInputStream extends InputStream implements PollableInputStream, Seekable {
    constructor(props?: MemoryInputStreamProps);
    
    public addBytes(bytes: GLib.Bytes): void;
    public addData(data: number[], len: number, destroy: GLib.DestroyNotify): void;
  }
  
  interface MemoryInputStreamProps extends InputStreamProps, PollableInputStreamProps, SeekableProps {
    
  }
  
  export class MemoryOutputStream extends OutputStream implements PollableOutputStream, Seekable {
    constructor(props?: MemoryOutputStreamProps);
    
    data: any;
    dataSize: number;
    destroyFunction: any;
    reallocFunction: any;
    size: number;
    
    public getData(): any;
    public getDataSize(): number;
    public getSize(): number;
    public stealAsBytes(): GLib.Bytes;
    public stealData(): any;
  }
  
  interface MemoryOutputStreamProps extends OutputStreamProps, PollableOutputStreamProps, SeekableProps {
    data: any;
    dataSize: number;
    destroyFunction: any;
    reallocFunction: any;
    size: number;
  }
  
  export class Menu extends MenuModel {
    constructor(props?: MenuProps);
    
    public append(label: string, detailedAction: string): void;
    public appendItem(item: MenuItem): void;
    public appendSection(label: string, section: MenuModel): void;
    public appendSubmenu(label: string, submenu: MenuModel): void;
    public freeze(): void;
    public insert(position: number, label: string, detailedAction: string): void;
    public insertItem(position: number, item: MenuItem): void;
    public insertSection(position: number, label: string, section: MenuModel): void;
    public insertSubmenu(position: number, label: string, submenu: MenuModel): void;
    public prepend(label: string, detailedAction: string): void;
    public prependItem(item: MenuItem): void;
    public prependSection(label: string, section: MenuModel): void;
    public prependSubmenu(label: string, submenu: MenuModel): void;
    public remove(position: number): void;
    public removeAll(): void;
  }
  
  interface MenuProps extends MenuModelProps {
    
  }
  
  export class MenuAttributeIter extends GObject.Object {
    constructor(props?: MenuAttributeIterProps);
    
    public getName(): string;
    public getNext(outName: string, value: GLib.Variant): boolean;
    public getValue(): GLib.Variant;
    public next(): boolean;
  }
  
  interface MenuAttributeIterProps extends GObject.ObjectProps {
    
  }
  
  export class MenuItem extends GObject.Object {
    constructor(props?: MenuItemProps);
    
    public getAttribute(attribute: string, formatString: string, ...params: any[]): boolean;
    public getAttributeValue(attribute: string, expectedType: GLib.VariantType): GLib.Variant;
    public getLink(link: string): MenuModel;
    public setActionAndTarget(action: string, formatString: string, ...params: any[]): void;
    public setActionAndTargetValue(action: string, targetValue: GLib.Variant): void;
    public setAttribute(attribute: string, formatString: string, ...params: any[]): void;
    public setAttributeValue(attribute: string, value: GLib.Variant): void;
    public setDetailedAction(detailedAction: string): void;
    public setIcon(icon: Icon): void;
    public setLabel(label: string): void;
    public setLink(link: string, model: MenuModel): void;
    public setSection(section: MenuModel): void;
    public setSubmenu(submenu: MenuModel): void;
  }
  
  interface MenuItemProps extends GObject.ObjectProps {
    
  }
  
  export class MenuLinkIter extends GObject.Object {
    constructor(props?: MenuLinkIterProps);
    
    public getName(): string;
    public getNext(outLink: string, value: MenuModel): boolean;
    public getValue(): MenuModel;
    public next(): boolean;
  }
  
  interface MenuLinkIterProps extends GObject.ObjectProps {
    
  }
  
  export class MenuModel extends GObject.Object {
    constructor(props?: MenuModelProps);
    
    public getItemAttribute(itemIndex: number, attribute: string, formatString: string, ...params: any[]): boolean;
    public getItemAttributeValue(itemIndex: number, attribute: string, expectedType: GLib.VariantType): GLib.Variant;
    public getItemLink(itemIndex: number, link: string): MenuModel;
    public getNItems(): number;
    public isMutable(): boolean;
    public itemsChanged(position: number, removed: number, added: number): void;
    public iterateItemAttributes(itemIndex: number): MenuAttributeIter;
    public iterateItemLinks(itemIndex: number): MenuLinkIter;
    public getItemAttributes(itemIndex: number, attributes: GLib.HashTable): void;
    public getItemLinks(itemIndex: number, links: GLib.HashTable): void;
  }
  
  interface MenuModelProps extends GObject.ObjectProps {
    
  }
  
  export class MountOperation extends GObject.Object {
    constructor(props?: MountOperationProps);
    
    anonymous: boolean;
    choice: number;
    domain: string;
    password: string;
    passwordSave: PasswordSave;
    username: string;
    
    public getAnonymous(): boolean;
    public getChoice(): number;
    public getDomain(): string;
    public getPassword(): string;
    public getPasswordSave(): PasswordSave;
    public getUsername(): string;
    public reply(result: MountOperationResult): void;
    public setAnonymous(anonymous: boolean): void;
    public setChoice(choice: number): void;
    public setDomain(domain: string): void;
    public setPassword(password: string): void;
    public setPasswordSave(save: PasswordSave): void;
    public setUsername(username: string): void;
    public aborted(): void;
    public askPassword(message: string, defaultUser: string, defaultDomain: string, flags: AskPasswordFlags): void;
    public askQuestion(message: string, choices: string): void;
    public showProcesses(message: string, processes: any[], choices: string): void;
    public showUnmountProgress(message: string, timeLeft: number, bytesLeft: number): void;
  }
  
  interface MountOperationProps extends GObject.ObjectProps {
    anonymous: boolean;
    choice: number;
    domain: string;
    password: string;
    passwordSave: PasswordSave;
    username: string;
  }
  
  export class NativeVolumeMonitor extends VolumeMonitor {
    constructor(props?: NativeVolumeMonitorProps);
  }
  
  interface NativeVolumeMonitorProps extends VolumeMonitorProps {
    
  }
  
  export class NetworkAddress extends GObject.Object implements SocketConnectable {
    constructor(props?: NetworkAddressProps);
    
    hostname: string;
    port: number;
    scheme: string;
    
    public getHostname(): string;
    public getPort(): number;
    public getScheme(): string;
    
    public static parse(hostAndPort: string, defaultPort: number): NetworkAddress;
    public static parseUri(uri: string, defaultPort: number): NetworkAddress;
  }
  
  interface NetworkAddressProps extends GObject.ObjectProps, SocketConnectableProps {
    hostname: string;
    port: number;
    scheme: string;
  }
  
  export class NetworkService extends GObject.Object implements SocketConnectable {
    constructor(props?: NetworkServiceProps);
    
    domain: string;
    protocol: string;
    scheme: string;
    service: string;
    
    public getDomain(): string;
    public getProtocol(): string;
    public getScheme(): string;
    public getService(): string;
    public setScheme(scheme: string): void;
  }
  
  interface NetworkServiceProps extends GObject.ObjectProps, SocketConnectableProps {
    domain: string;
    protocol: string;
    scheme: string;
    service: string;
  }
  
  export class Notification extends GObject.Object {
    constructor(props?: NotificationProps);
    
    public addButton(label: string, detailedAction: string): void;
    public addButtonWithTarget(label: string, action: string, targetFormat: string, ...params: any[]): void;
    public addButtonWithTargetValue(label: string, action: string, target: GLib.Variant): void;
    public setBody(body: string): void;
    public setDefaultAction(detailedAction: string): void;
    public setDefaultActionAndTarget(action: string, targetFormat: string, ...params: any[]): void;
    public setDefaultActionAndTargetValue(action: string, target: GLib.Variant): void;
    public setIcon(icon: Icon): void;
    public setPriority(priority: NotificationPriority): void;
    public setTitle(title: string): void;
    public setUrgent(urgent: boolean): void;
  }
  
  interface NotificationProps extends GObject.ObjectProps {
    
  }
  
  export class OutputStream extends GObject.Object {
    constructor(props?: OutputStreamProps);
    
    public clearPending(): void;
    public close(cancellable: Cancellable): boolean;
    public closeAsync(ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public closeFinish(result: AsyncResult): boolean;
    public flush(cancellable: Cancellable): boolean;
    public flushAsync(ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public flushFinish(result: AsyncResult): boolean;
    public hasPending(): boolean;
    public isClosed(): boolean;
    public isClosing(): boolean;
    public printf(bytesWritten: number, cancellable: Cancellable, error: GLib.Error, format: string, ...params: any[]): boolean;
    public setPending(): boolean;
    public splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable): number;
    public spliceAsync(source: InputStream, flags: OutputStreamSpliceFlags, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public spliceFinish(result: AsyncResult): number;
    public vprintf(bytesWritten: number, cancellable: Cancellable, error: GLib.Error, format: string, args: any[]): boolean;
    public write(buffer: number[], count: number, cancellable: Cancellable): number;
    public writeAll(buffer: number[], count: number, bytesWritten: number, cancellable: Cancellable): boolean;
    public writeAllAsync(buffer: number[], count: number, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public writeAllFinish(result: AsyncResult, bytesWritten: number): boolean;
    public writeAsync(buffer: number[], count: number, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public writeBytes(bytes: GLib.Bytes, cancellable: Cancellable): number;
    public writeBytesAsync(bytes: GLib.Bytes, ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public writeBytesFinish(result: AsyncResult): number;
    public writeFinish(result: AsyncResult): number;
    public closeFn(cancellable: Cancellable): boolean;
    public writeFn(buffer: number[], count: number, cancellable: Cancellable): number;
  }
  
  interface OutputStreamProps extends GObject.ObjectProps {
    
  }
  
  export class Permission extends GObject.Object {
    constructor(props?: PermissionProps);
    
    allowed: boolean;
    canAcquire: boolean;
    canRelease: boolean;
    
    public acquire(cancellable: Cancellable): boolean;
    public acquireAsync(cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public acquireFinish(result: AsyncResult): boolean;
    public getAllowed(): boolean;
    public getCanAcquire(): boolean;
    public getCanRelease(): boolean;
    public implUpdate(allowed: boolean, canAcquire: boolean, canRelease: boolean): void;
    public release(cancellable: Cancellable): boolean;
    public releaseAsync(cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public releaseFinish(result: AsyncResult): boolean;
  }
  
  interface PermissionProps extends GObject.ObjectProps {
    allowed: boolean;
    canAcquire: boolean;
    canRelease: boolean;
  }
  
  export class PropertyAction extends GObject.Object implements Action {
    constructor(props?: PropertyActionProps);
    
    enabled: boolean;
    invertBoolean: boolean;
    name: string;
    object: GObject.Object;
    parameterType: GLib.VariantType;
    propertyName: string;
    state: GLib.Variant;
    stateType: GLib.VariantType;
  }
  
  interface PropertyActionProps extends GObject.ObjectProps, ActionProps {
    enabled: boolean;
    invertBoolean: boolean;
    name: string;
    object: GObject.Object;
    parameterType: GLib.VariantType;
    propertyName: string;
    state: GLib.Variant;
    stateType: GLib.VariantType;
  }
  
  export class ProxyAddress extends InetSocketAddress implements SocketConnectable {
    constructor(props?: ProxyAddressProps);
    
    destinationHostname: string;
    destinationPort: number;
    destinationProtocol: string;
    password: string;
    protocol: string;
    uri: string;
    username: string;
    
    public getDestinationHostname(): string;
    public getDestinationPort(): number;
    public getDestinationProtocol(): string;
    public getPassword(): string;
    public getProtocol(): string;
    public getUri(): string;
    public getUsername(): string;
  }
  
  interface ProxyAddressProps extends InetSocketAddressProps, SocketConnectableProps {
    destinationHostname: string;
    destinationPort: number;
    destinationProtocol: string;
    password: string;
    protocol: string;
    uri: string;
    username: string;
  }
  
  export class ProxyAddressEnumerator extends SocketAddressEnumerator {
    constructor(props?: ProxyAddressEnumeratorProps);
    
    connectable: SocketConnectable;
    defaultPort: number;
    proxyResolver: ProxyResolver;
    uri: string;
  }
  
  interface ProxyAddressEnumeratorProps extends SocketAddressEnumeratorProps {
    connectable: SocketConnectable;
    defaultPort: number;
    proxyResolver: ProxyResolver;
    uri: string;
  }
  
  export class Resolver extends GObject.Object {
    constructor(props?: ResolverProps);
    
    public lookupByAddress(address: InetAddress, cancellable: Cancellable): string;
    public lookupByAddressAsync(address: InetAddress, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public lookupByAddressFinish(result: AsyncResult): string;
    public lookupByName(hostname: string, cancellable: Cancellable): GLib.List;
    public lookupByNameAsync(hostname: string, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public lookupByNameFinish(result: AsyncResult): GLib.List;
    public lookupRecords(rrname: string, recordType: ResolverRecordType, cancellable: Cancellable): GLib.List;
    public lookupRecordsAsync(rrname: string, recordType: ResolverRecordType, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public lookupRecordsFinish(result: AsyncResult): GLib.List;
    public lookupService(service: string, protocol: string, domain: string, cancellable: Cancellable): GLib.List;
    public lookupServiceAsync(service: string, protocol: string, domain: string, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public lookupServiceFinish(result: AsyncResult): GLib.List;
    public setDefault(): void;
    public reload(): void;
    
    public static freeAddresses(addresses: GLib.List): void;
    public static freeTargets(targets: GLib.List): void;
    public static getDefault(): Resolver;
  }
  
  interface ResolverProps extends GObject.ObjectProps {
    
  }
  
  export class Settings extends GObject.Object {
    constructor(props?: SettingsProps);
    
    backend: SettingsBackend;
    delayApply: boolean;
    hasUnapplied: boolean;
    path: string;
    schema: string;
    schemaId: string;
    settingsSchema: SettingsSchema;
    
    public apply(): void;
    public bind(key: string, object: GObject.Object, property: string, flags: SettingsBindFlags): void;
    public bindWithMapping(key: string, object: GObject.Object, property: string, flags: SettingsBindFlags, getMapping: SettingsBindGetMapping, setMapping: SettingsBindSetMapping, userData: any, destroy: GLib.DestroyNotify): void;
    public bindWritable(key: string, object: GObject.Object, property: string, inverted: boolean): void;
    public createAction(key: string): Action;
    public delay(): void;
    public get(key: string, format: string, ...params: any[]): void;
    public getBoolean(key: string): boolean;
    public getChild(name: string): Settings;
    public getDefaultValue(key: string): GLib.Variant;
    public getDouble(key: string): number;
    public getEnum(key: string): number;
    public getFlags(key: string): number;
    public getHasUnapplied(): boolean;
    public getInt(key: string): number;
    public getInt64(key: string): number;
    public getMapped(key: string, mapping: SettingsGetMapping, userData: any): any;
    public getRange(key: string): GLib.Variant;
    public getString(key: string): string;
    public getStrv(key: string): string[];
    public getUint(key: string): number;
    public getUint64(key: string): number;
    public getUserValue(key: string): GLib.Variant;
    public getValue(key: string): GLib.Variant;
    public isWritable(name: string): boolean;
    public listChildren(): string[];
    public listKeys(): string[];
    public rangeCheck(key: string, value: GLib.Variant): boolean;
    public reset(key: string): void;
    public revert(): void;
    public set(key: string, format: string, ...params: any[]): boolean;
    public setBoolean(key: string, value: boolean): boolean;
    public setDouble(key: string, value: number): boolean;
    public setEnum(key: string, value: number): boolean;
    public setFlags(key: string, value: number): boolean;
    public setInt(key: string, value: number): boolean;
    public setInt64(key: string, value: number): boolean;
    public setString(key: string, value: string): boolean;
    public setStrv(key: string, value: string[]): boolean;
    public setUint(key: string, value: number): boolean;
    public setUint64(key: string, value: number): boolean;
    public setValue(key: string, value: GLib.Variant): boolean;
    public changeEvent(keys: GLib.Quark, nKeys: number): boolean;
    public changed(key: string): void;
    public writableChangeEvent(key: GLib.Quark): boolean;
    public writableChanged(key: string): void;
    
    public static listRelocatableSchemas(): string[];
    public static listSchemas(): string[];
    public static sync(): void;
    public static unbind(object: GObject.Object, property: string): void;
  }
  
  interface SettingsProps extends GObject.ObjectProps {
    backend: SettingsBackend;
    delayApply: boolean;
    hasUnapplied: boolean;
    path: string;
    schema: string;
    schemaId: string;
    settingsSchema: SettingsSchema;
  }
  
  export class SettingsBackend extends GObject.Object {
    constructor(props?: SettingsBackendProps);
    
    public changed(key: string, originTag: any): void;
    public changedTree(tree: GLib.Tree, originTag: any): void;
    public keysChanged(path: string, items: string[], originTag: any): void;
    public pathChanged(path: string, originTag: any): void;
    public pathWritableChanged(path: string): void;
    public writableChanged(key: string): void;
    public getPermission(path: string): Permission;
    public getWritable(key: string): boolean;
    public read(key: string, expectedType: GLib.VariantType, defaultValue: boolean): GLib.Variant;
    public readUserValue(key: string, expectedType: GLib.VariantType): GLib.Variant;
    public reset(key: string, originTag: any): void;
    public subscribe(name: string): void;
    public sync(): void;
    public unsubscribe(name: string): void;
    public write(key: string, value: GLib.Variant, originTag: any): boolean;
    public writeTree(tree: GLib.Tree, originTag: any): boolean;
    
    public static flattenTree(tree: GLib.Tree, path: string, keys: string[], values: GLib.Variant[]): void;
    public static getDefault(): SettingsBackend;
  }
  
  interface SettingsBackendProps extends GObject.ObjectProps {
    
  }
  
  export class SimpleAction extends GObject.Object implements Action {
    constructor(props?: SimpleActionProps);
    
    enabled: boolean;
    name: string;
    parameterType: GLib.VariantType;
    state: GLib.Variant;
    stateType: GLib.VariantType;
    
    public setEnabled(enabled: boolean): void;
    public setState(value: GLib.Variant): void;
    public setStateHint(stateHint: GLib.Variant): void;
  }
  
  interface SimpleActionProps extends GObject.ObjectProps, ActionProps {
    enabled: boolean;
    name: string;
    parameterType: GLib.VariantType;
    state: GLib.Variant;
    stateType: GLib.VariantType;
  }
  
  export class SimpleActionGroup extends GObject.Object implements ActionGroup, ActionMap {
    constructor(props?: SimpleActionGroupProps);
    
    public addEntries(entries: ActionEntry[], nEntries: number, userData: any): void;
    public insert(action: Action): void;
    public lookup(actionName: string): Action;
    public remove(actionName: string): void;
  }
  
  interface SimpleActionGroupProps extends GObject.ObjectProps, ActionGroupProps, ActionMapProps {
    
  }
  
  export class SimpleAsyncResult extends GObject.Object implements AsyncResult {
    constructor(props?: SimpleAsyncResultProps);
    
    public complete(): void;
    public completeInIdle(): void;
    public getOpResGboolean(): boolean;
    public getOpResGpointer(): any;
    public getOpResGssize(): number;
    public getSourceTag(): any;
    public propagateError(): boolean;
    public runInThread(func: SimpleAsyncThreadFunc, ioPriority: number, cancellable: Cancellable): void;
    public setCheckCancellable(checkCancellable: Cancellable): void;
    public setError(domain: GLib.Quark, code: number, format: string, ...params: any[]): void;
    public setErrorVa(domain: GLib.Quark, code: number, format: string, args: any[]): void;
    public setFromError(error: GLib.Error): void;
    public setHandleCancellation(handleCancellation: boolean): void;
    public setOpResGboolean(opRes: boolean): void;
    public setOpResGpointer(opRes: any, destroyOpRes: GLib.DestroyNotify): void;
    public setOpResGssize(opRes: number): void;
    public takeError(error: GLib.Error): void;
    
    public static isValid(result: AsyncResult, source: GObject.Object, sourceTag: any): boolean;
  }
  
  interface SimpleAsyncResultProps extends GObject.ObjectProps, AsyncResultProps {
    
  }
  
  export class SimpleIOStream extends IOStream {
    constructor(props?: SimpleIOStreamProps);
    
    inputStream: InputStream;
    outputStream: OutputStream;
  }
  
  interface SimpleIOStreamProps extends IOStreamProps {
    inputStream: InputStream;
    outputStream: OutputStream;
  }
  
  export class SimplePermission extends Permission {
    constructor(props?: SimplePermissionProps);
  }
  
  interface SimplePermissionProps extends PermissionProps {
    
  }
  
  export class SimpleProxyResolver extends GObject.Object implements ProxyResolver {
    constructor(props?: SimpleProxyResolverProps);
    
    defaultProxy: string;
    ignoreHosts: string[];
    
    public setDefaultProxy(defaultProxy: string): void;
    public setIgnoreHosts(ignoreHosts: string): void;
    public setUriProxy(uriScheme: string, proxy: string): void;
    
    public static new(defaultProxy: string, ignoreHosts: string): ProxyResolver;
  }
  
  interface SimpleProxyResolverProps extends GObject.ObjectProps, ProxyResolverProps {
    defaultProxy: string;
    ignoreHosts: string[];
  }
  
  export class Socket extends GObject.Object implements DatagramBased, Initable {
    constructor(props?: SocketProps);
    
    blocking: boolean;
    broadcast: boolean;
    family: SocketFamily;
    fd: number;
    keepalive: boolean;
    listenBacklog: number;
    localAddress: SocketAddress;
    multicastLoopback: boolean;
    multicastTtl: number;
    protocol: SocketProtocol;
    remoteAddress: SocketAddress;
    timeout: number;
    ttl: number;
    type: SocketType;
    
    public accept(cancellable: Cancellable): Socket;
    public bind(address: SocketAddress, allowReuse: boolean): boolean;
    public checkConnectResult(): boolean;
    public close(): boolean;
    public conditionCheck(condition: GLib.IOCondition): GLib.IOCondition;
    public conditionTimedWait(condition: GLib.IOCondition, timeout: number, cancellable: Cancellable): boolean;
    public conditionWait(condition: GLib.IOCondition, cancellable: Cancellable): boolean;
    public connect(address: SocketAddress, cancellable: Cancellable): boolean;
    public connectionFactoryCreateConnection(): SocketConnection;
    public createSource(condition: GLib.IOCondition, cancellable: Cancellable): GLib.Source;
    public getAvailableBytes(): number;
    public getBlocking(): boolean;
    public getBroadcast(): boolean;
    public getCredentials(): Credentials;
    public getFamily(): SocketFamily;
    public getFd(): number;
    public getKeepalive(): boolean;
    public getListenBacklog(): number;
    public getLocalAddress(): SocketAddress;
    public getMulticastLoopback(): boolean;
    public getMulticastTtl(): number;
    public getOption(level: number, optname: number, value: number): boolean;
    public getProtocol(): SocketProtocol;
    public getRemoteAddress(): SocketAddress;
    public getSocketType(): SocketType;
    public getTimeout(): number;
    public getTtl(): number;
    public isClosed(): boolean;
    public isConnected(): boolean;
    public joinMulticastGroup(group: InetAddress, sourceSpecific: boolean, iface: string): boolean;
    public leaveMulticastGroup(group: InetAddress, sourceSpecific: boolean, iface: string): boolean;
    public listen(): boolean;
    public receive(buffer: number[], size: number, cancellable: Cancellable): number;
    public receiveFrom(address: SocketAddress, buffer: number[], size: number, cancellable: Cancellable): number;
    public receiveMessage(address: SocketAddress, vectors: InputVector[], numVectors: number, messages: SocketControlMessage[], numMessages: number, flags: number, cancellable: Cancellable): number;
    public receiveMessages(messages: InputMessage[], numMessages: number, flags: number, cancellable: Cancellable): number;
    public receiveWithBlocking(buffer: number[], size: number, blocking: boolean, cancellable: Cancellable): number;
    public send(buffer: number[], size: number, cancellable: Cancellable): number;
    public sendMessage(address: SocketAddress, vectors: OutputVector[], numVectors: number, messages: SocketControlMessage[], numMessages: number, flags: number, cancellable: Cancellable): number;
    public sendMessages(messages: OutputMessage[], numMessages: number, flags: number, cancellable: Cancellable): number;
    public sendTo(address: SocketAddress, buffer: number[], size: number, cancellable: Cancellable): number;
    public sendWithBlocking(buffer: number[], size: number, blocking: boolean, cancellable: Cancellable): number;
    public setBlocking(blocking: boolean): void;
    public setBroadcast(broadcast: boolean): void;
    public setKeepalive(keepalive: boolean): void;
    public setListenBacklog(backlog: number): void;
    public setMulticastLoopback(loopback: boolean): void;
    public setMulticastTtl(ttl: number): void;
    public setOption(level: number, optname: number, value: number): boolean;
    public setTimeout(timeout: number): void;
    public setTtl(ttl: number): void;
    public shutdown(shutdownRead: boolean, shutdownWrite: boolean): boolean;
    public speaksIpv4(): boolean;
  }
  
  interface SocketProps extends GObject.ObjectProps, DatagramBasedProps, InitableProps {
    blocking: boolean;
    broadcast: boolean;
    family: SocketFamily;
    fd: number;
    keepalive: boolean;
    listenBacklog: number;
    localAddress: SocketAddress;
    multicastLoopback: boolean;
    multicastTtl: number;
    protocol: SocketProtocol;
    remoteAddress: SocketAddress;
    timeout: number;
    ttl: number;
    type: SocketType;
  }
  
  export class SocketAddress extends GObject.Object implements SocketConnectable {
    constructor(props?: SocketAddressProps);
    
    family: SocketFamily;
    
    public getFamily(): SocketFamily;
    public getNativeSize(): number;
    public toNative(dest: any, destlen: number): boolean;
  }
  
  interface SocketAddressProps extends GObject.ObjectProps, SocketConnectableProps {
    family: SocketFamily;
  }
  
  export class SocketAddressEnumerator extends GObject.Object {
    constructor(props?: SocketAddressEnumeratorProps);
    
    public next(cancellable: Cancellable): SocketAddress;
    public nextAsync(cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public nextFinish(result: AsyncResult): SocketAddress;
  }
  
  interface SocketAddressEnumeratorProps extends GObject.ObjectProps {
    
  }
  
  export class SocketClient extends GObject.Object {
    constructor(props?: SocketClientProps);
    
    enableProxy: boolean;
    family: SocketFamily;
    localAddress: SocketAddress;
    protocol: SocketProtocol;
    proxyResolver: ProxyResolver;
    timeout: number;
    tls: boolean;
    tlsValidationFlags: TlsCertificateFlags;
    type: SocketType;
    
    public addApplicationProxy(protocol: string): void;
    public connect(connectable: SocketConnectable, cancellable: Cancellable): SocketConnection;
    public connectAsync(connectable: SocketConnectable, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public connectFinish(result: AsyncResult): SocketConnection;
    public connectToHost(hostAndPort: string, defaultPort: number, cancellable: Cancellable): SocketConnection;
    public connectToHostAsync(hostAndPort: string, defaultPort: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public connectToHostFinish(result: AsyncResult): SocketConnection;
    public connectToService(domain: string, service: string, cancellable: Cancellable): SocketConnection;
    public connectToServiceAsync(domain: string, service: string, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public connectToServiceFinish(result: AsyncResult): SocketConnection;
    public connectToUri(uri: string, defaultPort: number, cancellable: Cancellable): SocketConnection;
    public connectToUriAsync(uri: string, defaultPort: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public connectToUriFinish(result: AsyncResult): SocketConnection;
    public getEnableProxy(): boolean;
    public getFamily(): SocketFamily;
    public getLocalAddress(): SocketAddress;
    public getProtocol(): SocketProtocol;
    public getProxyResolver(): ProxyResolver;
    public getSocketType(): SocketType;
    public getTimeout(): number;
    public getTls(): boolean;
    public getTlsValidationFlags(): TlsCertificateFlags;
    public setEnableProxy(enable: boolean): void;
    public setFamily(family: SocketFamily): void;
    public setLocalAddress(address: SocketAddress): void;
    public setProtocol(protocol: SocketProtocol): void;
    public setProxyResolver(proxyResolver: ProxyResolver): void;
    public setSocketType(type: SocketType): void;
    public setTimeout(timeout: number): void;
    public setTls(tls: boolean): void;
    public setTlsValidationFlags(flags: TlsCertificateFlags): void;
    public event(event: SocketClientEvent, connectable: SocketConnectable, connection: IOStream): void;
  }
  
  interface SocketClientProps extends GObject.ObjectProps {
    enableProxy: boolean;
    family: SocketFamily;
    localAddress: SocketAddress;
    protocol: SocketProtocol;
    proxyResolver: ProxyResolver;
    timeout: number;
    tls: boolean;
    tlsValidationFlags: TlsCertificateFlags;
    type: SocketType;
  }
  
  export class SocketConnection extends IOStream {
    constructor(props?: SocketConnectionProps);
    
    socket: Socket;
    
    public connect(address: SocketAddress, cancellable: Cancellable): boolean;
    public connectAsync(address: SocketAddress, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public connectFinish(result: AsyncResult): boolean;
    public getLocalAddress(): SocketAddress;
    public getRemoteAddress(): SocketAddress;
    public getSocket(): Socket;
    public isConnected(): boolean;
    
    public static factoryLookupType(family: SocketFamily, type: SocketType, protocolId: number): GObject.Type;
    public static factoryRegisterType(gType: GObject.Type, family: SocketFamily, type: SocketType, protocol: number): void;
  }
  
  interface SocketConnectionProps extends IOStreamProps {
    socket: Socket;
  }
  
  export class SocketControlMessage extends GObject.Object {
    constructor(props?: SocketControlMessageProps);
    
    public getLevel(): number;
    public getMsgType(): number;
    public getSize(): number;
    public serialize(data: any): void;
    public getType(): number;
    
    public static deserialize(level: number, type: number, size: number, data: number[]): SocketControlMessage;
  }
  
  interface SocketControlMessageProps extends GObject.ObjectProps {
    
  }
  
  export class SocketListener extends GObject.Object {
    constructor(props?: SocketListenerProps);
    
    listenBacklog: number;
    
    public accept(sourceObject: GObject.Object, cancellable: Cancellable): SocketConnection;
    public acceptAsync(cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public acceptFinish(result: AsyncResult, sourceObject: GObject.Object): SocketConnection;
    public acceptSocket(sourceObject: GObject.Object, cancellable: Cancellable): Socket;
    public acceptSocketAsync(cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public acceptSocketFinish(result: AsyncResult, sourceObject: GObject.Object): Socket;
    public addAddress(address: SocketAddress, type: SocketType, protocol: SocketProtocol, sourceObject: GObject.Object, effectiveAddress: SocketAddress): boolean;
    public addAnyInetPort(sourceObject: GObject.Object): number;
    public addInetPort(_port: number, sourceObject: GObject.Object): boolean;
    public addSocket(socket: Socket, sourceObject: GObject.Object): boolean;
    public close(): void;
    public setBacklog(listenBacklog: number): void;
    public changed(): void;
    public event(event: SocketListenerEvent, socket: Socket): void;
  }
  
  interface SocketListenerProps extends GObject.ObjectProps {
    listenBacklog: number;
  }
  
  export class SocketService extends SocketListener {
    constructor(props?: SocketServiceProps);
    
    active: boolean;
    
    public isActive(): boolean;
    public start(): void;
    public stop(): void;
    public incoming(connection: SocketConnection, sourceObject: GObject.Object): boolean;
  }
  
  interface SocketServiceProps extends SocketListenerProps {
    active: boolean;
  }
  
  export class Subprocess extends GObject.Object implements Initable {
    constructor(props?: SubprocessProps);
    
    argv: string[];
    flags: SubprocessFlags;
    
    public communicate(stdinBuf: GLib.Bytes, cancellable: Cancellable, stdoutBuf: GLib.Bytes, stderrBuf: GLib.Bytes): boolean;
    public communicateAsync(stdinBuf: GLib.Bytes, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public communicateFinish(result: AsyncResult, stdoutBuf: GLib.Bytes, stderrBuf: GLib.Bytes): boolean;
    public communicateUtf8(stdinBuf: string, cancellable: Cancellable, stdoutBuf: string, stderrBuf: string): boolean;
    public communicateUtf8Async(stdinBuf: string, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public communicateUtf8Finish(result: AsyncResult, stdoutBuf: string, stderrBuf: string): boolean;
    public forceExit(): void;
    public getExitStatus(): number;
    public getIdentifier(): string;
    public getIfExited(): boolean;
    public getIfSignaled(): boolean;
    public getStatus(): number;
    public getStderrPipe(): InputStream;
    public getStdinPipe(): OutputStream;
    public getStdoutPipe(): InputStream;
    public getSuccessful(): boolean;
    public getTermSig(): number;
    public sendSignal(signalNum: number): void;
    public wait(cancellable: Cancellable): boolean;
    public waitAsync(cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public waitCheck(cancellable: Cancellable): boolean;
    public waitCheckAsync(cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public waitCheckFinish(result: AsyncResult): boolean;
    public waitFinish(result: AsyncResult): boolean;
  }
  
  interface SubprocessProps extends GObject.ObjectProps, InitableProps {
    argv: string[];
    flags: SubprocessFlags;
  }
  
  export class SubprocessLauncher extends GObject.Object {
    constructor(props?: SubprocessLauncherProps);
    
    flags: SubprocessFlags;
    
    public getenv(variable: string): string;
    public setChildSetup(childSetup: GLib.SpawnChildSetupFunc, userData: any, destroyNotify: GLib.DestroyNotify): void;
    public setCwd(cwd: string): void;
    public setEnviron(env: string[]): void;
    public setFlags(flags: SubprocessFlags): void;
    public setStderrFilePath(path: string): void;
    public setStdinFilePath(path: string): void;
    public setStdoutFilePath(path: string): void;
    public setenv(variable: string, value: string, overwrite: boolean): void;
    public spawn(error: GLib.Error, argv0: string, ...params: any[]): Subprocess;
    public spawnv(argv: string[]): Subprocess;
    public takeFd(sourceFd: number, targetFd: number): void;
    public takeStderrFd(fd: number): void;
    public takeStdinFd(fd: number): void;
    public takeStdoutFd(fd: number): void;
    public unsetenv(variable: string): void;
  }
  
  interface SubprocessLauncherProps extends GObject.ObjectProps {
    flags: SubprocessFlags;
  }
  
  export class Task extends GObject.Object implements AsyncResult {
    constructor(props?: TaskProps);
    
    completed: boolean;
    
    public attachSource(source: GLib.Source, callback: GLib.SourceFunc): void;
    public getCancellable(): Cancellable;
    public getCheckCancellable(): boolean;
    public getCompleted(): boolean;
    public getContext(): GLib.MainContext;
    public getPriority(): number;
    public getReturnOnCancel(): boolean;
    public getSourceObject(): GObject.Object;
    public getSourceTag(): any;
    public getTaskData(): any;
    public hadError(): boolean;
    public propagateBoolean(): boolean;
    public propagateInt(): number;
    public propagatePointer(): any;
    public returnBoolean(result: boolean): void;
    public returnError(error: GLib.Error): void;
    public returnErrorIfCancelled(): boolean;
    public returnInt(result: number): void;
    public returnNewError(domain: GLib.Quark, code: number, format: string, ...params: any[]): void;
    public returnPointer(result: any, resultDestroy: GLib.DestroyNotify): void;
    public runInThread(taskFunc: TaskThreadFunc): void;
    public runInThreadSync(taskFunc: TaskThreadFunc): void;
    public setCheckCancellable(checkCancellable: boolean): void;
    public setPriority(priority: number): void;
    public setReturnOnCancel(returnOnCancel: boolean): boolean;
    public setSourceTag(sourceTag: any): void;
    public setTaskData(taskData: any, taskDataDestroy: GLib.DestroyNotify): void;
    
    public static isValid(result: AsyncResult, sourceObject: GObject.Object): boolean;
    public static reportError(sourceObject: GObject.Object, callback: AsyncReadyCallback, callbackData: any, sourceTag: any, error: GLib.Error): void;
    public static reportNewError(sourceObject: GObject.Object, callback: AsyncReadyCallback, callbackData: any, sourceTag: any, domain: GLib.Quark, code: number, format: string, ...params: any[]): void;
  }
  
  interface TaskProps extends GObject.ObjectProps, AsyncResultProps {
    completed: boolean;
  }
  
  export class TcpConnection extends SocketConnection {
    constructor(props?: TcpConnectionProps);
    
    gracefulDisconnect: boolean;
    
    public getGracefulDisconnect(): boolean;
    public setGracefulDisconnect(gracefulDisconnect: boolean): void;
  }
  
  interface TcpConnectionProps extends SocketConnectionProps {
    gracefulDisconnect: boolean;
  }
  
  export class TcpWrapperConnection extends TcpConnection {
    constructor(props?: TcpWrapperConnectionProps);
    
    baseIoStream: IOStream;
    
    public getBaseIoStream(): IOStream;
  }
  
  interface TcpWrapperConnectionProps extends TcpConnectionProps {
    baseIoStream: IOStream;
  }
  
  export class TestDBus extends GObject.Object {
    constructor(props?: TestDBusProps);
    
    flags: TestDBusFlags;
    
    public addServiceDir(path: string): void;
    public down(): void;
    public getBusAddress(): string;
    public getFlags(): TestDBusFlags;
    public stop(): void;
    public up(): void;
    
    public static unset(): void;
  }
  
  interface TestDBusProps extends GObject.ObjectProps {
    flags: TestDBusFlags;
  }
  
  export class ThemedIcon extends GObject.Object implements Icon {
    constructor(props?: ThemedIconProps);
    
    name: string;
    names: string[];
    useDefaultFallbacks: boolean;
    
    public appendName(iconname: string): void;
    public getNames(): string[];
    public prependName(iconname: string): void;
  }
  
  interface ThemedIconProps extends GObject.ObjectProps, IconProps {
    name: string;
    names: string[];
    useDefaultFallbacks: boolean;
  }
  
  export class ThreadedSocketService extends SocketService {
    constructor(props?: ThreadedSocketServiceProps);
    
    maxThreads: number;
    
    public run(connection: SocketConnection, sourceObject: GObject.Object): boolean;
  }
  
  interface ThreadedSocketServiceProps extends SocketServiceProps {
    maxThreads: number;
  }
  
  export class TlsCertificate extends GObject.Object {
    constructor(props?: TlsCertificateProps);
    
    certificate: any[];
    certificatePem: string;
    issuer: TlsCertificate;
    privateKey: any[];
    privateKeyPem: string;
    
    public getIssuer(): TlsCertificate;
    public isSame(certTwo: TlsCertificate): boolean;
    public verify(identity: SocketConnectable, trustedCa: TlsCertificate): TlsCertificateFlags;
    
    public static listNewFromFile(file: string): GLib.List;
  }
  
  interface TlsCertificateProps extends GObject.ObjectProps {
    certificate: any[];
    certificatePem: string;
    issuer: TlsCertificate;
    privateKey: any[];
    privateKeyPem: string;
  }
  
  export class TlsConnection extends IOStream {
    constructor(props?: TlsConnectionProps);
    
    baseIoStream: IOStream;
    certificate: TlsCertificate;
    database: TlsDatabase;
    interaction: TlsInteraction;
    peerCertificate: TlsCertificate;
    peerCertificateErrors: TlsCertificateFlags;
    rehandshakeMode: TlsRehandshakeMode;
    requireCloseNotify: boolean;
    useSystemCertdb: boolean;
    
    public emitAcceptCertificate(peerCert: TlsCertificate, errors: TlsCertificateFlags): boolean;
    public getCertificate(): TlsCertificate;
    public getDatabase(): TlsDatabase;
    public getInteraction(): TlsInteraction;
    public getPeerCertificate(): TlsCertificate;
    public getPeerCertificateErrors(): TlsCertificateFlags;
    public getRehandshakeMode(): TlsRehandshakeMode;
    public getRequireCloseNotify(): boolean;
    public getUseSystemCertdb(): boolean;
    public handshake(cancellable: Cancellable): boolean;
    public handshakeAsync(ioPriority: number, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public handshakeFinish(result: AsyncResult): boolean;
    public setCertificate(certificate: TlsCertificate): void;
    public setDatabase(database: TlsDatabase): void;
    public setInteraction(interaction: TlsInteraction): void;
    public setRehandshakeMode(mode: TlsRehandshakeMode): void;
    public setRequireCloseNotify(requireCloseNotify: boolean): void;
    public setUseSystemCertdb(useSystemCertdb: boolean): void;
    public acceptCertificate(peerCert: TlsCertificate, errors: TlsCertificateFlags): boolean;
  }
  
  interface TlsConnectionProps extends IOStreamProps {
    baseIoStream: IOStream;
    certificate: TlsCertificate;
    database: TlsDatabase;
    interaction: TlsInteraction;
    peerCertificate: TlsCertificate;
    peerCertificateErrors: TlsCertificateFlags;
    rehandshakeMode: TlsRehandshakeMode;
    requireCloseNotify: boolean;
    useSystemCertdb: boolean;
  }
  
  export class TlsDatabase extends GObject.Object {
    constructor(props?: TlsDatabaseProps);
    
    public createCertificateHandle(certificate: TlsCertificate): string;
    public lookupCertificateForHandle(handle: string, interaction: TlsInteraction, flags: TlsDatabaseLookupFlags, cancellable: Cancellable): TlsCertificate;
    public lookupCertificateForHandleAsync(handle: string, interaction: TlsInteraction, flags: TlsDatabaseLookupFlags, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public lookupCertificateForHandleFinish(result: AsyncResult): TlsCertificate;
    public lookupCertificateIssuer(certificate: TlsCertificate, interaction: TlsInteraction, flags: TlsDatabaseLookupFlags, cancellable: Cancellable): TlsCertificate;
    public lookupCertificateIssuerAsync(certificate: TlsCertificate, interaction: TlsInteraction, flags: TlsDatabaseLookupFlags, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public lookupCertificateIssuerFinish(result: AsyncResult): TlsCertificate;
    public lookupCertificatesIssuedBy(issuerRawDn: number[], interaction: TlsInteraction, flags: TlsDatabaseLookupFlags, cancellable: Cancellable): GLib.List;
    public lookupCertificatesIssuedByAsync(issuerRawDn: number[], interaction: TlsInteraction, flags: TlsDatabaseLookupFlags, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public lookupCertificatesIssuedByFinish(result: AsyncResult): GLib.List;
    public verifyChain(chain: TlsCertificate, purpose: string, identity: SocketConnectable, interaction: TlsInteraction, flags: TlsDatabaseVerifyFlags, cancellable: Cancellable): TlsCertificateFlags;
    public verifyChainAsync(chain: TlsCertificate, purpose: string, identity: SocketConnectable, interaction: TlsInteraction, flags: TlsDatabaseVerifyFlags, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public verifyChainFinish(result: AsyncResult): TlsCertificateFlags;
  }
  
  interface TlsDatabaseProps extends GObject.ObjectProps {
    
  }
  
  export class TlsInteraction extends GObject.Object {
    constructor(props?: TlsInteractionProps);
    
    public askPassword(password: TlsPassword, cancellable: Cancellable): TlsInteractionResult;
    public askPasswordAsync(password: TlsPassword, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public askPasswordFinish(result: AsyncResult): TlsInteractionResult;
    public invokeAskPassword(password: TlsPassword, cancellable: Cancellable): TlsInteractionResult;
    public invokeRequestCertificate(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable: Cancellable): TlsInteractionResult;
    public requestCertificate(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable: Cancellable): TlsInteractionResult;
    public requestCertificateAsync(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public requestCertificateFinish(result: AsyncResult): TlsInteractionResult;
  }
  
  interface TlsInteractionProps extends GObject.ObjectProps {
    
  }
  
  export class TlsPassword extends GObject.Object {
    constructor(props?: TlsPasswordProps);
    
    description: string;
    flags: TlsPasswordFlags;
    warning: string;
    
    public getDescription(): string;
    public getFlags(): TlsPasswordFlags;
    public getValue(length: number): number;
    public getWarning(): string;
    public setDescription(description: string): void;
    public setFlags(flags: TlsPasswordFlags): void;
    public setValue(value: number, length: number): void;
    public setValueFull(value: number, length: number, destroy: GLib.DestroyNotify): void;
    public setWarning(warning: string): void;
    public getDefaultWarning(): string;
  }
  
  interface TlsPasswordProps extends GObject.ObjectProps {
    description: string;
    flags: TlsPasswordFlags;
    warning: string;
  }
  
  export class UnixConnection extends SocketConnection {
    constructor(props?: UnixConnectionProps);
    
    public receiveCredentials(cancellable: Cancellable): Credentials;
    public receiveCredentialsAsync(cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public receiveCredentialsFinish(result: AsyncResult): Credentials;
    public receiveFd(cancellable: Cancellable): number;
    public sendCredentials(cancellable: Cancellable): boolean;
    public sendCredentialsAsync(cancellable: Cancellable, callback: AsyncReadyCallback, userData: any): void;
    public sendCredentialsFinish(result: AsyncResult): boolean;
    public sendFd(fd: number, cancellable: Cancellable): boolean;
  }
  
  interface UnixConnectionProps extends SocketConnectionProps {
    
  }
  
  export class UnixCredentialsMessage extends SocketControlMessage {
    constructor(props?: UnixCredentialsMessageProps);
    
    credentials: Credentials;
    
    public getCredentials(): Credentials;
    
    public static isSupported(): boolean;
  }
  
  interface UnixCredentialsMessageProps extends SocketControlMessageProps {
    credentials: Credentials;
  }
  
  export class UnixFDList extends GObject.Object {
    constructor(props?: UnixFDListProps);
    
    public append(fd: number): number;
    public get(index_: number): number;
    public getLength(): number;
    public peekFds(length: number): number[];
    public stealFds(length: number): number[];
  }
  
  interface UnixFDListProps extends GObject.ObjectProps {
    
  }
  
  export class UnixFDMessage extends SocketControlMessage {
    constructor(props?: UnixFDMessageProps);
    
    fdList: UnixFDList;
    
    public appendFd(fd: number): boolean;
    public getFdList(): UnixFDList;
    public stealFds(length: number): number[];
  }
  
  interface UnixFDMessageProps extends SocketControlMessageProps {
    fdList: UnixFDList;
  }
  
  export class UnixInputStream extends InputStream implements FileDescriptorBased, PollableInputStream {
    constructor(props?: UnixInputStreamProps);
    
    closeFd: boolean;
    fd: number;
    
    public getCloseFd(): boolean;
    public getFd(): number;
    public setCloseFd(closeFd: boolean): void;
  }
  
  interface UnixInputStreamProps extends InputStreamProps, FileDescriptorBasedProps, PollableInputStreamProps {
    closeFd: boolean;
    fd: number;
  }
  
  export class UnixMountMonitor extends GObject.Object {
    constructor(props?: UnixMountMonitorProps);
    
    public setRateLimit(limitMsec: number): void;
    
    public static get(): UnixMountMonitor;
  }
  
  interface UnixMountMonitorProps extends GObject.ObjectProps {
    
  }
  
  export class UnixOutputStream extends OutputStream implements FileDescriptorBased, PollableOutputStream {
    constructor(props?: UnixOutputStreamProps);
    
    closeFd: boolean;
    fd: number;
    
    public getCloseFd(): boolean;
    public getFd(): number;
    public setCloseFd(closeFd: boolean): void;
  }
  
  interface UnixOutputStreamProps extends OutputStreamProps, FileDescriptorBasedProps, PollableOutputStreamProps {
    closeFd: boolean;
    fd: number;
  }
  
  export class UnixSocketAddress extends SocketAddress implements SocketConnectable {
    constructor(props?: UnixSocketAddressProps);
    
    abstract: boolean;
    addressType: UnixSocketAddressType;
    path: string;
    pathAsArray: any[];
    
    public getAddressType(): UnixSocketAddressType;
    public getIsAbstract(): boolean;
    public getPath(): string;
    public getPathLen(): number;
    
    public static abstractNamesSupported(): boolean;
  }
  
  interface UnixSocketAddressProps extends SocketAddressProps, SocketConnectableProps {
    abstract: boolean;
    addressType: UnixSocketAddressType;
    path: string;
    pathAsArray: any[];
  }
  
  export class Vfs extends GObject.Object {
    constructor(props?: VfsProps);
    
    public getFileForPath(path: string): File;
    public getFileForUri(uri: string): File;
    public getSupportedUriSchemes(): string[];
    public isActive(): boolean;
    public parseName(parseName: string): File;
    public registerUriScheme(scheme: string, uriFunc: VfsFileLookupFunc, uriData: any, uriDestroy: GLib.DestroyNotify, parseNameFunc: VfsFileLookupFunc, parseNameData: any, parseNameDestroy: GLib.DestroyNotify): boolean;
    public unregisterUriScheme(scheme: string): boolean;
    public addWritableNamespaces(list: FileAttributeInfoList): void;
    public deserializeIcon(value: GLib.Variant): Icon;
    public localFileAddInfo(filename: string, device: number, attributeMatcher: FileAttributeMatcher, info: FileInfo, cancellable: Cancellable, extraData: any, freeExtraData: GLib.DestroyNotify): void;
    public localFileMoved(source: string, dest: string): void;
    public localFileRemoved(filename: string): void;
    public localFileSetAttributes(filename: string, info: FileInfo, flags: FileQueryInfoFlags, cancellable: Cancellable): boolean;
    
    public static getDefault(): Vfs;
    public static getLocal(): Vfs;
  }
  
  interface VfsProps extends GObject.ObjectProps {
    
  }
  
  export class VolumeMonitor extends GObject.Object {
    constructor(props?: VolumeMonitorProps);
    
    public getConnectedDrives(): GLib.List;
    public getMountForUuid(uuid: string): Mount;
    public getMounts(): GLib.List;
    public getVolumeForUuid(uuid: string): Volume;
    public getVolumes(): GLib.List;
    public driveChanged(drive: Drive): void;
    public driveConnected(drive: Drive): void;
    public driveDisconnected(drive: Drive): void;
    public driveEjectButton(drive: Drive): void;
    public driveStopButton(drive: Drive): void;
    public mountAdded(mount: Mount): void;
    public mountChanged(mount: Mount): void;
    public mountPreUnmount(mount: Mount): void;
    public mountRemoved(mount: Mount): void;
    public volumeAdded(volume: Volume): void;
    public volumeChanged(volume: Volume): void;
    public volumeRemoved(volume: Volume): void;
    
    public static adoptOrphanMount(mount: Mount): Volume;
    public static get(): VolumeMonitor;
  }
  
  interface VolumeMonitorProps extends GObject.ObjectProps {
    
  }
  
  export class ZlibCompressor extends GObject.Object implements Converter {
    constructor(props?: ZlibCompressorProps);
    
    fileInfo: FileInfo;
    format: ZlibCompressorFormat;
    level: number;
    
    public getFileInfo(): FileInfo;
    public setFileInfo(fileInfo: FileInfo): void;
  }
  
  interface ZlibCompressorProps extends GObject.ObjectProps, ConverterProps {
    fileInfo: FileInfo;
    format: ZlibCompressorFormat;
    level: number;
  }
  
  export class ZlibDecompressor extends GObject.Object implements Converter {
    constructor(props?: ZlibDecompressorProps);
    
    fileInfo: FileInfo;
    format: ZlibCompressorFormat;
    
    public getFileInfo(): FileInfo;
  }
  
  interface ZlibDecompressorProps extends GObject.ObjectProps, ConverterProps {
    fileInfo: FileInfo;
    format: ZlibCompressorFormat;
  }

}