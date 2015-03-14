/**
 * Linda Pemberton
 * March 14, 1015
 * SDI Screencast Conditionals
 */


//alert ("Javascript works!");  //Verified link between .js file and .html file worked!


/**
 * Basic Conditional Statement Video
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
 * Nesting Conditional Statements
 */

var sunny = true;       //Set boolean for sunny or not sunny.
var warmWater = true;   //Set boolean for whether water is warm or not.

if (sunny) {            //If sunny the following will happen.
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




