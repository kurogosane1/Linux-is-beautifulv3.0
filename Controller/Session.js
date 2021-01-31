const session = require("express-session");
const connectRedis = require("connect-redis");
const redisClient = require("./DbConnection");

const RedisStore = connectRedis(session);

module.exports = session({
  store: new RedisStore({ client: redisClient }),
  name: "SAM",
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 1 * 60 * 60 * 1000,
    sameSite: true,
    secure: false,
    httpOnly: true,
  },
});
