/*!
 * Original API         © 2016 Node.js Foundation
 * This implementation  © Andrea Giammarchi @WebReflection
 * Documentation        https://nodejs.org/api/process.html
 * JSGtk Status         incomplete
 */

/* jshint esversion: 6, strict: implied, node: true */
/* global imports, ARGV */

let mainloop;

const

  gi = imports.gi,
  GLib = gi.GLib,
  GFile = gi.Gio.File,
  System = imports.system,

  BEGINNING = Date.now(),
  CURRENT_DIR = GLib.get_current_dir(),
  DIR_SEPARATOR = /\//.test(CURRENT_DIR) ? '/' : '\\',

  EventEmitter = ARGV.core.get('events').EventEmitter,

  process = Object.assign(
    new EventEmitter(),
    {
      argv: ['gjs', imports.system.programInvocationName].concat(ARGV),
      binding: (which) => imports.jsgtk[which],
      cwd: () => CURRENT_DIR,
      env: ((arr) => {
        const env = {};
        for (let i = 0, p, info; i < arr.length; i++) {
          info = arr[i];
          p = info.indexOf('=');
          env[info.slice(0, p)] = info.slice(p + 1);
        }
        return env;
      })(GLib.get_environ()),
      abort: status => {
        process.emit('abort');
        System.exit(1);
      },
      exit: status => {
        process.emit('exit', status);
        System.exit(status || 0);
      },
      platform: ((platform) => {
        switch (true) {
          // TODO /Win|Mingw|WOW/i ???
          case /\b(?:Win|WOW)\b/i.test(platform):
            return 'win32';
          default:
            return platform.toLowerCase();
        }
      })(''.trim.call(GLib.spawn_command_line_sync('uname')[1])),
      uptime: () => (Date.now() - BEGINNING) / 1000,
      nextTick: function nextTick() {
        (mainloop || (
          mainloop = process.binding('mainloop')
        )).idle.apply(mainloop, arguments);
      }
    }
  )
;

Object.defineProperties(
  process,
  {
    arch: {
      enumerable: true,
      get: () => require('os').arch()
    }
  }
);

Object.defineProperty(
  global,
  'process',
  {enumerable: true, value: process}
);

module.exports = process;
