import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Registration.module.css';

function Registration(): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [users, setUsers] = useState([]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    fetch('https://json-server.machens.dev/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
      }),
    });
  }

  function handleFirstNameChange(event: ChangeEvent<HTMLInputElement>) {
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event: ChangeEvent<HTMLInputElement>) {
    setLastName(event.target.value);
  }

  async function handleSelectClick() {
    const response = await fetch('https://json-server.machens.dev/users');
    const newUsers = await response.json();
    setUsers(newUsers);
  }

  const userOptions = users.map((user) => (
    <option>
      {user.firstName} {user.lastName}
    </option>
  ));

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      select user
      <select className={styles.selection} onClick={handleSelectClick}>
        <option disabled>select user</option>
        {userOptions}
      </select>
      or create new
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
