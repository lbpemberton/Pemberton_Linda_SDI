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
        console.log("My trip to Nags Head, N.C. and back home took " + parseFloat(tanksUsed) + " tanks of gas.");


    }else{
        //Change miles per tank to match number entered from prompt.

        milesPerTank = prompt("How many miles per tank will this vehicle average?");

        //Verify that an amount is entered in the prompt.
        if (milesPerTank === ""){
            milesPerTank = prompt("Please enter the amount of miles per tank that this vehicle will average:")
        }
        tanksUsed = Number(milesToNagsHead * 2) / milesPerTank;
        console.log("My trip to Nags Head, N.C. and back home took " + parseFloat(tanksUsed) + " tanks of gas.");

    }




}else{
    //Since I am not going to Nags Head, prompt for location of vacation.
    var vacCity     =   prompt("Please enter city of vacation spot:");

    //If user does not enter a City, prompt again for information.
    if (vacCity === ""){

        vacCity = prompt("Oops! You didn't enter the City of vacation spot.  Please enter:");


        var vacState = prompt("Please enter State of vacation spot:");
        if (vacState === "") {


            vacState = prompt("Oops!  You didn't enter the State of vacation spot.  Please enter:");
            //Print result of new vacation destination in console with use of string concatenation.
        console.log("Instead of Nags Head, I will be going to " + vacCity + ", " + vacState + ".")}


        myCar = confirm("Are you driving your Toyota \"Highlander\"? \n Click Ok for yes or Cancel for no.");

        if (myCar === true) {

            var milesToVac = prompt("How many miles to " + vacCity + ", " + vacState + "?");
            if (milesToVac === "") {
                milesToVac = prompt("Make sure you enter the amount of miles to your vacation spot:");
            } else {
                milesToVac = Number(milesToVac * 2) / milesPerTank;
            }

            console.log("This vacation round-trip will require " + milesToVac + " tanks of gas.");

        }else{
            var truck;
            var suv;

            carDriven = confirm("Click OK if truck or suv.  Click Cancel if automobile.")
            if(carDriven === truck || suv);
            console.log("You will use more gas than normal.");


        }


    }





}