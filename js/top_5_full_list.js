
var submitButton = document.getElementsByClassName("submit-choices")[0];
var list = document.getElementsByClassName("solutions-list")[0];
var listText = document.getElementsByClassName("solutions-list-text")[0];
var answerArr = [];
var choiceArr = [];

$(list).hide();
$(listText).hide();

// get top 5 solutions from html
$(".top40").each(function() {
    answerArr.push($(this).text());
});


// get all checked items, scroll down after 5 are selected
$('input[type=checkbox]').change(function(){
    if($(this).is(':checked')) {
      var checked = ($(this).val());
      choiceArr.push(checked);
    } 
    var max = 5;
    if( $("input[type=checkbox]:checked").length == max ){
      $("input[type=checkbox]").attr('disabled', 'disabled');
      $("input[type=checkbox]:checked").removeAttr('disabled');
      $('html, body').animate({
            scrollTop: $(".submit-choices").offset().top
        }, 700);
    } else {
      $("input[type=checkbox]").removeAttr('disabled');
    }
});

// submit button identifies choices in the list, hides form and then shows solutions list
submitButton.onclick = function() {
    if (choiceArr.length){
     for (var i = 0; i < 5; i++) {
       isInArray(choiceArr[i], answerArr);
      }
    }
  
		$(listText).fadeIn(1000);
    $(list).fadeIn(1000);
  
    document.getElementById("solutions-form").reset();
    $('html, body').animate({
                scrollTop: $(".parent-course").offset().top
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



