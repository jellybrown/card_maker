import React, { memo, useRef, useState } from 'react';
import styles from './imageFileInput.module.css';
const ImageFileInput = memo(({ imageUploader, name, onFileChange }) => {
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const onBtnClick = (e) => {
        e.preventDefault();
        inputRef.current.click();
    }
    const onChange = async e => {
        setLoading(true);
        console.log(e.target.files[0]);
        const uploaded = await imageUploader.upload(e.target.files[0]);
       
        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url,
        });
        setLoading(false);
    }
    return (
        <div className={styles.container}>
            <input 
            ref={inputRef} 
            className={styles.input} 
            type="file" 
            accept="image/*" 
            name="file"
            onChange={onChange}
            />
            {!loading && <button 
            className={`${styles.btn} ${name ? styles.yellow : styles.gray}`} 
            onClick={onBtnClick}>{name || 'No file'}</button>}
            {loading && <div className={styles.loading}></div>}
        </div>
    )
});

export default ImageFileInput;