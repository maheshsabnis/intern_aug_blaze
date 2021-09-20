export class EmployeeLogic {
     constructor(){
         this.employees=[
            {EmpNo:101, EmpName:'A', Designation:'Manager', Salary:1222, DeptName:'IT'}
         ];
     }

     getEmployees(){
         return this.employees;
     }
     saveEmployee(emp){
         this.employees.push(emp);
         return this.employees;
     }
}