//author : seth      github: Seth-Agyei



var score = prompt();

if (score < 0){

    alert("Invalid negative score. Try again.......")
} else if (score >= 0 && score < 60){
    
//if the conditional is false
    //else if, amalice other conditional
    //execute the code

    alert("You failed the exam")
} else if(score >= 60 && score <= 100) {

    //if the conditional is false
    //else if, amalice other conditional
    //execute the code

    alert("You have passed the exams")
} else{
    //default false clause
    alert("Invalid score. Cant be greater tha 100")
}