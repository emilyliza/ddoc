var all = document.querySelectorAll('.solution-card')

var land = [],
	comingAtt = [],
	transport =[],
	girls =[],
	food =[],
    electricity = [],
    buildings = [],
    materials = [];

for (var i=0, max=all.length; i < max; i++) {
        var title = all[i].getElementsByClassName('solution-title');
		var teaser = all[i].getElementsByClassName('teaser');
		var sector = all[i].getElementsByClassName('sector-link');
    if (sector[0].innerText === "Land Use"){
     land.push({ title: title[0].innerText, teaser: teaser[0].innerText})
    }
    if (sector[0].innerText === "Transport"){
     transport.push({ title: title[0].innerText, teaser: teaser[0].innerText})
    }
    if (sector[0].innerText === "Coming Attractions"){
     comingAtt.push({ title: title[0].innerText, teaser: teaser[0].innerText})
    }
    if (sector[0].innerText === "Food"){
     food.push({ title: title[0].innerText, teaser: teaser[0].innerText})
    }
    if (sector[0].innerText === "Materials"){
     materials.push({ title: title[0].innerText, teaser: teaser[0].innerText})
    }
    if (sector[0].innerText === "Buildings and Cities"){
     buildings.push({ title: title[0].innerText, teaser: teaser[0].innerText})
    }
    if (sector[0].innerText === "Women and Girls"){
     girls.push({ title: title[0].innerText, teaser: teaser[0].innerText})
    }
    if (sector[0].innerText === "Electricity Generation"){
     electricity.push({ title: title[0].innerText, teaser: teaser[0].innerText})
    }
   
  }
 var solutions = [{name: "Land Use", childs: land},{name: "Coming Attractions", childs: comingAtt}, {name: "Women and Girls", childs: girls},{name: "Materials", childs: materials},{name: "Buildings and Cities", childs: buildings},{name: "Food", childs: food},{name: "Transport", childs: transport},{name: "Electricity Generation", childs: electricity}];
console.log(solutions);

$(document).find(".solutions-data").append("<p>"+solutions+"</p>");

