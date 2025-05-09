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

## 7. Conceptual Explanation
✅ What is React?
React is a JavaScript library for building reusable UI components. It uses a virtual DOM for fast rendering and follows a component-based architecture.

✅ JSX – JavaScript + XML
JSX allows writing HTML-like syntax directly within JavaScript:

const greeting = <h1>Hello, world!</h1>;
✅ Function vs Class Components

Function Component:

function Welcome() {
  return <h1>Hello!</h1>;
}

Class Component:

class Welcome extends React.Component {
  render() {
    return <h1>Hello!</h1>;
  }
}

✅ Props (Properties)
Props allow you to pass data from one component to another (typically from parent to child):

function Book(props) {
  return <h2>{props.title} by {props.author}</h2>;
}
✅ Virtual DOM vs Real DOM
React maintains a virtual copy of the DOM in memory. When state or props change, React compares the virtual DOM with the real DOM and updates only the parts that changed.

Component Tree:

App
 └── BookList
      └── Book
## 7. Hands-On Implementation (Integration in Main Project)
📁 Folder Structure

e-library/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── ManageBook.jsx
│   └── index.css
📄 main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* ✅ Wrap App with BrowserRouter */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
📄 App.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ManageBook from "./pages/ManageBook";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<ManageBook />} />
      <Route path="/edit/:id" element={<ManageBook />} />
    </Routes>
  );
};

export default App;

## 8. Output-Based Assessment
✅ Expected Outputs:

Book components are displayed with title and author.

The page does not reload when rendering components.

Adding new book entries to the data structure updates the UI dynamically.

📤 GitHub Checkpoint:

Folder Name: 01_react_intro_components

Commit and push all files with a meaningful commit message.

## 9. Interview Preparation
💬 Sample Questions:

Q: What is JSX in React and why is it useful?
A: JSX is a syntax extension that looks like HTML but compiles to JavaScript. It makes UI code easier to write and understand.

Q: What is the difference between functional and class components?
A: Functional components are simpler and support hooks. Class components use lifecycle methods and this.

Q: What is the output of this component?

function Greet(props) {
  return <h1>Hello, {props.name}</h1>;
}

<Greet name="Alice" />
A: The output will be: Hello, Alice

Q: Why are keys important in React lists?
A: Keys help React efficiently update and manage dynamic lists by identifying which items changed.

Q: What is the virtual DOM and how does it work?
A: The virtual DOM is a lightweight representation of the actual DOM. React compares it to the real DOM and updates only the parts that have changed.

## 10. Connection to the Next Problem Statement
Next Topic: React State and Event Handling

Next Problem Statement:
Allow users to input and submit new book entries using a form. Use useState to dynamically store and update the list of books on the UI without a page refresh.
