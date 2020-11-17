import React, { memo, useRef, useState } from 'react';
import styles from './addForm.module.css';


const AddForm = memo(({FileInput, addCard}) => {
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const [file, setFile] = useState({ fileName: null, fileURL: null});

    const onFileChange = (file) => {
        
        console.log(file)
        setFile({
            fileName: file.name,
            fileURL: file.url
        })
    };

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
        fileName: file.fileName || '',
        fileURL: file.fileURL || '',
    };
    formRef.current.reset();
    setFile({fileName: null, fileURL: null});
    addCard(newCard);
    
    

}

    return (
        <form ref={formRef} name="form" className={styles.forms}>
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
            <FileInput name={file.fileName} className={styles.upload} onFileChange={onFileChange}/>
            <button className={styles.add} onClick={onsubmit}>Add</button>
        </div>
        
     </form>
    )
});

export default AddForm;