'use strict';
var path = require('path');
var mongoose = require('mongoose'),
  Property = mongoose.model('Properties');

exports.list_all_properties = function(req, res) {
  Property.find({}, function(err, property) {
    if (err) res.send(err);
    res.json(property);
  });
};

exports.create_a_property = function(req, res) {
  var new_property = new Property(req.body);
  console.log("new_property: ", new_property)
  new_property.save(function(err, property) {
    console.log("err.stack: ", err.stack)
    if (err) res.send(err);
    console.log("property: ", property)
    res.json(property);
  });
};

exports.load_html = function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', '..', 'index.html'));
};
//
// exports.read_a_task = function(req, res) {
//   Task.findById(req.params.taskId, function(err, task) {
//     if (err) res.send(err);
//     res.json(task);
//   });
// };
//
// exports.update_a_task = function(req, res) {
//   Task.findOneAndUpdate(
//     { _id: req.params.taskId },
//     req.body,
//     { new: true },
//     function(err, task) {
//       if (err) res.send(err);
//       res.json(task);
//     }
//   );
// };
//
// exports.delete_a_task = function(req, res) {
//   Task.remove(
//     {
//       _id: req.params.taskId
//     },
//     function(err, task) {
//       if (err) res.send(err);
//       res.json({ message: 'Task successfully deleted' });
//     }
//   );
// };
