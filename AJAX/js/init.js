require([
    "jquery",
    "jqueryUI",
    "smileTable",
    "updateTable",
    "tooltip"
], function($) {
    $(function () {
        $(".tableSmile").updateTable().myTooltip({
            items: "[title], [data-html]",

            contentData: {},

            content: function () {
                var element = $(this);
                var self = this;

                if (element.is("[data-html]")) {
                    var userID = $(".view").hover().parent().attr("userid");
                    var link = "https://jsonplaceholder.typicode.com/users" + "/" + userID;
                    $.ajax({
                        url: link,
                        method: 'GET',
                        cache: false,
                        success: function (data) {
                            self.contentData = data;
                            console.log(self.contentData)
                        }
                    });
                }
            }
        })
    });
});
