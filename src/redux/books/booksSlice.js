import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    item_id: 'item1',
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    category: 'Action',
  },
  {
    item_id: 'item2',
    title: 'Good Omens',
    author: 'Terry Pratchett',
    category: 'Comedy',
  },
  {
    item_id: 'item3',
    title: 'George Orwell',
    author: 'Animal Farm',
    category: 'Fiction',
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState: { books: initialState },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    },
  },
});
export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
