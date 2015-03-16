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
//Added Conditional code within the code.


sunny = true;      //Set boolean value of whether it is sunny or not.
temp = prompt("Please enter the temperature:"); //Use prompt for current temperature from user.

if(sunny ) {        //If it is sunny, the below conditional statement will run and print.
    if (temp > 70)


    goToTheBeach = ("We will go to the beach today!");  //Establish string for goToTheBeach.

    console.log (goToTheBeach); //Print answer to console if it is sunny enough to go to beach.

}
else {              //If is isn't sunny, the below conditional statement will run and pringt.
    goToTheMovies = ("We will go to the movies today!");  //Establish string for goToTheMovies.


    console.log (goToTheMovies);  //Print answer to console if it isn't sunny enough to go to the beach.


}
/**
 * Videos:  Nesting Conditional Statements and Conditionals
 */

var sunny = true;       //Set boolean for sunny or not sunny.
var warmWater = true;   //Set boolean for whether water is warm or not.

if (sunny) {            //If sunny the following will happen using nesting.
    goToTheBeach = "We will go to the beach since it is sunny and " + temp + " degrees.";  //Print comment responding
    // to the weather being sunny.

    console.log (goToTheBeach);  //Print goToTheBeach new statement to include temperature.

    if (warmWater) {    //If sunny and the water is warm, I can wear my bathing suit.

        wearNewSuit = "I will wear my new suit!";   //Whether I will wear my new bathing suit according to water
        //temperature.

        console.log (wearNewSuit); //Print whether the new swim suit will be worn.

    }
}else {                 //Set conditions if weather isn't sunny.
    goToTheMovies = goToTheMovies;          //Set statement if weather does not permit going to the beach.

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
 */

var budget = 300;   //number variable of budget is 300
var iPhonePrice = 199.99
var payCheck = 200;

//if the price of the phone is less our budget AND if our paycheck is over 300
if(iPhonePrice < budget && paycheck > 300){
    console.log("We can buy the phone!");


}else{
    consoe.log("No phone for you!!");
}