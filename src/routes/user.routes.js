const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth.middleware");

/**
 * @swagger
 * /api/user/profile:
 *   get:
 *     summary: Get user profile (Protected)
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Authorized user access
 */
router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    message: "Protected route accessed",
    user: req.user,
  });
});

module.exports = router;
