// eslint-disable-next-line import/no-extraneous-dependencies
const { createProxyMiddleware } = require("http-proxy-middleware");

// if running in docker, use container network. Use localhost if not in docker container.
module.exports = function proxy(app) {
  app.use(
    "/api/**",
    createProxyMiddleware({
      target: process.env.DEVHOST || "http://localhost:5000",
      secure: false,
      changeOrigin: true,
    })
  );
};
