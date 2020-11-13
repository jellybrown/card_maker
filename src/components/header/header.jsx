import React from 'react';
import styles from './header.module.css';

const Header = ({onLogout}) => {
    return (
        <header className={styles.header}>
            {onLogout && 
            <button className={styles.logout} onClick={onLogout}>Logout</button>}
            <img src="/images/logo.png" alt="logo" className={styles.logo}/>
            <span className={styles.text}>Business Card Maker</span>
        </header>
    )
};

export default Header;