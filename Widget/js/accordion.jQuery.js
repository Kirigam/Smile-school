(function($) {
   $.widget( "ui.accordion", {

      options: {
         elementStyle:{
             "color" : "#777",
             "font-style" : "italic",
             "font-weight" : 700
         },
         collapsible: true,
         onClickBefore: null,
         onClickAfter: null
      },

      _create: function() {
         var element = this.element;

         this.setGeneralClass();

         this._on(element, {
            click: "onClick"
         });

         this._refresh();
      },

      _setOption: function(key, value) {
         if ($.inArray(key, Object.keys(this.options.elementStyle)) != -1) {

            this.options.elementStyle[key] = value;
            this._refresh();
            return;
         }

         this._super(key, value);
         this._refresh();
      },

      onClick: function () {
         this._trigger( "onClickBefore" );
         this.option({'color': '#ffffff', 'font-weight' : 'bold'});
         this._trigger( "onClickAfter" );
      },

      _refresh: function () {
         this.element.css(this.options.elementStyle);
      },

      setGeneralClass: function () {
         var element = this.element.next();

         element.addClass("collapsed");
      },
      _destroy : function () {
          this.element.removeUniqueId( "#accordion" );
      }

   });

}(jQuery));
