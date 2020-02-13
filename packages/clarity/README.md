# Clarity icons for Mithril.js

![NPM package downloads](https://img.shields.io/npm/dw/@mithril-icons/clarity?style=flat-square)


Easy to use and customizable [mithril.js](https://mithril.js.org/) icon components based on [Clarity icon set](https://clarity.design/icons) with Typescript support.

## Highlights
- First class Typescript support
- Ability to add any SVG attribute to the icons
- Tree-shaking friendly structure
- No `m.trust` calls - all the icons are defined explicitly

## Installation

```
npm i @mithril-icons/clarity
```
or
```
yarn add @mithril-icons/clarity
```
## Usage
Import all the icons:
```
import m from 'mithril'
import * as F from '@mithril-icons/clarity'

const Example = {
  view: function () {
    return m('div',
      m(F.AddLine),
      m(F.AlertSolid),
  }
}
```
Selectively import needed icons:
```
import m from 'mithril'
import { AddLine, AlertSolid } from '@mithril-icons/clarity'

const Example = {
  view: function () {
    return m('div',
      m(AddLine),
      m(AlertSolid),
  }
}
```
You can also import only selected icons directly. This might reduce overall bundle size (depends on your bundler):
```
import m from 'mithril'
import AddLine from '@mithril-icons/clarity/icons/AddLine'
import AlertSolid from '@mithril-icons/clarity/icons/AlertSolid'

const Example = {
  view: function () {
    return m('div',
      m(AddLine, { color: '#25ff56', 'stroke-linecap': 'butt' }),
      m(AlertSolid, { fill: '#ff4405', 'stroke-width': 2 }),
  }
}
```
All of the icons are rendered directly to SVG VNode so specified attributes will be added to svg node. It means that:
```
m(AlertSolid, { fill: '#ff4405', width: 50, cursor: 'crosshair', 'stroke-opacity': '0.7', 'stroke-linecap': 'butt' })
```
will be rendered to:
```
<svg version="1.1" width="50" height="36" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ff4405" cursor="crosshair" stroke-opacity="0.7" stroke-linecap="butt"><title>alert-solid</title><path d="M18,2.5c-8.82,0-16,6.28-16,14s7.18,14,16,14a18,18,0,0,0,4.88-.68l5.53,3.52a1,1,0,0,0,1.54-.84l0-6.73a13,13,0,0,0,4-9.27C34,8.78,26.82,2.5,18,2.5ZM16.93,9.13a1.41,1.41,0,1,1,2.81,0V18.9a1.41,1.41,0,1,1-2.81,0Zm1.41,17.35a1.87,1.87,0,1,1,1.87-1.87A1.87,1.87,0,0,1,18.34,26.47Z" class="clr-i-solid clr-i-solid-path-1"></path><rect x="0" y="0" width="36" height="36" fill-opacity="0"></rect></svg>
```
### CommonJS 
If you are not using bundler that can handle ES6 modules easily (e.g. Brunch) the library is also available as a CommonJS module - you can import it by adding `/cjs` postfix:
```
const m = require("mithril")
const i = require("@mithril-icons/clarity/cjs")

m.render(document.body, m(i.AlertSolid))
```
## Typescript support
All of the icons are explicitly exported by name (no string dictionary kind of thing) so they are easy to work with.

> TIP: To explore available icons you just need to write `import {} from '@mithril-icons/clarity'` and invoke autocompletion from within curly braces 

In addition there are typings for SVG based attributes that can be attached to SVG's.

> NOTE: These typings are not 100% exhaustive, because there are a lot of possibilities there (take a look [here](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute)). Instead typings are provided for most attributes that are most useful (at least in my opinion). PR for adding any useful attributes that I might have missed are welcome.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
