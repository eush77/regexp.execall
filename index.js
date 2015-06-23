'use strict';


module.exports = function (regexp, string) {
  var match, matches = [];

  if (!regexp.global) {
    match = regexp.exec(string);
    return match ? [match] : [];
  }

  while (match = regexp.exec(string)) {
    matches.push(match);
    if (match[0] == '' && match.index == string.length) {
      break;
    }
  }

  return matches;
};
