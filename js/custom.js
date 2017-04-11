function scrollTo (id) {
  $('html, body').animate({
    scrollTop: $('#' + id).offset().top
  }, 1200)
  console.log('decibel');
  if (id === 'about' && !hasBeenTyped) {
    typeCoderDojoDescription()
  }
}
