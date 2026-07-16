

class Person {
    constructor(fullName, age, identificationNumber){
        this.fullName = fullName;
        this.age = age;
        this.identificationNumber = identificationNumber;
    }
 
    //Protected Method
    _generateMedicalCode(){
        return 'MED-4589'
    }
}

//Child
class Patient extends Person {
    constructor(fullName, age, identificationNumber, disease, hasAppointment, medicalCode) {
        super(fullName, age, identificationNumber)
        this.disease = disease
        this.hasAppointment = hasAppointment
        this.medicalCode = medicalCode
    }

    //Private method
    #validatePatientAge(){
        if(age > 0){
            return true
        } else{
            return false
        }
    }

    //Public methods
    registerPatient(){
        if (!this.#validatePatientAge){
            return 'Input valid age'
        }
        let medicalCode = this._generateMedicalCode()
        return `registration successful, patient code is : ${medicalCode}`
    }

    scheduleAppointment(){
        if (this.hasAppointment === true){
            return "Successfully schedule appointment"
        } else{
            return "Appointment unsuccessful"
        }
    }

    showPatientInformation(){
        FullName : this.fullName
        Age : this.age
        identificationNumber: this.identificationNumber
        disease : this.disease
        hasAppointment : this.hasAppointment
        medicalCode : this.medicalCode
    }


    //Static method
    static calculateBirthYear(currentYear, age){
       
        
        return currentYear - age
    }

}

// Object creation
const patient = new Patient("Sara Jones", 32, "1243223421", "Flu");

console.log("****************************");
console.log(typeof(patient));
console.log(patient);
console.log("****************************");
console.log(patient.registerPatient());
console.log("****************************");
console.log(patient.scheduleAppointment());
console.log("****************************");
console.log(patient.showPatientInformation());
console.log("****************************");
console.log(Patient.calculateBirthYear(2026, 40));

