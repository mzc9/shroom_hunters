/* TODO Contact page to always be on the About page*/

suite('"About" Page Tests', function() {
  test("page should contain link to contact page", function() {
    assert($('a[href="/contact"]').length);
  });
});
