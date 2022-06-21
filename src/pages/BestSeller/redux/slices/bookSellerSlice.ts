import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import bookAPI from 'apis/bookApi';
import { FETCH_BOOKS_SELLER, BOOK_SELLER_SLICE } from 'pages/BestSeller/constant/redux';
import { BookSellerState } from './type';

const initialState: BookSellerState = {
  books: [],
  status: 'idle',
};

export const getBooksAsync = createAsyncThunk(FETCH_BOOKS_SELLER, async () => {
  const response = await bookAPI.getListBestSellerBooks();
  return response?.books;
});

export const bookSellerSlice = createSlice({
  name: BOOK_SELLER_SLICE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooksAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBooksAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.books = action.payload;
      })
      .addCase(getBooksAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

const { actions, reducer } = bookSellerSlice;
export { actions as BookSellerActions, reducer as BookSellerReducer };
