 (function ($) {
    function hexToRGB(hex, alpha) {
      var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    }
   /**
    * @param options
    * @returns {*}
    */
    $.fn.smile = function (options) {
      var defaulSettings = $.extend({
         button: true,
         background: "000000",
         alpha: 0.8,
         autoplay: {
          bool: false,
          interval: 3000 
         }
      }, options);
      var html,
      allImg = [],
      imgArray = $(this).find('img'),
      i = 0,
      backColor = hexToRGB(defaulSettings.background, defaulSettings.alpha);
      $(this).find('div').addClass("blockImg").find('img').addClass("galaryImg");
      html = $.parseHTML("<div class=\"galaryBackground\">\n <div class=\"bigImgBlock\">\n <div class=\"bigImg\">\n <img class=\"imgNow\" src=\"\">\n </div>\n </div>\n </div>\n");
      $("body").append(html);
      if (defaulSettings.button == true) {
        $(".galaryBackground").append($.parseHTML("<div class=\"galaryBut galaryPrev\"><div class=\"fa fa-caret-down fa-5x triangle\"></div></div>"));
        $(".galaryBackground").append($.parseHTML("<div class=\"galaryBut galaryNext\"><div class=\"fa fa-caret-down fa-5x triangle\"></div></div>"));
      }
      $(".galaryBackground").css("background-color", backColor);
      console.log($(".galaryBackground").css("background-color"));
      imgArray.each(function () {
        var self = this;
        $(this).attr("data-index", i);
        allImg.push({
          index: i++,
          src: $(self).attr("src")
        });
        /**
        * add items to the DOM
        */
        return $(self).on('click', function () {
          var bigImg = $('.galaryBackground').css("display", "block");
          $(".bigImg img").attr("src", this.src);
          /**
          * close galary
          */
          $(window).on('keydown', function(e) {
            if (e.keyCode == 27) {
              $(".galaryBackground").css("display", "none");
            }
          });
          $(document).mouseup(function (e) {
            var img = $(".bigImgBlock");
            var button = $(".galaryBut");
            if (img.has(e.target).length === 0 && button.has(e.target).length === 0){
              $(".galaryBackground").css("display", "none");
            }
          });



          /**
          * button next img and prev img
          */
          function nextPrev(where, auto){
            if (auto == false) {
              clearInterval(autoplay);
            }
            var nowSrc = $(".bigImg img").attr("src").split('/'),
            nowSrc = nowSrc[nowSrc.length - 2] + "/" + nowSrc[nowSrc.length - 1];
            $(allImg).each(function(){
              if (this.src == nowSrc) {
                nowIndex = this.index;
              }
            });
            next = allImg[nowIndex + 1],
            prev = allImg[nowIndex - 1];
            if(where == "next") {
              if(nowIndex == allImg.length - 1) {
                next = allImg[0]
              }
              $(".bigImg img").attr("src", next.src);
            }
            else{
              if(nowIndex == 0) {
                prev = allImg[allImg.length - 1];
              }
              $(".bigImg img").attr("src", prev.src);
            }
          }
          if (defaulSettings.autoplay.bool == true) {
            var autoplay = setInterval(function(){
              nextPrev("next", true);
            }, defaulSettings.autoplay.interval);
          }
          $('.galaryBut').on('click', function(){
            var button = $(this).attr('class').split(' ')[1];
            if (button == "galaryNext") {
              nextPrev("next", false);
            }
            else{
              nextPrev("prev", false);
            }
          });
          $('.bigImg').on('click', function(){
            nextPrev("next", false);
          });
        });
      });
    };
}(jQuery));