// Author : seth     <GitHub name : Seth-Agyei>

// Movie rating code 
const rating = "G";

//Global meaning variable
let meaning = "";

switch (rating) {
    case "G":
        meaning = "General audiences"
        break;
    
    case "PG":
        meaning = "Parental guidance suggested"
        break;
    
    case "PG-13":
        meaning = "Parent strongly cautioned"
        break;
    
    case "R":
        meaning = "Restricted"
        break;
    
    case "NC-17":
        meaning = "Adults only"
        break;

    default:
        meaning = "Invalid movie rating"
        break;
}

console.log(meaning);
