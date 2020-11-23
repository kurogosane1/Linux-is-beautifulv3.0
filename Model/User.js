const { DataTypes } = require("sequelize");
const sequelize = require("../controller/Connection");
const bcrypt = require("bcryptjs");

const Users = sequelize.define("Users", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  streetaddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zipcode: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cellphone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
});

const salt = bcrypt.genSalt(10);

const cartUsers = sequelize.define("cartUser", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  Type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Processor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  RAM: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  GPU: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Storage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Total: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  User_id: {
    type: DataTypes.UUID,
    references: {
      model: Users,
      key: "id",
    },
  },
});

Users.sync({ force: true }).then(() => {
  Users.bulkCreate([
    {
      firstname: "John",
      lastname: "Doe",
      streetaddress: "1234 somewhere",
      state: "TX",
      zipcode: "77777",
      cellphone: "888-888-8888",
      email: "jdoe@email.com",
      password: "123password",
    },
    {
      firstname: "jay",
      lastname: "leno",
      streetaddress: "2222 somewhere",
      state: "NY",
      zipcode: "11111",
      cellphone: "888-888-8888",
      email: "jayl@email.com",
      password: "password123",
    },
  ]);
});
module.exports = Users;
