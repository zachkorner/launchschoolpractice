//1

//I expect 0-10, inclusive, evens only.

/*

for (let i = 0; i <= 10; i += 2) {
  console.log(i)
}



//2

for (let i = 10; i >= 1; i -= 1) {
  if (i === 1) {
    console.log(i)
    console.log('Launch')
  } else {
    console.log(i)
    
  }
  
}


//3 

let greeting = 'Aloha!'
let i = 0

while (i <= 2) {
  console.log(greeting)
  i += 1
}

for (let i = 0; i < 3; i += 1) {
  console.log(greeting)
}

//3

for (let i = 1; i < 101; i += 1) {
  console.log(i * 2)
}



//4

let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index])
  index += 1
}


//5

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let i = 0; i < cities.length; i += 1) {
  if (cities[i] === null) {
    continue
  }
    console.log(cities[i].length)
  
}


//6

//Without a stopping condition, a loop will loop forever.

for (let i = 0; i < 2; i += 1) {
  console.log("and on");
}



//7

let i = 0

while (i < 40) {
  if (i % 2 !== 0) {
    console.log(i)
  } i += 1
} 

//8

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
let i = 0

while (i < fish.length) {
  if (fish[i] === 'Nemo') {
    break
  } else {
    console.log(fish[i])
  } i += 1
}

*/

//9

//A do...while loop, unlike a while loop, is executed at least once.

//To sharpen this, while loops execute after the code checks the condition.
//Do...while loops execute before the code checks the condition, guaranteeing a single cycle of the loop.

//This code will execute once as a do...while loop and zero times as a while loop.
//The loop will run for values of counter greater than 0 but counter is set to 0.

