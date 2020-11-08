const { DataTypes } = require("sequelize");
const sequelize = require("../controller/Connection");

const Storage = sequelize.define("storage", {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  cost: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Storage.sync().then(() => {
  Storage.bulkCreate([
    { id: "st-01", name: "512GB SSD", cost: 110 },
    { id: "st-02", name: "1TB SSD", cost: 200 },
    { id: "st-03", name: "2TB SSD", cost: 350 },
    { id: "st-04", name: "4TB SSD", cost: 500 },
  ]);
});

module.exports = Storage;
