# FullStackApp

A full-stack web application built with [Next.js](https://nextjs.org), MongoDB, and NextAuth.js for authentication. Users can register, log in with credentials, Google, or GitHub, and create posts with images (from URL or local upload). The app supports secure authentication, CRUD operations for posts, and image uploads.

---

## Features

- **User Authentication**
  - Sign up and log in with email/password
  - OAuth login with Google and GitHub
- **Dashboard**
  - View, create, and delete posts
  - Each post includes a title, description, content, and image
- **Image Support**
  - Add images via URL or upload from local storage
- **Responsive UI**
  - Clean, modern interface with styled components
- **Secure**
  - Passwords are hashed
  - Environment variables for sensitive data

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/fullstackapp.git
cd fullstackapp
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the following:

```env
MONGODB_URI=your-mongodb-connection-string
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret
```

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage

- **Register**: Create a new account or use Google/GitHub to sign in.
- **Login**: Access your dashboard after authentication.
- **Create Post**: Fill in the form, add an image (URL or upload), and submit.
- **Delete Post**: Remove posts from your dashboard.

---

## Project Structure

```
src/
  app/
    api/           # API routes (auth, posts)
    dashboard/     # Dashboard pages and components
    models/        # Mongoose models (User, Post)
    utils/         # Utility functions (DB connection)
  styles/          # CSS modules
public/            # Static assets
```

---

## Image Upload

- You can add an image to your post by providing a URL or uploading from your device.
- Uploaded images are stored and served so they display correctly even after deployment.

---

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or any platform that supports Next.js.

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [MongoDB Documentation](https://docs.mongodb.com/)

---

## License

This project is licensed under the MIT License.
