import { createSlice } from '@reduxjs/toolkit';

export interface LanguagesState {
  lang: 'en' | 'vn';
}
const initialState: LanguagesState = {
  lang: 'en',
};
export const languageSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      const language = action.payload;
      state.lang = language;
    },
  },
});

const { actions, reducer } = languageSlice;
export { actions as LanguageAction, reducer as LanguageReducer };
