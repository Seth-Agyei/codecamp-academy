// Author : seth   GitHub name : Seth-Agyei

// request user data

const yearsOfExperience = parseInt(prompt("Enter years of experience"));
const performanceScore = parseFloat(prompt("Enter your Performance Score"));

// VAlidate the Inputs
if (isNaN(yearsOfExperience) || yearsOfExperience < 0 || yearsOfExperience > 100){
    alert("Inalid years of experience");
}
else if(isNaN(performanceScore) || performanceScore < 0 || performanceScore > 100 ){
    alert("Invalid performance score");
}
//Business logic (rules)

else if (yearsOfExperience >= 5 && performanceScore >= 85){
    alert("Full Bonus");
}
else if (yearsOfExperience >= 3 && performanceScore >= 70){
    alert("Partial bonus");
}
else if(yearsOfExperience  < 3 && performanceScore >= 90){
    alert("Special recognition bonus");
}
else {
    alert("No bonus");
}

/*
=================================
Desktop Test
=================================
 yearsOfExperience = 6;    PerformanceScore = 90; ==> Full bonus

 yearsOfExperience = 4;    PerformanceScore = 75; ==> Partial bonus

 yearsOfExperience = 2;    PerformanceScore = 95; ==> Special Regconition bonus

 yearsOfExperience = 2;    PerformanceScore = 60; ==> No bonus

 yearsOfExperience = 3;    PerformanceScore = 120; ==> Invalid Performance

 yearsOfExperience = -1;    PerformanceScore = 80; ==> Invalid years of experience

 yearsOfExperience = "hello";    PerformanceScore = 90; ==> Invalid years of experience

 yearsOfExperience = 4;    PerformanceScore = "hello"; ==> Invalid Performance
 S
*/