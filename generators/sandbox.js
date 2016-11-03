const assert = require('assert') // <= required by node for import to use `assert`

function* demo() {
  var res = yield 10
  assert(res === 32)
  return 42
}

d = demo()

var resA = d.next()
var resB = d.next(32)

console.log(resA)
console.log(resB)
