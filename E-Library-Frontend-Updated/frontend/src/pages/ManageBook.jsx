// src/pages/ManageBook.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';

const ManageBook = () => {
  const { id } = useParams(); // If id exists, it's edit mode
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <h2>{id ? 'Edit Book' : 'Add Book'}</h2>
      <BookForm bookId={id} onSuccess={handleSuccess} />
    </div>
  );
};

export default ManageBook;
