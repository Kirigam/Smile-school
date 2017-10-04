$(document).ready(function(){


$.widget('smile.smileDialog',
    $.ui.dialog, {
        close: function () {
            alert('You sure, you want to close this window?');
            return this._super();
        },
        background: function () {
            this.element.css({'background-color' : 'lightgrey', 'color' : 'white'})
        },
        closeOnEscape: true,
        image: function () {
            this.element.append('<img src="images/nature.jpg">').find('img').css('width', '100%')
        }

    });
$('.smallBtn').button({
    classes: {
        "ui-button": "highlight"
    }
})
    .on('click', function () {
        document.getElementById('push').play();
        var modal = $('.content_modal').smileDialog({
            buttons: {
                "Change color": function () {
                    modal.smileDialog("background");
                },
                "Add image": function () {
                    modal.smileDialog('image');
                }
            },
            width: 500,
            title: "some title"
        });
    })
})