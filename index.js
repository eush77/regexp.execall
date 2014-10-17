'use strict';


module.exports = function (regexp, string) {
  var match;

  if (!regexp.global) {
    match = regexp.exec(string);
    return match ? [match] : [];
  }

  var matches = [];

  while (match = regexp.exec(string)) {
    matches.push(match);
  }

  return matches;
};
