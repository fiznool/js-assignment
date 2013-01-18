define([
  'app/03-arrays'
], function(answers) {
  
  describe('Arrays:', function() {
    var a;

    beforeEach(function() {
      a = [1, 2, 3, 4];
    });

    it('you should be able to add together the values in an array', function() {
      var result = answers.sum(a);
      expect(result).toBe(10);
    });

    it('you should be able to remove the last item of an array', function() {
      var result = answers.truncate(a);

      expect(result.length).toBe(3);
      expect(result.join(' ')).toBe('1 2 3');
    });

    it('you should be able to add an item anywhere in an array', function() {
      var result = answers.insert(a, 'z', 2);

      expect(result.length).toBe(5);
      expect(result.join(' ')).toBe('1 2 z 3 4');
    });

    it('you should be able to find duplicates in an array', function() {
      var result = answers.duplicates([ 1, 2, 4, 4, 3, 3, 1, 5 ]);

      expect(result.length).toBe(3);
      expect(result.sort().join(' ')).toBe('1 3 4');
    });

  });

});