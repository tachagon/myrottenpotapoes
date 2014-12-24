describe('MoviePopupJson', function() {
    describe('successful AJAX call', function() {
        beforeEach(function() {
            loadFixtures('movie_row.html');
            var jsonResponse = getJSONFixture('movie_info.json');
            spyOn($, 'ajax').andCallFake(function(ajaxArgs) {
                ajaxArgs.success(jsonResponse, '200');
            });
            $('#movies a').trigger('click');
        });
        // 'it' clauses are same as in movie_popup_spec.js
    });
});

