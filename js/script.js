// Code goes here
 
 var json = {
        residus: [
            {
              name:'Women and Girls ', childs: [
                {name:'element 1.1', description: "testing", childs: null},
                {name:'why', description: "testing", childs: null}
              ]
            },
            {
              name:'Food Waste', childs: [
                {name:'element 1.1', childs: null},
                {name:'reduced food waste', childs: [
                      {
                          name:'definition of food waste', childs:null
                          
                        }
                      ]}
              ]
            },
            {
              name:'Energy ', childs: [
                {
                  name:'element 2.1', childs:null
                }
              ]
            },
            {
                name:'Transport ',  childs:null
              }
          ]
      };


var CollapseTemplate = {
	params : {
		templateSelector : '.template',
		parentId : 'accordion'
	},

	init : function(_params) {
		this.params = Utils.extend({}, this.params, _params);
	},
	
	
	load : function(json) {
		$("#" + this.params.parentId).empty();
		var _this = this;
		$.each(json.residus, function(i, val) {
			_this.draw(val.name, val.childs, undefined, val.description);
		});
	},

	draw : function(name, childs, panel, description) {
		var numId = Global.getNextNumCollapseElement();
		var template = $(this.params.templateSelector);
		var $newPanel = template.clone();
		var dataParentId = this.params.parentId;
		if (panel !== undefined) {
			dataParentId = $(panel).find(".panel-collapse").attr("id");
		}
		
		$($newPanel).attr("id", "panel" + numId);
		this.drawHeader(name,  $newPanel, numId, dataParentId);
		this.drawChildNodes(childs,  $newPanel, numId, desription);
		
		if (panel === undefined) {
			$("#" + this.params.parentId).append($newPanel.show());
		} else {
			$(panel).find(".panel-body").append($newPanel);
		}
	},
	
	drawHeader : function(name,  $newPanel, numId, dataParentId) {
		$newPanel.find(".collapse").removeClass("in");
		$newPanel.find(".accordion-toggle")	.attr("href", "#collapse" + numId).text(name).attr(	"data-parent", dataParentId).attr("id", "link-"+numId);
		$newPanel.find(".panel-collapse").attr("id", "collapse" + numId).addClass("collapse").removeClass("in");
	},
	
	drawChildNodes : function(childs,  $newPanel, numId, description) {
		if(childs!==undefined && childs!==null)	{
			this.drawChildNodesArray(childs, $newPanel, numId);
		}	
	},
	
	drawChildNodesArray : function(childs,  $newPanel, numId) {
		var _this = this;

		$.each(childs, function(i, val) {
			if (val.childs !== null) {
				_this.draw(val.name, val.childs, $newPanel, val.description);
			// } else if (val.childs === null && val.url !== undefined && val.url !== null) {
			// 	$newPanel.find(".panel-title").append("<input type='checkbox'/>");
			// 	$newPanel.find(".panel-body").append("<ul class='list-group' id='list-group-"+numId+"'><li class='list-group-item'>loading</li></ul>");
			// 	$("#" + _this.params.parentId).on('click', 'a#link-'+numId ,function() {
			// 		var jqxhr = Utils.doAjax({}, val.url);
			// 		jqxhr.done(function(dades) {
			// 			var panel = $("#" + _this.params.parentId).find("#collapse"+numId+" > div.panel-body");
			// 			$(panel).empty();
			// 			$.each(dades.residus, function(i, val) {
			// 				if(val.url===undefined || val.url===null)	{
			// 					$(panel).append("<li class='list-group-item'>"+val.name+"</li>");
			// 				}	else	{
			// 					_this.draw(val.name, null, $("#panel"+numId), val.url);
			// 				}
			// 			});
			// 			$("#" + _this.params.parentId).off('click', 'a#link-'+numId );
			// 		});
			// 	});
				
			} else {
				$newPanel.find(".panel-body").append( val.name, val.description );
			}
		});

	};
	
	// "<ul class='list-group'><li class='list-group-item'>"
	// "</li></ul>"
	
	// drawChildNodesAjax : function(url, $newPanel, numId) {
	// 	var _this = this;
	// 	$newPanel.find(".panel-body").append("<ul class='list-group' id='list-group-"+numId+"'><li class='list-group-item'>loading</li></ul>");
		
	// 	$("#" + _this.params.parentId).on('click', 'a#link-'+numId ,function() {
			
	// 		var jqxhr = Utils.doAjax({}, url);
			
	// 		jqxhr.done(function(dades) {
	// 			var panel = $("#" + _this.params.parentId).find("#collapse"+numId+" > div.panel-body");
	// 			$(panel).empty();
	// 			$.each(dades.residus, function(i, val) {
	// 				if(val.url===undefined || val.url===null)	{
	// 					$(panel).append("<li class='list-group-item'>"+val.name+"</li>");
	// 				}	else	{
	// 					_this.draw(val.name, null, $("#panel"+numId), val.url);
	// 				}
	// 			});
	// 			$("#" + _this.params.parentId).off('click', 'a#link-'+numId );
	// 		});
	// 	});

	// }

// };

Global =	{
	countCollapseElements: 0,
	getNextNumCollapseElement : function() {
		return this.countCollapseElements++;
	}
};

Utils = {
	extend : function(dest) {
		var sources = Array.prototype.slice.call(arguments, 1);
		sources.forEach(function(source) {
			Object.keys(source).forEach(function(key) {
				dest[key] = source[key];
			});
		});
		return dest;
	}

	// doAjax : function(params, _url) {
	// 	return $.ajax({
	// 		url : _url,
	// 		dataType : 'json',
	// 		data : params,
	// 		cache : false,
	// 		error : function(jqXHR, textStatus, errorThrown) {
	// 			alert(textStatus);
	// 		}
	// 	});
	// }
};