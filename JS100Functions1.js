//1

/*

function sum(x,y) {
  return x + y

}



//2

console.log("Always bet on JavaScript")

The return value of console.log() is undefined.



//3

function cite(author, quote) {
  console.log(`${quote} - ${author}`)
}

cite('Brendan Eich', 'Always bet on JavaScript.')



//4

function squares(x) {
  return x**2
}



//5

//No output. The function call is missing parentheses (and is never really called.)

//6

function compareByLength(string1,string2) {
  if (string1.length < string2.length) {
    console.log(-1)
  } else if (string1.length > string2.length) {
    console.log(1)
  } else {
    console.log(0)
  }
}


compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0


//7

let string = 'Captain Ruby'

console.log(string.replace('Ruby', 'JavaScript'))

console.log('Captain Ruby'.substring(0,8) + 'JavaScript')




//8

function greet(code) {
  switch (code) {
    case 'en':
      console.log('hello')
      break
    case 'yi':
      console.log('shalum aleychem')
      break;
    case 'he':
      console.log('shalom')
      break;
    case "fr":
      console.log("bonjour")
      break;
    case 'du':
      console.log('halo')
  }
}



//9

let extractLanguage = (string) => {
  console.log(string.split('_')[0])
}


extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'



//10

let extractRegion = (string) => {
  console.log(string.split('_')[1]
                    .split('.')[0])
}

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'



*/

//11

function localGreet(locale) {
  let abbrev = locale.split('_')[1].split('.')[0]
  switch (abbrev) {
    case 'US': return 'Hey'
    case 'FR': return 'Bonjour'
    case 'GB': return 'Hello'
    case 'AU': return 'Howdy'
  }
  }




console.log(localGreet('en_US.UTF-8')); 
console.log(localGreet('en_GB.UTF-8')); 
console.log(localGreet('en_AU.UTF-8')); 