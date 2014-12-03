
$(function () {
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
    $(document).on("click", "a[href ^= './'], a[href ^= 'http://github.dev003.net/']", function () {
        $.ajax({
            dataType: "html", url: $(this).attr("href"), success: function (data) {
                if ($("#main", data).length < 1) {
                    $("#main").html(data.html());
                    return false;
                }
                $("#main").html($("#main", data).html());
            }, error: function () { $("#main").html("<p>Error</p>"); }
        });
        history.pushState(null, "", $(this).attr("href"));
        return false;
    });

    $(document).scroll(function () {
        return false;
        if ($(document).scrollTop() > 150 && parseInt($("#header").css("top")) < 0) {
            $("#header").stop();
            $("#header").animate({ top: 0 }, 700);
        } else if ($(document).scrollTop() < 150 && parseInt($("#header").css("top")) > -50) {
            $("#header").stop();
            $("#header").animate({ top: -50 }, 700);
        }
    });

})