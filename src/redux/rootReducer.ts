import { BooksReducer } from './slices/bookSlice';
// const rootReducer = combineReducers({
//   CounterReducer
// });

const rootReducer = {
  BooksReducer,
};

// export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
