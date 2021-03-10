const express = require("express");

const router = express.Router();
const authenticate = require("../middleware/authenticate");
const authController = require("../controller/auth");

// create unprotected login endpoint
router.post("/api/users/login", authController.login);

// all routes after this are protected
// and can only be accessed by logged in users
router.use(authenticate);

router.get("/api/checksession", (req, res) => {
  res.sendStatus(204);
});

module.exports = router;
