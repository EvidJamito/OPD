import React from 'react';
import { CSidebarItem as SidebarItem } from './CSidebarItem';
import styles from './Calendar.module.css';

const menuItems = [
  { label: 'Dashboard', icon: '', isActive: false },
  { label: 'Clients', icon: '', isActive: false },
  { label: 'Services', icon: '', isActive: false },
  { label: 'Inbox', icon: '', isActive: false },
  { label: 'Reports', icon: '', isActive: false },
  { label: 'Calendar', icon: '', isActive: true },
  { label: 'Team', icon: '', isActive: false },
  { label: 'Settings', icon: '', isActive: false },
  { label: 'Logout', icon: '', isActive: false }
];

export const CSidebar = () => {
  return (
    <div className={styles.sideBarBg}>
      <div className={styles.logo}>
        <span className={styles.logoHighlight}>O</span>
        <span className={styles.logoText}>PD</span>
      </div>
      <div className={styles.subTitle}>
        <span className={styles.highlight}>Appointment</span>
        <span>System</span>
      </div>
      
      {menuItems.map((item, index) => (
        <SidebarItem
          key={index}
          icon={item.icon}
          label={item.label}
          isActive={item.isActive}
          onClick={() => {}}
        />
      ))}
    </div>
  );
};