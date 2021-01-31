const { DataTypes } = require("sequelize");
const sequelize = require("../Controller/Connection");
const Tag = require("./Category");

const RAM = sequelize.define("RAM", {
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

RAM.sync({ force: false }).then(() => {
  RAM.bulkCreate([
    { id: "ram-1", name: "16gb 2333Mhz RAM", cost: 100, Category: "Laptop" },
    { id: "ram-2", name: "32gb 2333Mhz RAM", cost: 260, Category: "Laptop" },
    { id: "ram-3", name: "64gb 2333Mhz RAM", cost: 320, Category: "Laptop" },
    { id: "ram-4", name: "128gb 2333Mhz RAM", cost: 400, Category: "Laptop" },
    { id: "ram-5", name: "8gb LPXDDR6 RAM", cost: 200, Category: "Tablet" },
    { id: "ram-6", name: "8gb LPXDDR5 RAM", cost: 50, Category: "Phone" },
    { id: "ram-7", name: "16gb 2333Mhz RAM", cost: 400, Category: "Desktop" },
    { id: "ram-8", name: "32gb 2333Mhz RAM", cost: 400, Category: "Desktop" },
    { id: "ram-9", name: "64gb 2333Mhz RAM", cost: 400, Category: "Desktop" },
    { id: "ram-10", name: "128gb 2333Mhz RAM", cost: 400, Category: "Desktop" },
    { id: "ram-11", name: "256gb 2333Mhz RAM", cost: 400, Category: "Desktop" },
  ]);
});
module.exports = RAM;
