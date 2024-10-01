import styles from './TextInput.module.scss';



function TextInput( {title, isRequired, placeholder, setInputValue} ) {

    return (
        <div className={styles.input_container}>
            <div className={styles.title_container}>
                <p className={styles.title}>{title}</p>
                {isRequired 
                ? 
                <p className={styles.required}>*</p>
                :
                <></>
                }
            </div>
            <input 
            onChange={(event) => setInputValue(event.target.value)}
            placeholder={placeholder} 
            className={styles.input}></input>
        </div>
    );

}

export default TextInput;