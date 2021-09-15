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
const employee = sequelize.define('employee', {
    empName:{
        type: DataTypes.STRING
    }
});

const employees = [
    {empName:'A'},{empName:'B'},{empName:'C'},{empName:'D'},{empName:'E'}
];

// generate database and table
// force:true, create a table
employee.sync({force:true}).then(()=>{
     employee.bulkCreate(employees).then(()=>{
         console.log('Multiple Records are added');
     });
}).catch((error)=>{
    console.log(`Error Occured ${error.message}`);
});

console.log('Done Please check database');