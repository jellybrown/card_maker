import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CardMaker from '../cardMaker/cardMaker';
import CardPreview from '../cardPreview/cardPreview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main.module.css';
const Main = ({authService}) => {
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
                <CardMaker/>  
                <CardPreview/>                      
            </div>
            <Footer/>
        </section>
    )
};

export default Main;