const express = require("express");
const cors = require("cors");
const path = require("path");

// load sequelize object Model
const { Sequelize, DataTypes } = require("sequelize");

const instance = express();
instance.use(express.urlencoded({ extended: false }));
instance.use(express.json());
instance.use(
  cors({
    origin: "*",
    allowedHeaders: "*",
    methods: "*",
  })
);

// define DB COnnection using sequelize object Model
// databasename, username, password
const sequelize = new Sequelize("Company", "root", "P@ssw0rd_", {
  host: "localhost", // server name
  dialect: "mysql", // database provider
  pool: {
    min: 0, // connection pool with min number of connection objects
    max: 5, // connect pool for max. number of connection object
    idle: 10000, // wait for 10 mins for database to respond for a connection, else get disconnected from database
  },
  define: {
    timestamps: false, // the autom generated value for a table row when new row is created. This is used for conncurrentcy Management
  },
});

// lets map with the table
// map each property from Department.js with the Department Table
// using the sequelize object defined above to connect to database
// Also make sure that DataTypes used by Department.js must map
// with datatypes for Columns in table
const deptModel = require(path.join(__dirname, "./models/Department"))(
  sequelize,
  Sequelize.DataTypes
);

// Lets the Fun Begin of Sequelize with REST APIs

instance.get("/api/departments", (req, resp) => {
  // connect but do not overwrite table, {force:false}
  sequelize
    .sync({ force: false })
    .then(() => deptModel.findAll()) // process the read operation (async)
    .then((data) => {
      // data: is the result set return after the  'select' query executed
      resp.status(200).send({
        message: "Data is Read Successfully",
        rowCount: data.length,
        rows: data,
      });
    }) // Collect the data using the sequence of Promise objects (if previous is successful then execute the next then() in sequence)
    .catch((error) => {
      resp
        .status(500) // internal server error
        .send({ message: "Some Error Occured", errorDetails: error.message });
    });
});

instance.get("/api/departments/:id", (req, resp) => {
    let id = parseInt(req.params.id);
    sequelize
    .sync({ force: false })
    .then(() => deptModel.findOne({where:{DeptNo:id}}))  
    .then((data) => {
      resp.status(200).send({
        message: "Data is Read Successfully",
        rowCount: data.length,
        rows: data,
      });
    })  
    .catch((error) => {
      resp
        .status(500)  
        .send({ message: "Some Error Occured", errorDetails: error.message });
    });
});

instance.post("/api/departments", (req, resp) => {
    const dept  = req.body;
    sequelize
    .sync({ force: false })
    .then(() => {return deptModel.create(dept);})   // insert the record and return it
    .then((data) => {
      resp.status(200).send({
        message: "Data is Added Successfully",
        rows: data,
      });
       
    })  
    .catch((error) => {
      resp
        .status(500)  
        .send({ message: "Some Error Occured", errorDetails: error.message });
    });
});

instance.put("/api/departments/:id", (req, resp) => {
    let id = parseInt(req.params.id);
    const dept  = req.body;
    
    sequelize
    .sync({ force: false })
    .then(() => deptModel.update({
        DeptName:dept.DeptName,
        Location: dept.Location,
        Capacity:dept.Capacity
    },{
        where:{DeptNo:id}
    }))
    .then((data) => {
      resp.status(200).send({
        message: "Data is Updated Successfully",
        rows: data,
      });
    })  
    .catch((error) => {
      resp
        .status(500)  
        .send({ message: "Some Error Occured", errorDetails: error.message });
    });   

});

instance.delete("/api/departments/:id", (req, resp) => {

    let id = parseInt(req.params.id);
   
    
    sequelize
    .sync({ force: false })
    .then(() => deptModel.destroy({
        where:{DeptNo:id}
    }))
    .then((data) => {
      resp.status(200).send({
        message: "Data is Deleted Successfully",
        rows: data,
      });
    })  
    .catch((error) => {
      resp
        .status(500)  
        .send({ message: "Some Error Occured", errorDetails: error.message });
    });

});

instance.listen(9081, () => {
  console.log("REST APIs are on poty 9081");
});
