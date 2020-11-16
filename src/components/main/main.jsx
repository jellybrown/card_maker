import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import CardMaker from '../cardMaker/cardMaker';
import CardPreview from '../cardPreview/cardPreview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main.module.css';
const Main = ({ FileInput, authService}) => {



    const [ cards , setCards ] = useState({
        '1': {
            id: 1,
            theme : 'light',
            name: 'yujin',
            company: 'caa',
            title:'software engineer',
            email: 'dbwlszn@naver.com',
            message: 'hahahah',
            image: '../../images/default_logo.png'
        },
        '2': {
            id: 2,
            theme : 'dark',
            name: 'ewrrw',
            company: 'caa',
            title:'software engineer',
            email: 'dbwlszn@naver.com',
            message: 'hahahah',
            image: '../../images/default_logo.png'
        },
        '3': {
            id: 3,
            theme : 'dark',
            name: 'assdfs',
            company: 'caa',
            title:'software engineer',
            email: 'dbwlszn@naver.com',
            message: 'hahahah',
            image: '../../images/default_logo.png'
        },
        '4':  {
            id: 4,
            theme : 'colorful',
            name: 'bbbb',
            company: 'caa',
            title:'software engineer',
            email: 'dbwlszn@naver.com',
            message: 'hahahah',
            image: '../../images/default_logo.png'
        }
    });
        
    const addCard = (newCard) => {
    setCards([...cards, newCard ]);
    }
    const updateCard = (newCard) => {
        setCards(cards => {
            const updated = {...cards};
            updated[newCard.id] = newCard;
            return updated;
        });
    }
        
    const deleteCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
    }
    

    const history = useHistory();
    const onLogout = () => {
        authService.logout();
        
    }

    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user) {
                history.push("/");
            }
        })
    })
    return (
        <section className={styles.mainPage}>
            <Header onLogout={onLogout}/>
            <div className={styles.main}>
                <CardMaker 
                FileInput={FileInput}
                cards={cards} 
                addCard={addCard} 
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