// Code goes here
 
 $('.panel-collapse').on('shown.bs.collapse', function(e) {
    e.preventDefault();  
    e.stopPropagation();

      var $panel = $(this).closest('.panel');
      $('html,body').animate({
        scrollTop: $panel.offset().top
      }, 500);
});
$(".panel-group").sortable({
    handle: ".panel-heading"
});    

 var json = {
        solutions: [
            {
              name:'Women and Girls', childs: [
                {name:'women shareholders', description: " testing1yyyy", childs:null},
                {name:'educating girls', description: " testing2", childs:null}
              ]
            },
            {
              name:'Food Waste', childs: [
                {name:'composting', description: " testing3", childs:null},
                {name:'pickles', description: " testing4", childs:null}
              ]
            },
            {
              name:'Energy', childs: [
              	{name:'electricity', description: " testing5", childs:null},
                {name:'solar roofs', description: " testing6", childs:null}
              ]
            },
            {
              name:'Transport', childs: [
                {name:'cars', description: "testing7", childs:null},
                {name:'bikes', description: "testing8", childs:null}
              ]
            },
            {
              name:'Buildings and Cities', childs: [
                {name:'green roofs', description: "testing9", childs:null},
                {name:'walkable cities', description: "testing10", childs:null}
              ]
            },
            {
              name:'Materials', childs: [
                {name:'smart glass', description: "testing11", childs:null},
                {name:'bike infrastructure', description: "testing12", childs:null}
              ]
            },
            {
              name:'Energy', childs: [
                {name:'solar farms', description: "testing13", childs:null},
                {name:'microgrids', description: "testing14", childs:null}
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
	draw : function(name, childs, panel, description) {

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
	
		if (childs !== null){
		 this.drawChildNodesArray(childs, $newPanel, numId);
	  }

		if (panel === undefined) {
			$("#" + this.params.parentId).append($newPanel.show());
		} else {
			$(panel).find(".panel-body:first").append($newPanel);
			$($newPanel).find(".panel-body").append("<p>"+description+"</p>");
		}
	},
	
	drawHeader : function(name,  $newPanel, numId, dataParentId) {
		$newPanel.find(".collapse").removeClass("in");
		$newPanel.find(".accordion-toggle").attr("href", "#collapse" + numId).text(name).attr(	"data-parent", dataParentId).attr("id", "link-"+numId);
		$newPanel.find(".panel-collapse").attr("id", "collapse" + numId).addClass("collapse").removeClass("in");
		// $newPanel.find(".panel-heading").attr("id", "headingOne" + numId);
	},
	
	
	drawChildNodesArray : function(childs, $newPanel, numId) {
		var _this = this;
		$.each(childs, function(i, val) { 
			 _this.draw(val.name, val.childs, $newPanel, val.description);
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