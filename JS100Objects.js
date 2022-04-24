//1
 /*
let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

let studentCourses = student.courses
console.log(studentCourses)


//2

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};

console.log(jane.location.country)


//3

let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

fido.age = 7
fido['favorite food'] = 'steak'



//4


let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  greet: function(name) {
    console.log(`Hej ${name}!`)
  },
  occupation: 'engineer',
  // add code here
};

jane.greet('Bobby')



//5

//This problem relies on the difference between dot and bracket notation.
//Dot notation returns prefix.
//Bracket notation returns the value assign to prefix, in our case, 'Indian'.

//6

//All key names are string. So true is really 'true' and never === to true.

//7

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let vehicleKeys = Object.keys(vehicle)
console.log(vehicleKeys)


//8

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};



let nestedPerson = Object.entries(person)
console.log(nestedPerson)




//9

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let person = {}

for (let i = 0; i < nestedArray.length; i += 1) {
  let pair = nestedArray[i]
  person[pair[0]] = pair[1]
}

console.log(person)



//10

function clone(obj) {
 return Object.assign({}, obj)
}

*/