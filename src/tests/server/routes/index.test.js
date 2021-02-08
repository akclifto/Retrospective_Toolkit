const request = require("supertest");
// eslint-disable-next-line import/no-extraneous-dependencies
const routes = require("../../../../server/routes/index");

describe("Routes/Index Testing", () => {
  test("Get unprotected login endpoint", () => {
    request(routes)
      .get("api/users/login")
      .set("Deny", true)
      .expect("Content-Type", "number")
      .expect(401);
  });

  test("Get protected login endpoint", () => {
    request(routes)
      .get("api/users/login")
      .set("Accept", true)
      .expect("Content-Type", "number")
      .expect(204);
  });
});
