import React from 'react';
import styles from './header.module.css';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src="/public/images/logo.png" alt="logo" className={styles.logo}/>
            <span className={styles.text}>Business Card Maker</span>
        </header>
    )
};

export default Header;