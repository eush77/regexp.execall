# regexp.execall [![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david]

[![npm](https://nodei.co/npm/regexp.execall.png)](https://nodei.co/npm/regexp.execall/)

[travis-badge]: https://travis-ci.org/eush77/regexp.execall.svg
[travis]: https://travis-ci.org/eush77/regexp.execall
[david-badge]: https://david-dm.org/eush77/regexp.execall.png
[david]: https://david-dm.org/eush77/regexp.execall

Applies `RegExp.exec` recursively. Returns array of matches. Can be used either as a separate function or a `RegExp` prototype extension.

## Example

```js
var execAll = require('regexp.execall');

execAll(/\w+/g, 'foo bar');
//=> [ [ 'foo', index: 0, input: 'foo bar' ],
//     [ 'bar', index: 4, input: 'foo bar' ] ]
```

## API

### execAll(regexp, string)

If `execAll` is called in the context of a `RegExp`, it will use it as a `regexp`.

Returns array of matches in the format of the built-in `exec`. If `regexp` is non-global, the returning array contains either one or zero elements.

It is basically equivalent to the following snippet:

```js
var matches = [], match;

while ((match = regexp.exec(string)) != null) {
  matches.push(match);
}
```

### execAll.extendRegExp()

Equivalent to `RegExp.prototype.execAll = execAll`.

Returns `execAll`.

```js
var execAll = require('regexp.execall').extendRegExp();

/\w+/g.execAll('foo bar');
//=> [ [ 'foo', index: 0, input: 'foo bar' ],
//     [ 'bar', index: 4, input: 'foo bar' ] ]
```

## Install

```shell
npm install regexp.execall
```

## License

MIT
