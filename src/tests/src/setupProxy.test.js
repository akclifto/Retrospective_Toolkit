/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const request = require("supertest");
const express = require("../__mocks__/express");
const proxy = require("../../setupProxy");

const appMock = express();

describe("SetupProxy Tests", () => {
  it("Test proxy creation", (done) => {
    const result = request(proxy(appMock));
    expect(proxy).toBeDefined();
    expect(proxy.length).toBeGreaterThanOrEqual(1);

    expect(result).toBeDefined();
    done();
  });
});
