import imgBook from '../../resources/herotitlebook.png';
import illuHome from '../../resources/IllustrationHomePage.png';

const Home = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-end items-center mr-4">
          <h1 className="font-bold text-3xl ">the digital bookshelf </h1>
          <img className="w-6 h-6" src={imgBook} alt="book-pic" />
        </div>

        <div className="flex justify-start items-start">
          <div className="mt-28">
            <img src={illuHome} className="max-w-xs max-h-80" alt="furn-book" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
