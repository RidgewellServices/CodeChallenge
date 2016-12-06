QUnit.test( "test getFilteredList with empty array", function( assert ) {
  var test_obj = new Challenge();
  var result = test_obj.getFilteredList();
  assert.ok( result == "please enter an array as comma separated string, e.g., 'element','element'", "Passed!" );
});

QUnit.test( "test getFilteredList with 1 element array", function( assert ) {
  var test_obj = new Challenge();
  var result = test_obj.getFilteredList(['a']);
  assert.ok( result == "a", "Passed!" );
});

QUnit.test( "test getFilteredList with 2 element array", function( assert ) {
  var test_obj = new Challenge();
  var result = test_obj.getFilteredList(['a', 'b']);
  assert.ok( result == "a,b", "Passed!" );
});

QUnit.test( "test getFilteredList with 3 element array with dup", function( assert ) {
  var test_obj = new Challenge();
  var result = test_obj.getFilteredList(['a', 'b', 'a']);
  assert.ok( result == "a,b", "Passed!" );
});

QUnit.test( "test getEmail", function( assert ) {
  var test_obj = new Challenge();
  var result = test_obj.getEmail(1);
  assert.ok( result == "a1@a.com", "Passed!" );
});

QUnit.test( "test createList with 0 uniques", function( assert ) {
  var test_obj = new Challenge();
  var result = test_obj.createList(0);
  assert.ok( result == "", "Passed!" );
});

QUnit.test( "test createList with 1 uniques", function( assert ) {
  var test_obj = new Challenge();
  var result = test_obj.createList(1);
  assert.ok( result == "a0@a.com", "Passed!" );
});

QUnit.test( "test createList with 2 uniques", function( assert ) {
  var test_obj = new Challenge();
  var result = test_obj.createList(2);
  console.log ("result == " + result);
  assert.ok( result == "a1@a.com,a2@a.com,a1@a.com", "Passed!" );
});
