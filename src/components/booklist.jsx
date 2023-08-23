import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './books';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector((state) => Object.values(state.books).flat());

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <h2>Book List</h2>
      {Array.isArray(books) && books.map((book) => (
        <Book
          key={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
          id={book.item_id !== undefined ? book.item_id : ''}
          handleDelete={() => handleDelete(book.item_id)}
        />
      ))}
    </div>
  );
}

export default BookList;
