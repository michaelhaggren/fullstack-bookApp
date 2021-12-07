import { useState } from 'react';
import dayjs from 'dayjs';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditBookModal from '../EditBookModal/EditBookModal';
import { bookApi } from '../../services/bookApi';
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
      <tbody className="bg-white" key={book.id}>
        <tr className="text-gray-700 text-sm">
          <td className="px-4 py-3 border">{book.author}</td>
          <td className="px-4 py-3 border"> {book.title}</td>
          <td className="px-4 py-3 border"> {book.rating}</td>

          <td className="px-4 py-3 border">
            {dayjs(book.yearReleased).format('YYYY')}
          </td>

          <td className="px-1 text-center py-1 border">
            <button onClick={() => onEdit()} className="bg-transparent ">
              <EditIcon style={{ fontSize: '1.8em' }} />
            </button>
            <EditBookModal
              visible={visible}
              setVisible={setVisible}
              selectedBook={book}
              setSelected={setSelectedBook}
            />
          </td>
          <td className="px-1 text-center  py-1 border">
            <button
              className="bg-transparent text-red-500"
              onClick={() => onDelete(book)}
            >
              <DeleteForeverIcon style={{ fontSize: '1.8em' }} />
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};
export default BookItem;
