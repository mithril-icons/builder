import fs from 'fs'
import path from 'path'
import { sanitize, createMithrilComponent } from './utils'

const UtilsPath = path.join(__dirname, '..', 'util')
const SvgFile = path.join(__dirname, '..', 'assets', 'entypo.csv')
const OutputPath = path.join(__dirname, '..', 'packages', 'entypo')
const IndexPath = path.join(OutputPath, 'index.ts')
const IconsPath = path.join(OutputPath, 'icons')

const indexFile = fs.createWriteStream(IndexPath)

if (!fs.existsSync(IconsPath)) {
  fs.mkdirSync(IconsPath)
}
fs.copyFileSync(path.join(UtilsPath, 'svg.ts'), path.join(OutputPath, 'svg.ts'))

const svgs = fs.readFileSync(SvgFile, { encoding: 'utf-8' })

svgs.split('\n').forEach(row => {
  const [data, name] = row.split(';')
  const sanitizedName = sanitize(name)
  const component = createMithrilComponent(data, sanitizedName)
  fs.writeFileSync(path.join(IconsPath, sanitizedName + '.ts'), component)
  indexFile.write(`export { default as ${sanitizedName} } from './icons/${sanitizedName}'\n`)
})

indexFile.close()
