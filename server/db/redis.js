//var Redis = require('ioredis');
//const redis = require('redis');

//Heroku deployment
var redisClient = require('redis').createClient(process.env.REDIS_URL);

//configure redis for local development
/*const redisClient = redis.createClient({
    port: 6379,
    host: 'localhost'
});*/

module.exports = redisClient;