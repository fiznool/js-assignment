// These tests use the jasmine-jquery plugin.
// More info: https://github.com/velesin/jasmine-jquery
define([
  'app/08-jquery'
], function(answers) {

  describe('jQuery:', function() {

    var async = new AsyncSpec(this);

    var $el;

    var labelHtml = '<label id="name-label" for="name-input">Name:</label>';
    var textInputHtml = '<input id="name-input" value="Bob Jones">';
    var submitHtml = '<input type="submit" value="Submit">';

    beforeEach(function() {
      $el = $('<form>' + labelHtml + textInputHtml + submitHtml + '</form>');
    });

    it('you should be able to select the label element', function() {
      expect(answers.selectLabel($el)).toBe('label#name-label');
    });

    it('you should be able to select the submit input field', function() {
      expect(answers.selectSubmit($el)).toBe('input[type=submit]');
    });

    it('you should be able to add a CSS class', function() {
      expect(answers.addClass($el)).toHaveClass('invalid');
    });

    // TODO fix this test
    xit('you should be able to bind events', function() {
      // bindClick accepts element to bind click on, and
      // callback to fire onClick
      var callback = function() {};
      answers.bindClick($el, callback);
      expect($el.toHandleWith('click', callback));
    });

    // TODO fix this test
    xit('you should be able to bind events for objects added to the DOM at a later date', function() {
      var callback = function() {};
      var $newInput = $('input');

      answers.bindClickOnAllInputs($el, callback);

      expect($el.find('#name-input').toHandleWith('click', callback));
      $el.append($newInput);
      expect($newInput).toHandleWith('click', callback);
    });

    async.it('you should be able to receive data from the server and manipulate it', function(done) {
      var url = '/data/testdata.json';

      answers.manipulateRemoteData(url).then(function(result) {
        expect(result.length).toBe(5);
        expect(result.join(' ')).toBe('Andrew Betty Charles Debbie Edward');
        done();
      });
    });

    async.it('you should be able to use promises', function(done) {
      var flag = false;
      var finished = 0;
      var total = 2;

      function finish() {
        if (++finished === total) { done(); }
      }

      answers.async(true).then(function(result) {
        flag = result;
        expect(flag).toBe(true);
        finish();
      });

      answers.async('success').then(function(result) {
        flag = result;
        expect(flag).toBe('success');
        finish();
      });

      expect(flag).toBe(false);
    });

  });

});