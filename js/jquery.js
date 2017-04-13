/*$(document).ready(function(){
  $('.image').unbind().on('click', function(){
    var id = $(this).find('a').data('target-id').toString();
    $.map($('.slider[data-slideshow-id="'+id+'"]'), function(value){
      for(var i = 0; i < this; i++) {
        console.log(this);
      }
      $(value).addClass('visible');
            console.log(value);
  $('.visible').owlCarousel();
   });
 });
 });   */
$(document).ready(function() {
$('.image').unbind().on('click', function(){
  var id = $(this).find('a').data('target-id').toString();
  $.map($('.owl-carousel[data-slideshow-id="'+id+'"]'), function(value){
    $(value).owlCarousel({
      singleItem: true,
       itemsCustom : false,
      responsive: true,
      responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
      lazyLoad : true,
       addClassActive : true,
    });
  
    console.log(value);
  });
});
});
