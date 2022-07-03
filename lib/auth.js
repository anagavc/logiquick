import jwt from "jsonwebtoken";
export const signToken = (user) => {
  return jwt.sign(user, process.env.NEXT_PUBLIC_JWT_SECRET, {
    expiresIn: "3d",
  });
};

export const verifyUser = async (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    const token = authorization.slice(7, authorization.length);
    jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET, (err, user) => {
      if (err) {
        res.status(401).send({ message: "The token is invalid" });
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    res.status(401).send({ message: "There is no token" });
  }
};
