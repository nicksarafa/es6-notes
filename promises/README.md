## Promises
[source - promisesjs](https://www.promisejs.org/api/)

- a promise represents the result of an asynchronous operation. A promise is in one of three different states:

1. pending   - initial state of a promise.
2. fulfilled - state of a promise representing a successful operation.
3. rejected  - state of a promise representing a failed operation.

Once a promise is fulfilled or rejected, it is _immutable_ (i.e. it can never change again)

- `.then` whenever you're going to do something with the result (even if that's just waiting for it to finish)
- `.done` whenever you aren't planning on doing anything with the result

- `.then` is to `.done` as `.map` is to `.forEach`
