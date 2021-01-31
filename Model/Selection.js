const { DataTypes } = require("sequelize");
const sequelize = require("../Controller/Connection");
const Processor = require("./Processor");
const RAM = require("./RAM");
const Storage = require("./Storage");
const GPU = require("./Graphics");
const Tag = require("./Category");

const Selection = sequelize.define("Selection", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  Processor: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: "",
  },
  RAM: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: "",
  },
  Storage: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: "",
  },
  GPU: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: "",
  },
  Type: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
  Order_Number: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
});

Selection.sync({ force: false });

module.exports = Selection;
