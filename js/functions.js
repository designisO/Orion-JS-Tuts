// JavaScript Functions: can take parameters which are the names listed in the functions definition.

console.log("JavaScript Functions")

function hello() {
    alert("Welcome to Functions");
}
hello();


function sayHello(name) {
    alert("Greetings, " + name);
}
sayHello("Orion");
sayHello("Micah");
sayHello("Nyla");





function myAlert(txt){
    alert("Peace to you " + txt);
}
myAlert("User");





function test(x,y){
    if (x>y){
        document.write(x);
    }
    else{
        document.write(y);
    }
}
test(5,8);


// Function can have a n optional return statement. It is used to return a value from the function.
    // The return statement is placed at the end of the function description.


function addNumbers(a, b) {
    var c = a+b;
    return c;
}
document.write( addNumbers(40, 2));




// The Alert Box: used when you want to ensure that info gets through to the user. User must press OK to continue. 
alert("You now have learned about the alert box if you see this! Keep going.")

// The Prompt Box: used to have the user input a value before entering a page.
var user = prompt("Please enter your name");
alert("Greetings, " + user);

// The confirm box is often used to have the user verify or accept something.
var result = confirm("Do you really want to learn JavaScript");
if (result == true) {
    alert("Thanks keep the studies going");
}
else {
    alert("Nah...you can't give up like that! ");
}


// Quiz 4

function test(number)
{
    while(number < 5) {
        number ++;
    }
    return number;
}
alert(test(2));




function multNmbrs(a, b) {
    var c = a * b;
}
multNmbrs(2, 6); // Nothing is the answer for this one. Values a & b aren't declared.


function test(a, b){
    if(a < b) {
        return a * b;
    } else {
        return b / a ;
    }
}
alert(test(5,15)); // Answer is 3.

