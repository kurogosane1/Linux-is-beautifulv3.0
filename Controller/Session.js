const session = require("express-session");
const sequelize = require("./Connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const myStore = new SequelizeStore({ db: sequelize });

module.exports = session({
  store: myStore,
  key: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false,
  proxy: true,
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 1 * 60 * 60 * 1000,
    sameSite: true,
    secure: false,
    httpOnly: true,
  },
});

myStore.sync();
