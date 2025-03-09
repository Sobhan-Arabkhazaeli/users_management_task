import { configureStore, Store } from "@reduxjs/toolkit";
import themeSlice from "./slices/theme";
import sideBarMenu from "./slices/menu";
import UsersParams from "./slices/users-params";
import favoritesSlice from "./slices/favorites";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { GetAllUsers } from "../core/services/api/GetAllUsers";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["theme", "favoritesList"],
  //   blacklist: [""],
};

// Added the ability to save to local storage for reducers.
const persistedTheme = persistReducer(persistConfig, themeSlice);
const persistedFavorite = persistReducer(persistConfig, favoritesSlice);

const store: Store = configureStore({
  reducer: {
    persistedTheme,
    persistedFavorite,
    sideBarMenu,
    UsersParams,
    [GetAllUsers.reducerPath]: GetAllUsers.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(GetAllUsers.middleware),
});

const persistor = persistStore(store);
export { store, persistor };

export default store;
