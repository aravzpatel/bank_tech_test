it("should test for the function_to_test's console output", function () {
  console.log = jasmine.createSpy("log");
  var person = function_to_test();
  console.table(person)
  expect(console.log).toHaveBeenCalledWith(person);
});