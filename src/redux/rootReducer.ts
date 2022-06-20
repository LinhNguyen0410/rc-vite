import * as HomeReducer from 'pages/Home/redux/homeReducer';
import { BooksReducer } from './slices/bookSlice';

const { ...homeReducer } = HomeReducer;

const rootReducer = {
  BooksReducer,
  ...homeReducer,
};
export default rootReducer;
