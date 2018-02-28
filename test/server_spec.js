process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require('mongoose');
var app = require('../server');

var expect = chai.expect;

chai.use(chaiHttp);

describe('server', function() {
  before(function() {
    mongoose.connection.collections['properties'].drop(function(err) {
      console.log('collection dropped');
    });
  });
  // beforeEach(function(done) {
  //   let testProperty = {
  //     email: 'test@example.com',
  //     imageUrl: 'https://testUrl.com'
  //   };
  //   request = chai.request(app);
  //   return request
  //     .post('/properties')
  //     .send(testProperty)
  //     .end(function(err, res) {
  //       done();
  //     });
  // });
  describe('POST /properties', function() {
    it('posts to the database', function(done) {
      let testProperty = {
        email: 'jenny@test.com',
        imageUrl: 'https://testUrl.com'
      };
      chai
        .request(app)
        .post('/properties')
        .send(testProperty)
        .end(function(err, res) {
          // console.log(res);
          expect(res.body.email).to.equal('jenny@test.com');
          done();
        });
    });
  });

  describe('GET /properties', function() {
    it('responds with status 200', function(done) {
      chai
        .request(app)
        .get('/properties')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('responds with the correct data', function(done) {
      chai
        .request(app)
        .get('/properties')
        .end(function(err, res) {
          console.log(res.body);
          expect(res.body[0].email).to.equal('jenny@test.com');
          done();
        });
    });
  });
});
