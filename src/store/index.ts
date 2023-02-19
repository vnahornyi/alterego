import { AnyAction, configureStore, ThunkAction } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import { newsApi } from "@^/modules/NewsList";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<T = void> = ThunkAction<
  T,
  RootState,
  undefined,
  AnyAction
>;

export default store;
