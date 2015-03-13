
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





//Add Expression Problem - Average Shopping Bill

var groceryBills =[92, 112, 104, 83 ,96]; //Array of 5 weekly grocery bills.



var totalSpent = groceryBills[0] + groceryBills[1] + groceryBills[2] + groceryBills[3] + groceryBills[4]; //Add array of numbers

var average = totalSpent / 5;  // Divide array by 5


//Print total of array and average of numbers within the array.

console.log ("You have spent a total of " + totalSpent + " on groceries over 5 weeks.  That is an average of " + average + " per week.");




//Add Expression Problem - Discounts

var purchase    = "dryer";       // Name variable of item to be purchased.
var dryer       = 800;           // Number variable for Original price of dryer.

var tax       = .075;          //tax percentage

const salePercent = .20;        //Set sale percentage.

var discount    = dryer * salePercent ;//Calculate number percentage at 20% of dryer cost for discount.
var salePrice   = dryer - discount;     //Subtract discount from cost of dryer.
tax         *= salePrice;       // tax new sale price.
var totalDue    = salePrice + tax;  //Sale Price plus tax.



//Print above variables in sentence.

console.log ("Your " + purchase + " was originally $" + dryer + ", but after a  " + salePercent + "% discount, it is \n"
+ " now $" + salePrice + " without tax, and $" + totalDue + " with tax.");







































