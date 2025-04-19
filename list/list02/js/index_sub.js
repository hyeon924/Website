$(function () {


$(window).scroll(function () {
    if ($(window).scrollTop() > 350) {
        $("#backtotop").addClass("visible");
    } else {
        $("#backtotop").removeClass("visible");
    }
});

$("#backtotop").click(function () {
    $("body,html").animate({
        scrollTop: 0
    }, 1000);
});


});

