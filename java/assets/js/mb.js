//initialize
var winHeight = window.innerHeight,
  pages = document.getElementsByClassName('page'),
  navLinks = document.querySelectorAll('#menu-nav a'),
  currentPage = 0;

window.addEventListener('mousewheel', function(e) {
  scrollPages(e.wheelDelta);
});
window.addEventListener('DOMMouseScroll', function(e) {
  scrollPages(-1 * e.detail);
});

function scrollPages(delta) {
  var direction = (delta > 0) ? 'up' : 'down',
    currentPageOffset = currentPage * winHeight;

  if (direction == 'down' && currentPage <= pages.length - 2) {
    window.scrollTo(0, currentPageOffset + winHeight);
    currentPage++;
  } else if (direction == 'up' && currentPage > 0) {
    window.scrollTo(0, currentPageOffset - winHeight);
    currentPage--;
  }
}

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', updateNav(i));
}

function updateNav(i) {
  return function() {
    for (var j = 0; j < navLinks.length; j++) {
      navLinks[j].parentNode.classList.remove('current');
    }
    navLinks[i].parentNode.classList.add('current');
    currentPage = i;
  }
}
