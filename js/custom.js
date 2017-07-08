$('document').ready(function() {
  if (window.location.hash === '') { // Caso não exista um hash no url
    window.location.hash = '#index'
  }
  $(window.location.hash + '_nav').removeClass('sidebar_color').addClass('current_section');
	
  $('#map').click(function(){
	  $("#googleMaps").css("pointer-events", "auto");
  });
	
  $('#map').mouseleave(function(){
	  $("#googleMaps").css("pointer-events", "none");
  });
  
});

function scrollTo (id) {
  $(window.location.hash + '_nav').removeClass('current_section').addClass('sidebar_color') // Muda a cor do icone da secção anterior para azul
  $('html, body').animate({
    scrollTop: $('#' + id).offset().top // Dá scroll até à nova secção
  }, 500)
  $('#' + id + '_nav').removeClass('sidebar_color').addClass('current_section') // Muda a cor do icone da nova secção
}
