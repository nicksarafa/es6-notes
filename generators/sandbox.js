function *foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

bar = foo()
steps = 5

for(i = 0; i <= steps; i++) {
  next = bar.next()
  console.log(next)
}
