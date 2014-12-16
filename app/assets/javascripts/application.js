// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
var MovieListFilter = {
    filter_adult: function(){
        // 'this' is *upwrapped* element that received event (checkbox)
        if ($(this).is(':checked')) {
            $('tr.adult').hide();
        }else{
            $('tr.adult').show();
        };
    },
    setup: function(){
        // construct checkbox with label
        var labelAndCheckbox =
            $('<label for="filter">Only movies suitable for children</label>'+
              '<input type="checkbox" id="filter"/>');
        labelAndCheckbox.insertBefore('#movies');
        $('#filter').change(MovieListFilter.filter_adult);
    }
}
$(MovieListFilter.setup); // run setup function when document ready