/* eslint-disable no-console */
import axios from "axios";
import loginController from "../../controller/login";

jest.mock("axios");

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
    const someError = new Error("network error");
    axios.post.mockRejectedValue(someError);
    try {
      expect(await loginController(undefined, undefined)).rejects.toBe(
        someError
      );
    } catch (err) {
      console.log(err);
    }
  });

  it("Test valid login, should return true", async () => {
    const res = { status: 204 };
    axios.post.mockResolvedValue(res);
    try {
      const response = await loginController(users[1].email, users[1].password);
      expect.assertions(1);
      expect(response).toBe(true);
    } catch (err) {
      console.log(err);
    }
  });

  it("Test invalid login, should return false", async () => {
    const res = {
      status: 400,
      json: "Bad request params - you need to provide an email and password",
    };
    axios.post.mockResolvedValue(res);
    try {
      const response = await loginController(undefined, undefined);
      expect.assertions(1);
      expect(response).toBe(false);
    } catch (err) {
      console.log(err);
    }
  });
});
