import BookItem from '../BookItem/BookItem';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooksAsync } from '../../redux/bookSlice';
import { bookApi } from '../../redux/bookApi';
import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  Paper,
} from '@mui/material';

const BookList = () => {
  const dispatch = useDispatch();
  const { data: books } = bookApi.useGetAllQuery();
  console.log(books);
  // useEffect(() => {
  //   dispatch(getBooksAsync());
  // }, [dispatch]);

  return (
    <>
      <TableContainer
        component={Paper}
        style={{ maxWidth: '800px', maxHeight: '600px' }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Author</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Year released</TableCell>
            </TableRow>
          </TableHead>

          {books?.map((book, index) => (
            <BookItem key={index} book={book} />
          ))}
        </Table>
      </TableContainer>
    </>
  );
};
export default BookList;
