const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");
  //if the user is trying to make a comment without logging in yet
  if (!accessToken) return res.json({ error: "User is not logged in" });

  try {
    const validToken = verify(accessToken, "importantsecret");
    if (validToken) {
      return next();
    }
  } catch (error) {
    return res.json({ error: err });
  }
};
module.exports = { validateToken };
