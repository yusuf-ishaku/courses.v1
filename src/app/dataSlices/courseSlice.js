import { createSlice } from "@reduxjs/toolkit";

const initialState = [

]
export const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        createCourseInstance(state, action){
            state.value = action.payload
        }
    }
});

export const {createCourseInstance} = courseSlice.actions;