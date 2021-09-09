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

const deptModel = require(path.join(__dirname, "./../models/Department"))(
  sequelize,
  Sequelize.DataTypes
);

// the class will use ES 6+ async and await code for accessing Database using
// sequelize 
class DepartmentDataAccess {
    async getDepartments(req,resp){
        await sequelize.sync({force:false});
        let rows = await deptModel.findAll();
        if(rows) {
           return resp.status(200).send({
                message: "Data is Read Successfully",
                rowCount: rows.length,
                rows: rows,
              });
        }
        return resp
        .status(500) // internal server error
        .send({ message: "Some Error Occured"}); 
    }


    async getDepartmentById(req,resp){
        let id = parseInt(req.params.id);
        await sequelize.sync({force:false});
        let row = await deptModel.findOne({where:{DeptNo:id}});
        if(row) {
           return resp.status(200).send({
                message: "Data is Read Successfully",
                rows: row,
              });
        }
        return resp
        .status(500) // internal server error
        .send({ message: "Some Error Occured" }); 
    }

    async createDepartment(req,resp){
        const dept  = req.body;
        await sequelize.sync({ force: false });
        let rec = deptModel.create(dept); 
       if(rec){
          return resp.status(200).send({
            message: "Data is Added Successfully",
            rows: rec,
          });
        }
    
         return resp
            .status(500)  
            .send({ message: "Some Error Occured" }); 
    }
}
module.exports = DepartmentDataAccess;














