import { parseString } from 'xml2js'
import { GIRepositoryXML } from './girxml'
import { renderNamespace } from './render'

interface GIRepository {
  name: string
  xml: string
}

interface Typing {
  name: string
  typing: string
}

export type GeneratorOptions = {
  jsgtk?: boolean
}

async function parseXML(xml: string) {
  return new Promise<GIRepositoryXML>((resolve, reject) => {
    parseString(xml, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

export async function generateTypings(girs: GIRepository[], options: GeneratorOptions = {}): Promise<Typing[]> {
  return (await Promise.all(girs
    .map(async (gir) => {
      const xml = await parseXML(gir.xml)
      const namespaces = xml.repository.namespace

      return Promise.all(namespaces
        .map(namespace => ({
          name: namespace.$.name,
          typing: renderNamespace(namespace, options)
        })))
    })))
    .flatten()
}
