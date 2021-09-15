const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("CFB1", "root", "P@ssw0rd_", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    min: 0,
    max: 5,
    idle: 10000,
  }
//   ,
//   define:{
//       timestamps:false
//   }
});
// define a model
// Parameter 1: ModelName, this will be mapped with the database
// Parameter 2: Atributes aka COlumns definitions for the Table
const emp = sequelize.define('emps', {
    empName:{
        type: DataTypes.STRING
    }
});

// create an another model
const dept = sequelize.define('depts', {
    deptName: {
        type: DataTypes.STRING
    }
});
// Belongs to relationships
emp.belongsTo(dept);

const employees = [
    {empName:'A'},{empName:'B'},{empName:'C'},{empName:'D'},{empName:'E'}
];

const departments = [
    {deptName:'D1'},{deptName:'D2'}
];

// generate database and table
// force:true, create a table
sequelize.sync({force:true}).then(()=>{
     emp.bulkCreate(employees).then(()=>{
         console.log('Multiple Records are added');
     }).then((emps)=>{
        employees.forEach((e)=>{
              dept.create(departments[0]).then((d)=>{
                  e.setDept(d);
              });
          });
     });
}).catch((error)=>{
    console.log(`Error Occured ${error.message}`);
});

console.log('Done Please check database');