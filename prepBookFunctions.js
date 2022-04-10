//4.1 

// Expected return is 1. By putting a second let in front of bar, we are restricting its scope
// to the function block. In the global scope, bar remains equal to 1. If the second let statement
// was removed, then the function would affect the value of bar and our expected output would be 2.

//4.2 modified greeter.js

/*

function getName(prompt) {
  let readlineSync = require('readline-sync')
  let name = readlineSync.question(prompt)
  return name
}

firstName = getName('What is your first name? ')
lastName = getName('What is your last name? ')
console.log(`Hello ${firstName} ${lastName}`)



//4.3

function multiply(a,b) {
  return a * b;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync')
  return parseFloat(readlineSync.question(prompt))
  
}

let a = getNumber('Enter a number.')
let b = getNumber('Enter a second number')

console.log(multiply(a,b))

*/

//4.4

// 

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');