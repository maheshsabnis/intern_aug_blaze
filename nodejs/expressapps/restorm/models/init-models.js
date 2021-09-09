var DataTypes = require("sequelize").DataTypes;
var _department = require("./department");
var _employee = require("./employee");

function initModels(sequelize) {
  var department = _department(sequelize, DataTypes);
  var employee = _employee(sequelize, DataTypes);

  employee.belongsTo(department, { as: "DeptNo_department", foreignKey: "DeptNo"});
  department.hasMany(employee, { as: "employees", foreignKey: "DeptNo"});

  return {
    department,
    employee,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
