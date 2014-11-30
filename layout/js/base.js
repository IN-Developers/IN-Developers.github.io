
$(function () {
    $(document).on("click", "a[href ^= '#']", (function () {
        var top = $(this.hash).offset().top - 60;
        $("html, body").stop();
        $("html, body").animate({ scrollTop: top }, 1500);
        return false;
    }));
    $(document).scroll(function () {
        if ($(document).scrollTop() > 100 && parseInt($("#header").css("top")) < 0) {
            $("#header").stop();
            $("#header").animate({ top: 0 }, 1000);
        } else if ($(document).scrollTop() < 100 && parseInt($("#header").css("top")) > -50) {
            $("#header").stop();
            $("#header").animate({ top: -50 }, 1000);
        }
    })
})