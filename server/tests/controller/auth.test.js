const request = require("supertest");
// const chai = require("chai");
// eslint-disable-next-line no-unused-vars
const server = require("../../index");

const API = "http://localhost:5000";

// beforeAll(async () => {
//   req();
// });

describe("Controller/Auth Testing", () => {
  const user = {
    email: "2134@at.com",
    password: "1234",
  };

  it("post invalid login", async (done) => {
    try {
      await request(API)
        .post("/api/users/login")
        .set("Content-Type", "text/plain")
        .send({ email: user.email })
        .send({ password: user.password })
        .expect(401);
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
});

/* stop all async operations */
afterAll(async (done) => {
  try {
    done();
  } catch (e) {
    done(e);
  }
});
