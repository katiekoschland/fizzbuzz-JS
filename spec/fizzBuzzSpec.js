describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

   it("should return fizz when given 3", function(){
     expect(fizzBuzz.play(3)).toEqual('fizz');
   });

   it("should return buzz when given 5", function(){
     expect(fizzBuzz.play(5)).toEqual('buzz');
   });

   it("should return fizz when given 6", function(){
     expect(fizzBuzz.play(6)).toEqual('fizz');
   });

   it("should return buzz when given 10", function(){
     expect(fizzBuzz.play(10)).toEqual('buzz');
   });

   it("should return fizzbuzz when given 15", function(){
     expect(fizzBuzz.play(15)).toEqual('fizzbuzz');
   });

   it("should return the number if it's not divisible by 3 or 5", function(){
     expect(fizzBuzz.play(1)).toEqual(1);
   });

});
