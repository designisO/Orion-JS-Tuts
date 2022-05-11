// JavaScript Conditionals

console.log("JavaScript Conditionals")


// if statements
if ( var1 > var2 )
{
    document.write("OK");
}


// The else Statement
if ( var1 > var2 )
{
    document.write("OK");
}
else {
    document.write("NO  WAY");
}


// The else if Statement
var status = 1;
var msg;

    if (status == 1) {
        msg = "Online";
    }
    else if (status == 2){
        msg = "Away";
    }
    else {
        msg = "Offline";
    }

document.write(msg);


// Switch : statement to perform different actions based on different conditions. These are used to replace multiple if else statments. You can have only "One" case statement for each possible answer.
// Break: Essentially switches the switch statement off.
// Default: Which specifies the code to run if there's no case match.

switch (day_of_week) {
    case 1:
    case 2:
    case 3:
    case 4: 
    case 5:
        document.write("Working Days");
        break;
    case 6:
        document.write("Saturday");
        break;
    default:
        document.write("Today is Sunday");
        break;
}



// Loops: Three types of loops: for, while, and do while.
// The classic "for" loop consist of 3 components.

var i = 1;
    for (k = 1; k < 10 ; k ++) {
        i += k;
    }



var x = 0;
    for(; x <= 20; x += 2){
        document.write(x);
    }



var x = 0;
while(x<6) {
    x++;
}
document.write(x);


do {
    document.write(i);
    i++;
}
    while (i < 10);





