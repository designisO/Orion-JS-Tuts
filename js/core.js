console.log('Core Objects in JavaScript');

// Arrays: Store multiple vlaues in a single variable.
// two keywords: Array and new
var courses = new Array("HTML", "CSS", "JS");
console.log(courses[1]);

var courses = ["HTML", "CSS", "JS"];
console.log(courses.length);


// combining arrays : using the concat keyword.
var c1 = ["HTML", "CSS", "JS"];
var c2 = ["Python", "R", "Next.js"];

var courses = c1.concat(c2);
console.log(courses);


// Associative Arrays, index numbers are replaced with strings.

var person = []; // empty array
person["name"] = "Orion";
person["age"] = 37;
console.log(person["age"]);



// The Math Object
console.log(Math.PI);
console.log(Math.E);

var number = Math.sqrt(4);
console.log(number);


 // Using a prompt to get the math square root

var n = prompt("Enter a number" , "");
var answer = Math.sqrt(n);
alert("The square root of " + n + " is " + answer);


// Setting interval() method calls a function or evaluates a expression at specified intervals in milliseconds. It will continue calling the function unti clearInterval() is called or the window is closed.

function myAlert() {
    alert("Greetings, Orion made this JS tuts");
}
setInterval(myAlert, 8000);



// The Date Object
var d =  new Date();

// creating a program that prints the current time to the browser every second.
function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.body.innerHTML = hours + ":"+ mins + ":"+ secs;
}
setInterval(printTime, 1000);



// Quiz 6.

var fruits = new Array("pear", "orange", "apple", "grapefruit");
alert(fruits[2]);

alert(Math.sqrt(36)); // answer 6

var date = new Date();
alert(date.getMinutes());
