import React, { useEffect, useState } from "react";
import { addBook, getBookById, updateBook } from "../api/bookService";
import { useNavigate, useParams } from "react-router-dom";

const BookForm = () => {
  const [book, setBook] = useState({ title: "", author: "", genre: "", price: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchBook = async () => {
    const res = await getBookById(id);
    setBook(res.data);
  };

  useEffect(() => {
    if (id) fetchBook();
  }, [id]);

  const handleChange = e => setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (id) await updateBook(id, book);
    else await addBook(book);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 shadow-md bg-white rounded-md">
      <input name="title" value={book.title} onChange={handleChange} placeholder="Title" className="block w-full mb-3 border p-2" required />
      <input name="author" value={book.author} onChange={handleChange} placeholder="Author" className="block w-full mb-3 border p-2" required />
      <input name="genre" value={book.genre} onChange={handleChange} placeholder="Genre" className="block w-full mb-3 border p-2" />
      <input type="number" name="price" value={book.price} onChange={handleChange} placeholder="Price" className="block w-full mb-3 border p-2" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
};

export default BookForm;
