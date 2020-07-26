/*
  author: joeldevel
  name: data_types3.js
  usage:
	In the terminal/console run:
		node data_types3.js

	In a web broser:
		First create an index.html file and in the script tag
		(usually located at the bottom of the body tag) point
		the src to this file (notice the path) like this:
  <html>
	.
	.
	.
	<script src="data_types3.js"></script>
	.
	.
 </html>
	Then open the index.html file with a web browser and look up for the
	console (web developer tools or something similar)
*/

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
