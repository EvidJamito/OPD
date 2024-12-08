import React from 'react';
import styles from './CDashboard.module.css';

export const SidebarItemC = ({ icon, label, isActive }) => {
  return (
    <div className={`${styles.sidebarItem} ${isActive ? styles.active : ''}`}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.label}>{label}</div>
      {isActive && <div className={styles.activeIndicator} />}
    </div>
  );
};

export default SidebarItemC;