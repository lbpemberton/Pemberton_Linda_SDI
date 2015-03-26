//alert("This is in the js file!");

/**
 * Linda Pemberton
 * SDI Section 02
 * March 26, 2015
 * Functions Assignment
 */

//Florida Lottery Example

//  variables needed for main code to run:

var firstName           = prompt("Please enter your first name:");                      //variable needed for function
var age                 = prompt("Please enter your age at time of ticket purchase:");  //variable needed for function
var myLotteryPick;                                                                      //variable needed for function



//  functions



function nameValidation(nameEntered){   //function named with argument
    var numberAttempts  = 1;            //establish variable for function to establish attempts for entering name

    while (nameEntered      === ""){    //parameters set for validation

        //set up prompt to let player know that they have left the name slot empty
        nameEntered     = prompt("Please enter your first name.\nDo not leave this blank.");


        numberAttempts++;               //number attempts allowed + 1

        if (numberAttempts  === 5) {    //if used to establish the most attempts allowed to enter name

            //set up print message to show the player that they have reached the max number of name attempts
            console.log("Alright, I see that you do not want to enter your name.");

            break;                      //command tells code to stop making attempts
        }
    }

    return nameEntered;  //return nameEntered into nameValidation function
}







//  main code

//console.log("Welcome " + firstName + ", have fun drawing your numbers!");  //test to verify variable is printing
console.log("Your age at the time of the drawing will be " + age + ".");

//test to verify function is working properly:
firstName = nameValidation(firstName);
console.log(firstName);