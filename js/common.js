 $(document).ready(function(){

 	$('.sl').slick({
 		autoplay: true,
 		cssEase: 'ease-in',
        speed: 600,
        dots: true,
        arrows: false,
        autoplaySpeed: 3000,
        fade: true
  	});
     $('.sl1').slick({
         autoplay: false,
         cssEase: 'ease-in',
         speed: 600,
         dots: false,
         arrows: true,
         fade: false
     });



     document.getElementsByClassName('menuBtn')[0].onclick = function() {
		var mobileMenu = document.getElementsByClassName('mobileMenu')[0];
		if (mobileMenu.style.display === "none") {
			mobileMenu.style.display = "block";
		} else{
			mobileMenu.style.display = "none";
		}
	}
	$('.gallery').galleryPlagin({
        arrows: true
    });
 });