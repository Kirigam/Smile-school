(function($) {
   $.widget( "ui.test", {

      options: {
         elementStyle:{
            // "font": "Roboto",
            // "color": "blue"
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
         this.initAccordion();
      },
      _refresh: function () {
         this.element.css(this.options.elementStyle);
      },
      initAccordion: function(){
         var self = this,
         opened = $('.open'); 

         if (opened.length > 0) {
            opened.each(function(){
               self.accordion($(this));
            });
         }
         self.accordion(self.element);
         self.element.addClass('open');
      },
      accordion: function(element){
         var body = element.find('.body');
         var height = parseInt($(element.find('.body div')).css("height"));
         var nowHeight = parseInt(element.find('.body').css("height"));
         var i = nowHeight,
         j = 5;
         var bool;
         if (nowHeight > 0) {
            bool = false;
            j = -5;
         }
         var myFor = setInterval(function(){
           body.css("height", i.toString() + "px");
            i += j;
            if (i > height - 5 && bool != false) {
               clearInterval(myFor);
               body.css("height", "auto");
            }
            if (i < 5) {
               clearInterval(myFor);
               body.css("height", "0");
               element.removeClass('open');
           }
         }, 10);
      },
      setGeneralClass: function () {
         var element = this.element;
         element.addClass("my-widget-test");
      }

   });
}(jQuery));
