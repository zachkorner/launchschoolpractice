//1

//It will log 'hello World'. Whoops!

//It will log undefined. var greeting is hoisted to the top of the code but it is not yet assigned to the string.

//2

//Reference error. Var is hoisted; let is not hoisted.

//3

//Variables declared with let are block scoped. The output will be a ReferenceError.

//4

//It will output 1

//5

//Reference error

//6

// b (in the initialization) !== b (of the if block)
//If we delete the let keyword, then b = true.


//7

//The code logs 1.


//8

//The output is 2.

//9

//It will throw an assignment error 

//10

//Jane Doe. We can mutate individual elements within the object even though
//it is assigned with the const keyword.

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a)