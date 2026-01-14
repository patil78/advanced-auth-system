const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth.middleware");
const { authorize } = require("../middleware/role.middleware");

/**
 * @swagger
 * /api/admin/dashboard:
 *   get:
 *     summary: Admin dashboard (Admin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Admin access granted
 */
router.get("/dashboard", protect, authorize(["admin"]), (req, res) => {
  res.status(200).json({
    message: "Welcome Admin 👑",
  });
});

module.exports = router;
