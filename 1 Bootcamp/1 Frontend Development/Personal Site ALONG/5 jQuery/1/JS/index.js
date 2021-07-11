// $("h1").css("color", "red");

// console.log($("h1").css("font-size"));

// $("h1").addClass("bg-title");

$(document).keypress(function (event) {
    $("h1").text(event.key);
});