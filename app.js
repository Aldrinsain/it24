// a. Data Types
let number = 5;                  // Number
let isEven = false;             // Boolean
let greeting = "Hello, World!"; // String
let numbersArray = [1, 2, 3];   // Array
let user = { name: "Alice", age: 30 }; // Object

// b. // b. Arithmetic and Logical Operators
let sum = number + 10;                     // Addition
let isPositive = number > 0;                // Logical Operator
let product = number * 2;                   // Multiplication
let sum = number + 10;                     // Addition
let isPositive = number > 0;                // Logical Operator
let product = number * 2;                   // Multiplication

// c. Conditional Statements

// i. if else
if (isEven) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// ii. switch
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day");
}

// d. Loops
for (let i = 0; i < numbersArray.length; i++) {
    console.log(`Number: ${numbersArray[i]}`);
}