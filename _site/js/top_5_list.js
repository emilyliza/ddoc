
var top40 = [
{ rank: "1" , solution: "Refrigerant Management" },
{ rank: "2" , solution: "Wind Turbines (Onshore)" },
{ rank: "3" , solution: "Reduced Food Waste" },
{ rank: "4" , solution: "Plant-Rich Diet" },
{ rank: "5" , solution: "Tropical Forests" },
{ rank: "6" , solution: "Educating Girls" },
{ rank: "7" , solution: "Family Planning" },
{ rank: "8" , solution: "Solar Farms" },
{ rank: "9" , solution: "Silvopasture" },
{ rank: "10" , solution: "Rooftop Solar" },
{ rank: "11" , solution: "Regenerative Agriculture" },
{ rank: "12" , solution: "Temperate Forests" },
{ rank: "13" , solution: "Peatlands" },
{ rank: "14" , solution: "Tropical Staple Trees" },
{ rank: "15" , solution: "Afforestation" },
{ rank: "16" , solution: "Conservation Agriculture" },
{ rank: "17" , solution: "Tree Intercropping  " },
{ rank: "18" , solution: "Geothermal" },
{ rank: "19" , solution: "Managed Grazing" },
{ rank: "20" , solution: "Nuclear" },
{ rank: "21" , solution: "Clean Cookstoves" },
{ rank: "22" , solution: "Wind Turbines (Offshore)" },
{ rank: "23" , solution: "Farmland Restoration" },
{ rank: "24" , solution: "Improved Rice Cultivation" },
{ rank: "25" , solution: "Concentrated Solar" },
{ rank: "26" , solution: "Electric Vehicles" },
{ rank: "27" , solution: "District Heating" },
{ rank: "28" , solution: "Multistrata Agroforestry" },
{ rank: "29" , solution: "Wave and Tidal" },
{ rank: "30" , solution: "Methane Digesters (Large)" },
{ rank: "31" , solution: "Insulation" },
{ rank: "32" , solution: "Ships" },
{ rank: "33" , solution: "LED Lighting (Household)" },
{ rank: "34" , solution: "Biomass" },
{ rank: "35" , solution: "Bamboo" },
{ rank: "36" , solution: "Alternative Cement" },
{ rank: "37" , solution: "Mass Transit" },
{ rank: "38" , solution: "Forest Protection" },
{ rank: "39" , solution: "Indigenous Peoples’ Land Management" },
{ rank: "40" , solution: "Trucks" },
];

var submitButton = document.getElementsByClassName("submitChoices")[0];
var answers = document.getElementsByClassName("contAnswers")[0];
var choices = document.getElementsByClassName("contChoices")[0];
var answerArr = [];
var choiceArr = [];

// get top 5 solutions from html
$(".answer").each(function() {
    answerArr.push($(this).text());
});

//hide choices and answers when page loads
$(answers).hide();
$(choices).hide();

// get all checked items, scroll down after 5 are selected
$('input[type=checkbox]').change(function(){
    if($(this).is(':checked')) {
      var checked = ($(this).val());
      getRank(checked, top40);
      console.log(choiceArr);
    } 

    var max = 5;
    if( $("input[type=checkbox]:checked").length == max ){
      $("input[type=checkbox]").attr('disabled', 'disabled');
      $("input[type=checkbox]:checked").removeAttr('disabled');
      $('html, body').animate({
            scrollTop: $(".submitChoices").offset().top
        }, 700);
    } else {
      $("input[type=checkbox]").removeAttr('disabled');
    }
});


function getRank(choice, arr){
    for (var i=0; i < arr.length; i++) {
        if (arr[i].solution === choice) {
          choiceArr.push({solution: arr[i].solution, rank: arr[i].rank});
        }
    }
 }   
// submit button populates choices array, shows choice/answer containers, and hides form
submitButton.onclick = function() {
    $(".choices").empty();
    if (choiceArr.length){
     choiceArr.sort(function(a, b) {
       return a.rank - b.rank;
     }); 
     console.log(choiceArr);
     for (var i = 0; i < 5; i++) {
       $(".choices").append("<div>"+"<span>" + choiceArr[i].solution +" (#"+ choiceArr[i].rank + ")</span></div>");
       isInArray(choiceArr[i].solution, answerArr);
      }
    } else {
    	$(".choices").append("<div>Oops! It looks like you didn't choose any solutions.</div>");
    }
  

		$(answers).fadeIn(1000);
  
    setTimeout(function(){ $(choices).fadeIn(2000); }, 1000);

    document.getElementById("solutionsForm").reset();
    $('html, body').animate({
                scrollTop: $(".cover").offset().top
            }, 700);
    $('.form-container').hide();

}

// check for matches, turn matches text orange
function isInArray(value, array) {
  if (array.indexOf(value) > -1){
    $( "span:contains('" + value + "')").addClass("orange");

  }
  return array.indexOf(value) > -1;
}

//called when user submits form
function choices() {
  $("input").each(function() {
    if ($(this).is(':checked')) {
      var checked = ($(this).val());
      choiceArr.push(checked);
    }
  });
  return choiceArr;
}



