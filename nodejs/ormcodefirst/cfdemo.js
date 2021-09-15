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
const person = sequelize.define('person', {
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type:DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    }
});

// generate database and table
// force:true, create a table
person.sync({force:true}).then(()=>{
    // creating table with the COlumn Values
    return person.create({
        firstName: 'Mahesh', lastName:'Sabnis', age:45
    }); 
}).catch((error)=>{
    console.log(`Error Occured ${error.message}`);
});

console.log('Done Please check database');