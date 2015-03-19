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
/**
 * Group 2: Multiple Results
 * Grade Letter Calculator
 * A student earns a number grade at the conclusion of a course at Full Sail.  Determine the appropriate letter
 * grade for that number using conditional statements.
 */
var grade = prompt("Enter your grade as a whole number:"); //Prompt for grade to be used.
var alphaGrade;  //Set variable for Alphabetical grade.

//List the grade scale and what percent qualifies for each Alphabetical grade.

if (grade >= 95){
    alphaGrade = "A+";
}else if (grade >= 90 && grade <= 94){
    alphaGrade = "A";
}else if (grade >= 85 && grade <= 89){
    alphaGrade = "B+";
}else if (grade >= 80 && grade <= 84){
    alphaGrade = "B";
}else if (grade >= 76 && grade <= 79){
    alphaGrade = "C+";
}else if (grade >= 73 && grade <= 75){
    alphaGrade = "C";
}else if (grade >= 70 && grade <= 72){
    alphaGrade = "D";
}else if (grade >= 0 && grade <= 69){
    alphaGrade = "F";
}
//Print the print log to match grade.
console.log("You have a " +grade+ ", which means you have earned a " +alphaGrade+ " in the class!");

/**
 Group 3: Multiple Conditions
 Movie Ticket Price
 */


//Using Conditional logic - Ternary Operators
var movieTime   = 6;    //input variable for movie time
var age         = 55;   //input variable for ticket holder's age
var price;              //var name for conclusion.

//Using Ternary operator to determine ticket price of $7 or $12:

price = ((age < 10) || (movieTime <= 5) || (age >= 55)) ? "$7.00" : "$12.00";
//Print result to log:
console.log("The ticket price is " +price+ ".");

