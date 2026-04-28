/*
    Author: seth <Seth-Agyei>
    Problem: Daily Task Scheduler 
*/

//Initial Data set

let tasks = ["Check emails", "Write reports", "Attend meeting", "Review code"];

 //1. print the initial data set and the number of tasks
console.log(`\nThe initial data set are : ${tasks}`);
console.log(`\nThe total number of tasks in the list is ${tasks.length} `);


//2. Adding new task to the end 
const addNew = tasks.push("Plan tomorrow's work")


//3. Adding new task to the beginning 
const addBeginning = tasks.unshift("Morning exercise")


// 4. Find the position/index of a task
const locate = tasks.indexOf("Attend meeting")

console.log(`\nThe Position/index of "Attend meeting" : ${locate}`);


// 5. replacing a string with another string in same position/index
const replace = tasks[3] = "Attend meeting (Completed)" 


// 6. Removing from the array
const remove = tasks.indexOf("Check emails") // check the index before proceeding

console.log(`\nIndex of "Check emails" : ${remove}`); // index was seen to be 1

if (remove === 1){
    tasks.splice(remove, 1)
}

console.log(`\nTask for today : `)
/* this can also be used to achieve same results
if (remove !== -1){
    tasks.splice(remove, 1)
}
*/

// 7.  Printing all remaining Task
for (i = 0; i < tasks.length; i++){
console.log(`Task ${i + 1} : ${tasks[i]}`); 
}


// 8. check and print if Review code exist
if (tasks.includes("Review code")){ 
    console.log(`\nTask still pending`)
} else {
    console.log(`\nTask completed or removed`)
}
