import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useApi from "api/useApi";
import StorageKeys from "constants/storage-keys";


export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
      const data = await useApi.register(payload);

      //save data to local storage
      localStorage.setItem(StorageKeys.TOKEN, data.jwt);
      localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

      return data.user;
    }
  )

export const login = createAsyncThunk(
    'user/login',
    async (payload) => {
      const data = await useApi.login(payload);

      //save data to local storage
      localStorage.setItem(StorageKeys.TOKEN, data.jwt);
      localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

      return data.user;
    }
  )

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        settings: {},
    },
    reducers: {
      logout(state) {
        //clear local storage
        localStorage.removeItem(StorageKeys.USER);
        localStorage.removeItem(StorageKeys.TOKEN);

        state.current = {};
      }
    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payload;
        },

        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
        }
    },
});

const { actions, reducer } = userSlice;
export const {logout} = actions;
export default reducer; //default export 