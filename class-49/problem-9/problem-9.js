// Author : seth    GitHub : Seth -Agyei

// Request data info

const age = parseInt(prompt("Enter Your Age"));
const isStudent = prompt("Are you a student ? (yes/no)").toLowerCase();


//conditionals
//Validate the user age

if (isNaN(age) || age < 0 || age > 100){
    alert("Invalid Age")
}
else if (isStudent !== "yes" && isStudent !== "no"){
    alert("Invalid student status")
}

else {
    if (age < 18){
          if (isStudent === "yes"){
            alert("50% discount")
          } else{
            alert("30% discount")
          }
    } else{
        if (isStudent === "yes"){
            alert("20% discount")
        } else{
            alert("No discount")
        }
    }
}





















































































