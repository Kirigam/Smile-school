(function ($) {
    $.fn.galleryPlugin = function (options) {
        var defaultSettings = $.extend({
            margin: '150px auto',
            width: '1276px',
            click: null,
            hover: null,
    }, options);


    return this.each(function () {
        var self = this

        $('.gallery').find('img').click(function() {
            var link = $(this).attr("src");
            $('body').append('<div class="zoom"><img src=' + link + '></div>');
            $('.zoom').click (function(){
                $(this).remove()
            });
        });


        if($.isFunction(defaultSettings.click)){
            $(self).on('click', function () {
                defaultSettings.click.call(this);
            });
        }
    });

    };
})(jQuery);
