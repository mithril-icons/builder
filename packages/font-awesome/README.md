# Font Awesome icons for Mithril.js

![NPM package downloads](https://img.shields.io/npm/dw/@mithril-icons/font-awesome?style=flat-square)

Easy to use and customizable [mithril.js](https://mithril.js.org/) icon components based on [Font Awesome icon set](https://fontawesome.com/) with Typescript support.

## Highlights
- First class Typescript support
- Ability to add any SVG attribute to the icons
- Tree-shaking friendly structure
- No `m.trust` calls - all the icons are defined explicitly

## Installation

```
npm i @mithril-icons/font-awesome
```
or
```
yarn add @mithril-icons/font-awesome
```
## Usage
Import all the icons:
```
import m from 'mithril'
import * as F from '@mithril-icons/font-awesome'

const Example = {
  view: function () {
    return m('div',
      m(F.solid.Atlas),
      m(F.solid.AddressBook),
  }
}
```
Selectively import needed icons:
```
import m from 'mithril'
import { Atlas, AddressBook } from '@mithril-icons/font-awesome/solid'

const Example = {
  view: function () {
    return m('div',
      m(Archive),
      m(AddressBook),
  }
}
```
You can also import only selected icons directly. This might reduce overall bundle size (depends on your bundler):
```
import m from 'mithril'
import Atlas from '@mithril-icons/font-awesome/solid/icons/Atlas'
import AddressBook from '@mithril-icons/font-awesome/solid/icons/AddressBook'

const Example = {
  view: function () {
    return m('div',
      m(Atlas, { color: '#25ff56', 'stroke-linecap': 'butt' }),
      m(AddressBook, { fill: '#ff4405', 'stroke-width': 2 }),
  }
}
```
All of the icons are rendered directly to SVG VNode so specified attributes will be added to svg node. It means that:
```
m(Atlas, { fill: '#ff4405', width: 50, height: 50 })
```
will be rendered to:
```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#ff4405" width="50" height="50"><path d="M318.38 208h-39.09c-1.49 27.03-6.54 51.35-14.21 70.41 27.71-13.24 48.02-39.19 53.3-70.41zm0-32c-5.29-31.22-25.59-57.17-53.3-70.41 7.68 19.06 12.72 43.38 14.21 70.41h39.09zM224 97.31c-7.69 7.45-20.77 34.42-23.43 78.69h46.87c-2.67-44.26-15.75-71.24-23.44-78.69zm-41.08 8.28c-27.71 13.24-48.02 39.19-53.3 70.41h39.09c1.49-27.03 6.53-51.35 14.21-70.41zm0 172.82c-7.68-19.06-12.72-43.38-14.21-70.41h-39.09c5.28 31.22 25.59 57.17 53.3 70.41zM247.43 208h-46.87c2.66 44.26 15.74 71.24 23.43 78.69 7.7-7.45 20.78-34.43 23.44-78.69zM448 358.4V25.6c0-16-9.6-25.6-25.6-25.6H96C41.6 0 0 41.6 0 96v320c0 54.4 41.6 96 96 96h326.4c12.8 0 25.6-9.6 25.6-25.6v-16c0-6.4-3.2-12.8-9.6-19.2-3.2-16-3.2-60.8 0-73.6 6.4-3.2 9.6-9.6 9.6-19.2zM224 64c70.69 0 128 57.31 128 128s-57.31 128-128 128S96 262.69 96 192 153.31 64 224 64zm160 384H96c-19.2 0-32-12.8-32-32s16-32 32-32h288v64z"></path></svg>
```
### CommonJS 
If you are not using bundler that can handle ES6 modules easily (e.g. Brunch) the library is also available as a CommonJS module - you can import it by adding `/cjs` postfix:
```
const m = require("mithril")
const i = require("@mithril-icons/font-awesome/cjs")

m.render(document.body, m(i.solid.Atlas))
```
## Typescript support
All of the icons are explicitly exported by name (no string dictionary kind of thing) so they are easy to work with.

> TIP: To explore available icons you just need to write `import {} from '@mithril-icons/font-awesome'` and invoke autocompletion from within curly braces 

In addition there are typings for SVG based attributes that can be attached to SVG's.

> NOTE: These typings are not 100% exhaustive, because there are a lot of possibilities there (take a look [here](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute)). Instead typings are provided for most attributes that are most useful (at least in my opinion). PR for adding any useful attributes that I might have missed are welcome.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
