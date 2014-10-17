# regexp.execall [![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david] [![DevDependency Status][david-dev-badge]][david-dev]

[![npm](https://nodei.co/npm/regexp.execall.png)](https://nodei.co/npm/regexp.execall/)

[travis-badge]: https://travis-ci.org/eush77/regexp.execall.svg
[travis]: https://travis-ci.org/eush77/regexp.execall
[david-badge]: https://david-dm.org/eush77/regexp.execall.png
[david]: https://david-dm.org/eush77/regexp.execall
[david-dev-badge]: https://david-dm.org/eush77/regexp.execall/dev-status.png
[david-dev]: https://david-dm.org/eush77/regexp.execall#info=devDependencies

Apply `RegExp.exec` recursively. Return array of all matches.

For a non-global `RegExp`, it is basically the same as `RegExp.prototype.exec`, except that it returns an array for uniformity. For a global `RegExp`, it's equivalent to the following snippet:

```js
var matches = [], match;

while ((match = regexp.exec(string)) != null) {
  matches.push(match);
}
```

Can be used either as a separate function or a `RegExp`'s prototype extension. For the latter purpose, both these variants work:

```js
RegExp.prototype.execAll = execAll;
execAll.extendRegExp();
```

You can even use both forms at the same time:

```js
var execAll = require('regexp.execall').extendRegExp();

execAll(/regexp/, 'string');
/regexp/.execAll('string');
```

## API

### execAll(regexp, string)

If `execAll` is called in the context of a `RegExp`, it will use it as a `regexp`.

Returns an array of matches in the format of the built-in `exec`. If `regexp` is non-global, the returning array contains either one or zero elements.

### execAll.extendRegExp()

Equivalent to `RegExp.prototype.execAll = execAll`.

Returns `execAll`.

## Install

```shell
npm install regexp.execall
```

## License

MIT