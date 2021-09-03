-- create database
Create Database Company;

-- use the database for the Transactions of Other commands e.g. CReating TAble
Use Company;

-- Add Tables in Database
Create Table Department(
	DeptNo int Primary Key,
    DerptName varchar(200)  Not Null,
    Location varchar(200) Not Null
) ;

-- Alter the table and add column in it
Alter Table Department Add Column Capcity int not null;

-- read all records from Table
select * from Department;

-- Insert data in Department Table
Insert into Department values (10, 'IT', 'Pune', 100);
Insert into Department values (20, 'HRD', 'Pune', 20);
Insert into Department values (30, 'SALES', 'Pune', 20);
Insert into Department values (40, 'ACCOUNTING', 'Pune', 3);
Insert into Department values (50, 'ADMIN', 'Pune', 3);

-- Update Query
-- Update [Table-Name] Set [Col1=value.....] Where [Condition]
update Department set Capcity=10 where DeptNo=50;

-- Change the COlumn NAme from 'capcity' to 'capacity'
-- Alter [Table-Name] Change [OldNAme][NewNAme] Datatype size;
Alter Table Department  Change Capcity Capacity int;

-- Create another Table with the FOreign Key
-- By Putiing the Foreign Key in the Employee
-- one EMployee has One Department (one-to-one)
-- DeptNo is a foreign Key, the Department is now a Parent Table
-- One-Department-Have-Multiple-Employees (One-to-Many) ralationship
Create Table Employee(
  EmpNo int Primary Key,
  EmpName varchar(400) not null,
  Designation varchar(300) not null,
  Salary int Not null,
  DeptNo int not null,
  constraint FK_DEPTNO  -- COnstraint Name
			-- [ColumnName-of-Current-TAble] references [Parent-Table] (Column-Name-Form-Parent-Table)
  foreign key (DeptNo) references Department (DeptNo)
);

-- INsert the data in Employee Table
insert into employee Value (101, 'Mahesh', 'Director', 123333, 10);
-- The following statemenet will throw error because teh Foreign Key Value for
-- DeptNo as 100 is not present in Department table
-- Refertential Integrity COnstraint execution
-- insert into employee Value (102, 'Tejas', 'Director', 123333, 100);

insert into Employee Values(102, 'Vivek', 'Manager', 120000, 20);
insert into Employee Values(103, 'Mukesh', 'Manager', 120000, 30);
insert into Employee Values(104, 'Satish', 'Manager', 120000, 40);
insert into Employee Values(105, 'Vinay', 'Lead', 120000, 10);
insert into Employee Values(106, 'Tejas', 'Lead', 120000, 20);
insert into Employee Values(107, 'Tushar', 'Lead', 120000,30);
insert into Employee Values(108, 'Kaushubh', 'Lead', 120000, 40);
insert into Employee Values(109, 'Nainish', 'Staff', 120000, 10);
insert into Employee Values(110, 'AArav', 'Staff', 120000, 20);
insert into Employee Values(111, 'Krushna', 'Staff', 120000, 30);
insert into Employee Values(112, 'Sujay', 'Staff', 120000, 40);
insert into Employee Values(113, 'Amit', 'Assistant', 120000, 10);
insert into Employee Values(114, 'Abhijit', 'Assistant', 120000, 20);
insert into Employee Values(115, 'Ajit', 'Assistant', 120000, 30);
insert into Employee Values(116, 'Krutanjay', 'Assistant', 120000, 40);
insert into Employee Values(117, 'Nandu', 'Operator', 120000, 10);
insert into Employee Values(118, 'Anil', 'Operator', 120000, 20);
insert into Employee Values(119, 'Abhay', 'Operator', 120000, 30);
insert into Employee Values(120, 'Sanjay', 'Operator', 120000, 40);







select * from Employee;

-- Users Tablle with Unique COnstraint

create table Users(
  UserId int Primary Key,
  UserName varchar(100) unique not null,
  PAssword varchar(20) not null
);

insert into Users values(1, 'mahesh@msit.com', 'Pas@123');
-- Following statrement will geberate error becuase Unique Key for UserName value is already present 
insert into Users values(2, 'mahesh@msit.com', 'Pas@321');

-- creating table having identity Key
Create table LeaveApplication (
  ApplicationId int auto_increment primary key,
  EmpNo int not null,
  Reason varchar(1000) not null,
  FromDate Date Not null,
  ToDate Date Not Null,
  ActualReportingDate Date
);

















