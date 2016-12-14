$(document).ready(function() { //always do this first. A special event

//  random values between 0 to 100, to rx and ry

var rx = Math.floor(Math.random()*100);
var ry = Math.floor(Math.random()*100);

      // $("body").append( "<div class='element random' style='left:" + rx + "vw; top:" + ry + "vh;'></div>" );
      $("body").append( "<div class='rain rain' style='left:" + rx + "vw; top:" + ry + "vh;'></div>" );


//right half of heart
      var tx = Math.floor(Math.random()*100);
      var ty = Math.floor(Math.random()*100);
      var color = "#000"
      $("body").append( "<img class='element' src='rightheart.png' style='left:" + tx + "vw; top:" + ty + "vh;'></div>" );


//left half of heart
      var ux = Math.floor(Math.random()*100);
      var uy = Math.floor(Math.random()*100);
      $("body").append( "<img class='element' src='leftheart.png' style='left:" + ux + "vw; top:" + uy + "vh;'></div>" );

  console.log("rx: " + rx + " ry: " + ry);

//first set of raindrops
  for (j = 0; j < 100; j++) {
    for (i = 0; i < 20; i++) {
      $("body").append( "<div class='rain' style='left:" + i*5 + "vw; top:" + j*50 + "px;'></div>" );
      console.log("element " + j + ", " + i + " added");
    }
  }

//second set of raindrops
  for (k = 0; k < 100; k++) {
    for (l = 0; l < 30; l++) {
      $("body").append( "<div class='second' style='left:" + l*9 + "vw; top:" + k*56 + "px;'></div>" );
      console.log("element " + k + ", " + l + " added");
    }
  }

  });
