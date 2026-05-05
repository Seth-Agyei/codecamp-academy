/*
    Author: Seth <Seth-Agyei>
    Problem: Delivery cost calculator
*/


function CalculateDeliveryCost(distance) {
    const baseFee = 5;
    const costPerKm = 2;

    const totalCost =  baseFee + (costPerKm * distance)

    
    if (distance >= 0 || isNaN(distance)) {
        return  totalCost
    } else {
        return "Invalid Distance covered"
    }
    
}

//Example usage
// usage 1

const distance = 10
console.log (`
    
    \n
    ********************************************************************
    the total cost of a distance of ${distance}kg covered is ${CalculateDeliveryCost(10)}
    ********************************************************************
    `)


console.log("********************************************************");

/*
//usage 2
const distance = 20
console.log (`
    
    \n
    ********************************************************************
    the total cost of a distance of ${distance}kg covered is ${CalculateDeliveryCost(20)}
    ********************************************************************
    `)

console.log("********************************************************");
*/

//usage 3
/*
const distance = -20
console.log (`
    
    \n
    ********************************************************************
    the total cost of a distance of ${distance}kg covered is ${CalculateDeliveryCost(-20)}
    ********************************************************************
    `)
*/

//usage 4
/*
const distance = hello
console.log (`
    
    \n
    ********************************************************************
    the total cost of a distance of ${distance}kg covered is ${CalculateDeliveryCost(hello)}
    ********************************************************************
    `)
*/