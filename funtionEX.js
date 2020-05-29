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

// Invoke/call a function with ()
sum // returns function definition
sum(2, 3) // returns 5 (the expression after the return statement)

// Old code used iife to create scope with var
(function sum(a, b) {
  var total = a + b
  // some other code that makes use of the total variable
})()

// If you don't have a return statement, the function will return undefined when called
function printHello() {
  console.log('Hello')
}

// Arrow function (ES6+)
const arrow = (param1, param2) => {
  // code body
  return // expression
}