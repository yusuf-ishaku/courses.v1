import {createSlice} from "@reduxjs/toolkit";

const initialState = "";

export const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        tokenSet: (state, action) =>{
            // console.log(action.payload)
            return action.payload
        }
    }
});

export const { tokenSet }= tokenSlice.actions;