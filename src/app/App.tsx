import React, { useState } from 'react';
import styles from './App.module.css';
import Title from './components/Title/Title';
import Registration from './components/Registration/Registration';
import Playlist from './components/Playlist/Playlist';

function App(): JSX.Element {
  const [selectedUserName, setSelectedUserName] = useState<string | null>(null);

  let content;

  if (selectedUserName) {
    content = <Playlist />;
  } else {
    content = <Registration onSelectUserName={setSelectedUserName} />;
  }

  return (
    <main className={styles.container}>
      <Title
        text={selectedUserName ? `Welcome ${selectedUserName}` : 'Bergfest'}
      />
      {content}
    </main>
  );
}

export default App;
