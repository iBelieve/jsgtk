/*! © Andrea Giammarchi @WebReflection */

/* jshint esversion: 6, strict: true, node: true, eqnull:true */

(function (exports, evaluate) {
  'use strict';

  const gi = imports.gi
  const GLib = gi.GLib
  const Gio = gi.Gio
  const gresources_lookup_data = Gio.resources_lookup_data
  const gresources_enumerate_children = Gio.resources_enumerate_children
  const GResourceLookupFlags = Gio.ResourceLookupFlags
  const GFile = Gio.File
  const constants = imports.jsgtk.constants

  const RESOURCE = 'resource://'

  const modules = {}

  function error(module) {
    throw new Error('unable to find module ' + module);
  }

  function getFileModule(fd) {
    return {
      id: fd.get_path(),
      dirname: fd.get_path().slice(0, -1 -fd.get_basename().length),
      content: fd.load_contents(null)[1].toString('utf8').slice(1)
    }
  }

  function dirname(path) {
    return path.substring(0, path.lastIndexOf('/'))
  }

  function getModuleContents(path, dir) {
    if (GLib.path_is_absolute(path)) {
      let fd = GFile.new_for_path(path)

      if (!fd.query_exists(null)) {
        if (path.endsWith('js')) {
          throw new Error('Module not found: ' + path)
        } else {
          return getModuleContents(path + '.js', dir)
        }
      }

      switch (fd.query_file_type(Gio.FileQueryInfoFlags.NONE, null)) {
        case Gio.FileType.REGULAR:
          return getFileModule(fd)
        case Gio.FileType.DIRECTORY:
          fd = GFile.new_for_path(path + constants.DIR_SEPARATOR + 'package.json')

          if (fd.query_exists(null)) {
            let content = JSON.parse(trim.call(fd.load_contents(null)[1]));
            if (content.main == null) content.main = 'index.js';

            fd = GFile.new_for_path(path + constants.DIR_SEPARATOR + content.main);

            if (fd.query_exists(null)) {
              return getFileModule(fd)
            } else {
              throw new Error('Main file listed in package.json not found: ' + fd.get_path())
            }
          } else {
            fd = GFile.new_for_path(path + constants.DIR_SEPARATOR + 'index.js')

            if (fd.query_exists(null)) {
              return getFileModule(fd)
            } else {
              throw new Error('Module is a directory and no index.js found: ' + path)
            }
          }
        default:
          throw new Error('Unknown file type: ' + path)
      }
    } else if (path.startsWith(RESOURCE)) {
      path = path.slice(RESOURCE.length)
        .replace(/\.\//g, '')
        .replace(/[^\/]+\/\.\.\//g, '')

      try {
        return {
          id: 'resource://' + path,
          dirname: dirname('resource://' + path),
          content: gresources_lookup_data(path, GResourceLookupFlags.NONE).toArray().toString()
        }
      } catch (error) {
        if (path.endsWith('.js')) {
          throw new Error('Module not found: resource://' + path)
        } else {
          try {
            return getModuleContents('resource://' + path + '.js', dir)
          } catch (error) {
            let children = []
            try {
              children = gresources_enumerate_children(path, GResourceLookupFlags.NONE)
            } catch (error) {
              throw new Error('Module not found: resource://' + path)
            }

            if (children.indexOf('index.js') !== -1) {
              return getModuleContents('resource://' + path + '/index.js', dir)
            } else {
              throw new Error('Module is a directory and no index.js found: resource://' + path)
            }
          }
        }
      }
    } else if (path.startsWith('.')) {
      return getModuleContents(dir + constants.DIR_SEPARATOR + path, dir)
    } else if (dir.startsWith(RESOURCE)) {
      throw new Error('node_modules inside gresources are not supported yet')
    } else {
      throw new Error('node_modules from the filesystem are not supported yet')
    }
  }

  function load(path, dir) {
    const module = getModuleContents(path, dir)
    return evaluate(modules, module.id, module.id, module.dirname, module.content);
  }

  exports.withRuntime = function setup($evaluate) {
    if ($evaluate) evaluate = $evaluate;

    return {
      has: (id) => id in modules,
      get: (id) => modules[id],
      load: load
    }
  };

}(this));
