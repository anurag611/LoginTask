# LoginTask

A full-stack application using OAuth 2.0 for signup and signin with the ability for users to edit their names after signing up. The backend is built with Node.js, Express, MongoDB, and Passport.js for authentication.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- MongoDB Atlas account and cluster
- Google Developer Console project with OAuth credentials

## Setup

1. **Clone the repository:**

```bash
git clone https://github.com/anurag611/LoginTask.git
cd LoginTask
```

2. **Install dependencies:**
```bash
npm install
```
3. **Set up environment variables:**
Create a .env file in the root directory and add the following environment variables

```bash
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
MONGODB_URI=your-mongodb-uri
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```
5. **Start The Server**
```bash
npm run-script dev
```

6. open url : localhost:3000/users/register or localhost:3000/users/login


Thank You
