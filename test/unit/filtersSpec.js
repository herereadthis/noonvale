'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {

  beforeEach(module('ticTacFilters'));


  describe('ticTacSymbol', function() {

    it('0 or 1 to O or X',
        inject(function(ticTacSymbolFilter) {
      expect(ticTacSymbolFilter(1)).toBe('\u2715');
      expect(ticTacSymbolFilter(0)).toBe('\u25ef');
    }));
  });
});
