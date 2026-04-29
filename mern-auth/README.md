# MERN Authentication Project
**ISE 2 – Modern Full-Stack Development**
Kolhapur Institute of Technology's IMER, MCA Department

---

## Project Structure

```
mern-auth/
├── backend/
│   ├── middleware/
│   │   └── authMiddleware.js   ← JWT protect middleware
│   ├── models/
│   │   └── User.js             ← Mongoose User schema
│   ├── routes/
│   │   ├── authController.js   ← signup / signin logic
│   │   └── authRoutes.js       ← Express routes
│   ├── .env                    ← Environment variables
│   ├── package.json
│   └── server.js               ← Express + MongoDB entry point
│
└── frontend/
    ├── public/
    │   └── index.html
    └── src/
        ├── components/
        │   └── PrivateRoute.js ← Protected route wrapper
        ├── context/
        │   ├── AuthContext.js  ← Global auth state (Context API)
        │   └── api.js          ← Axios API calls
        ├── pages/
        │   ├── SignUp.js       ← Sign Up form
        │   ├── SignIn.js       ← Sign In form
        │   └── Dashboard.js    ← Protected dashboard
        ├── App.js              ← Router setup
        ├── index.css           ← Global styles
        └── index.js            ← React entry point
```

---

## Setup & Run

### Prerequisites
- Node.js (v16+)
- MongoDB (running locally on port 27017)
- npm

---

### 1. Backend Setup

```bash
cd backend
npm install
```

Edit `.env` if needed:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/mern_auth
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
```

Start the backend:
```bash
npm run dev      # development (nodemon)
# or
npm start        # production
```

Backend runs at: `http://localhost:5000`

---

### 2. Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs at: `http://localhost:3000`

> The `"proxy": "http://localhost:5000"` in frontend/package.json routes API calls automatically.

---

## API Endpoints

| Method | URL                  | Description           | Body Fields                              |
|--------|----------------------|-----------------------|------------------------------------------|
| POST   | /api/auth/signup     | Register new user     | firstName, lastName, email, password     |
| POST   | /api/auth/signin     | Login existing user   | email, password                          |

### Example Response (Success)
```json
{
  "success": true,
  "message": "Account created successfully",
  "token": "<JWT_TOKEN>",
  "user": {
    "id": "...",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com"
  }
}
```

---

## Features

- **Sign Up** — First Name, Last Name, Email, Password with validation
- **Sign In** — Email + Password with credential verification
- **JWT Authentication** — Token stored in localStorage
- **Protected Route** — Dashboard only accessible after login
- **Error Messages** — Shown for invalid inputs or failed auth
- **Password Hashing** — bcryptjs used before storing in MongoDB

---

## Tech Stack

| Layer     | Technology                    |
|-----------|-------------------------------|
| Frontend  | React 18, React Router v6     |
| Backend   | Node.js, Express.js           |
| Database  | MongoDB, Mongoose             |
| Auth      | JWT (jsonwebtoken), bcryptjs  |
| HTTP      | Axios                         |

---

## Upload to GitHub

```bash
# In the mern-auth root folder:
git init
git add .
git commit -m "Initial commit: MERN Auth Project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mern-auth.git
git push -u origin main
```
