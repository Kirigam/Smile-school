$(document).ready(function() {
 
  $("#owl-example").owlCarousel({
      itemsDesktop : [1499,1],
      itemsDesktopSmall : [1199,1],
      itemsTablet : [899,1],
      itemsMobile : [599,1],
      navigation : true,
      autoplay: true,
      navigationText : ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
  });
  
});

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