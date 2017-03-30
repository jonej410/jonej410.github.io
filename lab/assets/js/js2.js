$(.nav-item').click(function() {
  var button_nam = $ (this).data(.button);

  $(.'content').attr('class', 'column content');
  $('.content').addClass(button_name);
  $('.nav-item').removeClass('acitve')
  $(this).removeClass('active');
  $('.about-text').removeClass('hide');

  if (button_name == 'beyonce') {
    $('.slay').removeClass('hide');
    $('audio')[0].play();
  } else if () {
    $('.about-text').removeClass('hide');
  }
});


$('.close').click(function() {
  $('.slay').addClass('hide');
  $('nav-item').removeClass('active');
  $('audio')[0].pause();
});
