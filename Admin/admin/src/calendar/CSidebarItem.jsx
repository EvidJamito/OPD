import React from 'react';
import styles from './Calendar.module.css';

export const CSidebarItem = ({ icon, label, isActive, onClick }) => {
  return (
    <div 
      className={`${styles.sidebarItem} ${isActive ? styles.active : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className={styles.icon}>{icon}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};