const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization").split(" ")[1];
  console.log(token);
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const verified = jwt.verify(token, secret);
    console.log(verified);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
    // console.log(err);
  }
};

module.exports = authenticateToken;
