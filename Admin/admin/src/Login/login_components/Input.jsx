import React from 'react';
import styles from './Input.module.css';

export const Input = ({ label, type = 'text', value, icon, ...props }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel}>{label}</label>
      <div className={styles.inputWrapper}>
        <input
          type={type}
          value={value}
          className={styles.inputField}
          {...props}
        />
        {icon && (
          <img
            src={icon}
            alt=""
            className={styles.inputIcon}
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};