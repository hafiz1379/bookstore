import React, { useState } from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import BookList from './components/booklist';
import BookForm from './components/bookform';
import CategoriesPage from './components/categories/Categoriespage';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    const bookWithId = { ...newBook, id: Date.now() };
    setBooks([...books, bookWithId]);
  };

  const handleDeleteBook = (bookId) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={(
              <div>
                <h1>My Book Collection</h1>
                <BookList books={books} onDelete={handleDeleteBook} />
                <BookForm onAdd={handleAddBook} />
              </div>
          )}
          />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
