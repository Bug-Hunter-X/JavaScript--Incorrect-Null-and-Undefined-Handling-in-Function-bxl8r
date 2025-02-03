function foo(a, b) {
  if (a == null || b == null) {
    return 0; //Incorrect: should handle null or undefined values appropriately
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); //Output: 0 (Incorrect)
console.log(foo(1, undefined)); //Output: 0 (Incorrect)