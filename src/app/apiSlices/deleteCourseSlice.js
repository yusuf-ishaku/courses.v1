import { generalApiSlice } from "./apiSlice";

const HEAD_URL = "/api/v1/coursedetail";

export const deleteCourseMutation = generalApiSlice.injectEndpoints({
    endpoints: (builder) =>({
        deleteCourses: builder.mutation({
            query: ({value, token}) =>({
                method: 'DELETE',
                url: `${HEAD_URL}/${value}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }),
            invalidatesTags: ["Courses"]
    })
})
});


export const {useDeleteCoursesMutation} = deleteCourseMutation;