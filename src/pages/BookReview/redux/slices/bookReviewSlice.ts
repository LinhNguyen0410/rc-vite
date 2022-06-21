import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import bookAPI from 'apis/bookApi';
import { FETCH_BOOK_REVIEWS, BOOK_REVIEWS_SLICE } from 'pages/BookReview/constant/redux';
import { ReviewType, Status } from './type';

export interface BookReviewState {
  bookReviews: ReviewType[];
  status: Status;
}

const initialState: BookReviewState = {
  bookReviews: [],
  status: 'idle',
};

export const getReviewsAsync = createAsyncThunk(
  FETCH_BOOK_REVIEWS,
  async (title: string | null) => {
    const response = await bookAPI.getReviewsByTitle(title);
    return response;
  },
);

export const booksReviewSlice = createSlice({
  name: BOOK_REVIEWS_SLICE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviewsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getReviewsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.bookReviews = action.payload;
      });
  },
});

const { actions, reducer } = booksReviewSlice;
export { actions as BookReviewActions, reducer as BooksReviewReducer };
