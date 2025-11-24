//switch and for xxx of array
//  let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// for (let day of weekdays) {
//    switch (day) {
//       case "Monday":
//          console.log("Start of the work week.");
//          break;
//       case "Tuesday": continue;
//       case "Friday":
//          console.log("End of the work week.");
//          break;
//       case "Saturday":
//       case "Sunday":
//          console.log("Weekend!");
//          break;
//       default:
//          console.log("Midweek day.");
//    }
// }

// ternary operator
// const name = 'Lysien';

// const is_teacher = name === 'Sil'? true : false;

// console.log(is_teacher);

// for...in ==>  loop in objects / this loops the keys
// const obj  = {a:1,b:2,c:3}
// for (let key in obj) {
//   console.log(key, obj[key] );
// }

// for...of loop in array/ this loops the value
// while
// let n ='';
// let x = 0
// while (x < 5) {
//   console.log('while',x);
//   x++;
//   n += x;
// }

// console.log(n);
// // do...while
// let result = "";
// let i = 0;

// do {
// console.log('do while', i);
//   i += 1;
//   result += i;
// } while (i < 5);

// console.log(result);

//OBJECT
// let a = { age: 29, name: 'Dionysia'};
// let b = { name: 'Dionysia', age: 29};
const test = 'test';
// console.log(JSON.stringify(a).split('').sort().join('') === JSON.stringify(b).split('').sort().join(''))
const person = {
  fullName: 'Sil Sin',
  greet: function (parameter) {
    console.log('Hello, ' + this.fullName, parameter); // the function inside objects is called a method. this is a keyword that refers to the current object
  },
};

person.greet('attribute');

// Functions
// reusable block of code

// declaring functions with keyword "function"
// is hoisted and can be called before declaration
console.log(sum(4, 4));

function sum(a, b) {
  return a + b;
}

console.log(sum(3, 4));

//  function expression , not hoisted,  cannot be called before declaration
const greeting = function () {
  console.log('Hello!');
  return null;
};
console.log(greeting());

//arrow functions ,  not hoisted, cannot be called before declaration
const arrowFunction = (a, b) => {
  let sum = a + b;
  return sum * a;
};

const multiply = (a, b) => a * b;

console.log(multiply(3, 4));
console.log(arrowFunction(3, 4));

function doMath(num1, sign, num2) {
  let result;
  switch (sign) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'Invalid operator';
  }
  return result;
}
console.log(doMath(4, '+', 5));
