import React from 'react';
import AddForm from '../addForm/addForm';
import MakerItem from '../makerItem/makerItem';
import styles from './cardMaker.module.css';

const CardMaker = ({FileInput, cards, addCard, updateCard, deleteCard, upload}) => {
    return (
        <section className={styles.maker}>
        <h1 className={styles.title}>Card Maker</h1>
        <div className={styles.makerWrapper}>
            { Object.keys(cards).map(key => 
                <MakerItem 
                key={key}
                FileInput={FileInput}
                card={cards[key]}
                updateCard={updateCard}
                deleteCard={deleteCard}
                upload={upload}
                /> )
            }
            <AddForm FileInput={FileInput} addCard={addCard}/>
        </div>
        </section>
    )
};

export default CardMaker;