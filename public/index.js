$(document).ready(function(){
  $("#get-time").on('click', function(){
    var time = $("#raw-time").val().toString();
    $.ajax({
      url: "http://honey-form.glitch.me/time",
      data: time,
      success: function(response){
        console.log(response);
      }
    });

    });
});