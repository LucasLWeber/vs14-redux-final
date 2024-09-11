import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: "eletronics";
	image: string;
	rating: {
		rate: number;
		count: number
	}
}

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