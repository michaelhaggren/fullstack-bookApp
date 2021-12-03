import BookList from '../../components/BooksList/BookList';
import AddBookForm from '../../components/BookForm/BookForm';
const Favorite = () => {
  return (
    <div className="xs:container container w-screen">
      <div className="h-screen grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div className="md:w-8/12 md:h-5/6 self-center">
          <h2 className="mb-6 text-lg font-semibold">new book</h2>
          <AddBookForm />
        </div>
        <div className="md:w-full md:h-5/6 font-semibold">
          <h2 className="mb-6 text-lg  md:text-lg">favorite(s)</h2>
          <BookList />
        </div>
      </div>
    </div>
  );
};

export default Favorite;
