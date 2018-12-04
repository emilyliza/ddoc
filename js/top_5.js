
var modal = document.getElementById('myModal');
var choiceTitle = document.getElementById('choiceTitle');
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var answers = document.getElementsByClassName("container2")[0];
var choices = document.getElementsByClassName("container1")[0];

var arr = [];
// answers.style.display = "none";
// choiceTitle.style.display = "none";
// choices.style.display = "none";

$(answers).hide();
$(choiceTitle).hide();
$(choices).hide();

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    var count = 1;
    $(".choices").empty();
    if (arr.length){
     for (var i = 0; i < arr.length; i++) {
    	 $(".choices").append("<div>" + count + ". " + arr[i] + "</div>");
    	 count = count + 1;
      }
    } else {
    	$(".choices").append("<div>Oops! It looks like you didn't choose any solutions.</div>");
    }

    $(".top40 > div.grey").removeClass("grey");
    
		$(choiceTitle).fadeIn(1000);
		$(choices).fadeIn(1000);
  
    setTimeout(function(){ $(answers).fadeIn(2000); }, 1000);

    // choiceTitle.style.display = "block";
    // answers.style.display = "block";
    // choices.style.display = "block";
    modal.style.display = "none";
    btn.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$('.top40').on('click', function(event) {
    $(event.target).toggleClass("grey");
    if ($(event.target).hasClass("grey")) {	
     arr.push($(event.target).text());
    } else {
    	arr = arr.filter(el => el !== $(event.target).text());	
    }
});