$(document).ready(function() {

    $("img").click(function() {
        $(this).hide();
    });

    $("#show").click(function() {
        $("img").show();
        $(".dogs").show();
        $(".cats").show();

    });

    $("#showdogs").click(function() {
        $('.dogs').show();
        $('.cats').hide();
    })

    $("#showcats").click(function() {
        $('.dogs').hide();
        $('.cats').show();
    })

});