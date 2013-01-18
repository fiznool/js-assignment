define([
  'app/02-flowcontrol'
], function(answers) {

  describe('Flow control:', function() {
    
    it('you should be able to conditionally branch your code', function() {
      var num = 0;

      while (num % 3 === 0 || num % 5 === 0) {
          num = Math.floor(Math.random() * 10) + 1;
      }

      expect(answers.fizzBuzz()).toBeFalsy();
      expect(answers.fizzBuzz('foo')).toBeFalsy();
      expect(answers.fizzBuzz(2)).toBe(2);
      expect(answers.fizzBuzz(101)).toBe(101);

      expect(answers.fizzBuzz(3)).toBe('fizz');
      expect(answers.fizzBuzz(6)).toBe('fizz');
      expect(answers.fizzBuzz(num * 3)).toBe('fizz');

      expect(answers.fizzBuzz(5)).toBe('buzz');
      expect(answers.fizzBuzz(10)).toBe('buzz');
      expect(answers.fizzBuzz(num * 5)).toBe('buzz');

      expect(answers.fizzBuzz(15)).toBe('fizzbuzz');
      expect(answers.fizzBuzz(num * 3 * 5)).toBe('fizzbuzz');
    });

  });

  

  
});