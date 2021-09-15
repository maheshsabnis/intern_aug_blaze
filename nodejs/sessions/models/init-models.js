var DataTypes = require("sequelize").DataTypes;
var _department = require("./department");
var _users = require("./users");

function initModels(sequelize) {
  var department = _department(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    department,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
