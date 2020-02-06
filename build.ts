import feather from 'feather-icons'
import fs from 'fs'

const capitalize = (input: string): string => {
  return input.charAt(0).toUpperCase() + input.slice(1)
}

const sanitize = (input: string): string => {
  const words = input.split('-')
  const capitalized = words.map(word => capitalize(word))
  let joined = capitalized.join('')
  if (/^\d/.test(joined)) {
    joined = `n${joined}`
  }
  return joined.replace(/[^\w\s]/, '')
}
const indexFile = fs.createWriteStream('./index.ts')

if (!fs.existsSync('./components')) {
  fs.mkdirSync('./components')
}

for (const key in feather.icons) {
  if (Object.prototype.hasOwnProperty.call(feather.icons, key)) {
    const icon = feather.icons[key]
    if (Object.prototype.hasOwnProperty.call(icon, 'name')) {
      fs.writeFileSync(`./components/${sanitize(icon.name)}.ts`,
      `import m from 'mithril'\n\
import { SVGAttributes, defaultAttributes } from './util/svg'\n\n\
const ${sanitize(icon.name)}: m.Component<SVGAttributes> = {\
 view: ({ attrs }) => m('svg', { ...defaultAttributes, ...attrs }, m.trust('${icon.contents}')) }\n\
export default ${sanitize(icon.name)}\n`)
      indexFile.write(`export { default as ${sanitize(icon.name)} } from './components/${sanitize(icon.name)}'\n`)
    }
  }
}

indexFile.close()
