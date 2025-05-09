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

## 🗺️ 5. Mini Visual Roadmap

  Book Data (Title, Author)
        |
     Props 
        |
    <Book />
        |
   Rendered on Web Page 

## 📚 6. Conceptual Explanation
🔹 What is React?
A JavaScript library for building interactive user interfaces using a component-based architecture and a virtual DOM for efficient updates.

🔹 Key Concepts
✅ JSX – JavaScript + XML
JSX allows you to write HTML-like syntax directly inside JavaScript files.
const element = <h1>Hello React!</h1>;

✅ Components
Components are reusable pieces of UI in React.

function Welcome() {
  return <h1>Hello, World!</h1>;
}

Class Component:

class Welcome extends React.Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}

✅ Props (Properties)
Props let you pass data from a parent to a child component.

function Book(props) {
  return <h2>{props.title} by {props.author}</h2>;
}

✅ Virtual DOM vs Real DOM
React uses a virtual DOM, a lightweight copy of the real DOM. It allows React to update only the parts of the page that changed, improving performance.

✅ Component Tree
React apps are structured in a tree of nested components

App
 └── BookList
      └── Book


## 🛠️ 7. Hands-On Implementation (Integration in Main Project)
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
📄 App.jsx
📄 ManageBook.jsx
📄 Home.jsx

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

function Greet(props) {
  return <h1>Hello, {props.name}</h1>;
}

<Greet name="Alice" />


## 10. Connection to the Next Problem Statement
Next Topic: React State and Event Handling

Next Problem Statement:
Allow users to input and submit new book entries using a form. Use useState to dynamically store and update the list of books on the UI without a page refresh.

