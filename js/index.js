

$('.panel-collapse').on('shown.bs.collapse', function(e) {
    e.preventDefault();  
    e.stopPropagation();

      var $panel = $(this).closest('.panel');
      $('html,body').animate({
        scrollTop: $panel.offset().top
      }, 500);
});
$('.panel-collapse').on('hidden.bs.collapse', function () {
  // find the children and close them
  $(this).find('.panel-collapse').collapse('hide');
});
// $(".panel-group").sortable({
//     handle: ".panel-heading",
//     nested: true
// });

