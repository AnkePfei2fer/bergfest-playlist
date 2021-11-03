import React from 'react';
import styles from './App.module.css';
import Title from './components/Title/Title';
import Registration from './components/Registration/Registration';

function App(): JSX.Element {
  return (
    <main className={styles.container}>
      <Title text="Bergfest" />
      <Registration />
    </main>
  );
}

export default App;
