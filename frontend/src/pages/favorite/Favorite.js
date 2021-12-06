import BookList from '../../components/BooksList/BookList';
import BookForm from '../../components/BookForm/BookForm';
const Favorite = () => {
  return (
    <div className="h-screen w-full grid  lg:grid-cols-2 grid-cols-1 place-items-center">
      <div className="md:w-8/12 md:h-5/6 self-center">
        <h2 className="mb-6 text-lg font-semibold">new book</h2>
        <BookForm />
      </div>
      <div className="md:w-full md:h-5/6 font-semibold">
        <BookList />
      </div>
    </div>
  );
};

export default Favorite;
