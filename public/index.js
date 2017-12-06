$(document).ready(function(){
  $("#get-time").on('click', function(){
    var time = $("#raw-time").val();
    $.get("http://honey-form.glitch.me/time",
      {
        data: time
      },
      function(data){
        console.log("Response: " + data);
      });

    });
});