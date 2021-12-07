import { useState } from 'react';
import { bookApi } from '../../services/bookApi';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function ReservationForm() {
  const [book, setBook] = useState({
    author: '',
    title: '',
    rating: 0,
    yearReleased: new Date(),
  });
  const [addBook] = bookApi.useAddBookMutation();

  //TODO Ta bort om du ska använda formik
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBook(book);
  };
  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };
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

  return (
    <>
      <div className="w-3/4">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            await onSubmit(values);
            resetForm();
          }}
        >
          <Form>
            <label> Author *</label>
            <div className="control">
              <Field
                name="author"
                type="text"
                id="author"
                placeholder="Author.."
              />
              <ErrorMessage name="author" render={renderError} />
            </div>
            <div>
              <label> Title *</label>
              <Field
                name="title"
                id="title"
                type="text"
                placeholder="enter the title..."
              />
            </div>
            <div>
              <label> Rating *</label>
              <Field
                name="rating"
                id="rating"
                type="number"
                placeholder="enter the rating..."
              />
            </div>

            <div>
              <label> Year released *</label>
              <Field name="yearReleased" type="date" id="rating" />
            </div>

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
        </Formik>
      </div>
    </>
  );
}

export default ReservationForm;
