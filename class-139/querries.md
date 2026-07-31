Mansethoo
mansethoo.
Online
- This class is dedicated to the people with no coding experience, who are willing to learn from scratch. Your permanent instructor is Mr. Cristian, Cristian is very experienced with this types of classrooms, he have conducted alot of learning programs with people who are starting from zero-to-fullstack. LINK TO YOUR EVERYDAY'S LIVE CLASSES : Classroom Alpha - Learning sessions Google Meet joining info Video call link: https://meet.google.com/yph-smkt-jta Or dial: ‪(ZA) +27 10 823 0556‬ PIN: ‪855 164 593‬# More phone numbers: https://tel.meet/yph-smkt-jta?pin=8251852291118 Happy Learning! =============================================================
﻿
Cristian Camilo Corte Ortiz — 7/24/2026 6:12 PM
Why This Is Important
Today's lesson reinforced the fundamentals of React's component-based
architecture by demonstrating how to build complex user interfaces from
small, reusable components. Students also practiced organizing
TypeScript data models, passing information through props, rendering
dynamic content from datasets, and using Tailwind CSS to create modern,
responsive interfaces without writing custom CSS. These skills provide a
strong foundation for developing scalable frontend applications with
React.

Support
Please let me know if you are facing any issues attending the classes; I
will be happy to help you.

If you would like to watch the recordings of the missed lessons, please
mention it in the #recordings channel.
Cristian Camilo Corte Ortiz — 7/27/2026 10:11 AM
https://github.com/primetek-africa/react-aero-vision
Cristian Camilo Corte Ortiz — 7/27/2026 2:41 PM
Attachment file type: acrobat
BACKEND DEVELOPMENT ROADMAP.pdf
109.15 KB
Cristian Camilo Corte Ortiz — 7/27/2026 3:07 PM
https://www.postgresql.org/download/windows/
Cristian Camilo Corte Ortiz — 7/27/2026 3:56 PM
Library Management System Database Project
Project Overview
Welcome to your first PostgreSQL database project.

Throughout this project, you will design and build a relational database for a 
Library Management System. The objective is to apply the database concepts 
learned in class while developing a realistic system capable of storing and 
managing library information.

Instead of working with isolated SQL examples, you will create a complete 
database from the ground up, including its tables, relationships, constraints, 
and sample data. As the course progresses, you will also learn how to retrieve, 
update, and analyze information using SQL queries.

This project will serve as the foundation for understanding how relational 
databases are designed and how they are used in real-world software applications.

---

Project Scenario
A local public library currently keeps track of its books and members using 
spreadsheets. As the collection continues to grow, managing information has 
become increasingly difficult.

The library has decided to migrate its records to a PostgreSQL database that 
will allow librarians to organize books, register members, record book loans, 
and monitor which books are currently available.

Your task is to design and implement this database from scratch.

---

Project Objectives
By completing this project, you will learn how to:

Create a PostgreSQL database.
Design relational database tables.
Define primary and foreign keys.
Apply database constraints.
Create relationships between entities.
Insert, update, and delete records.
Query data using SQL.
Understand how relational databases organize information.

---
System Requirements
The database should be capable of managing the following information:

Authors
Books
Library Members
Book Loans

Each entity will be stored in its own table and connected using relational 
database principles.

---

Entities
Authors
Stores information about every author whose books belong to the library.

Example information:

Full name
Country
Birth year

One author may have written many books.

---

Books
Stores all books available in the library.

Each book includes information such as:

Title
ISBN
Publication year
Availability status
Author
Every book belongs to exactly one author.

---

Members
Stores information about registered library members.

Each member has personal information including:

First name
Last name
Email
Phone number
Registration date

Members are allowed to borrow books from the library.

---

Loans
Stores every borrowing transaction.

Each loan records:

Which member borrowed the book
Which book was borrowed
Loan date
Return date

The Loans table connects Members and Books together.
---

Database Relationships
The project contains the following relationships:

One Author can write many Books.
One Book can appear in many Loan records over time.
One Member can borrow many Books.
Every Loan belongs to one Member and one Book.

These relationships will be implemented using foreign keys.

---

Skills You Will Practice
During this project you will gain practical experience with:

PostgreSQL
Docker
pgAdmin 4
SQL
Relational database design
Primary Keys
Foreign Keys
Constraints
CRUD operations
Database normalization fundamentals

---

Technologies
The following technologies will be used throughout the project:

PostgreSQL 17
Docker
Docker Compose
pgAdmin 4

