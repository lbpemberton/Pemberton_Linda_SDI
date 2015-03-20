//alert("Confirmed js file is connected!");

/**
 Linda Pemberton
 SDI Section 02 week 3
 March 19, 2015
 Conditionals Assignment
 */

var cityState       = "Wilmington, NC";         //String variable of city and state.
var milesPerTank    = 396;                      //Number variable of miles to tank of gas.
var myCar           = "Toyota \"Highlander\"";  //String variable with escapes of type vehicle driven.
var milesToNagsHead = 418;                      //Number variable of miles from Wilmington to Nags Head.
var favVacNagsHead  = true;                     //Boolean that favorite vacation spot is Nags Head, NC.

//Output above variables to console.
console.log("I live in " +cityState+ ".");
console.log("My " +myCar+ " averages " +milesPerTank+ " miles per tank.");
console.log("It is " +milesToNagsHead+ " miles to Nags Head, NC.");
console.log("It is " +favVacNagsHead+ " that my favorite vacation spot is Nags Head!");

//Confirm main statement with string message:
favVacNagsHead      = confirm("Are you still planning your vacation in Nags Head, NC?\nPlease click OK for yes" +
" or Cancel for no.");

if (favVacNagsHead === true){

    //Code to run if the vacation is going to be in Nags Head, NC.
    var carDriven     = confirm("Are you driving the " +myCar+ " ?");

    if (carDriven === true){                    //If car being driven is true.

    //Print affirmation that the car being driven is myCar.
    console.log("I will be taking my " +myCar+ " to Nags Head, N.C. for vacation.");

        var tanksUsed = Number(milesToNagsHead * 2) / milesPerTank;
        console.log("My trip to Nags Head, N.C. and back home took " + parseFloat(tanksUsed) + " tanks of gas.")






    }




}


