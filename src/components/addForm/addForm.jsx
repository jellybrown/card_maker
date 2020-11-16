import React, { useRef } from 'react';
import styles from './addForm.module.css';


const AddForm = ({FileInput, addCard}) => {
   
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    

    const onsubmit = (e) => {
        e.preventDefault();
    const newCard = {
        id: Date.now(),
        theme: themeRef.current.value,
        name: nameRef.current.value || '',
        company: companyRef.current.value || '',
        title: titRef.current.value || '',
        email: emailRef.current.value || '',
        message: messageRef.current.value || '',
        image: '../../images/default_logo.png'
    };
    addCard(newCard);

}

    return (
        <form className={styles.forms}>
        <input ref={nameRef} name="name" className={styles.input}/>
        <input ref={companyRef} name="company" className={styles.input}/>
        <select ref={themeRef} name="theme" className={styles.select}>
            <option value="light">light</option>
            <option value="dark">dark</option>
            <option value="colorful">colorful</option>
        </select>
                
        <input ref={titRef} name="title" className={styles.input}/>
        <input ref={emailRef} name="email"  className={styles.input}/>

        <textarea ref={messageRef} name="message"  className={styles.textarea}/>
        <div className={styles.btns}>
        <FileInput/>
            <button className={styles.here} onClick={onsubmit}>Add</button>
            <button className={styles.del}>Delete</button>
        </div>
        
     </form>
    )
};

export default AddForm;