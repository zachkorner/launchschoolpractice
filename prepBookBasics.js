// 1.1 Concatenate a string with your first and last name
/*
console.log('Zach' + " " + 'Korner')

let first = "Zach"
let last = "Korner"

console.log(`My full name is ${first} ${last}.`)


// 1.2 Use arithmetic operators to determine the individual digits of a 4 digit number like 4936.

let thousandsPlace = (4936 - 4936 % 1000)/1000

let hundredsPlace = (936 - 936 % 100)/100

let tensPlace = (36 - 36 % 10)/10

let onesPlace = 6

console.log(`4936 has a thousands digit of ${thousandsPlace},
                      a hundreds digit of ${hundredsPlace},
                      a tens digit of ${tensPlace}
                      and a ones digit of ${onesPlace}`)

*/

// 1.3 identify the data type:

/*

'true' is a String (primitive)
false is a Boolean (primitive)
1.5 is a Number (a Float) (primitive)
2 is a Number (an Int) (primitive)
undefined is undefined (primitive)
{foo : 'bar'} is an Object. 

*/

//1.4 

// The code logs '510' instead of 15 because of implicit type coercion. Javascript coerces 
// 10 to string type after it reads '5' along with the plus sign of string concantenation.

// 1.5 Use explicit type coercion.

/*

let five_number = Number('5')

console.log(10 + five_number)

*/

//1.6 Use template literals to log the following:

console.log(`The value of 5 and 10 is ${Number('5') + 10}.`)

//1.7 

// No an error will not occur in JavaScript. For arrays, index is defined 
// for all integers 0 or greater. An index of 4 in an array of length 3 will
// return undefined. It will not throw an error message.

//1.8 create an array

let petsArray = ['Tophat', 'Autumn', 'Zoe', 'Scaredy Cat', 'Fluffy', 'Luka'];

// 1.9 create an object

let petsObject = {
  Tophat: 'cat',
  Fluffy: 'cat',
  Luka: 'dog'
}

//1.10 What does foo === Foo evaluate to?

//It evaluates to false since JavaScript is case sensenitive.

//1.11 What does parseInt('3.1415') evaluate to?

// It evalutes to 3.

//1.12 What does the following expression evaluate to? 
// '12'< '9'

//It evaulates to true. JavaScript evaluates strings element-wise. Since the first digit of 
//12 (1) is less than the first digit of 9 (9), JavaScript evalutes the expression to true.