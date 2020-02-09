import cp from 'child_process'
import rimraf from 'rimraf'
import { task, option, logger, argv, tscTask, series } from 'just-scripts'

const clean = async (path: string) => {
  return new Promise((resolve, reject) => rimraf(path, (err) => { if (err != null) { reject(err) } else { resolve() } }))
}

const generate = (name: string) => cp.execSync(`npx ts-node --files -P tsconfig.json generators/${name}.ts`)
const build = (name: string) => tscTask({ project: `./packages/${name}/tsconfig.json` })

const packages = ['feather', 'clarity', 'devicon', 'entypo', 'jam', 'octicons']

option('name', { default: 'world' })
option('package', { default: 'all' })

task('clean', async () => {
  const target = argv().package as string
  if (target === 'all') {
    logger.info('Cleaning all packages')
    await clean('packages/**/**.js')
    await clean('packages/**/**.ts')
  } else {
    logger.info(`Cleaning ${target}`)
    await clean(`packages/${target}/**/**.js`)
    await clean(`packages/${target}/**/**.ts`)
  }
})

task('generate', () => {
  const target = argv().package as string
  if (target === 'all') {
    for (const pkg of packages) {
      logger.info(`Generating ${pkg}`)
      generate(pkg)
    }
  } else {
    logger.info(`Generating ${target}`)
    return generate(target)
  }
})

task('build', () => {
  const target = argv().package as string
  if (target === 'all') {
    logger.info('Building all targets')
    return series(...packages.map(build))
  } else {
    logger.info(`Building ${target}`)
    return build(target)
  }
})

task('run', series('clean', 'generate', 'build'))
