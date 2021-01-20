const { DataTypes } = require("sequelize");
const sequelize = require("../controller/Connection");
const Tag = require("./Category");

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
  Category: {
    type: DataTypes.STRING,
    allowNull: "false",
  },
});

Storage.sync({ force: false }).then(() => {
  Storage.bulkCreate([
    { id: "st-01", name: "512GB SSD", cost: 110, Category: "Laptop" },
    { id: "st-02", name: "1TB SSD", cost: 200, Category: "Laptop" },
    { id: "st-03", name: "2TB SSD", cost: 350, Category: "Laptop" },
    { id: "st-04", name: "4TB SSD", cost: 500, Category: "Laptop" },
    { id: "st-06", name: "512GB SSD", cost: 110, Category: "Desktop" },
    { id: "st-05", name: "1TB SSD", cost: 160, Category: "Desktop" },
    { id: "st-07", name: "2TB SSD", cost: 220, Category: "Desktop" },
    { id: "st-08", name: "12TB SSD", cost: 800, Category: "Desktop" },
    { id: "st-09", name: "128GB SSD", cost: 200, Category: "Tablet" },
    { id: "st-10", name: "256GB SSD", cost: 300, Category: "Tablet" },
    { id: "st-11", name: "512GB SSD", cost: 400, Category: "Tablet" },
    { id: "st-12", name: "128GB SSD", cost: 100, Category: "Phone" },
    { id: "st-13", name: "256GB SSD", cost: 200, Category: "Phone" },
    { id: "st-14", name: "512GB SSD", cost: 300, Category: "Phone" },
  ]);
});

module.exports = Storage;
