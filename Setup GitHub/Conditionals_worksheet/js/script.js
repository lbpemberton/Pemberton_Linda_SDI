//alert("This is in the js file");


/**
 Linda Pemberton
 SDI Section 02
 March 18, 2015
 Conditionals Worksheet
 */

//Group 1:  Expressions with Conditionals

//Data set to test is 32F is 0C


var temp = 32;
var unit = "F";


if (unit === "F"){  //convert Fahrenheit to Celsius
    var fahrenheitToCelsius    = (temp - 32) * 5/9;



    console.log("The temperature is " + fahrenheitToCelsius + " degrees Celsius.")


}else{

    var celsiusToFahrenheit    = ((temp * 9/5) + 32);

    console.log("The temperature is " + celsiusToFahrenheit + " degrees Fahrenheit.")


}