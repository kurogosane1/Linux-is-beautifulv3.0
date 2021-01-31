const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize(
  //If working working enviroment is development , then use
  // database, user and password enviromental variables in another file
  //You can uncomment the three lines below to make it run locally
  // process.env.DB_DATABASE,
  // process.env.DB_USER,
  // process.env.DB_PASSWORD,

  //If production enviroment, then you need the URL provided to you by heroku
  //or other sources provided by the website
  //In the case below it is represented by my environmental variable "process.env.DB_HOST"
  process.env.DB_HOST,
  //dialect is still needed for both production or development environments
  { dialect: "mysql" }
);

sequelize.sync();
module.exports = sequelize;
