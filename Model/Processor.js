const { DataTypes } = require("sequelize");
const sequelize = require("../controller/Connection");
const Tag = require("./Category");

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
  Category: {
    type: DataTypes.STRING,
    allowNull: "false",
  },
});

Processor.sync({ force: false }).then(() => {
  Processor.bulkCreate([
    {
      id: "pro-1",
      name: "Core i7 8 core 3.0 ghz",
      cost: 200,
      Category: "Laptop",
    },
    {
      id: "pro-2",
      name: "Core i9 10 core 2.7ghz",
      cost: 320,
      Category: "Laptop",
    },
    {
      id: "pro-3",
      name: "Core i7 10 core 3.2 ghz",
      cost: 360,
      Category: "Laptop",
    },
    {
      id: "pro-4",
      name: "Core i9 14 core 3.0ghz",
      cost: 500,
      Category: "Laptop",
    },
    {
      id: "tab-1",
      name: "Zues1",
      cost: 200,
      Category: "Tablet",
    },
    {
      id: "Desk-1",
      name: "Zues2-1 12 Core Processor",
      cost: 300,
      Category: "Desktop",
    },
    {
      id: "Desk-2",
      name: "Zues2-2 16 Core Processor",
      cost: 700,
      Category: "Desktop",
    },
    {
      id: "Desk-4",
      name: "Zues2-2 20 Core Processor",
      cost: 1000,
      Category: "Desktop",
    },
    {
      id: "SOC-1",
      name: "M1 Zues Tab",
      cost: 140,
      Category: "Phone",
    },
  ]);
});
module.exports = Processor;
