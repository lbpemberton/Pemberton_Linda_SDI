//alert("JS is connected!");

/**
 Linda Pemberton
 SDI Section 02
 March 23, 2015
 Functions Screencast Practice
 */

//Functions - Variable Scope
function outptMsg(){
    console.log("Hello World");
}
//Understanding where the variables go is very important.  This variable is outside
//of the function:

var width       =   5;

function calcArea(){
    var width   =   20;
    var height  =   30;
    var area    =   width * height;
    //console.log(area);
}
//This is considered invoking your function:
calcArea();  //This will not print anything because console.log is commented out.

console.log(width);  //This is going to print variable outside of function because
//we are not invoking the function.
