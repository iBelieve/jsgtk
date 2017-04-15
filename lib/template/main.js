pkg.initGettext();
pkg.require(@DEPS@);

let resource = imports.gi.Gio.Resource.load(imports.gi.GLib.build_filenamev([
  @PKGDATADIR@, 'io.mspencer.JSGtk.runtime.gresource'
]));
resource._register();

imports.searchPath.unshift('resource:///io/mspencer/JSGtk')

function main(argv) {
  imports.jsgtk.runtime.bootstrap()
  require('./index')
}
