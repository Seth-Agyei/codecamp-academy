--This is a SQL comment

--command to create a database

CREATE DATABASE Library_db;

--connect to the database before executing the remaining statements

--command to create a table
--create the table "arthur"

CREATE TABLE author (
   id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   full_name VARCHAR(50) NOT NULL,
   country    VARCHAR(50) NOT NULL,
   birth_year  INT NOT NULL,
   create_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);


-- create the table 'book'

CREATE TABLE book  (
   id          INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   
   title      VARCHAR(100) NOT NULL,
   isbn        VARCHAR(30) UNIQUE NOT NULL,
   publication_year  INT NOT NULL,
  available        BOOLEAN DEFAULT TRUE
   author_id    INT NOT NULL,
  create_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  
);


-- create the table 'member'

CREATE TABLE member(
   id        INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   first_name VARCHAR(50) NOT NULL,
   last_name VARCHAR(50) NOT NULL,
   email  VARCHAR(100)  UNIQUE NOT NULL,
   phone  VARCHAR(20)  UNIQUE NOT NULL,
  create_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
  
-- create the table 'loan'

CREATE TABLE loan(
   id        INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   member_id    INT NOT NULL,
   book_id    INT NOT NULL,
   loan_date    DATE NOT NULL,
   return_date    DATE,
  create_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)


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

-- code challenge
-- insert rows in the member table
INSERT INTO member (first_name,last_name,email,phone)
VALUES  
('Olivia'  'Martinez'  'olivia.martinez@email.com'  '555-2001')
('Ethan'  'Walker'  'ethan.walker@email.com'  '555-2002') 
('Isabella'  'Hall'  'isabella.hall@email.com'  '555-2003' )
('Liam' 'Young'  'liam.young@email.com'  '555-2004')
('Mia'  'Allen'  'mia.allen@email.com'  '555-2005')
