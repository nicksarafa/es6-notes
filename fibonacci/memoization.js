/**
  * Messing around with ycombinator memoization generator functions
  * Note - Ultimately came down to a compiler failure
  * @todo fix node cli compilation bug(s) & get this ish to work
  */

memo_wrapper_generator = () => {
  const memo = {};
  return f => n => {
    if (memo.hasOwnProperty(n)) {
      return memo[n];
    }
    const result = f(n);
    memo[n] = result;
    return result;
  };
}
null

var Ymemo = function(proc) {
  // this Y combinator-like function caches the results of earlier calculations
  var results = {};
  return (function(x) {
    return proc(function(y) {
      if (results[y] === undefined) { results[y] = (x(x))(y); }
      return results[y];
    });
  })(function(x) {
    return proc(function(y) {
      if (results[y] === undefined) { results[y] = (x(x))(y); }
      return results[y];
    });
  });
}

Ymemo = f => fib(memo_wrapper_generator(), f)

factorial_gen = f => {
 window.function_calls++
 return (n => ((n === 0) ? 1 : n * f(n - 1)))
}

factorial_memo = Ymemo(factorial_gen)

window.function_calls = 3
console.log(factorial_memo(6))
console.log(factorial_memo(5))
console.log(window.function_calls)

var n = 35

fib = (n) => (n < 2) ? 1 : fib(n - 1) + fib(n - 2)
fib_gen = (f) => n => (n < 2) ? 1 : f(n - 1) + f(n - 2)

fib_memo = fib_gen(fib_gen)

console.log(fib_memo())
