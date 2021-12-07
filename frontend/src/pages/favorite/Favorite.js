import BookList from '../../components/BooksList/BookList';
import { useState } from 'react';
import AddBookModal from '../../components/AddBookModal/AddBookModal';
import AddIcon from '@mui/icons-material/Add';
const Favorite = () => {
  const [visible, setVisible] = useState(false);
  // TODO Responsiv design
  return (
    <div className="h-screen grid grid-cols-1 py-7 px-7 mt-6 place-items-center items-baseline">
      <div className="w-10/12 col-span-2">
        <div className="flex flex-column">
          <button
            className="text-white rounded-lg ml-3 w-44 p-2 bg-green-500"
            onClick={() => setVisible(true)}
          >
            New book
            <AddIcon />
          </button>

          <AddBookModal visible={visible} setVisible={setVisible} />
          {/* <div className="md:w-full md:h-5/6 font-semibold"> */}
          <BookList />
        </div>
      </div>
    </div>
  );
};

export default Favorite;
