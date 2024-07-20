import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CarApi = createApi({
  reducerPath: "Cars",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://freetestapi.com",
  }),
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => "/api/v1/cars",
    }),
  }),
  
});
export const { useGetCarsQuery }:any = CarApi;

