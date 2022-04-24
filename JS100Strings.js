//1

// console.log("These aren't the droids you're looking for.".length)

//2

// console.log('confetti floating everywhere'.toUpperCase())

//3
/*

let repeat = (number, string) => {
  let repetitions = ''

  while(number > 0) {
    repetitions += string;
    number -= 1
  }
  return repetitions
}

console.log(repeat(3,'yes'))


//4

let singleLine = 'A pirate I was meant to be! \n Trim the sails and roam the sea!'

console.log(singleLine)


//5

function checkEqual(string1,string2) {
  let string1Lower = string1.toLowerCase()
  let string2Lower = string2.toLowerCase()
  if (string1Lower === string2Lower) {
    console.log('its a match')
  } else {
    console.log('its not a match')
  }
}

checkEqual('Polar', 'plar')


//6

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu'

console.log(byteSequence.includes('x'))


//7

let isBlank = string => {
  if (string) {
    console.log(true)
  } else {
    console.log(false)
  }
}



//8

let isBlank = string => {
  console.log(string.trim().length === 0)
}

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true
*/
//9


function titleCase(string) {
  let newArray = string.split(' ')
  for (i = 0; i < newArray.length; i += 1) {
    newArray = newArray[i][0].toUpperCase()
    newArray.join(',')
  }
return newArray
}

myString = 'my three little bears'

myArray = myString.split(' ')

console.log(myArray)