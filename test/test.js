'use strict';

var execAll = require('..');


var input = '12345';


describe('for a non-global regexp', function () {
  it('should return the only match in array if it matched', function () {
    execAll(/(.)(.)/, input).should.eql([{
      0: '12',
      1: '1',
      2: '2',
      index: 0,
      input: input
    }]);
  });

  it('should return an empty array if it couldn\'t match', function () {
    execAll(/(x)(x)/, input).should.eql([]);
  });
});


describe('for a global regexp', function () {
  it('should return all matches', function () {
    execAll(/(.)(.)/g, input).should.eql([{
      0: '12',
      1: '1',
      2: '2',
      index: 0,
      input: input
    }, {
      0: '34',
      1: '3',
      2: '4',
      index: 2,
      input: input
    }]);
  });

  it('should return an empty array if it couldn\'t match once', function () {
    execAll(/(x)(x)/g, input).should.eql([]);
  });
});
