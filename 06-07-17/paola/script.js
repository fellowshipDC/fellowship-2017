$( document ).ready(function() {

// jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
});

  
    $( "button more" ).click(function() {
        $( "p" ).removeClass( "invisibilidad" ).addClass( "visibilidad" );
    });

    $( "button less" ).click(function() {
        $( "p" ).removeClass( "visibilidad" ).addClass( "invisibilidad" );
    });

});


  $( "p" ).toggle(
  function() {
  $( this ).removeClass( "invisibilidad" ).addClass( "visibilidad" );
  }, function() {
  $( this ).removeClass( "visibilidad" ).addClass( "invisibilidad" );
  }
  );