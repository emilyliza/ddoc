
$(".journalText").hide();
$('.editButton').hide();
var localStorage = window.localStorage.getItem("journal") || null;

if (localStorage && localStorage.journal.length) {
	$("#saveJournal").append(localStorage.journal);
	$('.editButton').show();
	$("#saveJournal").prop('disabled', true);
	$('.saveButton').hide();

}

function save_data(){
	$(".journalText").empty();
  var input = document.getElementById("saveJournal");
  window.localStorage.setItem("journal", input.value);
  var storedValue = window.localStorage.getItem("journal");
  $("#saveJournal").prop('disabled', true);
  $('.editButton').show();
  $('.saveButton').hide();
}

function edit_data() {
  $("#saveJournal").prop('disabled', false);
  $('.editButton').hide();
  $('.saveButton').show();
}