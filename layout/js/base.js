$(function () {

    jQuery.extend(jQuery.easing, { myslide: function (x, t, b, c, d) { t=t/d-1; return c*(t*t*t*t*t+1)+b; } });

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
        var href = $(this).attr("href");
        var page = "No data";
        $("#main").css({ overflow: "hidden", "white-space": "nowrap" });
        $("#main").animate({ opacity: 0, width: 500 }, 200, "myslide", function () {
            $("#main").html("<h3>Loading</h3>");
            $("#main").css({ opacity: 1, width: 650 });
            $.ajax({
                dataType: "html", url: href, success: function (data) {
                    if ($("#main", data).length < 1) {
                        page = data.html();
                        return false;
                    }
                    page = $("#main", data).html();
                }, error: function () { page = "<h3>Error</h3>"; },
                complete: function () {
                    $("#main").css({ opacity: 0, width: 500 });
                    $("#main").html(page);
                    $("#main").animate({ opacity: 1, width: 650 }, 200, "myslide", function () { $("#main").css({ overflow: "", "white-space": "" }); });
                    history.pushState(null, "", $(this).attr("href"));
                }
            });
        });
        return false;
    });
    $(window).on("popstate", function () {
        location.replace(location.href);
    });

})