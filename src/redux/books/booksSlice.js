import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/TMj8YWYzm1wGAELMD5UW';

export const fetchBooks = createAsyncThunk('books/fetch', async () => {
  const response = await axios.get(`${baseURL}/books`);
  return response.data;
});

export const addBook = createAsyncThunk('books/add', async (book) => {
  const itemId = Date.now();
  await axios.post(`${baseURL}/books`, {
    ...book,
    item_id: itemId,
  });
  return {
    ...book,
    item_id: itemId,
  };
});

export const removeBook = createAsyncThunk('books/remove', async (id) => {
  await axios.delete(`${baseURL}/books/${id}`);
  return id;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: { books: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const booksObj = action.payload;
        const bookIdArray = Object.keys(booksObj);
        const books = bookIdArray.map((bookId) => ({
          item_id: bookId,
          title: booksObj[bookId][0].title,
          author: booksObj[bookId][0].author,
          category: booksObj[bookId][0].category,
        }));
        state.books = books;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.unshift(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const filteredBooks = state.books.filter(
          (book) => book.item_id !== action.payload,
        );
        state.books = filteredBooks;
      });
  },
});

export default booksSlice.reducer;
