### 1. Main Project (PBL Context)

As we wrap up the frontend development for our **E-Library Management System**, the next step is to **prepare and deploy** the application so it’s accessible on the web. This session walks learners through production build creation, hosting options, environment variable configuration, and frontend deployment on platforms like **Vercel** or **Netlify**.

---

### 2. Today's Problem Statement (PSBL)

**Problem Statement:**

Prepare the E-Library React application for production and deploy it using a modern hosting platform.

**User Stories:**

* As a user, I want to access the E-Library system via a public URL with fast loading and no developer tools open.

* As a developer, I want to create an optimized production build and host it on a platform like Vercel or Netlify.

---

### 3. Learning Objectives

By the end of this session, learners will be able to:

* Create a production build of a React app using `npm run build`.

* Understand differences between development and production modes.

* Deploy the app on Vercel or Netlify.

* Configure environment variables securely.

* Apply best practices before deployment (code cleanup, minification).

---

### 4. Scenario-Based Framing

Just like launching a real-world software product, the E-Library app must be accessible online for users and stakeholders. You’ve built features locally—now it’s time to host the app, ensure it runs fast, hides internal tools, and is secure. Think of this as your product launch moment.

---

### 5. Mini Visual Roadmap

1. Run `npm run build` to create a production bundle
2. Choose a hosting platform (Vercel or Netlify)
3. Push code to GitHub
4. Connect GitHub repo to hosting platform
5. Add environment variables if needed
6. Test deployment URL
7. Cleanup code (remove console logs, dev dependencies)

---

### 6. Conceptual Explanation (Notes + Code Walkthrough)

#### 🔧 Creating a Production Build

```bash
npm run build
```

* Creates a `build/` directory with optimized assets.
* Minifies code, strips warnings, and tree-shakes unused code.

---

#### 🌐 Hosting Platforms Overview

| Platform     | Pros                                     | Domain                    |
| ------------ | ---------------------------------------- | ------------------------- |
| Vercel       | Fast, GitHub integration, preview builds | `yourproject.vercel.app`  |
| Netlify      | Drag-and-drop support, env vars UI       | `yourproject.netlify.app` |
| GitHub Pages | Simple, suitable for static sites only   | `username.github.io/repo` |

---

#### 🚀 Steps to Deploy on Vercel

1. Push your app to a GitHub repo.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub.
3. Click **New Project** → Select the repo.
4. Set project root if needed (`/`).
5. Click **Deploy**.

#### 🚀 Steps to Deploy on Netlify

1. Push to GitHub.
2. Go to [netlify.com](https://netlify.com).
3. Click **Add New Site** → Import from Git.
4. Set build command: `npm run build`
5. Set publish directory: `build/`
6. Click **Deploy Site**

---

#### 🔒 Environment Variables

React prefixes public variables with `REACT_APP_`.

Example: `.env`

```
REACT_APP_API_URL=https://api.elibrary.com
```

Usage in code:

```js
const API = process.env.REACT_APP_API_URL;
```

> ✅ **Never hardcode secrets** in frontend apps!

---

#### ⚙️ Build vs Development Mode

| Feature     | Development (`npm start`) | Production (`npm run build`) |
| ----------- | ------------------------- | ---------------------------- |
| Debugging   | Enabled                   | Disabled                     |
| Source Maps | Present                   | Stripped/Minified            |
| Performance | Slower                    | Optimized                    |
| File Size   | Large                     | Minified                     |

---

#### ✅ Best Practices Before Deployment

* Remove unnecessary `console.log` statements.
* Delete unused components or files.
* Verify mobile responsiveness.
* Confirm `.env` values are correct.
* Run Lighthouse for performance & accessibility audits.

---

### 7. Hands-On Implementation (Integration in Main Project)

#### 🛠 Push Final Code to GitHub

```bash
git checkout -b deploy-ready
git add .
git commit -m "Prepare for production deployment"
git push origin deploy-ready
```

#### 🛠 Run Build and Test Locally

```bash
npm run build
npx serve -s build
```

> This spins up a local server with your production build.

#### 🛠 Deploy to Vercel

* Follow steps above
* Share your deployment link with the class/team

---

### 8. Output-Based Assessment

**Tasks:**

* Generate a production build using `npm run build`
* Deploy the build on **Vercel** or **Netlify**
* Confirm successful deployment (public URL)
* Use an `.env` file for API endpoint
* Push to GitHub under `feature/deployment-setup`

---

### 9. Interview Preparation

**Q1:** What does `npm run build` do in a React app?
**A:** It compiles the app into optimized, minified static files ready for production.

**Q2:** How is production mode different from development?
**A:** Production disables dev tools and source maps and enables performance optimizations.

**Q3:** Why use environment variables in React?
**A:** To store dynamic values securely (like API URLs), especially ones that vary by environment.

**Q4:** How do you deploy a React app to Netlify?
**A:** Connect GitHub repo, set build command (`npm run build`), publish directory (`build/`), and deploy.

**Q5:** What are best practices before deploying a frontend app?
**A:** Remove `console.log`, verify mobile responsiveness, use env variables, check accessibility.

---

### 10. Connection to the Next Problem Statement

Now that our frontend is deployed and accessible publicly, it’s time to begin building the **backend**. In the next session, we’ll introduce **Spring Boot** and **Spring Core**, setting the foundation for API development that integrates with our React app.

---

### ✅ Next Topic:

**Introduction to Spring Boot & Spring Core (Backend Development)**

* What is Spring Boot and why use it?
* Key annotations and architecture.
* Creating a basic REST API.
* Connecting with frontend (CORS, endpoints).
* Folder structure for scalable backend.

---

