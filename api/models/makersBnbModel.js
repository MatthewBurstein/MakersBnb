'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PropertySchema = new Schema({
  imageUrl: {
    type: String,
    required: 'Please provide a link to your property image'
  },
  email: {
    type: String,
    required: 'Please provide your email address'
  },
  // name: {
  //   type: String,
  //   required: 'Kindly enter the name of the task'
  // },
  Created_date: {
    type: Date,
    default: Date.now
  },
  // status: {
  //   type: [
  //     {
  //       type: String,
  //       enum: ['pending', 'ongoing', 'completed']
  //     }
  //   ],
  //   default: ['pending']
  // }
});

module.exports = mongoose.model('Properties', PropertySchema);
