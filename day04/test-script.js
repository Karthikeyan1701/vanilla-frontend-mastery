console.log('JavaScript Control Structures');

// Basic if else statement
let catchingBus = true;

if (catchingBus) {
  console.log('I will reach home on time');
} else {
  console.log('I will be late to reach');
}

// Voting eligibility example

let age = 17;

if (age >= 18) {
  console.log('You are Eligible to vote');
} else {
  console.log('You are not eligible to vote');
}

// Grading system (Multiple if else)
// If score is >= 90, Grade A
// If score is >= 80, Grade B
// If score is >= 70, Grade C
// If score is >= 60, Grade D
// If score is >= 50, Grade E
// else, Fail - Grade F

let score = 90;

if (score >= 90) {
  console.log('Grade A');
} else if (score >= 80) {
  console.log('Grade B');
} else if (score >= 70) {
  console.log('Grade C');
} else if (score >= 60) {
  console.log('Grade D');
} else if (score >= 50) {
  console.log('Grade E');
} else {
  console.log('Fail');
}

// Another example of independent use cases in multiple if else

let x = 0;

if (x === 0) {
  console.log(0);
} else if (x >= 0) {
  console.log('Greater than 0');
} else if (x <= 0) {
  console.log('Less than 0');
}

// Nested If Else

const condition = true;
const innerCondition = true;

if (condition) {
  console.log('Outer if');
  if (innerCondition) {
    console.log('Inner if');
  } else {
    console.log('Inner else');
  }
} else {
  console.log('Outer else');
}

// Switch case statement

let position = 10;

switch (position) {
  case 1:
    console.log('Print 1');
    break;
  case 2:
    console.log('Print 2');
    break;
  case 3:
    console.log('Print 3');
    break;
  case 4:
    console.log('Print 4');
    break;
  default:
    console.log('No position number found');
}

// Weekday example using switch case

let day = "Tuesday";

switch (day) {
    case "Sunday":
        console.log("First day of the week");
        break;
    case "Monday":
        console.log("Second day of the week");
        break;
    case "Tuesday":
        console.log("Third day of the week");
        break;
    case "Wednesday":
        console.log("Fourth day of the week");
        break;
    case "Thursday":
        console.log("Fifth day of the week");
        break;
    case "Friday":
        console.log("Sixth day of the week");
        break;
    case "Saturday":
        console.log("Seventh day of the week");
        break;
    default:
        console.log("No day matched");
}

