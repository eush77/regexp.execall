# regexp.execall [![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david]

[![npm](https://nodei.co/npm/regexp.execall.png)](https://nodei.co/npm/regexp.execall/)

[travis-badge]: https://travis-ci.org/eush77/regexp.execall.svg
[travis]: https://travis-ci.org/eush77/regexp.execall
[david-badge]: https://david-dm.org/eush77/regexp.execall.png
[david]: https://david-dm.org/eush77/regexp.execall

Applies [`RegExp.prototype.exec`][exec] iteratively. Returns array of matches.

No fancy custom return format to learn.

## Example

```js
var execAll = require('regexp.execall');

execAll(/\w+/g, 'foo bar')
//=> [ [ 'foo', index: 0, input: 'foo bar' ],
//     [ 'bar', index: 4, input: 'foo bar' ] ]
```

Subgroups are handled just as you expect:

```js
execAll(/\$(\d+)/g, '$200 and $400')
//=> [ [ '$200', '200', index: 0, input: '$200 and $400' ],
//     [ '$400', '400', index: 9, input: '$200 and $400' ] ]
```

## API

### execAll(regexp, string)


Returns array of matches in the exact format of [`RegExp.prototype.exec`][exec]. If `regexp` is non-global, the resulting array contains either one or zero elements.

It is basically equivalent to the following snippet:

```js
var matches = [], match;

while ((match = regexp.exec(string)) != null) {
  matches.push(match);
}
```

[exec]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec

## Install

```
npm install regexp.execall
```

## License

MIT
