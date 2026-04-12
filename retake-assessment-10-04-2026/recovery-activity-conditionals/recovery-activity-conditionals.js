// Author : Seth       <GitHub : Seth-Agyei>

// Store in variable
const grade = "";
let results = "";

// conditionals
if (isNaN(grade)) {
    results = "Grade must be a number"
} else if (grade < 0 || grade > 100) {
    results = "Grade must be between 0 - 100"
} else {
    if (grade >= 90 && grade <= 100) {
     results = "Passed with honours"        
    } else if (grade >= 70 && grade <= 89){
     results = "Passed"
    } else if (grade >= 50 && grade <= 69){
     results = "Remedial Exam Required"
    } else if (grade >= 0 && grade < 50){
     results = "Failed"
    }
}
console.log (results);

/*
======================
Desktop Test
=====================

grade = "hello"  result = "grade must be a number"

grade = "-30"  result = "grade must be between 0 - 100"

grade = "97"  result = "Passed with honors"

grade = "55"  result = "Remedial exam required"

grade = "79"  result = "Passed"

grade = "20"  result = "Failed"

*/