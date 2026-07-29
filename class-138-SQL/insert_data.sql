-- code challenge
-- insert rows in the member table

INSERT INTO member (first_name,last_name,email,phone)
VALUES  
('Olivia'  'Martinez'  'olivia.martinez@email.com'  '555-2001'),
('Ethan'  'Walker'  'ethan.walker@email.com'  '555-2002') ,
('Isabella'  'Hall'  'isabella.hall@email.com'  '555-2003' ),
('Liam' 'Young'  'liam.young@email.com'  '555-2004'),
('Mia'  'Allen'  'mia.allen@email.com'  '555-2005')


-- Insert rows in loan table
INSERT INTO loan (member_id,book_id,loan_date,return_date)
VALUES
('3145','1001','2026-07-27','2026-07-30'),
('3146','2001','2026-07-28','2026-07-31'),
('3147','3001','2026-07-29','2026-08-01'),
('3148','4001','2026-07-30','2026-08-03'),
('3149','5001','2026-07-31','2026-08-05')


-------------------------------------
--Display the records from a table
SELECT * FROM member;
--------------------------------
SELECT * FROM loan;
-----------------------------------

