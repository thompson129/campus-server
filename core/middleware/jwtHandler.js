import jwt from "jsonwebtoken";

function jwtHandler(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.locals.user = {
      id: decoded.id,
      campus_email: decoded.campus_email,
      role: decoded.role,
    };
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
}

export default jwtHandler;
