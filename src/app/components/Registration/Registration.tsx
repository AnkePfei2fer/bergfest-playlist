import React, { useState } from 'react';
import styles from './Registration.module.css';

function Registration(): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  console.log(firstName);
  console.log(lastName);
  return (
    <form className={styles.form}>
      <span className={styles.options}>select participant</span>
      <select className={styles.selection}>
        <option>Leon Machens</option>
        <option>Lara Janzen</option>
      </select>
      <span className={styles.options}>or create new</span>
      <input
        type="text"
        className={styles.inputField}
        placeholder="first name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      ></input>
      <input
        type="text"
        className={styles.inputField}
        placeholder="last name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      ></input>
      <input type="submit" className={styles.button} value="Enter"></input>
    </form>
  );
}

export default Registration;
