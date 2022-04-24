//1 
/*
let iceCreamTaste = 'chocolate';
let iceCreamDensity = 10;

while (iceCreamDensity > 0) {
  console.log('Drip...');
  iceCreamDensity -= 1;
}

console.log('The ' + iceCreamTaste + ' ice cream melted.');

*/

//2

//The five primitive types (relevant to us) are number, string, boolean, undefined and null.

//3 

//According to the documentation, the largest value that JavaScript can represent (short of Infinity)
//is 1.7976931348623157 * (10^308)

//4 

//PEMDRAS - parentheses, exponents, multiplication, division, remainder, addition, subtraction


//3**2 will evaluate first = 9, then it will be divided by 9 = .9. 20 will then be added to .9 = 20.9.


//5

// console.log(Date.now()) returns the number of milliseconds elapsed since January 1, 1970 

//6

//.getYear() returns the year to 2 or 3 digits. Because of Y2K it is considered obsolete.
//.getFullYear() returns the year to 4 digits.

//7

//The array.prototype.join() (usually shortened to .join()) method can take up to one optional parameter.
//This parameter, called separator, 'specifies a string to separate each pair in the array'.

//8

//Strings may be joined together(concatenated) using the + operator.

//9

/*
let speedLimit = 60;
let currentSpeed = 80;

if (currentSpeed > speedLimit && (currentSpeed - speedLimit) > 5) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}
*/

//The error was caused by an extra parenthese.

//10 

let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}

//length is not a function.