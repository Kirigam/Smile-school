define([
    'jquery',
    'jqueryUI'
],function($) {
    $.widget('smile.updateTable', $.smile.tableSmile, {
        userID: null,
        dialogContent: {},
        userDetailLink: "",

        /**
         * add dialog window to body
         *
         * @returns {*}
         * @private
         */
        _create: function () {
            $("body").append("<div class='dialogWindow'></div>");
            $(".dialogWindow").hide();
            return this._super();
        },
        /**
         * add buttons to dialog
         *
         * @private
         */
        _refresh: function () {
            var self = this;
            var view = "<button class='ajaxBtn view'>view</button>";
            var deleted = "<button class='ajaxBtn delete'>delete</button>";

            self.addDataToColls();

            $("tbody").find("tr").append(view + deleted);
            this._on($(".ajaxBtn"), {
                click: "onClick"
            });
        },

        addDataToColls: function () {

            var element = this.element;
            var self = this;
            if (this.columnName.length != 0) {

                $.each(this.columnName, function(key, row) {
                    var tableTR = $('<tr>');

                        $.each(row, function(key, value){
                            var tableTD = '';
                            if ($.inArray(key, self.allowedColumn) >= 0) {
                                if (typeof(value) == "object") {
                                    tableTD = $('<td>').text(key).attr("data-html", " ")
                                } else {
                                    tableTD = $('<td>').text(value);
                                }
                                tableTR.append(tableTD);
                            }
                        });
                    element.find('tbody').append(tableTR);
                });
            }
        },

        /**
         *add information to dialog
         *
         * @param userData
         * @returns {string}
         */
        dialogSettings: function(userData){
            var html = "<ul>\n",
                self = this;
            $.each(userData, function(key, value){
                if (typeof value == "object") {
                    html += "<li class='generalItem'>" + key + ": " + self.dialogSettings(value) + "</li>\n";
                }
                else{
                    html += "<li class='dialogItem'>" + key + ": " + value + "</li>\n";
                }
            });
            html += "</ul>";
            return html;
        },

        /**
         * click on buttons function
         *
         * @param element
         */
        onClick: function(element){
            var button = element.target;
            var self = this;

            self.userID = $(button).parent().index() + 1;
            self.userDetailLink = self.ajaxRequest.init + "/" + self.userID;

            if ($(button).hasClass("view")) {

                self.showInfAboutUser()
            } else {
                $(button).parent().remove();
            }
        },
        /**
         * request to the server for information about users
         */
        showInfAboutUser: function () {
            var self = this;
            $.ajax({
                url: self.userDetailLink,
                method: 'GET',
                cache: false,
                success: function (data) {
                    self.dialogContent = data;
                        self.dialogAnimation()
                    }
            });
        },
        /**
         * dialog animation settings
         */
        dialogAnimation: function () {
            var self = this;
            var dialog = $(".dialogWindow");

            dialog.empty();
            dialog.dialog({
                show:
                    {
                        effect: "blind", duration: 200
                    },
                width: 700
            }).css(self.options.style.dialog);
            dialog.append($.parseHTML(self.dialogSettings(self.dialogContent)));
        }
    })
});