const User = require("../models/User");

const authorize = (roles = []) => {
  return async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);

      if (!user || !roles.includes(user.role)) {
        return res.status(403).json({
          message: "Access denied: insufficient permissions",
        });
      }

      next();
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };
};

module.exports = { authorize };
