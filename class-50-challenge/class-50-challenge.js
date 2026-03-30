// Author : seth   GitHub : Seth-Agyei

// Declaring user input

const age = parseInt(prompt("Enter Your Age"));
const isStudent = prompt("Are you a student, (Yes or No)").toLowerCase();
const whichDay = prompt("Which day is today, (Monday, Tuesday, Wednesday, Thursday, Friday, saturday, sunday)").toLowerCase();
const noTickets = parseInt(prompt("How many tickets will you buy"));
let pricePerTicket;

let finalTotalPrice;

// conditions

if (isNaN(age) || age < 0 || age > 120){
    alert("Invalid user age")
} else if (isNaN(noTickets)  || noTickets < 1){
    alert ("Invalid ticket value, enter the correct one")
} else if (isStudent !== "yes" && isStudent !== "no"){
    alert("Invalid student status")
}else if (whichDay !== monday && whichDay !== "tuesday" && whichDay !== "wednesday" &&
    whichDay !== "thursday" && whichDay !== "friday" && whichDay !== "saturday" && whichDay !== "sunday"){
        alert("Invalid day of the week, Type correctly")
}





    
    
