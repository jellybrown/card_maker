import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo((props) => {
    return (
        <footer className={styles.footer}>
            Made by yujin, from dream coding
        </footer>
    )
});

export default Footer;