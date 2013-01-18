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

    it('you should be able to create a partial function', function() {
      var fcn = answers.partial('Hello');
      expect(fcn('World')).toBe('Hello, World');
      expect(fcn('Everybody!')).toBe('Hello, Everybody!');
    });

    it('you should be able to change the context in which a function is called', function() {
      var sayItCalled = false;
      var sayIt = function(greeting, name, punctuation) {
        sayItCalled = true;
        return greeting + ', ' + name + (punctuation || '!');
      };

      var speak = function() {
          return sayIt(this.greeting, this.name, '!!!');
        };

      var obj = {
        greeting : 'Hello',
        name : 'Georgina'
      };

      var result = answers.speak(speak, obj);
      expect(result).toBe('Hello, Georgina!!!');
      expect(sayItCalled).toBeTruthy();
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