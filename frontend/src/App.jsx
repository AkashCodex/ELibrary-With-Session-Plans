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
