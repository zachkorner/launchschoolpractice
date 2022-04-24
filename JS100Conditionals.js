//1 

//Falsy values include 0, null, undefined and an empty string - also NaN.

//After checking the MDN documentation, it appears that -0 is also falsy.

//2
/*
let randomNumber = Math.round(Math.random())

if (randomNumber) {
  console.log('randomNumber is equal to 1')
} else {
  console.log('randomNumber is equal to 0')
}



//3 

let randomNumber = Math.round(Math.random())

console.log(randomNumber ? 'Yes' : 'No')



//4

let weather = 'fog'

if (weather === 'sunny') {
  console.log('Its a beautiful day')
} else if (weather === 'rainy') {
  console.log("Its rainy")
} else {
  console.log('stay inside')
}

switch (weather) {
  case 'sunny':
    console.log("its sunny");
    break;
  case 'rainy':
    console.log('its rainy');
    break;
  default:
    console.log("stay inside")
}

*/

//5

// the output of the code will be 'neigh' 'tweet tweet' 'cricket'. The lack of break statements
//triggers a chain reaction down the switch block.

//6

//Already did this.

//7

//The output will always be 'yes'. Since a boolean is evaluated to either true or false.

//8

//I got this one wrong.

//The && operator requires two truthy values. Since false is never truthy, && is never truthy.

//9

//3.99

//10

/*
Lets evaluate the parentheses first. Since acceleration is above zero, this || expression
evaluates as true. accelerator && true is true since accelerator is truthy. I'm struggling
with understanding the less than bit. How can a value be less than a truthy value? My guess is 
that the code outputs true since accelerator > braking speed.

Bonus: yes we do need the parentheses since && enjoys precedence over ||. 

*/


