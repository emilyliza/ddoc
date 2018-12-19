
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
      choiceArr.push(checked);
    } 
    if (choiceArr.length === 5){
    $('html, body').animate({
            scrollTop: $(".submitChoices").offset().top
        }, 700);
   }
});


// submit button populates choices array, shows choice/answer containers, and hides form
submitButton.onclick = function() {
    var count = 1;
    $(".choices").empty();
    if (choiceArr.length){
     for (var i = 0; i < 5; i++) {
    	 $(".choices").append("<div>" + count + ". " + "<span>" + choiceArr[i] + "</span></div>");
       isInArray(choiceArr[i], answerArr);
    	 count = count + 1;
      }
    } else {
    	$(".choices").append("<div>Oops! It looks like you didn't choose any solutions.</div>");
    }
  
		$(choices).fadeIn(1000);
  
    setTimeout(function(){ $(answers).fadeIn(2000); }, 1000);

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



