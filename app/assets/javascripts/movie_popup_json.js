var MoviePopupJson = {
    // 'setup' function omitted for brevity
    getMovieInfo: function() {
        $.ajax({type: 'GET',
            dataType: 'json',
            url: $(this).attr('href'),
            success: MoviePopup.showMovieInfo
            // 'timeout' and 'error' functions omitted for brevity
            });
        return(false);
    }
    ,showMovieInfo: function(jsonData, requestStatus, xhrObject) {
        // center a floater 1/2 as wide and 1/4 as tall as screen
        var oneFourth = Math.ceil($(window).width() / 4);
        $('#movieInfo').
          css({'left': oneFourth,  'width': 2*oneFourth, 'top': 250}).
          append($('<p>' + jsonData.description + '</p>'),
                 $('<a id="closeLink" href="#"></a>')).
          show();
        // make the Close link in the hidden element work
        $('#closeLink').click(MoviePopup.hideMovieInfo);
        return(false);  // prevent default link action
    }
    // hideMovieInfo omitted for brevity
};

