# Octicons icons for Mithril.js

![NPM package downloads](https://img.shields.io/npm/dw/@mithril-icons/octicons?style=flat-square)

Easy to use and customizable [mithril.js](https://mithril.js.org/) icon components based on [Octicons icon set](https://octicons.github.com/) with Typescript support.

## Highlights
- First class Typescript support
- Ability to add any SVG attribute to the icons
- Tree-shaking friendly structure
- No `m.trust` calls - all the icons are defined explicitly

## Installation

```
npm i @mithril-icons/octicons
```
or
```
yarn add @mithril-icons/octicons
```
## Usage
Import all the icons:
```
import m from 'mithril'
import * as F from '@mithril-icons/octicons'

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
import { Archive, Alert } from '@mithril-icons/octicons'

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
import Archive from '@mithril-icons/octicons/icons/Archive'
import Alert from '@mithril-icons/octicons/icons/Alert'

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
<svg version="1.1" width="50" height="50" viewBox="0 0 14 16" aria-hidden="true" fill="#ff4405" class="octicon octicon-archive"><path fill-rule="evenodd" d="M13 2H1v2h12V2zM0 4a1 1 0 001 1v9a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 001-1V2a1 1 0 00-1-1H1a1 1 0 00-1 1v2zm2 1h10v9H2V5zm2 3h6V7H4v1z"></path></svg>
```
## Typescript support
All of the icons are explicitly exported by name (no string dictionary kind of thing) so they are easy to work with.

> TIP: To explore avaliable icons you just need to write `import {} from '@mithril-icons/octicons'` and invoke autocompletion from within curly braces 

In addition there are typings for SVG based attributes that can be attached to SVG's.

> NOTE: These typings are not 100% exhaustive, because there are a lot of possibilities there (take a look [here](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute)). Instead typings are provided for most attributes that are most useful (at least in my opinion). PR for adding any useful attributes that I might have missed are welcome.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
