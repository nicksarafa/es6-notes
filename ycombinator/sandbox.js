factorial = n => (n === 0) ? 1 : n * factorial(n - 1)
factorial_gen = f => (n => ((n === 0) ? 1 : n * f(n - 1)))
factorial_weird = f => ((n => (n === 0) ? 1 : n * f(f)(n - 1)))
factorial_no_names = (f => (n => ((n === 0) ? 1 : n * f(f)(n-1))))((f => (n=> ((n === 0) ? 1 : n * f(f)(n - 1)))))

console.log(factorial(10))                        // 3628800
console.log(factorial_gen(factorial)(10))         // 3628800
console.log(factorial_weird(factorial_weird)(10)) // 3628800
console.log([1,2,3,4,5,6,7,8,9,10].map(factorial_no_names)) // [ 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800 ]
