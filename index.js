'use strict';

module.exports = function (regexp, string) {
  if (!string) return [];

  var match = regexp.exec(string);
  if (!match) return [];

  if (!regexp.global) {
    return [match];
  }

  var matches = [match];
  while (match = regexp.exec(string)) {
    if (match[0] === '') {
      regexp.lastIndex++;
    } else {
      matches.push(match);
    }
  }

  return matches;
};
