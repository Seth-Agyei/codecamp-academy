/*
    Author: Seth <Seth-Agyei>
    Problem: Challenge: Object Analysis and Abstraction in JavaScript
*/

const iphone17 = {
    Brand : "Iphone 17",
    PremiumDesign :[
        "Slimmer and Lighter",
        "Durable display glass",
        "Refined camera design",
        "Strong Aluminum frame"
    ], 
    Price : 1200,
    Connectivity : [
        "Wifi 7 support",
        "Faster internet speed",
        "Better call quality",
        "Stronger network stability"
    ],
    GamePerformance : [
        "Powerful graphic",
        "Better cooling system",
        "improved RAM management"
    ] ,
    IOSexperience : [
        "More customization",
        "Improved privacy",
        "Enhanced multitasking"
    ],
    Model : [
        "standard Iphone17", "Iphone 17 Air", "Iphone 17 Pro", "Iphone 17 Pro max"
    ],
    ReleasedDate : "September 2025",
    warranty : "2 years",
    stock : 300,
    color : ["Blue", "White", "Red", "Pink"],
    weightKg: 0.25,
    ILoveIt : true, 


    BuyNow : function (Price) {
        let price = 1300
        if (Price <= 0 && isNaN(Price)) {
            return "Incorrect Pricing"
        }else if(price > 1200){
            return "You are paying more than enough"
        }
        else{
            return "The price is 1200"
        }
            
        
    }
}


console.log("****************************");
console.log("iphone properties are:");
console.log(iphone17);
console.log("****************************");
console.log(iphone17.BuyNow())
console.log("****************************");
iphone17.Price = 1300;
console.log("****************************");
console.log(iphone17);
console.log("****************************");
console.log(iphone17.BuyNow())
console.log("****************************");
