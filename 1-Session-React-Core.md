# 📘 Day-1 React Training Session: Introduction to React & Components

## 1. Main Project (PBL Context)

**Project Title:** E-Library – A Digital Bookstore

You are developing a CRUD-based digital library where users can browse, add, update, and delete books. This session lays the foundation by introducing React and building the first UI block: the `Book` component.

---

## 2. Today's Problem Statement (PSBL)

### 🔹 Standard Problem Statement:
Introduce React fundamentals including components, JSX syntax, rendering, and props. Build a `Book` component to display book information.

### 🔹 User Stories:
- As a developer, I want to understand React components so I can build a modular UI for my library app.
- As a user, I want to see a list of books with details like title and author so I can browse them easily.

---

## 3. Learning Objectives

By the end of this session, learners will be able to:
- Describe what React is and how it works.
- Create functional components using JSX.
- Pass and use props to render data dynamically.
- Construct a component tree and structure a simple React app.
- Integrate basic reusable components in a real-world UI.

---

## 4. Scenario-Based Framing

**Scenario:**  
You're working on a digital library project. Your task is to display books on the screen in a neat and reusable way. Since each book shares a similar layout, you decide to create a React component called `Book`. This will allow you to dynamically render different books with ease.

---

## 5. Mini Visual Roadmap

[ Book Data (title, author) ]
        ↓
    [ Props in React ]
        ↓
  [ <Book /> Component ]
        ↓
  [ Rendered via JSX ]
        ↓
  [ Displayed in Web App ]

6. Conceptual Explanation
✅ What is React?
React is a JavaScript library for building reusable UI components. It uses a virtual DOM for fast rendering and follows a component-based structure.

✅ JSX – JavaScript + XML
JSX allows writing HTML-like syntax within JavaScript.
const greeting = <h1>Hello, world!</h1>;

✅ Function vs Class Components
Function Component:

function Welcome() {
  return <h1>Hello!</h1>;
}

✅ Class Component:

class Welcome extends React.Component {
  render() {
    return <h1>Hello!</h1>;
  }
}

✅ Props (Properties)
Props allow data to be passed from parent to child components.
function Book(props) {
  return <h2>{props.title} by {props.author}</h2>;
}

✅ Virtual DOM vs Real DOM
React maintains a virtual copy of the DOM and updates only what’s changed, making it faster and more efficient than direct DOM manipulation.

App
 └── BookList
      └── Book

7. Hands-On Implementation (Integration in Main Project)
📁 Folder Structure

e-library/
├── public/
├── src/
│   ├── App.jsx
│   └── main.jsx


📄 main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";  // ✅ THIS IS NEEDED
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>  {/* ✅ Wrap App with BrowserRouter */}
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);


📄 App.jsx
// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ManageBook from "./pages/ManageBook";
import "./App.css";



const App = () => {
  return (
    <div className="container mx-auto p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<ManageBook />} />
        <Route path="/edit/:id" element={<ManageBook />} />
      </Routes>
    </div>
  );
};

export default App;

8. Output-Based Assessment
✅ Expected Outputs
Web page displays book components showing title and author.

Page does not reload on component render.

New book entries added in code reflect dynamically.

📤 GitHub Checkpoint
Folder name: 01_react_intro_components

Push all files to GitHub with a proper commit message.




9. Interview Preparation
💬 Sample Questions
What is JSX in React and why is it useful?
JSX is a syntax extension that looks like HTML but is compiled to JavaScript. It makes writing UI code simpler and more readable.

What is the difference between functional and class components?
Functional components are simpler and support Hooks; class components use lifecycle methods and this.


10. Connection to the Next Problem Statement
Topic: React State and Event Handling
Next Problem Statement:
Allow users to input and submit new book entries using a form. Use useState to store and update the list of books dynamically on the UI without page refresh.

