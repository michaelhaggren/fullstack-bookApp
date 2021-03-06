import React from 'react';
import Navbar from './components/Navbar/Navbar';
import styles from './styles/App.module.scss';
import 'react-toastify/dist/ReactToastify.css';
const App = () => (
  <div className={styles.root}>
    <Navbar />
  </div>
);

export default App;
