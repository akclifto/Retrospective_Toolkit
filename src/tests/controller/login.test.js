/* eslint-disable no-console */
import loginController from "../../controller/login";

// const request = require("supertest");
// const server = require("../__mocks__/express");

// eslint-disable-next-line no-unused-vars
const users = [
  {
    email: "sfadmin@admin.com",
    password: "admin",
  },
  {
    email: "admin@admin.com",
    password: "sfadmin",
  },
];

describe("Controller/Login Testing", () => {
  it("Test Network Error handling, should return error message", async () => {
    console.error = jest.fn();
    let error;
    try {
      const response = await loginController(undefined, undefined);
      expect.assertions(2);
      expect(response.message).toBe("Error: Network Error");
    } catch (err) {
      error = err;
      console.log(error);
    }
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  // it("Test valid login, should return true", async () => {
  //   console.error = jest.fn();
  //   try {
  //     request(server);
  //     const response = await loginController(users[1].email, users[1].password);
  //     // expect.assertions(1);
  //     console.log(response);
  //     // expect(response).toBe(true);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // });
});
