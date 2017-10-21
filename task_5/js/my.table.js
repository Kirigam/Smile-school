define([
		"jquery", 
		"uiJquery"
	],
	function($) {
	$.widget('smile.newTableSmile', $.smile.tableSmile, {
		allUsers: [],
		url: '',
		id: '',
		_create: function() {
			$("body").append($.parseHTML("<div id='dialog' title='Information from user'></div>"));
	     	return this._super();
	  	},
		onClick: function(element){
			var button = element.target;
			var parent = $(button).parent().parent();
			if($(button).attr("class").split(' ')[1] == "view"){
				this.id = $(parent).attr("id");
				this.userAjax();
				$("#dialog").dialog({ position: 'top' });
			}
			else{
				$(parent).remove();
			}
		},
		
		setingDialog: function(userObject){
			var html = "<ul>\n",
			self = this;
			$.each(userObject, function(key, value){
				if (typeof value == "object") {
					html += "<li>" + key + ": " + self.setingDialog(value) + "</li>\n";;
				}
				else{
					html += "<li>" + key + ": " + value + "</li>\n";
				}
			});
			html += "</ul>";
			return html;
		},

		userAjax: function(){
			var self = this;
	        if (self.ajaxRequest.init.length) {
	            $.ajax({
	                url: self.ajaxRequest.init + "/" + self.id,
	                method: 'GET',
	                cache: true,
	                success: function (data) {
	                	if (typeof(data) == 'object') {
							$("#dialog").empty();
							$("#dialog").append($.parseHTML(self.setingDialog(data)));             	    
	                	}
	                }
	            });
	        }
		},
		_refresh: function(){
			console.log("fuck");
			this._createRow();
			this._createCol();
			this._on($(".tableButton"), {
	            click: "onClick",
	        });

		},
		_createRow: function(){
			var element = this.element;
	     	var self = this;
	     	if (this.columnName.length != 0) {
	        	$.each(this.columnName, function(key, row) {
	           		var tableTR = $('<tr>').attr("id", row.id);
	            	element.find('tbody').append(self._createCol(self, row, tableTR));
	        	});
	     	}
		},
		_createCol: function(self, row, tableTR){
			$.each(row, function(key, value){
	      		var tableTD = '';
	      		if ($.inArray(key, self.allowedColumn) >= 0) {
	         		tableTD = $('<td>').append(value);
	         		tableTR.append(tableTD);
	      		}
	   		});
	   		return tableTR;
		},
		onLoadAfter: function () {
	     	this._super();
	     	$(this.columnName).each(function(){
	     		this["button"] = $.parseHTML(
	     			"<a href='#' class='tableButton delete'>delete</a> "+
	     			"| <a href='#' class='tableButton view'>view</a>");
	     	});
	  	},
	  	_init: function(){
	  		this._super();
	  		this.allowedColumn.push("button");
	  	}

	});
});
