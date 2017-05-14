$(window).keypress(function(e) {
console.log(e.which);
if(e.which == 97) {
$("body").append($(".letter-a").clone().removeClass())
});
});
