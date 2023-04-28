import { combineReducers, configureStore, Action } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Reducers
import auth from "../modules/auth/authSlice";
import session from "../modules/session/sessionSlice";
import user from "../modules/user/userSlice";
import posts from "../modules/posts/postsSlice";

const appReducer = combineReducers({
  auth,
  session,
  user,
  posts,
});

export const rootReducer = (state: any, action: Action<string>) => {
  return appReducer(state, action);
};

const persistConfig = {
  key: "root",
  storage,
};

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
});

export type RootState = ReturnType<typeof rootReducer>;
export const persistor = persistStore(store);
export default store;
