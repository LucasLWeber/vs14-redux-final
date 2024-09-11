import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../utils/interfaces";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_PRODUCT_API_URL,
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => ({
        url: "/products/category/electronics",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;