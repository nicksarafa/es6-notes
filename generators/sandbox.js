const assert = require('assert')

var sentinel = new Error('foo')

function *demo() {
  try {
    yield 10
  } catch (ex) {
    assert(ex === sentinel)
  }
}

var d = demo()
console.log(d.next())
console.log(d.throw(sentinel)) // `throw` throws error from generator
