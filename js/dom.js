console.log("This is the DOM studies");

// Document Object Model : When you open a webpage in the browser, the HTML is loaded and rendered visually having a DOM built. 

// DOM Tree : Represents a document as a tree structure.

document.body.innerHTML = "Working with JavaScript";


// Selecting HTML elements

// finds elements by id
document.getElementById(id);

// finds elements by class name
document.getElementsByClassName(name);

// finds elements by tag name
document.getElementsByTagName(name);


// Working with DOM
// childNodes = return array of an element's child node
// firstChild = returns the first child node of an element
// lastChild = returns the last child node of an element
// hasChildNodes = returns true if an element has any child node, otherwise false.
// nextSibling = returns the next node at the same tree level.
// previousSibling - returns the previous node at the same tree level.
// parentNode - returns the parent node of an element.

