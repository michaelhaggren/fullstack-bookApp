import { useState, useEffect, useCallback } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { bookApi } from '../../redux/bookApi';

import dayjs from 'dayjs';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  // FormFeedback,
} from 'reactstrap';
export default function EditBookModal({
  selectedBook,
  visible,
  setSelected,
  setVisible,
}) {
  const [book, setBook] = useState({
    author: selectedBook.author,
    title: selectedBook.title,
    rating: selectedBook.rating,
    yearReleased: selectedBook.yearReleased,
  });
  const [editBook] = bookApi.useUpdateBookMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editBook(book);
    console.log(book);
    setVisible(false);
  };
  const handleChange = (event) => {
    setBook({ ...selectedBook, [event.target.name]: event.target.value });
  };

  // console.log(selected);

  // const handleSubmit = async () => {
  //   const object = {
  //     id: selected.id,
  //     author: selected.author,
  //     title: selected.title,
  //     rating: 55,
  //     yearReleased: selected.yearReleased,
  //   };
  //   await dispatch(updateBookAsync(object));
  //   setVisible(false);
  // };
  return (
    <>
      <Modal isOpen={visible} toggle={() => setVisible(false)}>
        <ModalHeader>Edit book</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label> Author *</Label>
              <Input
                type="text"
                name="author"
                value={book.author}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label> Title *</Label>
              <Input
                type="text"
                name="title"
                value={book.title}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label> Rating *</Label>
              <Input
                type="number"
                name="rating"
                value={book.rating}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label> Year released *</Label>
              <Input
                type="date"
                name="yearReleased"
                value={dayjs(book.yearReleased).format('YYYY/MM/DD')}
                onChange={handleChange}
              />
            </FormGroup>

            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
}
