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
      }
   });

    $.widget( "ui.gameBtn", {
        options: {
            elementStyle:{
                "color" : "red",
                "width" : "150px",
                "height" : "50px",
                "left" : "450px"
            }
        },

      _create: function () {
          this._button = $("<button>");
          this._button.toggleClass("play");
          this._button.text("Play game!");
          this._button.css("position", "absolute");
          this._button.width(this.options.elementStyle.width);
          this._button.height(this.options.elementStyle.height);
          this._button.css("background-color", this.options.elementStyle.color);
          this._button.css("left", this.options.elementStyle.left);
          $(this.element).append(this._button);
      },

      onClick: function () {
          var block = $("#accordion").find("div");
          var dialog = confirm("You want to play game?");
          if (dialog === true) {
              block.css({"display" : "none"});
              alert("Please, select any block");
              block.eq(Math.floor( Math.random() * 3 )).append('<img class="win" src="img/win.png">')
                  .prev().toggleClass("win")
          }

            $(".win").one("click", function () {
                setTimeout(function (){
                    var reload = confirm("You win! Do you want reload this page?");
                    if (reload === true) {
                        location.reload(true)
                    } else {
                        $('#accordion').children("div").find("img").remove();
                        $(this).removeClass("win")
                    }
                }, 1000);
            })
      }
    })

}(jQuery));
