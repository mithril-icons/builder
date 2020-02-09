# Entypo icons for Mithril.js

![NPM package downloads](https://img.shields.io/npm/dw/@mithril-icons/entypo?style=flat-square)

Easy to use and customizable [mithril.js](https://mithril.js.org/) icon components based on [Entypo+ icon set](http://www.entypo.com/) with Typescript support.

## Highlights
- First class Typescript support
- Ability to add any SVG attribute to the icons
- Tree-shaking friendly structure
- No `m.trust` calls - all the icons are defined explicitly

## Installation

```
npm i @mithril-icons/entypo
```
or
```
yarn add @mithril-icons/entypo
```
## Usage
Import all the icons:
```
import m from 'mithril'
import * as F from '@mithril-icons/entypo'

const Example = {
  view: function () {
    return m('div',
      m(F.AddUser),
      m(F.Address),
  }
}
```
Selectively import needed icons:
```
import m from 'mithril'
import { AddUser, Address } from '@mithril-icons/entypo'

const Example = {
  view: function () {
    return m('div',
      m(AddUser),
      m(Address),
  }
}
```
You can also import only selected icons directly. This might reduce overall bundle size (depends on your bundler):
```
import m from 'mithril'
import AddUser from '@mithril-icons/entypo/icons/AddUser'
import Address from '@mithril-icons/entypo/icons/Address'

const Example = {
  view: function () {
    return m('div',
      m(AddUser, { color: '#25ff56', 'stroke-linecap': 'butt' }),
      m(Address, { fill: '#ff4405', 'stroke-width': 2 }),
  }
}
```
All of the icons are rendered directly to SVG VNode so specified attributes will be added to svg node. It means that:
```
m(AddUser, { fill: '#ff4405', width: 50, height: 50 })
```
will be rendered to:
```
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" id="entypo-add-user" width="50" height="50" fill="#ff4405"><g><path d="M15.989 19.129C16 17 13.803 15.74 11.672 14.822c-2.123-.914-2.801-1.684-2.801-3.334 0-.989.648-.667.932-2.481.12-.752.692-.012.802-1.729 0-.684-.313-.854-.313-.854s.159-1.013.221-1.793c.064-.817-.398-2.56-2.301-3.095-.332-.341-.557-.882.467-1.424-2.24-.104-2.761 1.068-3.954 1.93-1.015.756-1.289 1.953-1.24 2.59.065.78.223 1.793.223 1.793s-.314.17-.314.854c.11 1.718.684.977.803 1.729.284 1.814.933 1.492.933 2.481 0 1.65-.212 2.21-2.336 3.124C.663 15.53 0 17 .011 19.129.014 19.766 0 20 0 20h16s-.014-.234-.011-.871zM17 10V7h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path></g></svg>
```
## Typescript support
All of the icons are explicitly exported by name (no string dictionary kind of thing) so they are easy to work with.

> TIP: To explore avaliable icons you just need to write `import {} from '@mithril-icons/entypo'` and invoke autocompletion from within curly braces 

In addition there are typings for SVG based attributes that can be attached to SVG's.

> NOTE: These typings are not 100% exhaustive, because there are a lot of possibilities there (take a look [here](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute)). Instead typings are provided for most attributes that are most useful (at least in my opinion). PR for adding any useful attributes that I might have missed are welcome.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

Original project [Entypo+](http://www.entypo.com/) has been created by [Daniel Bruce](http://www.danielbruce.se/). 
