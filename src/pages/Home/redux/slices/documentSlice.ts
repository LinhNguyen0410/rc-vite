import { createSlice } from '@reduxjs/toolkit';

export interface DocumentState {
  lang: 'en' | 'vn';
}
const initialState: DocumentState = {
  lang: 'en',
};
export const documentSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      const language = action.payload;
      state.lang = language;
    },
  },
});

const { actions, reducer } = documentSlice;
export { actions as DocumentAction, reducer as DocumentReducer };
