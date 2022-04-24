//1

function returnFirst(array) {
  return array[0]
}
//It would return undefined.

//2 

function returnLast(array) {
  return array[array.length - 1]
}

//It would return undefined.

//3 

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion']

energy.shift()
energy.push('geothermal')


//4

let alphabet = 'abcdefghijklmnopqrstuvwxyz';

alphabet.split('')

//5

let scores = [96, 47, 113, 89, 100, 102];

let counter = 0

for (let i = 0; i < scores.length; i += 1) {
  if (scores[i] >= 100) {
    counter += 1
  }
}

//6

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// for (let i = 0; i < vocabulary.length; i += 1) {
//   for (let j = 0; j < vocabulary[i].length; j += 1) {
//     console.log(vocabulary[i][j])
//   }
// }

//7


let array1 = [2, 6, 4];
let array2 = [2, 6, 4];



//This is weird. Before looking at the answer I'm not so sure. I have a couple of ideas.

//1 array1 and array2 have different memory address
//2 the comparison operator compares all of array1 to the first element of array2 and returns false

//I was right, it was a memory issue.

//8

function filter(input) {
  return Array.isArray(input)
}

//9
let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(city, array) {
  return array.includes(city)
}


//10

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

let passcodeJoined = passcode.join('-')
console.log(passcodeJoined)


