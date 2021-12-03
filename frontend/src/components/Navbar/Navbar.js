import React, { Component } from 'react';
import styles from './Navbar.module.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Favorite from '../../pages/favorite/Favorite';

const Navbar = () => {
  return (
    <Router>
      <div>
        <nav className={styles.navbar}>
          <div className={styles.homediv}>
            <Link to="/">home</Link>
          </div>
          <div className={styles.navullist}>
            <Link to="/favorites">favorite(s)</Link>
          </div>
        </nav>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </div>
    </Router>
  );
};
export default Navbar;
