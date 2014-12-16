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



var MoviePopup = {
    setup: function() {
    // add hidden 'div' to end of page to display popup:
    var popupDiv = $('<div id="movieInfo"></div>');
    popupDiv.hide().appendTo($('body'));
    $(document).on('click', '#movies a', MoviePopup.getMovieInfo);
    }
    ,getMovieInfo: function() {
        $.ajax({type: 'GET',
            url: $(this).attr('href'),
            timeout: 5000,
            success: MoviePopup.showMovieInfo,
            error: function(xhrObj, textStatus, exception) { alert('Error!'); }
            // 'success' and 'error' functions will be passed 3 args
        });
        return(false);
    }
    ,showMovieInfo: function(data, requestStatus, xhrObject) {
        // center a floater 1/2 as wide and 1/4 as tall as screen
        var oneFourth = Math.ceil($(window).width() / 4);
        $('#movieInfo').
          css({'left': oneFourth,  'width': 2*oneFourth, 'top': 250}).
          html(data).
          show();
        // make the Close link in the hidden element work
        $('#closeLink').click(MoviePopup.hideMovieInfo);
        return(false);  // prevent default link action
    }
    ,hideMovieInfo: function() {
        $('#movieInfo').hide();
        return(false);
    }
};
$(MoviePopup.setup);