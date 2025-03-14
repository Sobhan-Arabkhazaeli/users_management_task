import { createSlice } from "@reduxjs/toolkit";
import { TUserDetails } from "../../core/types/common/user.type";
import { toast } from "react-toastify";
type TPayload = { favoritesList: TUserDetails[] };

const favoritesSlice = createSlice({
  name: "favorites_users",
  initialState: {
    favoritesList: [],
  },
  reducers: {
    // Handle Add user to favorites list
    addToFavorites: (state: TPayload, action: { payload: TUserDetails }) => {
      state.favoritesList = [...state.favoritesList, action.payload];
      toast.success("User added to favorites list")
    },
    // Handle for removing a user from the favorites list
    removeFromFavorites: (state: TPayload, action: { payload: number | undefined }) => {
      state.favoritesList = state.favoritesList.filter(
        (obj) => obj?.id !== action.payload
      );
      toast.success("User removed from favorites list")
    },
  },
});

export type TFavoriteSelector = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  favoriteSlice: TPayload;
};
export const { addToFavorites ,removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
