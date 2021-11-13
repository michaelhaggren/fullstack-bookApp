import React from 'react';
import styles from './Home.module.scss';
import imgBook from '../../resources/herotitlebook.png';
import illuHome from '../../resources/IllustrationHomePage.png';
import dotsIllu from '../../resources/dotsIllu.png';

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.herotitle}>
        reservation made simple{' '}
        <img src={imgBook} alt="book-pic" style={{ height: 40, width: 40 }} />
      </h1>
      <div className={styles.illustrhome}>
        <img src={illuHome} alt="furn-book" />
      </div>
      <div className={styles.illuDotsHome}>
        <img src={dotsIllu} alt="furn-book" />
      </div>
    </div>
  );
}

export default Home;
