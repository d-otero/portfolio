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
/*
$(document).ready(function() {
$('.image').unbind().on('click', function(){
  var id = $(this).find('a').data('target-id').toString();
  var carousel = $.map($('.owl-carousel[data-slideshow-id="'+id+'"]'), function isVisible(value){
    $(value).siblings().toggleClass('section[class="owl-theme"]');
    $(value).owlCarousel({
        // your initial option here, again.   $('.owlCarousel').owlCarousel({
             singleItem: true,
              itemsCustom : false,
             responsive: true,
             responsiveRefreshRate : 200,
           responsiveBaseWidth: window,
             lazyLoad : true,
              addClassActive : true,
              center: false,
              loop: true
           });
    });
      });
    });
*/
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      // your initial option here, again.   $('.owlCarousel').owlCarousel({
           singleItem: true,
            itemsCustom : false,
           responsive: true,
           responsiveRefreshRate : 200,
         responsiveBaseWidth: window,
           lazyLoad : true,
            addClassActive : true,
            center: false,
            loop: true
         });
	$('#fullpage').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
    scrollingSpeed: 700,
    scrollOverflow: true,
    	scrollOverflowReset: true,
		autoScrolling: false,
    horizontalScrolling: false,
		fitToSection: true,
		fitToSectionDelay: 1000,
    loopBottom: true,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
    sectionSelector: '.section',
    normalScrollElements: '.item.a, .item.e, .gallery-wrapper, .slideshow-wrapper',
    touchSensitivity: 1,
        css3: true,
  autoHeight: true,
  responsiveWidth: 1000,
  afterResponsive: function(isResponsive){

  }

    });

var navHeightUpdate = function(){
    var navHeight = $('.item.d').outerHeight();
    console.log('Navigation Height = '+navHeight);
    $('.dummy-buffer').css('height',navHeight);
};

navHeightUpdate();

// call navHeightUpdate when resizing window
// use Smart Resize by Paul Irish for resizing events
//http://www.paulirish.com/2009/throttled-smartresize-jquery-event-handler/
(function($,sr){
  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;
      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };
          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);
          timeout = setTimeout(delayed, threshold || 10);
      };
  }
  // smartresize
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
})(jQuery,'smartresize');

$(window).smartresize(function(){
    console.log('Current Navigation Height = '+$('.item.a').outerHeight());
    navHeightUpdate();
});
});
