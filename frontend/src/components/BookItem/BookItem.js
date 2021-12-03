import { useState } from 'react';
import { TableCell } from '@mui/material';
import dayjs from 'dayjs';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { TableBody, Button } from '@mui/material';
import EditBookModal from '../EditBookModal/EditBookModal';
import { bookApi } from '../../redux/bookApi';
const BookItem = (props) => {
  const { book } = props;
  const [deleteBook] = bookApi.useDeleteBookMutation();
  const [visible, setVisible] = useState(false);
  const onDelete = async (book) => {
    await deleteBook(book);
    console.log(book);
  };
  const [selectedBook, setSelectedBook] = useState({});
  const onEdit = () => {
    setSelectedBook(book);
    setVisible(true);
  };
  return (
    <>
      <TableBody key={book.id}>
        <TableCell align="left">{book.author}</TableCell>
        <TableCell align="left"> {book.title}</TableCell>
        <TableCell align="left"> {book.rating}</TableCell>

        <TableCell align="left">
          {dayjs(book.yearReleased).format('YYYY/MM/DD')}
        </TableCell>
        <TableCell align="left">
          <Button onClick={() => onEdit()} color="primary">
            <EditIcon />
          </Button>
          <EditBookModal
            visible={visible}
            setVisible={setVisible}
            selectedBook={book}
            setSelected={setSelectedBook}
          />
        </TableCell>
        <TableCell>
          <Button color="warning" onClick={() => onDelete(book)}>
            <DeleteForeverIcon />
          </Button>
        </TableCell>
      </TableBody>
    </>
  );
};
export default BookItem;
