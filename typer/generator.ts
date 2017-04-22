import { parseString } from 'xml2js'
import { GIRepositoryXML } from './girxml'
import { renderNamespace } from './render'
import { uniq } from 'lodash'

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
  const girXML: { [id: string]: GIRepositoryXML } = {}

  const getIncludes = (name: string): string[] => {
    const xml = girXML[name]

    if (xml == null) {
      return []
    }

    return (xml.repository.include || [])
      .map(include => [include.$.name, ...getIncludes(`${include.$.name}-${include.$.version}`)])
      .flatten()
  }

  await Promise.all(girs
    .map(async (gir) => {
      girXML[gir.name] = await parseXML(gir.xml)
    }))

  return Promise.all(girs
    .map(async (gir) => {
      const xml = girXML[gir.name]

      const includes = uniq(getIncludes(gir.name))

      const namespaces = (await Promise.all(xml.repository.namespace
        .map(namespace => renderNamespace(namespace, includes, options))))
        .join('\n\n')

      return {
        name: gir.name,
        typing: namespaces
      }
    }))
}
