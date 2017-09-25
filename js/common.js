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

  	var buton = document.getElementsByClassName('menuBtn')[0];
  	var count = 0;
  	buton.onclick = function() {
		var mobileMenu = document.getElementsByClassName('mobileMenu')[0];
		if (mobileMenu.style.display === "none") {
			mobileMenu.style.display = "block";
		} else{
			mobileMenu.style.display = "none";
		}
	}
 });