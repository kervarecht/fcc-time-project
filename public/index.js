$(document).ready(function(){
  $("#get-time").on('click', function(){
    var time = $("#raw-time").val();
    $.ajax({
      url: "http://honey-form.glitch.me/time",
      data: time,
      success: function(data){
        console.log("Response: " + data);
      }
    });

    });
});