---
Learning Roadmap
The project will be developed progressively during the course.

Phase 1
Install Docker
Create PostgreSQL container
Create pgAdmin container
Connect pgAdmin to PostgreSQL

Phase 2
Create the database
Create tables
Define primary keys
Define foreign keys
Apply constraints

Phase 3
Insert sample records
Modify records
Delete records
Practice CRUD operations

Phase 4
Retrieve data with SELECT
Filter records
Sort results
Aggregate information
Group records

Phase 5
Learn SQL JOIN operations
Query information across multiple tables
Generate reports

---
Expected Outcome
By the end of this project, you will have created a fully functional relational 
database capable of:

Managing authors.
Managing books.
Managing library members.
Recording book loans.
Retrieving meaningful information using SQL queries.

More importantly, you will understand the complete process of designing and 
implementing a relational database, an essential skill for every backend and 
full-stack software developer.

---

Submission
Your final project should include:

PostgreSQL database
All SQL scripts used to create the database
SQL scripts for inserting sample data
SQL scripts demonstrating CRUD operations
SQL queries answering the exercises assigned throughout the course

---

Learning Goals
After completing this project, you should be able to confidently:

Design a relational database.
Build tables with appropriate data types.
Create relationships using foreign keys.
Write SQL statements to manipulate data.
Retrieve information using SQL queries.
Understand how databases support modern software applications.

This project represents your first step into database development and will 
provide the foundation needed for future backend technologies such as Node.js, 
Express.js, ORMs, REST APIs, and full-stack web applications.
# Library Management System Database Project

## Project Overview

Welcome to your first PostgreSQL database project.

project_introduction.md
6 KB
Cristian Camilo Corte Ortiz — 7/27/2026 4:50 PM
Dear Students,
We did not see you in today's class. Today, we officially began the
Backend Development Module by introducing the technologies,
concepts, and tools that will be used throughout the course. We also
prepared our development environment by installing PostgreSQL and
pgAdmin 4, and we created our first database,
library_db, which will serve as the foundation for our database
projects during the module.

Topics Covered
Introduction to Backend Development
Overview of the Backend Development Module
Course technologies and development stack
Relational database fundamentals
Introduction to PostgreSQL
Database Management Systems (DBMS)
Installing PostgreSQL
Installing pgAdmin 4
Connecting to a PostgreSQL server
Exploring the pgAdmin 4 interface
Creating databases using pgAdmin 4
Introduction to SQL
Database organization and schemas

Completed Today
Backend Module Overview — introduced the objectives, structure,
and technologies that will be covered throughout the course
Development Environment Setup — installed PostgreSQL and
pgAdmin 4
Server Configuration — connected to the local PostgreSQL server
using pgAdmin 4
pgAdmin 4 Tour — explored the interface and learned how to
navigate databases and database objects
First Database — created the library_db database that will
be used during the database course
Project Introduction — presented the Library Management System
project that students will build progressively throughout the module
Why This Is Important
Today's lesson established the foundation for backend development by
introducing relational databases and the tools used to manage them.
Students learned how PostgreSQL stores and organizes data, how pgAdmin 4
is used to administer database servers, and how to create a new
database. These concepts are essential before learning SQL, designing
database schemas, creating tables, defining relationships, and
integrating databases with backend applications built using Node.js and
Express.js.

Support
Please let me know if you are facing any issues attending the classes; I
will be happy to help you.

If you would like to watch the recordings of the missed lessons, please
mention it in the #recordings channel.
Cristian Camilo Corte Ortiz — Yesterday at 3:52 PM
Library database - project
Cristian Camilo Corte Ortiz — Yesterday at 5:05 PM
library_db.sql:
-- This is a SQL comment

-------------------------------------------------------------------------------
-- Command to create a database
CREATE DATABASE library_db;
-------------------------------------------------------------------------------

-------------------------------------------------------------------------------
-- Connect to the database before executing the
-- remaining statements.
-------------------------------------------------------------------------------

