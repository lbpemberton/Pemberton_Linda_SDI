//alert("JS is connected!");

/**
 Linda Pemberton
 SDI Section 02
 March 23, 2015
 Functions Screencast Practice
 */

//Functions - Returning Values

//Functions that are "returning" need to be assigned a variable.

//Using the var total  = function calArea:
var total = calcArea(30,20);    //Using these arguments to send to parameters below:
function calcArea(w, h){    //Parameters so you know what values to use.
    var area = w * h;
    return area; //function spitting information out. Happens where function is invoked
                 //on line 12. Variable needs to be set up in order to see it in action.
}

console.log(total);     //total = whatever is returned from the calcArea function.



