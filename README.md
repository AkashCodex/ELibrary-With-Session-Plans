### 1. **Main Project (PBL Context)**

This session is part of the *E-Library Management System*, where routing enables smooth navigation between key pages like Home, Add/Edit Book, and Book Details. Learners will create a seamless user experience using React Router to make the app behave like a true Single Page Application (SPA).

---

### 2. **Today's Problem Statement (PSBL)**

**Problem Statement:**

> Implement routing for the E-Library application. Set up multiple pages (Home and Manage Book), and allow navigation between them without full-page reloads.

**User Stories:**

* As a user, I want to click on links in the navbar to navigate to different pages like "Home" and "Add Book" without refreshing the page.
* As a developer, I want to configure the router using BrowserRouter, Routes, and Route so that each component renders correctly.

---

### 3. **Learning Objectives**

By the end of this session, learners will be able to:

* Understand the concept of SPAs.
* Use React Router for page navigation.
* Set up basic routes using `<BrowserRouter>`, `<Routes>`, and `<Route>`.
* Use `<Link>` and `<NavLink>` to navigate.
* Implement nested routes and dynamic URL parameters.
* Navigate programmatically using `useNavigate`.
* Handle undefined routes with a 404 Not Found page.

---

### 4. **Scenario-Based Framing**

In any modern web application like Amazon or Google Docs, navigating to a new page doesn’t reload the entire page. Instead, the content changes dynamically. In our E-Library system, we want similar behavior where users can switch between the home listing, add/edit books, and view details — all without reloads. Routing helps simulate this seamless experience.

---

### 5. **Mini Visual Roadmap**

```
Step 1: Install React Router DOM
Step 2: Wrap App in <BrowserRouter>
Step 3: Define Routes in App.js
Step 4: Add <Link> for navigation
Step 5: Create a NotFound page
Step 6: Implement useNavigate and route params
```

---

### 6. **Conceptual Explanation (Notes + Code Walkthrough)**

#### 📗 What is a SPA?

* A Single Page Application (SPA) loads a single HTML file and dynamically updates content without full reloads.

#### 📅 Installing React Router DOM

```bash
npm install react-router-dom
```

#### ⚖️ Setting Up Routes

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manage" element={<ManageBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

#### 🔗 Navigation Links

```jsx
import { Link, NavLink } from 'react-router-dom';

<NavLink to="/">Home</NavLink>
<NavLink to="/manage">Add Book</NavLink>
```

#### 📍 Route Parameters Example

```jsx
<Route path="/book/:id" element={<BookDetails />} />
```

#### ⏪ Programmatic Navigation

```jsx
const navigate = useNavigate();

const handleSubmit = () => {
  // Save book...
  navigate('/');
};
```

---

### 7. **Hands-On Implementation (Integration in Main Project)**

#### 🔨 Update: `src/App.js`

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ManageBook from './pages/ManageBook';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manage" element={<ManageBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

#### 🔨 Create: `src/pages/NotFound.jsx`

```jsx
function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}
export default NotFound;
```

#### 🔨 Navigation (in Header or inside Home):

```jsx
<NavLink to="/">Home</NavLink>
<NavLink to="/manage">Add Book</NavLink>
```

---

### 8. **Output-Based Assessment**

**Tasks:**

* Navigate from Home to Manage Book using NavLink
* Check dynamic URL routes using /book/\:id
* Try an invalid route and land on 404 page
* Push to GitHub under `feature/routing-setup`

---

### 9. **Interview Preparation**

**Q1. What is a Single Page Application and how is routing handled?**
→ A SPA loads once and updates content dynamically using JavaScript and routing libraries like React Router.

**Q2. Difference between `<Link>` and `<a>` in React?**
→ `<a>` reloads the page; `<Link>` uses client-side routing.

**Q3. How do you handle 404 in React Router?**
→ By using a wildcard route: `<Route path="*" element={<NotFound />} />`

**Q4. What is the use of `useNavigate()`?**
→ To navigate programmatically after an action.

**Q5. Output-based: Predict Result**

```jsx
<Route path="/book/:id" element={<BookDetails />} />
```

→ Visiting `/book/5` renders `BookDetails` with access to `id = 5`

---

### 10. **Connection to the Next Problem Statement**

Next, we'll fetch real book data from the backend using Axios and React’s lifecycle tools. We'll display dynamic content in `BookList.jsx` by fetching from `bookService.js`.

**Next Topic:**
**API and Data Fetching**

> *Use Axios to retrieve book data from the backend and render it on the Home page without refresh.*
