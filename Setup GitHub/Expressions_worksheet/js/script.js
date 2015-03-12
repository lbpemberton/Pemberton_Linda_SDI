
/**
*Linda Pemberton
*March 9, 2015
*Expressions Worksheet

*/

//alert("JavaScript works!"); Testing connection to html file.


var actualAge = 3;      //Number variable for Sparky's age in human years.

const dogYears = 7;     //Establish constant of dog years.


var dogAge = actualAge * dogYears;  //Variable to multiply actual age times dog years.

console.log ("Sparky is " + actualAge + " human years old which is " + dogAge + " in dog years.");
//Print result of Sparky's actual age and what that calculates to in dog years.


//Add Expression Problem - Slice of Pie Part I PEMDAS

const slicesPerPizza  = 8;    //Number variable of slices per pizza.
var partyPeople     = 24;   //Number variable of  people at party.
var piesOrdered     = 11;    //Number variable of pizza pies ordered.

var slicesAvailable = slicesPerPizza * piesOrdered ; //Number variable equation to determine
                            //total slices eaten.
var slicesEaten     = slicesAvailable / partyPeople;

//Print total of slices eaten per person.
console.log ("Each person ate " + slicesEaten + " slices of pizza at the party.");


//Add Expression Problem - Slice of Pie II

var sparkysPortion = slicesAvailable % partyPeople;  //Number variable equation to determine remainder.


//Print total of whole slices left over after calculating how many whole slices could be given to people.
console.log ("Sparky got "  + sparkysPortion + " slices of pizza.");





































