import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { bookApi } from '../../redux/bookApi';
import { Form, FormGroup, Label, Input } from 'reactstrap';

function ReservationForm() {
  const [book, setBook] = useState({
    author: '',
    title: '',
    rating: 0,
    yearReleased: new Date(),
  });
  const [addBook] = bookApi.useAddBookMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBook(book);
  };
  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="App">
        <div className="w-3/4">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label> Author *</Label>
              <Input
                name="author"
                type="text"
                required
                onChange={handleChange}
                placeholder="enter the author..."
              />
            </FormGroup>
            <FormGroup>
              <Label> Title *</Label>
              <Input
                name="title"
                value={book.title}
                required
                type="text"
                onChange={handleChange}
                placeholder="enter the title..."
              />
            </FormGroup>
            <FormGroup>
              <Label> Rating *</Label>
              <Input
                name="rating"
                required
                value={book.rating}
                type="number"
                onChange={handleChange}
                placeholder="enter the rating..."
              />
            </FormGroup>

            <FormGroup>
              <Label> Year released *</Label>
              <Input
                name="yearReleased"
                value={book.yearReleased}
                type="date"
                required
                onChange={handleChange}
              />
            </FormGroup>

            <div className="w-4/5 flex justify-center">
              <button
                type="submit"
                className="bg-green-400 rounded-lg w-3/6 h-12 md:ml-10 ml-0 text-white hover:bg-green-600 "
              >
                Add
              </button>
              <loading />
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default ReservationForm;
