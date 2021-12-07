import { useState, useEffect, useCallback } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import s from './EditBookModal.module.scss';
import { bookApi } from '../../services/bookApi';

import dayjs from 'dayjs';
import {
  Form,
  FormGroup,
  Label,
  Input,
  // FormFeedback,
} from 'reactstrap';
export default function EditBookModal({
  selectedBook,
  visible,
  setVisible,
  setSelected,
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
  const handleCloseModal = () => {
    setVisible(false);
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
      <Modal size="lg" isOpen={visible} toggle={() => setVisible(false)}>
        <ModalHeader>Edit book </ModalHeader>

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
            <div className="w-4/5 flex justify-center">
              <button
                type="submit"
                className="bg-green-400 rounded-lg w-2/6 h-12 md:ml-10 ml-0 text-white hover:bg-green-600 "
              >
                Save
              </button>
            </div>
          </Form>
        </ModalBody>
        <ModalFooter>
          <button onClick={() => handleCloseModal()} className={s.closeBtn}>
            Close
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
}
