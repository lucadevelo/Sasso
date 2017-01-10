(function ($, window, document, undefined) {

  'use strict';

  $(window).load(function() {
    $(".loader").delay(800).fadeOut("slow");
  })
  $window = $(window);
  if( $window .width() > 800){
  
    $('.parallax-scroll1').parallax("50%", 0.5);
    $('.parallax-scroll3').parallax("50%", 0.5);
    $('.parallax-scroll4').parallax("50%", 0.5);
    $('.parallax-scroll5').parallax("50%", 0.5);
  }

  $(function () {
    // FastShell
  });

})(jQuery, window, document);
