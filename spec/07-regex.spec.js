define([
  'app/07-regex'
], function(answers) {
  
  describe('RegEx:', function() {
    it('you should be able to detect a two-digit number in a string', function() {
      expect(answers.containsTwoDigitNumber('abc123')).toBe(false);
      expect(answers.containsTwoDigitNumber('21wert')).toBe(true);
      expect(answers.containsTwoDigitNumber('we02rt')).toBe(true);
      expect(answers.containsTwoDigitNumber('1wert2')).toBe(false);
      expect(answers.containsTwoDigitNumber('abc')).toBe(false);
    });

    it('you should be able to detect a repeating letter in a string', function() {
      expect(answers.containsRepeatingLetter('bookkeeping')).toBe(true);
      expect(answers.containsRepeatingLetter('rattler')).toBe(true);
      expect(answers.containsRepeatingLetter('ZEPPELIN')).toBe(true);
      expect(answers.containsRepeatingLetter('cats')).toBe(false);
      expect(answers.containsRepeatingLetter('l33t')).toBe(false);
    });

    it('you should be able to determine whether a string ends with a vowel (aeiou)', function() {
      expect(answers.endsWithVowel('cats')).toBe(false);
      expect(answers.endsWithVowel('gorilla')).toBe(true);
      expect(answers.endsWithVowel('I KNOW KUNG FU')).toBe(true);
    });

    it('you should be able to capture the first series of three numbers', function() {
      expect(answers.captureThreeNumbers('abc123')).toBe('123');
      expect(answers.captureThreeNumbers('9876543')).toBe('987');
      expect(answers.captureThreeNumbers('abcdef')).toBe(false);
      expect(answers.captureThreeNumbers('12ab12ab')).toBe(false);
    });

    it('you should be able to determine whether a string matches a pattern', function() {
      // the pattern is XXXX-XXX-XX where all X's are digits
      expect(answers.matchesPattern('8000-555-12')).toBe(true);
      expect(answers.matchesPattern('4514-933-99')).toBe(true);
      expect(answers.matchesPattern('33-444-5555')).toBe(false);
      expect(answers.matchesPattern('abcd-efg-jk')).toBe(false);
      expect(answers.matchesPattern('8000-555-1k')).toBe(false);
      expect(answers.matchesPattern('8000-555-121')).toBe(false);
      expect(answers.matchesPattern('8000-5555-12')).toBe(false);
      expect(answers.matchesPattern('800-555-12')).toBe(false);
    });
  });

});