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

$('#readMorePagamentos').click(function () {
  document.getElementById('DescriptionTitle').innerHTML = "PAGAMENTOS<br>MENSAIS";
  document.getElementById('Description').innerHTML = "<br>Nosso principal foco no inicio, nele você define \
                                                      um valor que você pode ir pagando mensalmente para \
                                                      ir acumulando para sua festa.";
});

$('#readMoreRifas').click(function () {
  document.getElementById('DescriptionTitle').innerHTML = "RIFAS ELETRÔNICAS";
  document.getElementById('Description').innerHTML = "<br>Nossa plataforma vai disponibilizar, mensalmente, rifas eletrônicas para que você possa vender e rentabilizar ainda mais sua \
                                                          festa. Toda rifa vendida por seu login vai gerar uma boa comissão que vai direto para sua conta dentro da plataforma.";
});

$('#readMoreVaquinhas').click(function () {
  document.getElementById('DescriptionTitle').innerHTML = "CROWDFUNDING / <br>  VAQUINHAS";
  document.getElementById('Description').innerHTML = "<br>Dentro da plataforma você poderá definir objetivos e convidar\
                                                          pessoas de sua lista para te ajudar a alcançar eles. Por exemplo: Você define um objetivo de\
                                                          contratar um dupla sertaneja para sua festa que tem o custo de R$1.000,00 e seleciona\
                                                          pessoas de sua lista de convidados para te ajudar no objetivo (Padrinhos, primos, amigos\
                                                          próximos etc...). <br><br>Dentro daquele objetivo, as pessoas que você selecionou podem fazer\
                                                          contribuições e as mesmas vão diretamente para sua conta dentro da plataforma.";
});

$('#readMoreVendas').click(function () {
  document.getElementById('DescriptionTitle').innerHTML = "VENDA DE CONVITES";
  document.getElementById('Description').innerHTML = "<br>Sempre acontece de você chamar algum convidado e ele ter algum\
                                                          agregado para levar né? <br><br>Nesse caso, você vai poder gerar um link para venda do convite a esse\
                                                          agregado e quando ele efetuar o pagamento o dinheiro vai direto para sua conta dentro da\
                                                          plataforma.";
});

