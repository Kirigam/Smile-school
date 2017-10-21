require([
    "jquery",
    "jqueryUI",
    "smileTable",
    "updateTable",
    "tooltip"
], function($) {
    $(function () {
        $(".tableSmile").updateTable().myTooltip()
    });
});
