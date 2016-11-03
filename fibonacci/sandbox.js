function F(n) {
  if (n <= 2) return 1

  return F(n - 1) + F(n - 2)
}

for(var i = 0; i <= 79; i++) {
  console.log(F(i))
}
