import BookItem from '../BookItem/BookItem';
import { bookApi } from '../../services/bookApi';

const BookList = () => {
  const { data: books, isError, isLoading } = bookApi.useGetAllQuery();
  console.log(books);
  return (
    <>
      <section className="md:container container p-2 ">
        <div className="w-5/6 mb-8 overflow-hidden rounded-lg shadow-md">
          {/* <h2 className="text-lg ml-2 mb-2 md:text-left  md:text-lg">
            favorite(s)
          </h2> */}
          <div className="w-full overflow-x-auto">
            <table className="w-full bg-gray-800 text-white">
              <thead>
                <tr>
                  <th className="px-4 font-normal py-3">Author</th>
                  <th className="px-4 font-normal py-3">Title</th>
                  <th className="px-4 font-normal py-3">Rating</th>
                  <th className="px-4 font-normal py-3">Year released</th>
                </tr>
              </thead>
              {books?.map((book, index) => (
                <BookItem key={index} book={book} />
              ))}
            </table>
          </div>
        </div>
      </section>
      {isError ? (
        <section className="h-2/4 grid  items-baseline place-items-center ">
          <div>
            <h2>database is offline</h2>
          </div>
        </section>
      ) : isLoading ? (
        <section className="grid place-items-center ">
          <div>
            <h2>fetching items....</h2>
          </div>
        </section>
      ) : null}
    </>
  );
};
export default BookList;
