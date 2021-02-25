/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const express = require("./__mocks__/express");
const proxy = require("../../setupProxy");

const app = express();

describe("SetupProxy Tests", () => {
  it("Test proxy creation", (done) => {
    proxy(app);
    expect(proxy.length).toBeGreaterThanOrEqual(1);
    expect(proxy).toBeDefined();
    done();
  });
});
