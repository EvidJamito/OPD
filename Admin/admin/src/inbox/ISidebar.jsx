import React from 'react';
import styles from './InboxLayout.module.css';

const menuItems = [
  { id: 1, label: 'Dashboard', icon: '', count: null },
  { id: 2, label: 'Clients', icon: '', count: null },
  { id: 3, label: 'Services', icon: '', count: null },
  { id: 4, label: 'Inbox', icon: '', count: 1253, active: true },
  { id: 5, label: 'Reports', icon: '', count: null }
];

const pageItems = [
  { id: 6, label: 'Calendar', icon: '' },
  { id: 7, label: 'Team', icon: '' },
  { id: 8, label: 'Settings', icon: '' },
  { id: 9, label: 'Logout', icon: '' }
];

export function ISidebar() {
  return (
    <div className={styles.sidebarColumn}>
      <nav className={styles.sidebarNav} role="navigation">
        <div className={styles.logo}>
          O<span className={styles.logoText}>PD</span>
        </div>
        <div className={styles.logoSubtext}>
          Appointment <span className={styles.systemText}>System</span>
        </div>
        
        {menuItems.map((item) => (
          <div 
            key={item.id}
            className={`${styles.menuItem} ${item.active ? styles.activeMenuItem : ''}`}
            role="menuitem"
            tabIndex="0"
          >
            {item.icon && <span className={styles.menuIcon} aria-hidden="true">{item.icon}</span>}
            <span className={styles.menuLabel}>{item.label}</span>
            {item.count && <span className={styles.menuCount}>{item.count}</span>}
          </div>
        ))}

        <div className={styles.pagesSeparator}>PAGES</div>

        {pageItems.map((item) => (
          <div 
            key={item.id}
            className={styles.menuItem}
            role="menuitem"
            tabIndex="0"
          >
            {item.icon && <span className={styles.menuIcon} aria-hidden="true">{item.icon}</span>}
            <span className={styles.menuLabel}>{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}