define([
  'app/04-bestpractices'
], function(answers) {

  describe('Best practices:', function() {

    it('you should avoid global variables', function() {
      answers.globals();
      expect(window.myObject).toBeUndefined();
    });

    it('you should declare functions safely', function() {
      var val = answers.functions(true);
      expect(val).toBe('a');
    });

    it('you should use parseInt correctly', function() {
      expect(answers.parseInt('12')).toBe(12);
      expect(answers.parseInt('12px')).toBe(12);
      expect(answers.parseInt('0x12')).toBe(0);
    });

    it('you should understand strict comparison', function() {
      expect(answers.identity(1, '1')).toBe(false);
      expect(answers.identity(1, 1)).toBe(true);
      expect(answers.identity(0, false)).toBe(false);
    });

  });
  
});