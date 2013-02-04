define([
  'app/06-functions'
], function(answers) {
  
  describe('Functions:', function() {

    it('you should be able to use arguments', function () {
      var a = Math.random(),
          b = Math.random(),
          c = Math.random(),
          d = Math.random();

      expect(answers.useArguments(a)).toBe(a);
      expect(answers.useArguments(a, b)).toBe(a + b);
      expect(answers.useArguments(a, b, c)).toBe(a + b + c);
      expect(answers.useArguments(a, b, c, d)).toBe(a + b + c + d);
    });

    it('you should be able to create a function that returns a module', function() {
      var module = answers.createModule('hello', 'matt');

      expect(typeof module.sayIt).toBe('function');
      expect(module.name).toBe('Harry');
      expect(module.greeting).toBe('Hello');
      expect(module.sayIt()).toBe('Hello, Harry');

      module.name = 'Isabella';
      module.greeting = 'Howdy';
      expect(module.name).toBe('Isabella');
      expect(module.greeting).toBe('Howdy');
      expect(module.sayIt()).toBe('Howdy, Isabella');
    });

  });

});