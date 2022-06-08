import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BaseQuery = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  endpoints: (builder) => ({
    contact: builder.mutation({
      query: (arg) => ({
        url: "contact/new",
        method: "POST",
        body: arg,
      }),
    }),
  }),
});
export const { useContactMutation } = BaseQuery;
