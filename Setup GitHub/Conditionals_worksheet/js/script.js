//alert("This is in the js file");


/**
 Linda Pemberton
 SDI Section 02
 March 18, 2015
 Conditionals Worksheet
 */

//Group 1:  Expressions with Conditionals

//Data set to test is 32F is 0C

//var temp = 32;      //set temp to use at 32 degrees
//var unit = "F";     //set unit to use for temperature at F for Fahrenheit
//Data set to test 100C is 212F

var temp = 100;         //set temp to use at 100 degrees
var unit = "C";         //set unit to use for temperature at C for Celsius


if (unit === "F"){  //choose equation to use if unit is F
    var fahrenheitToCelsius    = (temp - 32) * 5/9;  //equation for fahrenheit to celsius


    //Print outcome of equation to console.
    console.log("The temperature is " + fahrenheitToCelsius + " degrees Celsius.")


}else{           //choose equation to use if unit is C

    var celsiusToFahrenheit    = ((temp * 9/5) + 32);  //equation for celsius to fahrenheit

    //Print outcome of equation to console.

    console.log("The temperature is " + celsiusToFahrenheit + " degrees Fahrenheit.")


}