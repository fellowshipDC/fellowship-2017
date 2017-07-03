$( document ).ready(function() {

    $( "button" ).click(function() {
        $( "img" ).removeClass( "invisibilidad" ).addClass( "visibilidad" );
    });

    $( "img" ).click(function() {
        $( "img" ).removeClass( "visibilidad" ).addClass( "invisibilidad" );
    });

});