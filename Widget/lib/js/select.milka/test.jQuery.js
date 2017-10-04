(function($) {
   $.widget( "ui.test", {

      options: {
         elementStyle:{
            "font": "Roboto",
            "color": "blue"
         },

         onClickBefore: null,
         onClickAfter: null,
         random: null
      },

      _create: function() {
         var element = this.element;

         this.setGeneralClass();

         this._on(element, {
            click: "onClick",
            mouseover: "over"
         });

         this._refresh();
      },

      _setOption: function(key, value) {
         if ($.inArray(key, Object.keys(this.options.elementStyle)) != -1) {
            if (value == "random") {
               value = this.random();
            }

            this.options.elementStyle[key] = value;
            this._refresh();
            return;
         }

         this._super(key, value);
         this._refresh();
      },

      onClick: function () {
         this._trigger( "onClickBefore" );
         this.option({'color': 'black'});
         this._trigger( "onClickAfter" );
      },

      over: function () {
        console.log('over');
      },

      _refresh: function () {
         this.element.css(this.options.elementStyle);
      },

      random: function () {
         var colors = {
            red: Math.floor( Math.random() * 256 ),
            green: Math.floor( Math.random() * 256 ),
            blue: Math.floor( Math.random() * 256 )
         };

         return "rgb("+colors.red+","+colors.green+","+colors.blue+")";

      },

      setGeneralClass: function () {
         var element = this.element;

         element.addClass("my-widget-test");
      }

   });

   $.widget( "ui.test4", $.ui.test, {
      onClick: function(event) {
         console.log( "This widget 4" );
         return this._super();
      },

      setGeneralClass: function () {
         var element = this.element;
         element.addClass("my-widget-test2");
      },

      over: function () {
         console.log('over another element');
      },
   });

   
}(jQuery));
