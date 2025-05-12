### 1. Main Project (PBL Context)

In our E-Library Management System, users need to add or edit book details. This session focuses on implementing forms to handle these operations effectively. We'll explore controlled and uncontrolled components, manage various input types, handle form submissions, and introduce basic validation techniques.

---

### 2. Today's Problem Statement (PSBL)

**Problem Statement:**

Implement a form in the E-Library application to add or edit book details, managing form inputs and validations effectively.

**User Stories:**

* As a user, I want to add new books by filling out a form with details like title, author, genre, and price.

* As a developer, I want to manage form inputs using React state and validate the inputs before submission.

---

### 3. Learning Objectives

By the end of this session, learners will be able to:

* Understand the difference between controlled and uncontrolled components in React.

* Manage form inputs using state (controlled components).

* Handle various input types: text, radio buttons, checkboxes, and dropdowns.

* Implement basic form validation.

* Utilize `useRef` for uncontrolled components.

* Be aware of form handling libraries like Formik and Yup.

---

### 4. Scenario-Based Framing

Imagine you're using an online bookstore to add new titles to your collection. The form you fill out needs to capture accurate information and provide immediate feedback if something's missing or incorrect. Similarly, our E-Library system requires robust form handling to ensure data integrity and a smooth user experience.

---

### 5. Mini Visual Roadmap

1. **Controlled Components:** Manage form inputs using React state.

2. **Uncontrolled Components:** Access form inputs using `useRef`.

3. **Handling Various Inputs:** Implement text fields, radio buttons, checkboxes, and dropdowns.

4. **Form Submission:** Handle form submission events and prevent default behavior.

5. **Validation:** Implement basic validation to ensure required fields are filled.

6. **Integration:** Incorporate the form into the E-Library project for adding/editing books.

---

### 6. Conceptual Explanation (Notes + Code Walkthrough)

#### 📘 Controlled Components

In controlled components, form data is handled by the component's state. Each input field's value is set by the state, and any changes update the state accordingly.

```jsx
import React, { useState } from 'react';

function BookForm() {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form>
      <label>Title:</label>
      <input type="text" value={title} onChange={handleChange} />
    </form>
  );
}
```

#### 📗 Uncontrolled Components

Uncontrolled components rely on the DOM to manage form data. React accesses the input values using refs.

```jsx
import React, { useRef } from 'react';

function BookForm() {
  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Title: ${titleRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" ref={titleRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

#### 📙 Handling Various Inputs

* **Text Input:**

  ```jsx
  <input type="text" value={value} onChange={handleChange} />
  ```

* **Radio Buttons:**

  ```jsx
  <input type="radio" value="Fiction" checked={genre === 'Fiction'} onChange={handleGenreChange} />
  ```

* **Checkbox:**

  ```jsx
  <input type="checkbox" checked={isAvailable} onChange={handleAvailabilityChange} />
  ```

* **Dropdown:**

  ```jsx
  <select value={category} onChange={handleCategoryChange}>
    <option value="Science">Science</option>
    <option value="Art">Art</option>
  </select>
  ```

#### 📕 Form Submission and Validation

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  if (!title) {
    alert('Title is required');
    return;
  }
  // Proceed with form submission
};
```

---

### 7. Hands-On Implementation (Integration in Main Project)

**File:** `src/components/BookForm.jsx`

```jsx
import React, { useState } from 'react';

function BookForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    price: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.title) tempErrors.title = 'Title is required';
    if (!formData.author) tempErrors.author = 'Author is required';
    if (!formData.genre) tempErrors.genre = 'Genre is required';
    if (!formData.price) tempErrors.price = 'Price is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      setFormData({ title: '', author: '', genre: '', price: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input name="title" value={formData.title} onChange={handleChange} />
      {errors.title && <span>{errors.title}</span>}

      <label>Author:</label>
      <input name="author" value={formData.author} onChange={handleChange} />
      {errors.author && <span>{errors.author}</span>}

      <label>Genre:</label>
      <input name="genre" value={formData.genre} onChange={handleChange} />
      {errors.genre && <span>{errors.genre}</span>}

      <label>Price:</label>
      <input name="price" value={formData.price} onChange={handleChange} />
      {errors.price && <span>{errors.price}</span>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default BookForm;
```

**Integration in `src/pages/ManageBook.jsx`:**

```jsx
import React from 'react';
import BookForm from '../components/BookForm';

function ManageBook() {
  const handleFormSubmit = (data) => {
    // Handle form submission, e.g., send data to API
    console.log('Form Data:', data);
  };

  return (
    <div>
      <h2>Add/Edit Book</h2>
      <BookForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default ManageBook;
```

---

### 8. Output-Based Assessment

**Tasks:**

* Implement the `BookForm` component with controlled inputs.

* Validate that all fields are required.

* Integrate the form into the `ManageBook` page.

* Test form submission and ensure data is logged to the console.

* Push changes to GitHub under the branch `feature/form-handling`.

---

### 9. Interview Preparation

**Q1:** What is the difference between controlled and uncontrolled components in React?

**A:** Controlled components have their form data managed by React state, providing more control over the form inputs. Uncontrolled components rely on the DOM to manage form data, accessing values using refs.

**Q2:** How do you handle form validation in React?

**A:** By managing form input values through state and implementing validation logic that checks for required fields, correct formats, etc., before submission.

**Q3:** How can you access the value of an input field in an uncontrolled component?

**A:** By using the `useRef` hook to create a reference to the input element and accessing its value via `ref.current.value`.

**Q4:** What are some libraries available for form handling in React?

**A:** Libraries like Formik and Yup provide robust solutions for form handling and validation in React applications.

**Q5:** Why might you choose controlled components over uncontrolled components?

**A:** Controlled components provide better control over form data, making it easier to implement features like instant validation, dynamic inputs, and conditional rendering.

---

### 10. Connection to the Next Problem Statement

In the next session, we'll focus on preparing our React application for production deployment. This includes building the app using `npm run build`, exploring hosting options like Vercel and Netlify, managing environment variables, and understanding the differences between development and production modes.

**Next Topic:**

**Preparing a React App for Production**

* Building the application for production.

* Hosting options: Vercel, Netlify, GitHub Pages.

* Managing environment variables.

* Best practices before deployment.

---

Let me know if you'd like to proceed with the next session plan.
