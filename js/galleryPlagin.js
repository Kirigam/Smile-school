(function ($) {
    $.fn.galleryPlagin = function (settings) {
        var defaulSettings = $.extend({
            autoplay: false,
            autoplaySpeed: this.autoplay ? 0 : 3000,
            arrows: false
        }, settings);

        return $('.gallery').find('img').click(function () {
            var src  = this.src;
            var index = src.lastIndexOf('f');
            var index1 = src.lastIndexOf('.');
            var str1 = src.substring(0, ++index);
            var str2 = src.substring(index1);
            var i = src.substring(index, index1);
            var images = $('.gallery img');


            $('body').append('<div class="zoom"><img src=' + src + '></div>');
            $('.zoom').append('<i class="fa fa-times-circle fa-2x"></i>');
            if(defaulSettings.arrows) {
                $('.zoom').append('<i class="fa fa-chevron-right fa-2x"></i>');
                $('.zoom').append('<i class="fa fa-chevron-left fa-2x"></i>');
            }
            if(defaulSettings.autoplay) {
                setInterval(function () {
                    $('.zoom img').remove();
                    if(i >= images.length) i = 0;
                    $('.zoom').append('<img src=' + (str1 + (++i) + str2) + '>');
                } ,defaulSettings.autoplaySpeed);
            }


            $('.fa-times-circle').click(function () {
                $('.zoom').remove();
            });

            $('.fa-chevron-right').click(function () {
                $('.zoom img').remove();
                if(i >= images.length) i = 0;
                $('.zoom').append('<img src=' + (str1 + (++i) + str2) + '>');
            });
            $('.fa-chevron-left').click(function () {
                $('.zoom img').remove();
                if(i <= 1) i = 4;
                $('.zoom').append('<img src=' + (str1 + (--i) + str2) + '>');
            });
        });
    }
}(jQuery));