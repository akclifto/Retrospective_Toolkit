/* eslint-disable no-console */
/* eslint-disable no-useless-escape */
const request = require("supertest");
const server = require("../index");
const redisTestClient = require("../db/redis");
const postgresTestClient = require("../db/postgres");
const authService = require("../service/auth");
// for routes/index testing
const appRouter = require("./__mocks__/config.routesTest");

afterEach(() => server && server.close());

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

/** DB/POSTGRES TESTING */
describe("DB/Postgres Testing", () => {
  it("Tests postgres new Pool creation", async (done) => {
    try {
      await request(postgresTestClient);
      expect.assertions(2);
      expect(postgresTestClient).toBeTruthy();
      expect(postgresTestClient.options).toEqual(
        expect.objectContaining({
          connectionString: expect.any(String),
          ssl: { rejectUnauthorized: false },
          max: 20,
        })
      );
      done();
    } catch (err) {
      done(err);
    }
  });
});

/** DB/REDIS TESTING */
describe("DB/Redis Testing", () => {
  it("Tests redis createClient,createClient() should create AWS client", (done) => {
    try {
      request(redisTestClient);
      expect.assertions(2);
      expect(redisTestClient.address).toBe(
        "ec2-3-210-163-2.compute-1.amazonaws.com:19299"
      );
      expect(redisTestClient).toBeTruthy();
      done();
    } catch (err) {
      done(err);
    }
  });

  it("Test redis connection, should return connecting true, hadError false", (done) => {
    try {
      request(redisTestClient);
      expect(redisTestClient.stream).toEqual(
        expect.objectContaining({
          connecting: true,
          _hadError: false,
          _host: "ec2-3-210-163-2.compute-1.amazonaws.com",
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

/** MIDDLEWARE TESTING */
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
      const response = await request(server)
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

/** SERVICE/AUTH TESTING */
describe("Service/Auth Testing", () => {
  it("Send invalid login/password, should reject promise with message", async (done) => {
    let error;
    try {
      await authService.login(users[0].email, users[0].password);
      expect.assertions(1);
      done();
    } catch (err) {
      error = err;
      // console.log(err);
    }
    expect(error.message).toEqual("user not found");
    done();
  });

  it("Send valid login, invalid password, should reject promise with message", async (done) => {
    let error;
    try {
      await authService.login(users[3].email, users[3].password);
      expect.assertions(1);
      done();
    } catch (err) {
      error = err;
    }
    expect(error.message).toEqual("wrong username or password");
    done();
  });

  it("Send valid login/password, should return user match", async (done) => {
    try {
      const response = await authService.login(
        users[1].email,
        users[1].password
      );
      expect.assertions(2);
      expect(response.id).toBeDefined();
      expect(response.roles).toBe("ADMIN");
      done();
    } catch (err) {
      done(err);
    }
  });
});

/** SERVER/ROUTES TESTING */
describe("Routes/index Testing", () => {
  it("Tests Routes index", async (done) => {
    try {
      await request(appRouter)
        .get("/api/checksession")
        // from mock server
        .expect("Content-type", "text/html; charset=utf-8");
      // .expect(204);
      // .end((err, res) => {
      //   // console.log(res);
      //   // console.log(err);
      //   done();
      // });
      done();
    } catch (err) {
      console.log("Routes/index: ", err);
      done();
    }
  });

  it("Checks api session, should return status 204", (done) => {
    try {
      request(server).get("/api/checksession").expect(204);
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
