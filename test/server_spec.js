var path = require('path');
process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../server');

var expect = chai.expect;

chai.use(chaiHttp);

const Fixtures = require('node-mongodb-fixtures');
const fixtures = new Fixtures({
  dir: path.resolve(__dirname, 'fixtures')
});


console.log(fixtures)


fixtures.connect('mongodb://localhost/makersBnbdb_test')
  .unload()
  .then(function() { fixtures.load() })
  .catch(function(e) { console.log("Error caught in database loading: ", e) })
  // .finally(function() { fixtures.disconnect() });



describe('server', function() {
  describe('GET /properties', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
        .get('/properties')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('responds with the correct data', function(done) {
      setTimeout(function() {
      chai.request(app)
        .get('/properties')
        .end(function(err, res) {
          console.log(res.body)
          expect(res.body[0].email).to.equal('fixture-test@example.com');
          done();
        });
      }, 1500);
    });
  });

  describe('POST /properties', function() {
    it('posts to the database', function(done) {
      let testProperty = {
        email: "jenny@test.com",
        imageUrl: "https://testUrl.com"
      }
      chai.request(app)
        .post('/properties')
        .send(testProperty)
        .end(function(err, res) {
          // console.log(res)
          expect(res.body.email).to.equal('jenny@test.com');
          done();
        });
    });
  });
});
