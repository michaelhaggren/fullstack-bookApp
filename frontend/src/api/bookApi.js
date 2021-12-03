import axios from 'axios';
/// Used b4 refactoring to rtkquery
const url = 'https://localhost:5001/api/book';
export const GetAllBooks = () => axios.get(url);
export const GetBookById = (id) => axios.get(`${url}/${id}`);

export const AddNewBook = (data) => axios.post(`${url}`, data);

export const DeleteBook = (id) => axios.delete(`${url}/${id}`);
export const UpdateBook = (book) =>
  axios.put(`${url}/${book.id}`, book).then((res) => {
    return res.data;
  });
