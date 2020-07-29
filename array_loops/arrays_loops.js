/*
  author: joeldevel
  name: data_types.js
  usage:
	In the terminal/console run:
		node arrays_loops.js

	In a web broser:
		First create an index.html file and in the script tag
		(usually located at the bottom of the body tag) point
		the src to this file (notice the path) like this:
  <html>
	.
	.
	.
	<script src="arrays_loops.js"></script>
	.
	.
 </html>
	Then open the index.html file with a web browser and look up for the
	console (web developer tools or something similar)
*/
// An array is a sequence of elements
let primitiveDataTypes = [
    'number',
    'string',
    'boolean',
    'undefined',
    'null'
  ];

// Each element has an index. We can access any element
// in an array using that index starting ar 0 using []
// after the array name
console.log( primitiveDataTypes[0] );

// An array knows how many elements it holds

console.log( primitiveDataTypes.length );

// And we can use that information to traverse the entire array
// with the help of a foor loop
for( let i = 0; i < primitiveDataTypes.length; i++ ) {
  console.log( `${primitiveDataTypes[i]} is a primitive data type` );
  console.log(
    `Is i (${i}) < primitiveDataTypes.length (${primitiveDataTypes.length})?`,
    `${i < primitiveDataTypes.length}`
  );
}
//let i = 0 initializes a variable used as counter
// i < primitiveDataTypes.length tells the loop: keep doing
// your job ( the statements inside the {} ) while i is less than
// primitiveDataTypes array length.
// i++ means increment the i by one at the end of each loop (after executing
// the logic inside the loop's body)
// Inside the loop we can make whatever we want, in this case we're
// just logging out each array's element passing as index the i variable
// whichs starts at 0 and is incremented up to the array's length, when i is equal
// to primitiveDataTypes.length the conditon i < primitiveDataTypes.length is false
// so the loop ends.
