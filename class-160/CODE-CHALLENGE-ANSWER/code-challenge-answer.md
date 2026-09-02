****************************************************************************************************
-- MONGODB CHALLENGE ANSWER
****************************************************************************************************

--General ovarview (
    The query db.students.find() means find() search through the document "students" and prints out the results.

 Inside the find() is the exact querry to be executed.
)

--------------------------------------
--FIRST QUERY
--------------------------------------
30 Results Returned After Querry
--------------------------------------

 db.students.find({
    program:{
        $in:["Cybersecurity","Artificial Intelligence","Data Science"]
    }
 })

 --Explanation of query one
The code loops through the program section of the document "students" and print out results with specific program like Cybersecurity or Artificial Intelligence or Data Science using  ' $in '

****************************************************************************************************

--------------------------------------
--SECOND QUERY
--------------------------------------
10 Results Returned After Query
--------------------------------------
db.students.find({
    age:{
        $gt:25
    },
    "enrollments.grade":{
        $gt:4.5
    }
 })

 --Explanation of query 2
The bove code checks if age is greater than 25 and enrollment.grade is greater than 4.5
$gt means greater than.
The comma , after age:{$gt:25}, means AND
   

****************************************************************************************************

-------------------------------------
--THIRD QUERY
--------------------------------------
19 Results Returned After Querry
--------------------------------------
db.students.find({
    "address.country":{
        $in:['Colombia','Brazil','Mexico','Argentina']
    }
 })

 --Explanation of Query 3
The code seraches through the program section of the document "students" and print out results with specific countries from the address array eg. Colombia,Brazil,Mexico,Argentina.
using  ' $in '


****************************************************************************************************

--------------------------------------
--FOURTH QUERY
--------------------------------------
49 Results Returned After Query
--------------------------------------
db.students.find({
    "enrollments.status":{
        $in:['Completed','Deferred']
    }
 })

  --Explanation of Query 4
The code seraches through the program section of the document "students" and print out results with specific status from the enrollments array eg. Completed,Deferred.
using  ' $in '


****************************************************************************************************

--------------------------------------
--FIFTH QUERY
--------------------------------------
9 Results Returned After Query
--------------------------------------
db.students.find({
    $or:[
        {
            program:{
               $in:["Full Stack Web Development"] 
            },
            "enrollments.grade":{
                $gte:4.5
            }
        },
        {
         program:{
               $in:["Cybersecurity"] 
            },
            age:{
                $lt:25
            }
        }
    ]
        
 })

----Explanation of Query 5
The $or operator meant OR, in the $or [{},{}], the OR operator compares the two {} and prints out either one of them or both. 
