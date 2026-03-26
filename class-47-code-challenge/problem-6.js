// Author : seth Agyei                 Github: Seth-Agyei
// choose a variable to store age

const age = parseInt(prompt("Enter Your age"));

//conditionals

if (isNaN(age) || age < 0){
    alert("Age can not be below 0 and must be a number, Enter correctly")
} 

else if (age >= 0 && age <= 12){
    alert("You have Child Discount")
}

else if (age >= 13 && age <= 59){
    alert("You have Regular Discount")
}

else if (age >= 60 && age <=150){
    alert("You have Senior Discount")
}

else {
    alert("Invalid Age, Try again")
}

/*
===================
Desktop Test
===================

age = "hi" , or age = -5 ===> Age can not be below zero 
age = 2  ===> child Discount
age = 50  ===> Regular Discount
age = 150  ===> Senior Discount
age = 160  ===> Invalid Age, Try Again

*/