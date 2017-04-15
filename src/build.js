(function(exports) {
  'use strict';

  const fs = require('fs')
  const path = require('path')
  const child_process = require('child_process')
  const gresources_lookup_data = imports.gi.Gio.resources_lookup_data
  const GResourceLookupFlags = imports.gi.Gio.ResourceLookupFlags

  const Babel = imports.jsgtk.babel.Babel
  const BabelTransformer = {plugins: [
    'transform-decorators-legacy',
    'transform-class-properties',
    'transform-flow-strip-types',
    'transform-es2015-classes',
    'transform-es2015-literals',
    'transform-es2015-object-super',
    'transform-es2015-parameters',
    'transform-es2015-shorthand-properties',
    'transform-es2015-unicode-regex',
    'transform-exponentiation-operator',
    'transform-es2015-template-literals',
  ]}

  function findPackage(dir) {
    const filename = path.join(dir, 'package.json')

    if (fs.existsSync(filename)) {
      return filename
    } else {
      return findPackage(path.dirname(dir))
    }
  }

  function transpile(path) {
    const code = fs.readFileSync(path, 'utf8')
    const transpiled = Babel.transform(code, BabelTransformer).code

    fs.writeFileSync(path, transpiled)
  }

  exports.build = function(appId, mainFile, resourceFile, depsFile) {
    const sourceDir = path.dirname(mainFile)
    const outDir = path.dirname(resourceFile)
    const resourceSourceFile = path.join(outDir, appId + '.src.gresource.xml')

    const pkgInfo = JSON.parse(fs.readFileSync(findPackage(sourceDir, 'utf8')))

    const mainTemplate = gresources_lookup_data('/jsgtk/jsgtk/template/main.js', GResourceLookupFlags.NONE).toArray().toString()
    const moduleTemplate = gresources_lookup_data('/jsgtk/jsgtk/template/module.js', GResourceLookupFlags.NONE).toArray().toString()

    const main = mainTemplate
      .replace(/@DEPS@/g, JSON.stringify(pkgInfo.gjsDependencies, null, 2))
      .replace(/@PKGDATADIR@/g, JSON.stringify(pkg.pkgdatadir))

    fs.writeFileSync(path.join(outDir, 'main.js'), main)

    child_process.execSync('tsc ' + sourceDir +  '/index.ts' + ' --alwaysStrict --outDir ' + outDir +
                           ' -t ES2015 --module commonjs')

    const sourceFiles = fs.readdirSync(sourceDir)
      .filter(file => file.endsWith('.ts'))

    const files = sourceFiles
      .filter(file => file.endsWith('.ts'))
      .map(file => file.replace('.ts', '.js'))
      .concat(['main.js'])

    for (let file of files) {
      transpile(path.join(outDir, file))
    }

    const resources = '<?xml version="1.0" encoding="UTF-8"?>\n' +
                      '<gresources>\n' +
                      '  <gresource prefix="/' + appId.replace(/\./g, '/') + '/js">\n' +
                      files.map(file => '    <file>' + file + '</file>\n').join('') +
                      '  </gresource>\n' +
                        '</gresources>\n'
    const dependencies = mainFile + ': ' + sourceFiles
      .map(file => path.join(sourceDir, file))
      .filter(file => file !== mainFile)
      .concat([process.argv[1]])
      .join(', ')

    fs.writeFileSync(resourceSourceFile, resources)
    fs.writeFileSync(depsFile, dependencies)

    child_process.execSync('glib-compile-resources ' + resourceSourceFile + ' --sourcedir=' + outDir)
  }
}(this))
