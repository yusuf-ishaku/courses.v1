import { generalApiSlice } from "./apiSlice";

const HEAD_URL = "/api/v1/courses"

export const createNewCourseMutation = generalApiSlice.injectEndpoints({
    endpoints: (builder) =>({
        createNewCourse: builder.mutation({
            query: (value) =>({
                method: "POST",
                url: `${HEAD_URL}/`,
                body: value.formData,
                headers: {
                    Authorization: `Bearer ${value.token}`
                }
            }),
            invalidatesTags: ['Courses']
        })
    })
});

export const {useCreateNewCourseMutation} = createNewCourseMutation;