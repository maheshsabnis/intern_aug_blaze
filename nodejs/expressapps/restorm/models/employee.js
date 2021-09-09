const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee', {
    EmpNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EmpName: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    Designation: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    Salary: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DeptNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'department',
        key: 'DeptNo'
      }
    }
  }, {
    sequelize,
    tableName: 'employee',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "EmpNo" },
        ]
      },
      {
        name: "FK_DEPTNO",
        using: "BTREE",
        fields: [
          { name: "DeptNo" },
        ]
      },
    ]
  });
};
