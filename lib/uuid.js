'use strict';

const UUID = require('uuid');

module.exports = options => (ctx, next) => {
  const signed = !!(options && options.signed);
  let uuid = ctx.cookies.get('uuid', {
    signed,
  });
  if (!uuid || uuid === 'null') {
    uuid = UUID.v4();
    ctx.cookies.set('uuid', uuid, Object.assign({}, {
      signed: false,
      maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
      httpOnly: true,
    }, options));
  }
  ctx.uuid = uuid;
  return next();
};
