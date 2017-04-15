(function(exports, evaluate) {
  'use strict';

  const GFile = imports.gi.Gio.File
  const gresources_lookup_data = imports.gi.Gio.resources_lookup_data
  const GResourceLookupFlags = imports.gi.Gio.ResourceLookupFlags

  const moduleNames = [
    'assert',
    'buffer',
    'child_process',
    'console',
    'crypto',
    'events',
    'fs',
    'http',
    'module',
    'os',
    'path',
    'process',
    'punycode',
    'querystring',
    'stream',
    'timers',
    'url',
    'util'
  ]

  const modules = moduleNames
    .reduce((modules, name) => Object.defineProperty(modules, name, {
      configurable: true,
      get: () => {
        delete modules[name]
        return load(name)
      }
    }), Object.create(null))

  function load(id) {
    const dirname = '/io/mspencer/JSGtk/jsgtk/core_modules'
    const filename = dirname + '/' + id + '.js'
    try {
      const data = gresources_lookup_data(filename, GResourceLookupFlags.NONE).toArray().toString()
    } catch (error) {
      throw new Error('Core module was not bundled in jsgtk: ' + id)
    }
    return evaluate(modules, id, filename, dirname, data)
  }

  exports.withRuntime = function ($evaluate) {
    if ($evaluate) evaluate = $evaluate

    return {
      has: (id) => id in modules,
      get: (id) => modules[id],
      load: load
    }
  }
}(this));
