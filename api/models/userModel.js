'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true
  },
  username: {
    type: String,
    required: 'Please provide a username'
  },
  email: {
    type: String,
    required: 'Please provide an email address'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Users', UserSchema)
