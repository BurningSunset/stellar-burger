import React from 'react';
import logo from '../../logo.svg';
import styles from './app.module.css';
console.log(styles)

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <p>
          Скоро здесь будет первая страница нашего проекта!
        </p>
      </header>
    </div>
  );
}

export default App;
