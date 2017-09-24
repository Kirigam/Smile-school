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
    var footerHeight = parseInt($("#footerImg").css("height"));
    margin = (footerHeight/2 - 50) * (-1);
    next.css("margin-top", (margin+"px").toString());
    prev.css("margin-top", (margin+"px").toString());
});
function navbar(){
    var next = $(".owl-next");
    var prev = $(".owl-prev");
    var footerHeight = parseInt($("#footerImg").css("height"));
    margin = (footerHeight/2 - 25) * (-1);
    next.css("margin-top", (margin+"px").toString());
    prev.css("margin-top", (margin+"px").toString());
}
function bar(){
	var vision = $("#manyBars"); 
	if (vision.css("display") == "none") {
		vision.css("display", "block");
	}
	else{
		vision.css("display", "none");
	}
}
