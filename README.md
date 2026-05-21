# Advanced Authentication & Authorization System

A production-grade backend authentication and authorization system built using Node.js, Express.js, MongoDB, JWT, and Swagger/OpenAPI. The project focuses on implementing secure authentication workflows, scalable REST APIs, token-based session management, and Role-Based Access Control (RBAC) following real-world backend engineering practices.

---

# Project Overview

This project simulates how modern applications manage secure authentication and authorization workflows. It implements JWT-based authentication, refresh token handling, protected routes, and role-based authorization while following modular backend architecture and REST API best practices.

The system was designed with a focus on:
- Backend security
- Scalable API architecture
- Session management
- Secure route protection
- Enterprise-level authorization logic

---

# Features

## Authentication & Security
- User Signup & Login
- Password Hashing using bcryptjs
- JWT-based Authentication
- Access Token & Refresh Token Flow
- Secure Token Validation
- Logout with Refresh Token Invalidation
- Protected Route Middleware

## Authorization (RBAC)
- Role-Based Access Control (RBAC)
- Admin & User Role Separation
- Middleware-based Permission Handling
- Admin-only Protected APIs

## API Architecture
- RESTful API Design
- Modular Backend Structure
- Route & Controller Separation
- Centralized Middleware Handling
- MongoDB Schema Validation

## API Documentation
- Swagger/OpenAPI Integration
- Interactive API Testing
- Endpoint Documentation

---

# Tech Stack

| Technology | Purpose |
|------------|----------|
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
```

---

# Authentication Flow

## 1. User Signup
- User registers using email and password
- Password is hashed before storing in database
- Duplicate email validation is performed

## 2. User Login
- Credentials are validated
- Access Token and Refresh Token are generated
- Refresh token is stored in MongoDB

## 3. Protected Route Access
- Access token is verified using middleware
- Unauthorized users are blocked from protected APIs

## 4. Token Refresh
- Expired access tokens are regenerated using refresh tokens
- Prevents repeated user logins

## 5. Logout
- Refresh token is removed from database
- Session becomes invalidated securely

---

# Role-Based Access Control (RBAC)

The project implements middleware-based authorization.

| Role | Permissions |
|------|-------------|
| User | Access user routes |
| Admin | Access admin-only routes |

Unauthorized role access returns:

```json
{
  "message": "Access denied: insufficient permissions"
}
```

---

# Database Design

## User Schema

```js
{
  email: String,
  password: String,
  role: "user" | "admin",
  isVerified: Boolean
}
```

## Refresh Token Schema

```js
{
  user: ObjectId,
  token: String,
  expiresAt: Date
}
```

---

# Challenges Faced During Development

## JWT Token Management
Managing access and refresh token workflows while maintaining security and scalability required careful token validation and expiration handling.

## Route Protection
Implementing middleware-based authentication and ensuring unauthorized users could not access protected APIs required proper request lifecycle handling.

## RBAC Implementation
Designing scalable role-based authorization logic while maintaining modular middleware architecture was a key backend challenge.

## Refresh Token Invalidation
Handling secure logout functionality by invalidating stored refresh tokens and preventing reuse was an important security implementation.

---

# Outcomes & Learning

Through this project, I gained hands-on experience in:
- Authentication vs Authorization
- JWT & Refresh Token Flow
- Backend Security Best Practices
- Express Middleware Architecture
- MongoDB Schema Design
- REST API Development
- Role-Based Access Control (RBAC)
- Scalable Backend Structuring
- API Documentation using Swagger

---

# Environment Variables

Create a `.env` file in the project root:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/auth_system
JWT_SECRET=your_secret_key
```

---

# Installation & Setup

## 1. Clone Repository

```bash
git clone <repository-url>
cd auth-system
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Start MongoDB

Ensure MongoDB is running locally.

Default MongoDB URL:

```bash
mongodb://localhost:27017
```

## 4. Start Development Server

```bash
npm run dev
```

---

# Running the Project Locally

Once the server starts successfully:

```bash
Server running on port 5000
MongoDB connected successfully
```

Backend runs on:

```bash
http://localhost:5000
```

---

# API Endpoints

## Authentication Routes

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/auth/signup` | Register User |
| POST | `/api/auth/login` | Login User |
| POST | `/api/auth/refresh-token` | Generate New Access Token |
| POST | `/api/auth/logout` | Logout User |

---

## User Routes

| Method | Endpoint | Access |
|--------|-----------|--------|
| GET | `/api/user/profile` | Protected User Route |

---

## Admin Routes

| Method | Endpoint | Access |
|--------|-----------|--------|
| GET | `/api/admin/dashboard` | Admin Only |

---

# API Testing

The APIs can be tested using:
- Postman
- Hoppscotch
- Swagger UI

Example Authorization Header:

```http
Authorization: Bearer <access_token>
```

---

# Swagger Documentation

Swagger/OpenAPI documentation provides:
- Interactive API testing
- Request/response schemas
- Authentication flow visualization
- Endpoint documentation

Swagger URL:

```bash
http://localhost:5000/api-docs
```

---

# Project Outcome

This project strengthened my understanding of:
- Secure backend engineering
- Authentication workflows
- Enterprise-level authorization systems
- API security and session management
- Scalable backend architecture

It also improved my practical knowledge of building production-oriented backend systems using Node.js and MongoDB.

---

# Future Improvements

- OTP-based Authentication
- Email Verification
- Rate Limiting
- Docker Deployment
- CI/CD Integration
- Redis-based Token Storage
- OAuth Authentication (Google/GitHub)

---

# Author

Aastha Patil  
Backend & Full Stack Developer
