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
            itemsCustom: false,
           responsive: true,
           responsiveRefreshRate : 200,
         responsiveBaseWidth: window,
           lazyLoad : true,
            addClassActive : true,
            center: false,
            loop: true,
            touchDrag: true,
            mouseDrag: true,
            pullDrag: true,
            freeDrag: true
         });
	$('#fullpage').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
    animateAnchor: true,
    menu: '#menu',
    scrollingSpeed: 1000,
    scrollOverflow: false,
    scrollOverflowReset: true,
		autoScrolling: true,
    horizontalScrolling: false,
		fitToSection: true,
		fitToSectionDelay: 200,
    loopTop: true,
    loopBottom: true,
    offsetSections: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
    sectionSelector: '.section',
    normalScrollElements: '.item.a, .item.e, .gallery-wrapper, .slideshow-wrapper',
    touchSensitivity: 1,
        css3: true,
  autoHeight: true,
  responsiveWidth: 1200,
  recordHistory: false
    });
});
