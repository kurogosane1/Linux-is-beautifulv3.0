const redis = require("redis");

//Configure Redis
//Configure to the layout below if your using it in development enviroment
// const redisClient = redis.createClient({ port: 6379, host: "localhost" });
//use below if you are using this in a development enviroment variable
const redisClient = redis.createClient(process.env.REDISCLOUD_URL, {
  no_ready_check: true,
  auth_pass: process.env.REDIS_PASS,
});

module.exports = redisClient;
