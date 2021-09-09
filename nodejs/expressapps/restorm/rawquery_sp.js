const path = require("path");

// load sequelize object Model
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("Company", "root", "P@ssw0rd_", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    min: 0,
    max: 5,
    idle: 10000,
  },
  define: {
    timestamps: false,
  },
});

const deptModel = require(path.join(__dirname, "./models/Department"))(
    sequelize,
    Sequelize.DataTypes
  );
  

// define an async function to execute select query

async function getDepartments(){
    let depts = await sequelize.query("SELECT * from Department");
    return depts;
}

// call the function

getDepartments().then((resultSet)=>{
    console.log(`Query Executed ${JSON.stringify(resultSet)}`);
}).catch((error)=>{
    console.log(`Error Occured ${error}`);
});

// async function createDepartment(){
//     let dept  = sequelize.query(`insert into Department values (70, "Testing", "Pune", 100)`);
//     return dept;
// }

// console.log(`Create ${createDepartment()}`);

// map the Model with the query and execute it

// async function createDepartmentWithModelMapping(){
//     let dept  = sequelize.query(`insert into Department values (80, "Build", "Pune", 100)`,{
//         mapToModel:true,
//         model:deptModel
//     });
//     return dept;
// }

// console.log(`Create ${createDepartmentWithModelMapping()}`);

// Call Stored Procedures

async function callGetEmployeesStoredProcedure(){
    let depts = await sequelize.query("CALL getEmployees()");
    return depts;
}
 

callGetEmployeesStoredProcedure().then((resultSet)=>{
    console.log(`Query Executed ${JSON.stringify(resultSet)}`);
}).catch((error)=>{
    console.log(`Error Occured ${error}`);
});


async function callInsertEmployeeStoredProcedure(){
    let depts = await sequelize.query("CALL insertEmployee(203, 'Neeta', 'Manager', 230000, 10)");
    return depts;
}
 
callInsertEmployeeStoredProcedure().then((resultSet)=>{
    console.log(`Query Executed ${JSON.stringify(resultSet)}`);
}).catch((error)=>{
    console.log(`Error Occured ${error}`);
});
