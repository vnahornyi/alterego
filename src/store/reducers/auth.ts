import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser } from "../actions/auth";
import { IAuthState } from "../types";

const initialState: IAuthState = {
  isAuthorized: false,
  isLoading: true,
  error: null,
  username: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string | null>) => {
      state.username = action.payload;
    },
    setAuthorized: (state, action: PayloadAction<boolean>) => {
      state.isAuthorized = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuthorized = true;
      state.username = payload.username;
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = typeof payload !== "string" ? null : payload;
    });
  },
});

export const { setAuthorized, setUsername, clearError, setLoading } =
  authSlice.actions;

export default authSlice.reducer;
