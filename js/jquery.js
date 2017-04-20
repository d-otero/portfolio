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
            center: true,
            loop: true,
            touchDrag: true,
            mouseDrag: true,
            pullDrag: true,
            freeDrag: true,
            pagination: true,
            slideSpeed : 600,
            paginationSpeed: 1000
         });
         //Following code would do the trick.
 $(document.documentElement).keyup(function (event) {
         var owl = $('.owl-carousel');
   if (event.keyCode == 37) {
       owl.trigger('owl.prev');
   }
   else if (event.keyCode == 39) {
        owl.trigger('owl.next');
   }

 });
	$('#fullpage').fullpage({
    pagination: true,
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
    animateAnchor: true,
    menu: '#menu',
    scrollingSpeed: 1000,
		autoScrolling: true,
    scrolloverflow: false,
    horizontalScrolling: false,
		fitToSection: true,
		fitToSectionDelay: 50,
    resetSliders: true,
    loopTop: true,
    loopBottom: true,
    offsetSections: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
    sectionSelector: '.section',
    normalScrollElements: '.item.a, .item.e, .gallery-wrapper, .slideshow-wrapper',
    touchSensitivity: 40,
    keyboardScrolling: true,
    responsiveWidth: 767,
        css3: true,
    autoHeight: true,
    recordHistory: true,
    mouseWheelScrolling: true
    });
    // perform the introanimate only if the introanimate flag wasn't set
    if(sessionStorage.getItem('introanimate') !== 'yes') {  // check if introanimate flag was set
      sessionStorage.setItem('introanimate', 'yes');      // set the introanimate flag
      $('.introscreen').addClass('introanimate');             // perform the introanimate

      if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) { //remove introscreen from safari because of layout issue
        $('.introscreen').removeClass('introanimate');
        alert('Please use arrow keys for best viewing experience. Thank you!');
      }
    }
});
