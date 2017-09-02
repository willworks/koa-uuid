'use strict';

const Koa = require('koa');
const assert = require('assert');
const request = require('supertest');
const uuid = require('..');

describe('set uuid', () => {
  it('should get uuid whatever in cookies', (done) => {
    const app = new Koa();
    app.use(uuid());
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


describe('rewrite configuration', () => {
  it('should rewrite uuid configuration in cookies', (done) => {
    const app = new Koa();
    const options = {
      signed: true,
      httpOnly: false,
      path: '/test',
    };
    // app.keys should be set when signed is true
    app.keys = ['secret', 'key'];
    app.use(uuid(options));
    request(app.listen())
      .get('/')
      .end((err, res) => {
        const cookies = res.header['set-cookie'];
        let _uuid = null;
        let _path = '/';
        let _httpOnly = false;
        Array.prototype.map.call(cookies, (item, index) => {
          if (item.indexOf('uuid=') > -1) {
            _uuid = item;
          }
          if (item.indexOf('path=') > -1) {
            _path = item;
          }
          if (item.indexOf('httpOnly') > -1) {
            _httpOnly = true;
          }
        });
        assert.notEqual(_uuid.split(';')[0].split('uuid=')[1], '');
        assert.notEqual(_uuid.split(';')[0].split('path=')[1], '/test');
        assert.equal(_httpOnly, false);
        assert.equal(err, null);
        done();
      });
  });
});

