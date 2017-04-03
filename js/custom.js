// Configurações do ScrollFire
let options = [
  {selector: '#section_about', offset: 200, callback: typeCoderDojoDescription}
]

Materialize.scrollFire(options)

function typeCoderDojoDescription () {
  Typed.new('.small_description', {
      strings: ['O CoderDojo é um movimento global que pretende, de forma gratuita e voluntária, ajudar crianças e jovens entre os 7 a 17 anos a aprender a programar.'],
      typeSpeed: 0
    })
}

function scrollTo (id) {
  $('html, body').animate({
    scrollTop: $('#' + id).offset().top
  }, 1200)
}
