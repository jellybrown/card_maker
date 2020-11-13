import React from 'react';
import Login from './components/login/login';
import styles from './app.module.css';
import Main from './components/main/main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = ({ authService }) => {
 


  


  return (
    
      <>
    <BrowserRouter>
    <Switch>
      <div className={styles.rootPage}>
        <Route exact path="/">
          <Login  authService={authService} />
          </Route>

         <Route path="/main">
          <Main authService={authService}/> 
        </Route>
      </div>
      </Switch>
      </BrowserRouter>
      </>  
   
  )
};

export default App;