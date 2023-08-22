import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './books';
import { removeBook } from '../redux/books/booksSlice';

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <h2>Book List</h2>
      {books.map((book) => (
        <Book
          key={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
          item_id={book.item_id}
          handleDelete={() => handleDelete(book.item_id)}
        />
      ))}
    </div>
  );
}

export default BookList;
