USe Company;

-- Create a Stored Procedute to REad alll Records from EMployee Table

DELIMITER //
Create Procedure getEmployees()
BEGIN
	select * from Employee;
END //
DELIMITER ;


-- execute the Store Procedure

CALL getEmployees();


-- stored Procedure with input Parameters
-- use IN for Input Parameter
-- use OUT / OUTPUT for Output Parameter 

DELIMITER //
Create Procedure getEmployeesByDesig(
 IN desig varchar(200)
)
BEGIN
	select * from Employee 
    where Designation= desig;
END //
DELIMITER ;


CALL getEmployeesByDesig('Staff');


-- CReate a Stored Procedure for Writing Data
DELIMITER //
Create Procedure insertEmployee(
  IN eno int, 
  IN ename varchar(400),
  IN desig varchar(200),
  IN sal int,
  IN dno int
)
BEGIN
	insert into Employee(EmpNo,EmpName,Designation,Salary,DeptNo)
    values
    (eno,ename,desig,sal,dno);
END //
DELIMITER ;

call  insertEmployee(201, 'Neeta', 'Manager', 340000, 20);

-- Creating a Stored Proc that returns values
-- sum of salary based on DeptNo
select sum(salary) from Employee where DeptNo=10; -- 14013333

DELIMITER //
Create Procedure getSumSalByDeptNo(
  IN dno int
)
BEGIN
	 select sum(salary) from Employee where DeptNo=dno;
END //
DELIMITER ;

Call getSumSalByDeptNo(10);

-- pass the inout parameter  to return data from Stored Procedute

DELIMITER //
Create Procedure getSumSalByDeptNoOutparameter(
  INOUT sumsal int,
  in dno int 
)
BEGIN
 -- put the sum of salary into a sumsal inout parameter
	 select sum(salary) into sumsal from Employee where DeptNo=dno;
END //
DELIMITER ;

-- calling the Stored Proc
-- pass the expected parameter using @sign
Call getSumSalByDeptNoOutparameter(@SumSalary, 10);
select @SumSalary as Salary;

-- drop stored Proc
DROP procedure getSumSalByDeptNoOutparameter;

-- STored Procedure that is using COnditional Statements
-- General Suggestions of defining input parameter names
-- as parameter name should start from 'p' e.g. pDeptNo 
DELIMITER $$
Create Procedure GetCountOfEmployeesByDeptNo(
  IN pDeptNo int,
  OUT pCount int
)
Begin
	IF pDeptNo > 0 THEN
		SELECT Count(*) as pCount 
        FROM Employee
        WHERE DeptNo=pDeptNo;
    ELSE
     Set pCount = 0;
    END IF;
End $$
DELIMITER ;

CALL GetCountOfEmployeesByDeptNo(0, @pCount);
select @pCount;

-- CReation Views 
-- We can hide selected columns from the Query
-- We can restrict query to execute on selected columns od the table

-- CReate a View that will only allow to access EmpName and Designation
-- from Employee Table

Create View EmpNameDesignation AS
SELECT EmpName, Designation
FROM Employee;

select * from empnamedesignation;

-- Create a View that will be used to contains DeptNo,DeptName and Sum of Salaries
-- for Each Department


Create View DepartmentwiseSumOfSalary as
Select Department.DeptNo as DeptNo, DeptName, Sum(Salary) as Salary
From Department, Employee
Where Department.DeptNo = Employee.DeptNo
group by Employee.DeptNo; 








 










