var path = require('path');
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Property = require('./api/models/makersBnbModel'), //created model loading here
  bodyParser = require('body-parser'),
  config;
  if (process.env.NODE_ENV === 'test') {
    dbConfig = "mongodb://localhost/makersBnbdb_test"
  } else {
    dbConfig = "mongodb://localhost/makersBnbdb"
  };

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
// app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./api/routes/makersBnbRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

module.exports = app;
