INSERT INTO department (label)
VALUES
('Accounting'),
('Sales'),
('Analytics'),
('IT'),
('Marketing');

INSERT INTO role (title, department_id, salary)
VALUES
('Accountant', 1, 90000), 
('Budget Analyst', 1, 70000),
('Salesperson', 2, 75000),
('Sales Lead', 2, 92000),
('Data Analyst', 3, 65000),
('Business Analyst', 3, 72000),
('Database Administrator', 4, 85000),
('IT Support Agent', 4, 57000),
('Marketing Manager', 5, 80000),
('Digital Marketing Specialist', 5, 60000);

INSERT INTO employees (first_name, last_name, role_id, manager)
VALUES
('Eren', 'Yeager', 1, "Zoe Hange"),
('Mikasa', 'Ackerman', 8, "Levi Ackerman"),
('Armin', 'Arlert', 5, "Erwin Smith"),
('Levi', 'Ackerman', 7, NULL),
('Erwin', 'Smith', 6, NULL),
('Zoe', 'Hange', 2, NULL),
('Jean', 'Kirstein', 4, NULL),
('Connie', 'Springer', 10, "Reiner Braun"),
('Sasha', 'Blouse', 3, "Jean Kirstein"),
('Reiner', 'Braun', 9, NULL);