/**
 * Linda Pemberton
 * March 14, 1015
 * SDI Screencast Conditionals
 */


//alert ("Javascript works!");  //Verified link between .js file and .html file worked!


//Conditional statement / code.  If beach is sunny, we will go.


sunny = false;      //Set boolean value of whether it is sunny or not.


if(sunny ) {        //If it is sunny, the below conditional statement will run and print.
    goToTheBeach = ("We will go to the beach today!");  //Establish string for goToTheBeach.

    console.log (goToTheBeach); //Print answer to console if it is sunny enough to go to beach.

}
else {              //If is isn't sunny, the below conditional statement will run and pringt.
    goToTheMovies = ("We will go to the movies today!");  //Establish string for goToTheMovies.


    console.log (goToTheMovies);  //Print answer to console if it isn't sunny enough to go to the beach.


}







//If temperature at beach is greater than 70 degrees, you will go to the beach.

var temp = 65;  //Establish temperature to decide on beach or movies.

if (temp > 70){

    gotothebeach (true);  //Establish boolean for which statement is used.

}
console.log ("The temperature is " + temp + " degrees so we will not be going today!");
