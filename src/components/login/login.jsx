
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({authService}) => {
    
    const history = useHistory();
    const goToMain = (userId) => {
        history.push({
            pathname: "/main",
            state: {id: userId},
        })
    }

   const onLogin = event => {
    authService.login(event.currentTarget.textContent)
    .then(data => goToMain(data.user.uid))
 
   }

   useEffect(() => {
       authService.onAuthChange(user => {
           user && goToMain(user.uid)
       })
   })



    return (
        <section className={styles.loginPop}>
            <Header/>
            <div className={styles.loginBox}>
                <h1 className={styles.h1}>Login</h1>
                <ul className={styles.loginContents}>
                 <li className={styles.li}>
                     <button className={styles.textBtn} onClick={onLogin}>Google</button>
                  </li>
                 <li  className={styles.li}>
                     <button className={styles.textBtn} onClick={onLogin}>Github</button>      
                 </li>
                </ul>
            </div>
            <Footer/>
            
        </section>
        
    )
};

export default Login;