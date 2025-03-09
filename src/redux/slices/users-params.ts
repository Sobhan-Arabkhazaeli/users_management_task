import { createSlice } from "@reduxjs/toolkit";
import { IUsersParams } from "../../core/types/common/users.params.interface";

const initialState: IUsersParams = {
  search: undefined,
  sortBy: undefined,
  page: 1,
  limit: "10",
};

// Getting the IUsersParams property type individually with Indexed Access Types
type SearchType = IUsersParams["search"];
type SortByType = IUsersParams["sortBy"];
type PageType = IUsersParams["page"];
type LimitType = IUsersParams["limit"];

const UsersParams = createSlice({
  name: "shops-params",
  initialState,
  reducers: {
    handleUsersSearch: (
      state: IUsersParams,
      action: { payload: SearchType }
    ) => {
      state.search = action.payload;
    },
    handleUsersPage: (state: IUsersParams, action: { payload: PageType }) => {
      state.page = action.payload;
    },
    handleLimit: (state: IUsersParams, action: { payload: LimitType }) => {
      state.limit = action.payload;
    },
    handleSortBy: (state: IUsersParams, action: { payload: SortByType }) => {
      state.sortBy = action.payload;
    },
  },
});

export type TUserParamsSelector = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  UsersParams: IUsersParams;
};

export const { handleUsersSearch, handleUsersPage, handleLimit, handleSortBy } =
  UsersParams.actions;
export default UsersParams.reducer;
