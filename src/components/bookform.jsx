import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const categoryOptions = [
    { id: '1', value: 'Fiction' },
    { id: '2', value: 'Action' },
    { id: '3', value: 'Nonfiction' },
    { id: '4', value: 'Comedy' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="form-div">
      <hr />
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title-input">
            <input
              placeholder="Book title"
              type="text"
              id="title-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="author-input">
            <input
              placeholder="Author"
              type="text"
              id="author-input"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="category-select">
            <select
              id="category-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              {categoryOptions.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default BookForm;