-- Command to create a table
-- Create the table 'Author'
CREATE TABLE author (
    id          INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    full_name   VARCHAR(50) NOT NULL,
    country     VARCHAR(30) NOT NULL,
    birth_year  INT NOT NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-------------------------------------------------------------------------------

-- Create the table 'Book'
CREATE TABLE book (
    id                  INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title               VARCHAR(100) NOT NULL,
    isbn                VARCHAR(30) UNIQUE NOT NULL,
    publication_year    INT NOT NULL,
    available           BOOLEAN DEFAULT TRUE,
    author_id           INT NOT NULL,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-------------------------------------------------------------------------------
-- Create the table 'Member'
CREATE TABLE member (
    id          INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    first_name  VARCHAR(50) NOT NULL,
    last_name   VARCHAR(50) NOT NULL,
    email       VARCHAR(100) UNIQUE NOT NULL,
    phone       VARCHAR(20) UNIQUE NOT NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-------------------------------------------------------------------------------

-- Create the table 'Loan'
CREATE TABLE loan (
    id              INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,          
    member_id       INT NOT NULL,
    book_id         INT NOT NULL,
    loan_date       DATE NOT NULL,
    return_date     DATE,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-------------------------------------------------------------------------------
-- Command to insert data (rows) in a table
-- Insert rows in the table 'author'
INSERT INTO author (full_name, country, birth_year)
VALUES ('J.K Rowling', 'United Kingdom', 1965);

INSERT INTO author (full_name, country, birth_year)
VALUES ('George Orwell', 'United Kingdom', 1903);

INSERT INTO author (full_name, country, birth_year)
VALUES 
('Gabriel Garcia Marquez', 'Colombia', 1927),
('Jane Austen', 'United Kingdom', 1775),
('Stephen King', 'United States', 1947);
-------------------------------------------------------------------------------

-- Insert rows in the table 'book'
INSERT INTO book (title, isbn, publication_year, available, author_id)
VALUES
('Harry Potter and the Philosopher''s Stone', '9780747532743', 1997, TRUE, 1),
('1984', '9780451524935', 1949, TRUE, 2),
('One hundred years of solitude', '9780307474728', 1967, TRUE, 3),
('Pride and Prejudice', '9780141439518', 1813, FALSE, 4),
('The Shining', '9780307743657', 1977, FALSE, 5);
-------------------------------------------------------------------------------

-- Display the records from a table
SELECT * FROM author;
-------------------------------------------------------------------------------
SELECT * FROM book;
 
Code Challenge 1: Insert Data into the Library Database
Objective
In this challenge, you will practice inserting records into an existing
PostgreSQL database using the INSERT INTO statement.

You will work with the member and loan tables of the
Library Management System project.

---

Scenario
The library has recently registered several new members, and some of
them have already borrowed books.

Your task is to insert the new members into the database and then record
their corresponding book loans.

---

Requirements
Part 1 - Insert Members
Insert the following five members into the member table.

| First Name | Last Name | Email | Phone |
|------------|-----------|-------|-------|
| Olivia | Martinez | olivia.martinez@email.com | 555-2001 |
| Ethan | Walker | ethan.walker@email.com | 555-2002 |
| Isabella | Hall | isabella.hall@email.com | 555-2003 |
| Liam | Young | liam.young@email.com | 555-2004 |
| Mia | Allen | mia.allen@email.com | 555-2005 |

Do not insert values for:

id
created_at

These fields are generated automatically.

---
Expected Deliverables
Create a SQL script named:

insert_data.sql


The script must contain:

Five INSERT statements (or one multi-row INSERT) for themember table.
Five INSERT statements (or one multi-row INSERT) for the loan
table.

---

Verification
After inserting the records, execute the following queries to verify
that the data was inserted successfully.

SELECT * FROM member;


SELECT * FROM loan;


---

Challenge Rules
Use only SQL.
Do not modify the table structure.
Do not manually assign values to identity columns.
Ensure that every loan references an existing member and an existing
book.
Verify your results before submitting.

---

Learning Objectives
By completing this challenge, you will practice:

Writing INSERT INTO statements.
Inserting multiple records.
Working with automatically generated identity columns.
Understanding relationships between tables.
Maintaining data integrity in a relational database.
Verifying inserted data using SELECT queries.
# Code Challenge 1: Insert Data into the Library Database

## Objective

In this challenge, you will practice inserting records into an existing
PostgreSQL database using the `INSERT INTO` statement.

challenge.md
3 KB
Cristian Camilo Corte Ortiz — Yesterday at 5:12 PM
Dear Students,
We did not see you in today's class. Today, we continued our Backend
Development Module by starting our first practical database exercises
with PostgreSQL. We worked with SQL commands to create database
structures, create tables, insert records, and retrieve stored data.

During the lesson, we continued developing the Library Management
System project by creating the first database entities and populating
them with initial records. This activity introduced the fundamental
workflow used when working with relational databases.

Topics Covered
Introduction to SQL commands
Creating databases with PostgreSQL
Understanding database tables and entities
Creating tables using CREATE TABLE
PostgreSQL data types
Primary keys
Identity columns
Table constraints:

  
PRIMARY KEY
NOT NULL
UNIQUE
DEFAULT
Inserting records using INSERT INTO
Adding multiple rows in a table
Retrieving information using SELECT
Displaying table records
Reviewing database structure using pgAdmin 4

Completed Today
Database Creation — created the library_db database for the
Library Management System project

Author Table — created the first database entity with fields for
author information, including primary keys and automatic timestamps

Book Table — created the table structure to store book information
and prepare relationships with authors

Member Table — created the table to store registered library
members

Loan Table — created the table structure to manage book borrowing
records

Data Insertion — inserted initial records into the database using
SQL INSERT INTO commands

Data Retrieval — used SELECT statements to display stored rows
and verify that the information was successfully inserted

Library Database Progress — continued building the foundation of
the Library Management System database
Why This Is Important
Today's lesson introduced the core concepts of relational database
development. Students learned how applications store information using
structured tables and how SQL is used to create and manipulate data.

Understanding how to create tables, define constraints, insert records,
and retrieve information is essential before moving into more advanced
database concepts such as relationships, queries, joins, and connecting
databases with backend applications using technologies like Node.js and
Express.js.

Support
Please let me know if you are facing any issues attending the classes; I
will be happy to help you.

If you would like to watch the recordings of the missed lessons, please
mention it in the #recordings channel.
Cristian Camilo Corte Ortiz — 2:23 PM
https://github.com/primetek-africa/codecamp-academy-module-1-2026/blob/main/class-138/solution.sql
GitHub
codecamp-academy-module-1-2026/class-138/solution.sql at main · pr...
Contribute to primetek-africa/codecamp-academy-module-1-2026 development by creating an account on GitHub.
Contribute to primetek-africa/codecamp-academy-module-1-2026 development by creating an account on GitHub.
Cristian Camilo Corte Ortiz — 2:39 PM
SQL Query Practice
Library Management System
Objective
Practice retrieving information from a PostgreSQL database using the
SELECT statement and different SQL clauses.

Complete the following exercises by writing SQL queries for each
question.

---

Basic Queries
Exercise 1
Display all authors.

---

Exercise 2
Display all books.

---

Exercise 3
Display all members.

---

Exercise 4
Display all loans.

---

Exercise 5
Display only the title and publication year of every book.

---

Exercise 6
Display the first name, last name, and email of every member.

---

Filtering Data
Exercise 7
Display all books that are currently available.

---

Exercise 8
Display all books that are currently unavailable.

---

Exercise 9
Display all authors from the United Kingdom.

---

Exercise 10
Display all authors born after 1940.

---
Exercise 11
Display all books published after 1950.

---

Exercise 12
Display all members whose first name is "Olivia".

---

Exercise 13
Display all loans that have not yet been returned.

---

Exercise 14
Display all completed loans (those with a return date).

---

Sorting Data
Exercise 15
Display all authors ordered alphabetically by full name.

---

Exercise 16
Display all books ordered by publication year from oldest to newest.

---

Exercise 17
Display all books ordered by publication year from newest to oldest.

---

Exercise 18
Display all members ordered by last name.

---

Exercise 19
Display all loans ordered by loan date.

---
Limiting Results
Exercise 20
Display only the first three books.

---

Exercise 21
Display only the first two authors.

---

Exercise 22
Display the newest two published books.

---

Aggregate Functions
Exercise 23
Count the total number of authors.

---

Exercise 24
Count the total number of books.

---

Exercise 25
Count the total number of members.

---

Exercise 26
Count the total number of loans.

---

Exercise 27
Find the oldest publication year.

---

Exercise 28
Find the newest publication year.

---

Exercise 29
Calculate the average publication year of all books.

---
Pattern Matching
Exercise 30
Display all authors whose name starts with the letter "J".

---

Exercise 31
Display all books whose title contains the word "Harry".

---

Exercise 32
Display all members whose last name ends with "er".

---

Logical Operators
Exercise 33
Display books published after 1950 that are available.

---

Exercise 34
Display authors who are from the United Kingdom or the United States.

---

Exercise 35
Display members whose first name is "Olivia" or "Mia".

---
Bonus Challenges
Bonus 1
Display all books published between 1900 and 2000.

---

Bonus 2
Display all authors who are not from the United Kingdom.

---

Bonus 3
Display all books whose title contains the letter "o".

---

Bonus 4
Count how many books are currently available.

---

Bonus 5
Count how many books are currently unavailable.

---

Submission
Create a SQL file named:

queries.sql


Write one SQL query for each exercise.

Do not modify the database structure or the existing records. Only use
SELECT statements to retrieve the requested information.
# SQL Query Practice
## Library Management System

### Objective

Practice retrieving information from a PostgreSQL database using the
`SELECT` statement and different SQL clauses.

Complete the following exercises by writing SQL queries for each
question.

---

# Basic Queries

### Exercise 1

Display all authors.

---

### Exercise 2

Display all books.

---

### Exercise 3

Display all members.

---

### Exercise 4

Display all loans.

---

### Exercise 5

Display only the title and publication year of every book.

---

### Exercise 6

Display the first name, last name, and email of every member.

---

# Filtering Data

### Exercise 7

Display all books that are currently available.

---

### Exercise 8

Display all books that are currently unavailable.

---

### Exercise 9

Display all authors from the United Kingdom.

---

### Exercise 10

Display all authors born after 1940.

---

### Exercise 11

Display all books published after 1950.

---

### Exercise 12

Display all members whose first name is "Olivia".

---

### Exercise 13

Display all loans that have not yet been returned.

---

### Exercise 14

Display all completed loans (those with a return date).

---
... (181 lines left)

queries.md
4 KB
https://github.com/primetek-africa/codecamp-academy-module-1-2026/tree/main/class-139
GitHub
codecamp-academy-module-1-2026/class-139 at main · primetek-africa...
Contribute to primetek-africa/codecamp-academy-module-1-2026 development by creating an account on GitHub.
codecamp-academy-module-1-2026/class-139 at main · primetek-africa...
﻿
# SQL Query Practice
## Library Management System

### Objective

Practice retrieving information from a PostgreSQL database using the
`SELECT` statement and different SQL clauses.

Complete the following exercises by writing SQL queries for each
question.

---

# Basic Queries

### Exercise 1

Display all authors.

---

### Exercise 2

Display all books.

---

### Exercise 3

Display all members.

---

### Exercise 4

Display all loans.

---

### Exercise 5

Display only the title and publication year of every book.

---

### Exercise 6

Display the first name, last name, and email of every member.

---

# Filtering Data

### Exercise 7

Display all books that are currently available.

---

### Exercise 8

Display all books that are currently unavailable.

---

### Exercise 9

Display all authors from the United Kingdom.

---

### Exercise 10

Display all authors born after 1940.

---

### Exercise 11

Display all books published after 1950.

---

### Exercise 12

Display all members whose first name is "Olivia".

---

### Exercise 13

Display all loans that have not yet been returned.

---

### Exercise 14

Display all completed loans (those with a return date).

---

# Sorting Data

### Exercise 15

Display all authors ordered alphabetically by full name.

---

### Exercise 16

Display all books ordered by publication year from oldest to newest.

---

### Exercise 17

Display all books ordered by publication year from newest to oldest.

---

### Exercise 18

Display all members ordered by last name.

---

### Exercise 19

Display all loans ordered by loan date.

---

# Limiting Results

### Exercise 20

Display only the first three books.

---

### Exercise 21

Display only the first two authors.

---

### Exercise 22

Display the newest two published books.

---

# Aggregate Functions

### Exercise 23

Count the total number of authors.

---

### Exercise 24

Count the total number of books.

---

### Exercise 25

Count the total number of members.

---

### Exercise 26

Count the total number of loans.

---

### Exercise 27

Find the oldest publication year.

---

### Exercise 28

Find the newest publication year.

---

### Exercise 29

Calculate the average publication year of all books.

---

# Pattern Matching

### Exercise 30

Display all authors whose name starts with the letter "J".

---

### Exercise 31

Display all books whose title contains the word "Harry".

---

### Exercise 32

Display all members whose last name ends with "er".

---

# Logical Operators

### Exercise 33

Display books published after 1950 that are available.

---

### Exercise 34

Display authors who are from the United Kingdom or the United States.

---

### Exercise 35

Display members whose first name is "Olivia" or "Mia".

---

# Bonus Challenges

### Bonus 1

Display all books published between 1900 and 2000.

---

### Bonus 2

Display all authors who are not from the United Kingdom.

---

### Bonus 3

Display all books whose title contains the letter "o".

---

### Bonus 4

Count how many books are currently available.

---

### Bonus 5

Count how many books are currently unavailable.

---

## Submission

Create a SQL file named:

```text
queries.sql
```

Write one SQL query for each exercise.

Do not modify the database structure or the existing records. Only use
`SELECT` statements to retrieve the requested information.
