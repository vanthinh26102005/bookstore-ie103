-- Create a new database called 'bookstore_db'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT [name]
        FROM sys.databases
        WHERE [name] = N'bookstore_db'
)
CREATE DATABASE bookstore_db
GO

CREATE TABLE Books (
  Id INT PRIMARY KEY IDENTITY,
  Title NVARCHAR(255),
  Author NVARCHAR(255),
  Price DECIMAL(10, 2)
);

INSERT INTO Books (Title, Author, Price)
VALUES 
('Harry Potter', 'J.K. Rowling', 12.99),
('Sherlock Holmes', 'Arthur Conan Doyle', 9.5);