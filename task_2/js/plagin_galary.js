 (function ($) {
   /**
    * @param options
    * @returns {*}
    */
    $.fn.smile = function (options) {
      var defaulSettings = $.extend({
         button: true,
      }, options);
      var html,
      imgHtml,
      allImg = this;
      this.each(function () {
        var self = this;

        /**
        * add items to the DOM
        */
        return $(this).on('click', function () {
          imgHtml ="<div class=\"bigImg\">\n" + "<img class=\"imgNow\" src=" + self.src + ">\n" + "</div>\n";
          html = $.parseHTML("<div class=\"galaryBackground\">\n" + "<div class=\"bigImgBlock\">\n" + imgHtml + "</div>\n" + "</div>\n");
          $("body").append(html);
          if (defaulSettings.button == true) {
            $(".galaryBackground").append($.parseHTML("<div class=\"galaryBut galaryPrev\"><div class=\"fa fa-caret-down fa-5x triangle\"></div></div>"));
            $(".galaryBackground").append($.parseHTML("<div class=\"galaryBut galaryNext\"><div class=\"fa fa-caret-down fa-5x triangle\"></div></div>"));
          }
          

          /**
          * close galary
          */
          $(window).on('keydown', function(e) {
            if (e.keyCode == 27) {
              $(".galaryBackground").remove();
            }
          });
          $(document).mouseup(function (e) {
            var img = $(".bigImgBlock");
            var button = $(".galaryBut");
            if (img.has(e.target).length === 0 && button.has(e.target).length === 0){
              $(".galaryBackground").remove();
            }
          });



          /**
          * button next img and prev img
          */
          if (defaulSettings.button == true) {
            $('.galaryNext').on('click', function(){
              var now = $(".bigImg img").attr("src"),
              next;
              for(var i = 0; i < allImg.length; i++){
                if (i == allImg.length - 1) {
                  next = allImg[0].src;
                  break;
                }
                if (allImg[i].src == now) {
                  next = allImg[i + 1].src;
                  break;
                }
              }
              $(".bigImg img").attr("src", next);
            });
            $('.galaryPrev').on('click', function(){
              var now = $(".bigImg img").attr("src"),
              prev;
              for(var i = 0; i < allImg.length; i++){
                if (allImg[i].src == now && i == 0) {
                  prev = allImg[allImg.length - 1].src;
                  break;
                }
                if (allImg[i].src == now) {
                  prev = allImg[i - 1].src;
                  break;
                }
              }
              $(".bigImg img").attr("src", prev);
            });
          }
        });
      });
    };
}(jQuery));