# koa-uuid

[![NPM version][npm-image]][npm-url]
[![github location][github-tag]][github-url]
[![Build status][travis-image]][travis-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

koa uuid middleware

## Installation

```js
$ npm install koa-uuid
```

## Example

```js
const uuid = require('koa-uuid')
const Koa = require('koa')

const app = new Koa()
app.use(uuid())
```
## License

  MIT

[npm-image]: https://img.shields.io/npm/v/koa-uuid.svg?style=flat-square
[npm-url]: https://npmjs.org/package/koa-uuid
[github-tag]: http://img.shields.io/github/tag/willworks/koa-uuid.svg?style=flat-square
[github-url]: https://github.com/willworks/koa-uuid/tags
[travis-image]: https://img.shields.io/travis/willworks/koa-uuid.svg?style=flat-square
[travis-url]: https://travis-ci.org/willworks/koa-uuid
[david-image]: http://img.shields.io/david/willworks/koa-uuid.svg?style=flat-square
[david-url]: https://david-dm.org/willworks/koa-uuid
[license-image]: http://img.shields.io/npm/l/koa-uuid.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/koa-uuid.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/koa-uuid