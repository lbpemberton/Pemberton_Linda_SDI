alert("This is in the js file");

/**
 Linda Pemberton
 March 12, 1015
 SDI - Section 02
 Expressions Assignment
 */

//Establish variables
var foster          = "foster children";                //Name what you love to do.
var ages            = [3, 1, 15, 13, 16, 17, 4, 6, 18]; //List ages of children fostered in array.
var female          = 5;                                //List total females fostered.
var male            = 4;                                //List total males fostered.
var totalAges       = ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] +
                    ages[8];                            //Add ages of children fostered.
var totalChildren   = female + male;                   //Add total number of children fostered.
//Number(totalChildren) ;                     //Divide ages of children by number fostered to get average.

var avgChildren = totalAges / totalChildren;

var youngestChild, oldestChild, countyLicense;          //Establish variable names for prompts.




//Establish prompts
youngestChild       = prompt("Please enter youngest child's name:");  //Prompt name for youngest child.

oldestChild         = prompt("Please enter oldest child's name:");    //Prompt name for oldest child.

countyLicense       = prompt("What county do you foster in?");        //Prompt name of County fostered in.




//Establish output
console.log("I love to " + "foster"  + " in " + countyLicense + "."); //Print what this is about and where it took
// place.

console.log("I fostered a variety of ages from " + ages[1] + " to "+ ages[8] + ".  Total ages of children are "
+ totalAges + ".  The average age of children fostered was " + totalChildren + ".");


