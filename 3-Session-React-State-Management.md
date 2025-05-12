### 1. **Main Project (PBL Context)**

This session is part of the *E-Library Management System* project, a CRUD-based bookstore app allowing users to manage books. Today’s topic builds the foundation by enabling state management inside components, so book data can be stored, updated, and displayed dynamically — a core requirement for adding/editing functionality.

---

### 2. **Today's Problem Statement (PSBL)**

**Problem Statement:**

> Introduce and implement `useState` in React to manage the internal state of the book form. Enable users to enter book data into form fields and reflect those values in real-time on screen.

**User Stories:**

* As a user, I want to type into the “Add New Book” form fields so I can input book title, author, and genre.
* As a developer, I want to manage each input field with a separate state using `useState`.

---

### 3. **Learning Objectives**

By the end of this session, learners will be able to:

* Understand the need for state in React components.
* Use the `useState` hook to create and manage component state.
* Handle form inputs dynamically.
* Manage multiple state variables independently.
* Reflect user input in real-time.
* Prepare form data for CRUD submission.

---

### 4. **Scenario-Based Framing**

Imagine you're building the Add/Edit page for an online bookstore. When an admin enters details into a form to add a new book — title, author, genre — these inputs must be stored and processed before submission. Without state, we can't remember or use that data. Today, you'll implement the logic that powers this real-world admin feature.

---

### 5. **Mini Visual Roadmap**

```
Step 1: Create a simple form layout → BookForm.jsx  
Step 2: Add state using useState → title, author, genre  
Step 3: Bind input fields with state  
Step 4: Add onChange handlers  
Step 5: Log the form data on submit (Mock behavior)  
```

---

### 6. **Conceptual Explanation (Notes + Code Walkthrough)**

#### 📘 What is `useState`?

React’s `useState` is a Hook that allows functional components to maintain and update state.

```js
const [stateVariable, setStateFunction] = useState(initialValue);
```

#### 🧠 Why use it?

* To remember values across renders.
* To react to user input.
* To manage form data, toggles, filters, and more.

#### 🧪 Example:

```jsx
const [title, setTitle] = useState('');
```

When the user types in an input:

```jsx
<input value={title} onChange={(e) => setTitle(e.target.value)} />
```

Now every character updates the `title` state.

#### 🧩 Managing multiple fields:

```jsx
const [author, setAuthor] = useState('');
const [genre, setGenre] = useState('');
```

#### 🖇 Full Controlled Input Pattern:

```jsx
<form onSubmit={handleSubmit}>
  <input value={title} onChange={(e) => setTitle(e.target.value)} />
  <input value={author} onChange={(e) => setAuthor(e.target.value)} />
</form>
```

---

### 7. **Hands-On Implementation (Integration in Main Project)**

#### 🔨 File: `src/components/BookForm.jsx`

```jsx
import React, { useState } from 'react';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author, genre };
    console.log('Book Submitted:', newBook);
    // To integrate with backend later
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Book</h2>
      <label>Title:</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} required />

      <label>Author:</label>
      <input value={author} onChange={(e) => setAuthor(e.target.value)} required />

      <label>Genre:</label>
      <input value={genre} onChange={(e) => setGenre(e.target.value)} required />

      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
```

#### ✅ Integration:

Make sure this component is rendered in `ManageBook.jsx`.

```jsx
import BookForm from '../components/BookForm';

function ManageBook() {
  return (
    <div>
      <BookForm />
    </div>
  );
}
```

---

### 8. **Output-Based Assessment**

**Task:**

* Add the BookForm with state.
* Type values and check if they reflect in console on form submission.
* Push the changes to GitHub under branch `feature/state-form-setup`.

**Checkpoint Validation:**

* Form fields reflect real-time data.
* Submit logs object correctly.
* Code pushed and reviewed.

---

### 9. **Interview Preparation**

**Q1. What is `useState` in React and how is it different from regular variables?**
→ `useState` persists data across re-renders, unlike regular JS variables that reset on render.

**Q2. What happens if you forget to set the `onChange` handler in an input with state?**
→ The input becomes read-only and throws a warning.

**Q3. How do you handle multiple state values in a component?**
→ Use multiple `useState` calls or a single state object with keys.

**Q4. What is a controlled component in React?**
→ A component where form inputs are controlled via React state.

**Q5. Output-based: Predict output**

```jsx
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>{count}</button>
```

→ Each click increments the number shown.

---

### 10. **Connection to the Next Problem Statement**

In the next session, we’ll expand this form logic to dynamically render **Book Cards** on the page using the data you input — **without refreshing** the page. You'll learn how to manipulate and display content using state and props.

**Next Topic:**
**Dynamic Content Manipulation**

> *Create dynamic weather/book data cards using JavaScript/React. Modify and display fetched or form data on the page without refreshing it.*

---

