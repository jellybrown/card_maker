import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import CardMaker from '../cardMaker/cardMaker';
import CardPreview from '../cardPreview/cardPreview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main.module.css';
const Main = ({ FileInput, authService , cardRepository }) => {


    const historyState = useHistory().state;
    const [ cards , setCards ] = useState({});
    const [ userId, setUserId ] = useState(historyState && historyState.id);

    const history = useHistory();
    const onLogout =useCallback(() => {
        authService.logout();
        
    },[authService]);

    useEffect(() => {
        if(!userId) {
            return;
        }
        const stopSync = cardRepository.syncCards(userId, cards => {
            setCards(cards);
        });
        return () => stopSync();
        }, [userId, cardRepository]);

    useEffect(() => {
        authService.onAuthChange(user => {
            if(user) {
               setUserId(user.uid)
            } else {
                history.push("/");
            }
        })
    }, );

    const updateCard = (newCard) => {
        setCards(cards => {
            const updated = {...cards};
            updated[newCard.id] = newCard;
            return updated;
        });
        cardRepository.saveCard(userId, newCard);
    }
        
    const deleteCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
        cardRepository.removeCard(userId, card);
    }
    

    

  
    return (
        <section className={styles.mainPage}>
            <Header onLogout={onLogout}/>
            <div className={styles.main}>
                <CardMaker 
                FileInput={FileInput}
                cards={cards} 
                addCard={updateCard} 
                updateCard={updateCard} 
                deleteCard={deleteCard}
                />  
                <CardPreview cards={cards} />                      
            </div>
            <Footer/>
        </section>
    )
};

export default Main;