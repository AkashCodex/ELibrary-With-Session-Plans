import axios from "axios";

const API_BASE = "http://localhost:8080/api/books";

export const getAllBooks = () => axios.get(API_BASE);
export const getBookById = (id) => axios.get(`${API_BASE}/${id}`);
export const addBook = (book) => axios.post(API_BASE, book);
export const updateBook = (id, book) => axios.put(`${API_BASE}/${id}`, book);
export const deleteBook = (id) => axios.delete(`${API_BASE}/${id}`);
export const searchBooks = (keyword) => axios.get(`${API_BASE}/search?keyword=${keyword}`);
