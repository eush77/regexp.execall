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
});


describe('prototype extension', function () {
  beforeEach(function () {
    delete RegExp.prototype.execAll;
  });

  var testPrototype = function () {
    /(.)(.)/.execAll(input).should.eql(execAll(/(.)(.)/, input));
    /(x)(x)/.execAll(input).should.eql(execAll(/(x)(x)/, input));
    /(.)(.)/g.execAll(input).should.eql(execAll(/(.)(.)/g, input));
    /(x)(x)/g.execAll(input).should.eql(execAll(/(x)(x)/g, input));
  };

  it('should work with manual assignment', function () {
    RegExp.prototype.should.not.have.property('execAll');
    RegExp.prototype.execAll = execAll;
    testPrototype();
  });

  it('should work with extendRegExp()', function () {
    RegExp.prototype.should.not.have.property('execAll');
    execAll.extendRegExp();
    testPrototype();
  });

  it('should return execAll itself from extendRegExp()', function () {
    execAll.extendRegExp().should.equal(execAll);
  });
});
