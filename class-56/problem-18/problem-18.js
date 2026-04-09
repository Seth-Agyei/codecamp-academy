// Author = seth    <Seth-agyei>

//store variables

const level = parseInt(prompt("Enter player level"));
const vip = prompt("Are you a VIP member, (Yes or No)").toLowerCase();

let room = isNaN(level) ? "The player level should be a number"

        :  vip !== "yes" && vip !== "no" ? "Invalid VIP status"

        :  level >= 10 ? "Enter room"  

        :  level < 10 && vip === "yes"  ?  "Enter room"

        :  level < 1    ? "Invalid player level"   
        
        : "Access denied"    
    
    alert(room);
        


/*
======================
Desktop test
======================
level = 6 , Vip === yes , result = Enter room

level = 6 , Vip === no , result = Acess denied

level = 10 ,  result = Enter room

level = 29 , result = Enter room

level = hello , Vip === yes , result = Invalid player level

level = 6 , Vip === hello , result = Invalid VIP status

*/