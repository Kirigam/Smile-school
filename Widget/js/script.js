$(document).ready(function () {
   $('.testWidget').test({
      onClickAfter: function () {
         console.log('Event After');
      },
      onClickBefore: function () {
         $(this).text($(this).text()+"asd");
      }
   });

   $('.testWidget4').test4({
      onClickAfter: function () {
         $(this).css('color', '#CCC');
      }
   });

   $('.random').on('click', function () {
      $('.testWidget').test("option", "color", "random");
   })
});
