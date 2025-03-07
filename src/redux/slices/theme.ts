import { createSlice } from "@reduxjs/toolkit";
type TPayload = { theme: boolean };

const themeSlice = createSlice({
  name: "dark",
  initialState: {
    theme: false,
  },
  reducers: {
    toggleTheme: (state: TPayload, action: { payload: boolean }) => {
      state.theme = action.payload;
    },
  },
});
export type TThemeSelector = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any; themeSlice: TPayload 
};
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
