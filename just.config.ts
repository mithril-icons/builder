import cp from 'child_process'
import rimraf from 'rimraf'
import { task, option, logger, argv, tscTask, series } from 'just-scripts'

const clean = async (path: string) => {
  return new Promise((resolve, reject) => rimraf(path, (err) => { if (err != null) { reject(err) } else { resolve() } }))
}

const generate = (name: string) => cp.execSync(`npx ts-node --files -P tsconfig.json generators/${name}.ts`)
const build = (name: string) => tscTask({ project: `./packages/${name}/tsconfig.json` })
const publish = (name: string) => cp.execSync(`cd packages/${name} && npm publish`)
const bumpVersion = (name: string, version: string) => cp.execSync([
  `cd packages/${name}`,
  `npm --no-git-tag-version version ${version}`,
  'git add package.json',
  `git commit -m "@mithhril-icons/${name}@$(node -p "require('./package.json').version")"`,
  `git tag ${name}.$(node -p "require('./package.json').version")`].join(' && '))

const packages = ['feather', 'clarity', 'devicon', 'entypo', 'jam', 'octicons', 'material-design', 'font-awesome']

option('name', { default: 'world' })
option('package', { default: 'all' })
option('bump', { default: 'patch' })

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

task('publish', () => {
  const target = argv().package as string
  if (packages.some(pkg => pkg === target)) {
    logger.info(`Publishing ${target}`)
    publish(target)
  } else {
    logger.error(`Unknown package ${target}`)
  }
})

task('bump', () => {
  const target = argv().package as string
  const version = argv().bump as string
  if (packages.some(pkg => pkg === target)) {
    logger.info(`Bumping ${version} in ${target}`)
    bumpVersion(target, version)
  } else {
    logger.error(`Unknown package ${target}`)
  }
})

task('run', series('clean', 'generate', 'build'))
