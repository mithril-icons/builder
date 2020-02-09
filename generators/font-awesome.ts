import fs from 'fs'
import path from 'path'
import { sanitize, createMithrilComponent } from './utils'

const UtilsPath = path.join(__dirname, '..', 'util')
const OutputPath = path.join(__dirname, '..', 'packages', 'font-awesome')
const IndexPath = path.join(OutputPath, 'index.ts')
const SvgPath = path.join(__dirname, '..', 'node_modules/@fortawesome/fontawesome-free/svgs')

console.log('Generating mithril components from svg files...')

const mainIndexFile = fs.createWriteStream(IndexPath)
fs.copyFileSync(path.join(UtilsPath, 'svg.ts'), path.join(OutputPath, 'svg.ts'))

for (const iconType of ['brands', 'regular', 'solid']) {
  const workingDirPath = path.join(OutputPath, iconType)
  const IconsPath = path.join(OutputPath, iconType, 'icons')

  const fullSvgPath = path.join(SvgPath, iconType)
  const files = fs.readdirSync(fullSvgPath)

  if (!fs.existsSync(IconsPath)) {
    fs.mkdirSync(IconsPath, { recursive: true })
  }
  const indexFile = fs.createWriteStream(path.join(workingDirPath, 'index.ts'))

  files.forEach((file) => {
    const sanitizedName = sanitize(file.split('.')[0])
    const svg = fs.readFileSync(path.join(fullSvgPath, file)).toString()
    const component = createMithrilComponent(svg, sanitizedName, '../../svg')
    fs.writeFileSync(path.join(IconsPath, sanitizedName + '.ts'), component)
    indexFile.write(`export { default as ${sanitizedName} } from "./icons/${sanitizedName}";\n`)
  })
  indexFile.close()

  mainIndexFile.write(`import * as ${iconType} from "./${iconType}";\n`)
  mainIndexFile.write(`export {${iconType}};\n`)
}

mainIndexFile.close()
