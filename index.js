'use strict';


module.exports = function (regexp, string) {
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
