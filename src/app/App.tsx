import React, { useState } from 'react';
import styles from './App.module.css';
import Title from './components/Title/Title';
import Registration from './components/Registration/Registration';

function App(): JSX.Element {
  const [selectedUserName, setSelectedUserName] = useState<string | null>(null);

  // console.log({ selectedUserName });

  let content;

  if (selectedUserName) {
    content = <p>Please add some songs</p>;
  } else {
    content = (
      <Registration
        onSelectUserName={(userName) => setSelectedUserName(userName)}
      />
    );
  }

  return (
    <main className={styles.container}>
      <Title text={selectedUserName ? `Hi ${selectedUserName}` : 'Bergfest'} />
      {content}
    </main>
  );
}

export default App;
