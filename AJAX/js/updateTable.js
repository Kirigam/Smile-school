$.widget('smile.updateTable', $.smile.tableSmile, {
    name: {},
    column: "",
    dialogContent: {},

/*    add dialog window to body*/
    _create: function () {
        $("body").append("<div class='dialogWindow'></div>");
        $(".dialogWindow").hide();
        return this._super();
    },
/*add buttons to dialog*/
    _refresh: function () {
        var view = "<button class='ajaxBtn view'>view</button>";
        var deleted = "<button class='ajaxBtn delete'>delete</button>";
        this._super();
        $("tbody").find("tr").append(view + deleted);
        this._on($(".ajaxBtn"), {
            click: "onClick"
        });
    },

    dialogSettings: function(userData){
        var html = "<ul>\n",
            self = this;
        $.each(userData, function(key, value){
            if (typeof value == "object") {
                html += "<li>" + key + ": " + self.dialogSettings(value) + "</li>\n";
            }
            else{
                html += "<li>" + key + ": " + value + "</li>\n";
            }
        });
        html += "</ul>";
        return html;
    },

    /*initializations to click*/
    onClick: function(element){
        var button = element.target;
        var self = this;

        if ($(button).hasClass("view")) {

            this.column = $($(this.element).find("th")[0]).data("column");
            this.name = $($(button).parent().find("td")[0]).text();

            $.ajax({
                url: self.ajaxRequest.init,
                method: 'GET',
                cache: true,
                success: function (data) {
                    var inf;
                    var dialog = $(".dialogWindow");
                    if (typeof(data) == 'object') {
                        $.each(data, function(key, value){
                            inf = value;
                            $.each(value, function(key, value){
                                if(self.column == key && self.name == value){
                                    self.dialogContent = inf;
                                }
                            })
                        });
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
                }
            });
        } else {
            $(button).parent().remove();
        }
    }
    });