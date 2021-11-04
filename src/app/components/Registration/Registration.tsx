import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Registration.module.css';

function Registration(): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(firstName, lastName);
  }
  function handleFirstNameChange(event: ChangeEvent<HTMLInputElement>) {
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event: ChangeEvent<HTMLInputElement>) {
    setLastName(event.target.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
        onChange={handleFirstNameChange}
      ></input>
      <input
        type="text"
        className={styles.inputField}
        placeholder="last name"
        value={lastName}
        onChange={handleLastNameChange}
      ></input>
      <input type="submit" className={styles.button} value="Enter"></input>
    </form>
  );
}

export default Registration;
