
var modal = document.getElementById('myModal');
var closeModal = document.getElementsByClassName("close")[0];
var answers = document.getElementsByClassName("container2")[0];
var choices = document.getElementsByClassName("container1")[0];
var answerArr = [];

$(".answer").each(function() {
    answerArr.push($(this).text());
});

var arr = [];
var matches = [];

$(answers).hide();
$(choices).hide();
$(closeModal).hide();

closeModal.onclick = function() {
    var count = 1;
    $(".choices").empty();
    if (arr.length){
     for (var i = 0; i < arr.length; i++) {
    	 $(".choices").append("<div>" + count + ". " + "<span>" + arr[i] + "</span></div>");
    	 isInArray(arr[i], answerArr);
    	 count = count + 1;
      }
    } else {
    	$(".choices").append("<div>Oops! It looks like you didn't choose any solutions.</div>");
    }

    $(".top40 > div.grey").removeClass("grey");
  
		$(choices).fadeIn(1000);
  
    setTimeout(function(){ $(answers).fadeIn(2000); }, 1000);

    $(".modal-content").css("margin-top", "250px")
    $(".modal-content").css("border", "1px solid #888");
    $(closeModal).hide();
}

function isInArray(value, array) {
	if (array.indexOf(value) > -1){
	  $( "span:contains('" + value + "')").addClass("orange");

	}
  return array.indexOf(value) > -1;
}

$('.top40').on('click', function(event) {
    $(event.target).toggleClass("grey");
    if ($(event.target).hasClass("grey") && (arr.length < 5)) {	
     var choice = $(event.target).text().trim();	
     arr.push(choice);
     isInArray(choice, answerArr);
    } else {
    	arr = arr.filter(el => el !== $(event.target).text());	
    }
    if (arr.length == 5){
    console.log("there's some data");
     $(closeModal).fadeIn(1000);
    } 
});


