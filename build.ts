import feather from 'feather-icons'
import fs from 'fs'
import * as svgparser from 'svg-parser'

const sanitize = (input: string): string => {
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

const createMithrilComponent = (svg: string, iconName: string): string => {
  const parsed = svgparser.parse(svg)
  const processed = toMithrilNodes(parsed)
  const result = `import m from 'mithril'\n\
import { SVGAttributes } from './util/svg'\n\n\
const ${iconName}: m.Component<SVGAttributes> = {\
 view: ({ attrs }) => ${processed} }\n\
export default ${iconName}\n`
  return result
}

const indexFile = fs.createWriteStream('./index.ts')

if (!fs.existsSync('./components')) {
  fs.mkdirSync('./components')
}

for (const key in feather.icons) {
  if (Object.prototype.hasOwnProperty.call(feather.icons, key)) {
    const icon = feather.icons[key]
    if (Object.prototype.hasOwnProperty.call(icon, 'name')) {
      const sanitizedName = sanitize(icon.name)
      const component = createMithrilComponent(icon.toSvg(), sanitizedName)
      fs.writeFileSync(`./components/${sanitizedName}.ts`, component)
      indexFile.write(`export { default as ${sanitizedName} } from './components/${sanitizedName}'\n`)
    }
  }
}

indexFile.close()
