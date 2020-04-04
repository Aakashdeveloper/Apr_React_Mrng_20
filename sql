SHOW FULL TABLES;
SELECT * from customers  INNER JOIN offices  ON customers.city = offices.city order by officeCode asc; 

CREATE TABLE Employee (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
email VARCHAR(50),
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)


INSERT INTO Employee (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com')
INSERT INTO Employee (firstname, lastname, email)
VALUES ('Mayank', 'Gupta', 'Mayank@example.com')
INSERT INTO Employee (firstname, lastname, email)
VALUES ('Aakash', 'Handa', 'Aakash@example.com')
INSERT INTO Employee (firstname, lastname, email)
VALUES ('Meha', 'Bandhari', 'meha@example.com')
INSERT INTO Employee (firstname, lastname, email)
VALUES ('Bhumika', 'Bajpai', 'bhumi@example.com')
INSERT INTO Employee (firstname, lastname, email)
VALUES ('Aakash', 'Gupta', 'aakag@example.com')

DESCRIBE customers;
SELECT * FROM customers WHERE country='USA';
SELECT DISTINCT customerNumber FROM customers;
SELECT DISTINCT country FROM customers;
SELECT * FROM customers WHERE customerNumber=112;
SELECT * FROM customers WHERE state="CA" and country="USA";
SELECT * FROM customers WHERE state="CA" or country="USA";
SELECT * FROM customers WHERE country='USA' AND (state='MA' OR state='NY');
SELECT * FROM Customers
WHERE NOT Country='Germany' AND NOT Country='USA';
SELECT * FROM customers ORDER BY country;

SELECT * FROM customers ORDER BY country asc;
SELECT * FROM customers ORDER BY country asc, customerName DESC;
SELECT * FROM customers where addressLine2 IS NULL;
SELECT * FROM customers where addressLine2 IS NOT NULL;
UPDATE Employee SET lastname = 'Alfred' WHERE id=1;
DELETE FROM Employee WHERE lastname='Alfreds';
DELETE FROM Employee WHERE id=1;
SELECT * FROM Employee LIMIT 3;

SELECT * FROM Employee WHERE country='Germany' LIMIT 3;
SELECT * FROM customers WHERE state="CA" or country="USA" LIMIT 3;
SELECT * FROM Customers WHERE Country='Germany' AND ROWNUM <= 3;
SELECT MAX(buyPrice) AS SmallestPrice FROM products;
SELECT MIN(buyPrice) AS SmallestPrice FROM products;
SELECT COUNT(productCode) FROM products;
SELECT AVG(buyPrice) FROM products;
SELECT SUM(quantityOrdered) FROM orderdetails;
SELECT * FROM customers WHERE customerName LIKE 'a%';
SELECT * FROM customers WHERE customerName LIKE '%a%';
SELECT * FROM customers WHERE customerName LIKE 'a%r';
SELECT * FROM customers WHERE customerName LIKE 'a%r';