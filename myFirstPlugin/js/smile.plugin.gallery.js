(function ($) {
    $.fn.galleryPlugin = function (options) {
        var defaultSettings = $.extend({
            margin: '150px auto',
            width: '966px',
            click: null,
            hover: null
    }, options);


    return this.each(function () {
        var self = this;
        var imagesArr = [];
        var descriptionsArr = [];
        var imagesCount = $(self).find('img').length;
        $('.gallery').find('img').each(function(){
            imagesArr.push($(this).attr("src"));
            descriptionsArr.push($(this).attr("data-description"));
        });
        $('.gallery').find('img').click(function() {
            var index = $(this).index('img');
            var link = imagesArr[index];
            var description = descriptionsArr[index];
            var buttons = '<button class="prev"></button><button class="next"></button><button class="exit"></button>';
            var zoomLayer = '<div class="zoom"><div><img src="' + link + '">' + buttons +'<span class="description">' + description + '</span></div></div>';
            $('body').append(zoomLayer);
            $('.exit').click (function(){
                $(".zoom").hide()
            });

            $('.prev').click(function() {
                var linkBack = imagesArr[--index];
                if (index == -1) {
                    index = imagesCount - 1;
                    linkBack = imagesArr[imagesCount - 1];
                }
                $('.zoom').find('img').attr('src', linkBack);
            });
            $('.next').click(function() {
                var linkNext = imagesArr[++index];
                if (index == imagesCount) {
                    index = 0;
                    linkNext = imagesArr[0];
                }
                $('.zoom').find('img').attr('src', linkNext);
            })
        });


    });

    };
})(jQuery);
