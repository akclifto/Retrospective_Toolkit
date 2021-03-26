import express from "express";
import router from "./routes";
import session from "./middleware/session";

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

// if behind a proxy, uncomment this
// server.set('trust proxy', 1);

app.use(session);
app.use(router);

const server = app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`server is running on port ${port}`)
);

export default server;
