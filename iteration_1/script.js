$(document).ready(function() { //always do this first. A special event
  //append new element 100 times
  for (i = 0; i < 1000; i++) {
    $("body").append( "<img class='element' src='tru.jpg' style='transform: skew(" + i*154 + "deg);'></img>" );
    console.log("element " + i + " added");
  }



  //mouse interaction
  $('.element').mouseover(function(){

    $(this).fadeOut('slow');
  //  $('mySoundClip').play();
  });
  $('.element').mouseout(function(){

  });
});
