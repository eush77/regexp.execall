'use strict';

var execAll = require('..');

var assign = require('object.assign');


var input = '12345';


describe('for a non-global regexp', function () {
  it('should return the only match in array if it matched', function () {
    execAll(/(.)(.)/, input).should.eql([assign(['12', '1', '2'], {
      index: 0,
      input: input
    })]);
  });

  it('should return an empty array if it couldn\'t match', function () {
    execAll(/(x)(x)/, input).should.eql([]);
  });
});


describe('for a global regexp', function () {
  it('should return all matches', function () {
    execAll(/(.)(.)/g, input).should.eql([assign(['12', '1', '2'], {
      0: '12',
      1: '1',
      2: '2',
      index: 0,
      input: input
    }), assign(['34', '3', '4'], {
      index: 2,
      input: input
    })]);
  });

  it('should return an empty array if it couldn\'t match once', function () {
    execAll(/(x)(x)/g, input).should.eql([]);
  });

  it('should never enter an infinite loop', function () {
    execAll(/.*/g, input).should.eql([assign(['12345'], {
      index: 0,
      input: input
    })]);

    execAll(/1?/g, input).should.eql([assign(['1'], {
      index: 0,
      input: input
    })]);
  });
});
