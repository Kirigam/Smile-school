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

        $('.gallery').children().find('img').click(function() {

            if($(this).hasClass('zoom')) {
                $(this).removeClass('zoom')
            } else {
                $(this).toggleClass('zoom')
            }
        });


        if($.isFunction(defaultSettings.click)){
            $(self).on('click', function () {
                defaultSettings.click.call(this);
            });
        }
    });

    };
})(jQuery);
