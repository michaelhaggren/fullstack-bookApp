import React, { Component } from 'react';
import styles from './Navbar.module.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Reservations from '../../pages/reservations/Reservations';

export default class Navbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className={styles.navbar}>
            <div className={styles.homediv}>
              <Link to="/">home</Link>
            </div>
            <ul className={styles.navullist}>
              <Link to="/reservations">reservartion(s)</Link>
            </ul>
          </nav>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservations" element={<Reservations />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
