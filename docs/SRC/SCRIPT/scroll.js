window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    document.getElementById('titolo').classList.add('d-flex justify-content-start');
  } else {
    document.getElementById('titolo').classList.remove('d-flex justify-content-start');
  }
});