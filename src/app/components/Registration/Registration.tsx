import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Registration.module.css';

type User = {
  id: number;
  firstName: string;
  lastName: string;
};

type RegistrationProps = {
  onSelectUserName: (userName: string) => void;
};

function Registration({ onSelectUserName }: RegistrationProps): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [users, setUsers] = useState<User[]>([]);

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
    <option key={user.id}>
      {user.firstName} {user.lastName}
    </option>
  ));

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      select user
      <select
        className={styles.selection}
        onClick={handleSelectClick}
        onChange={(event) => onSelectUserName(event.target.value)}
      >
        <option>select user</option>
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
