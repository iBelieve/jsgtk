(function() {
  'use strict';

  const fs = require('fs')
  const path = require('path')
  const child_process = require('child_process')
  const gresources_lookup_data = imports.gi.Gio.resources_lookup_data
  const GResourceLookupFlags = imports.gi.Gio.ResourceLookupFlags

  const args = process.argv.slice(2)

  if (args[0] == '--init') {
    console.log('Creating new JSGtk+ application...')
  } else {
    const appId = args[0]
    const projectDir = args[1]
    const sourceDir = path.join(projectDir, 'src')

    const pkgInfo = JSON.parse(fs.readFileSync(projectDir + '/package.json', 'utf8'))

    const mainTemplate = gresources_lookup_data('/io/mspencer/JSGtk/jsgtk/template/main.js', GResourceLookupFlags.NONE).toArray().toString()
    const moduleTemplate = gresources_lookup_data('/io/mspencer/JSGtk/jsgtk/template/module.js', GResourceLookupFlags.NONE).toArray().toString()

    const main = mainTemplate
      .replace(/@DEPS@/g, JSON.stringify(pkgInfo.gjsDependencies, null, 2))
      .replace(/@PKGDATADIR@/g, JSON.stringify(pkg.pkgdatadir))

    fs.writeFileSync('main.js', main, { encoding: 'utf8' })

    child_process.execSync('tsc ' + sourceDir +  '/index.ts' + ' --alwaysStrict --outDir .')

    const files = fs.readdirSync(sourceDir)
      .filter(file => file.endsWith('.ts'))
      .map(file => file.replace('.ts', '.js'))

    const resources = '<?xml version="1.0" encoding="UTF-8"?>\n' +
                      '<gresources>\n' +
                      '  <gresource prefix="/' + appId.replace(/\./g, '/') + '/js">\n' +
                      files.map(file => '    <file>' + file + '</file>\n').join() +
                      '  </gresource>\n' +
                      '</gresources>\n'

    fs.writeFileSync(appId + '.src.gresource.xml', resources, { encoding: 'utf8' })
  }
}());
