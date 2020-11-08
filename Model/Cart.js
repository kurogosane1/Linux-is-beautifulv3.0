const { DataTypes } = require("sequelize");
const sequelize = require("../controller/Connection");
const Selection = require("./Selection");

const Cart = sequelize.define("Cart", {
  Cart_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  Selection_id: {
    type: DataTypes.UUID,
    references: {
      model: Selection,
      key: "Selection_id",
    },
  },
  Total: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
});

Cart.sync();

module.exports = Cart;
