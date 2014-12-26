describe('element sanitizer', function() {
  it('removes IMG tags from evil HTML', function() {
    setFixtures(sandbox({class: 'myTestClass'}));
    $('.myTestClass').text("Evil HTML! <img src='http://evil.com/xss'>");
    $('.myTestClass').sanitize();
    expect($('.myTestClass').text()).not.toContain('<img');
  });
});