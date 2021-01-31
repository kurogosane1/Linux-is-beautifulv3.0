const redis = require("redis");

//Configure Redis
// const redisClient = redis.createClient({ port: 6379, host: "localhost" });
const redisClient = redis.createClient(process.env.REDISCLOUD_URL, {
  no_ready_check: true,
  auth_pass: process.env.REDIS_PASS,
});

module.exports = redisClient;
