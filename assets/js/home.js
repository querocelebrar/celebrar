function scrollDown() {
  $('html, body').animate({
    scrollTop: $("#p-body").offset().top
  }, 1000);
}

function checkAnimation(elem) {
  if (isScrolledIntoView($(elem))) {
    $('#fixed-header').css('display', 'block');
  }
  else
    $('#fixed-header').css('display', 'none');
}

function isScrolledIntoView(elem) {
  var distanciaDaTelaComTopo = $(window).scrollTop();
  var alturaDaLanding = $(elem).outerHeight();

  return (distanciaDaTelaComTopo >= alturaDaLanding);
}

$(window).scroll(function() {
  checkAnimation($('.p-hero'));
});

$('#headerButton #talkButton').click(function() {
  $.post('/converse-comigo');
});