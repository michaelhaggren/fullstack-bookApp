import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { bookApi } from './services/bookApi';
import 'tailwindcss/tailwind.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider api={bookApi}>
      <App />
      <ToastContainer />
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
