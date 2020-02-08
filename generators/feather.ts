import feather from 'feather-icons'
import fs from 'fs'
import path from 'path'
import { sanitize, createMithrilComponent } from './utils'

const UtilsPath = path.join(__dirname, '..', 'util')
const OutputPath = path.join(__dirname, '..', 'packages', 'feather')
const IndexPath = path.join(OutputPath, 'index.ts')
const IconsPath = path.join(OutputPath, 'icons')

const indexFile = fs.createWriteStream(IndexPath)

if (!fs.existsSync(IconsPath)) {
  fs.mkdirSync(IconsPath)
}
fs.copyFileSync(path.join(UtilsPath, 'svg.ts'), path.join(OutputPath, 'svg.ts'))

for (const key in feather.icons) {
  if (Object.prototype.hasOwnProperty.call(feather.icons, key)) {
    const icon = feather.icons[key]
    if (Object.prototype.hasOwnProperty.call(icon, 'name')) {
      const sanitizedName = sanitize(icon.name)
      const component = createMithrilComponent(icon.toSvg(), sanitizedName)
      fs.writeFileSync(path.join(IconsPath, sanitizedName + '.ts'), component)
      indexFile.write(`export { default as ${sanitizedName} } from './icons/${sanitizedName}'\n`)
    }
  }
}

indexFile.close()
