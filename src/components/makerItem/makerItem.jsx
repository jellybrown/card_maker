import { memo, useRef } from 'react';
import styles from './makerItem.module.css';

const MakerItem = memo(({FileInput, card, updateCard, deleteCard }) => {
    const { name, company, title, email, message, fileName } = card;
    
        const nameRef = useRef();
        const companyRef = useRef();
        const themeRef = useRef();
        const titleRef = useRef();
        const emailRef = useRef();
        const messageRef = useRef();


        const onFileChange = file => {
            updateCard({
                ...card,
                fileName: file.name,
                fileURL: file.url
            })
        }

        const onChange = (e) => {
            updateCard({
                ...card,
                [e.currentTarget.name] : e.currentTarget.value
            })
        }
        
        const onSubmit = () => {
            deleteCard(card);
        }

    return (
        <form className={styles.forms}>
            <input ref={nameRef} name="name" value={name} onChange={onChange} className={styles.input}/>
            <input ref={companyRef} name="company" value={company} onChange={onChange} className={styles.input}/>
            <select ref={themeRef} name="theme" className={styles.select} onChange={onChange}>
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
                    
            <input ref={titleRef} name="title" value={title} onChange={onChange} className={styles.input}/>
            <input ref={emailRef} name="email" value={email} onChange={onChange} className={styles.input}/>

            <textarea ref={messageRef} name="message" value={message} onChange={onChange} className={styles.textarea}/>
            <div className={styles.btns}>
                <div className={styles.here}>
                    <FileInput name={fileName} onFileChange={onFileChange}/>
                </div>
                <button onClick={onSubmit} className={styles.del}>Delete</button>
            </div>
        </form>
    )
});

export default MakerItem;