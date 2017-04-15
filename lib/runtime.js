(function (exports) {
  'use strict';

  const gi = imports.gi
  const GLib = gi.GLib

  const global = window

  const core = imports.jsgtk.module_loader.core.withRuntime(evaluateModule)
  const gtk = imports.jsgtk.module_loader.gtk.withRuntime()
  const modules = imports.jsgtk.module_loader.node.withRuntime(evaluateModule)

  const CURRENT_DIR = GLib.get_current_dir()

  function evaluateModule(namespace, id, filename, dir, data) {
    const exports = {}
    const module = { exports: exports, id: filename }
    const content = new String(data).replace(/^#![^\n\r]*/, '')

    namespace[id] = exports

    function require(module) {
      return requireWithPath(module, dir);
    }

    try {
      Function('require', 'exports', 'module', '__dirname', '__filename', content)
      .call(exports, require, exports, module, dir, filename)
    } catch (error) {
      throw new Error('Unable to load module: ' + module.id + ': ' + error.message + '\n\n' + content)
    }

    return (namespace[id] = module.exports)
  }

  function requireWithPath(module, dir) {
    if (core.has(module)) {
      return core.get(module)
    } else if (gtk.has(module)) {
      return gtk.get(module)
    } else {
      return modules.get(module) || modules.load(module, dir)
    }
  }

  exports.bootstrap = function () {
    const CURRENT_DIR = GLib.get_current_dir();
    const DIR_SEPARATOR = /\//.test(CURRENT_DIR) ? '/' : '\\';
    const PROGRAM_NAME = imports.system.programInvocationName;

    if (typeof Promise === 'undefined') {
      // Object.defineProperty(global,
      //   'Promise',
      //   { value: imports.promise.ES6Promise.Promise }
      // )
    }

    Object.defineProperties(imports.jsgtk.constants, {
      CURRENT_DIR: { enumerable: true, value: CURRENT_DIR },
      DIR_SEPARATOR: { enumerable: true, value: DIR_SEPARATOR },
      PROGRAM_NAME: { enumerable: true, value: PROGRAM_NAME }
    })

    Object.defineProperties(global, {
      // Make global truly global
      global: { enumerable: true, value: global },
      // used as ES6 classes properties decorator:
      // https://github.com/WebReflection/jsgtk/blob/master/examples/lang.js
      // GObjectProperties: { value: imports.jsgtk.extended.GObjectProperties },
      // Access modules from within jsgtk
      require: { value: function require(module) {
        return requireWithPath(module, CURRENT_DIR)
      }}
    })

    const polyfills = imports.jsgtk.polyfills

    // Install global modules
    ARGV.core = core

    core.get('process')
    core.get('console')

    delete ARGV.core
  }
}(this))
