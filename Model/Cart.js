const { DataTypes } = require("sequelize");
const sequelize = require("../controller/Connection");
const Selection = require("./Selection");
const Users = require("./User");

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
  User_id: {
    type: DataTypes.UUID,
    references: {
      model: Users,
      key: "id",
    },
  },
  Total: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  Payment_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Cart.sync({ force: false });

module.exports = Cart;
