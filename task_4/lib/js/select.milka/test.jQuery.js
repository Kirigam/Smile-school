(function($) {
   $.widget( "ui.test", {
      _create: function() {
         var element = this.element;
         this.setGeneralClass();
         this._on(element.find(".title")[0], {
            click: "onClick",
         });
      },
      onClick: function () {
         this.initAccordion();
      },
      initAccordion: function(){
         var self = this,
         opened = $('.open'); 
         if (opened.length > 0) {
            opened.each(function(){
               if (self.element.data("level") <= $(this).data("level")) {
                  self.accordion($(this));
               }
            });
         }
         self.accordion(self.element);
         self.element.addClass('open');
      },
      accordion: function(element){
         var body = element.find('.body')[0];
         var height = parseInt($(body).find('>div').css("height"));
         var nowHeight = parseInt($(body).css("height"));
         var i = nowHeight,
         j = 5;
         var bool;
         if (nowHeight > 0) {
            bool = false;
            j = -5;
         }
         var myFor = setInterval(function(){
           $(body).css("height", i.toString() + "px");
            i += j;
            if (i > height - 5 && bool != false) {
               clearInterval(myFor);
               $(body).css("height", "auto");
            }
            if (i < 5) {
               clearInterval(myFor);
               $(body).css("height", "0");
               element.removeClass('open');
           }
         }, 10);
      },
      setGeneralClass: function () {
         var element = this.element,
         i = 1,
         level = parseInt(element.data("level"));
         if (level > 0) {
            i = level;
         }
         element.addClass("my-widget-test");
         element.data("level", i);
         element.find(".testWidget").data("level", ++i);
      },
   });
}(jQuery));
