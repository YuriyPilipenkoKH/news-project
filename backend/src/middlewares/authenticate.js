const jwt = require("jsonwebtoken");

const { httpError } = require("../helpers");
const { User } = require("../models");

const { SECRET_KEY } = process.env;
console.log('SECRET_KEY',SECRET_KEY)

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer" || !token) next(httpError(401));

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token || user.token !== token) next(httpError(401));

    req.user = user;
    next();
  } catch {
    next(httpError(401));
  }
};

module.exports = authenticate;
