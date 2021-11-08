import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Title from './components/Title/Title';
import Registration from './components/Registration/Registration';
import Playlist from './components/Playlist/Playlist';

function App(): JSX.Element {
  const [selectedUserName, setSelectedUserName] = useState<string | null>(
    sessionStorage.getItem('CurrentUser')
  );

  useEffect(() => {
    if (selectedUserName) {
      sessionStorage.setItem('CurrentUser', selectedUserName);
    } else {
      sessionStorage.removeItem('CurrentUser');
    }
  });

  useEffect(() => {
    document.title = selectedUserName ? `Hi ${selectedUserName}` : 'Bergfest';
  });

  let content;

  if (selectedUserName) {
    content = (
      <>
        <Playlist />
        <button
          className={styles.logoutButton}
          onClick={() => setSelectedUserName(null)}
        >
          Logout
        </button>
      </>
    );
  } else {
    content = <Registration onSelectUserName={setSelectedUserName} />;
  }

  // {selectedUserName !== null && (
  //   <button
  //     className={styles.logout__submit}
  //     onClick={() => setSelectedUserName(null)}
  //   >
  //     Logout
  //   </button>
  // )}

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
