'use strict';

module.exports = function (regexp, string) {
  if (!regexp.global) {
    var match = regexp.exec(string);
    return match ? [match] : [];
  }

  var matches = [];
  while (match = regexp.exec(string)) {
    if (match[0] === '') {
      regexp.lastIndex++;
    } else {
      matches.push(match);
    }
  }

  return matches;
};
