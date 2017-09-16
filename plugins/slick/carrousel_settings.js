/* Start slider1 */

$(document).on('ready', function() {
	var value = true;
	if($(window).width() > 640) { value = true} else {value = false};
  $(".single-slide").slick({
	dots: true,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: value,
	autoplaySpeed: 5000,
	arrows: false,
  });
  

});

/* /Carrousel of dishes; */