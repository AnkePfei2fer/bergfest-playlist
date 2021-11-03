import React from 'react';
import styles from './App.module.css';

function App(): JSX.Element {
  return (
    <body className={styles.container}>
      <h1 className={styles.heading}>Bergfest</h1>
      <form className={styles.form}>
        <input
          type="text"
          className={styles.inputField}
          placeholder="first name"
        ></input>
        <input
          type="text"
          className={styles.inputField}
          placeholder="last name"
        ></input>
        <input type="submit" className={styles.button}></input>
      </form>
    </body>
  );
}

export default App;
