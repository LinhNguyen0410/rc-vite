import * as HomeReducer from 'pages/Home/redux/homeReducer';
import * as BookSellerReducer from 'pages/BestSeller/redux/bestSellerReducer';
import * as BooksReviewReducer from 'pages/BookReview/redux/bookReviewReducer';

const { ...homeReducer } = HomeReducer;
const { ...bookSellerReducer } = BookSellerReducer;
const { ...booksReviewReducer } = BooksReviewReducer;

const rootReducer = {
  ...homeReducer,
  ...bookSellerReducer,
  ...booksReviewReducer,
};
export default rootReducer;
