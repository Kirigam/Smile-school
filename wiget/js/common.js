$(document).ready( function () {
    $('.accordion div').hide().prev().click(function () {
        $('.accordion div').not(this).slideUp();
        $(this).next().not(':visible').slideDown();
    });
    $('.fa-times').click(function () {
            $(this).parents('li').remove();
    });
});