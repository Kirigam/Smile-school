(function ($) {
    $.fn.galleryPlagin = function (settings) {
        var defaulSettings = $.extend({
            autoplay: false,
            autoplaySpeed: this.autoplay ? 0 : 3000,
            arrows: false
        }, settings);

        return $('.gallery').find('img').click(function () {
            var images = $('.gallery').find('img');
            var self = this;
            var index;
            for(var i = 0; i < images.length; i++) {
                if(self.src === images[i].src) index = i;
            }

            $('body').append('<div class="zoom"><img src=' + images[index].src + '></div>');
            $('.zoom').append('<i class="fa fa-times-circle fa-2x"></i>');

            if(defaulSettings.arrows) {
                $('.zoom').append('<i class="fa fa-chevron-right fa-2x"></i>');
                $('.zoom').append('<i class="fa fa-chevron-left fa-2x"></i>');
            }
            if(defaulSettings.autoplay) {
                setInterval(function () {
                    $('.zoom img').remove();
                    if(index >= images.length-1) index = -1;
                    $('.zoom').append('<img src=' + images[++index].src + '>');
                } ,defaulSettings.autoplaySpeed);
            }


            $('.fa-times-circle').click(function () {
                $('.zoom').remove();
            });

            $('.fa-chevron-right').click(function () {
                $('.zoom img').remove();
                if(index >= images.length-1) index = -1;
                $('.zoom').append('<img src=' + images[++index].src + '>');
            });
            $('.fa-chevron-left').click(function () {
                $('.zoom img').remove();
                if(index <= 0) index = images.length;
                $('.zoom').append('<img src=' + images[--index].src + '>');
            });
        });
    }
}(jQuery));