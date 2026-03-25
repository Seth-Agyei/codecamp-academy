// Author: seth agyei    GitHub : Seth-Agyei

let salary = parseFloat(prompt("Enter Your monthly Salary"));
let CreditScore = parseFloat(prompt("Enter your credit Score"));

//conditions
/* 
if (salary < 2000 && CreditScore < 700){
    alert("Loan Rejected");
} else if(salary >= 2000 && CreditScore >= 700){
    alert("Loan Approved");
} else{
    alert("Wrong INput. Try again")
}
*/
//improved conditions
if (isNaN(salary) || isNaN(CreditScore)){
    alert("Invalid input. Please enter numeric values.");
} else if (salary >= 2000 && CreditScore >= 700){
    alert("Loan Approved");
} else if (salary >= 2000 && CreditScore < 700){
    alert("Loan Rejected. Your credit Score is too low")
} else if (salary < 2000 && CreditScore >= 700){
    alert("Loan Rejected. Salary does not meet the requirement")
} 
//case 4:
else {
    alert("Loan Rejected. Both salary and credit score do not meet the requirement")
}

/*
======================================
Desktop test
======================================

Salary = 1900; creditScore = 690 ===> Load Rejected
Salary = 3000; creditScore = 500 ===> Load Rejected
Salary = 1900; creditScore = 800 ===> Load Rejected
Salary = 2200; creditScore = 720 ===> Load Approved
Salary = "hello"; creditScore = 800 ===> Wrong Input
Salary = 2700; creditScore = "hello" ===> Wrong Input

 */