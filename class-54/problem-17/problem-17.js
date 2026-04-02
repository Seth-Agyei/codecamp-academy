// Author: seth      GitHub : Seth-Agyei

// Request user data
const  membership = prompt("Enetr membership type' (basic or premium)").toLowerCase();
const trainer = prompt("Do you want a personal trainer, (yes or no)").toLowerCase();

//Variables
let price = 0;
let trainerFee = 0;

// Validate membership type

if (membership === "basic" || membership === "premium"){

    // Determine base membership price
    if (membership === "basic"){
        price = 20;
    } else {
        price = 30;
    }

    //Nested conditionals

    if (trainer === "yes"){
        if(membership === "basic"){
            trainerFee = 10;
        } else {
            trainerFee = 0;
        }
    } else if (trainer === "no"){
        trainerFee = 0;
    } 
    else {
        alert("Invalid trainer option")
    }

    // Calculate total cost
    const totalCost = price + trainerFee;
    alert("Total membership cost is : $" + totalCost + "USD");
} else {
        alert("Invalid membership type.")
}