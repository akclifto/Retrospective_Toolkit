//Heroku deployment
var redisClient = require('redis').createClient(process.env.REDIS_URL);
//var redis = new Redis(process.env.REDIS_URL);

//configure redis
/* for local development
const redisClient = redis.createClient({
    port: 6379,
    host: 'localhost'
});*/

module.exports = redisClient;