
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
      
       
    
        

    </script>
    


    <style>
    
    div.templateContainer {
      display: none;
    }

    </style>
  </head>

  <body>

<div class="templateContainer">
  <div class="panel panel-default template">
    <div class="panel-heading" role="tab" id="headingOne">
      <h4 class="panel-title"><input type="checkbox"/>
        <a class="accordion-toggle" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        </a>
      </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body"></div>
    </div>
  </div>
</div>
<br><br>
<div class="container">
  <div class="panel-group" role="tablist" id="accordion">

//   </div>
//  <button type="button" class="btn btn-success">Change JSON</button>
// </div>

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
