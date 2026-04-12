// Author : Seth    < GitHub: Seth-Agyei>

// Store in variables
const age = parseInt( "900");
const ticketPrice = 20;

//tenary conditionals

let finalPrice = isNaN(age)   ? "age must be a number"
: age < 0 || age <= 120       ? "age must be betwwen 0 - 120"
: age < 12                    ? ticketPrice * 0.5 
: age >= 12                   ? ticketPrice     
: "Invalid age";

console.log("Final ticket price:" + finalPrice)

/*
Desktop test
======================

age = "hello" if true = "age must be a numnber"

age = "-25" if true = "age must be betwwen 0 - 120"

age = "3"  if true = "final ticket price = 10"

age = "15"  if true = "final ticket price = 20"

age = "160" if true = "Invakid age"


*/