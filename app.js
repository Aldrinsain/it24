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

// e. Functional Programming

// i. Determine if a number is odd or even
function isOddOrEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

console.log(`${number} is ${isOddOrEven(number)}.`);

// ii. Determine if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(`${number} is ${isPrime(number) ? 'a prime number' : 'not a prime number'}.`);

// iii. Determine if a string is a palindrome
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

let testString = "madam";
console.log(`"${testString}" is ${isPalindrome(testString) ? 'a palindrome' : 'not a palindrome'}.`);