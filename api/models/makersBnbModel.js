'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PropertySchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId
  },
  imageUrl: {
    type: String,
    required: 'Please provide a link to your property image'
  },
  email: {
    type: String,
    required: 'Please provide your email address'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Properties', PropertySchema);
