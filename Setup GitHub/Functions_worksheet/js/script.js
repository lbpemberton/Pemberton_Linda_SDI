//alert("This file is connected!");

/**
 Linda Pemberton
 SDI Section 02
 Functions Worksheet
 March 24, 2015
 */

//CIRCUMFERENCE

//Calculate the circumference of a circle. - Functions, Arguments, Parameters, and Returning Values.

var circleTotal       = circleCircum(9);        //Using this argument to send to parameters below:

function circleCircum(radius) {                 //Parameter to be used for calculation.
    var circumference = 2 * radius * Math.PI;   //Variable for calculation needed.



    return circumference;                       //Return for variable set as circleTotal.
}

console.log("The circumference of the circle is " + circleTotal + ".");   //Console.log prints the return from
// circleCircum function.





