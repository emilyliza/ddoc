
var data = [
{ sector: "Land Use",
  solution: "solution1",
  description: "solution description hggfghf"
},
{ sector: "Land Use",
  solution: "solution2",
  description: "solution description oiujkjnjknj"
},
{ sector: "Women and Girls",
  solution: "solution1",
  description: "solution description yuyuyuyy"
},
{ sector: "Women and Girls",
  solution: "solution2",
  description: "solution description dgdfgcfgf"
},
{ sector: "Food",
  solution: "solution1",
  description: "solution description gjgyhjbjh"
}
];
var cat = {}
data.forEach(function(item) {
    if(!(item.sector in cat))
        cat[item.sector] = [item]
    else
        cat[item.sector].push(item)
})

var count = 0;
var html = $.map(cat, function(body, category) {
    count += 1;
    return '<div class="bs-example" data-example-id="collapse-accordion">
            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default"><div class="panel-heading" role="tab" id="heading-' + count + '"><h4 class="panel-title"><a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">'
    + category + '</a></h4></div>
        <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne" aria-expanded="false">
                        <div class="panel-body">
                            <div class="panel-group" id="accordion1" role="tablist" aria-multiselectable="true">
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingOne1">
                                        <h4 class="panel-title">
                                            <a role="button" data-toggle="collapse" data-parent="#accordion1" href="#collapseOne1" aria-expanded="false" aria-controls="collapseOne1" class="collapsed"> ' + $.map(body, function(item, i) {
            return item.solution + "</a>
                                        </h4>
                                    </div>" +
                '<div id="collapse-' + count +'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne1" aria-expanded="false">
                                        <div class="panel-body"> ' + item.description + '</div></div></div></div></div></div>'
        }).join("") + "</div>"
}).join("")

$(function(){
$("#userAlertsWrapper").append(html)

// $("#userAlertsWrapper").children("div").children("div").accordion()
// $("#userAlertsWrapper").children("div").accordion()

// $("#userAlertsWrapper").accordion()

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
