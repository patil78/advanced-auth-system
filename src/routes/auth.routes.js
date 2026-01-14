const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/auth.controller");
const { login } = require("../controllers/auth.controller");
const { refreshAccessToken } = require("../controllers/auth.controller");
const { logout } = require("../controllers/auth.controller");

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 */
router.post("/signup", signup);
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user and generate tokens
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post("/login", login);

/**
 * @swagger
 * /api/auth/refresh-token:
 *   post:
 *     summary: Generate new access token using refresh token
 *     tags: [Auth]
 */
router.post("/refresh-token", refreshAccessToken);

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Logout user and invalidate refresh token
 *     tags: [Auth]
 */
router.post("/logout", logout);

module.exports = router;
