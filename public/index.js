$(document).ready(function(){
  $("#get-time").on('click', function(){
    var time = $("#raw-time").val().toString();
    $.ajax("http://honey-form.glitch.me/time");
});