$( document ).ready(function(){

  $('.hover2').mouseover(function() {
  $('.text2').css("visibility","visible");
});

$('.hover1').mouseover(function() {
$('.text1').css("visibility","visible");
});

$('.hover2').mouseout(function() {
  $('.text2').css("visibility","hidden");

});

$('.hover1').mouseout(function() {
  $('.text1').css("visibility","hidden");

});

});
