import octicons from '@primer/octicons'
import fs from 'fs'
import path from 'path'
import { sanitize, createMithrilComponent } from './utils'

const UtilsPath = path.join(__dirname, '..', 'util')
const OutputPath = path.join(__dirname, '..', 'packages', 'octicons')
const IndexPath = path.join(OutputPath, 'index.ts')
const IconsPath = path.join(OutputPath, 'icons')

const indexFile = fs.createWriteStream(IndexPath)

if (!fs.existsSync(IconsPath)) {
  fs.mkdirSync(IconsPath)
}
fs.copyFileSync(path.join(UtilsPath, 'svg.ts'), path.join(OutputPath, 'svg.ts'))

for (const key in octicons) {
  if (Object.prototype.hasOwnProperty.call(octicons, key)) {
    const icon = octicons[key]
    if (Object.prototype.hasOwnProperty.call(icon, 'toSVG')) {
      const sanitizedName = sanitize(key)
      const component = createMithrilComponent(icon.toSVG(), sanitizedName)
      fs.writeFileSync(path.join(IconsPath, sanitizedName + '.ts'), component)
      indexFile.write(`export { default as ${sanitizedName} } from './icons/${sanitizedName}'\n`)
    }
  }
}

indexFile.close()
