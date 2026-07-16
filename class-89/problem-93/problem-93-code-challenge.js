// Author : seth   <GitHubName : Seth-Agyei>

//Parent class
class Parent {
    constructor (data){
        this.fullName = data.fullName
        this.email = data.email
        this.identification = data.identification
    }

    _generateStudentCode(){
        const randomNumber = Math.floor(Math.random * 9000) + 1000
        return `STD-${randomNumber}`
    }

}

class student extends Parent {
    constructor(data){
        super(data)
        this.career = data.career
        this.semester = data.semester
        this.courses = []
        this.isRegistered = false
    }

    #validateCourse(course){
       return (
        course.courseName &&
        course.teacherName &&
        course.credits > 0
       )
    }

    #calculateTuition(){
        academicCredit = 120
       const totalCredits = course.credits * this.courses.length
       const totalTuitionCost = totalCredits * academicCredit
        return `Total tuition is ${totalTuitionCost}$`

    }


    registerStudent(){
        studentCode : this._generateStudentCode
        this.isRegistered = true

        return`Successful Registration, Your student code is ${studentCode}`
    }

    enrollCourse(data){
        const enrolled = {
            courseName: data.courseName,
            credits : data.credits,
            teacher : data.teacherName
        }
        
        if (!this.#validateCourse){
            return `Invalid course registration`
        }
         
        if (this.isRegistered === true){
            return `Successfully registered`
        }

        const course = {
            courseName : data.courseName,
            credits : data.credits,
            teacher : data.teacherName,
            enrolledAt : new Date ()

        }

        this.courses.push(course)

        return `${data.fullName} has registered successfully`
    }

    dropCourse(courseName){
    for (let i = 0; i < this.courses.length; i++ ){

        if (courseName.toLowerCase() === 
         this.courses[i].courseName.toLowerCase()
        
        )  { return this.courses[i]

        } else {
            return -1;
        }
    }
    }

    showCourses (){
        return this.courses
    }

    showStudentInformation(){
     return data
    }

    showTuitionCost(){
        tuitionCost : this.#calculateTuition
        return tuitionCost
    }


    static convertCreditsToHours(credits){
        return `(${credits} * 48)hours`
    }
    
    static calculateAverageGrade(grades){
        this.grades = []
        //const arrayGrades = [],
        //this.grades.push(arrayGrades)
        let sumTotal = 0
        sumTotal += this.grades
        const average = sumTotal/this.grades.length

        return average
    }

}

console.log(student.calculateAverageGrade(20,10,10))