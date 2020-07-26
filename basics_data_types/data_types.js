/*
  author: joeldevel
  name: data_types.js
  usage:
	In the terminal/console run:
		node data_types.js

	In a web broser:
		First create an index.html file and in the script tag
		(usually located at the bottom of the body tag) point
		the src to this file (notice the path) like this:
  <html>
	.
	.
	.
	<script src="data_types.js"></script>
	.
	.
 </html>
	Then open the index.html file with a web browser and look up for the
	console (web developer tools or something similar)
*/


// There are five primitive data types in JavaScript:
//  - number ; 1, 1.0, -200
//  - string ; "hello", 'hello'
//  - boolean; just two possible values: true, false
//  - undefined; this means not existence of something
//  - null; this means nothing or absence of value, but existence of the thing
// Any other thing is an object

// Let's see some examples.
// typeof is an operator that returns the type of the argument passed to it
// so can be called like this typeof( whatever ) or like this typeof whatever

let variable = 'This should be a string';

console.log( "*****\tData types in JS" );
console.log( typeof(variable) );

variable = 2;
console.log(typeof variable);

variable = true;
console.log(typeof variable);

// anotherVariable is declared but not initialized
let anotherVariable;
console.log(typeof anotherVariable);

// type of null is object,no null (?) See MDN to know why
console.log(typeof null );

// Now some generalities.
// Generally speaking the objects we create when creating variables have properties and methods
//  available to be used,
// as example a string can be  'modified' to be all capital letters or we can tell the quantity
// of characters it has.
// Primitive data-type objects can be compared to each other to obtain a boolean value

// Let's see some examples
let someString = "How many characters do i have?";
console.log( "\n*****\tUsing methods and properties" );
console.log( someString.length ); // lenght is a property of a string object
console.log( someString.toUpperCase() ); // toUpperCase() is a method of a string object;
console.log( someString.startsWith('H') ); // startsWith() return either true or false

let anotherString = "how many characters do i have?";

console.log( someString === anotherString ); //This should be false because of the caps
console.log( someString.toLowerCase() === anotherString.toLowerCase() ); // but this should be true

// Comparing two string using === operator. this checks value and type because
// comparing using == in JS can yield true after casting types. e.g
//  10 == '10' would be true but 10 === '10' would not.
console.log('\n*****\tComparing');
console.log( 10 == '10' ); // true
console.log( 10 === '10' ); //false
