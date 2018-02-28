$(document).ready(function() {
  $('#btn').click(function() {
    $.get('http://localhost:3000/properties', function(data) {
      console.log(data);
      $('.test').text(data[0].email);
    });
  });
});
