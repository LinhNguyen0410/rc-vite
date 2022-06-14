import { combineReducers } from 'redux';
import { CounterReducer } from './slices/counterSlice';
import { BooksReducer } from './slices/bookSlice';
// const rootReducer = combineReducers({
//   CounterReducer
// });

const rootReducer = {
  CounterReducer,
  BooksReducer,
};

// export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
