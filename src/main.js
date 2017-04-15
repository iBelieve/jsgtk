pkg.initFormat();
pkg.require({ 'Gio': '2.0',
              'GLib': '2.0',
              'GObject': '2.0' });

let resource = imports.gi.Gio.Resource.load(imports.gi.GLib.build_filenamev([
  pkg.datadir, 'io.mspencer.JSGtk', 'io.mspencer.JSGtk.runtime.gresource'
]));
resource._register();

imports.searchPath.unshift('resource:///io/mspencer/JSGtk')

function main(argv) {
  imports.jsgtk.runtime.bootstrap()
  imports.index
}
