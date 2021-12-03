import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:5001/api/' }),
  tagTypes: ['Books'],
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => `book`,
      providesTags: [{ type: 'Books', id: 'LIST' }],
    }),
    updateBook: builder.mutation({
      query: (book) => {
        return {
          url: `book/${book.id}`,
          method: 'PUT',
          body: book,
        };
      },
      invalidatesTags: [{ type: 'Books', id: 'LIST' }],
    }),
    deleteBook: builder.mutation({
      query: (book) => {
        return {
          url: `book/${book.id}`,
          method: 'DELETE',
          body: book,
        };
      },
      invalidatesTags: [{ type: 'Books', id: 'LIST' }],
    }),
    addBook: builder.mutation({
      query: (body) => {
        return {
          url: `book`,
          method: 'POST',
          body: body,
        };
      },
      invalidatesTags: [{ type: 'Books', id: 'LIST' }],
    }),
  }),
});
