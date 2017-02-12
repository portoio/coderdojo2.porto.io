$(document).ready(function () {
  var hash = window.location.hash
  // Goes to hash
  if (hash !== '#') {
    $('body').animate({
      scrollTop: $(hash).offset().top
    }, 0)
  }
})

var scrollTo = function (hash) {
  var locations = ['top', 'about', 'photos', 'portoio', 'contact']
  // Scrolls to section
  $('body').animate({
    scrollTop: $('#' + locations[hash]).offset().top
  }, 1250)
}
