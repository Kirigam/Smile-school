require.config({
    paths: {
        'jquery': '../../libs/jquery/jquery-3.2.1.min',
        'jqueryUi': "../../libs/jquery-ui-1.12.1/jquery-ui",
        'tableSmile': 'table.jQuery',
        'myTable': 'myTable'
    }
});

require([
    'jquery',
    'jqueryUi',
    'tableSmile',
    'myTable'
],	function($) {
    $(function () {
        $('.tableSmile').myTable();
    });
});