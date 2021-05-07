(function($){
    ("use strict");

    // Closes the Sidebar Menu
    $(".menu-toggle").click(function(e){
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
        $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
        $(this).toggleClass("active");
    });

    // Smooth Scrolling Using Jquery and Easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if(
            location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname
        )   {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if(target.length) {
                    $("html, body").animate(
                        {
                            scrollTop: target.offset().top,

                        },
                        1000,
                        "easeInOutExpo"
                    );
                    return false;
                }
            }
    });

    $("#sidebar-wrapper .js-scroll-trigger").click(function() {
        $("#sidebar-wrapper").removeClass("active");
        $("menu-toggle").removeClass("active");
        $(".menu-toggle > fa.bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    });

    $(document).scroll(function() {
        var scrollDistance = $(this).scrollTop();
        if(scrollDistance > 100){
            $(".scroll-to-top").fadenIn();
        }
        else{
            $(".scroll-to-top").fadeOut();
        }
    });

})(jQuery);
