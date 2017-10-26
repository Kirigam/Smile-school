define([
    'jquery',
    'jqueryUI'
], function($) {
    $.widget('smile.myTooltip', $.ui.tooltip, {
        items: "[title], [data-html]",

        content: function () {
            var element = $(this),
                self = this;

            if (element.is("[data-html]")) {
                return this.please
            }
        },

        please: function () {
            return "some text"
        }
    })
});