import { createSlice } from "@reduxjs/toolkit";
type TPayload = { sideBar: boolean };

const sideBarMenu = createSlice({
  name: "sideBar",
  initialState: {
    sideBar: false,
  },
  reducers: {
    toggleSidebar: (state: TPayload, action: { payload: boolean }) => {
      state.sideBar = action.payload;
    },
  },
});
export type TThemeSelector = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any; themeSlice: TPayload 
};
export const { toggleSidebar } = sideBarMenu.actions;
export default sideBarMenu.reducer;
