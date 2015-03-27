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

    return nameEntered;                 //return nameEntered into nameValidation function
}

function ageRequirement(yearsOld){

    var numberAttempts = 1;                //setup the index for the while loop

    while (yearsOld         === ""){       //parameters set for validation of age entered

        //set up prompt to let player know that they need to enter age when left blank
        yearsOld        = prompt("Please enter your age.  This is important for your entry in the Florida Lottery.");

        numberAttempts++;                   //number attempts allowed + 1

        if (numberAttempts  === 5) {        //if used to establish the most attempts allowed to enter name

            //set up print message to show the player that they have reached the max number of age entry attempts
            console.log("It is clear that you do not want to enter your age. \nYou should know that Florida requires " +
            "players are 18 years old to play.");

            break;                          //command tells code to stop additional attempts to obtain age
         }


    }
    return yearsOld;                        //return yearsOld into ageRequirement Function
}

function randomLotto(picks) {   //Set arguments

    var lottoArray  = [];

    //set up Math.random() * (max - min) + min


    for (var lotto  = 0; lotto < picks; lotto++){ //Using for to arrive at random numbers
        //set parameters for numbers to be used for random Lottery numbers
        var randomLottoNumbers = Math.round(Math.random() * (53 - 1) + 1);
        //assign lottoArray to parameters
        lottoArray[lotto] = randomLottoNumbers;



        }
    return lottoArray;      //Assign lottoArray to function




}







//  main code

//console.log("Welcome " + firstName + ", have fun drawing your numbers!"); //test to verify variable is printing
//console.log("Your age at the time of the drawing will be " + age + ".");  //test to verify variable age is printing

//test to verify function is working properly:

firstName = nameValidation(firstName); //assign nameValidation function to firstName variable
//console.log(firstName);





//test to verify ageRequirement function is working properly:
age         = ageRequirement(age);  //assign ageRequirement function to age variable
//console.log(age);


//test to verify randomLotto function is working properly
myLotteryPick = randomLotto(6);
//console.log(myLotteryPick);

//Boolean to be placed in code regarding age and whether player is old enough to play the Florida Lottery:
if (age >= 18){                     //Parameter set for boolean true

    console.log ("You are " + age + " years old, which means you are old enough to play!");

}else{                              //Parameter set for boolean false

    console.log ("You are only " + age + " years old.  This means you are not \nold enough to play in the " +
    "Florida Lottery.  Sorry.");

}

console.log("Welcome " + firstName + " to the Florida Lottery random drawing for 6 sets of numbers. \nYou say you are "
+ age + " years old. If this information is incorrect, hit refresh.");

console.log("Here is your first set of random numbers: " + myLotteryPick );



