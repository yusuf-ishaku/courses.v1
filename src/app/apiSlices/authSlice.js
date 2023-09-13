import { generalApiSlice } from "./apiSlice";

const USE_URL = "/api/v1/token/"

export const authSlice = generalApiSlice.injectEndpoints({
    endpoints: (builder) =>({
        getAuthToken: builder.mutation({
          query:(data) => ({
            method: "POST",
            url: USE_URL,
            body: data
        })
        })
    })
});

export const {useGetAuthTokenMutation} = authSlice;