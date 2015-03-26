//alert("This file is connected!");

/**
 Linda Pemberton
 SDI Section 02
 Functions Worksheet
 March 24, 2015
 */

//CIRCUMFERENCE using Anonymous Functions

//Calculate the circumference of a circle. - Functions, Arguments, Parameters, and Returning Values.


//Using Anonymous Function:
var circleTotal = function(radius){        //Using this argument to send to parameters below:


    //Parameter to be used for calculation.  Code the function runs:
    var circumference = 2 * radius * Math.PI;   //Variable for calculation needed.



    return circumference;                       //Return for variable set as circleTotal.
}
var circle              = circleTotal(8);       //Invoking into circumference.
console.log("The circumference of the circle is " + circle + ".");   //Console.log prints the return from
// c





