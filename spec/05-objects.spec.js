define([
  'app/05-objects'
], function(answers) {

  describe('Objects:', function() {
    var F;

    beforeEach(function() {
      F = function(name) {
        this.name = name;
        return this;
      };
    });

    it('you should be able to alter the context in which a method runs', function() {
      var a = {
        name : 'Andrew',
        greeting : 'Hello',
        sayIt : function() {
          return this.greeting + ', ' + this.name + '!';
        }
      };

      var b = {
        name : 'Betty',
        greeting : 'Yo'
      };

      var result = answers.alterContext(a.sayIt, b);
      expect(result).toBe('Yo, Betty!');
    });

    it('you should be able to alter multiple objects at once', function() {
      var obj1 = new F('Charles'),
          obj2 = new F('Debbie'),
          greeting = 'How do you do';

      answers.alterObjects(F, greeting);

      expect(obj1.greeting).toBe(greeting);
      expect(obj2.greeting).toBe(greeting);
      expect(new F('Edward').greeting).toBe(greeting);
    });

    it('you should be able to iterate over an object\'s "own" properties', function() {
      var F = function() {
        this.foo = 'bar';
        this.baz = 'bim';
      };

      F.prototype.bop = 'bip';

      var obj = new F();

      expect(answers.iterate(obj)).toEqual([ 'foo: bar', 'baz: bim' ]);
    });
  });

});