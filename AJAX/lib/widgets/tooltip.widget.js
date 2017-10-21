define([
    'jquery',
    'jqueryUI'
], function($) {
    $.widget('smile.myTooltip', $.ui.tooltip, {

        items: "[title], [data-html]",

        _create: function () {
            return this._super();
        },

        content: function () {
            var element = $(this);

            if (element.is("[data-html]")) {
                return "dfjdlfkldhfkjd"
            }

        }
    })
});