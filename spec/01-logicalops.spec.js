define([
  'app/01-logicalops'
], function(answers) {

  describe('Logical operators:', function() {

    it('you should be able to work with logical and', function() {
      expect(answers.and(false, false)).toBeFalsy();
      expect(answers.and(true, false)).toBeFalsy();
      expect(answers.and(true, true)).toBeTruthy();
    });

    it('you should be able to work with logical or', function() {
      expect(answers.or(true, false)).toBeTruthy();
      expect(answers.or(true, true)).toBeTruthy();
      expect(answers.or(false, false)).toBeFalsy();
    });
  });

});