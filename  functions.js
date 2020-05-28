// JS Functions:
// A container for piece of code that can be executed whenever
// The arguments are the values that are passed to the function when called
// The parameters are the values within the function's code

// Function syntax:
// Function declaraction/statement:
function functionName(param1, param2) {
  // code body of the function
  return // expression
}

// Function expression:
// A function without a name is called an anonmyous function
const sum = function (a, b) {
  const total = a + b
  return total
}

// Functions can call other functions
function add(a, b) {
  return sum(a, b)
}