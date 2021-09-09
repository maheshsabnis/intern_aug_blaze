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

async function UnTransactions() {
  let tx = await sequelize.transaction();
  try {
    let dept = await deptModel.create(
      {
        DeptNo: 101,
        DeptName: "Dept_101",
        Location: "Surat",
        Capacity: 300,
      },
      { transaction: tx } // passing the Transaction Scope Explicitely
    );

    let emp = await empModel.create(
      {
        EmpNo: 205,
        EmpName: "Neeta",
        Designation: "Manager",
        Salary: 130000,
        DeptNo: 60,
      },
      { transaction: tx } // passing the Transaction Scope Explicitely
    );

    // Explicitely Commit TRansaction
    await tx.commit();
  } catch (ex) {
    console.log(`Erro Occured ${ex.message}`);
    tx.rollback(); // Rollback
  }
}

UnTransactions()
  .then((res) => {
    console.log(`Done Dana Done ${res}`);
  })
  .catch((error) => {
    console.log(`Arrrrrrrrrrrr ${error}`);
  });
