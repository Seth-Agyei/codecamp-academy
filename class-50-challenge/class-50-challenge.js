// Author : seth   GitHub : Seth-Agyei

// Declaring user input

const age = parseInt(prompt("Enter Your Age"));
const isStudent = prompt("Are you a student, (Yes or No)").toLowerCase();
const whichDay = prompt("Which day is today, (Monday, Tuesday, Wednesday, Thursday, Friday, saturday, sunday)").toLowerCase();
const noTickets = parseInt(prompt("How many tickets will you buy"));

let pricePerTicket = 0;
let finalTotalPrice = 0;

// conditionals

if (isNaN(age) || age < 0 || age > 120){
    alert("Invalid user age")
} else if (isNaN(noTickets)  || noTickets < 1){
    alert ("Invalid ticket value, enter the correct one")
} else if (isStudent !== "yes" && isStudent !== "no"){
    alert("Invalid student status")
}else if (whichDay !== monday && whichDay !== "tuesday" && whichDay !== "wednesday" &&
    whichDay !== "thursday" && whichDay !== "friday" && whichDay !== "saturday" && whichDay !== "sunday"){
        alert("Invalid day of the week, Type correctly")
} else {
    if (age < 12){
        pricePerTicket = 6; 
        finalTotalPrice = pricePerTicket * noTickets;
        
    } else if (age >= 65){
        pricePerTicket = 7; finalTotalPrice = pricePerTicket * noTickets;
    } 
    else if (isStudent === "yes"){
        if (age >= 12 && age <= 25){
        pricePerTicket = 9; finalTotalPrice = pricePerTicket * noTickets;
        }
    } 
    else if (whichDay === "wednesday"){
        pricePerTicket = 10; finalTotalPrice = pricePerTicket * noTickets;
    } else {
        pricePerTicket = 12;   finalTotalPrice = pricePerTicket * noTickets;
    }

    //output
     
   alert("The amount to pay is" + finalTotalPrice + "USD")


}
    

    





    
    
