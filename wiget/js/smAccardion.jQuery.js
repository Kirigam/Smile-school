(function ($) {
    $.widget('ui.smAcc', {
        options: {
            onClickBefore: null,
            onClickAfter: null
        },

        _create: function() {
            var element = this.element;
            this._on(element, {
                click: "onClick"
            });
        },

        onClick: function () {
            this._trigger( "onClickBefore" );
            this._trigger( "onClickAfter" );
        },
    });
}(jQuery));