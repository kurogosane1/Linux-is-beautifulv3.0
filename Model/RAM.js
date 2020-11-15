const { DataTypes } = require("sequelize");
const sequelize = require("../controller/Connection");

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
});

RAM.sync({ force: false }).then(() => {
  RAM.bulkCreate([
    { id: "ram-1", name: "16gb 2333Mhz RAM", cost: 100 },
    { id: "ram-2", name: "32gb 2333Mhz RAM", cost: 260 },
    { id: "ram-3", name: "64gb 2333Mhz RAM", cost: 320 },
    { id: "ram-4", name: "128gb 2333Mhz RAM", cost: 400 },
  ]);
});
module.exports = RAM;
