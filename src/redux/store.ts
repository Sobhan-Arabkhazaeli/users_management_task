import { configureStore, Store } from "@reduxjs/toolkit";
import themeSlice from "./slices/theme";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["theme"],
  //   blacklist: [""],
};

// Added the ability to save to local storage for reducers.
const persistedTheme = persistReducer(persistConfig, themeSlice);

const store: Store = configureStore({
  reducer: {
    persistedTheme,
  },
});

const persistor = persistStore(store);
export { store, persistor };

export default store;
