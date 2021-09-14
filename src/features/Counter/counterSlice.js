import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increase(state, action) {
            return state + action.payload;
        },

        decrease(state) {
            return state - 1;
        },
    },
});

const { actions, reducer } = counterSlice;
export const { increase, decrease } = actions; //named export
export default reducer; //default export 