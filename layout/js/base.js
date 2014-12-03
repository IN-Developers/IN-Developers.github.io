﻿$(function () {

    $("#menu #link a").hover(function () {
        $(this).css("background-color", "#F8F8F8");
    }, function () {
        $(this).css("background-color", "");
    });
    $(document).on("click", "a[href ^= '#']", (function () {
        var top = $(this.hash).offset().top - 60;
        $("html, body").stop();
        $("html, body").animate({ scrollTop: top }, 1000);
        return false;
    }));

    // GET HTML - Ajax
    $(document).on("click", "a[href ^= './'], a[href ^= '../'], a[href ^= 'http://github.dev003.net/']", function () {
        $("#main").animate({ opacity: 0, width: 500 }, 200, function () {
            $.ajax({
                dataType: "html", url: $(this).attr("href"), success: function (data) {
                    if ($("#main", data).length < 1) {
                        $("#main").html(data.html());
                        return false;
                    }
                    $("#main").html($("#main", data).html());
                }, error: function () { $("#main").html("<p>Error</p>"); },
                complete: function () { $("#main").animate({ opacity: 1, width: 650 }, 200) }
            });
        });
        history.pushState(null, "", $(this).attr("href"));
        return false;
    });
    $(window).on("popstate", function () {
        location.replace(location.href);
    });

})