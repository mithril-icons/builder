import fs from 'fs'
import path from 'path'
import Zip from 'adm-zip'
import Rimraf from 'rimraf'
import { sanitize, download, createMithrilComponent, getHash } from './utils'

const UtilsPath = path.join(__dirname, '..', 'util')
const OutputPath = path.join(__dirname, '..', 'packages', 'clarity')
const IndexPath = path.join(OutputPath, 'index.ts')
const IconsPath = path.join(OutputPath, 'icons')
const SvgPath = path.join(__dirname, 'clarity_svg')
const IconsUrl = 'https://github.com/vmware/clarity-assets/archive/master.zip'
const ArchivePath = path.join(__dirname, '..', 'assets', `clarity${getHash('https://github.com/vmware/clarity-assets')}.zip`)

async function generateComponents (): Promise<void> {
  return new Promise((resolve, reject) => {
    console.log('Generating mithril components from svg files...')

    fs.readdir(SvgPath, (e, files) => {
      if (e != null) {
        return reject(e)
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
      resolve()
    })
  }
  )
}

function unzip (path: string): void {
  console.log('Extracting archive...')
  const zipUtil = new Zip(path)
  zipUtil.extractEntryTo('clarity-assets-master/icons/', SvgPath, false, false)
}

function cleanup (): void {
  console.log('Cleaning up...')
  Rimraf.sync(SvgPath)
}

download(IconsUrl, ArchivePath)
  .then(() => {
    unzip(ArchivePath)
  })
  .then(generateComponents)
  .finally(cleanup)
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
