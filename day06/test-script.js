console.log('JavaScript Functions');

// Function - block of code that is used for reusability and lesser lines of code instead of using the same code in multiple places
function printThis() {
  console.log('Printing...');
}

// Invoking a function
printThis();

// Function as Expression
let printMe = function () {
  console.log('Print Me');
};

printMe();

// Function with parameter and argument
function sum(a, b) {
  const result = a + b;
  // console.log(result);
  return result;
}

let result = sum(10, 6);

function double(x) {
  return 2 * x;
}

console.log(double(result));

// Default Parameters

function calc(a, b = 2) {
  return 2 * (a + b);
}
const resultVar = calc(2, 6);
console.log(resultVar);

// Rest Parameter

function calculateThis(x, y, ...rest) {
  console.log(x, y, rest);
}

calculateThis(1, 2, 3, 4, 5, 6, 7, 8);

// Nested Function

function outer() {
  console.log('Outer');

  return function inner() {
    console.log('Inner');
  };

  // inner();
}

let retFunc = outer();
console.log(retFunc());

// Callback Functions

const toCallBuz = true;

function foo(func) {
  console.log('foo');

  if (toCallBuz) {
    func();
  }
}

const buz = function () {
  console.log('buz');
};

foo(buz);

// Pure function
let greetingMsg = "Hello ";

function greeting(name) {
    return greetingMsg + name;
}

console.log(greeting("JavaScript"));
console.log(greeting("JavaScript"));
greetingMsg = "Good evening ";
console.log(greeting("JavaScript"));
console.log(greeting("JavaScript"));

// Higher Order Function

function getCamera(camera) {
    camera();
}
getCamera(function() {
    console.log("Sony");
})


function returnFunc() {
    return function() {
        console.log("Hello");
    }
}
const retFun = returnFunc();
retFun();

// Arrow Function

let greetMe = (greetingMsg) => greetingMsg + ", I am learning 40 days of JavaScript";


console.log(greetMe("Hello"));

// Immediately Invoked Function Expression (IIFE)
(function(count) {
    console.log("IIFE", count);
})(1)

// Recursion

function fetchWater(count) {
    console.log("Fetching Water:", count);
    if (count === 0) {
        console.log("No more water is left to fetch...");
        return;
    }
    fetchWater(count - 1);
}
fetchWater(5);