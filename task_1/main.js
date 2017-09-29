$(document).ready(function() {
    var sync2 = $("#sync2");
    var sync1 = $('#sync1');
    var slidesPerPage = 5; //globaly define number of elements per page
    sync2.owlCarousel({
        items : 1,
        slideSpeed : 5000,
        nav: false,
        autoplay: true,
        dots: true,
        loop: true,
        responsiveRefreshRate : 5000
    }).on('changed.owl.carousel');
    sync1.owlCarousel({
        items : 1,
        slideSpeed : 9000,
        nav: true,
        autoplay: true,
        dots: false,
        loop: true,
        responsiveRefreshRate : 5000
    }).on('changed.owl.carousel');
    var next = $(".owl-next");
    var prev = $(".owl-prev");
    next.text("»");
    prev.text("«");
    navbar(50);
});
function navbar(n = 25){
    var next = $(".owl-next");
    var prev = $(".owl-prev");
    var footerHeight = parseInt($("#footerImg").css("height"));
    margin = (footerHeight / 2 - n) * (-1);
    next.css("margin-top", (margin+"px").toString());
    prev.css("margin-top", (margin+"px").toString());
}
function bar(){
    
}
function collapse(blocks, height, button = false){
    var items = $(blocks);
    var height = parseInt($(height).css("height"));
    var nowHeight = parseInt(items.css("height"));
    var bool = false;
    if (button != false) {
        var but = $(button);
        if (nowHeight <= 5) {
            bool = true;
            but.css("transform", "rotate(270deg)");
            but.css("margin", "20px 0 -20px -21px");
        }
        else{
            but.css("transform", "rotate(90deg)");
            but.css("margin", "0 0 -20px 21px");
        }
    }
    else{
        if (nowHeight <= 5) {
            bool = true;
        }
    }
    var i = nowHeight;
    var myFor = setInterval(function(){
        items.css("height", i.toString() + "px");
        if (bool) {
            i += 5;
        }
        else{
            i -= 5;
        }
        if (i > height - 5 ) {
            clearInterval(myFor);
            if (button != false) {
                items.css("height", "auto");
            }
            else{
                items.css("height", height);
            }
        }
        if (i < 5) {
            clearInterval(myFor);
            items.css("height", "0");
        }
    }, 1);
}