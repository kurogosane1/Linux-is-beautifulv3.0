const { DataTypes } = require("sequelize");
const sequelize = require("../controller/Connection");

const Tag = sequelize.define("Tag", {
  Tag_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  Tag_Description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Tag.sync().then(() => {
  Tag.bulkCreate([
    {
      Tag_Description: "Laptop",
    },
    {
      Tag_Description: "Tablet",
    },
    {
      Tag_Description: "Desktop",
    },
    {
      Tag_Description: "Phone",
    },
  ]);
});

module.exports = Tag;
