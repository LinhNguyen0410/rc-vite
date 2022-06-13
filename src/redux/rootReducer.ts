import { combineReducers } from 'redux';
import { CounterReducer } from './slices/counterSlice';

// const rootReducer = combineReducers({
//   CounterReducer
// });

const rootReducer = {
  CounterReducer
}

// export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
