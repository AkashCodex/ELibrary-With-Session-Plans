// src/components/BookCard.jsx
import React from "react";

const BookCard = ({ book, onEdit, onDelete }) => (
  <div className="book-card">
    <h3>{book.title}</h3>
    <p>{book.author}</p>
    <p>{book.genre}</p>
    <p className="price">${book.price}</p>
    <div className="button-group">
      <button className="edit-btn" onClick={() => onEdit(book)}>Edit</button>
      <button className="delete-btn" onClick={() => onDelete(book.id)}>Delete</button>
    </div>
  </div>
);

export default BookCard;
