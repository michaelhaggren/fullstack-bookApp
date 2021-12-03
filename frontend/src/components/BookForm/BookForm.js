import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { bookApi } from '../../redux/bookApi';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
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
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label> Author *</Label>
          <Input
            name="author"
            value={book.author}
            type="text"
            onChange={handleChange}
            placeholder="enter the author..."
          />
        </FormGroup>
        <FormGroup>
          <Label> Title *</Label>
          <Input
            name="title"
            value={book.title}
            type="text"
            onChange={handleChange}
            placeholder="enter the title..."
          />
        </FormGroup>
        <FormGroup>
          <Label> Rating *</Label>
          <Input
            name="rating"
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
            onChange={handleChange}
          />
        </FormGroup>

        <Button type="submit" color="success">
          Add
        </Button>
      </Form>
    </div>
  );
}

export default ReservationForm;
