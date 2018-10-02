// Code goes here
 
 var json = {
        solutions: [
            {
              name:'Women and Girls ', childs: [
                {name:'women shareholders', description: " testing", childs:null},
                {name:'educating girls', description: " testing", childs:null}
              ]
            },
            {
              name:'Food Waste', childs: [
                {name:'composting', description: " testing",childs:null},
                {name:'pickles', description: " testing",childs:null}
              ]
            },
            {
              name:'Energy ', childs: [
                {name:'electricity', description: " testing", childs:null},
                {name:'solar roofs', description: " testing", childs:null}
              ]
            },
            {
                name:'Transport ', childs: [
                {name:'cars', description: "testing", childs:null},
                {name:'bikes', description: "testing", childs:null}
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

		console.log("here's the panel", name);
		//set new id
		var numId = Global.getNextNumCollapseElement();
		var template = $(this.params.templateSelector);
		var $newPanel = template.clone();
		var dataParentId = this.params.parentId;
	
		if (panel !== undefined) {
			dataParentId = $(panel).find(".panel-collapse").attr("id");
			console.log("data parent id for defined panels", dataParentId);
		}
		
		$($newPanel).attr("id", "panel" + numId);	
		this.drawHeader(name, $newPanel, numId, dataParentId);
	
		if (childs !== null){
		 console.log("childs", childs);
		 this.drawChildNodesArray(childs, $newPanel, numId);
	  }

		if (panel === undefined) {
			$("#" + this.params.parentId).append($newPanel.show());
		} else {
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
			// $newPanel.find(".panel-body").append("<ul class='list-group'><li class='list-group-item'>" + val.name + val.description + "</li></ul>");
			 _this.draw(val.name, val.childs, $newPanel);
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