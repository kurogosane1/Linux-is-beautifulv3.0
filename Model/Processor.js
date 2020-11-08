const { DataTypes } = require("sequelize");
const sequelize = require("../controller/Connection");

const Processor = sequelize.define("Processor", {
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

Processor.sync().then(() => {
  Processor.bulkCreate([
    { id: "pro-1", name: "Core i7 8 core 3.0 ghz", cost: 200 },
    { id: "pro-2", name: "Core i9 10 core 2.7ghz", cost: 320 },
    { id: "pro-3", name: "Core i7 10 core 3.2 ghz", cost: 360 },
    { id: "pro-2", name: "Core i9 14 core 3.0ghz", cost: 500 },
  ]);
});
module.exports = Processor;
