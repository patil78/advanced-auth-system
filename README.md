# Advanced Authentication & Authorization System

A production-grade backend authentication and authorization system built using Node.js, Express.js, MongoDB, JWT, and Swagger/OpenAPI. The project focuses on implementing secure authentication workflows, scalable REST APIs, token-based session management, and Role-Based Access Control (RBAC) following real-world backend engineering practices.

---

# Project Overview

This system was designed to simulate how modern applications handle:

- Secure user authentication
- Session management using JWT
- Access & Refresh token flow
- Route protection
- Authorization using RBAC
- Refresh token invalidation (logout)
- REST API documentation

The project emphasizes backend security, modular architecture, and scalable API design.

---

# Key Features

## Authentication & Security
- User Signup & Login
- Password Hashing using bcryptjs
- JWT-based Authentication
- Access Token & Refresh Token implementation
- Secure Token Validation
- Logout with Refresh Token Invalidation
- Protected Route Middleware

---

## Authorization (RBAC)
- Role-Based Access Control (RBAC)
- Admin & User role separation
- Middleware-based permission handling
- Admin-only protected APIs

---

## API Architecture
- RESTful API Design
- Modular Backend Structure
- Route & Controller Separation
- Centralized Middleware Handling
- MongoDB Schema Validation

---

## API Documentation
- Swagger/OpenAPI integration
- Interactive API testing
- Endpoint documentation

---

# Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | ODM for MongoDB |
| JWT | Authentication |
| bcryptjs | Password Hashing |
| Swagger/OpenAPI | API Documentation |
| dotenv | Environment Variable Management |

---

# Project Architecture

```bash
auth-system/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── health.controller.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── role.middleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── RefreshToken.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   ├── admin.routes.js
│   │   └── health.routes.js
│   │
│   ├── utils/
│   │   └── jwt.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json
└── README.md

**Authentication Flow
1. User Signup
User registers using email and password
Password is hashed before storing in database
Duplicate email validation is performed
2. User Login
Credentials are validated
Access Token and Refresh Token are generated
Refresh token is stored in MongoDB
3. Protected Route Access
Access token is verified using middleware
Unauthorized users are blocked from protected APIs
4. Token Refresh
Expired access tokens are regenerated using refresh tokens
Prevents repeated user logins
5. Logout
Refresh token is removed from database
Session becomes invalidated securely
Role-Based Access Control (RBAC)

The project implements middleware-based authorization:

Role	Permissions
User	Access user routes
Admin	Access admin-only routes

Unauthorized role access returns:

{
  "message": "Access denied: insufficient permissions"
}
Database Design
User Schema
{
  email: String,
  password: String,
  role: "user" | "admin",
  isVerified: Boolean
}
Refresh Token Schema
{
  user: ObjectId,
  token: String,
  expiresAt: Date
}
Challenges Faced During Development
JWT Token Management

Managing access and refresh token workflows while maintaining security and scalability required careful token validation and expiration handling.

Route Protection

Implementing middleware-based authentication and ensuring unauthorized users could not access protected APIs required proper request lifecycle handling.

RBAC Implementation

Designing scalable role-based authorization logic while maintaining modular middleware architecture was a key backend challenge.

Refresh Token Invalidation

Handling secure logout functionality by invalidating stored refresh tokens and preventing reuse was an important security implementation.

Outcomes & Learning

Through this project, I gained hands-on experience in:

Authentication vs Authorization
JWT & Refresh Token Flow
Backend Security Best Practices
Express Middleware Architecture
MongoDB Schema Design
REST API Development
Role-Based Access Control (RBAC)
Scalable Backend Structuring
API Documentation using Swagger**
