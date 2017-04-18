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

      const imports = (xml.repository.include || [])
        .map(include => `import ${include.$.name} from '${include.$.name}'`)

      const namespaces = await Promise.all(xml.repository.namespace
        .map(namespace => renderNamespace(namespace, options)))

      const typing = `${imports}\n\n${namespaces.join('\n\n')}`

      return {
        name: gir.name,
        typing: typing
      }
    })))
}
