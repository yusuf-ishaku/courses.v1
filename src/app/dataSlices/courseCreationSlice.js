import { createSlice } from "@reduxjs/toolkit";




let initialState = {
    title: "",
    vendor: "",
    description: "",
    duration: "",
    has_discount: false,
    onetime_payment: false,
    recurring_payment: false,
    price: "",
    activation_status: false,
    category: [],
    course_image: null,
    registered_users: [],
    discount_percentage: 100,
    certificate: null,
}


export const courseCreationSlice = createSlice({
    name: "courseCreation",
    initialState,
    reducers: {
        updateCourse: (state, action) =>{
            // console.log(action.payload);
            // console.log(state)
            return action.payload
        }
    }
});

export const {updateCourse} = courseCreationSlice.actions;