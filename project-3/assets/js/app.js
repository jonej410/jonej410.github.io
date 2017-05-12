var words = new Array("fleek", "beat", "sis", "god", "sup", "od", "af", "sus", "dub", "dab", "nigga", "bruh", "drag", "spiral", "gag", "deadass", "tru", "weak", "dead", "life");
// var lines = new Array();
// line1[0]  ='<div class= "l-all l-line1" style="border: 1px solid white; height: 20%">';
// line2[1]  ='<div class= "l-all l-line2" style="border: 1px solid white; height: 20%">';
// var baseheight=$(".l-1line1").css('height').substring(0,$("1-line1").css('height').length-2);
//
// function subheight(){return $("#sub").css('height').substring(0,$("#sub").css('height').length-2);}


var wordsAppended1 = 0;
var wordsAppended2 = 0;

$( document ).ready(function(){

     //Keep track of last scroll
     var lastScroll = 0;
     $(window).scroll(function(event){
         //Sets the current scroll position
         var st = $(this).scrollTop();
         //Determines up-or-down scrolling

           if (st > lastScroll) {
              //Replace this with your function call for downward-scrolling
              // console.log($(".l-1line2").html().length);
              if (wordsAppended2 < 15) {
                $(".l-1line1").append(words[Math.floor(Math.random()*words.length)] + " ");
              }
              if (wordsAppended2 >=15 && wordsAppended2 < 30) {
                $(".l-1line2").append(words[Math.floor(Math.random()*words.length)] + " ");
              }
              if (wordsAppended2 >= 30 && wordsAppended2 < 45) {
                $(".l-1line3").append(words[Math.floor(Math.random()*words.length)] + " ");
              }
              if (wordsAppended2 >= 45 && wordsAppended2 < 60) {
                $(".l-1line4").append(words[Math.floor(Math.random()*words.length)] + " ");
              }
              if (wordsAppended2 >= 60 && wordsAppended2 < 75) {
                $(".l-1line5").append(words[Math.floor(Math.random()*words.length)] + " ");
              }
              if (wordsAppended2 >=75) {
                wordsAppended1 = 0;

                $(".r-1line1").html("");
                $(".r-1line1").fadeIn();
                $(".l-1line5").fadeOut(3000);

                $(".r-1line2").html("");
                $(".r-1line2").fadeIn();
                $(".l-1line4").fadeOut(3500);

                $(".r-1line3").html("");
                $(".r-1line3").fadeIn();
                $(".l-1line3").fadeOut(4000);

                $(".r-1line4").html("");
                $(".r-1line4").fadeIn();
                $(".l-1line2").fadeOut(4500);

                $(".r-1line5").html("");
                $(".r-1line5").fadeIn();
                $(".l-1line1").fadeOut(5000);

               }
            wordsAppended2++;
         } else {
             //Replace this with your function call for upward-scrolling
             if (wordsAppended1 < 15) {
               $(".l-1line5").fadeOut((words[Math.floor(Math.random()*words.length)] + " "));
               $(".r-1line1").append(words[Math.floor(Math.random()*words.length)] + " ");
             }
             if (wordsAppended1 >=15 && wordsAppended1 < 30) {
               $(".l-1line4").fadeOut((words[Math.floor(Math.random()*words.length)] + " "));
               $(".r-1line2").append(words[Math.floor(Math.random()*words.length)] + " ");
             }
             if (wordsAppended1 >=30 && wordsAppended1 < 45) {
               $(".l-1line3").fadeOut((words[Math.floor(Math.random()*words.length)] + " "));
               $(".r-1line3").append(words[Math.floor(Math.random()*words.length)] + " ");
             }
             if (wordsAppended1 >=45 && wordsAppended1 < 60) {
               $(".l-1line2").fadeOut((words[Math.floor(Math.random()*words.length)] + " "));
               $(".r-1line4").append(words[Math.floor(Math.random()*words.length)] + " ");
             }
             if (wordsAppended1 >=60 && wordsAppended1 < 75) {
               $(".l-1line1").fadeOut((words[Math.floor(Math.random()*words.length)] + " "));
               $(".r-1line5").append(words[Math.floor(Math.random()*words.length)] + " ");
             }
             if (wordsAppended1 >= 75) {
               wordsAppended2 = 0;

               $(".l-1line1").html("");
               $(".l-1line1").fadeIn();
               $(".r-1line5").fadeOut(3000);

               $(".l-1line2").html("");
               $(".l-1line2").fadeIn();
               $(".r-1line4").fadeOut(3500);

               $(".l-1line3").html("");
               $(".l-1line3").fadeIn();
               $(".r-1line3").fadeOut(4000);

               $(".l-1line4").html("");
               $(".l-1line4").fadeIn();
               $(".r-1line2").fadeOut(4500);

               $(".l-1line5").html("");
               $(".l-1line5").fadeIn();
               $(".r-1line1").fadeOut(5000);
             }
           wordsAppended1++;
          }
         //Updates scroll position
         lastScroll = st;
     });
   });

// $(window).scroll(function() {
//   console.log($(window).scrollTop());

  // $(".l-1line1").append(words[Math.floor(Math.random()*words.length)] + " ");
//   $(".l-1line2").append(words[Math.floor(Math.random()*words.length)] + " ");
//   $(".l-1line3").append(words[Math.floor(Math.random()*words.length)] + " ");
//   $(".l-1line4").append(words[Math.floor(Math.random()*words.length)] + " ");
//   $(".l-1line5").append(words[Math.floor(Math.random()*words.length)] + " ");
//
//   var myDiv = $('.l-1line1');
//   myDiv.text(myDiv.text().substring(0,90));
//
//   var myDiv = $('.l-1line2');
//   myDiv.text(myDiv.text().substring(0,90));
//
//   var myDiv = $('.l-1line3');
//   myDiv.text(myDiv.text().substring(0,90));
//
//   var myDiv = $('.l-1line4');
//   myDiv.text(myDiv.text().substring(0,90));
//
//   var myDiv = $('.l-1line5');
//   myDiv.text(myDiv.text().substring(0,90));
//
// });

// function hello(person, informal) {
//   var date = new Date(),
//       greeting;
//
//   if (informal) {
//     greeting = 'Yo, ';
//   else {
//     greeting = 'Hello, ';
//   }
//
//   alert(greeting + date);
// }
//
// hello('Alex', true);
