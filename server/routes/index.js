import { Router } from "express";
import authenticate from "../middleware/authenticate";
import login from "../controller/auth";

const router = Router();

// create unprotected login endpoint
router.post("/api/users/login", login);

// all routes after this are protected
// and can only be accessed by logged in users
router.use(authenticate);

router.get("/api/checksession", (req, res) => {
  res.sendStatus(204);
});

export default router;
