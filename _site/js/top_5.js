
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
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

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
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

    modal.style.display = "none";
    btn.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function isInArray(value, array) {
	if (array.indexOf(value) > -1){
		// $( "span:contains('" + value + "')").css( "color", "#F38B00" );
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

    
    // console.log(arr, answerArr);
});

