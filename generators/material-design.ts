import fs from 'fs'
import path from 'path'
import { sanitize, createMithrilComponent } from './utils'

const UtilsPath = path.join(__dirname, '..', 'util')
const OutputPath = path.join(__dirname, '..', 'packages', 'material-design')
const IndexPath = path.join(OutputPath, 'index.ts')
const IconsPath = path.join(OutputPath, 'icons')
const SvgPath = path.join(__dirname, '..', 'node_modules/@mdi/svg/svg')

console.log('Generating mithril components from svg files...')

fs.readdir(SvgPath, (e, files) => {
  if (e != null) {
    throw e
  }

  const indexFile = fs.createWriteStream(IndexPath)

  if (!fs.existsSync(IconsPath)) {
    fs.mkdirSync(IconsPath)
  }
  fs.copyFileSync(path.join(UtilsPath, 'svg.ts'), path.join(OutputPath, 'svg.ts'))

  files.forEach((file) => {
    const sanitizedName = sanitize(file.split('.')[0])
    const svg = fs.readFileSync(path.join(SvgPath, file)).toString()
    const component = createMithrilComponent(svg, sanitizedName)
    fs.writeFileSync(path.join(IconsPath, sanitizedName + '.ts'), component)
    indexFile.write(`export { default as ${sanitizedName} } from "./icons/${sanitizedName}";\n`)
  })

  indexFile.close()
})
