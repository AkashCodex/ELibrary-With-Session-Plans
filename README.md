1. **Main Project (PBL Context)**

This session focuses on integrating real data into our E-Library Management System. By fetching book data from a backend API, learners will make the application dynamic and connected to a real database. This lays the foundation for future CRUD operations.

---

2. **Today's Problem Statement (PSBL)**

**Problem Statement:**
Fetch book data from the backend using Axios and display it dynamically in the Home page without refreshing the page.

**User Stories:**

* As a user, I want to see a list of books loaded from a backend server.
* As a developer, I want to fetch data using Axios and render it using React’s useEffect and useState hooks.

---

3. **Learning Objectives**

By the end of this session, learners will be able to:

* Understand the concept of RESTful APIs.
* Use Axios to fetch data.
* Apply useState and useEffect to manage data and lifecycle.
* Handle loading and error states.
* Render fetched data dynamically.

---

4. **Scenario-Based Framing**

Just like Netflix loads its catalog from a backend, our E-Library should dynamically fetch books from a server. This gives the user real-time, up-to-date data and mimics how real applications work with databases.

---

5. **Mini Visual Roadmap**

Step 1: Install Axios
Step 2: Create bookService.js for API calls
Step 3: Use useEffect to fetch data on Home load
Step 4: Store data in useState
Step 5: Display using BookList and BookCard
Step 6: Handle loading and errors

---

6. **Conceptual Explanation (Notes + Code Walkthrough)**

📦 **What is an API?**
An Application Programming Interface (API) allows communication between client and server. RESTful APIs use HTTP methods (GET, POST, PUT, DELETE).

🔌 **Installing Axios**
npm install axios

📁 **Create API Service**

```js
// src/api/bookService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/books';

export const fetchBooks = () => axios.get(BASE_URL);
```

📡 **Using useEffect to Fetch Data**

```js
// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import { fetchBooks } from '../api/bookService';
import BookList from '../components/BookList';

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooks()
      .then(response => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error loading books');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return <BookList books={books} />;
}

export default Home;
```

---

7. **Hands-On Implementation (Integration in Main Project)**

🔨 **Install Axios:**
npm install axios

🔨 **Create API Layer:**

* src/api/bookService.js with `fetchBooks()`

🔨 **Update Home Page:**

* src/pages/Home.jsx to fetch and display data

🔨 **Pass Props to BookList:**

```js
// BookList.jsx
function BookList({ books }) {
  return (
    <div>
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
```

---

8. **Output-Based Assessment**

✅ Tasks:

* Successfully load book data on Home page
* Handle loading and error states
* Push to GitHub under feature/api-fetching

---

9. **Interview Preparation**

Q1. What is the difference between fetch and Axios?
A: Axios is a library with built-in JSON parsing, better error handling, and simpler syntax.

Q2. Why is useEffect important for API calls?
A: It lets us perform side effects like fetching data after component mounts.

Q3. How do you handle API errors?
A: Using `.catch()` and displaying fallback UI.

Q4. Output-based:
What will this render if fetch fails?

```js
if (error) return <p>{error}</p>;
```

→ Displays the error message passed to `setError`.

Q5. What happens if useState is not used in API response?
A: The component won’t re-render with new data.

---

10. **Connection to the Next Problem Statement**

Next, we’ll focus on **Styling in React** to make our app visually appealing. We’ll explore global CSS, component-level styles, and introduce utility frameworks like TailwindCSS.

Next Topic:
Styling in React

* CSS Modules
* Global styles
* Utility-first styling with Tailwind (optional)
* Organizing styles for maintainability
