const session = require("express-session");
const connectRedis = require("connect-redis");
const redisClient = require("../db/redis");

const RedisStore = connectRedis(session);

module.exports = session({
  store: new RedisStore({ client: redisClient }),
  // TODO: This is not a secure secret.. fix this if going to production
  secret: "secretsauce",
  saveUninitialized: false,
  resave: false,
  name: "sessionId",
  cookie: {
    secure: false, // TODO: In production, this must be true in order to send cookies over HTTPS
    httpOnly: true, // Insure we don't have sneaky javascript trying to read our cookies
    maxAge: 1000 * 60 * 30,
  },
});
