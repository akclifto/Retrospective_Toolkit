import session from "express-session";
import connectRedis from "connect-redis";
import redisClient from "../db/redis";

const RedisStore = connectRedis(session);

export default session({
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
