import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      if (state.status === 'Under construction') {
        return 'Under construction';
      }
      return state.categories;
    },
  },
});

export default categoriesSlice.reducer;
