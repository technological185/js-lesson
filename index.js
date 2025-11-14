// Short lesson: var hoisted, let reassignable, const immutable

// var is hoisted (accessible before declaration -> undefined)
console.log(user); // undefined
var user = 'John';
console.log(user); // John

// let is block-scoped, not usable before declaration; can be reassigned
let age;
console.log(age); // undefined
age = 25;
console.log(age);
age = 30;
console.log(age);

// const is block-scoped, must be initialized, cannot be reassigned
const city = 'New York';
console.log(age / city === age + city); // false
// city = 'Los Angeles'; // Un-commenting this throws: TypeError
console.log(typeof null)
// the =  sign is an assignment operator
// the == sign is a loose equality operator (this does type coercion) mund t mos jen i njejti tip
// the === sign is a strict equality operator (no type coercion) krahason tipin e variables dhe vleren
console.log(2 == '  2'); // true
console.log(2 === '2'); // false

// arithmetic operators: + - * /
console.log(2 + 2); // 4
console.log(4 - 2);
console.log(3 * 2);
console.log(6 / 2);

// modulus operator %
console.log(5 % 2); // 1 (remainder of 5 divided by 2)
console.log(4 % 2); // 0 (4 is evenly divisible by 2)

// increment and decrement operators
let count = 0;
count++; // increment by 1
console.log(count); // 1
count--; // decrement by 1
console.log(count); // 0

// compound assignment operators
let x = 10;
x += 5; // equivalent to x = x + 5
console.log(x); // 15
x -= 3; // equivalent to x = x - 3
console.log(x); // 12
x *= 2; // equivalent to x = x * 2
console.log(x); // 24
x /= 4; // equivalent to x = x / 4
console.log(x); // 6
// we add to the existing value of x each time


// Creating a string using different quotes
const singleQuoteStr = 'Hello, World! \n';
const doubleQuoteStr = "This is my first js lesson.";
const backtickStr = `Hello, World!`;

// String concatenation
const greeting = singleQuoteStr + ' ' + doubleQuoteStr;
console.log(greeting);

// Template literals
const firstName = 'Alice';
const age2 = 30;
const templateLiteralStr = `My name is ${firstName}
and I am ${age2} years old.`;
console.log(templateLiteralStr);

// Escape sequences
const escapeStr = 'He said, \'JavaScript is awesome!\'\nNew line starts here.\tTabbed text.';
console.log(escapeStr);

// String properties and methods
const sampleStr = 'JavaScript';
console.log('Length of sampleStr:', sampleStr.length); // Length of sampleStr: 10
console.log('Uppercase:', sampleStr.toUpperCase()); // Uppercase: JAVASCRIPT
console.log('Lowercase:', sampleStr.toLowerCase()); // Lowercase: javascript
console.log('Character at index 4:', sampleStr.charAt(4)); // Character at index 4: S
console.log('Index of "Script":', sampleStr.indexOf('Script')); // Index of "Script": 4