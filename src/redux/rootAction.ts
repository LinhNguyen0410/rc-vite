import * as HomeActions from 'pages/Home/redux/homeActions';
import * as BookSellerActions from 'pages/BestSeller/redux/bestSellerAction';
import * as BookReviewActions from 'pages/BookReview/redux/bookReviewAction';

const { ...homeActions } = HomeActions;
const { ...bookSellerActions } = BookSellerActions;
const { ...bookReviewActions } = BookReviewActions;

export { homeActions, bookSellerActions, bookReviewActions };
