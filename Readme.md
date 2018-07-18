# 🧐 is-dis
is-dis is a tiny (~1kb) type/argument validator for JS.  
It has 0 dependencies and works in the broswer and nodejs.  
Works on all major browsers but also on older brosers like IE (not tested though).

## Install
```
$ npm i is-dis
```

## Usage
is-dis only exports a single check function.  
`check(value, pattern)`  
If the pattern does not match - an Error will be thrown.

```javascript
const check = require('is-dis')

function generateUnicorn(name, opts) {
  check(name, String)
  check(opts, Object)
  check(opts.age, Number)

  console.log('🦄')
  // ...do some magic...
}

generateUnicorn('Harry', { age: 1 })
// => 🦄

generateUnicorn({ age: 1 })
// => Error: Expected string got object.

generateUnicorn('Ron', {})
// => Error: Expected number got null.



// more examples:
check('123', Array) 
// => Error: Expected Array got string.

check(123, Date) 
// => Error: Expected Date got number.
```

## Patterns
- String
- Number
- Boolean
- Function
- Object
- Array
- undefined
- null
- Any Constructor e.g. Date

