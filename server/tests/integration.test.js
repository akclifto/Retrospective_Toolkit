/* eslint-disable no-console */
/* eslint-disable no-useless-escape */
const request = require("supertest");
const redisTestClient = require("../db/redis");
// const session = require("../middleware/session");
const server = require("../index");

afterEach(() => server && server.close());

// eslint-disable-next-line no-unused-vars
const users = [
  {
    email: "admin@at.com",
    password: "1234@qwerty",
  },
  {
    email: "admin@admin.com",
    password: "sfadmin",
  },
  {
    email: "",
    password: "",
  },
  {
    email: "admin@admin.com",
    password: "admin",
  },
];

async function shutdownRedisDB() {
  await new Promise((resolve) => {
    redisTestClient.quit(() => {
      resolve();
    });
  });
  // redis.quit() creates a thread to close the connection.
  // We wait until all threads have been run once to ensure the connection closes.
  await new Promise((resolve) => setImmediate(resolve));
}

/** DB/REDIS TESTING */
describe("DB/Redis Testing", () => {
  it("Tests redis createClient, ensures createClient() creates AWS client", async (done) => {
    try {
      // seed empty data to auth controller, then check status
      await request(redisTestClient);
      expect.assertions(2);
      expect(redisTestClient.address).toBe(
        "ec2-34-202-178-6.compute-1.amazonaws.com:29099"
      );
      expect(redisTestClient).toBeTruthy();
      done();
    } catch (err) {
      done(err);
    }
  });

  it("Test redis connection, should return connecting true, hadError false", async (done) => {
    try {
      request(redisTestClient);
      expect(redisTestClient.stream).toEqual(
        expect.objectContaining({
          connecting: true,
          _hadError: false,
          _host: "ec2-34-202-178-6.compute-1.amazonaws.com",
        })
      );
      done();
    } catch (err) {
      done(err);
    }
  });
});

/** AUTHENTICATION TESTING */
describe("Controller/Auth Testing", () => {
  it("Send empty login, should return status 400", async (done) => {
    try {
      // seed empty data to auth controller, then check status
      await request(server)
        .post("/api/users/login")
        .send({
          email: users[2].email,
          password: users[2].password,
        })
        .expect(400)
        .then((response) => {
          expect.assertions(1);
          expect(response.text).toBe(
            // eslint-disable-next-line prettier/prettier
            '"Bad request params - you need to provide an email and password"'
          );
        });
      done();
    } catch (err) {
      done(err);
    }
  });

  it("Send invalid login, should return status 401", async (done) => {
    try {
      await request(server)
        .post("/api/users/login")
        .send({
          email: users[0].email,
          password: users[0].password,
        })
        .expect(401);
      done();
    } catch (err) {
      done(err);
    }
  });

  test("Send valid login, should return status 204", async (done) => {
    try {
      // seed data to server
      await request(server)
        .post("/api/users/login")
        .send({
          email: users[1].email,
          password: users[1].password,
        })
        .then((response) => {
          expect.assertions(1);
          expect(response.statusCode).toBe(204);
        });
      done();
    } catch (err) {
      done(err);
    }
  });
});

// /** MIDDLEWARE TESTING */
describe("Middleware/Authenticate Testing", () => {
  it("Send empty admin session, should return status 401 with error message", async (done) => {
    try {
      await request(server)
        .get("/admin")
        .set("Content-type", "application/json")
        .then((response) => {
          expect.assertions(1);
          expect(response.statusCode).toBe(401);
          // expect(response).toThrowError(new Error("You are not logged in"));
        });
      done();
    } catch (err) {
      done(err);
    }
  });

  it("Send valid login, then check valid admin session", async (done) => {
    const login = {
      email: users[1].email,
      password: users[1].password,
    };

    try {
      const status = await request(server).post("/api/users/login").send(login);
      expect(status.statusCode).toBe(204);
      const response = request(server)
        .get("/admin")
        .set("Content-type", "application/json");
      expect.assertions(2);
      expect((await response).badRequest).toBe(false);
      done();
    } catch (err) {
      done(err);
    }
  });
});

/* stop all async operations */
afterAll(async (done) => {
  try {
    shutdownRedisDB();
    if (server) {
      server.close();
    }
    done();
  } catch (err) {
    done(err);
  }
});
