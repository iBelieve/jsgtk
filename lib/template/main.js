pkg.initGettext();
pkg.require(@DEPS@);

let resource = imports.gi.Gio.Resource.load(imports.gi.GLib.build_filenamev([
  @PKGDATADIR@, 'jsgtk.runtime.gresource'
]));
resource._register();

imports.searchPath.unshift('resource:///jsgtk')

function main(argv) {
  imports.jsgtk.runtime.bootstrap()
  require(pkg.moduledir)
}
