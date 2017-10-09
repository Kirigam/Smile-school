$(document).ready( function () {
    $('.accordion li').children("h3").smAcc({
        onCl: function () {
            $('.accordion div').hide();
            $('.accordion div').not(this).slideUp();
            $(this).next().not(':visible').slideDown();
        }
        });
    $('.fa-times').click(function () {
        $(this).parents('li').remove();
    });
});