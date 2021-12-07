import { useState, useEffect, useCallback } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import { bookApi } from '../../services/bookApi';
import s from './AddBookModal.module.scss';

const AddBookModal = ({ visible, setVisible }) => {
  const [addBook] = bookApi.useAddBookMutation();
  const renderError = (message) => <p className="text-red-600">{message}</p>;
  const validationSchema = Yup.object().shape({
    author: Yup.string().required('a ghost wrote this book?'),
    title: Yup.string().required('does the book not have a title?'),
    rating: Yup.number().min(0).max(5).required('it wasnt that bad was it?'),
    yearReleased: Yup.date()
      .default(() => new Date())
      .required('a book has no name'),
  });

  const onSubmit = (values) => {
    addBook(values);
  };
  const initialValues = {
    author: '',
    title: '',
    rating: '',
    yearReleased: new Date(),
  };
  const handleCloseModal = () => {
    setVisible(false);
  };

  return (
    <Modal size="lg" isOpen={visible} toggle={() => setVisible(false)}>
      <ModalHeader>
        <h4 className="font-semibold text-xl">New book</h4>
      </ModalHeader>
      <ModalBody>
        {' '}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            await onSubmit(values);
            resetForm();
            handleCloseModal();
          }}
        >
          <Form>
            <div className="h-3/4">
              <label className="text-lg mt-2 mb-1"> Author</label>
              <div className="h-11">
                <Field
                  className="border-1 rounded-sm h-8 w-10/12 border-gray-400  px-2"
                  name="author"
                  type="text"
                  id="author"
                  placeholder="Author.."
                />
                <ErrorMessage name="author" render={renderError} />
              </div>
              <label className="text-lg mt-2 mb-1"> Title</label>
              <div className="h-11">
                <Field
                  className="border-1 rounded-sm h-8 w-10/12 border-gray-400  px-2"
                  name="title"
                  id="title"
                  type="text"
                  placeholder="enter the title..."
                />
                <ErrorMessage name="title" render={renderError} />
              </div>
              <label className="text-lg mt-2 mb-1"> Rating *</label>
              <div className="h-11">
                <Field
                  className="border-1 rounded-sm h-8 w-10/12 border-gray-400  px-2"
                  name="rating"
                  id="rating"
                  type="number"
                  placeholder="enter the rating..."
                />
                <ErrorMessage name="rating" render={renderError} />
              </div>

              <label className="text-lg mt-2 mb-1"> Year released *</label>
              <div>
                <Field
                  className="border-1 rounded-sm h-8 w-10/12 border-gray-400  px-2"
                  name="yearReleased"
                  type="date"
                  id="rating"
                />
                <ErrorMessage name="yearReleased" render={renderError} />
              </div>
              <br />
              <br />
              <div className="w-4/5 flex justify-center">
                <button
                  type="submit"
                  className="bg-green-400 rounded-lg w-2/6 h-12 md:ml-10 ml-0 text-white hover:bg-green-600 "
                >
                  Add
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </ModalBody>
      <ModalFooter>
        <button onClick={() => handleCloseModal()} className={s.closeBtn}>
          Close
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default AddBookModal;
