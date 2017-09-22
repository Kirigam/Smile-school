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
  	buton.onclick = () => {
  		document.getElementsByClassName('mobileMenu')[0].style.visibility = 'visible';
  	}
 });
