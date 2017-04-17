import * as yargs from 'yargs'
import * as fs from 'fs'
import * as path from 'path'
import { generateTypings } from './generator'

declare global {
  interface Array<T> {
    flatten(): T
  }
}

Array.prototype.flatten = function () {
  return [].concat.apply([], this)
}

const argv = yargs
  .argv

const girFiles = (argv._.length > 0 ? argv._ : ['/usr/share/gir-1.0/'])
  .reduce((files, fileOrDir) => (
    files.concat(fs.statSync(fileOrDir).isDirectory()
      ? fs.readdirSync(fileOrDir).map((file) => path.join(fileOrDir, file))
      : [fileOrDir])
  ), [])

const girs = girFiles
  .map(filename => ({
    name: path.basename(filename, '.gir'),
    xml: fs.readFileSync(filename, 'utf8')
  }))

generateTypings(girs, { jsgtk: true })
  .then((results) => console.log(results[0].typing))
  .catch((error) => console.error(error))
