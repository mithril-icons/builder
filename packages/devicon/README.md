# Devicons for Mithril.js

![NPM package downloads](https://img.shields.io/npm/dw/@mithril-icons/devicon?style=flat-square)

Easy to use and customizable [mithril.js](https://mithril.js.org/) icon components based on [Devicon set](http://konpa.github.io/devicon/) with Typescript support.

## Highlights
- First class Typescript support
- Ability to add any SVG attribute to the icons
- Tree-shaking friendly structure
- No `m.trust` calls - all the icons are defined explicitly

## Installation

```
npm i @mithril-icons/devicon
```
or
```
yarn add @mithril-icons/devicon
```
## Usage
Import all the icons:
```
import m from 'mithril'
import * as F from '@mithril-icons/devicon'

const Example = {
  view: function () {
    return m('div',
      m(F.TypescriptPlain),
      m(F.TypescriptOriginal),
  }
}
```
Selectively import needed icons:
```
import m from 'mithril'
import { TypescriptPlain, TypescriptOriginal } from '@mithril-icons/devicon'

const Example = {
  view: function () {
    return m('div',
      m(TypescriptPlain),
      m(TypescriptOriginal)
  }
}
```
You can also import only selected icons directly. This might reduce overall bundle size (depends on your bundler):
```
import m from 'mithril'
import TypescriptPlain from '@mithril-icons/devicon/components/TypescriptPlain'
import TypescriptOriginal from '@mithril-icons/devicon/components/TypescriptOriginal'

const Example = {
  view: function () {
    return m('div',
      m(TypescriptPlain, { color: '#25ff56', 'stroke-linecap': 'butt' }),
      m(TypescriptOriginal, { fill: '#ff4405', 'stroke-width': 2 }),
  }
}
```
All of the icons are rendered directly to SVG VNode so specified attributes will be added to svg node. It means that:
```
m(TypescriptPlain, { width: 50, height: 50 })
```
will be rendered to:
```
<svg id="typescript" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="50" height="50"><defs><style>.cls-1{fill:#007acc;}</style></defs><title>Artboard 4</title><path id="plain" d="M2,63.91v62.5H127V1.41H2Zm100.73-5a15.56,15.56,0,0,1,7.82,4.5,20.58,20.58,0,0,1,3,4c0,.16-5.4,3.81-8.69,5.85-.12.08-.6-.44-1.13-1.23a7.09,7.09,0,0,0-5.87-3.53c-3.79-.26-6.23,1.73-6.21,5a4.58,4.58,0,0,0,.54,2.34c.83,1.73,2.38,2.76,7.24,4.86,8.95,3.85,12.78,6.39,15.16,10,2.66,4,3.25,10.46,1.45,15.24-2,5.2-6.9,8.73-13.83,9.9a38.32,38.32,0,0,1-9.52-.1A23,23,0,0,1,80,109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34,9.34,0,0,1,1.15-.73L82.5,101l3.59-2.08.75,1.11a16.78,16.78,0,0,0,4.74,4.54c4,2.1,9.46,1.81,12.16-.62a5.43,5.43,0,0,0,.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48,16.48,0,0,1-3.43-6.25,25,25,0,0,1-.22-8c1.33-6.23,6-10.58,12.82-11.87A31.66,31.66,0,0,1,102.73,58.93ZM73.39,64.15l0,5.12H57.16V115.5H45.65V69.26H29.38v-5a49.19,49.19,0,0,1,.14-5.16c.06-.08,10-.12,22-.1L73.33,59Z" class="cls-1"></path></svg>
```
## Typescript support
All of the icons are explicitly exported by name (no string dictionary kind of thing) so they are easy to work with.

> TIP: To explore avaliable icons you just need to write `import {} from '@mithril-icons/devicon'` and invoke autocompletion from within curly braces 

In addition there are typings for SVG based attributes that can be attached to SVG's.

> NOTE: These typings are not 100% exhaustive, because there are a lot of possibilities there (take a look [here](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute)). Instead typings are provided for most attributes that are most useful (at least in my opinion). PR for adding any useful attributes that I might have missed are welcome.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
