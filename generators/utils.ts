
import fs from 'fs'
import request from 'request'
import * as svgparser from 'svg-parser'

export const sanitize = (input: string): string => {
  const capitalize = (input: string): string => {
    return input.charAt(0).toUpperCase() + input.slice(1)
  }
  const words = input.split('-')
  const capitalized = words.map(word => capitalize(word))
  let joined = capitalized.join('')
  if (/^\d/.test(joined)) {
    joined = `n${joined}`
  }
  return joined.replace(/[^\w\s]/, '')
}

export const download = async (url: string, filePath: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(filePath)) {
      console.log(`${filePath} already exists. Skipping download`)
      return resolve()
    }
    console.log(`Downloading ${url} to ${filePath}`)
    const archive = fs.createWriteStream(filePath)
    const req = request({ uri: url })

    req.pipe(archive)

    req.on('finish', () => {
      archive.close()
    })

    req.on('error', (e) => {
      archive.close()
      fs.unlinkSync(filePath)
      reject(e)
    })

    archive.on('error', (e) => {
      archive.close()
      fs.unlinkSync(filePath)
      reject(e)
    })

    archive.on('close', () => resolve())
  })
}

const toMithrilNodes = (svg: svgparser.RootNode): string => {
  const parseNodeToString = (svg: svgparser.Node, isSvg: boolean): string => {
    if (svg.type === 'text') {
      return `"${svg.value?.toString() ?? ''}"`
    }
    if (svg.tagName == null) {
      throw new Error('missing tag name')
    }
    const children = svg.children.map(x => typeof x === 'string' ? `"${x}"` : parseNodeToString(x, false)).join(',')
    let attrs = `${JSON.stringify({ ...svg.properties })}`
    if (isSvg) {
      attrs = attrs.replace('}', ', ...attrs }')
    }
    return `m("${svg.tagName}", ${attrs}, ${children})`
  }

  if (svg.children.length > 1) {
    throw new Error('Incorrect root node')
  }
  return parseNodeToString(svg.children[0], true)
}

export const createMithrilComponent = (svg: string, iconName: string): string => {
  const parsed = svgparser.parse(svg)
  const processed = toMithrilNodes(parsed)
  const result = `import m from 'mithril'\n\
import { SVGAttributes } from '../svg'\n\n\
const ${iconName}: m.Component<SVGAttributes> = {\
 view: ({ attrs }) => ${processed} }\n\
export default ${iconName}\n`
  return result
}
