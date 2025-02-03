function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    //Handle null or undefined values appropriately, perhaps by returning null, throwing an error, or using a default value
    return null; //Example: Return null to indicate failure 
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, undefined)); // Output: null