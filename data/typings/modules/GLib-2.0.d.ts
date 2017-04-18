declare module "GLib" {

  export type DateDay = number;
  
  export type DateYear = number;
  
  export type MutexLocker = any;
  
  export type Pid = number;
  
  export type Quark = number;
  
  export type Strv = any;
  
  export type Time = number;
  
  export type TimeSpan = number;
  
  export type Type = number;
  
  export const ANALYZER_ANALYZING: number;
  
  export const ASCII_DTOSTR_BUF_SIZE: number;
  
  export const BIG_ENDIAN: number;
  
  export const CSET_A_2_Z: string;
  
  export const CSET_DIGITS: string;
  
  export const CSET_a_2_z: string;
  
  export const DATALIST_FLAGS_MASK: number;
  
  export const DATE_BAD_DAY: number;
  
  export const DATE_BAD_JULIAN: number;
  
  export const DATE_BAD_YEAR: number;
  
  export const DIR_SEPARATOR: number;
  
  export const DIR_SEPARATOR_S: string;
  
  export const E: number;
  
  export const GINT16_FORMAT: string;
  
  export const GINT16_MODIFIER: string;
  
  export const GINT32_FORMAT: string;
  
  export const GINT32_MODIFIER: string;
  
  export const GINT64_FORMAT: string;
  
  export const GINT64_MODIFIER: string;
  
  export const GINTPTR_FORMAT: string;
  
  export const GINTPTR_MODIFIER: string;
  
  export const GNUC_FUNCTION: string;
  
  export const GNUC_PRETTY_FUNCTION: string;
  
  export const GSIZE_FORMAT: string;
  
  export const GSIZE_MODIFIER: string;
  
  export const GSSIZE_FORMAT: string;
  
  export const GSSIZE_MODIFIER: string;
  
  export const GUINT16_FORMAT: string;
  
  export const GUINT32_FORMAT: string;
  
  export const GUINT64_FORMAT: string;
  
  export const GUINTPTR_FORMAT: string;
  
  export const HAVE_GINT64: number;
  
  export const HAVE_GNUC_VARARGS: number;
  
  export const HAVE_GNUC_VISIBILITY: number;
  
  export const HAVE_GROWING_STACK: number;
  
  export const HAVE_ISO_VARARGS: number;
  
  export const HOOK_FLAG_USER_SHIFT: number;
  
  export const IEEE754_DOUBLE_BIAS: number;
  
  export const IEEE754_FLOAT_BIAS: number;
  
  export const KEY_FILE_DESKTOP_GROUP: string;
  
  export const KEY_FILE_DESKTOP_KEY_ACTIONS: string;
  
  export const KEY_FILE_DESKTOP_KEY_CATEGORIES: string;
  
  export const KEY_FILE_DESKTOP_KEY_COMMENT: string;
  
  export const KEY_FILE_DESKTOP_KEY_DBUS_ACTIVATABLE: string;
  
  export const KEY_FILE_DESKTOP_KEY_EXEC: string;
  
  export const KEY_FILE_DESKTOP_KEY_GENERIC_NAME: string;
  
  export const KEY_FILE_DESKTOP_KEY_HIDDEN: string;
  
  export const KEY_FILE_DESKTOP_KEY_ICON: string;
  
  export const KEY_FILE_DESKTOP_KEY_MIME_TYPE: string;
  
  export const KEY_FILE_DESKTOP_KEY_NAME: string;
  
  export const KEY_FILE_DESKTOP_KEY_NOT_SHOW_IN: string;
  
  export const KEY_FILE_DESKTOP_KEY_NO_DISPLAY: string;
  
  export const KEY_FILE_DESKTOP_KEY_ONLY_SHOW_IN: string;
  
  export const KEY_FILE_DESKTOP_KEY_PATH: string;
  
  export const KEY_FILE_DESKTOP_KEY_STARTUP_NOTIFY: string;
  
  export const KEY_FILE_DESKTOP_KEY_STARTUP_WM_CLASS: string;
  
  export const KEY_FILE_DESKTOP_KEY_TERMINAL: string;
  
  export const KEY_FILE_DESKTOP_KEY_TRY_EXEC: string;
  
  export const KEY_FILE_DESKTOP_KEY_TYPE: string;
  
  export const KEY_FILE_DESKTOP_KEY_URL: string;
  
  export const KEY_FILE_DESKTOP_KEY_VERSION: string;
  
  export const KEY_FILE_DESKTOP_TYPE_APPLICATION: string;
  
  export const KEY_FILE_DESKTOP_TYPE_DIRECTORY: string;
  
  export const KEY_FILE_DESKTOP_TYPE_LINK: string;
  
  export const LITTLE_ENDIAN: number;
  
  export const LN10: number;
  
  export const LN2: number;
  
  export const LOG_2_BASE_10: number;
  
  export const LOG_DOMAIN: string;
  
  export const LOG_FATAL_MASK: number;
  
  export const LOG_LEVEL_USER_SHIFT: number;
  
  export const MAJOR_VERSION: number;
  
  export const MAXINT16: number;
  
  export const MAXINT32: number;
  
  export const MAXINT64: number;
  
  export const MAXINT8: number;
  
  export const MAXUINT16: number;
  
  export const MAXUINT32: number;
  
  export const MAXUINT64: number;
  
  export const MAXUINT8: number;
  
  export const MICRO_VERSION: number;
  
  export const MININT16: number;
  
  export const MININT32: number;
  
  export const MININT64: number;
  
  export const MININT8: number;
  
  export const MINOR_VERSION: number;
  
  export const MODULE_SUFFIX: string;
  
  export const OPTION_REMAINING: string;
  
  export const PDP_ENDIAN: number;
  
  export const PI: number;
  
  export const PID_FORMAT: string;
  
  export const PI_2: number;
  
  export const PI_4: number;
  
  export const POLLFD_FORMAT: string;
  
  export const PRIORITY_DEFAULT: number;
  
  export const PRIORITY_DEFAULT_IDLE: number;
  
  export const PRIORITY_HIGH: number;
  
  export const PRIORITY_HIGH_IDLE: number;
  
  export const PRIORITY_LOW: number;
  
  export const SEARCHPATH_SEPARATOR: number;
  
  export const SEARCHPATH_SEPARATOR_S: string;
  
  export const SIZEOF_LONG: number;
  
  export const SIZEOF_SIZE_T: number;
  
  export const SIZEOF_SSIZE_T: number;
  
  export const SIZEOF_VOID_P: number;
  
  export const SOURCE_CONTINUE: boolean;
  
  export const SOURCE_REMOVE: boolean;
  
  export const SQRT2: number;
  
  export const STR_DELIMITERS: string;
  
  export const SYSDEF_AF_INET: number;
  
  export const SYSDEF_AF_INET6: number;
  
  export const SYSDEF_AF_UNIX: number;
  
  export const SYSDEF_MSG_DONTROUTE: number;
  
  export const SYSDEF_MSG_OOB: number;
  
  export const SYSDEF_MSG_PEEK: number;
  
  export const TIME_SPAN_DAY: number;
  
  export const TIME_SPAN_HOUR: number;
  
  export const TIME_SPAN_MILLISECOND: number;
  
  export const TIME_SPAN_MINUTE: number;
  
  export const TIME_SPAN_SECOND: number;
  
  export const UNICHAR_MAX_DECOMPOSITION_LENGTH: number;
  
  export const URI_RESERVED_CHARS_GENERIC_DELIMITERS: string;
  
  export const URI_RESERVED_CHARS_SUBCOMPONENT_DELIMITERS: string;
  
  export const USEC_PER_SEC: number;
  
  export const VA_COPY_AS_ARRAY: number;
  
  export const VERSION_MIN_REQUIRED: number;
  
  export const WIN32_MSG_HANDLE: number;
  
  export function access(filename: string, mode: number): number;
  
  export function asciiDigitValue(_c: string): number;
  
  export function asciiDtostr(buffer: string, bufLen: number, _d: number): string;
  
  export function asciiFormatd(buffer: string, bufLen: number, format: string, _d: number): string;
  
  export function asciiStrcasecmp(s1: string, s2: string): number;
  
  export function asciiStrdown(str: string, len: number): string;
  
  export function asciiStrncasecmp(s1: string, s2: string, _n: number): number;
  
  export function asciiStrtod(nptr: string, endptr: string): number;
  
  export function asciiStrtoll(nptr: string, endptr: string, base: number): number;
  
  export function asciiStrtoull(nptr: string, endptr: string, base: number): number;
  
  export function asciiStrup(str: string, len: number): string;
  
  export function asciiTolower(_c: string): string;
  
  export function asciiToupper(_c: string): string;
  
  export function asciiXdigitValue(_c: string): number;
  
  export function assertWarning(logDomain: string, file: string, line: number, prettyFunction: string, expression: string): void;
  
  export function assertionMessage(domain: string, file: string, line: number, func: string, message: string): void;
  
  export function assertionMessageCmpnum(domain: string, file: string, line: number, func: string, expr: string, arg1: number, cmp: string, arg2: number, numtype: string): void;
  
  export function assertionMessageCmpstr(domain: string, file: string, line: number, func: string, expr: string, arg1: string, cmp: string, arg2: string): void;
  
  export function assertionMessageError(domain: string, file: string, line: number, func: string, expr: string, error: Error, errorDomain: Quark, errorCode: number): void;
  
  export function assertionMessageExpr(domain: string, file: string, line: number, func: string, expr: string): void;
  
  export function atexit(func: VoidFunc): void;
  
  export function atomicIntAdd(atomic: number, _val: number): number;
  
  export function atomicIntAnd(atomic: number, _val: number): number;
  
  export function atomicIntCompareAndExchange(atomic: number, oldval: number, newval: number): boolean;
  
  export function atomicIntDecAndTest(atomic: number): boolean;
  
  export function atomicIntExchangeAndAdd(atomic: number, _val: number): number;
  
  export function atomicIntGet(atomic: number): number;
  
  export function atomicIntInc(atomic: number): void;
  
  export function atomicIntOr(atomic: number, _val: number): number;
  
  export function atomicIntSet(atomic: number, newval: number): void;
  
  export function atomicIntXor(atomic: number, _val: number): number;
  
  export function atomicPointerAdd(atomic: any, _val: number): number;
  
  export function atomicPointerAnd(atomic: any, _val: number): number;
  
  export function atomicPointerCompareAndExchange(atomic: any, oldval: any, newval: any): boolean;
  
  export function atomicPointerGet(atomic: any): any;
  
  export function atomicPointerOr(atomic: any, _val: number): number;
  
  export function atomicPointerSet(atomic: any, newval: any): void;
  
  export function atomicPointerXor(atomic: any, _val: number): number;
  
  export function base64Decode(text: string, outLen: number): number[];
  
  export function base64DecodeInplace(text: number[], outLen: number): number;
  
  export function base64DecodeStep(_in: number[], len: number, out: number[], state: number, save: number): number;
  
  export function base64Encode(data: number[], len: number): string;
  
  export function base64EncodeClose(breakLines: boolean, out: number[], state: number, save: number): number;
  
  export function base64EncodeStep(_in: number[], len: number, breakLines: boolean, out: number[], state: number, save: number): number;
  
  export function basename(fileName: string): string;
  
  export function bitLock(address: number, lockBit: number): void;
  
  export function bitNthLsf(mask: number, nthBit: number): number;
  
  export function bitNthMsf(mask: number, nthBit: number): number;
  
  export function bitStorage(number: number): number;
  
  export function bitTrylock(address: number, lockBit: number): boolean;
  
  export function bitUnlock(address: number, lockBit: number): void;
  
  export function bookmarkFileErrorQuark(): Quark;
  
  export function buildFilename(firstElement: string, ...params: any[]): string;
  
  export function buildFilenamev(args: string[]): string;
  
  export function buildPath(separator: string, firstElement: string, ...params: any[]): string;
  
  export function buildPathv(separator: string, args: string[]): string;
  
  export function byteArrayFree(array: number[], freeSegment: boolean): number;
  
  export function byteArrayFreeToBytes(array: number[]): Bytes;
  
  export function byteArrayNew(): number[];
  
  export function byteArrayNewTake(data: number[], len: number): number[];
  
  export function byteArrayUnref(array: number[]): void;
  
  export function chdir(path: string): number;
  
  export function checkVersion(requiredMajor: number, requiredMinor: number, requiredMicro: number): string;
  
  export function checksumTypeGetLength(checksumType: ChecksumType): number;
  
  export function childWatchAdd(pid: Pid, _function: ChildWatchFunc, data: any): number;
  
  export function childWatchAddFull(priority: number, pid: Pid, _function: ChildWatchFunc, data: any, notify: DestroyNotify): number;
  
  export function childWatchSourceNew(pid: Pid): Source;
  
  export function clearError(): void;
  
  export function clearPointer(pp: any, destroy: DestroyNotify): void;
  
  export function close(fd: number): boolean;
  
  export function computeChecksumForBytes(checksumType: ChecksumType, data: Bytes): string;
  
  export function computeChecksumForData(checksumType: ChecksumType, data: number[], length: number): string;
  
  export function computeChecksumForString(checksumType: ChecksumType, str: string, length: number): string;
  
  export function computeHmacForBytes(digestType: ChecksumType, key: Bytes, data: Bytes): string;
  
  export function computeHmacForData(digestType: ChecksumType, key: number[], keyLen: number, data: number[], length: number): string;
  
  export function computeHmacForString(digestType: ChecksumType, key: number[], keyLen: number, str: string, length: number): string;
  
  export function convert(str: string, len: number, toCodeset: string, fromCodeset: string, bytesRead: number, bytesWritten: number): string;
  
  export function convertErrorQuark(): Quark;
  
  export function convertWithFallback(str: string, len: number, toCodeset: string, fromCodeset: string, fallback: string, bytesRead: number, bytesWritten: number): string;
  
  export function convertWithIconv(str: string, len: number, converter: IConv, bytesRead: number, bytesWritten: number): string;
  
  export function datalistClear(datalist: Data): void;
  
  export function datalistForeach(datalist: Data, func: DataForeachFunc, userData: any): void;
  
  export function datalistGetData(datalist: Data, key: string): any;
  
  export function datalistGetFlags(datalist: Data): number;
  
  export function datalistIdDupData(datalist: Data, keyId: Quark, dupFunc: DuplicateFunc, userData: any): any;
  
  export function datalistIdGetData(datalist: Data, keyId: Quark): any;
  
  export function datalistIdRemoveNoNotify(datalist: Data, keyId: Quark): any;
  
  export function datalistIdReplaceData(datalist: Data, keyId: Quark, oldval: any, newval: any, destroy: DestroyNotify, oldDestroy: DestroyNotify): boolean;
  
  export function datalistIdSetDataFull(datalist: Data, keyId: Quark, data: any, destroyFunc: DestroyNotify): void;
  
  export function datalistInit(datalist: Data): void;
  
  export function datalistSetFlags(datalist: Data, flags: number): void;
  
  export function datalistUnsetFlags(datalist: Data, flags: number): void;
  
  export function datasetDestroy(datasetLocation: any): void;
  
  export function datasetForeach(datasetLocation: any, func: DataForeachFunc, userData: any): void;
  
  export function datasetIdGetData(datasetLocation: any, keyId: Quark): any;
  
  export function datasetIdRemoveNoNotify(datasetLocation: any, keyId: Quark): any;
  
  export function datasetIdSetDataFull(datasetLocation: any, keyId: Quark, data: any, destroyFunc: DestroyNotify): void;
  
  export function dateGetDaysInMonth(month: DateMonth, year: DateYear): number;
  
  export function dateGetMondayWeeksInYear(year: DateYear): number;
  
  export function dateGetSundayWeeksInYear(year: DateYear): number;
  
  export function dateIsLeapYear(year: DateYear): boolean;
  
  export function dateStrftime(_s: string, slen: number, format: string, date: Date): number;
  
  export function dateTimeCompare(dt1: any, dt2: any): number;
  
  export function dateTimeEqual(dt1: any, dt2: any): boolean;
  
  export function dateTimeHash(datetime: any): number;
  
  export function dateValidDay(day: DateDay): boolean;
  
  export function dateValidDmy(day: DateDay, month: DateMonth, year: DateYear): boolean;
  
  export function dateValidJulian(julianDate: number): boolean;
  
  export function dateValidMonth(month: DateMonth): boolean;
  
  export function dateValidWeekday(weekday: DateWeekday): boolean;
  
  export function dateValidYear(year: DateYear): boolean;
  
  export function dcgettext(domain: string, msgid: string, category: number): string;
  
  export function dgettext(domain: string, msgid: string): string;
  
  export function dirMakeTmp(tmpl: string): string;
  
  export function directEqual(v1: any, v2: any): boolean;
  
  export function directHash(v: any): number;
  
  export function dngettext(domain: string, msgid: string, msgidPlural: string, _n: number): string;
  
  export function doubleEqual(v1: any, v2: any): boolean;
  
  export function doubleHash(v: any): number;
  
  export function dpgettext(domain: string, msgctxtid: string, msgidoffset: number): string;
  
  export function dpgettext2(domain: string, context: string, msgid: string): string;
  
  export function environGetenv(envp: string[], variable: string): string;
  
  export function environSetenv(envp: string[], variable: string, value: string, overwrite: boolean): string[];
  
  export function environUnsetenv(envp: string[], variable: string): string[];
  
  export function fileErrorFromErrno(errNo: number): FileError;
  
  export function fileErrorQuark(): Quark;
  
  export function fileGetContents(filename: string, contents: number[], length: number): boolean;
  
  export function fileOpenTmp(tmpl: string, nameUsed: string): number;
  
  export function fileReadLink(filename: string): string;
  
  export function fileSetContents(filename: string, contents: number[], length: number): boolean;
  
  export function fileTest(filename: string, test: FileTest): boolean;
  
  export function filenameDisplayBasename(filename: string): string;
  
  export function filenameDisplayName(filename: string): string;
  
  export function filenameFromUri(uri: string, hostname: string): string;
  
  export function filenameFromUtf8(utf8string: string, len: number, bytesRead: number, bytesWritten: number): number[];
  
  export function filenameToUri(filename: string, hostname: string): string;
  
  export function filenameToUtf8(opsysstring: string, len: number, bytesRead: number, bytesWritten: number): string;
  
  export function findProgramInPath(program: string): string;
  
  export function formatSize(size: number): string;
  
  export function formatSizeForDisplay(size: number): string;
  
  export function formatSizeFull(size: number, flags: FormatSizeFlags): string;
  
  export function fprintf(file: any, format: string, ...params: any[]): number;
  
  export function free(mem: any): void;
  
  export function getApplicationName(): string;
  
  export function getCharset(charset: string): boolean;
  
  export function getCodeset(): string;
  
  export function getCurrentDir(): string;
  
  export function getCurrentTime(result: TimeVal): void;
  
  export function getEnviron(): string[];
  
  export function getFilenameCharsets(charsets: string): boolean;
  
  export function getHomeDir(): string;
  
  export function getHostName(): string;
  
  export function getLanguageNames(): string[];
  
  export function getLocaleVariants(locale: string): string[];
  
  export function getMonotonicTime(): number;
  
  export function getNumProcessors(): number;
  
  export function getPrgname(): string;
  
  export function getRealName(): string;
  
  export function getRealTime(): number;
  
  export function getSystemConfigDirs(): string[];
  
  export function getSystemDataDirs(): string[];
  
  export function getTmpDir(): string;
  
  export function getUserCacheDir(): string;
  
  export function getUserConfigDir(): string;
  
  export function getUserDataDir(): string;
  
  export function getUserName(): string;
  
  export function getUserRuntimeDir(): string;
  
  export function getUserSpecialDir(directory: UserDirectory): string;
  
  export function getenv(variable: string): string;
  
  export function hashTableAdd(hashTable: GLib.HashTable, key: any): boolean;
  
  export function hashTableContains(hashTable: GLib.HashTable, key: any): boolean;
  
  export function hashTableDestroy(hashTable: GLib.HashTable): void;
  
  export function hashTableInsert(hashTable: GLib.HashTable, key: any, value: any): boolean;
  
  export function hashTableLookup(hashTable: GLib.HashTable, key: any): any;
  
  export function hashTableLookupExtended(hashTable: GLib.HashTable, lookupKey: any, origKey: any, value: any): boolean;
  
  export function hashTableRemove(hashTable: GLib.HashTable, key: any): boolean;
  
  export function hashTableRemoveAll(hashTable: GLib.HashTable): void;
  
  export function hashTableReplace(hashTable: GLib.HashTable, key: any, value: any): boolean;
  
  export function hashTableSize(hashTable: GLib.HashTable): number;
  
  export function hashTableSteal(hashTable: GLib.HashTable, key: any): boolean;
  
  export function hashTableStealAll(hashTable: GLib.HashTable): void;
  
  export function hashTableUnref(hashTable: GLib.HashTable): void;
  
  export function hookDestroy(hookList: HookList, hookId: number): boolean;
  
  export function hookDestroyLink(hookList: HookList, hook: Hook): void;
  
  export function hookFree(hookList: HookList, hook: Hook): void;
  
  export function hookInsertBefore(hookList: HookList, sibling: Hook, hook: Hook): void;
  
  export function hookPrepend(hookList: HookList, hook: Hook): void;
  
  export function hookUnref(hookList: HookList, hook: Hook): void;
  
  export function hostnameIsAsciiEncoded(hostname: string): boolean;
  
  export function hostnameIsIpAddress(hostname: string): boolean;
  
  export function hostnameIsNonAscii(hostname: string): boolean;
  
  export function hostnameToAscii(hostname: string): string;
  
  export function hostnameToUnicode(hostname: string): string;
  
  export function iconv(converter: IConv, inbuf: string, inbytesLeft: number, outbuf: string, outbytesLeft: number): number;
  
  export function idleAdd(_function: SourceFunc, data: any): number;
  
  export function idleAddFull(priority: number, _function: SourceFunc, data: any, notify: DestroyNotify): number;
  
  export function idleRemoveByData(data: any): boolean;
  
  export function idleSourceNew(): Source;
  
  export function int64Equal(v1: any, v2: any): boolean;
  
  export function int64Hash(v: any): number;
  
  export function intEqual(v1: any, v2: any): boolean;
  
  export function intHash(v: any): number;
  
  export function internStaticString(string: string): string;
  
  export function internString(string: string): string;
  
  export function ioAddWatch(channel: IOChannel, condition: IOCondition, func: IOFunc, userData: any): number;
  
  export function ioAddWatchFull(channel: IOChannel, priority: number, condition: IOCondition, func: IOFunc, userData: any, notify: DestroyNotify): number;
  
  export function ioChannelErrorFromErrno(en: number): IOChannelError;
  
  export function ioChannelErrorQuark(): Quark;
  
  export function ioCreateWatch(channel: IOChannel, condition: IOCondition): Source;
  
  export function keyFileErrorQuark(): Quark;
  
  export function listenv(): string[];
  
  export function localeFromUtf8(utf8string: string, len: number, bytesRead: number, bytesWritten: number): string;
  
  export function localeToUtf8(opsysstring: string, len: number, bytesRead: number, bytesWritten: number): string;
  
  export function log(logDomain: string, logLevel: LogLevelFlags, format: string, ...params: any[]): void;
  
  export function logDefaultHandler(logDomain: string, logLevel: LogLevelFlags, message: string, unusedData: any): void;
  
  export function logRemoveHandler(logDomain: string, handlerId: number): void;
  
  export function logSetAlwaysFatal(fatalMask: LogLevelFlags): LogLevelFlags;
  
  export function logSetDefaultHandler(logFunc: LogFunc, userData: any): LogFunc;
  
  export function logSetFatalMask(logDomain: string, fatalMask: LogLevelFlags): LogLevelFlags;
  
  export function logSetHandler(logDomain: string, logLevels: LogLevelFlags, logFunc: LogFunc, userData: any): number;
  
  export function logSetHandlerFull(logDomain: string, logLevels: LogLevelFlags, logFunc: LogFunc, userData: any, destroy: DestroyNotify): number;
  
  export function logSetWriterFunc(func: LogWriterFunc, userData: any, userDataFree: DestroyNotify): void;
  
  export function logStructured(logDomain: string, logLevel: LogLevelFlags, ...params: any[]): void;
  
  export function logStructuredArray(logLevel: LogLevelFlags, fields: LogField[], nFields: number): void;
  
  export function logVariant(logDomain: string, logLevel: LogLevelFlags, fields: Variant): void;
  
  export function logWriterDefault(logLevel: LogLevelFlags, fields: LogField[], nFields: number, userData: any): LogWriterOutput;
  
  export function logWriterFormatFields(logLevel: LogLevelFlags, fields: LogField[], nFields: number, useColor: boolean): string;
  
  export function logWriterIsJournald(outputFd: number): boolean;
  
  export function logWriterJournald(logLevel: LogLevelFlags, fields: LogField[], nFields: number, userData: any): LogWriterOutput;
  
  export function logWriterStandardStreams(logLevel: LogLevelFlags, fields: LogField[], nFields: number, userData: any): LogWriterOutput;
  
  export function logWriterSupportsColor(outputFd: number): boolean;
  
  export function logv(logDomain: string, logLevel: LogLevelFlags, format: string, args: any[]): void;
  
  export function mainContextDefault(): MainContext;
  
  export function mainContextGetThreadDefault(): MainContext;
  
  export function mainContextRefThreadDefault(): MainContext;
  
  export function mainCurrentSource(): Source;
  
  export function mainDepth(): number;
  
  export function malloc(nBytes: number): any;
  
  export function malloc0(nBytes: number): any;
  
  export function malloc0N(nBlocks: number, nBlockBytes: number): any;
  
  export function mallocN(nBlocks: number, nBlockBytes: number): any;
  
  export function markupCollectAttributes(elementName: string, attributeNames: string, attributeValues: string, error: Error, firstType: MarkupCollectType, firstAttr: string, ...params: any[]): boolean;
  
  export function markupErrorQuark(): Quark;
  
  export function markupEscapeText(text: string, length: number): string;
  
  export function markupPrintfEscaped(format: string, ...params: any[]): string;
  
  export function markupVprintfEscaped(format: string, args: any[]): string;
  
  export function memIsSystemMalloc(): boolean;
  
  export function memProfile(): void;
  
  export function memSetVtable(vtable: MemVTable): void;
  
  export function memdup(mem: any, byteSize: number): any;
  
  export function mkdirWithParents(pathname: string, mode: number): number;
  
  export function mkdtemp(tmpl: string): string;
  
  export function mkdtempFull(tmpl: string, mode: number): string;
  
  export function mkstemp(tmpl: string): number;
  
  export function mkstempFull(tmpl: string, flags: number, mode: number): number;
  
  export function nullifyPointer(nullifyLocation: any): void;
  
  export function onErrorQuery(prgName: string): void;
  
  export function onErrorStackTrace(prgName: string): void;
  
  export function onceInitEnter(location: any): boolean;
  
  export function onceInitLeave(location: any, result: number): void;
  
  export function optionErrorQuark(): Quark;
  
  export function parseDebugString(string: string, keys: DebugKey[], nkeys: number): number;
  
  export function pathGetBasename(fileName: string): string;
  
  export function pathGetDirname(fileName: string): string;
  
  export function pathIsAbsolute(fileName: string): boolean;
  
  export function pathSkipRoot(fileName: string): string;
  
  export function patternMatch(pspec: PatternSpec, stringLength: number, string: string, stringReversed: string): boolean;
  
  export function patternMatchSimple(pattern: string, string: string): boolean;
  
  export function patternMatchString(pspec: PatternSpec, string: string): boolean;
  
  export function pointerBitLock(address: any, lockBit: number): void;
  
  export function pointerBitTrylock(address: any, lockBit: number): boolean;
  
  export function pointerBitUnlock(address: any, lockBit: number): void;
  
  export function poll(fds: PollFD, nfds: number, timeout: number): number;
  
  export function prefixError(err: Error, format: string, ...params: any[]): void;
  
  export function print(format: string, ...params: any[]): void;
  
  export function printerr(format: string, ...params: any[]): void;
  
  export function printf(format: string, ...params: any[]): number;
  
  export function printfStringUpperBound(format: string, args: any[]): number;
  
  export function propagateError(dest: Error, src: Error): void;
  
  export function propagatePrefixedError(dest: Error, src: Error, format: string, ...params: any[]): void;
  
  export function qsortWithData(pbase: any, totalElems: number, size: number, compareFunc: CompareDataFunc, userData: any): void;
  
  export function quarkFromStaticString(string: string): Quark;
  
  export function quarkFromString(string: string): Quark;
  
  export function quarkToString(quark: Quark): string;
  
  export function quarkTryString(string: string): Quark;
  
  export function randomDouble(): number;
  
  export function randomDoubleRange(begin: number, end: number): number;
  
  export function randomInt(): number;
  
  export function randomIntRange(begin: number, end: number): number;
  
  export function randomSetSeed(seed: number): void;
  
  export function realloc(mem: any, nBytes: number): any;
  
  export function reallocN(mem: any, nBlocks: number, nBlockBytes: number): any;
  
  export function regexCheckReplacement(replacement: string, hasReferences: boolean): boolean;
  
  export function regexErrorQuark(): Quark;
  
  export function regexEscapeNul(string: string, length: number): string;
  
  export function regexEscapeString(string: string[], length: number): string;
  
  export function regexMatchSimple(pattern: string, string: string, compileOptions: RegexCompileFlags, matchOptions: RegexMatchFlags): boolean;
  
  export function regexSplitSimple(pattern: string, string: string, compileOptions: RegexCompileFlags, matchOptions: RegexMatchFlags): string[];
  
  export function reloadUserSpecialDirsCache(): void;
  
  export function returnIfFailWarning(logDomain: string, prettyFunction: string, expression: string): void;
  
  export function rmdir(filename: string): number;
  
  export function sequenceGet(iter: SequenceIter): any;
  
  export function sequenceMove(src: SequenceIter, dest: SequenceIter): void;
  
  export function sequenceMoveRange(dest: SequenceIter, begin: SequenceIter, end: SequenceIter): void;
  
  export function sequenceRemove(iter: SequenceIter): void;
  
  export function sequenceRemoveRange(begin: SequenceIter, end: SequenceIter): void;
  
  export function sequenceSet(iter: SequenceIter, data: any): void;
  
  export function sequenceSwap(a: SequenceIter, b: SequenceIter): void;
  
  export function setApplicationName(applicationName: string): void;
  
  export function setError(err: Error, domain: Quark, code: number, format: string, ...params: any[]): void;
  
  export function setErrorLiteral(err: Error, domain: Quark, code: number, message: string): void;
  
  export function setPrgname(prgname: string): void;
  
  export function setPrintHandler(func: PrintFunc): PrintFunc;
  
  export function setPrinterrHandler(func: PrintFunc): PrintFunc;
  
  export function setenv(variable: string, value: string, overwrite: boolean): boolean;
  
  export function shellErrorQuark(): Quark;
  
  export function shellParseArgv(commandLine: string, argcp: number, argvp: string[]): boolean;
  
  export function shellQuote(unquotedString: string): string;
  
  export function shellUnquote(quotedString: string): string;
  
  export function sliceAlloc(blockSize: number): any;
  
  export function sliceAlloc0(blockSize: number): any;
  
  export function sliceCopy(blockSize: number, memBlock: any): any;
  
  export function sliceFree1(blockSize: number, memBlock: any): void;
  
  export function sliceFreeChainWithOffset(blockSize: number, memChain: any, nextOffset: number): void;
  
  export function sliceGetConfig(ckey: SliceConfig): number;
  
  export function sliceGetConfigState(ckey: SliceConfig, address: number, nValues: number): number;
  
  export function sliceSetConfig(ckey: SliceConfig, value: number): void;
  
  export function snprintf(string: string, _n: number, format: string, ...params: any[]): number;
  
  export function sourceRemove(tag: number): boolean;
  
  export function sourceRemoveByFuncsUserData(funcs: SourceFuncs, userData: any): boolean;
  
  export function sourceRemoveByUserData(userData: any): boolean;
  
  export function sourceSetNameById(tag: number, name: string): void;
  
  export function spacedPrimesClosest(num: number): number;
  
  export function spawnAsync(workingDirectory: string, argv: string[], envp: string[], flags: SpawnFlags, childSetup: SpawnChildSetupFunc, userData: any, childPid: Pid): boolean;
  
  export function spawnAsyncWithPipes(workingDirectory: string, argv: string[], envp: string[], flags: SpawnFlags, childSetup: SpawnChildSetupFunc, userData: any, childPid: Pid, standardInput: number, standardOutput: number, standardError: number): boolean;
  
  export function spawnCheckExitStatus(exitStatus: number): boolean;
  
  export function spawnClosePid(pid: Pid): void;
  
  export function spawnCommandLineAsync(commandLine: string): boolean;
  
  export function spawnCommandLineSync(commandLine: string, standardOutput: number[], standardError: number[], exitStatus: number): boolean;
  
  export function spawnErrorQuark(): Quark;
  
  export function spawnExitErrorQuark(): Quark;
  
  export function spawnSync(workingDirectory: string, argv: string[], envp: string[], flags: SpawnFlags, childSetup: SpawnChildSetupFunc, userData: any, standardOutput: number[], standardError: number[], exitStatus: number): boolean;
  
  export function sprintf(string: string, format: string, ...params: any[]): number;
  
  export function stpcpy(dest: string, src: string): string;
  
  export function strEqual(v1: any, v2: any): boolean;
  
  export function strHasPrefix(str: string, prefix: string): boolean;
  
  export function strHasSuffix(str: string, suffix: string): boolean;
  
  export function strHash(v: any): number;
  
  export function strIsAscii(str: string): boolean;
  
  export function strMatchString(searchTerm: string, potentialHit: string, acceptAlternates: boolean): boolean;
  
  export function strToAscii(str: string, fromLocale: string): string;
  
  export function strTokenizeAndFold(string: string, translitLocale: string, asciiAlternates: string[]): string[];
  
  export function strcanon(string: string, validChars: string, substitutor: string): string;
  
  export function strcasecmp(s1: string, s2: string): number;
  
  export function strchomp(string: string): string;
  
  export function strchug(string: string): string;
  
  export function strcmp0(str1: string, str2: string): number;
  
  export function strcompress(source: string): string;
  
  export function strconcat(string1: string, ...params: any[]): string;
  
  export function strdelimit(string: string, delimiters: string, newDelimiter: string): string;
  
  export function strdown(string: string): string;
  
  export function strdup(str: string): string;
  
  export function strdupPrintf(format: string, ...params: any[]): string;
  
  export function strdupVprintf(format: string, args: any[]): string;
  
  export function strdupv(strArray: string): string[];
  
  export function strerror(errnum: number): string;
  
  export function strescape(source: string, exceptions: string): string;
  
  export function strfreev(strArray: string): void;
  
  export function stringNew(init: string): String;
  
  export function stringNewLen(init: string, len: number): String;
  
  export function stringSizedNew(dflSize: number): String;
  
  export function stripContext(msgid: string, msgval: string): string;
  
  export function strjoin(separator: string, ...params: any[]): string;
  
  export function strjoinv(separator: string, strArray: string): string;
  
  export function strlcat(dest: string, src: string, destSize: number): number;
  
  export function strlcpy(dest: string, src: string, destSize: number): number;
  
  export function strncasecmp(s1: string, s2: string, _n: number): number;
  
  export function strndup(str: string, _n: number): string;
  
  export function strnfill(length: number, fillChar: string): string;
  
  export function strreverse(string: string): string;
  
  export function strrstr(haystack: string, needle: string): string;
  
  export function strrstrLen(haystack: string, haystackLen: number, needle: string): string;
  
  export function strsignal(signum: number): string;
  
  export function strsplit(string: string, delimiter: string, maxTokens: number): string[];
  
  export function strsplitSet(string: string, delimiters: string, maxTokens: number): string[];
  
  export function strstrLen(haystack: string, haystackLen: number, needle: string): string;
  
  export function strtod(nptr: string, endptr: string): number;
  
  export function strup(string: string): string;
  
  export function strvContains(strv: string, str: string): boolean;
  
  export function strvGetType(): GObject.Type;
  
  export function strvLength(strArray: string): number;
  
  export function testAddDataFunc(testpath: string, testData: any, testFunc: TestDataFunc): void;
  
  export function testAddDataFuncFull(testpath: string, testData: any, testFunc: TestDataFunc, dataFreeFunc: DestroyNotify): void;
  
  export function testAddFunc(testpath: string, testFunc: TestFunc): void;
  
  export function testAddVtable(testpath: string, dataSize: number, testData: any, dataSetup: TestFixtureFunc, dataTest: TestFixtureFunc, dataTeardown: TestFixtureFunc): void;
  
  export function testAssertExpectedMessagesInternal(domain: string, file: string, line: number, func: string): void;
  
  export function testBug(bugUriSnippet: string): void;
  
  export function testBugBase(uriPattern: string): void;
  
  export function testBuildFilename(fileType: TestFileType, firstPath: string, ...params: any[]): string;
  
  export function testCreateCase(testName: string, dataSize: number, testData: any, dataSetup: TestFixtureFunc, dataTest: TestFixtureFunc, dataTeardown: TestFixtureFunc): TestCase;
  
  export function testCreateSuite(suiteName: string): TestSuite;
  
  export function testExpectMessage(logDomain: string, logLevel: LogLevelFlags, pattern: string): void;
  
  export function testFail(): void;
  
  export function testFailed(): boolean;
  
  export function testGetDir(fileType: TestFileType): string;
  
  export function testGetFilename(fileType: TestFileType, firstPath: string, ...params: any[]): string;
  
  export function testGetRoot(): TestSuite;
  
  export function testIncomplete(msg: string): void;
  
  export function testInit(argc: number, argv: string, ...params: any[]): void;
  
  export function testLogSetFatalHandler(logFunc: TestLogFatalFunc, userData: any): void;
  
  export function testLogTypeName(logType: TestLogType): string;
  
  export function testMaximizedResult(maximizedQuantity: number, format: string, ...params: any[]): void;
  
  export function testMessage(format: string, ...params: any[]): void;
  
  export function testMinimizedResult(minimizedQuantity: number, format: string, ...params: any[]): void;
  
  export function testQueueDestroy(destroyFunc: DestroyNotify, destroyData: any): void;
  
  export function testQueueFree(gfreePointer: any): void;
  
  export function testRandDouble(): number;
  
  export function testRandDoubleRange(rangeStart: number, rangeEnd: number): number;
  
  export function testRandInt(): number;
  
  export function testRandIntRange(begin: number, end: number): number;
  
  export function testRun(): number;
  
  export function testRunSuite(suite: TestSuite): number;
  
  export function testSetNonfatalAssertions(): void;
  
  export function testSkip(msg: string): void;
  
  export function testSubprocess(): boolean;
  
  export function testTimerElapsed(): number;
  
  export function testTimerLast(): number;
  
  export function testTimerStart(): void;
  
  export function testTrapAssertions(domain: string, file: string, line: number, func: string, assertionFlags: number, pattern: string): void;
  
  export function testTrapFork(usecTimeout: number, testTrapFlags: TestTrapFlags): boolean;
  
  export function testTrapHasPassed(): boolean;
  
  export function testTrapReachedTimeout(): boolean;
  
  export function testTrapSubprocess(testPath: string, usecTimeout: number, testFlags: TestSubprocessFlags): void;
  
  export function threadErrorQuark(): Quark;
  
  export function threadExit(retval: any): void;
  
  export function threadPoolGetMaxIdleTime(): number;
  
  export function threadPoolGetMaxUnusedThreads(): number;
  
  export function threadPoolGetNumUnusedThreads(): number;
  
  export function threadPoolSetMaxIdleTime(interval: number): void;
  
  export function threadPoolSetMaxUnusedThreads(maxThreads: number): void;
  
  export function threadPoolStopUnusedThreads(): void;
  
  export function threadSelf(): Thread;
  
  export function threadYield(): void;
  
  export function timeValFromIso8601(isoDate: string, time_: TimeVal): boolean;
  
  export function timeoutAdd(interval: number, _function: SourceFunc, data: any): number;
  
  export function timeoutAddFull(priority: number, interval: number, _function: SourceFunc, data: any, notify: DestroyNotify): number;
  
  export function timeoutAddSeconds(interval: number, _function: SourceFunc, data: any): number;
  
  export function timeoutAddSecondsFull(priority: number, interval: number, _function: SourceFunc, data: any, notify: DestroyNotify): number;
  
  export function timeoutSourceNew(interval: number): Source;
  
  export function timeoutSourceNewSeconds(interval: number): Source;
  
  export function trashStackHeight(stackP: TrashStack): number;
  
  export function trashStackPeek(stackP: TrashStack): any;
  
  export function trashStackPop(stackP: TrashStack): any;
  
  export function trashStackPush(stackP: TrashStack, dataP: any): void;
  
  export function tryMalloc(nBytes: number): any;
  
  export function tryMalloc0(nBytes: number): any;
  
  export function tryMalloc0N(nBlocks: number, nBlockBytes: number): any;
  
  export function tryMallocN(nBlocks: number, nBlockBytes: number): any;
  
  export function tryRealloc(mem: any, nBytes: number): any;
  
  export function tryReallocN(mem: any, nBlocks: number, nBlockBytes: number): any;
  
  export function ucs4ToUtf16(str: string, len: number, itemsRead: number, itemsWritten: number): number;
  
  export function ucs4ToUtf8(str: string, len: number, itemsRead: number, itemsWritten: number): string;
  
  export function unicharBreakType(_c: string): UnicodeBreakType;
  
  export function unicharCombiningClass(uc: string): number;
  
  export function unicharCompose(a: string, b: string, _ch: string): boolean;
  
  export function unicharDecompose(_ch: string, a: string, b: string): boolean;
  
  export function unicharDigitValue(_c: string): number;
  
  export function unicharFullyDecompose(_ch: string, compat: boolean, result: string, resultLen: number): number;
  
  export function unicharGetMirrorChar(_ch: string, mirroredCh: string): boolean;
  
  export function unicharGetScript(_ch: string): UnicodeScript;
  
  export function unicharIsalnum(_c: string): boolean;
  
  export function unicharIsalpha(_c: string): boolean;
  
  export function unicharIscntrl(_c: string): boolean;
  
  export function unicharIsdefined(_c: string): boolean;
  
  export function unicharIsdigit(_c: string): boolean;
  
  export function unicharIsgraph(_c: string): boolean;
  
  export function unicharIslower(_c: string): boolean;
  
  export function unicharIsmark(_c: string): boolean;
  
  export function unicharIsprint(_c: string): boolean;
  
  export function unicharIspunct(_c: string): boolean;
  
  export function unicharIsspace(_c: string): boolean;
  
  export function unicharIstitle(_c: string): boolean;
  
  export function unicharIsupper(_c: string): boolean;
  
  export function unicharIswide(_c: string): boolean;
  
  export function unicharIswideCjk(_c: string): boolean;
  
  export function unicharIsxdigit(_c: string): boolean;
  
  export function unicharIszerowidth(_c: string): boolean;
  
  export function unicharToUtf8(_c: string, outbuf: string): number;
  
  export function unicharTolower(_c: string): string;
  
  export function unicharTotitle(_c: string): string;
  
  export function unicharToupper(_c: string): string;
  
  export function unicharType(_c: string): UnicodeType;
  
  export function unicharValidate(_ch: string): boolean;
  
  export function unicharXdigitValue(_c: string): number;
  
  export function unicodeCanonicalDecomposition(_ch: string, resultLen: number): string;
  
  export function unicodeCanonicalOrdering(string: string, len: number): void;
  
  export function unicodeScriptFromIso15924(iso15924: number): UnicodeScript;
  
  export function unicodeScriptToIso15924(script: UnicodeScript): number;
  
  export function unixErrorQuark(): Quark;
  
  export function unixFdAdd(fd: number, condition: IOCondition, _function: UnixFDSourceFunc, userData: any): number;
  
  export function unixFdAddFull(priority: number, fd: number, condition: IOCondition, _function: UnixFDSourceFunc, userData: any, notify: DestroyNotify): number;
  
  export function unixFdSourceNew(fd: number, condition: IOCondition): Source;
  
  export function unixOpenPipe(fds: number, flags: number): boolean;
  
  export function unixSetFdNonblocking(fd: number, nonblock: boolean): boolean;
  
  export function unixSignalAdd(signum: number, handler: SourceFunc, userData: any): number;
  
  export function unixSignalAddFull(priority: number, signum: number, handler: SourceFunc, userData: any, notify: DestroyNotify): number;
  
  export function unixSignalSourceNew(signum: number): Source;
  
  export function unlink(filename: string): number;
  
  export function unsetenv(variable: string): void;
  
  export function uriEscapeString(unescaped: string, reservedCharsAllowed: string, allowUtf8: boolean): string;
  
  export function uriListExtractUris(uriList: string): string[];
  
  export function uriParseScheme(uri: string): string;
  
  export function uriUnescapeSegment(escapedString: string, escapedStringEnd: string, illegalCharacters: string): string;
  
  export function uriUnescapeString(escapedString: string, illegalCharacters: string): string;
  
  export function usleep(microseconds: number): void;
  
  export function utf16ToUcs4(str: number, len: number, itemsRead: number, itemsWritten: number): string;
  
  export function utf16ToUtf8(str: number, len: number, itemsRead: number, itemsWritten: number): string;
  
  export function utf8Casefold(str: string, len: number): string;
  
  export function utf8Collate(str1: string, str2: string): number;
  
  export function utf8CollateKey(str: string, len: number): string;
  
  export function utf8CollateKeyForFilename(str: string, len: number): string;
  
  export function utf8FindNextChar(p: string, end: string): string;
  
  export function utf8FindPrevChar(str: string, p: string): string;
  
  export function utf8GetChar(p: string): string;
  
  export function utf8GetCharValidated(p: string, maxLen: number): string;
  
  export function utf8Normalize(str: string, len: number, mode: NormalizeMode): string;
  
  export function utf8OffsetToPointer(str: string, offset: number): string;
  
  export function utf8PointerToOffset(str: string, pos: string): number;
  
  export function utf8PrevChar(p: string): string;
  
  export function utf8Strchr(p: string, len: number, _c: string): string;
  
  export function utf8Strdown(str: string, len: number): string;
  
  export function utf8Strlen(p: string, max: number): number;
  
  export function utf8Strncpy(dest: string, src: string, _n: number): string;
  
  export function utf8Strrchr(p: string, len: number, _c: string): string;
  
  export function utf8Strreverse(str: string, len: number): string;
  
  export function utf8Strup(str: string, len: number): string;
  
  export function utf8Substring(str: string, startPos: number, endPos: number): string;
  
  export function utf8ToUcs4(str: string, len: number, itemsRead: number, itemsWritten: number): string;
  
  export function utf8ToUcs4Fast(str: string, len: number, itemsWritten: number): string;
  
  export function utf8ToUtf16(str: string, len: number, itemsRead: number, itemsWritten: number): number;
  
  export function utf8Validate(str: number[], maxLen: number, end: string): boolean;
  
  export function variantGetGtype(): GObject.Type;
  
  export function variantIsObjectPath(string: string): boolean;
  
  export function variantIsSignature(string: string): boolean;
  
  export function variantParse(type: VariantType, text: string, limit: string, endptr: string): Variant;
  
  export function variantParseErrorPrintContext(error: Error, sourceStr: string): string;
  
  export function variantParseErrorQuark(): Quark;
  
  export function variantParserGetErrorQuark(): Quark;
  
  export function variantTypeChecked_(arg0: string): VariantType;
  
  export function variantTypeStringIsValid(typeString: string): boolean;
  
  export function variantTypeStringScan(string: string, limit: string, endptr: string): boolean;
  
  export function vasprintf(string: string, format: string, args: any[]): number;
  
  export function vfprintf(file: any, format: string, args: any[]): number;
  
  export function vprintf(format: string, args: any[]): number;
  
  export function vsnprintf(string: string, _n: number, format: string, args: any[]): number;
  
  export function vsprintf(string: string, format: string, args: any[]): number;
  
  export function warnMessage(domain: string, file: string, line: number, func: string, warnexpr: string): void;
  
  export interface ChildWatchFunc {
  	(pid: Pid, status: number, userData: any): void;
  }
  
  export interface CompareDataFunc {
  	(a: any, b: any, userData: any): number;
  }
  
  export interface CompareFunc {
  	(a: any, b: any): number;
  }
  
  export interface CopyFunc {
  	(src: any, data: any): any;
  }
  
  export interface DataForeachFunc {
  	(keyId: Quark, data: any, userData: any): void;
  }
  
  export interface DestroyNotify {
  	(data: any): void;
  }
  
  export interface DuplicateFunc {
  	(data: any, userData: any): any;
  }
  
  export interface EqualFunc {
  	(a: any, b: any): boolean;
  }
  
  export interface FreeFunc {
  	(data: any): void;
  }
  
  export interface Func {
  	(data: any, userData: any): void;
  }
  
  export interface HFunc {
  	(key: any, value: any, userData: any): void;
  }
  
  export interface HRFunc {
  	(key: any, value: any, userData: any): boolean;
  }
  
  export interface HashFunc {
  	(key: any): number;
  }
  
  export interface HookCheckFunc {
  	(data: any): boolean;
  }
  
  export interface HookCheckMarshaller {
  	(hook: Hook, marshalData: any): boolean;
  }
  
  export interface HookCompareFunc {
  	(newHook: Hook, sibling: Hook): number;
  }
  
  export interface HookFinalizeFunc {
  	(hookList: HookList, hook: Hook): void;
  }
  
  export interface HookFindFunc {
  	(hook: Hook, data: any): boolean;
  }
  
  export interface HookFunc {
  	(data: any): void;
  }
  
  export interface HookMarshaller {
  	(hook: Hook, marshalData: any): void;
  }
  
  export interface IOFunc {
  	(source: IOChannel, condition: IOCondition, data: any): boolean;
  }
  
  export interface LogFunc {
  	(logDomain: string, logLevel: LogLevelFlags, message: string, userData: any): void;
  }
  
  export interface LogWriterFunc {
  	(logLevel: LogLevelFlags, fields: LogField[], nFields: number, userData: any): LogWriterOutput;
  }
  
  export interface NodeForeachFunc {
  	(node: Node, data: any): void;
  }
  
  export interface NodeTraverseFunc {
  	(node: Node, data: any): boolean;
  }
  
  export interface OptionArgFunc {
  	(optionName: string, value: string, data: any): boolean;
  }
  
  export interface OptionErrorFunc {
  	(context: OptionContext, group: OptionGroup, data: any): void;
  }
  
  export interface OptionParseFunc {
  	(context: OptionContext, group: OptionGroup, data: any): boolean;
  }
  
  export interface PollFunc {
  	(ufds: PollFD, nfsd: number, timeout_: number): number;
  }
  
  export interface PrintFunc {
  	(string: string): void;
  }
  
  export interface RegexEvalCallback {
  	(matchInfo: MatchInfo, result: String, userData: any): boolean;
  }
  
  export interface ScannerMsgFunc {
  	(scanner: Scanner, message: string, error: boolean): void;
  }
  
  export interface SequenceIterCompareFunc {
  	(a: SequenceIter, b: SequenceIter, data: any): number;
  }
  
  export interface SourceDummyMarshal {
  	(): void;
  }
  
  export interface SourceFunc {
  	(userData: any): boolean;
  }
  
  export interface SpawnChildSetupFunc {
  	(userData: any): void;
  }
  
  export interface TestDataFunc {
  	(userData: any): void;
  }
  
  export interface TestFixtureFunc {
  	(fixture: any, userData: any): void;
  }
  
  export interface TestFunc {
  	(): void;
  }
  
  export interface TestLogFatalFunc {
  	(logDomain: string, logLevel: LogLevelFlags, message: string, userData: any): boolean;
  }
  
  export interface ThreadFunc {
  	(data: any): any;
  }
  
  export interface TranslateFunc {
  	(str: string, data: any): string;
  }
  
  export interface TraverseFunc {
  	(key: any, value: any, data: any): boolean;
  }
  
  export interface UnixFDSourceFunc {
  	(fd: number, condition: IOCondition, userData: any): boolean;
  }
  
  export interface VoidFunc {
  	(): void;
  }
  
  export enum BookmarkFileError {
    INVALID_URI = 0,
    INVALID_VALUE = 1,
    APP_NOT_REGISTERED = 2,
    URI_NOT_FOUND = 3,
    READ = 4,
    UNKNOWN_ENCODING = 5,
    WRITE = 6,
    FILE_NOT_FOUND = 7
  }
  
  export enum ChecksumType {
    MD5 = 0,
    SHA1 = 1,
    SHA256 = 2,
    SHA512 = 3
  }
  
  export enum ConvertError {
    NO_CONVERSION = 0,
    ILLEGAL_SEQUENCE = 1,
    FAILED = 2,
    PARTIAL_INPUT = 3,
    BAD_URI = 4,
    NOT_ABSOLUTE_PATH = 5,
    NO_MEMORY = 6
  }
  
  export enum DateDMY {
    DAY = 0,
    MONTH = 1,
    YEAR = 2
  }
  
  export enum DateMonth {
    BAD_MONTH = 0,
    JANUARY = 1,
    FEBRUARY = 2,
    MARCH = 3,
    APRIL = 4,
    MAY = 5,
    JUNE = 6,
    JULY = 7,
    AUGUST = 8,
    SEPTEMBER = 9,
    OCTOBER = 10,
    NOVEMBER = 11,
    DECEMBER = 12
  }
  
  export enum DateWeekday {
    BAD_WEEKDAY = 0,
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6,
    SUNDAY = 7
  }
  
  export enum ErrorType {
    UNKNOWN = 0,
    UNEXP_EOF = 1,
    UNEXP_EOF_IN_STRING = 2,
    UNEXP_EOF_IN_COMMENT = 3,
    NON_DIGIT_IN_CONST = 4,
    DIGIT_RADIX = 5,
    FLOAT_RADIX = 6,
    FLOAT_MALFORMED = 7
  }
  
  export enum FileError {
    EXIST = 0,
    ISDIR = 1,
    ACCES = 2,
    NAMETOOLONG = 3,
    NOENT = 4,
    NOTDIR = 5,
    NXIO = 6,
    NODEV = 7,
    ROFS = 8,
    TXTBSY = 9,
    FAULT = 10,
    LOOP = 11,
    NOSPC = 12,
    NOMEM = 13,
    MFILE = 14,
    NFILE = 15,
    BADF = 16,
    INVAL = 17,
    PIPE = 18,
    AGAIN = 19,
    INTR = 20,
    IO = 21,
    PERM = 22,
    NOSYS = 23,
    FAILED = 24
  }
  
  export enum IOChannelError {
    FBIG = 0,
    INVAL = 1,
    IO = 2,
    ISDIR = 3,
    NOSPC = 4,
    NXIO = 5,
    OVERFLOW = 6,
    PIPE = 7,
    FAILED = 8
  }
  
  export enum IOError {
    NONE = 0,
    AGAIN = 1,
    INVAL = 2,
    UNKNOWN = 3
  }
  
  export enum IOStatus {
    ERROR = 0,
    NORMAL = 1,
    EOF = 2,
    AGAIN = 3
  }
  
  export enum KeyFileError {
    UNKNOWN_ENCODING = 0,
    PARSE = 1,
    NOT_FOUND = 2,
    KEY_NOT_FOUND = 3,
    GROUP_NOT_FOUND = 4,
    INVALID_VALUE = 5
  }
  
  export enum LogWriterOutput {
    HANDLED = 1,
    UNHANDLED = 0
  }
  
  export enum MarkupError {
    BAD_UTF8 = 0,
    EMPTY = 1,
    PARSE = 2,
    UNKNOWN_ELEMENT = 3,
    UNKNOWN_ATTRIBUTE = 4,
    INVALID_CONTENT = 5,
    MISSING_ATTRIBUTE = 6
  }
  
  export enum NormalizeMode {
    DEFAULT = 0,
    NFD = 0,
    DEFAULT_COMPOSE = 1,
    NFC = 1,
    ALL = 2,
    NFKD = 2,
    ALL_COMPOSE = 3,
    NFKC = 3
  }
  
  export enum OnceStatus {
    NOTCALLED = 0,
    PROGRESS = 1,
    READY = 2
  }
  
  export enum OptionArg {
    NONE = 0,
    STRING = 1,
    INT = 2,
    CALLBACK = 3,
    FILENAME = 4,
    STRING_ARRAY = 5,
    FILENAME_ARRAY = 6,
    DOUBLE = 7,
    INT64 = 8
  }
  
  export enum OptionError {
    UNKNOWN_OPTION = 0,
    BAD_VALUE = 1,
    FAILED = 2
  }
  
  export enum RegexError {
    COMPILE = 0,
    OPTIMIZE = 1,
    REPLACE = 2,
    MATCH = 3,
    INTERNAL = 4,
    STRAY_BACKSLASH = 101,
    MISSING_CONTROL_CHAR = 102,
    UNRECOGNIZED_ESCAPE = 103,
    QUANTIFIERS_OUT_OF_ORDER = 104,
    QUANTIFIER_TOO_BIG = 105,
    UNTERMINATED_CHARACTER_CLASS = 106,
    INVALID_ESCAPE_IN_CHARACTER_CLASS = 107,
    RANGE_OUT_OF_ORDER = 108,
    NOTHING_TO_REPEAT = 109,
    UNRECOGNIZED_CHARACTER = 112,
    POSIX_NAMED_CLASS_OUTSIDE_CLASS = 113,
    UNMATCHED_PARENTHESIS = 114,
    INEXISTENT_SUBPATTERN_REFERENCE = 115,
    UNTERMINATED_COMMENT = 118,
    EXPRESSION_TOO_LARGE = 120,
    MEMORY_ERROR = 121,
    VARIABLE_LENGTH_LOOKBEHIND = 125,
    MALFORMED_CONDITION = 126,
    TOO_MANY_CONDITIONAL_BRANCHES = 127,
    ASSERTION_EXPECTED = 128,
    UNKNOWN_POSIX_CLASS_NAME = 130,
    POSIX_COLLATING_ELEMENTS_NOT_SUPPORTED = 131,
    HEX_CODE_TOO_LARGE = 134,
    INVALID_CONDITION = 135,
    SINGLE_BYTE_MATCH_IN_LOOKBEHIND = 136,
    INFINITE_LOOP = 140,
    MISSING_SUBPATTERN_NAME_TERMINATOR = 142,
    DUPLICATE_SUBPATTERN_NAME = 143,
    MALFORMED_PROPERTY = 146,
    UNKNOWN_PROPERTY = 147,
    SUBPATTERN_NAME_TOO_LONG = 148,
    TOO_MANY_SUBPATTERNS = 149,
    INVALID_OCTAL_VALUE = 151,
    TOO_MANY_BRANCHES_IN_DEFINE = 154,
    DEFINE_REPETION = 155,
    INCONSISTENT_NEWLINE_OPTIONS = 156,
    MISSING_BACK_REFERENCE = 157,
    INVALID_RELATIVE_REFERENCE = 158,
    BACKTRACKING_CONTROL_VERB_ARGUMENT_FORBIDDEN = 159,
    UNKNOWN_BACKTRACKING_CONTROL_VERB = 160,
    NUMBER_TOO_BIG = 161,
    MISSING_SUBPATTERN_NAME = 162,
    MISSING_DIGIT = 163,
    INVALID_DATA_CHARACTER = 164,
    EXTRA_SUBPATTERN_NAME = 165,
    BACKTRACKING_CONTROL_VERB_ARGUMENT_REQUIRED = 166,
    INVALID_CONTROL_CHAR = 168,
    MISSING_NAME = 169,
    NOT_SUPPORTED_IN_CLASS = 171,
    TOO_MANY_FORWARD_REFERENCES = 172,
    NAME_TOO_LONG = 175,
    CHARACTER_VALUE_TOO_LARGE = 176
  }
  
  export enum SeekType {
    CUR = 0,
    SET = 1,
    END = 2
  }
  
  export enum ShellError {
    BAD_QUOTING = 0,
    EMPTY_STRING = 1,
    FAILED = 2
  }
  
  export enum SliceConfig {
    ALWAYS_MALLOC = 1,
    BYPASS_MAGAZINES = 2,
    WORKING_SET_MSECS = 3,
    COLOR_INCREMENT = 4,
    CHUNK_SIZES = 5,
    CONTENTION_COUNTER = 6
  }
  
  export enum SpawnError {
    FORK = 0,
    READ = 1,
    CHDIR = 2,
    ACCES = 3,
    PERM = 4,
    TOO_BIG = 5,
    _2BIG = 5,
    NOEXEC = 6,
    NAMETOOLONG = 7,
    NOENT = 8,
    NOMEM = 9,
    NOTDIR = 10,
    LOOP = 11,
    TXTBUSY = 12,
    IO = 13,
    NFILE = 14,
    MFILE = 15,
    INVAL = 16,
    ISDIR = 17,
    LIBBAD = 18,
    FAILED = 19
  }
  
  export enum TestFileType {
    DIST = 0,
    BUILT = 1
  }
  
  export enum TestLogType {
    NONE = 0,
    ERROR = 1,
    START_BINARY = 2,
    LIST_CASE = 3,
    SKIP_CASE = 4,
    START_CASE = 5,
    STOP_CASE = 6,
    MIN_RESULT = 7,
    MAX_RESULT = 8,
    MESSAGE = 9,
    START_SUITE = 10,
    STOP_SUITE = 11
  }
  
  export enum ThreadError {
    THREAD_ERROR_AGAIN = 0
  }
  
  export enum TimeType {
    STANDARD = 0,
    DAYLIGHT = 1,
    UNIVERSAL = 2
  }
  
  export enum TokenType {
    EOF = 0,
    LEFT_PAREN = 40,
    RIGHT_PAREN = 41,
    LEFT_CURLY = 123,
    RIGHT_CURLY = 125,
    LEFT_BRACE = 91,
    RIGHT_BRACE = 93,
    EQUAL_SIGN = 61,
    COMMA = 44,
    NONE = 256,
    ERROR = 257,
    CHAR = 258,
    BINARY = 259,
    OCTAL = 260,
    INT = 261,
    HEX = 262,
    FLOAT = 263,
    STRING = 264,
    SYMBOL = 265,
    IDENTIFIER = 266,
    IDENTIFIER_NULL = 267,
    COMMENT_SINGLE = 268,
    COMMENT_MULTI = 269
  }
  
  export enum TraverseType {
    IN_ORDER = 0,
    PRE_ORDER = 1,
    POST_ORDER = 2,
    LEVEL_ORDER = 3
  }
  
  export enum UnicodeBreakType {
    MANDATORY = 0,
    CARRIAGE_RETURN = 1,
    LINE_FEED = 2,
    COMBINING_MARK = 3,
    SURROGATE = 4,
    ZERO_WIDTH_SPACE = 5,
    INSEPARABLE = 6,
    NON_BREAKING_GLUE = 7,
    CONTINGENT = 8,
    SPACE = 9,
    AFTER = 10,
    BEFORE = 11,
    BEFORE_AND_AFTER = 12,
    HYPHEN = 13,
    NON_STARTER = 14,
    OPEN_PUNCTUATION = 15,
    CLOSE_PUNCTUATION = 16,
    QUOTATION = 17,
    EXCLAMATION = 18,
    IDEOGRAPHIC = 19,
    NUMERIC = 20,
    INFIX_SEPARATOR = 21,
    SYMBOL = 22,
    ALPHABETIC = 23,
    PREFIX = 24,
    POSTFIX = 25,
    COMPLEX_CONTEXT = 26,
    AMBIGUOUS = 27,
    UNKNOWN = 28,
    NEXT_LINE = 29,
    WORD_JOINER = 30,
    HANGUL_L_JAMO = 31,
    HANGUL_V_JAMO = 32,
    HANGUL_T_JAMO = 33,
    HANGUL_LV_SYLLABLE = 34,
    HANGUL_LVT_SYLLABLE = 35,
    CLOSE_PARANTHESIS = 36,
    CONDITIONAL_JAPANESE_STARTER = 37,
    HEBREW_LETTER = 38,
    REGIONAL_INDICATOR = 39,
    EMOJI_BASE = 40,
    EMOJI_MODIFIER = 41,
    ZERO_WIDTH_JOINER = 42
  }
  
  export enum UnicodeScript {
    INVALID_CODE = -1,
    COMMON = 0,
    INHERITED = 1,
    ARABIC = 2,
    ARMENIAN = 3,
    BENGALI = 4,
    BOPOMOFO = 5,
    CHEROKEE = 6,
    COPTIC = 7,
    CYRILLIC = 8,
    DESERET = 9,
    DEVANAGARI = 10,
    ETHIOPIC = 11,
    GEORGIAN = 12,
    GOTHIC = 13,
    GREEK = 14,
    GUJARATI = 15,
    GURMUKHI = 16,
    HAN = 17,
    HANGUL = 18,
    HEBREW = 19,
    HIRAGANA = 20,
    KANNADA = 21,
    KATAKANA = 22,
    KHMER = 23,
    LAO = 24,
    LATIN = 25,
    MALAYALAM = 26,
    MONGOLIAN = 27,
    MYANMAR = 28,
    OGHAM = 29,
    OLD_ITALIC = 30,
    ORIYA = 31,
    RUNIC = 32,
    SINHALA = 33,
    SYRIAC = 34,
    TAMIL = 35,
    TELUGU = 36,
    THAANA = 37,
    THAI = 38,
    TIBETAN = 39,
    CANADIAN_ABORIGINAL = 40,
    YI = 41,
    TAGALOG = 42,
    HANUNOO = 43,
    BUHID = 44,
    TAGBANWA = 45,
    BRAILLE = 46,
    CYPRIOT = 47,
    LIMBU = 48,
    OSMANYA = 49,
    SHAVIAN = 50,
    LINEAR_B = 51,
    TAI_LE = 52,
    UGARITIC = 53,
    NEW_TAI_LUE = 54,
    BUGINESE = 55,
    GLAGOLITIC = 56,
    TIFINAGH = 57,
    SYLOTI_NAGRI = 58,
    OLD_PERSIAN = 59,
    KHAROSHTHI = 60,
    UNKNOWN = 61,
    BALINESE = 62,
    CUNEIFORM = 63,
    PHOENICIAN = 64,
    PHAGS_PA = 65,
    NKO = 66,
    KAYAH_LI = 67,
    LEPCHA = 68,
    REJANG = 69,
    SUNDANESE = 70,
    SAURASHTRA = 71,
    CHAM = 72,
    OL_CHIKI = 73,
    VAI = 74,
    CARIAN = 75,
    LYCIAN = 76,
    LYDIAN = 77,
    AVESTAN = 78,
    BAMUM = 79,
    EGYPTIAN_HIEROGLYPHS = 80,
    IMPERIAL_ARAMAIC = 81,
    INSCRIPTIONAL_PAHLAVI = 82,
    INSCRIPTIONAL_PARTHIAN = 83,
    JAVANESE = 84,
    KAITHI = 85,
    LISU = 86,
    MEETEI_MAYEK = 87,
    OLD_SOUTH_ARABIAN = 88,
    OLD_TURKIC = 89,
    SAMARITAN = 90,
    TAI_THAM = 91,
    TAI_VIET = 92,
    BATAK = 93,
    BRAHMI = 94,
    MANDAIC = 95,
    CHAKMA = 96,
    MEROITIC_CURSIVE = 97,
    MEROITIC_HIEROGLYPHS = 98,
    MIAO = 99,
    SHARADA = 100,
    SORA_SOMPENG = 101,
    TAKRI = 102,
    BASSA_VAH = 103,
    CAUCASIAN_ALBANIAN = 104,
    DUPLOYAN = 105,
    ELBASAN = 106,
    GRANTHA = 107,
    KHOJKI = 108,
    KHUDAWADI = 109,
    LINEAR_A = 110,
    MAHAJANI = 111,
    MANICHAEAN = 112,
    MENDE_KIKAKUI = 113,
    MODI = 114,
    MRO = 115,
    NABATAEAN = 116,
    OLD_NORTH_ARABIAN = 117,
    OLD_PERMIC = 118,
    PAHAWH_HMONG = 119,
    PALMYRENE = 120,
    PAU_CIN_HAU = 121,
    PSALTER_PAHLAVI = 122,
    SIDDHAM = 123,
    TIRHUTA = 124,
    WARANG_CITI = 125,
    AHOM = 126,
    ANATOLIAN_HIEROGLYPHS = 127,
    HATRAN = 128,
    MULTANI = 129,
    OLD_HUNGARIAN = 130,
    SIGNWRITING = 131,
    ADLAM = 132,
    BHAIKSUKI = 133,
    MARCHEN = 134,
    NEWA = 135,
    OSAGE = 136,
    TANGUT = 137
  }
  
  export enum UnicodeType {
    CONTROL = 0,
    FORMAT = 1,
    UNASSIGNED = 2,
    PRIVATE_USE = 3,
    SURROGATE = 4,
    LOWERCASE_LETTER = 5,
    MODIFIER_LETTER = 6,
    OTHER_LETTER = 7,
    TITLECASE_LETTER = 8,
    UPPERCASE_LETTER = 9,
    SPACING_MARK = 10,
    ENCLOSING_MARK = 11,
    NON_SPACING_MARK = 12,
    DECIMAL_NUMBER = 13,
    LETTER_NUMBER = 14,
    OTHER_NUMBER = 15,
    CONNECT_PUNCTUATION = 16,
    DASH_PUNCTUATION = 17,
    CLOSE_PUNCTUATION = 18,
    FINAL_PUNCTUATION = 19,
    INITIAL_PUNCTUATION = 20,
    OTHER_PUNCTUATION = 21,
    OPEN_PUNCTUATION = 22,
    CURRENCY_SYMBOL = 23,
    MODIFIER_SYMBOL = 24,
    MATH_SYMBOL = 25,
    OTHER_SYMBOL = 26,
    LINE_SEPARATOR = 27,
    PARAGRAPH_SEPARATOR = 28,
    SPACE_SEPARATOR = 29
  }
  
  export enum UserDirectory {
    DIRECTORY_DESKTOP = 0,
    DIRECTORY_DOCUMENTS = 1,
    DIRECTORY_DOWNLOAD = 2,
    DIRECTORY_MUSIC = 3,
    DIRECTORY_PICTURES = 4,
    DIRECTORY_PUBLIC_SHARE = 5,
    DIRECTORY_TEMPLATES = 6,
    DIRECTORY_VIDEOS = 7,
    N_DIRECTORIES = 8
  }
  
  export enum VariantClass {
    BOOLEAN = 98,
    BYTE = 121,
    INT16 = 110,
    UINT16 = 113,
    INT32 = 105,
    UINT32 = 117,
    INT64 = 120,
    UINT64 = 116,
    HANDLE = 104,
    DOUBLE = 100,
    STRING = 115,
    OBJECT_PATH = 111,
    SIGNATURE = 103,
    VARIANT = 118,
    MAYBE = 109,
    ARRAY = 97,
    TUPLE = 40,
    DICT_ENTRY = 123
  }
  
  export enum VariantParseError {
    FAILED = 0,
    BASIC_TYPE_EXPECTED = 1,
    CANNOT_INFER_TYPE = 2,
    DEFINITE_TYPE_EXPECTED = 3,
    INPUT_NOT_AT_END = 4,
    INVALID_CHARACTER = 5,
    INVALID_FORMAT_STRING = 6,
    INVALID_OBJECT_PATH = 7,
    INVALID_SIGNATURE = 8,
    INVALID_TYPE_STRING = 9,
    NO_COMMON_TYPE = 10,
    NUMBER_OUT_OF_RANGE = 11,
    NUMBER_TOO_BIG = 12,
    TYPE_ERROR = 13,
    UNEXPECTED_TOKEN = 14,
    UNKNOWN_KEYWORD = 15,
    UNTERMINATED_STRING_CONSTANT = 16,
    VALUE_EXPECTED = 17
  }
  
  export enum AsciiType {
    ALNUM = 1,
    ALPHA = 2,
    CNTRL = 4,
    DIGIT = 8,
    GRAPH = 16,
    LOWER = 32,
    PRINT = 64,
    PUNCT = 128,
    SPACE = 256,
    UPPER = 512,
    XDIGIT = 1024
  }
  
  export enum FileTest {
    IS_REGULAR = 1,
    IS_SYMLINK = 2,
    IS_DIR = 4,
    IS_EXECUTABLE = 8,
    EXISTS = 16
  }
  
  export enum FormatSizeFlags {
    DEFAULT = 0,
    LONG_FORMAT = 1,
    IEC_UNITS = 2
  }
  
  export enum HookFlagMask {
    ACTIVE = 1,
    IN_CALL = 2,
    MASK = 15
  }
  
  export enum IOCondition {
    IN = 1,
    OUT = 4,
    PRI = 2,
    ERR = 8,
    HUP = 16,
    NVAL = 32
  }
  
  export enum IOFlags {
    APPEND = 1,
    NONBLOCK = 2,
    IS_READABLE = 4,
    IS_WRITABLE = 8,
    IS_WRITEABLE = 8,
    IS_SEEKABLE = 16,
    MASK = 31,
    GET_MASK = 31,
    SET_MASK = 3
  }
  
  export enum KeyFileFlags {
    NONE = 0,
    KEEP_COMMENTS = 1,
    KEEP_TRANSLATIONS = 2
  }
  
  export enum LogLevelFlags {
    FLAG_RECURSION = 1,
    FLAG_FATAL = 2,
    LEVEL_ERROR = 4,
    LEVEL_CRITICAL = 8,
    LEVEL_WARNING = 16,
    LEVEL_MESSAGE = 32,
    LEVEL_INFO = 64,
    LEVEL_DEBUG = 128,
    LEVEL_MASK = -4
  }
  
  export enum MarkupCollectType {
    INVALID = 0,
    STRING = 1,
    STRDUP = 2,
    BOOLEAN = 3,
    TRISTATE = 4,
    OPTIONAL = 65536
  }
  
  export enum MarkupParseFlags {
    DO_NOT_USE_THIS_UNSUPPORTED_FLAG = 1,
    TREAT_CDATA_AS_TEXT = 2,
    PREFIX_ERROR_POSITION = 4,
    IGNORE_QUALIFIED = 8
  }
  
  export enum OptionFlags {
    NONE = 0,
    HIDDEN = 1,
    IN_MAIN = 2,
    REVERSE = 4,
    NO_ARG = 8,
    FILENAME = 16,
    OPTIONAL_ARG = 32,
    NOALIAS = 64
  }
  
  export enum RegexCompileFlags {
    CASELESS = 1,
    MULTILINE = 2,
    DOTALL = 4,
    EXTENDED = 8,
    ANCHORED = 16,
    DOLLAR_ENDONLY = 32,
    UNGREEDY = 512,
    RAW = 2048,
    NO_AUTO_CAPTURE = 4096,
    OPTIMIZE = 8192,
    FIRSTLINE = 262144,
    DUPNAMES = 524288,
    NEWLINE_CR = 1048576,
    NEWLINE_LF = 2097152,
    NEWLINE_CRLF = 3145728,
    NEWLINE_ANYCRLF = 5242880,
    BSR_ANYCRLF = 8388608,
    JAVASCRIPT_COMPAT = 33554432
  }
  
  export enum RegexMatchFlags {
    ANCHORED = 16,
    NOTBOL = 128,
    NOTEOL = 256,
    NOTEMPTY = 1024,
    PARTIAL = 32768,
    NEWLINE_CR = 1048576,
    NEWLINE_LF = 2097152,
    NEWLINE_CRLF = 3145728,
    NEWLINE_ANY = 4194304,
    NEWLINE_ANYCRLF = 5242880,
    BSR_ANYCRLF = 8388608,
    BSR_ANY = 16777216,
    PARTIAL_SOFT = 32768,
    PARTIAL_HARD = 134217728,
    NOTEMPTY_ATSTART = 268435456
  }
  
  export enum SpawnFlags {
    DEFAULT = 0,
    LEAVE_DESCRIPTORS_OPEN = 1,
    DO_NOT_REAP_CHILD = 2,
    SEARCH_PATH = 4,
    STDOUT_TO_DEV_NULL = 8,
    STDERR_TO_DEV_NULL = 16,
    CHILD_INHERITS_STDIN = 32,
    FILE_AND_ARGV_ZERO = 64,
    SEARCH_PATH_FROM_ENVP = 128,
    CLOEXEC_PIPES = 256
  }
  
  export enum TestSubprocessFlags {
    STDIN = 1,
    STDOUT = 2,
    STDERR = 4
  }
  
  export enum TestTrapFlags {
    SILENCE_STDOUT = 128,
    SILENCE_STDERR = 256,
    INHERIT_STDIN = 512
  }
  
  export enum TraverseFlags {
    LEAVES = 1,
    NON_LEAVES = 2,
    ALL = 3,
    MASK = 3,
    LEAFS = 1,
    NON_LEAFS = 2
  }
  
  export class Array {
    public data: string;
    public len: number;
  }
  
  export class AsyncQueue {
    public length(): number;
    public lengthUnlocked(): number;
    public lock(): void;
    public pop(): any;
    public popUnlocked(): any;
    public push(data: any): void;
    public pushFront(item: any): void;
    public pushFrontUnlocked(item: any): void;
    public pushSorted(data: any, func: CompareDataFunc, userData: any): void;
    public pushSortedUnlocked(data: any, func: CompareDataFunc, userData: any): void;
    public pushUnlocked(data: any): void;
    public ref(): AsyncQueue;
    public refUnlocked(): void;
    public remove(item: any): boolean;
    public removeUnlocked(item: any): boolean;
    public sort(func: CompareDataFunc, userData: any): void;
    public sortUnlocked(func: CompareDataFunc, userData: any): void;
    public timedPop(endTime: TimeVal): any;
    public timedPopUnlocked(endTime: TimeVal): any;
    public timeoutPop(timeout: number): any;
    public timeoutPopUnlocked(timeout: number): any;
    public tryPop(): any;
    public tryPopUnlocked(): any;
    public unlock(): void;
    public unref(): void;
    public unrefAndUnlock(): void;
  }
  
  export class BookmarkFile {
    public addApplication(uri: string, name: string, exec: string): void;
    public addGroup(uri: string, group: string): void;
    public free(): void;
    public getAdded(uri: string): number;
    public getAppInfo(uri: string, name: string, exec: string, count: number, stamp: number): boolean;
    public getApplications(uri: string, length: number): string[];
    public getDescription(uri: string): string;
    public getGroups(uri: string, length: number): string[];
    public getIcon(uri: string, href: string, mimeType: string): boolean;
    public getIsPrivate(uri: string): boolean;
    public getMimeType(uri: string): string;
    public getModified(uri: string): number;
    public getSize(): number;
    public getTitle(uri: string): string;
    public getUris(length: number): string[];
    public getVisited(uri: string): number;
    public hasApplication(uri: string, name: string): boolean;
    public hasGroup(uri: string, group: string): boolean;
    public hasItem(uri: string): boolean;
    public loadFromData(data: string, length: number): boolean;
    public loadFromDataDirs(file: string, fullPath: string): boolean;
    public loadFromFile(filename: string): boolean;
    public moveItem(oldUri: string, newUri: string): boolean;
    public removeApplication(uri: string, name: string): boolean;
    public removeGroup(uri: string, group: string): boolean;
    public removeItem(uri: string): boolean;
    public setAdded(uri: string, added: number): void;
    public setAppInfo(uri: string, name: string, exec: string, count: number, stamp: number): boolean;
    public setDescription(uri: string, description: string): void;
    public setGroups(uri: string, groups: string, length: number): void;
    public setIcon(uri: string, href: string, mimeType: string): void;
    public setIsPrivate(uri: string, isPrivate: boolean): void;
    public setMimeType(uri: string, mimeType: string): void;
    public setModified(uri: string, modified: number): void;
    public setTitle(uri: string, title: string): void;
    public setVisited(uri: string, visited: number): void;
    public toData(length: number): string;
    public toFile(filename: string): boolean;
  }
  
  export class ByteArray {
    public data: number;
    public len: number;
  }
  
  export class Bytes {
    public compare(bytes2: Bytes): number;
    public equal(bytes2: Bytes): boolean;
    public getData(size: number): number[];
    public getSize(): number;
    public hash(): number;
    public newFromBytes(offset: number, length: number): Bytes;
    public ref(): Bytes;
    public unref(): void;
    public unrefToArray(): number[];
    public unrefToData(size: number): number[];
  }
  
  export class Checksum {
    public copy(): Checksum;
    public free(): void;
    public getDigest(buffer: number, digestLen: number): void;
    public getString(): string;
    public reset(): void;
    public update(data: number[], length: number): void;
  }
  
  export class Cond {
    public p: any;
    public i: number[];
    
    public broadcast(): void;
    public clear(): void;
    public init(): void;
    public signal(): void;
    public wait(mutex: Mutex): void;
    public waitUntil(mutex: Mutex, endTime: number): boolean;
  }
  
  export class Data {
    
  }
  
  export class Date {
    public julianDays: number;
    public julian: number;
    public dmy: number;
    public day: number;
    public month: number;
    public year: number;
    
    public addDays(nDays: number): void;
    public addMonths(nMonths: number): void;
    public addYears(nYears: number): void;
    public clamp(minDate: Date, maxDate: Date): void;
    public clear(nDates: number): void;
    public compare(rhs: Date): number;
    public daysBetween(date2: Date): number;
    public free(): void;
    public getDay(): DateDay;
    public getDayOfYear(): number;
    public getIso8601WeekOfYear(): number;
    public getJulian(): number;
    public getMondayWeekOfYear(): number;
    public getMonth(): DateMonth;
    public getSundayWeekOfYear(): number;
    public getWeekday(): DateWeekday;
    public getYear(): DateYear;
    public isFirstOfMonth(): boolean;
    public isLastOfMonth(): boolean;
    public order(date2: Date): void;
    public setDay(day: DateDay): void;
    public setDmy(day: DateDay, month: DateMonth, _y: DateYear): void;
    public setJulian(julianDate: number): void;
    public setMonth(month: DateMonth): void;
    public setParse(str: string): void;
    public setTime(time_: Time): void;
    public setTimeT(timet: number): void;
    public setTimeVal(timeval: TimeVal): void;
    public setYear(year: DateYear): void;
    public subtractDays(nDays: number): void;
    public subtractMonths(nMonths: number): void;
    public subtractYears(nYears: number): void;
    public toStructTm(tm: any): void;
    public valid(): boolean;
  }
  
  export class DateTime {
    public add(timespan: TimeSpan): DateTime;
    public addDays(days: number): DateTime;
    public addFull(years: number, months: number, days: number, hours: number, minutes: number, seconds: number): DateTime;
    public addHours(hours: number): DateTime;
    public addMinutes(minutes: number): DateTime;
    public addMonths(months: number): DateTime;
    public addSeconds(seconds: number): DateTime;
    public addWeeks(weeks: number): DateTime;
    public addYears(years: number): DateTime;
    public difference(begin: DateTime): TimeSpan;
    public format(format: string): string;
    public getDayOfMonth(): number;
    public getDayOfWeek(): number;
    public getDayOfYear(): number;
    public getHour(): number;
    public getMicrosecond(): number;
    public getMinute(): number;
    public getMonth(): number;
    public getSecond(): number;
    public getSeconds(): number;
    public getTimezoneAbbreviation(): string;
    public getUtcOffset(): TimeSpan;
    public getWeekNumberingYear(): number;
    public getWeekOfYear(): number;
    public getYear(): number;
    public getYmd(year: number, month: number, day: number): void;
    public isDaylightSavings(): boolean;
    public ref(): DateTime;
    public toLocal(): DateTime;
    public toTimeval(tv: TimeVal): boolean;
    public toTimezone(tz: TimeZone): DateTime;
    public toUnix(): number;
    public toUtc(): DateTime;
    public unref(): void;
  }
  
  export class DebugKey {
    public key: string;
    public value: number;
  }
  
  export class Dir {
    public close(): void;
    public readName(): string;
    public rewind(): void;
  }
  
  export class Error {
    public domain: Quark;
    public code: number;
    public message: string;
    
    public copy(): Error;
    public free(): void;
    public matches(domain: Quark, code: number): boolean;
  }
  
  export class HashTable {
    
  }
  
  export class HashTableIter {
    public dummy1: any;
    public dummy2: any;
    public dummy3: any;
    public dummy4: number;
    public dummy5: boolean;
    public dummy6: any;
    
    public getHashTable(): GLib.HashTable;
    public init(hashTable: GLib.HashTable): void;
    public next(key: any, value: any): boolean;
    public remove(): void;
    public replace(value: any): void;
    public steal(): void;
  }
  
  export class Hmac {
    public copy(): Hmac;
    public getDigest(buffer: number, digestLen: number): void;
    public getString(): string;
    public ref(): Hmac;
    public unref(): void;
    public update(data: number[], length: number): void;
  }
  
  export class Hook {
    public data: any;
    public next: Hook;
    public prev: Hook;
    public refCount: number;
    public hookId: number;
    public flags: number;
    public func: any;
    public destroy: DestroyNotify;
    
    public compareIds(sibling: Hook): number;
  }
  
  export class HookList {
    public seqId: number;
    public hookSize: number;
    public isSetup: number;
    public hooks: Hook;
    public dummy3: any;
    public finalizeHook: HookFinalizeFunc;
    public dummy: any[];
    
    public clear(): void;
    public init(hookSize: number): void;
    public invoke(mayRecurse: boolean): void;
    public invokeCheck(mayRecurse: boolean): void;
    public marshal(mayRecurse: boolean, marshaller: HookMarshaller, marshalData: any): void;
    public marshalCheck(mayRecurse: boolean, marshaller: HookCheckMarshaller, marshalData: any): void;
  }
  
  export class IConv {
    public undefined(inbuf: string, inbytesLeft: number, outbuf: string, outbytesLeft: number): number;
    public close(): number;
  }
  
  export class IOChannel {
    public refCount: number;
    public funcs: IOFuncs;
    public encoding: string;
    public readCd: IConv;
    public writeCd: IConv;
    public lineTerm: string;
    public lineTermLen: number;
    public bufSize: number;
    public readBuf: String;
    public encodedReadBuf: String;
    public writeBuf: String;
    public partialWriteBuf: string[];
    public useBuffer: number;
    public doEncode: number;
    public closeOnUnref: number;
    public isReadable: number;
    public isWriteable: number;
    public isSeekable: number;
    public reserved1: any;
    public reserved2: any;
    
    public close(): void;
    public flush(): IOStatus;
    public getBufferCondition(): IOCondition;
    public getBufferSize(): number;
    public getBuffered(): boolean;
    public getCloseOnUnref(): boolean;
    public getEncoding(): string;
    public getFlags(): IOFlags;
    public getLineTerm(length: number): string;
    public init(): void;
    public read(buf: string, count: number, bytesRead: number): IOError;
    public readChars(buf: number[], count: number, bytesRead: number): IOStatus;
    public readLine(strReturn: string, length: number, terminatorPos: number): IOStatus;
    public readLineString(buffer: String, terminatorPos: number): IOStatus;
    public readToEnd(strReturn: number[], length: number): IOStatus;
    public readUnichar(thechar: string): IOStatus;
    public ref(): IOChannel;
    public seek(offset: number, type: SeekType): IOError;
    public seekPosition(offset: number, type: SeekType): IOStatus;
    public setBufferSize(size: number): void;
    public setBuffered(buffered: boolean): void;
    public setCloseOnUnref(doClose: boolean): void;
    public setEncoding(encoding: string): IOStatus;
    public setFlags(flags: IOFlags): IOStatus;
    public setLineTerm(lineTerm: string, length: number): void;
    public shutdown(flush: boolean): IOStatus;
    public unixGetFd(): number;
    public unref(): void;
    public write(buf: string, count: number, bytesWritten: number): IOError;
    public writeChars(buf: number[], count: number, bytesWritten: number): IOStatus;
    public writeUnichar(thechar: string): IOStatus;
  }
  
  export class IOFuncs {
    ioRead : { (channel: IOChannel, buf: string, count: number, bytesRead: number): IOStatus; };
    ioWrite : { (channel: IOChannel, buf: string, count: number, bytesWritten: number): IOStatus; };
    ioSeek : { (channel: IOChannel, offset: number, type: SeekType): IOStatus; };
    ioClose : { (channel: IOChannel): IOStatus; };
    ioCreateWatch : { (channel: IOChannel, condition: IOCondition): Source; };
    ioFree : { (channel: IOChannel): void; };
    ioSetFlags : { (channel: IOChannel, flags: IOFlags): IOStatus; };
    ioGetFlags : { (channel: IOChannel): IOFlags; };
  }
  
  export class KeyFile {
    public free(): void;
    public getBoolean(groupName: string, key: string): boolean;
    public getBooleanList(groupName: string, key: string, length: number): boolean[];
    public getComment(groupName: string, key: string): string;
    public getDouble(groupName: string, key: string): number;
    public getDoubleList(groupName: string, key: string, length: number): number[];
    public getGroups(length: number): string[];
    public getInt64(groupName: string, key: string): number;
    public getInteger(groupName: string, key: string): number;
    public getIntegerList(groupName: string, key: string, length: number): number[];
    public getKeys(groupName: string, length: number): string[];
    public getLocaleString(groupName: string, key: string, locale: string): string;
    public getLocaleStringList(groupName: string, key: string, locale: string, length: number): string[];
    public getStartGroup(): string;
    public getString(groupName: string, key: string): string;
    public getStringList(groupName: string, key: string, length: number): string[];
    public getUint64(groupName: string, key: string): number;
    public getValue(groupName: string, key: string): string;
    public hasGroup(groupName: string): boolean;
    public hasKey(groupName: string, key: string): boolean;
    public loadFromBytes(bytes: Bytes, flags: KeyFileFlags): boolean;
    public loadFromData(data: string, length: number, flags: KeyFileFlags): boolean;
    public loadFromDataDirs(file: string, fullPath: string, flags: KeyFileFlags): boolean;
    public loadFromDirs(file: string, searchDirs: string[], fullPath: string, flags: KeyFileFlags): boolean;
    public loadFromFile(file: string, flags: KeyFileFlags): boolean;
    public ref(): KeyFile;
    public removeComment(groupName: string, key: string): boolean;
    public removeGroup(groupName: string): boolean;
    public removeKey(groupName: string, key: string): boolean;
    public saveToFile(filename: string): boolean;
    public setBoolean(groupName: string, key: string, value: boolean): void;
    public setBooleanList(groupName: string, key: string, list: boolean[], length: number): void;
    public setComment(groupName: string, key: string, comment: string): boolean;
    public setDouble(groupName: string, key: string, value: number): void;
    public setDoubleList(groupName: string, key: string, list: number[], length: number): void;
    public setInt64(groupName: string, key: string, value: number): void;
    public setInteger(groupName: string, key: string, value: number): void;
    public setIntegerList(groupName: string, key: string, list: number[], length: number): void;
    public setListSeparator(separator: string): void;
    public setLocaleString(groupName: string, key: string, locale: string, string: string): void;
    public setLocaleStringList(groupName: string, key: string, locale: string, list: string[], length: number): void;
    public setString(groupName: string, key: string, string: string): void;
    public setStringList(groupName: string, key: string, list: string[], length: number): void;
    public setUint64(groupName: string, key: string, value: number): void;
    public setValue(groupName: string, key: string, value: string): void;
    public toData(length: number): string;
    public unref(): void;
  }
  
  export class List {
    public data: any;
    public next: GLib.List;
    public prev: GLib.List;
  }
  
  export class LogField {
    public key: string;
    public value: any;
    public length: number;
  }
  
  export class MainContext {
    public acquire(): boolean;
    public addPoll(fd: PollFD, priority: number): void;
    public check(maxPriority: number, fds: PollFD[], nFds: number): number;
    public dispatch(): void;
    public findSourceByFuncsUserData(funcs: SourceFuncs, userData: any): Source;
    public findSourceById(sourceId: number): Source;
    public findSourceByUserData(userData: any): Source;
    public getPollFunc(): PollFunc;
    public invoke(_function: SourceFunc, data: any): void;
    public invokeFull(priority: number, _function: SourceFunc, data: any, notify: DestroyNotify): void;
    public isOwner(): boolean;
    public iteration(mayBlock: boolean): boolean;
    public pending(): boolean;
    public popThreadDefault(): void;
    public prepare(priority: number): boolean;
    public pushThreadDefault(): void;
    public query(maxPriority: number, timeout_: number, fds: PollFD[], nFds: number): number;
    public ref(): MainContext;
    public release(): void;
    public removePoll(fd: PollFD): void;
    public setPollFunc(func: PollFunc): void;
    public unref(): void;
    public wait(cond: Cond, mutex: Mutex): boolean;
    public wakeup(): void;
  }
  
  export class MainLoop {
    public getContext(): MainContext;
    public isRunning(): boolean;
    public quit(): void;
    public ref(): MainLoop;
    public run(): void;
    public unref(): void;
  }
  
  export class MappedFile {
    public free(): void;
    public getBytes(): Bytes;
    public getContents(): string;
    public getLength(): number;
    public ref(): MappedFile;
    public unref(): void;
  }
  
  export class MarkupParseContext {
    public endParse(): boolean;
    public free(): void;
    public getElement(): string;
    public getElementStack(): GLib.SList;
    public getPosition(lineNumber: number, charNumber: number): void;
    public getUserData(): any;
    public parse(text: string, textLen: number): boolean;
    public pop(): any;
    public push(parser: MarkupParser, userData: any): void;
    public ref(): MarkupParseContext;
    public unref(): void;
  }
  
  export class MarkupParser {
    startElement : { (context: MarkupParseContext, elementName: string, attributeNames: string, attributeValues: string, userData: any): void; };
    endElement : { (context: MarkupParseContext, elementName: string, userData: any): void; };
    text : { (context: MarkupParseContext, text: string, textLen: number, userData: any): void; };
    passthrough : { (context: MarkupParseContext, passthroughText: string, textLen: number, userData: any): void; };
    error : { (context: MarkupParseContext, error: Error, userData: any): void; };
  }
  
  export class MatchInfo {
    public expandReferences(stringToExpand: string): string;
    public fetch(matchNum: number): string;
    public fetchAll(): string[];
    public fetchNamed(name: string): string;
    public fetchNamedPos(name: string, startPos: number, endPos: number): boolean;
    public fetchPos(matchNum: number, startPos: number, endPos: number): boolean;
    public free(): void;
    public getMatchCount(): number;
    public getRegex(): Regex;
    public getString(): string;
    public isPartialMatch(): boolean;
    public matches(): boolean;
    public next(): boolean;
    public ref(): MatchInfo;
    public unref(): void;
  }
  
  export class MemVTable {
    malloc : { (nBytes: number): any; };
    realloc : { (mem: any, nBytes: number): any; };
    free : { (mem: any): void; };
    calloc : { (nBlocks: number, nBlockBytes: number): any; };
    tryMalloc : { (nBytes: number): any; };
    tryRealloc : { (mem: any, nBytes: number): any; };
  }
  
  export class Node {
    public data: any;
    public next: Node;
    public prev: Node;
    public parent: Node;
    public children: Node;
    
    public childIndex(data: any): number;
    public childPosition(child: Node): number;
    public childrenForeach(flags: TraverseFlags, func: NodeForeachFunc, data: any): void;
    public copy(): Node;
    public copyDeep(copyFunc: CopyFunc, data: any): Node;
    public depth(): number;
    public destroy(): void;
    public find(order: TraverseType, flags: TraverseFlags, data: any): Node;
    public findChild(flags: TraverseFlags, data: any): Node;
    public firstSibling(): Node;
    public getRoot(): Node;
    public insert(position: number, node: Node): Node;
    public insertAfter(sibling: Node, node: Node): Node;
    public insertBefore(sibling: Node, node: Node): Node;
    public isAncestor(descendant: Node): boolean;
    public lastChild(): Node;
    public lastSibling(): Node;
    public maxHeight(): number;
    public nChildren(): number;
    public nNodes(flags: TraverseFlags): number;
    public nthChild(_n: number): Node;
    public prepend(node: Node): Node;
    public reverseChildren(): void;
    public traverse(order: TraverseType, flags: TraverseFlags, maxDepth: number, func: NodeTraverseFunc, data: any): void;
    public unlink(): void;
  }
  
  export class Once {
    public status: OnceStatus;
    public retval: any;
    
    public impl(func: ThreadFunc, arg: any): any;
  }
  
  export class OptionContext {
    public addGroup(group: OptionGroup): void;
    public addMainEntries(entries: OptionEntry, translationDomain: string): void;
    public free(): void;
    public getDescription(): string;
    public getHelp(mainHelp: boolean, group: OptionGroup): string;
    public getHelpEnabled(): boolean;
    public getIgnoreUnknownOptions(): boolean;
    public getMainGroup(): OptionGroup;
    public getStrictPosix(): boolean;
    public getSummary(): string;
    public parse(argc: number, argv: string[]): boolean;
    public parseStrv(_arguments: string[]): boolean;
    public setDescription(description: string): void;
    public setHelpEnabled(helpEnabled: boolean): void;
    public setIgnoreUnknownOptions(ignoreUnknown: boolean): void;
    public setMainGroup(group: OptionGroup): void;
    public setStrictPosix(strictPosix: boolean): void;
    public setSummary(summary: string): void;
    public setTranslateFunc(func: TranslateFunc, data: any, destroyNotify: DestroyNotify): void;
    public setTranslationDomain(domain: string): void;
  }
  
  export class OptionEntry {
    public longName: string;
    public shortName: string;
    public flags: number;
    public arg: OptionArg;
    public argData: any;
    public description: string;
    public argDescription: string;
  }
  
  export class OptionGroup {
    public addEntries(entries: OptionEntry): void;
    public free(): void;
    public ref(): OptionGroup;
    public setErrorHook(errorFunc: OptionErrorFunc): void;
    public setParseHooks(preParseFunc: OptionParseFunc, postParseFunc: OptionParseFunc): void;
    public setTranslateFunc(func: TranslateFunc, data: any, destroyNotify: DestroyNotify): void;
    public setTranslationDomain(domain: string): void;
    public unref(): void;
  }
  
  export class PatternSpec {
    public equal(pspec2: PatternSpec): boolean;
    public free(): void;
  }
  
  export class PollFD {
    public fd: number;
    public events: number;
    public revents: number;
  }
  
  export class Private {
    public p: any;
    public notify: DestroyNotify;
    public future: any[];
    
    public get(): any;
    public replace(value: any): void;
    public set(value: any): void;
  }
  
  export class PtrArray {
    public pdata: any;
    public len: number;
  }
  
  export class Queue {
    public head: GLib.List;
    public tail: GLib.List;
    public length: number;
    
    public clear(): void;
    public copy(): Queue;
    public deleteLink(link_: GLib.List): void;
    public find(data: any): GLib.List;
    public findCustom(data: any, func: CompareFunc): GLib.List;
    public foreach(func: Func, userData: any): void;
    public free(): void;
    public freeFull(freeFunc: DestroyNotify): void;
    public getLength(): number;
    public index(data: any): number;
    public init(): void;
    public insertAfter(sibling: GLib.List, data: any): void;
    public insertBefore(sibling: GLib.List, data: any): void;
    public insertSorted(data: any, func: CompareDataFunc, userData: any): void;
    public isEmpty(): boolean;
    public linkIndex(link_: GLib.List): number;
    public peekHead(): any;
    public peekHeadLink(): GLib.List;
    public peekNth(_n: number): any;
    public peekNthLink(_n: number): GLib.List;
    public peekTail(): any;
    public peekTailLink(): GLib.List;
    public popHead(): any;
    public popHeadLink(): GLib.List;
    public popNth(_n: number): any;
    public popNthLink(_n: number): GLib.List;
    public popTail(): any;
    public popTailLink(): GLib.List;
    public pushHead(data: any): void;
    public pushHeadLink(link_: GLib.List): void;
    public pushNth(data: any, _n: number): void;
    public pushNthLink(_n: number, link_: GLib.List): void;
    public pushTail(data: any): void;
    public pushTailLink(link_: GLib.List): void;
    public remove(data: any): boolean;
    public removeAll(data: any): number;
    public reverse(): void;
    public sort(compareFunc: CompareDataFunc, userData: any): void;
    public unlink(link_: GLib.List): void;
  }
  
  export class RWLock {
    public p: any;
    public i: number[];
    
    public clear(): void;
    public init(): void;
    public readerLock(): void;
    public readerTrylock(): boolean;
    public readerUnlock(): void;
    public writerLock(): void;
    public writerTrylock(): boolean;
    public writerUnlock(): void;
  }
  
  export class Rand {
    public copy(): Rand;
    public double(): number;
    public doubleRange(begin: number, end: number): number;
    public free(): void;
    public int(): number;
    public intRange(begin: number, end: number): number;
    public setSeed(seed: number): void;
    public setSeedArray(seed: number, seedLength: number): void;
  }
  
  export class RecMutex {
    public p: any;
    public i: number[];
    
    public clear(): void;
    public init(): void;
    public lock(): void;
    public trylock(): boolean;
    public unlock(): void;
  }
  
  export class Regex {
    public getCaptureCount(): number;
    public getCompileFlags(): RegexCompileFlags;
    public getHasCrOrLf(): boolean;
    public getMatchFlags(): RegexMatchFlags;
    public getMaxBackref(): number;
    public getMaxLookbehind(): number;
    public getPattern(): string;
    public getStringNumber(name: string): number;
    public match(string: string, matchOptions: RegexMatchFlags, matchInfo: MatchInfo): boolean;
    public matchAll(string: string, matchOptions: RegexMatchFlags, matchInfo: MatchInfo): boolean;
    public matchAllFull(string: string[], stringLen: number, startPosition: number, matchOptions: RegexMatchFlags, matchInfo: MatchInfo): boolean;
    public matchFull(string: string[], stringLen: number, startPosition: number, matchOptions: RegexMatchFlags, matchInfo: MatchInfo): boolean;
    public ref(): Regex;
    public replace(string: string[], stringLen: number, startPosition: number, replacement: string, matchOptions: RegexMatchFlags): string;
    public replaceEval(string: string[], stringLen: number, startPosition: number, matchOptions: RegexMatchFlags, _eval: RegexEvalCallback, userData: any): string;
    public replaceLiteral(string: string[], stringLen: number, startPosition: number, replacement: string, matchOptions: RegexMatchFlags): string;
    public split(string: string, matchOptions: RegexMatchFlags): string[];
    public splitFull(string: string[], stringLen: number, startPosition: number, matchOptions: RegexMatchFlags, maxTokens: number): string[];
    public unref(): void;
  }
  
  export class SList {
    public data: any;
    public next: GLib.SList;
  }
  
  export class Scanner {
    public userData: any;
    public maxParseErrors: number;
    public parseErrors: number;
    public inputName: string;
    public qdata: Data;
    public config: ScannerConfig;
    public token: TokenType;
    public value: TokenValue;
    public line: number;
    public position: number;
    public nextToken: TokenType;
    public nextValue: TokenValue;
    public nextLine: number;
    public nextPosition: number;
    public symbolTable: GLib.HashTable;
    public inputFd: number;
    public text: string;
    public textEnd: string;
    public buffer: string;
    public scopeId: number;
    public msgHandler: ScannerMsgFunc;
    
    public curLine(): number;
    public curPosition(): number;
    public curToken(): TokenType;
    public curValue(): TokenValue;
    public destroy(): void;
    public eof(): boolean;
    public error(format: string, ...params: any[]): void;
    public getNextToken(): TokenType;
    public inputFile(inputFd: number): void;
    public inputText(text: string, textLen: number): void;
    public lookupSymbol(symbol: string): any;
    public peekNextToken(): TokenType;
    public scopeAddSymbol(scopeId: number, symbol: string, value: any): void;
    public scopeForeachSymbol(scopeId: number, func: HFunc, userData: any): void;
    public scopeLookupSymbol(scopeId: number, symbol: string): any;
    public scopeRemoveSymbol(scopeId: number, symbol: string): void;
    public setScope(scopeId: number): number;
    public syncFileOffset(): void;
    public unexpToken(expectedToken: TokenType, identifierSpec: string, symbolSpec: string, symbolName: string, message: string, isError: number): void;
    public warn(format: string, ...params: any[]): void;
  }
  
  export class ScannerConfig {
    public csetSkipCharacters: string;
    public csetIdentifierFirst: string;
    public csetIdentifierNth: string;
    public cpairCommentSingle: string;
    public caseSensitive: number;
    public skipCommentMulti: number;
    public skipCommentSingle: number;
    public scanCommentMulti: number;
    public scanIdentifier: number;
    public scanIdentifier_1char: number;
    public scanIdentifier_NULL: number;
    public scanSymbols: number;
    public scanBinary: number;
    public scanOctal: number;
    public scanFloat: number;
    public scanHex: number;
    public scanHexDollar: number;
    public scanStringSq: number;
    public scanStringDq: number;
    public numbers_2Int: number;
    public int_2Float: number;
    public identifier_2String: number;
    public char_2Token: number;
    public symbol_2Token: number;
    public scope_0Fallback: number;
    public storeInt64: number;
    public paddingDummy: number;
  }
  
  export class Sequence {
    public append(data: any): SequenceIter;
    public foreach(func: Func, userData: any): void;
    public free(): void;
    public getBeginIter(): SequenceIter;
    public getEndIter(): SequenceIter;
    public getIterAtPos(pos: number): SequenceIter;
    public getLength(): number;
    public insertSorted(data: any, cmpFunc: CompareDataFunc, cmpData: any): SequenceIter;
    public insertSortedIter(data: any, iterCmp: SequenceIterCompareFunc, cmpData: any): SequenceIter;
    public isEmpty(): boolean;
    public lookup(data: any, cmpFunc: CompareDataFunc, cmpData: any): SequenceIter;
    public lookupIter(data: any, iterCmp: SequenceIterCompareFunc, cmpData: any): SequenceIter;
    public prepend(data: any): SequenceIter;
    public search(data: any, cmpFunc: CompareDataFunc, cmpData: any): SequenceIter;
    public searchIter(data: any, iterCmp: SequenceIterCompareFunc, cmpData: any): SequenceIter;
    public sort(cmpFunc: CompareDataFunc, cmpData: any): void;
    public sortIter(cmpFunc: SequenceIterCompareFunc, cmpData: any): void;
  }
  
  export class SequenceIter {
    public compare(b: SequenceIter): number;
    public getPosition(): number;
    public getSequence(): Sequence;
    public isBegin(): boolean;
    public isEnd(): boolean;
    public move(delta: number): SequenceIter;
    public next(): SequenceIter;
    public prev(): SequenceIter;
  }
  
  export class Source {
    public callbackData: any;
    public callbackFuncs: SourceCallbackFuncs;
    public sourceFuncs: SourceFuncs;
    public refCount: number;
    public context: MainContext;
    public priority: number;
    public flags: number;
    public sourceId: number;
    public pollFds: GLib.SList;
    public prev: Source;
    public next: Source;
    public name: string;
    public priv: SourcePrivate;
    
    public addChildSource(childSource: Source): void;
    public addPoll(fd: PollFD): void;
    public addUnixFd(fd: number, events: IOCondition): any;
    public attach(context: MainContext): number;
    public destroy(): void;
    public getCanRecurse(): boolean;
    public getContext(): MainContext;
    public getCurrentTime(timeval: TimeVal): void;
    public getId(): number;
    public getName(): string;
    public getPriority(): number;
    public getReadyTime(): number;
    public getTime(): number;
    public isDestroyed(): boolean;
    public modifyUnixFd(tag: any, newEvents: IOCondition): void;
    public queryUnixFd(tag: any): IOCondition;
    public ref(): Source;
    public removeChildSource(childSource: Source): void;
    public removePoll(fd: PollFD): void;
    public removeUnixFd(tag: any): void;
    public setCallback(func: SourceFunc, data: any, notify: DestroyNotify): void;
    public setCallbackIndirect(callbackData: any, callbackFuncs: SourceCallbackFuncs): void;
    public setCanRecurse(canRecurse: boolean): void;
    public setFuncs(funcs: SourceFuncs): void;
    public setName(name: string): void;
    public setPriority(priority: number): void;
    public setReadyTime(readyTime: number): void;
    public unref(): void;
  }
  
  export class SourceCallbackFuncs {
    ref : { (cbData: any): void; };
    unref : { (cbData: any): void; };
    get : { (cbData: any, source: Source, func: SourceFunc, data: any): void; };
  }
  
  export class SourceFuncs {
    public closureCallback: SourceFunc;
    public closureMarshal: SourceDummyMarshal;
    
    prepare : { (source: Source, timeout_: number): boolean; };
    check : { (source: Source): boolean; };
    dispatch : { (source: Source, callback: SourceFunc, userData: any): boolean; };
    finalize : { (source: Source): void; };
  }
  
  export class SourcePrivate {
    
  }
  
  export class StatBuf {
    
  }
  
  export class String {
    public str: string;
    public len: number;
    public allocatedLen: number;
    
    public append(_val: string): String;
    public appendC(_c: string): String;
    public appendLen(_val: string, len: number): String;
    public appendPrintf(format: string, ...params: any[]): void;
    public appendUnichar(wc: string): String;
    public appendUriEscaped(unescaped: string, reservedCharsAllowed: string, allowUtf8: boolean): String;
    public appendVprintf(format: string, args: any[]): void;
    public asciiDown(): String;
    public asciiUp(): String;
    public assign(rval: string): String;
    public down(): String;
    public equal(v2: String): boolean;
    public erase(pos: number, len: number): String;
    public free(freeSegment: boolean): string;
    public freeToBytes(): Bytes;
    public hash(): number;
    public insert(pos: number, _val: string): String;
    public insertC(pos: number, _c: string): String;
    public insertLen(pos: number, _val: string, len: number): String;
    public insertUnichar(pos: number, wc: string): String;
    public overwrite(pos: number, _val: string): String;
    public overwriteLen(pos: number, _val: string, len: number): String;
    public prepend(_val: string): String;
    public prependC(_c: string): String;
    public prependLen(_val: string, len: number): String;
    public prependUnichar(wc: string): String;
    public printf(format: string, ...params: any[]): void;
    public setSize(len: number): String;
    public truncate(len: number): String;
    public up(): String;
    public vprintf(format: string, args: any[]): void;
  }
  
  export class StringChunk {
    public clear(): void;
    public free(): void;
    public insert(string: string): string;
    public insertConst(string: string): string;
    public insertLen(string: string, len: number): string;
  }
  
  export class TestCase {
    
  }
  
  export class TestConfig {
    public testInitialized: boolean;
    public testQuick: boolean;
    public testPerf: boolean;
    public testVerbose: boolean;
    public testQuiet: boolean;
    public testUndefined: boolean;
  }
  
  export class TestLogBuffer {
    public data: String;
    public msgs: GLib.SList;
    
    public free(): void;
    public pop(): TestLogMsg;
    public push(nBytes: number, bytes: number): void;
  }
  
  export class TestLogMsg {
    public logType: TestLogType;
    public nStrings: number;
    public strings: string;
    public nNums: number;
    public nums: number;
    
    public free(): void;
  }
  
  export class TestSuite {
    public add(testCase: TestCase): void;
    public addSuite(nestedsuite: TestSuite): void;
  }
  
  export class Thread {
    public join(): any;
    public ref(): Thread;
    public unref(): void;
  }
  
  export class ThreadPool {
    public func: Func;
    public userData: any;
    public exclusive: boolean;
    
    public free(immediate: boolean, wait_: boolean): void;
    public getMaxThreads(): number;
    public getNumThreads(): number;
    public moveToFront(data: any): boolean;
    public push(data: any): boolean;
    public setMaxThreads(maxThreads: number): boolean;
    public setSortFunction(func: CompareDataFunc, userData: any): void;
    public unprocessed(): number;
  }
  
  export class TimeVal {
    public tvSec: number;
    public tvUsec: number;
    
    public add(microseconds: number): void;
    public toIso8601(): string;
  }
  
  export class TimeZone {
    public adjustTime(type: TimeType, time_: number): number;
    public findInterval(type: TimeType, time_: number): number;
    public getAbbreviation(interval: number): string;
    public getOffset(interval: number): number;
    public isDst(interval: number): boolean;
    public ref(): TimeZone;
    public unref(): void;
  }
  
  export class Timer {
    public continue(): void;
    public destroy(): void;
    public elapsed(microseconds: number): number;
    public reset(): void;
    public start(): void;
    public stop(): void;
  }
  
  export class TrashStack {
    public next: TrashStack;
  }
  
  export class Tree {
    public destroy(): void;
    public foreach(func: TraverseFunc, userData: any): void;
    public height(): number;
    public insert(key: any, value: any): void;
    public lookup(key: any): any;
    public lookupExtended(lookupKey: any, origKey: any, value: any): boolean;
    public nnodes(): number;
    public ref(): Tree;
    public remove(key: any): boolean;
    public replace(key: any, value: any): void;
    public search(searchFunc: CompareFunc, userData: any): any;
    public steal(key: any): boolean;
    public traverse(traverseFunc: TraverseFunc, traverseType: TraverseType, userData: any): void;
    public unref(): void;
  }
  
  export class Variant {
    public byteswap(): Variant;
    public checkFormatString(formatString: string, copyOnly: boolean): boolean;
    public classify(): VariantClass;
    public compare(two: Variant): number;
    public dupBytestring(length: number): number[];
    public dupBytestringArray(length: number): string[];
    public dupObjv(length: number): string[];
    public dupString(length: number): string;
    public dupStrv(length: number): string[];
    public equal(two: Variant): boolean;
    public get(formatString: string, ...params: any[]): void;
    public getBoolean(): boolean;
    public getByte(): number;
    public getBytestring(): number[];
    public getBytestringArray(length: number): string[];
    public getChild(index_: number, formatString: string, ...params: any[]): void;
    public getChildValue(index_: number): Variant;
    public getData(): any;
    public getDataAsBytes(): Bytes;
    public getDouble(): number;
    public getFixedArray(nElements: number, elementSize: number): any[];
    public getHandle(): number;
    public getInt16(): number;
    public getInt32(): number;
    public getInt64(): number;
    public getMaybe(): Variant;
    public getNormalForm(): Variant;
    public getObjv(length: number): string[];
    public getSize(): number;
    public getString(length: number): string;
    public getStrv(length: number): string[];
    public getType(): VariantType;
    public getTypeString(): string;
    public getUint16(): number;
    public getUint32(): number;
    public getUint64(): number;
    public getVa(formatString: string, endptr: string, app: any[]): void;
    public getVariant(): Variant;
    public hash(): number;
    public isContainer(): boolean;
    public isFloating(): boolean;
    public isNormalForm(): boolean;
    public isOfType(type: VariantType): boolean;
    public iterNew(): VariantIter;
    public lookup(key: string, formatString: string, ...params: any[]): boolean;
    public lookupValue(key: string, expectedType: VariantType): Variant;
    public nChildren(): number;
    public print(typeAnnotate: boolean): string;
    public printString(string: String, typeAnnotate: boolean): String;
    public ref(): Variant;
    public refSink(): Variant;
    public store(data: any): void;
    public takeRef(): Variant;
    public unref(): void;
  }
  
  export class VariantBuilder {
    public add(formatString: string, ...params: any[]): void;
    public addParsed(format: string, ...params: any[]): void;
    public addValue(value: Variant): void;
    public clear(): void;
    public close(): void;
    public end(): Variant;
    public init(type: VariantType): void;
    public open(type: VariantType): void;
    public ref(): VariantBuilder;
    public unref(): void;
  }
  
  export class VariantDict {
    public clear(): void;
    public contains(key: string): boolean;
    public end(): Variant;
    public init(fromAsv: Variant): void;
    public insert(key: string, formatString: string, ...params: any[]): void;
    public insertValue(key: string, value: Variant): void;
    public lookup(key: string, formatString: string, ...params: any[]): boolean;
    public lookupValue(key: string, expectedType: VariantType): Variant;
    public ref(): VariantDict;
    public remove(key: string): boolean;
    public unref(): void;
  }
  
  export class VariantIter {
    public x: number[];
    
    public copy(): VariantIter;
    public free(): void;
    public init(value: Variant): number;
    public loop(formatString: string, ...params: any[]): boolean;
    public nChildren(): number;
    public next(formatString: string, ...params: any[]): boolean;
    public nextValue(): Variant;
  }
  
  export class VariantType {
    public copy(): VariantType;
    public dupString(): string;
    public element(): VariantType;
    public equal(type2: VariantType): boolean;
    public first(): VariantType;
    public free(): void;
    public getStringLength(): number;
    public hash(): number;
    public isArray(): boolean;
    public isBasic(): boolean;
    public isContainer(): boolean;
    public isDefinite(): boolean;
    public isDictEntry(): boolean;
    public isMaybe(): boolean;
    public isSubtypeOf(supertype: VariantType): boolean;
    public isTuple(): boolean;
    public isVariant(): boolean;
    public key(): VariantType;
    public nItems(): number;
    public next(): VariantType;
    public peekString(): string;
    public value(): VariantType;
  }
  
  export interface DoubleIEEE754 {}
  
  export interface FloatIEEE754 {}
  
  export interface Mutex {}
  
  export interface TokenValue {}

}