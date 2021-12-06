import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { STATUS } from './fetchStatus';
import {
  AddNewBook,
  GetAllBooks,
  DeleteBook,
  GetBookById,
  UpdateBook,
} from '../api/bookApi';

//! ta bort detta om RTKquery fungerar som tänkt, förstår dokumentationen enklare
export const getBooksAsync = createAsyncThunk('books/getAllBooks', async () => {
  const response = await GetAllBooks();
  return response.data;
});

export const addNewBookAsync = createAsyncThunk(
  'books/addBook',
  async (book) => {
    const response = await AddNewBook(book);
    return response.data;
  }
);

export const deleteBookAsync = createAsyncThunk(
  'books/deleteBook',
  async (id) => {
    const response = await DeleteBook(id);
    return response.data;
  }
);
export const updateBookAsync = createAsyncThunk(
  'books/updateBook',
  async (book, { dispatch }) => {
    console.log({ book });
    const response = await axios.put(
      `https://localhost:5001/api/book/${book.id}`,
      book
    );
    return response.data;
  }
);
export const getBookById = createAsyncThunk('books/getBook', async (id) => {
  try {
    console.log(id);
    return await getBookById(id);
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  status: STATUS.idle,
  books: [],
};
//! Testa RTK QUERY från redux docsen
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // setUpdatingBookdId: (state, action) => {
    //   state.updatingBookId = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooksAsync.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(getBooksAsync.fulfilled, (state, action) => {
        state.status = STATUS.success;
        state.books = action.payload;
      })
      .addCase(addNewBookAsync.pending, (state) => {
        state.status = STATUS.posting;
      })
      .addCase(addNewBookAsync.fulfilled, (state, action) => {
        state.status = STATUS.success;
        state.books = [...state.books, action.payload];
      })
      .addCase(deleteBookAsync.pending, (state) => {
        state.status = STATUS.posting;
      })
      .addCase(deleteBookAsync.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.books = state.books.filter(({ id }) => id !== payload);
      })
      .addCase(getBookById.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.books = state.books.filter(({ id }) => id !== payload);
      })
      .addCase(updateBookAsync.fulfilled, (state, action) => {
        state.books = state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book
        );
      });
  },
});

// export const getBook = (state) => state.books.books;
// export const getBookStatus = (state) => state.books.status;
// export default bookSlice.reducer;
