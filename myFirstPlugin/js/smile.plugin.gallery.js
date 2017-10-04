(function ($) {
    $.fn.galleryPlugin = function (options) {
        var defaultSettings = $.extend({
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
            var buttons = {
                prevBtn: '<button class="prev arrows"></button>',
                nextBtn: '<button class="next arrows"></button>',
                exitBtn: '<button class="exit"></button>'
            };
            var buttonsArr = buttons.prevBtn + buttons.nextBtn + buttons.exitBtn;
            var zoomLayer = '<div class="zoom"><div><img src="' + link + '">' + buttonsArr +'</div></div>';
            $('body').append(zoomLayer);    //add container of zoom images
            if (defaultSettings.description) {
                $('.zoom').find('div').append('<span class="description">' + descriptionsArr[index] + '</span>');
            }
            $('.exit').click (function(){
                $(".zoom").remove()     //remove container of zoom images
            });
            $('.arrows').click(function() {
                if ($(this).hasClass('prev')) {
                    var toLink = imagesArr[--index];
                    while (index == -1) {
                        index = imagesCount - 1;
                        toLink = imagesArr[imagesCount - 1];
                    }
                 } else {
                    toLink = imagesArr[++index];
                    while (index == imagesCount) {
                        index = 0;
                        toLink = imagesArr[0];
                    }
                }
                $('.zoom').find('img').attr('src', toLink);
                $('.zoom').find('.description').text(descriptionsArr[index]);   //add description to zooming image
            })
        });
    });
    };
})(jQuery);
