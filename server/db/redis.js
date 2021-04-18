// var Redis = require('ioredis');
// const redis = require('redis');

const redisURL =
  process.env.REDIS_URL ||
  "redis://h:p343f46b6946ec0516ef9ace243e856e99223c708ff817633212d183ae46674f6@ec2-52-71-199-175.compute-1.amazonaws.com:17059";

// Heroku deployment
const redisClient = require("redis").createClient(redisURL);
/* configure redis for local development */
// const redisClient = redis.createClient({
//     port: 6379,
//     host: 'localhost'
// });

module.exports = redisClient;
