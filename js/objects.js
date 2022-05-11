
console.log("JavaScript Objects")
console.log("Please be sure to study OOP because it will help in the long run.")

// Objects are variables too, but they contain many values. These values are called properties.

var person =  {
    name: "John",
    age: 31,
    favColor: "green",
    height: 183
};


// Creating Objects
// An Objects name and property name is necessary in order to use info contained with an object.

var p1 = new person("John", 42, "green");
var p2 = new person("Amy", 33, "yellow");

document.write(p1.age);
document.write(p2.name);


function person (name, age) {
    this.name = name;
    this.age = age;
}

var John = new person("John", 25);
var James = new person("James", 21);



// Methods are functions that are stored as object properties
//"this" keyword in the method means the current object

function person(name, age) {
    this.name = name;
    this.age = age;
    this.yearOfBirth = bornYear;
}
function bornYear() {
    return 2016 - this.age;
}



// Quiz 5.

function mathCalc (height, weight) {
    this.height = height;
    this.weight =  weight;
    this.sampleCalc = calculate;
}


// An object properties are similar to variables; methods are similar to FUNCTIONS.

// What is the result of the following expression?
var myString = "abcdef";
document.write(myString.length); // answer is 6.

