import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';

const baseURL = 'https://localhost:5001/api/';
// TODO se över url requestsen
export const bookApi = createApi({
  reducerPath: 'bookApi',

  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  tagTypes: ['Books'],
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => `books`,
      providesTags: [{ type: 'Books', id: 'LIST' }],
    }),
    updateBook: builder.mutation({
      query: (book) => {
        return {
          url: `books/${book.id}`,
          method: 'PUT',
          body: book,
        };
      },
      invalidatesTags: [{ type: 'Books', id: 'LIST' }],
    }),
    deleteBook: builder.mutation({
      query: (book) => {
        return {
          url: `books/${book.id}`,
          method: 'DELETE',
          body: book,
        };
      },
      invalidatesTags: [{ type: 'Books', id: 'LIST' }],
    }),
    addBook: builder.mutation({
      query: (body) => {
        toast.success('book added');
        return {
          url: `books`,
          method: 'POST',
          body: body,
        };
      },
      invalidatesTags: [{ type: 'Books', id: 'LIST' }],
    }),
  }),
});
