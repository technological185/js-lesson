#!/bin/node
// // Short lesson: var hoisted, let reassignable, const immutable

// // var is hoisted (accessible before declaration -> undefined)
// console.log(user); // undefined
// var user = 'John';
// console.log(user); // John

// // let is block-scoped, not usable before declaration; can be reassigned
// let age;
// console.log(age); // undefined
// age = 25;
// console.log(age);
// age = 30;
// console.log(age);
// var input = window.prompt('Enter something: ');
// console.log({window})
// console.log('input:', input);
// // const is block-scoped, must be initialized, cannot be reassigned
// const city = 'New York';
// console.log(age / city === age + city); // false
// // city = 'Los Angeles'; // Un-commenting this throws: TypeError
// console.log(typeof null);
// // the =  sign is an assignment operator
// // the == sign is a loose equality operator (this does type coercion) mund t mos jen i njejti tip
// // the === sign is a strict equality operator (no type coercion) krahason tipin e variables dhe vleren
// console.log(2 == '  2'); // true
// console.log(2 === '2'); // false

// // arithmetic operators: + - * /
// console.log(2 + 2); // 4
// console.log(4 - 2);
// console.log(3 * 2);
// console.log(6 / 2);

// // modulus operator %
// console.log(5 % 2); // 1 (remainder of 5 divided by 2)
// console.log(4 % 2); // 0 (4 is evenly divisible by 2)

// // increment and decrement operators
// let count = 0;
// count++; // increment by 1
// console.log(count); // 1
// count--; // decrement by 1
// console.log(count); // 0

// // compound assignment operators
// let x = 10;
// x += 5; // equivalent to x = x + 5
// console.log(x); // 15
// x -= 3; // equivalent to x = x - 3
// console.log(x); // 12
// x *= 2; // equivalent to x = x * 2
// console.log(x); // 24
// x /= 4; // equivalent to x = x / 4
// console.log(x); // 6
// // we add to the existing value of x each time

// // Creating a string using different quotes
// const singleQuoteStr = 'Hello, World! \n';
// const doubleQuoteStr = 'This is my first js lesson.';
// const backtickStr = `Hello, World!`;

// // String concatenation
// const greeting = singleQuoteStr + ' ' + doubleQuoteStr;
// console.log(greeting);

// // Template literals
// const firstName = 'Alice';
// const age2 = 30;
// const templateLiteralStr = `My name is ${firstName}
// and I am ${age2} years old.`;
// console.log(templateLiteralStr);

// // Escape sequences
// const escapeStr =
//   "He said, 'JavaScript is awesome!'\nNew line starts here.\tTabbed text.";
// console.log(escapeStr);

// // String properties and methods
// const sampleStr = 'JavaScript';
// console.log('Length of sampleStr:', sampleStr.length); // Length of sampleStr: 10
// console.log('Uppercase:', sampleStr.toUpperCase()); // Uppercase: JAVASCRIPT
// console.log('Lowercase:', sampleStr.toLowerCase()); // Lowercase: javascript
// console.log('Character at index 4:', sampleStr.charAt(4)); // Character at index 4: S
// console.log('Index of "Script":', sampleStr.indexOf('Script')); // Index of "Script": 4

let firstName = 'Silvi';
// krijo objekt person me propertiet firstName dhe lastName age
// console.log emrin e plot te personit duke perdorur template literals
let person = { firstName: 'Lysien', lastName: 'Picari', age: 150 };

// console.log(`${person.firstName}
//      ${person.lastName} `);
// const fullName = person.firstName + '    ' + person.lastName; //string concatenation
// console.log(fullName);

person.age = 25; // rrit moshen me 1
person.hairColor = 'black-curls'; // shto property te re hairColor me vlere black

const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 9 },
  { name: 'bananas', type: 'fruit', quantity: 5 },
  { name: 'goat', type: 'meat', quantity: 23 },
  { name: 'cherries', type: 'fruit', quantity: 12 },
  { name: 'fish', type: 'meat', quantity: 22 },
];
// console.log(3<2 && "1 is less than 2" );

// if (1<2){
//     console.log("1 is less than 2");
// }else{
//     console.log(false);
// }

// if(condition){
//     // code to run if condition is true
// }else if (anotherCondition){
//     // code to run if anotherCondition is true
// }else{
//     // code to run if neither condition is true
// }

// && operatori kthen vleren e dyte nese e para eshte true
// || operatori kthen vleren e pare nese eshte true
// console.log( true && "Hello"); // "Hello");
// console.log( false && "Hello"); // false
// console.log(true && false) // false

