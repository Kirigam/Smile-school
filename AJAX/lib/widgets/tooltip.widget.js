define([
    'jquery',
    'jqueryUI'
], function($) {
    $.widget('smile.myTooltip', $.ui.tooltip, {

        _create: function () {
            return this._super();
        },

        items: "[title], [data-html]",

        content: function () {
            var element = $(this);
            var self = this;

            if (element.is("[data-html]")) {
                return self.please()
            }
        },

        please: function () {
            return "some text"
        }
    })
});