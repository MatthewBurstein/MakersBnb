var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../server');

var expect = chai.expect;

chai.use(chaiHttp);

describe('server', function() {
  describe('/properties', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
        .get('/properties')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          console.log(res)
          done();
        });
    });

    it('responds with the correct data', function() {
      chai.request(app)
        .get('/properties')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          console.log(res)
          done();
        });
      });
    })
  });
});
