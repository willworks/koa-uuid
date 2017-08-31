'use strict';

const UUID = require('uuid');

module.exports = function() {
  return (ctx, next) => {
    let uuid = ctx.cookies.get('uuid');
    if (!uuid || uuid === 'null') {
      uuid = UUID.v4();
      ctx.cookies.set('uuid', uuid);
    }
    ctx.uuid = uuid;
    return next();
  };
}