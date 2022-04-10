//6.1 modify age.js
/*
let age = 32

for (let years = 10; years < 41; years += 10) {
  console.log(`In ${years} years you will be ${age + years} years old.`)
}


//6.2 Compute and return the factorial of a number.

function factorial(number) {
  let result = 1;
  for (let counter = number; counter > 0; counter -= 1) {
    result *= counter
  }
return result
  
}



//6.3 

// The condition inside the while loop will always be true. The if statement-limitation belongs
// inside of the conditional of the while loop and not on a separate line.

//6.4 

//The code does not produce an error. 

//6.5

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;


do {
  tries +=1;
  result = randomNumberBetween(1,6)
} while (result <= 2) 

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

*/

//6.6 factorial with recursion


function factorial(number){
  if (number > 1 ) {
  return number * factorial(number - 1)
} else {
  return 1
}
}

console.log(factorial(5))

