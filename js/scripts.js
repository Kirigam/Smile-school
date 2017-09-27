
$(document).ready(function(){
    function menuFunction() {
        if ($(window).width() < 1200) {
            $('.menu').toggleClass('m_menu');
            $('.m_menu').removeClass('menu');
        }
        else {
            $('.m_menu').toggleClass('menu');
            $('.menu').removeClass('m_menu');
        }
    }
    menuFunction();
    $(window).resize(function() {
        menuFunction();
    });

    $('.menuBtn').click(function(){
        $('.m_menu').toggleClass('active');
        $(".menuBtn").toggleClass("toggle");
        $(".m_menu").toggleClass("down");
    })
    $(document).click(function(event) {
        if ($(event.target).closest(".menuBtn").length ) return;
        $('.m_menu').removeClass('active');
        $(".menuBtn").removeClass("toggle");
        $(".m_menu").removeClass("down");
        event.stopPropagation();
    });

    /* Like */
    $(".fa-heart-o").one("click", function(){
        var index = $(".btn").index(this);
        var num = +$(".like").eq(index).text();
        $(".like").eq(index).text(++num);
        $(this).toggleClass('fa-heart').removeClass('fa-heart-o');
    });
});