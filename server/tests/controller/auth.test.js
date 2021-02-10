const request = require("supertest");
// const chai = require("chai");
// eslint-disable-next-line no-unused-vars
const app = require("../../index");
// const authController = require("../../controller/auth");

// const API = "http://localhost:5000";
// const port = process.env.PORT || 5000;
// let server;
// let agent;

// beforeEach((done) => {
//   // eslint-disable-next-line consistent-return
//   server = app.listen(port, (err) => {
//     if (err) return done(err);
//     agent = request.agent(server);
//     done();
//   });
// });

afterEach((done) => app && app.close(done));

describe("Controller/Auth Testing", () => {
  // eslint-disable-next-line no-unused-vars
  const user = {
    email: "2134@at.com",
    password: "1234",
  };

  it("Send empty request parameter, shoud return status 400", async (done) => {
    try {
      // seed empty data to auth controller, then check status
      await request(app)
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
    done();
  } catch (e) {
    done(e);
  }
});

// it("Test invalid login endpoint", async (done) => {
//   try {
//     const data = request(app).post("/api/users/login").send({
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
