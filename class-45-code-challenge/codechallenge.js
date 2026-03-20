//{ {Author: Seth}, {GitHub : Seth-Agyei} }

var n = prompt("Enter a number of your Choice");

//conditions

if (n == 0 ){
    alert("This is zero")
} else if (n < 0){
    //if the condition is less than zero 0
    //execute the code
    alert("This is negative Number")
} else if (n > 0){
    //if the condition is more than zero 0
    //execute the code
    alert("This is a Positive Number")
} else {
     //default false clause, if diffrent item entered, execute code
    alert("Invalid Number, Try again")
}

/*
===========================
Desktop test
===========================
n = -2 ==> negative
n = 2 ==> positive
n = -3 ==> negative
n = 3 ==> negative
n = 0 ==> zero
*/