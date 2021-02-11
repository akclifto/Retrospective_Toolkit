const request = require("supertest");
const server = require("../../index");

afterEach(() => server && server.close());

describe("Controller/Auth Testing", () => {
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
  ];

  it("Send empty login, shoud return status 400", async (done) => {
    try {
      // seed empty data to auth controller, then check status
      await request(server)
        .post("/api/users/login")
        .send({
          email: users[2].email,
          password: users[2].password,
        })
        .expect(400);
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

  // eslint-disable-next-line consistent-return
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
          expect(response.statusCode).toBe(204);
        });
      done();
    } catch (err) {
      done(err);
    }
  });
});

/* stop all async operations */
afterAll(async (done) => {
  try {
    if (server) {
      server.close();
    }
    done();
  } catch (e) {
    done(e);
  }
});
