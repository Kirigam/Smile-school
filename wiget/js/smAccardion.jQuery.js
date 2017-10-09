(function ($) {
    $.widget('ui.smAcc', {
        options: {
            onCl: null
        },

        _create: function() {
            var element = this.element;
            this.setGeneralClass();
            this._on(element, {
                click: "onClick"
            });
        },

        onClick: function () {
            this._trigger( "onCl" );
        },

        setGeneralClass: function () {
            var element = this.element.next();
            element.addClass("notActive");
        }
    });
}(jQuery));