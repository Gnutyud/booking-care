import { createSlice } from "@reduxjs/toolkit";
import viData from '../../languages/vi';
import enData from '../../languages/en';
import { RootState } from "app/store";

const initialState = {
  lang: 'vi',
  langData: viData
}
const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
      if(action.payload === 'vi'){
        state.langData = viData;
      } else if(action.payload === 'en') {
        state.langData = enData;
      }
    }
  }
});

export const { setLang } = homeSlice.actions;

export const language = (state: RootState) => state.home.lang;
export const languageData = (state: RootState) => state.home.langData;

export default homeSlice.reducer;