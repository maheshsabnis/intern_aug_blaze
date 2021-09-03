use Company;
-- Selecting Employees mbased on DeptNo
select * from Employee Where DeptNo=10;

-- Using Scalary Functions of MySQL
-- max(), min(), avg(),count(),sum(), etc.
-- read max salary of the Employee
select max(Salary) from Employee;
-- count if employees for a department
select count(*) from Employee where DeptNo=20;
-- count of EMployees based on Each Department
select DeptNo, count(*) from Employee group by DeptNo;
-- max salary of Employee per Department
select DeptNo, count(*), max(Salary) from Employee group by DeptNo;
-- MAx Salary for DeptNo 40
select max(Salary) from Employee where DeptNo =40;
-- Reading Second MAx Salary
select max(Salary) from Employee
 where Salary < (Select max(Salary) from Employee where DeptNo=10);

select Salary from EMployee Where DeptNo=10;

-- Using Order By Record Display descending
select * from EMployee order by Salary desc; 

-- Using Order By Record Display (Default is Ascending Order)
select * from EMployee order by Salary; 


-- Reading Data from Multiple Tables

select EmpNo, EmpName, DeptName,Salary, Designation,Location 
from
Employee,Department 
where Employee.DeptNo=Department.DeptNo;



 





