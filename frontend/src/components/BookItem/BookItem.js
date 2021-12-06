import { useState } from 'react';
import dayjs from 'dayjs';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
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
      <tbody className="bg-white" key={book.id}>
        <tr className="text-gray-700 text-sm">
          <td className="px-4 py-3 border">{book.author}</td>
          <td className="px-4 py-3 border"> {book.title}</td>
          <td className="px-4 py-3 border"> {book.rating}</td>

          <td className="px-4 py-3 border">
            {dayjs(book.yearReleased).format('YYYY/MM/DD')}
          </td>
          <td className="border">
            <button onClick={() => onEdit()} className="bg-transparent ">
              <span
                className=" 
              text-blue-600 py-2 px-2 ml-1"
              >
                <EditIcon style={{ fontSize: '2em' }} />
              </span>
            </button>
            <EditBookModal
              visible={visible}
              setVisible={setVisible}
              selectedBook={book}
              setSelected={setSelectedBook}
            />
          </td>
          <td className="border">
            <button
              className="bg-transparent text-red-500"
              onClick={() => onDelete(book)}
            >
              <span className="py-2 px-2 ml-1">
                <DeleteForeverIcon style={{ fontSize: '1.8em' }} />
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};
export default BookItem;
