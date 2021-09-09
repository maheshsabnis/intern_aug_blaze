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

const empModel = require(path.join(__dirname, "./models/Employee"))(
    sequelize,
    Sequelize.DataTypes
);

async function Transactions(){
    try{
        // call transaction() method to define an async scope for 
        // performing operations across multiple tavle
        let tx = await sequelize.transaction(async (t)=>{ // t is transaction scope to monitor all transactions
             let dept = await deptModel.create({
                 DeptNo:100, DeptName: 'Dept_100', Location:'Surat', Capacity:300
             }, {transaction:t}); // inform the DB that the Current Operation is a part of trannsaction so wait for all transactions to be completed

             let emp = await empModel.create({
                EmpNo:204, EmpName:'Neeta', Designation:'Manager', Salary:130000, DeptNo:60
             }, {transaction:t});

             // When all DML queries are successful the Transaction will Auto-Commit else RollBack 

        });
    }catch(ex){
        console.log(`Erro Occured ${ex.message}`);
    } 
}

Transactions().then((res)=>{
    console.log(`Done Dana Done ${res}`);
}).catch((error)=>{
    console.log(`Arrrrrrrrrrrr ${error}`);
});