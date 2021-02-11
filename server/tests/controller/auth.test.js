const request = require("supertest");
// eslint-disable-next-line no-unused-vars
const server = require("../../index");

// afterEach((done) => server && server.close(done));

describe("Controller/Auth Testing", () => {
  const user = {
    email: "2134@at.com",
    password: "1234",
  };

  it("Send empty request parameter, shoud return status 400", async (done) => {
    try {
      // seed empty data to auth controller, then check status
      await request(server)
        .post("/api/users/login")
        .send({
          email: "",
          password: "",
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
          email: user.email,
          password: user.password,
        })
        .expect(401);
      done();
    } catch (err) {
      done(err);
    }
  });

  // it("post invalid login", async (done) => {
  //   try {
  //     // seed data
  //     const data = await request(API)
  //       .post("/api/users/login", authController.login)
  //       .send({ email: user.email })
  //       .send({ password: user.password });
  //     // get response and test it
  //     const response = await authController.login;
  //     expect(response).toEqual(401);
  //     expect(response).toEqual(data);
  //     done();
  //   } catch (e) {
  //     done(e);
  //   }
  // });
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

// it("Test invalid login endpoint", async (done) => {
//   try {
//     const data = request(server).post("/api/users/login").send({
//       email: "123@a.com",
//       password: "1234",
//     });
//     expect.assertions(1);
//     await expect(data).toEqual(400);
//     done();
//   } catch (e) {
//     done(e);
//   }
//   // expect(response.data.length).to.eql(30);
// });
