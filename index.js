'use strict';


module.exports = exports = function (regexp, string) {
  if (this instanceof RegExp) {
    string = regexp;
    regexp = this;
  }

  var match, matches = [];

  if (!regexp.global) {
    match = regexp.exec(string);
    return match ? [match] : [];
  }

  while (match = regexp.exec(string)) {
    matches.push(match);
  }

  return matches;
};


exports.extendRegExp = function () {
  return RegExp.prototype.execAll = this;
};
