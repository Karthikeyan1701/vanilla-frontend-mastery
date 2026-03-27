console.log('JavaScript - Loops & Iterations');

// For loop - A for loop is best wgen we know exactly how many times we need to run a block of code

for (let count = 1; count <= 5; count++) {
  console.log('Iteration Number', count);
}

// Addition of even and odd numbers between 1 to 100

let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    // console.log("i", i);
    sum += i;
  }
}

console.log('Sum is', sum);

// For loop using Strings

let language = 'JavaScript';

for (let i = 0; i < language.length; i++) {
  console.log(language.charAt(i));
}

// Nested Loop - A looop inside another loop (Multi dimensional)

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log('Row', i, 'Col', j);
  }
}

// Break and continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

// Multiple counters for single loop

for (let i = 1, j = 10; i <= 10, j >= 1; i++, j--) {
  console.log(i, j);
}

// While loop - runs as long as a given condition is true. It's best when we don't know in advance how many iteraions are needed

let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter++;
}

// do-while loop - ensures that the code executes at least once before checking the condition

let num = 1;

do {
  console.log(num);
  num++;
} while (num <= 6);


// Infinite Loop

