import { generalApiSlice } from "./apiSlice";

const BASE_URL = "/api/v1/courses"

export const getCoursesSlice = generalApiSlice.injectEndpoints({
    endpoints: (builder) =>(
        {
            getCourses: builder.query({
                query: (token)=>({
                    method: "GET",
                    url: `${BASE_URL}/`,
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }),
                providesTags: ["Courses"]
            })
        }
    )
});

export const {useGetCoursesQuery} = getCoursesSlice;