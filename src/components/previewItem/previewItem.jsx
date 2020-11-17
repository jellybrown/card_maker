import React, { memo } from 'react';
import styles from './previewItem.module.css';

const PreviewItem = memo(({card}) => {
    const { theme, name, company, title, email, message, fileURL } = card;
    

    const DEFAULT_IMAGE = '/images/default_logo.png';

    const getTheme = (theme) => {
        switch (theme) {
        case 'dark':
            return styles.dark;
        case 'light':
            return styles.light;
        case 'colorful':
            return styles.colorful;
        default:
            throw new Error(`erreor, ${theme} not found.`);
     }
    }
    const url = fileURL || DEFAULT_IMAGE;

    return (
        <div className={`${styles.cardItem} ${getTheme(theme)}`}>
            <div className={styles.mainImg}>
                <img src={url} alt="profile" className={styles.image}/>
            </div>
            <div className={styles.text}>
                <p className={styles.name}>{name}</p>
                <p className={styles.company}>{company}</p>
                <hr className={styles.hr}/>
                <p className={styles.title}>{title}</p>
                <p className={styles.email}>{email}</p>
                <p className={styles.message}>{message}</p>
            </div>
        </div>
    )
});

export default PreviewItem;