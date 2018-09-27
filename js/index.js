$('.panel-collapse').on('shown.bs.collapse', function(e) {
    e.preventDefault();  
    e.stopPropagation();

      var $panel = $(this).closest('.panel');
      $('html,body').animate({
        scrollTop: $panel.offset().top
      }, 500);
})
.sortable({
                axis: 'y',
                handle: 'h4',
                stop: function(event, ui)
                {
                    ui.item.children( "h4" ).triggerHandler( "focusout" );
                }
            });