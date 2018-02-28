'use strict';
module.exports = function(app) {
  var makersBnb = require('../controllers/makersBnbController');

  // todoList Routes
  app
    .route('/properties')
    .get(makersBnb.list_all_properties)
    .post(makersBnb.create_a_property);
  // 
  // app
  //   .route('/tasks/:taskId')
  //   .get(todoList.read_a_task)
  //   .put(todoList.update_a_task)
  //   .delete(todoList.delete_a_task);
};
