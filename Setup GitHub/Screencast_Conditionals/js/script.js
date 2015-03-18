/**
 * Linda Pemberton
 * March 14, 1015
 * SDI Screencast Conditionals
 */


//alert ("Javascript works!");  //Verified link between .js file and .html file worked!


/**
 * Basic Conditional Statement Video
 * Videos - Conditional Logic Concepts & Logic Concepts
 */

//Conditional statement / code.  If beach is sunny, we will go.
//Added Conditional code within the code. Add temperature variable.

var sunny = true;      //Set boolean value of whether it is sunny or not.


if(sunny === true) {        //If it is sunny, the below conditional statement will run and print.

    goToTheBeach = ("We will go to the beach today!"); //Establish string for goToTheBeach.
    console.log(goToTheBeach);
    var temp = prompt("Please enter the temperature:"); //Use prompt for current temperature from user.



    if(temp > 70){

        goToTheBeach = "We will go to the beach since it is sunny and " + parseFloat(temp) + " degrees.";  //Print comment
        //responding to sunny and over 70 degrees.
        console.log(goToTheBeach);

    }else{
        goToTheMovies = ("We will go to the movies today!");  //Establish string for goToTheMovies.
        console.log (goToTheMovies);  //Print answer to console if it isn't sunny enough to go to the beach.



    }




}else {              //If it isn't sunny, the below conditional statement will run and print.
    goToTheMovies = ("We will go to the movies today!");  //Establish string for goToTheMovies.


    console.log (goToTheMovies);  //Print answer to console if it isn't sunny enough to go to the beach.


}
/**
 * Videos:  Nesting Conditional Statements and Conditionals
 */

var sunny = true;       //Set boolean for sunny or not sunny.
var warmWater = true;   //Set boolean for whether water is warm or not.



if (sunny && temp>70) {            //If sunny the following will happen using nesting.
    goToTheBeach = "We will go to the beach since it is sunny and " + temp + " degrees.";  //Print comment responding
    // to the weather being sunny.

    console.log (goToTheBeach);//Print goToTheBeach new statement to include temperature.

    if (warmWater){     //If sunny and the water is warm, I can wear my bathing suit.

        wearNewSuit = "I will wear my new suit!";   //Whether I will wear my new bathing suit according to water
        //temperature.

        console.log (wearNewSuit); //Print whether the new swim suit will be worn.

    }
}else {                 //Set conditions if weather isn't sunny.
    goToTheMovies = ("We will go to the movies today!");
            //Set statement if weather does not permit going to the beach.

    console.log(goToTheMovies);             //Print statement that they will go to the movies since weather isn't
    //responding for the beach.


}
/**
 * Conditional Logic Video
 * Screencast: Conditionals Examples - Basic Conditional Statement
 */

//Second commit with Child not being old enough to ride coaster.
var oldEnough = false;   //Set boolean as false.

//if the child is old enough, print to the console.
if(oldEnough){
    //code performed if condition is true
    console.log ("Based on your age, you can ride the coaster!");

//If child is not old enough, print this to the console.
}else {

    console.log ("You aren't old enough.  You can\'t ride the coaster!  Sorry.")
}

/**
 * Screencast: Relational Expressions and Condition with Expression
 * Comparing objects for decision making
 *
 */
var kidHeight = 47;
var minHeight = 48;

//if the kid is over 48 inches in height print to the console "you can ride".
//if the kid is over 48 inches in height.

if(kidHeight + 2 > minHeight){ //add two for sneaker height
    //code performed if condition is true
    console.log ("You can definitely ride the coaster unless you received the message earlier that " +
    "you aren\'t old enough.");  //printed statement with exception if above answer is no.


}



/**
 * Screencast: If and else.
 * Choosing between two blocks of code.
 * Add "esle if" video -
 * Choosing between three or more blocks of code.
 */

//Using same conditional statement from above.

var kidHeight = 48;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with the parent.

//if the child is old enough, print to the console "you can ride".
//if the kid is over 48 inches in height.
if(kidHeight > minHeight) {
    //code performed if condition is true
    console.log("you can ride the coaster!");


//if (kidHeight <= minHeight){
    //code performed if condition is false.

//Easier way to code without as many conditionals.

}else if(kidHeight > wParentHeight) {

    //you can ride with a parent present
    console.log("You can ride, but only with a parent present.");
}else{
    //sorry you have growing to do.
    console.log("Sorry kid, you've got some growing to do first.");

}

/**
 * Screencast: Logical Operators
 * Example - Purchase of phone
 * && Can only be used between relational expressions (booleans)
 */

var budget = 300;   //number variable of budget is 300
var iPhonePrice = 199.99
var payCheck = 200;

//if the price of the phone is less our budget AND if our paycheck is over 300
if(iPhonePrice < budget && payCheck > 300){
    console.log("We can buy the phone!");


}else{
    console.log("No phone for you!!");
}

/**
 * Logical Operators Continued
 *Extension of above using the "or" operator
 *As long as one or the other is true, the result is true.

 */

var budget      = 300;      //set number variable for budget
var iPhonePrice = 199.99;   //set number variable for cost of phone
var wonLottery  = true;     //boolean value to answer if lottery was won

//if the price of the phone is less than our budget OR we win the lottery
if(iPhonePrice < budget || wonLottery === true){
    console.log("We can buy the phone!");

}else{
    console.log("No phone for you!!");  //if above criteria isn't met.  Print result.
}
/**
 * Ternaries
 * Decision making on one line using"?"
 */

//placing in form of normal IF ELSE
var gpa = 48;

//if the gpa is over the min 2.0 score, the student can graduate

//if(gpa > 2.0){
  //  console.log("You can graduate!");

//}else{
//    console.log("GPA is too low!);
//}

//Redo above with the "?" to replace IF ELSE
(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA is too low!");


// second example of Ternary Operator. If child is under 10, they get Green Eggs and Ham,
//otherwise, they get The Time Machine.

var age = 11;
var book;

//normal IF ELSE would be written:
//if(age <10){
//  book = "Green Eggs and Ham";
//}else{
//  book = "The Time Machine";
//}
//console.log(book);


//Write with Ternary Operators

book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);


/**
 * Assigning the Results of Comparisons
 * p 51-67
 */

var age = prompt ("Enter age:", "");  //prompt for users age
var isOverSixty = parseInt(age) > 60; //convert input to number

console.log("Older than 60: " + isOverSixty); // using comparison for true or false





