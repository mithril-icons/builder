# Jam icons for Mithril.js

![NPM package downloads](https://img.shields.io/npm/dw/@mithril-icons/jam?style=flat-square)

Easy to use and customizable [mithril.js](https://mithril.js.org/) icon components based on [Jam icon set](https://jam-icons.com/) with Typescript support.

## Highlights
- First class Typescript support
- Ability to add any SVG attribute to the icons
- Tree-shaking friendly structure
- No `m.trust` calls - all the icons are defined explicitly

## Installation

```
npm i @mithril-icons/jam
```
or
```
yarn add @mithril-icons/jam
```
## Usage
Import all the icons:
```
import m from 'mithril'
import * as F from '@mithril-icons/jam'

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
import { Archive, Activity } from '@mithril-icons/jam'

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
import Archive from '@mithril-icons/jam/components/Archive'
import Activity from '@mithril-icons/jam/components/Archive'

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
m(Activity, { fill: '#ff4405', width: 50, height: 50 })
```
will be rendered to:
```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -3 24 24" width="50" height="50" preserveAspectRatio="xMinYMin" fill="#ff4405" class="jam jam-activity"><path d="M7.116 10.749L6 1.948l-1.116 8.8H1c-.552 0-1-.437-1-.976a.99.99 0 0 1 1-.978h2.116l.9-7.086C4.15.636 5.15-.124 6.245.008c.91.11 1.626.81 1.739 1.7l.899 7.086h1.974L12 16.04l1.142-7.245H19c.552 0 1 .438 1 .978s-.448.977-1 .977h-4.142l-.881 5.587a1.978 1.978 0 0 1-1.672 1.634c-1.092.165-2.113-.567-2.282-1.634l-.88-5.587H7.115z"></path></svg>
</svg>
```
## Typescript support
All of the icons are explicitly exported by name (no string dictionary kind of thing) so they are easy to work with.

> TIP: To explore avaliable icons you just need to write `import {} from '@mithril-icons/jam'` and invoke autocompletion from within curly braces 

In addition there are typings for SVG based attributes that can be attached to SVG's.

> NOTE: These typings are not 100% exhaustive, because there are a lot of possibilities there (take a look [here](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute)). Instead typings are provided for most attributes that are most useful (at least in my opinion). PR for adding any useful attributes that I might have missed are welcome.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
