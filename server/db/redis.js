// var Redis = require('ioredis');
// const redis = require('redis');

// Heroku deployment
const redisClient = require("redis").createClient(
  "redis://h:p343f46b6946ec0516ef9ace243e856e99223c708ff817633212d183ae46674f6@ec2-3-210-163-2.compute-1.amazonaws.com:19299"
);

/* configure redis for local development */
// const redisClient = redis.createClient({
//     port: 6379,
//     host: 'localhost'
// });

module.exports = redisClient;
