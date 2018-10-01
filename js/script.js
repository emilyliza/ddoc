// Code goes here
 
 var json = {
        solutions: [
            {
              name:'Women and Girls ', id: 4, childs: [
                {name:'women shareholders', description: " testing"},
                {name:'educating girls', description: " testing"}
              ]
            },
            {
              name:'Food Waste', id: 5, childs: [
                {name:'composting', description: " testing"},
                {name:'pickles', description: " testing"}
              ]
            },
            {
              name:'Energy ', id: 6, childs: [
                {name:'electricity', description: " testing"},
                {name:'solar roofs', description: " testing"}
              ]
            },
            {
                name:'Transport ',id: 7, childs: [
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
		var numId = Global.getNextNumCollapseElement();
		var template = $(this.params.templateSelector);
		var $newPanel = template.clone();
		var dataParentId = this.params.parentId;
		if (panel !== undefined) {
			dataParentId = $(panel).find(".panel-collapse").attr("id");
		}
		
		$($newPanel).attr("id", "panel" + numId);
	
		this.drawHeader(name,  $newPanel, numId, dataParentId);

		this.drawChildNodesArray(childs, $newPanel, dataParentId);
		
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
	
	
	drawChildNodesArray : function(childs, $newPanel, dataParentId) {
		var _this = this;
		$.each(childs, function(i, val) {
				_this.drawChilds(val.name, $newPanel, val.description, dataParentId);
		});

	},
	drawChilds : function(name, panel, description, dataParentId) {
		var numId = Global.getNextNumCollapseElement();
		var template = $(this.params.templateSelector);
		var $newPanel = template.clone();
		var dataParentId = dataParentId;
		if (panel !== undefined) {
			console.log("a panel is not undefined!" + name);
			dataParentId = $(panel).find(".panel-collapse").attr("id");
		}
		
		$($newPanel).attr("id", "panel" + numId);
	
		this.drawHeader(name,  $newPanel, numId, dataParentId);
		
		// if (panel === undefined) {
		// 	console.log("oh my, panel is undefined!", name);
		// 	$("#" + this.params.parentId).append($newPanel.show());
		// } else {
		// 	$(panel).find(".panel-body").append($newPanel);
		// }
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