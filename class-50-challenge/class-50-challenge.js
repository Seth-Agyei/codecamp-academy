// Author : seth   GitHub : Seth-Agyei

// Declaring user input

const age = parseInt(prompt("Enter Your Age"));
const isStudent = prompt("Are you a student? (Yes or No)").toLowerCase();
const whichDay = prompt("Which day is today? (Monday, Tuesday, Wednesday, Thursday, Friday, saturday, sunday)").toLowerCase();
const noTickets = parseInt(prompt("How many tickets will you buy"));

// Declare Variables
let pricePerTicket = 0;
let finalTotalPrice = 0;

// conditionals

if (isNaN(age) || age < 0 || age > 120){
    alert("Invalid user age")
} else if (isNaN(noTickets)  || noTickets < 1){
    alert ("Invalid ticket value, enter the correct one")
} else if (isStudent !== "yes" && isStudent !== "no"){
    alert("Invalid student status")

} else {   
        //Determining price of tickets
    if (age < 12){
        pricePerTicket = 6; 
                
    } else if (age >= 65){
        pricePerTicket = 7; 
    } else {
        pricePerTicket = 12;
    }
     
      //Discount for student 

    if (isStudent === "yes"){
        if (age >= 12 && age <= 25){
        pricePerTicket = 9; 
        } 
        
        // wednesday discount 
        
    } else if (whichDay === "wednesday"){
        pricePerTicket = 10; 
    } else {
           
    }

    //output / calculations

    finalTotalPrice = pricePerTicket * noTickets;

   alert("The amount to pay is" + finalTotalPrice + "USD")
}
    
/*
=============================
Desktop test
=============================

age = 11 , isStudent = any , whichDay = any , noTickets = 2 , finalTotalPrice = 12;

age = 67 , isStudent = any , whichDay = any , noTickets = 2 , finalTotalPrice = 14;

age = 27 , isStudent = any , whichDay = any , noTickets = 2 , finalTotalPrice = 24;

age = 15 , isStudent = yes , whichDay = any , noTickets = 2 , finalTotalPrice = 18;

age = 34 , isStudent = no , whichDay = wednesday , noTickets = 2 , finalTotalPrice = 20;







*/
    
    
