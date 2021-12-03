import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { Provider } from 'react-redux';
import { myStore } from './redux/store';
import { bookApi } from './redux/bookApi';
import 'tailwindcss/tailwind.css';
ReactDOM.render(
  <React.StrictMode>
    <ApiProvider api={bookApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
