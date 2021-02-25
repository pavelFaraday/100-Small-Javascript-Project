/* JavaScript variables are containers for storing data values.
Before 2015, using the 'var' keyword was the only way to declare a JavaScript variable.

The 2015 version of JavaScript (ES6) allows the use of the 'const' keyword to define a variable that cannot be reassigned, and the 'let' keyword to define a variable with restricted scope. */

/* -------------------------------------------------------------------------- */

//  The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.

// When an HTML document is loaded into a web browser, it becomes a document object. The document object is the root node of the HTML document.

// JavaScript arrays are used to store multiple values in a single variable. You can access the values by referring to an index number.  Array indexes start with 0. [0] is the first element. [1] is the second element and so on.

// The addEventListener() method attaches an event handler to the specified element. In this case we use 'Click' event - when the mouse clicks on an button element, it activates the function.

/* -------------------------------------------------------------------------- */

// The parseInt() function parses a string and returns an integer.
//  Only the first number in the string is returned! 
//  If the first character cannot be converted to a number, parseInt() returns NaN.

/* -------------------------------------------------------------------------- */

// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive).
// Math.random() always returns a number lower than 1.

/* -------------------------------------------------------------------------- */

// The length property sets or returns the number of elements in an array.

/* -------------------------------------------------------------------------- */

// body.style.backgroundColor - Sets a background color for a body element

/* -------------------------------------------------------------------------- */



let button = document.querySelector('button');
let body = document.querySelector('body');
let colors = ['red', 'hsl(125, 28%, 50%)', 'blue', 'rgb(255, 123, 0)', '#b427ad'];

button.addEventListener('click', () => {
    let colorIndex= parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
})
