define([
    'jquery',
    'jqueryUi'
], function ($) {
    $.widget('smile.myTable', $.smile.tableSmile, {
        _refresh: function () {
            var element = this.element,
                self = this;

            if (this.columnName.length !== 0) {
                $.each(this.columnName, function (key, row) {
                    var tableTR = $('<tr>');

                    $.each(row, function (key, value) {
                        var tableTD = '';

                        if ($.inArray(key, self.allowedColumn) >= 0) {
                            tableTD = $('<td>').append(value);
                            tableTR.append(tableTD);
                        }
                    });

                    tableTR.data('id', self.columnName[key].id);
                    element.find('tbody').append(tableTR);
                });
            }
            this._on($(".tableButton"), {
                click: "onClick"
            });
        },

        onLoadAfter: function () {
            this._super();

            $(this.columnName).each(function () {
                this["button"] = $.parseHTML(
                    "<a href='#' class='tableButton  view'>view</a> " +
                    "<a href='#' class='tableButton delete'>delete</a>");
            });
        },

        _init: function () {
            this._super();

            this.allowedColumn.push("button");
        },

        onClick: function (element) {
            if ($(element.target).hasClass('delete')) {
                if ($('#dialog').dialog("open")) {
                    $('#dialog').dialog("close");
                }
                $(element.target).parents('tr').remove();
            }
            else {
                $('#dialog').children().not('#map').remove();

                var col = this.columnName;

                for (var i = 0; i < col.length; i++) {
                    if ($(element.target).parents('tr').data('id') === col[i].id) {
                        this.callToUser(++i);
                    }
                }
            }
        },

        createDialog: function (userObject) {
            var html = "<ul>\n",
                self = this;

            $.each(userObject, function (key, value) {
                if (value.lat) {
                    self.initMap(value);
                }
                else {
                    html += (typeof(value) === "object") ?
                        "<li>" + key + ": " + self.createDialog(value) + "</li>\n" :
                        "<li>" + key + ": " + value + "</li>\n";
                }
            });

            html += "</ul>";

            return html;
        },

        initMap: function (geo) {
            var uluru = {
                    lat: window.parseFloat(geo.lat),
                    lng: window.parseFloat(geo.lng)
                },
                map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 1,
                    center: uluru
                }),
                marker = new google.maps.Marker({
                    position: uluru,
                    map: map
                });
        },

        callToUser: function (id) {
            var self = this;

            $.ajax({
                url: self.ajaxRequest.init + '/' + id,
                method: 'GET',
                success: function (data) {
                    $('#dialog').append(self.createDialog(data));
                    $('#dialog').dialog();
                }
            });
        }
    });
});
