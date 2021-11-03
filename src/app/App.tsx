import React from 'react';
import styles from './App.module.css';
import Title from './components/Title/Title';

function App(): JSX.Element {
  return (
    <main className={styles.container}>
      <Title />
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
        ></input>
        <input
          type="text"
          className={styles.inputField}
          placeholder="last name"
        ></input>
        <input type="submit" className={styles.button} value={'Enter'}></input>
      </form>
    </main>
  );
}

export default App;
