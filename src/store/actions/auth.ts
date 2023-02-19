import { createAsyncThunk } from "@reduxjs/toolkit";

import { USERNAME } from "@^/constants/localStorageKeys";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "@^/helpers/localStorage";
import { AppThunk } from "..";
import { setAuthorized, setLoading, setUsername } from "../reducers/auth";
import { ICredentials } from "../types";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials: ICredentials, { rejectWithValue }) => {
    const { username, password } = credentials;

    if (username === "admin" && password === "12345") {
      saveToLocalStorage(USERNAME, username);
      return { username };
    }

    return rejectWithValue("Username or password is incorrect");
  }
);

export const prepareUser = (): AppThunk => {
  return (dispatch) => {
    const username = getFromLocalStorage<string | null>(USERNAME);

    dispatch(setUsername(username));
    dispatch(setAuthorized(!!username));
    dispatch(setLoading(false));
  };
};
