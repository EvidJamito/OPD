import React from 'react';
import styles from './Reports.module.css';

export const RSidebarItem = ({ icon, text, isActive }) => {
  return (
    <div className={`${styles.sidebarItem} ${isActive ? styles.active : ''}`}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.itemText}>{text}</div>
    </div>
  );
};