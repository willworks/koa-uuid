'use strict';

const UUID = require('uuid');

module.exports = options => (ctx, next) => {
  const keys = !!(ctx.app && ctx.app.keys);
  const signed = !!(options && options.signed);
  let uuid = ctx.cookies.get('uuid', {
    signed: keys && signed,
  });
  if (!uuid || uuid === 'null') {
    uuid = UUID.v4();
    ctx.cookies.set('uuid', uuid, Object.assign({}, {
      signed: false,
      maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
      httpOnly: true,
    }, options, { signed: keys && signed }));
  }
  ctx.uuid = uuid;
  return next();
};
