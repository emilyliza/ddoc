
var data = [
{ sector: "Land Use",
  solution: "solution1",
  description: "solution description"
},
{ sector: "Land Use",
  solution: "solution2",
  description: "solution description"
},
{ sector: "Women and Girls",
  solution: "solution2",
  description: "solution description"
},
{ sector: "Women and Girls",
  solution: "solution2",
  description: "solution description"
},
{ sector: "Food",
  solution: "solution2",
  description: "solution description"
}
];
var cat = {}
data.forEach(function(item) {
    if(!(item.sector in cat))
        cat[item.sector] = [item]
    else
        cat[item.sector].push(item)
})
console.log(cat)
var html = $.map(cat, function(body, category) {
    return "<h3>" + category + "</h3>" +
        "<div>" + $.map(body, function(item, i) {
            console.log(i, item)
            return "<h5>" + item[i].solution + "</h5>" +
                "<div>" + item[i].description + "</div>"
        }).join("") + "</div>"
}).join("")
$(function(){
$("#userAlertsWrapper").append(html)

$("#userAlertsWrapper").children("div").children("div").accordion()
$("#userAlertsWrapper").children("div").accordion()

$("#userAlertsWrapper").accordion()

});

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
