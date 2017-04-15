(function() {
  'use strict';

  const args = process.argv.slice(2)

  if (args[0] === 'init') {
    console.log('Creating new JSGtk+ application...')
  } else if (args[0] === 'build') {
    imports.build.build(args[1], args[2], args[3], args[4])
  } else {
    console.error('Unrecognized command:', args[0])
  }
}());
