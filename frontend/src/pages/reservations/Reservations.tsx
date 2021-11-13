import React from 'react';
import styles from './Reservations.module.scss';

const MyReservations = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formcontainer}>
        <h2>make reservation</h2>
      </div>
      <div className={styles.formInput}>
        <form>
          <label>Title</label>
          <input name="title" />
          <label>Author</label>
          <input name="title" />
          <label>Start Date | End Date</label>
          <input name="title" />
          <label>Price</label>
          <input name="title" />
          <button className={styles.formButton}>Reserve</button>
        </form>
      </div>
      <div className={styles.reservartionsContainer}>
        <h2>active reservations</h2>
      </div>
      <div>
        <table className={styles.tableContainer}>
          <thead>
            <tr>
              <th scope="col">Title</th>

              <th scope="col">Author</th>

              <th scope="col">Reservationdate</th>

              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            <tr> </tr>

            <tr></tr>

            <tr></tr>

            <tr></tr>

            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReservations;
