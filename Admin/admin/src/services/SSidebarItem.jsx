import React from 'react';
import styles from './Services.module.css';

export const SSidebarItem = ({ icon, label, isActive, onClick }) => {
  return (
    <button 
      className={`${styles.sidebarItem} ${isActive ? styles.activeItem : ''}`}
      onClick={() => onClick(label)}
      aria-current={isActive ? 'page' : undefined}
    >
      {isActive && <div className={styles.activeIndicator} aria-hidden="true" />}
      <div className={styles.itemContent}>
        <span className={styles.itemIcon} aria-hidden="true">{icon}</span>
        <span className={styles.itemLabel}>{label}</span>
      </div>
    </button>
  );
};

export default SSidebarItem