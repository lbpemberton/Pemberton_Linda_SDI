//alert("This file is connected!");

/**
 Linda Pemberton
 SDI Section 02
 Functions Worksheet
 March 24, 2015
 */

//  STUNG!
    

//  Calculate the amount of bee stings to kill an animal. - Functions, Arguments, Parameters, and Returning Values.

//  Returning Values

//Using the var totalStings = function victimsWeight
var totalStings     = victimsWeight(150);   //Using these arguments to send to parameters below:

function victimsWeight(weight){             //Assign function name and assign parameter.

    var calcStings  = 8.666666667 * weight;  //Parameters ran for function outcome.

    return calcStings;  //Function is invoked on line 17.  Variable is setup as totalStings.
}

console.log("It takes " + totalStings + " bee stings to kill this animal."); //Print return from function.                      //Invoking function above. Print above given parameters and arguments.








