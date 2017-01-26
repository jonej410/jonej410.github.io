$(document).ready(function() {

  for (i=0; i < 100; i++){
    for (j=0; j < 10; j++) {
$('body').append("<div id='rec' style='margin: (" + i * 360 + ");'></div>" );
    }
  }

/*  $('#rec').mouseover(function() {
    $(this).fadeOut('slow');
  });*/

});
