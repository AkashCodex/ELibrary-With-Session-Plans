import React, { useEffect, useState } from "react";
import { getAllBooks, deleteBook } from "../api/bookService";
import BookCard from "./BookCard";

const BookList = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await getAllBooks();
    setBooks(res.data);
  };

  const handleDelete = async (id) => {
    await deleteBook(id);
    fetchBooks();
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {books.map(book => (
        <BookCard key={book.id} book={book} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default BookList;
