 (function ($) {
   /**
    * @param options
    * @returns {*}
    * динамічно додавти класи
    * масив обь'єктів з тим що треба
    * дада-індекс attr(data-index, i++)
    * кнопки рендерити динамічно
    */
    $.fn.smile = function (options) {
      var defaulSettings = $.extend({
         button: true,
      }, options);
      var html,
      imgHtml,
      allImg = [];
      $(this).find('div').addClass("blockImg col-4-12").find('img').addClass("galaryImg");
      this.each(function () {
        var self = this;

        /**
        * add items to the DOM
        */
        return $(this).on('click', function () {
          var bigImg = $('.galaryBackground').css("display", "block");
          $(".bigImg img").attr("src", this.src);

          if (defaulSettings.button == false) {
              $(".galaryBut").css("display", "none");
          }
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
          if (defaulSettings.button == true) {
            $('.galaryBut').on('click', function(){
              console.log("fuck");
              var button = $(this).attr('class').split(' '),
              now = $(".bigImg img").attr("src"),
              next,
              prev;
              for(var i = 0; i < allImg.length; i++){
                if (i == allImg.length - 1) {
                  next = allImg[0].src;
                  prev = allImg[i - 1].src;
                  break;
                }
                if (allImg[i].src == now && i == 0) {
                  prev = allImg[allImg.length - 1].src;
                  next = allImg[i + 1].src;
                  break;
                }
                if (allImg[i].src == now) {
                  next = allImg[i + 1].src;
                  prev = allImg[i - 1].src;
                  break;
                }
              }
              if (button[1] == "galaryNext") {
                $(".bigImg img").attr("src", next);
                console.log(next);
              }
              else{
                $(".bigImg img").attr("src", prev);
              }
            });
          }
        });
      });
    };
}(jQuery));