//alert("JS is connected!");

/**
 Linda Pemberton
 SDI Section 02
 March 23, 2015
 Functions Screencast Practice
 */

//Functions - Procedures vs. Functions

//This is a function:
function calcAreaF(width, height){    //Parameters so you know what values to use.
    var area = width * height;
    return area; //function spitting information out. Happens where function is invoked
                 //on line 12. Variable needs to be set up in order to see it in action.
}

//This is a procedure:
function calcAreaP(width, height){
    var area = width * height;
    console.log(area); //NO RETURN
}



