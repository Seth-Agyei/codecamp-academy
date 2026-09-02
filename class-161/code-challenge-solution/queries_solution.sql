--Solution to the following:

--Challenge 15: Query embedded IMDb data using dot notation.
db.movies.find({},
    {"imdb.rating":1,
    "imdb.voting":1,
    "imdb.id":1,
    _id:0
    }
    
)
--**************************************************************

--Challenge 16: Find users by email domain using $regex.
db.users.find({
    email:{$regex:"@gameofthrones\\.es$"}
})

--**************************************************************


--Challenge 17: Find theaters located in California.
db.theaters.find({
   "location.address.city":"California"
})

--**************************************************************

--Challenge 18: Find comments created by a specific user.
db.comments.find({name:"Gregor Clegane"},
  
)

--**************************************************************

--Challenge 19: Update a user using updateOne() and $set.
db.users.updateOne({ name: "Ned Stark" }, 
{ $set: { name: " Primtek academy" } } )

--**************************************************************


--Challenge 20: Add data to a movie array using updateOne() and$push.
db.movies.updateOne({ title :"A Corner in Wheat" }, 
{ $push: { cast: " Primtek academy" ,
           genres:"Horror"} } )