// console.log(false && false) // false
// // truthy values: non-zero numbers, non-empty strings, objects, arrays >> || operator japin vleren true
// console.log( true || "Hello"); // true
// console.log( false || "Hello"); // "Hello"
// console.log(true || false) // true
// console.log(false || false) // false

const result = Object.groupBy(
  inventory,
  ({ type }) => type === 'fruit' && type
);
// console.log(result.restock);
// [{ name: "bananas", type: "fruit", quantity: 5 }]

// console.log(`Hair color is: ${Object.keys(person)}`); // printo hairColor
// delete person.hairColor; // fshij hairColor
// console.log(`Hair color is: ${Object.keys(person)}`); // printo hairColor

// console.log(`New age is: ${person.age}`);
//console log the name of person if age is <18 person is minor else person is adult

// if(person.age < 18){
//     console.log(`${person.firstName} is a minor`);
// }
// else{
//     console.log(`${person.firstName} is not a minor`);
// }

const values = Object.values(person);
// console.log(values);
let array = [1, 2, 3, 4, 5];
//array + array methods
// krijo nje array me emrat e 5 qyteteve
let cities = ['berat', 'vlore', 'kukes', 'diber', 'tropoj'];

// console.log(cities[1]);
cities.length;
// shto nje qytet ne fund te array .push("shkoder")
// heq qytetin e fundit te array .pop()
// shto nje qytet ne fillim te array .unshift("durres")
// heq qytetin e pare te array .shift()
//https://www.w3schools.com/js/js_array_methods.asp // array methods reference
//https://www.w3schools.com/js/js_string_methods.asp // string methods reference
cities.push('Berlin');
// console.log(cities);
cities.pop();
// console.log(cities[cities.length-1]);

// console.log(cities[0].charAt(3)); // first element
// console.log(cities.at(-1)); // last element
const first_city = cities.at(0);
// console.log(first_city.at(0).toUpperCase() + first_city.slice(1,3)); // Capitalize first letter     0:b | 1:e 2:r |3:a
// slice(startIndex, endIndex) endIndex is not included
const string_example = 'https://www.example.com/path/to/resource';
// console.log(string_example.split('/').slice(3).join('/')); // H-e-l-l-o-W-o-r-l-d

// for loop
/*
for (initialization; condition; increment) {
    // code to be executed in each iteration
}

*/
for (let i = 1; i < cities.length; i++) {
  if (i % 2 === 0) {
    // console.log(`${cities[i]} is at even index ${i}`);
  } else {
    // console.log(`${cities[i]} is at odd index ${i}`);
  }
}

const num = Array.from({ length: 50 }, (_, index) => index + 1); // [1,2,3,4,5,6,7,8,9,10]
// nqs numri plotepjestohet me 3 dhe 5 printo FizzBuzz
// nqs numri plotpjestohet me 3 printo Fizz
// nqs numri plotepjestohet me 5 printo Buzz
// perndryshe printo numrin

for (let a = 1; a <= num.length; a++) {
  if (a % 3 == 0 && a % 5 == 0) {
    console.log('FizzBuzz');
  } else if (a % 5 == 0) {
    console.log('Buzz');
  } else if (a % 3 == 0) {
    console.log('Fizz');
  } else {
    console.log(a);
  }
}
//Detyre 
// Given array (you can change the numbers)
const numbers = [1, 3, 5, 10, 12, 15, 20, 33, 50];

// Create 3 empty arrays
let evenNumbers = [];     // store even numbers here
let oddNumbers = [];      // store odd numbers here
let fizzBuzzResults = []; // store fizz / buzz / fizzbuzz results here

/* TODO: loop through the numbers array
for (/* your code here ) {

  // TODO: get the current number
  const n = /* your code here ;

  // TODO: if the number is even, push it into evenNumbers
  // TODO: otherwise push it into oddNumbers

  // TODO: FizzBuzz logic
  // if divisible by 3 AND 5 → push "FizzBuzz"
  // else if divisible by 3 → push "Fizz"
  // else if divisible by 5 → push "Buzz"
  // else push the number itself
}

// TODO: log the 3 arrays to check your work
// console.log(evenNumbers);
// console.log(oddNumbers);
// console.log(fizzBuzzResults);
*/


/* Bonus  
const cityNames = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];
1. Create a new array with the names of the cities starting with S,
2. create array with the lengths of each city name,
3. create array with the cities that have more than one word in their name (e.g., New York
*/ 