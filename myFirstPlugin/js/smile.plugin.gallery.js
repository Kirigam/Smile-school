(function ($) {
    $.fn.galleryPlugin = function (options) {
        var defaultSettings = $.extend({
            margin: '150px auto',
            width: '650px',
            display: 'none',
            description: false
    }, options);
    return this.each(function () {
        var self = this;
        var imagesArr = [];     //array of images links
        var descriptionsArr = [];   //array of images descriptions
        var imagesCount = $(self).find('img').length;   //number of images
        $('.gallery').find('img').each(function(){
            imagesArr.push($(this).attr("src"));
            descriptionsArr.push($(this).attr("data-description"));
        }).click(function() {
            var index = $(this).index('img');
            var link = imagesArr[index];
            var buttons = '<button class="prev"></button><button class="next"></button><button class="exit"></button>';
            var zoomLayer = '<div class="zoom"><div><img src="' + link + '">' + buttons +'</div></div>';
            $('body').append(zoomLayer);    //add container of zoom images
            if (defaultSettings.description) {
                $('.zoom').find('div').append('<span class="description"></span>');
            }
            $('.zoom').find('.description').text(descriptionsArr[index]);
            $('.exit').click (function(){
                $(".zoom").remove()     //remove container of zoom images
            });
            $('.prev').click(function() {   //change image to previous
                var linkBack = imagesArr[--index];
                if (index == -1) {
                    index = imagesCount - 1;
                    linkBack = imagesArr[imagesCount - 1];
                }
                $('.zoom').find('img').attr('src', linkBack);
                $('.zoom').find('.description').text(descriptionsArr[index]);   //add description to zooming image
            });
            $('.next').click(function() {   //change image to next
                var linkNext = imagesArr[++index];
                if (index == imagesCount) {
                    index = 0;
                    linkNext = imagesArr[0];
                }
                $('.zoom').find('img').attr('src', linkNext);
                $('.zoom').find('.description').text(descriptionsArr[index]);   //add description to zooming image
            })
        });
        $(self).css('margin', defaultSettings.margin);
        $(self).css('width', defaultSettings.width);
    });
    };
})(jQuery);
