/*
    Author: seth <Seth-Agyei>
    Problem: Movie Watch list Manager 
*/

// The initial watch list
let watchList = ["Inception", "Interstellar", "The Matrix", "Gladiator"];

//1. print the total number of movies
console.log(`\nThe total number of movies in the watch list : ${watchList.length}`);


// 2 and 3.  adding two movies to the watch list

let newAdd = watchList.push("The Dark Knight", "Avatar")


// 4. Removing the last movie
const removeMovie = watchList.pop()


// 5. print the first movie 
console.log(`\nThe first movie : ${watchList[0]}`);

// 6. print last movie 
console.log(`\nThe last movie : ${watchList[watchList.length - 1]}`);

//7. checking is movie is more or less

if (watchList.length >= 4){
    console.log(`\n"You have many movies to watch!"`);

} else {
    console.log(`\n"Your watch list is small."`);
}

console.log(`\nMovie list below:`);
// 8. Print all movies 
for (i = 0; i < watchList.length; i++ ){
    console.log(` ${i + 1} - ${watchList[i]}`);
}


