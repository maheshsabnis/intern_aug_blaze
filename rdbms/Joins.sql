-- JOINS, provides an Intersection across tables and read only data that match with conditions
-- INNER JOIN aka Simple Join, reads only matching data
	-- Intesection across tables in Qery takes place and only returns matching records 
-- The followign Query will Read All DeptNo from Department Table and match it with
-- EMployees and Read the Reords 
-- Resiult will be All Records from 10,20,30,40
Select Department.DeptNo as DeptNo, DeptName, Salary, EmpNo,EmpName
From Department
INNER Join Employee
Where Department.DeptNo = Employee.DeptNo;

-- Left Outer Join aka LEFT JOIN
-- Returns all records from Table in Left hand side specified in the on condition
-- returns only matching record from the right side table based on condition
Select Department.DeptNo as DeptNo, DeptName, Salary, EmpNo,EmpName
From Department
LEFT  Join Employee
on  Department.DeptNo = Employee.DeptNo;

-- Right Outer Join aka Right Join
-- Opposite to Left Join

Select Department.DeptNo as DeptNo, DeptName, Salary, EmpNo,EmpName
From Department
Right  Join Employee
on  Department.DeptNo = Employee.DeptNo;

