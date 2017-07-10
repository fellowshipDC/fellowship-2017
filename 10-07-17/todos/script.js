$("ul.navbar-nav li.nav-item.active a.nav-link").css("color", "red");
$ ("ul.navbar-nav li.nav-item.dropdown div.dropdown-menu a.dropdown-item").click(function (){
// $("a.navbar-brand").css("color", "green"); 
console.log($("a.navbar-brand").css("color"));
if ($("a.navbar-brand").css("color") === "rgba(0, 0, 0, 0.9)") {
    $("a.navbar-brand").css("color", "green");
} else if ($("a.navbar-brand").css("color") === "rgb(0, 128, 0)") {
    $("a.navbar-brand").css("color", "rgba(0, 0, 0, 0.9)");
}

});