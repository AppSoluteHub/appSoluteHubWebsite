import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./userSlice";

const getStorage = () => {
  return storage;
};

const persistConfig = {
  key: "user",
  storage: getStorage(),
  version: 1,
};

const persistedUser = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedUser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
