$(document).ready(function() { //always do this first. A special event




  //append new element 20 times, and repeat that 100 times
  for (j = 0; j < 100; j++) {
    for (i = 0; i < 20; i++) {
      $("body").append( "<div class='rain' style='left:" + i*5 + "vw; top:" + j*50 + "px;'></div>" );
      console.log("element " + j + ", " + i + " added");
    }
  }




//  ndom values between 0 to 100, to rx and ry
    var rx = Math.floor(Math.random()*100);
    var ry = Math.floor(Math.random()*100);
      $("body").append( "<div class='element random' style='left:" + rx + "vw; top:" + ry + "vh;'></div>" );




      var tx = Math.floor(Math.random()*100);
      var ty = Math.floor(Math.random()*100);
      $("body").append( "<img class='element' src='rightheart.png' style='left:" + tx + "vw; top:" + ty + "vh;'></div>" );
//
// if (ty < 50) {
//    = "blue";
// }


      var ux = Math.floor(Math.random()*100);
      var uy = Math.floor(Math.random()*100);
      $("body").append( "<img class='element' src='leftheart.png' style='left:" + ux + "vw; top:" + uy + "vh;'></div>" );

      var wx = Math.floor(Math.random()*100);
      var wy = Math.floor(Math.random()*100);
      var color = "#000";
      $("body").append( "<img class='element square' style='left:" + wx + "vw; top:" + wy + "vh;'></div>" );

      if (wx < 50) {
        color = "blue";
      }
  console.log("rx: " + rx + " ry: " + ry);

  });
