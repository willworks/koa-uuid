# koa-uuid

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
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
