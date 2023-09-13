import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery(
    {
        baseUrl: "https://coursespyapi.tusksite.com:8004/"
    }
)
export const generalApiSlice = createApi({
    baseQuery,
    tagTypes: ["Courses"],
    endpoints: (builder) => ({})
})