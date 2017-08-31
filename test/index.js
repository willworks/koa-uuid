var koa = require('koa');
var assert = require('assert');
var request = require('supertest');
var uuid = require('..');

var app = new koa();
app.use(uuid());

describe('set uuid', function () {
  it('should get uuid whatever in cookies', function (done) {
    request(app.listen())
      .get('/')
      .end((err, res) => {
        const cookies = res.header['set-cookie'];
        let uuid = null;
        Array.prototype.map.call(cookies, (item, index) => {
          if(item.indexOf('uuid=') > -1) {
            uuid = item;
          }
        });
        assert.notEqual(uuid.split(';')[0].split('uuid=')[1], '')
        assert.equal(err, null)
        done()
      })
  });
});
