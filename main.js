$(document).ready(function() {
    var sync2 = $("#sync2");
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
    $(".owl-next").text("›");
    $(".owl-prev").text("‹");
});
function bar(){
	var vision = $("#manyBars"); 
	if (vision.css("display") == "none") {
		vision.css("display", "block");
	}
	else{
		vision.css("display", "none");
	}
}