// Code goes here
 
 var json = {
        solutions: [
            {
              name:'Women and Girls ', childs: [
                {name:'women shareholders', description: " testing"},
                {name:'educating girls', description: " testing"}
              ]
            },
            {
              name:'Food Waste', childs: [
                {name:'composting', description: " testing"},
                {name:'pickles', description: " testing"}
              ]
            },
            {
              name:'Energy ', childs: [
                {name:'electricity', description: " testing"},
                {name:'solar roofs', description: " testing"}
              ]
            },
            {
                name:'Transport ', childs: [
                {name:'cars', description: "testing"},
                {name:'bikes', description: "testing"}
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
		$.each(json.solutions, function(i, val) {
			_this.draw(val.name, val.childs, undefined);
		});
	},

  //create panel
	draw : function(name, childs, panel) {
		//set new id
		var numId = Global.getNextNumCollapseElement();
		var template = $(this.params.templateSelector);
		var $newPanel = template.clone();
		var dataParentId = this.params.parentId;
	
		if (panel !== undefined) {
			dataParentId = $(panel).find(".panel-collapse").attr("id");
		}
		
		$($newPanel).attr("id", "panel" + numId);	
		 this.drawHeader(name, $newPanel, numId, dataParentId);
	
		if (childs !== undefined){
		 this.drawChildNodesArray(childs, $newPanel, numId);
	  }

		if (panel === undefined) {
			console.log("params", this.params);
			$("#" + this.params.parentId).append($newPanel.show());
		} else {
			// $("#" + this.params.parentId).append($newPanel.show());
			$(panel).find(".panel-body").append($newPanel);
		}
	},
	
	drawHeader : function(name,  $newPanel, numId, dataParentId) {
		$newPanel.find(".collapse").removeClass("in");
		$newPanel.find(".accordion-toggle")	.attr("href", "#collapse" + numId).text(name).attr(	"data-parent", dataParentId).attr("id", "link-"+numId);
		$newPanel.find(".panel-collapse").attr("id", dataParentId).addClass("collapse").removeClass("in");
	},
	
	
	drawChildNodesArray : function(childs, $newPanel, numId) {
		var _this = this;
		$.each(childs, function(i, val) { 
			console.log("new panel in child function", $newPanel)
			// $newPanel.find(".panel-body").append("<ul class='list-group'><li class='list-group-item'>" + val.name + val.description + "</li></ul>");
			 _this.draw(val.name, undefined, $newPanel);
		});

	}
	// drawChilds : function(name, panel, description) {
		
	// 	var numId = Global.getNextNumCollapseElement();
	// 	var template = $(this.params.templateSelector);
	// 	var $newPanel = template.clone();
	// 	var dataParentId = this.params.parentId;
	// 	if (panel !== undefined) {
	// 		dataParentId = $(panel).find(".panel-collapse").attr("id");
	// 	}
		
	// 	$($newPanel).attr("id", "panel" + numId);
	
	// 	this.drawHeader(name,  $newPanel, numId, dataParentId);
		
	// 	var id = $newPanel[0].id;

	// 	if (panel === undefined) {
	// 		$("#" + this.params.parentId).append($newPanel.show());
	// 	} else {
	// 		$(panel).find(".panel-body").attr("id", "collapse" + numId).append($newPanel);
	// 	}
	// }
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