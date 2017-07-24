$('dt').addClass('fechado');

var $active = null;

$('dt').click(function(){
  
  if ($active !== null){
    $active.next().slideToggle("fast");
    $active.removeClass('aberto');
    $active.addClass('fechado');
  } 
  
  $active = $(this);
  $active.addClass('aberto');
  $next = $active.next();
  
  if ($next.is(":hidden")){
    $next.slideToggle("fast");
  }else{
    $active.removeClass('aberto');
    $active.addClass('fechado');
    $active = null;     
  }
  
})