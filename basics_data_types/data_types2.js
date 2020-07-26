/*
  author: joeldevel
  name: data_types2.js
  usage:
	In the terminal/console run:
		node data_types2.js

	In a web broser:
		First create an index.html file and in the script tag
		(usually located at the bottom of the body tag) point
		the src to this file (notice the path) like this:
  <html>
	.
	.
	.
	<script src="data_types2.js"></script>
	.
	.
 </html>
	Then open the index.html file with a web browser and look up for the
	console (web developer tools or something similar)
*/
// Strings
// We can concatenate strings using the + operator
console.log('\n*****\tStrings');
let firstName = 'George';
let lastName = 'Policletus';
let fullName = firstName + ' ' + lastName;
console.log( 'full name : ', fullName);
// If a string resembles a number, and we try to operate over it like if it were
// a number, JS will try to convert it to a number.
let aStringNumber = '199';
console.log('aStringNumber is a ', typeof aStringNumber, ': ', aStringNumber);
// treat it like a number
aStringNumber -= 99;
console.log('Now aStringNumber is a ', typeof aStringNumber, ': ', aStringNumber);

// There are some special characters, the most common are \n , \t , \' , \" ,\\
// The backslash prevents the normal meaning of the character, giving it another
// is called scape character. \n means new line, \t tab, \' and \" are
// single and double quotes ( used inside of a string if
// we need to print those characters) the \\ prints a backslash
let escapeChars = "This is a text:\n\tand \"this is a quote\" using '\\' to escape chars";
console.log( escapeChars );

// One more thing, there is a way of creating strings called template literals
// We can put values inside a string without using the + operator
// The string must be surrounded by `` ( back-tick)
let someText = 'John';
let someValue = 'Scorsese';
let templateLiteral = `User info = ${someText} ${someValue}, age ${ 23 * 3}`;
console.log( templateLiteral );
// And we can make a multiline string without using \n
let multilineString = `- Hello?
- Hello
- ...
- Good Bye!
- Bye!
`;
console.log( multilineString );



// *** Number operations
// +  add
// -  minus
// *  multiply
// /  divide

console.log('\n*****\tNumber operations');
let x = 1, y = 1.9;
console.log('1 + 1.9 = ', x + y);
console.log('1 - 1.9 = ', x - y);
console.log('1 * 1.9 = ', x * y);
console.log('1 / 1.9 = ', x / y);

// but there are some 'numbers' like NaN which are yield when
// trying to perform an operation on a non-numeric object
let whatIsThis = 10 * 'xyz';
console.log( whatIsThis ); // prints NaN, which turns to be of type number
console.log( typeof whatIsThis );
