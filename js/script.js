// Code goes here
 
 var json = {
        residus: [
            {
              name:'Women and Girls ', id: 4, childs: [
                {name:'element 1.1', description: " testing", childs: null},
                {name:'why', description: " testing", childs: null}
              ]
            },
            {
              name:'Food Waste', id: 5, childs: [
                {name:'element 1.1', description: " testing", childs: null},
                {name:'reduced food waste', description: " testing", childs:null}
              ]
            },
            {
              name:'Energy ', id: 6, childs: [
                {name:'element 1.1', description: " testing", childs: null},
                {name:'reduced food waste', description: " testing", childs:null}
              ]
            },
            {
                name:'Transport ',id: 7, childs: [
                {name:'element 1.1', description: "testing", childs: null},
                {name:'reduced food waste', description: "testing", childs:null}
              ]
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
			_this.draw(val.name, val.childs, undefined, val.description, val.id);
		});
	},

  //create panel
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
		// this.drawChildNodes(childs,  $newPanel, numId, description);
		this.drawChildNodesArray(childs,  $newPanel, numId, description, dataParentId);
		
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
	
	// drawChildNodes : function(childs,  $newPanel, numId, description) {
	// 	if(childs!==undefined && childs!==null)	{
	// 		this.draw(val.name, val.childs, $newPanel, val.description);
	// 		// this.drawChildNodesArray(childs, $newPanel, numId);
	// 	}	
	// },
	// /create panel
	drawChilds : function(name, panel, description) {
		var numId = Global.getNextNumCollapseElement();
		var template = $(this.params.templateSelector);
		var $newPanel = template.clone();
		var dataParentId = this.params.parentId;
		if (panel !== undefined) {
			dataParentId = $(panel).find(".panel-collapse").attr("id");
		}
		
		$($newPanel).attr("id", "panel" + numId);
	
		this.drawHeader(name,  $newPanel, numId, dataParentId);
		// this.drawChildNodes(childs,  $newPanel, numId, description);
		// this.drawChildNodesArray(childs,  $newPanel, numId, description, dataParentId);
		
		if (panel === undefined) {
			$("#" + this.params.parentId).append($newPanel.show());
		} else {
			$(panel).find(".panel-body").append($newPanel);
		}
	},
	
	drawChildNodesArray : function(childs,  $newPanel, numId, description) {
		var _this = this;
		$.each(childs, function(i, val) {
			// if (val.childs !== null) {
				_this.draw(val.name, $newPanel, val.description );
			// } else {
			// 	$newPanel.find(".panel-body").append( val.name, val.description );
			// }
		});

	}
};

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

};