# Material Design icons for Mithril.js

![NPM package downloads](https://img.shields.io/npm/dw/@mithril-icons/material-design?style=flat-square)

Easy to use and customizable [mithril.js](https://mithril.js.org/) icon components based on [Material Design icon set](https://materialdesignicons.com/) with Typescript support.

## Highlights
- First class Typescript support
- Ability to add any SVG attribute to the icons
- Tree-shaking friendly structure
- No `m.trust` calls - all the icons are defined explicitly

## Installation

```
npm i @mithril-icons/material-design
```
or
```
yarn add @mithril-icons/material-design
```
## Usage
Import all the icons:
```
import m from 'mithril'
import * as F from '@mithril-icons/material-design'

const Example = {
  view: function () {
    return m('div',
      m(F.Archive),
      m(F.Alert),
  }
}
```
Selectively import needed icons:
```
import m from 'mithril'
import { Archive, Alert } from '@mithril-icons/material-design'

const Example = {
  view: function () {
    return m('div',
      m(Archive),
      m(Alert),
  }
}
```
You can also import only selected icons directly. This might reduce overall bundle size (depends on your bundler):
```
import m from 'mithril'
import Archive from '@mithril-icons/material-design/icons/Archive'
import Alert from '@mithril-icons/material-design/icons/Alert'

const Example = {
  view: function () {
    return m('div',
      m(Archive, { color: '#25ff56', 'stroke-linecap': 'butt' }),
      m(Alert, { fill: '#ff4405', 'stroke-width': 2 }),
  }
}
```
All of the icons are rendered directly to SVG VNode so specified attributes will be added to svg node. It means that:
```
m(Archive, { fill: '#ff4405', width: 50, height: 50 })
```
will be rendered to:
```
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-archive" width="50" height="50" viewBox="0 0 24 24" fill="#ff4405"><path d="M3,3H21V7H3V3M4,8H20V21H4V8M9.5,11A0.5,0.5 0 0,0 9,11.5V13H15V11.5A0.5,0.5 0 0,0 14.5,11H9.5Z"></path></svg>
```
## Typescript support
All of the icons are explicitly exported by name (no string dictionary kind of thing) so they are easy to work with.

> TIP: To explore avaliable icons you just need to write `import {} from '@mithril-icons/material-design'` and invoke autocompletion from within curly braces 

In addition there are typings for SVG based attributes that can be attached to SVG's.

> NOTE: These typings are not 100% exhaustive, because there are a lot of possibilities there (take a look [here](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute)). Instead typings are provided for most attributes that are most useful (at least in my opinion). PR for adding any useful attributes that I might have missed are welcome.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
