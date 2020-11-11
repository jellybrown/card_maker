import React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Login from './components/login/login';
import styles from './app.module.css';

const App = ({ authService }) => {
  return (
    <div className={styles.rootPage}>
      <Header/>
      <div className={styles.loginPage}>
        <Login authService={authService}/>
      </div>
      <div className={styles.footPage}>
        <Footer/>
      </div>
    </div>
  )
};

export default App;