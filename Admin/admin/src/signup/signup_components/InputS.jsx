import React from 'react';
import styles from './InputS.module.css';

export const InputS = ({ label, type = "text", value, placeholder }) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.inputLabel}>{label}</label>
      <input 
        type={type}
        className={styles.inputField}
        value={value}
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
};

export default InputS