import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import * as bookService from '../api/bookService';  // Corrected import
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await bookService.getAllBooks();
      setBooks(response.data);
      setFilteredBooks(response.data);
    } catch (error) {
      console.error('Failed to fetch books:', error);
    }
  };

  const handleSearch = (query) => {
    const lowerQuery = query.toLowerCase();
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(lowerQuery) ||
        book.author.toLowerCase().includes(lowerQuery)
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">eLibrary</h1>
        <button
          onClick={() => navigate('/add')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Book
        </button>
      </div>
      <SearchBar onSearch={handleSearch} />
      <BookList books={filteredBooks} onUpdate={fetchBooks} />
    </div>
  );
};

export default Home;
