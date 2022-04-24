//1

//We can change the parameter from greeting to greeting = "Hello"

//2

/*

}
greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School');



//3

function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}


function greet() {
  console.log(greeting())
  console.log(recipient())
}

greet()




//4

let calculateBMI = (height, weight) => {
  let heightinMeters = height/100
  console.log(weight / heightinMeters**2)
}

calculateBMI(180,80)



//5

let catAge = age => {
  switch (age) {
    case 0:
      return 0
      break;
    case 1:
      return 15
      break;
    case 2: 
      return 24
      break;
    default:
      return (age - 2) * 4 + 24
      
  }
}

console.log(catAge(0))
console.log(catAge(1))
console.log(catAge(2))
console.log(catAge(3))
console.log(catAge(4))
console.log(catAge(10))



//6

function removeLastChar(string) {
  console.log(string.slice(0,string.length - 1))
}

removeLastChar('Bye')
removeLastChar('Sweet uncle Lou')



//7

//refactor w/ arrow syntax

const template = 'I VERB NOUN.';

let sentence = (verb, noun) => {
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}

console.log(sentence('like', 'birds'));
// logs: I like birds.

*/

//8


let initGame =() => {
  return {
    level: 1,
    score: 0
  }
};

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);