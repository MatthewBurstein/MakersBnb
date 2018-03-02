// desc('setting up testMongoDB');
// task('mongotest', function (params) {
//   conn = new Mongo();
//   db = conn.getDB("mongodb://localhost/makersBnbdb_test");
// });

desc('setting up testMongoDB');
task('mongotest', function(){
  var mongoose = require('mongoose');

  db = mongoose.connect("mongodb://localhost/makersBnbdb_test")
});
