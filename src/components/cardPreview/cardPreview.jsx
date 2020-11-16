import React from 'react';
import PreviewItem from '../previewItem/previewItem';
import styles from './cardPreview.module.css';

const CardPreview = ({cards}) => {
    return (
        <section className={styles.preview}>
        <h1 className={styles.title}>Card Preview</h1>
        <div className={styles.previewWrapper}>
          {Object.keys(cards).map(key => 
             <PreviewItem 
             key={key} 
             card={cards[key]} />)
    }   
        </div>
        </section>
    )
};

export default CardPreview;