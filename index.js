'use strict';


module.exports = function (regexp, string) {
  var matches = [];

  if (!regexp.global) {
    return [regexp.exec(string)];
  }

  var matches = []
    , match;

  while (match = regexp.exec(string)) {
    matches.push(match);
  }

  return matches;
};
