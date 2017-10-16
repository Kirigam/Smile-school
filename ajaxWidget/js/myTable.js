$.widget('smile.myTable', $.smile.tableSmile , {
    _refresh: function () {
        var element = this.element;
        var self = this;
        if (this.columnName.length != 0) {
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
            click: "onClick",
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
    _init: function(){
        this._super();
        this.allowedColumn.push("button");
    },
    onClick: function (element) {
        if($(element.target).hasClass('delete')) {
            if($.dialog) $('#dialog').dialog("close");
            $(element.target).parents('tr').remove();
        }
        else {
            $('#dialog').children().not('#map').remove();
            var col = this.columnName;
            for(var i = 0; i < col.length; i++) {
                if($(element.target).parents('tr').data('id') === col[i].id) {
                    this.createDialog(col[i]);
                }
            }
            $('#dialog').dialog();
        }
    },
    createDialog: function(userObject){
        var html = '';
        var self = this;

        $.each(userObject, function(key, value){
            if((key != 'id') && (key != 'button')) {
                var ul = "<ul>\n";

                if(typeof(value)  == "object") {
                    $.each(value, function (key, value) {
                        if(typeof(value)  == "object") {
                            self.initMap(value);
                        }
                        ul += "<li>" + key + ": " + value + "</li>\n";
                    });

                    ul += "</ul>\n";
                    html += "<p>" + key + ": " + ul + "</p>\n";
                }
                else {
                    html += "<p>" + key + ": " + value + "</p>\n";
                }
            }
        });

        $('#dialog').append(html);
    },
    initMap: function (geo) {
        var uluru = {
            lat: window.parseFloat(geo.lat),
            lng: window.parseFloat(geo.lng)
        };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 1,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }
});