var mongoose = require('mongoose'),
  Property = require('./api/models/makersBnbModel');

if (process.env.NODE_ENV === 'test') {
  dbConfig = 'mongodb://localhost/makersBnbdb_test';
} else {
  dbConfig = 'mongodb://localhost/makersBnbdb';
}
mongoose.connection.collections['properties'].drop(function(err) {
  console.log('collection dropped');
});
