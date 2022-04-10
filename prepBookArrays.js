//7.1 

/*
let array1 = [1, 2, undefined, 4]; LENGTH = 4

let array2 = [1]; LENGTH = 5
array2.length = 5;

let array3 = []; LENGTH = 0
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5]; LENGTH = 3
array4.length = 3;

let array5 = []; LENGTH = 101
array5[100] = 3;



//7.2

let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

evenValues = myArray.filter(number => number % 2 === 0)

console.log(evenValues)



//7.3

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (let i = 0; i < myArray.length; i += 1) { 
  for (let j = 0; j < myArray[i].length; j += 1) {
    if (myArray[i][j] % 2 === 0) {
      console.log(myArray[i][j])
    }
  }


}



//7.4

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let stringOddEven = myArray.map(number => {
  if (number % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
})

console.log(stringOddEven)



//7.5

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(array) {
  return array.filter(item => Number.isInteger(item))
  }

console.log(findIntegers(things))



//7.6

function transform(array) {
  let lengths = array.map(item => item.length)
  let oddLengths = lengths.filter(item => item % 2 === 1)
  return oddLengths
}



myArray = ['Joe', 'Nick', 'Steve']

myArrayLengths = myArray.map(item => item.length)

console.log(transform(myArray))




// 7.7 Use reduce to compute the sum of squares of an array.

myTestArray = [3,5,7]

let sumOfSquares = myTestArray.reduce((accumulator, element) => accumulator + (element ** 2), 0)

console.log(sumOfSquares)

*/

//7.8



//7.9

/*

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(numbers3.filter(num => num === 3))

function isThree(array){
  if (String(array.filter(num => num === 3))) {
    return 'yes'
  } else {
    return 'no'
  }
  }



console.log(isThree(numbers1))
console.log(isThree(numbers2))
console.log(isThree(numbers3))



//7.10

let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr[1][3] = 606

console.log(arr)

*/

