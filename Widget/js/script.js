$(document).ready(function () {
    $('#accordion').accordion({
       onClickBefore: function () {
           var click = parseInt($(this).attr("clicked"));
           if( click === 1 ) {
              $(this).next().show("fast");
           } else {
              $('#accordion').children("div").each(function (){
                   $(this).hide("fast");
                  $('#accordion').children("h3").attr("clicked" , "0");
               });
           }
       },
      onClickAfter: function () {
         $(this).next().show("fast");
          $(this).attr("clicked" , "1");
      }
   });

/*   Game init*/

   $("body").gameBtn().find(".play").on("click", function () {
        $("body").gameBtn("onClick")
   })
});
