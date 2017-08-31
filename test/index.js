'use strict';

const Koa = require('koa');
const assert = require('assert');
const request = require('supertest');
const uuid = require('..');

const app = new Koa();
app.use(uuid());

describe('set uuid', () => {
  it('should get uuid whatever in cookies', (done) => {
    request(app.listen())
      .get('/')
      .end((err, res) => {
        const cookies = res.header['set-cookie'];
        let _uuid = null;
        Array.prototype.map.call(cookies, (item, index) => {
          if (item.indexOf('uuid=') > -1) {
            _uuid = item;
          }
        });
        assert.notEqual(_uuid.split(';')[0].split('uuid=')[1], '');
        assert.equal(err, null);
        done();
      });
  });
});
