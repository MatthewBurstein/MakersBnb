// process.enc.NODE_ENV = 'test'
//
// var path = require('path');
//
// var chai = require('chai');
// var chaiHttp = require('chai-http');
// var mongoose = require('mongoose');
// var app = require('../server');
//
// var expect = chai.expect;
//
// chai.use(chairHttp);
//
// const Fixtures = require('node-mongodb-fixtures');
// const fixtures = new Fixtures({
//   dir: path.resolve(__dirname, 'fixtures')
// });
//
// console.log(fixtures)
//
// describe('user', function() {
//
//   before( function() {
//     fixtures.connect('mongodb://localhost/makersBnbdb_test')
//     .unload()
//     .then(function() {fixtures.load() })
//     .catch(function(e) { console.lof("Error caught in user database loading: ", e) })
//   });
//
//   describe('POST /users', function() {
//     it('posts to the database', function(done) {
//       let testUser = {
//         email: 'jenny@test,com',
//         password: 'Password'
//       };
//       chai
//         .request(app)
//         .post('/users')
//         .send(testUser)
//         .end(function(err, res) {
//           expect(res.body.email).to.equal.('jenny@test.com')
//           done()
//         });
//     });
//   });
// });
