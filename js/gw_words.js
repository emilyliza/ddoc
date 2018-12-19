$(function() {
    $(".word").draggable({
        containment: ".flex-grid",
        start: function(event, ui) {
            $(this).addClass('grey');
        }
    });
    $("#circleBox").droppable({
        drop: function(event, ui) {
            $(ui.draggable).addClass("green");
        }
    });
    $("#wordBox").droppable({
        drop: function(event, ui) {
            $(ui.draggable).removeClass("green grey");
        }
    });
    var input = document.getElementById("newWord");

    $(input).on("keyup input", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            var word = document.getElementById('newWord').value;
            var circle = document.getElementById('circleText');
            $(circle).append('<div class="word green newWord">' + word + '</div>');
            $(".newWord").draggable();
            document.getElementById("newWord").value = "";
        }
    });

// to accommodate iphones
    $(input).on('focusout', function(event) {
        event.preventDefault();
        var word = document.getElementById('newWord').value;
        if (word.length > 0){
            var circle = document.getElementById('circleText');
            $(circle).append('<div class="word green newWord">' + word + '</div>');
            $(".newWord").draggable();
            document.getElementById("newWord").value = ""; 

            $('html, body').animate({
                scrollTop: $("#circleBox").offset().top
            }, 700);
        }  
   });
});