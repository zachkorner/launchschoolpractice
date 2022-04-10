//5.1

/*

false || (true && false); FALSE
true || (1 + 2); TRUE
(1 + 2) || true; 3
true && (1 + 2); 3
false && (1 + 2); FALSE
(1 + 2) && true; TRUE
(32 * 4) >= 129; FALSE
false !== !true; FALSE
true === 4; FALSE
false === (847 === '847'); TRUE
false === (847 == '847'); FALSE
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; TRUE



//5.2

function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log('even')
  } else {
    console.log('odd')
  }
}



//5.3

function evenOrOdd(number) {
  if (Number.isInteger(number)) {
    if (number % 2 === 0) {
      console.log('even')
    } else {
      console.log('odd')
    }
  } else {
    console.log('Please enter an integer.')
  }
}

evenOrOdd(6)
evenOrOdd(7)
evenOrOdd(5.4)



//5.4

//The code logs Product 2 Product 3 Product not found. For the desired output,
// break statements must be added in each case.

//5.5

if (foo()) {
  return 'bar'
} else {
  return qux()
}



//5.6

// 'Not empty'. While an empty string is falsy, an empty array is truthy in JavaScript.

//5.7 return all caps if length > 10, else return original string

function allCaps(string) {
  if (string.length > 10) {
    return string.toUpperCase()
  } else {
    return string
  }
}

*/

//5.8

function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 50 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}
numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);