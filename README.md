# neqndeq
[![Build Status](https://img.shields.io/travis/mohayonao/neqndeq.svg?style=flat-square)](https://travis-ci.org/mohayonao/neqndeq)
[![NPM Version](https://img.shields.io/npm/v/neqndeq.svg?style=flat-square)](https://www.npmjs.org/package/neqndeq)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> if **N**ot **EQ**ual then should **N**ot **D**eep **EQ**ual

## Installation

```
$ install npm --save neqndeq
```

## API

- `neqndeq(a: any, b: any): boolean`

## Examples

**N**ot **EQ**ual / **N**ot **D**eep **EQ**ual
```js
const a = [ 10, 20 ];
const b = [ 10, 25 ]; // a !== b && !deepEqual(a, b)

neqndeq(a, b); // true
```

**N**ot **EQ**ual / NOT (**N**ot **D**eep **EQ**ual)
```js
const a = [ 10, 20 ];
const b = [ 10, 20 ]; // a !== b && !!deepEqual(a, b)

neqndeq(a, b); // false
```

**N**ot **EQ**ual / **N**ot **D**eep **EQ**ual
```js
const a = [ 10, 20, [ 30, 40 ] ];
const b = [ 10, 25, a[2] ];      // a[2] === b[2]

neqndeq(a, b); // true
```

**N**ot **EQ**ual / NOT (**N**ot **D**eep **EQ**ual)
```js
const a = [ 10, 20, [ 30, 40 ] ];
const b = [ 10, 25, [ 30, 40 ] ]; // a[2] !== b[2] && !!deepEqual(a[2], b[2])

neqndeq(a, b); // false
```

## License

MIT
