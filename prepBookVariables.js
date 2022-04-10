//2.3

//The program will throw an error because foo is out of scope.

//2.4

// It returns Good Morning/Afternoon/Evening Victor on separate lines.
// Then it throws an error for NAME = 'Joe' as constants do not permit reassignment.


//2.5 It returns 'bar' since let foo = 'qux' is outside of scope. 
//However if we eliminate the second let (ie. the one within the block),
// then the console logs 'qux'. Foo is declared globally but changeable globally and locally.

//2.6 No it will not. Since the second reassignment is out of scope, JavaScript
// will effectively ignore it.