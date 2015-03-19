//alert("This is in the js file");


/**
 Linda Pemberton
 SDI Section 02
 March 18, 2015
 Conditionals Worksheet
 */


/**Add Original example:  Stuff your face I.
 * To get in the heavyweight division of the Strawberry Festival's pie eating contest you must weigh 250 lbs
 * or more.  Determine whether an entrant qualifies based on his weight.
 */
var weight = prompt("How much does entrant weigh in pounds?");   //using a prompted number from user.

if (weight >= 250){ //If the entrants weight is 250 lbs or more, print the following:
    console.log("The competitor qualifies for the heavyweight division.");
}else{              //Given the weight is less than 250 lbs., the following should print:
    console.log("The competitor needs to gain some weight!");
}


//Group 1:  Expressions with Conditionals

//Data set to test is 32F is 0C

//var temp = 32;      //set temp to use at 32 degrees
//var unit = "F";     //set unit to use for temperature at F for Fahrenheit
//Data set to test 100C is 212F

//var temp = 100;         //set temp to use at 100 degrees
//var unit = "C";         //set unit to use for temperature at C for Celsius

//Data set to test if 90F is 32.22C
var temp = 90;          //set temp to use at 90 degrees
var unit = "F";         //set unit to use for temperature at F for Fahrenheit


if (unit === "F"){  //choose equation to use if unit is F
    var fahrenheitToCelsius    = (temp - 32) * 5/9;  //equation for fahrenheit to celsius


    //Print outcome of equation to console.
    console.log("The temperature is " + fahrenheitToCelsius + " degrees Celsius.")


}else{           //choose equation to use if unit is C

    var celsiusToFahrenheit    = ((temp * 9/5) + 32);  //equation for celsius to fahrenheit

    //Print outcome of equation to console.

    console.log("The temperature is " + celsiusToFahrenheit + " degrees Fahrenheit.")

}
/*

 */