/*! © Andrea Giammarchi @WebReflection */

/* jshint esversion: 6, strict: true, node: true, eqnull:true */

(function (exports, evaluate) {'use strict';

  const

    gi = imports.gi,
    GLib = gi.GLib,
    Gio = gi.Gio,
    GFile = Gio.File,

    constants = imports.jsgtk.constants,

    trim = String.prototype.trim,

    modules = Object.create(null),

    exp = {
      has: (id) => id in modules,
      get: (id) => modules[id],
      load: load
    }

  ;

  function error(module) {
    throw new Error('unable to find module ' + module);
  }

  function grabModuleFD(path) {
    let fd = GFile.new_for_path(path);
    if (fd.query_exists(null)) {
      switch (fd.query_file_type(Gio.FileQueryInfoFlags.NONE, null)) {
        case Gio.FileType.REGULAR: return fd;
        case Gio.FileType.DIRECTORY:
          fd = GFile.new_for_path(path + constants.DIR_SEPARATOR + 'package.json');
          if (fd.query_exists(null)) {
            let content = JSON.parse(trim.call(fd.load_contents(null)[1]));
            if (content.main == null) content.main = 'index.js';
            fd = GFile.new_for_path(path + constants.DIR_SEPARATOR + content.main);
            if (fd.query_exists(null)) return fd;
          } else {
            // TODO does npm guarantee a package.json
            fd = GFile.new_for_path(path + constants.DIR_SEPARATOR + 'main.js');
            if (fd.query_exists(null)) return fd;
          }
      }
    } else {
        // cases such as require('my-lib/src/component')
        let fd = GFile.new_for_path(path + '.js');
        if (fd.query_exists(null)) return fd;
    }
    return null;
  }

  function getModuleFile(path, dir) {
    let fd;
    switch (true) {
      case GLib.path_is_absolute(path):
        fd = grabModuleFD(path);
        if (fd) {
          return fd;
        } else if (path.slice(-3) !== '.js') {
          fd = GFile.new_for_path(path + '.js');
          if (fd.query_exists(null)) return fd;
        }
        return error(path);
      case '.' === path[0]:
        return getModuleFile(dir + constants.DIR_SEPARATOR + path);
      default:
        const gPs = [dir].concat(require('module').globalPaths);
        while (gPs.length) {
          let tmp = GFile.new_for_path(gPs.shift());
          do {
            fd = grabModuleFD([
              tmp.get_path(), 'node_modules', path
            ].join(constants.DIR_SEPARATOR));
            if (fd) return fd;
          } while((tmp = tmp.get_parent()));
        }
        return error(path);
    }
  }

  function load(module, dir) {
    let
      fd = getModuleFile(module, dir),
      id = fd.get_path(),
      module_dir = id.slice(0, -1 -fd.get_basename().length),
      data = fd.load_contents(null)[1].toString()
    ;
    return evaluate(modules, id, id, module_dir, data);
  }

  exports.withRuntime = function setup($evaluate) {
    if (!evaluate) evaluate = $evaluate;
    return exp;
  };

}(this));