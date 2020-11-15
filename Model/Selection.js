const { DataTypes } = require("sequelize");
const sequelize = require("../controller/Connection");
const Processor = require("./Processor");
const RAM = require("./RAM");
const Storage = require("./Storage");
const GPU = require("./Graphics");
const Tag = require("./Category");

const Selection = sequelize.define("Selection", {
  Selection_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  Processor_id: {
    type: DataTypes.UUID,
    references: {
      model: Processor,
      key: "id",
    },
  },
  RAM_id: {
    type: DataTypes.UUID,
    references: {
      model: RAM,
      key: "id",
    },
  },
  Storage_id: {
    type: DataTypes.UUID,
    references: {
      model: Storage,
      key: "id",
    },
  },
  GPU_id: {
    type: DataTypes.UUID,
    references: {
      model: GPU,
      key: "id",
    },
  },
  Category_id: {
    type: DataTypes.UUID,
    references: {
      model: Tag,
      key: "id",
    },
  },
});

Selection.sync({ force: false });

module.exports = Selection;
