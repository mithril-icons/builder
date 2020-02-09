# Feather icons for Mithril.js

![NPM package downloads](https://img.shields.io/npm/dw/@mithril-icons/feather?style=flat-square)

Easy to use and customizable [mithril.js](https://mithril.js.org/) icon components based on [Feather icon set](https://feathericons.com) with Typescript support.

## Highlights
- First class Typescript support
- Ability to add any SVG attribute to the icons
- Tree-shaking friendly structure
- No `m.trust` calls - all the icons are defined explicitly

## Installation

```
npm i @mithril-icons/feather
```
or
```
yarn add @mithril-icons/feather
```
## Usage
Import all the icons:
```
import m from 'mithril'
import * as F from '@mithril-icons/feather'

const Example = {
  view: function () {
    return m('div',
      m(F.Archive),
      m(F.Activity),
  }
}
```
Selectively import needed icons:
```
import m from 'mithril'
import { Archive, Activity } from '@mithril-icons/feather'

const Example = {
  view: function () {
    return m('div',
      m(Archive),
      m(Activity),
  }
}
```
You can also import only selected icons directly. This might reduce overall bundle size (depends on your bundler):
```
import m from 'mithril'
import Archive from '@mithril-icons/feather/icons/Archive'
import Activity from '@mithril-icons/feather/icons/Activity'

const Example = {
  view: function () {
    return m('div',
      m(Archive, { color: '#25ff56', 'stroke-linecap': 'butt' }),
      m(Activity, { fill: '#ff4405', 'stroke-width': 2 }),
  }
}
```
All of the icons are rendered directly to SVG VNode so specified attributes will be added to svg node. It means that:
```
m(Archive, { color: '#ff4405', width: 50, cursor: 'crosshair', 'stroke-opacity': '0.7', 'stroke-linecap': 'butt' })
```
will be rendered to:
```
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round" color="#ff4405" cursor="crosshair" stroke-opacity="0.7">
  <polyline points="21 8 21 21 3 21 3 8"></polyline>
  <rect x="1" y="3" width="22" height="5"></rect>
  <line x1="10" y1="12" x2="14" y2="12"></line>
</svg>
```
## Typescript support
All of the icons are explicitly exported by name (no string dictionary kind of thing) so they are easy to work with.

> TIP: To explore avaliable icons you just need to write `import {} from '@mithril-icons/feather'` and invoke autocompletion from within curly braces 

In addition there are typings for SVG based attributes that can be attached to SVG's.

> NOTE: These typings are not 100% exhaustive, because there are a lot of possibilities there (take a look [here](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute)). Instead typings are provided for most attributes that are most useful (at least in my opinion). PR for adding any useful attributes that I might have missed are welcome.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
