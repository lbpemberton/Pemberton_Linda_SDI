//alert("This file is connected!");

/**
 Linda Pemberton
 SDI Section 02
 Functions Worksheet
 March 24, 2015
 */

//  STUNG!


//  Calculate the amount of bee stings to kill an animal. - Functions, Arguments, Parameters, and Returning Values.

//Anonymous Functions

//Using the var totalStings = var listed below "stings" used to invoke.

var totalStings     = function(weight){     //defining the function on this line.  Use this argument.
    var calcStings  = 8.666666667 * weight; //Parameters ran with argument.
    return calcStings;                      //Return to  totalStings function
}

var stings          = totalStings(150);     //Invoking into function above.

console.log("It takes " + stings + " bee stings to kill this animal."); //Print function outcome with weight used.




