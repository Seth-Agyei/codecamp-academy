// Author : seth     GitHub : Seth-Agyei

// User data inputs
const finalGrade = parseFloat(prompt("Enter your final Grade"));
const attendance = parseInt(prompt("Enetr your attendence percentage"));
const project = prompt("Have you submited your project (Yes or No)").toLowerCase();

//Conditionals
if(isNaN(finalGrade)){
    alert("The grade should be a number");
} else if (finalGrade < 0 || finalGrade > 100){
    alert("The grade should be between 0 - 100");
} else if (isNaN(attendance)){
    alert("The attendence should be a number");
} else if (attendance < 0 || attendance > 100){
    alert("The attendance should be between 0 - 100");
} else if (project !== "yes" && project !== "no"){
    alert("The final project should be 'yes' or 'no' ");
}

else {
       let result; 
       let performance;

    if (attendance < 75){
        result = "FAIL insufficient attendence"
        performance = "insufficient"
        alert ("student grade : "+ finalGrade +   
            "attendence :" + attendance +   
            "Final project submited :" + project +   
            "Results : " + result + "performance :" + performance
        );
    } else {

        if (finalGrade >= 90){
           result = "PASS" 
           performance = "Excellent"
           alert("student grade : "+ finalGrade +   
            "attendence :" + attendance +   
            "Final project submited :" + project +   
            "Results : " + result + "performance :" + performance
            );
        };
    }

    if (finalGrade >= 70){
        if (project === "yes"){
            result = "PASS"
            performance = "Good"
            alert("student grade : "+ finalGrade +   
            "attendence :" + attendance +   
            "Final project submited :" + project +   
            "Results : " + result + "performance" + performance
            );
        } else {
            result = "remedial exam required"
            alert("student grade : "+ finalGrade +   
            "attendence :" + attendance +   
            "Final project submited :" + project +   
            "Results : " + result 
            )
        };
    } else {
        if (finalGrade >= 50){
            result = "remedial exam required"
            alert("student grade : "+ finalGrade +   
            "attendence :" + attendance +   
            "Final project submited :" + project +   
            "Results : " + result 
            );
        } else {
            result = "Fail"
            alert("student grade : "+ finalGrade +   
            "attendence :" + attendance +   
            "Final project submited :" + project +   
            "Results : " + result 
            );
        }
    }

    if (performance !== ""){
        alert("performance level : 'No defined'")
    } else {
        alert ("Performance level" + performance)
    };


}


/*
====================================
Desktop test
University Course Grading System
====================================

attendence less than 75 , result = "FAIL insufficient attendence" , performance = "insufficient"

attendence >= 75, finalGrade >= 90, result = "pass" , performance = "excellent"

attendence >= 75, finalGrade >= 70, project was submit, result = "pass" , performance = "good"

attendence >= 75, finalGrade >= 70, project not submitted,  result = "remedial exam required" 

attendence >= 75, finalGrade >= 50, result = "remedial exam required" 

attendence >= 75, finalGrade <= 50, result = "fail" 



*/