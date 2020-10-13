const redis = require('redis');

//configure redis
const redisClient = redis.createClient({
    port: 6379,
    host: 'localhost'
});

module.exports = redisClient;