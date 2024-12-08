import React from 'react';
import styles from './Reports.module.css';
import { RSidebarItem as SidebarItem  } from './RSidebarItem';
import { ReportTableRow as TableRow } from './ReportTableRow';

const reportData = [
  {
    id: '729348283',
    name: 'Analyn,sanches',
    address: '089 Kutch Green Apt. 448',
    date: '12.09.2024 - 12.53 PM',
    type: 'Dental',
    status: 'Completed'
  },
  {
    id: '298347284',
    name: 'Marc,Cruz',
    address: '979 Immanuel Ferry Suite 526',
    date: '12.09.2024 - 12.53 PM',
    type: 'Animal Bite',
    status: 'Processing'
  },
  {
    id: '234637284',
    name: 'Alvin,Olpindo',
    address: '8587 Frida Ports',
    date: '12.09.2024 - 12.53 PM',
    type: 'Dental',
    status: 'Rejected'
  }
];

export const ReportsPage = () => {
  return (
    <div className={styles.reports}>
      <div className={styles.mainBg}>
        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <div className={styles.logo}>
              <span className={styles.logoText}>OPD</span>
              <span>System</span>
            </div>
            
            <nav className={styles.navigation}>
              <SidebarItem icon="" text="Dashboard" />
              <SidebarItem icon="" text="Clients" />
              <SidebarItem icon="" text="Services" />
              <SidebarItem icon="" text="Inbox" />
              <SidebarItem icon="" text="Reports" isActive={true} />
              <SidebarItem icon="" text="Calendar" />
              <SidebarItem icon="" text="Team" />
              <SidebarItem icon="" text="Settings" />
              <SidebarItem icon="" text="Logout" />
            </nav>
          </aside>

          <main className={styles.mainContent}>
            <header className={styles.header}>
              <div className={styles.searchContainer}>
                <input 
                  type="search" 
                  className={styles.searchInput}
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              
              <div className={styles.userControls}>
                <div className={styles.languageSelector}>
                  <span>English</span>
                  <img src="/flag.png" alt="flag" />                
                  </div>
                
                <div className={styles.userProfile}>
                <img src="/avatar.png" alt="avatar" />                   
                <div className={styles.userInfo}>
                    <span className={styles.userName}>Moni Roy</span>
                    <span className={styles.userRole}>Admin</span>
                  </div>
                </div>
              </div>
            </header>

            <section className={styles.reportsSection}>
              <h1 className={styles.pageTitle}>Reports</h1>
              
              <div className={styles.filterBar}>
                <div className={styles.filterGroup}>
                  <button className={styles.filterButton}>
                    <span>Filter By</span>
                  </button>
                  <button className={styles.filterButton}>
                    <span>Date</span>
                  </button>
                  <button className={styles.filterButton}>
                    <span>Type</span>
                  </button>
                  <button className={styles.filterButton}>
                    <span>Status</span>
                  </button>
                </div>
                <button className={styles.resetButton}>
                  Reset Filter
                </button>
              </div>

              <div className={styles.tableContainer}>
                <div className={styles.tableHeader}>
                  <div className={styles.headerCell}>ID</div>
                  <div className={styles.headerCell}>NAME</div>
                  <div className={styles.headerCell}>ADDRESS</div>
                  <div className={styles.headerCell}>DATE</div>
                  <div className={styles.headerCell}>TYPE</div>
                  <div className={styles.headerCell}>STATUS</div>
                </div>
                
                <div className={styles.tableBody}>
                  {reportData.map((report) => (
                    <TableRow key={report.id} {...report} />
                  ))}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};