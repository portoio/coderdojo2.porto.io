function scrollTo (id) {
  $('html, body').animate({
    scrollTop: $('#' + id).offset().top
  }, 500)
  console.log('decibel');
  if (id === 'about' && !hasBeenTyped) {
    typeCoderDojoDescription()
  }
}
