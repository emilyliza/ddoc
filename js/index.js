
var solutions = [
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

       var json = {
        residus: [
            {
              name:'1 level XXX ', childs: [
                {name:'element 1.1', childs: null},
                {name:'element 1.2 jh', childs: null}
              ]
            },
            {
              name:'1 level  ', childs: [
                {name:'element 1.1', childs: null},
                {name:'element 1.2 jh', childs: [
                      {
                          name:'element 2.1.1', childs:null
                          
                        },
                        {
                          name:'element 2.1.2', childs:null
                          
                        }
                      ]}
              ]
            },
            {
              name:'2 level 1.. ', childs: [
                {
                  name:'element 2.1', url: "json.js"
                }
              ]
            },
            {
                name:'2 level 1.. ',   url: "json1.js" 
              }
          ]
      };
      
       
    var collapseTemplate = Object.create(CollapseTemplate);
    var params = {
        templateSelector: 'div.templateContainer > div.template',
        parentId: 'accordion'
     };
    
    jQuery(document).ready( function() {

      collapseTemplate.init(params);
      collapseTemplate.load(json);
      
      $("button").on("click", function(){
        json.residus[0].name="Xavi Abarca";
        collapseTemplate.load(json);
      });
        
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
