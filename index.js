const types = [
  [String, 'string'],
  [Number, 'number'],
  [Boolean, 'boolean'],
  [Function, 'function'],
  [Object, 'object'],
  [undefined, 'undefined'],
];

function getType(v) {
  return typeof v;
}

function isArray (arg) {
  return Object.prototype.toString.call(arg) === '[object Array]';
}

function test(value, pattern) {
  // is dis one of types
  for (var i = 0; i < types.length; ++i) {
    if (pattern === types[i][0]) {
      if (typeof value === types[i][1])
        return false;
      return `Expected ${types[i][1]} got ${getType(value)}.`;
    }
  }

  // is dis null
  if (pattern === null) {
    if (value === null) {
      return false;
    }
    return `Expected null, got ${getType(value)}`;
  }

  // is dis array
  if (pattern === Array) {
    if (isArray(value)) { return false; }
    return `Expected Array, got ${getType(value)}`;
  }

  // is dis typeof constructor
  if (pattern instanceof Function) {
    if (value instanceof pattern)
      return false;
    return `Expected ${pattern.name || 'particular constructor'}, got ${getType(value)}`;
  }
}

function check(value, pattern) {
  const result = test(value, pattern);
  if (result) {
    throw new Error(result);
  }
}

if (module && module.exports) {
  module.exports = check;
}

if (window) {
  window.check = check;
}

