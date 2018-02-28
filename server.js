var path = require('path');
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Property = require('./api/models/makersBnbModel'), //created model loading here
  bodyParser = require('body-parser');
  config = require('config');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(config.DBHost);

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
