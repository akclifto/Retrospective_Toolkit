function authenticate(req, res, next) {
  if (!req.session || !req.session.user) {
    const err = new Error("You are not logged in");
    err.statusCode = 401;
    next(err);
  }
  next();
}

export default authenticate;
