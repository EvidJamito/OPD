import React from 'react';
import { SidebarItemC as SidebarItem } from './clients_component/SidebarItemC';
import { TableRowC as TableRow } from './clients_component/TableRowC';
import { StatusFilterC as StatusFilter } from './clients_component/StatusFilterC';
import styles from './clients_component/CDashboard.module.css';

const sidebarItems = [
  { icon: '', label: 'Dashboard', isActive: false },
  { icon: '', label: 'Clients', isActive: true },
  { icon: '', label: 'Services', isActive: false },
  { icon: '', label: 'Inbox', isActive: false },
  { icon: '', label: 'Reports', isActive: false },
  { icon: '', label: 'Calender', isActive: false },
  { icon: '', label: 'Team', isActive: false },
  { icon: '', label: 'Settings', isActive: false },
  { icon: '', label: 'Logout', isActive: false }
];

const tableData = [
  {
    id: '729348283',
    name: 'Analyn,sanches',
    address: '089 Kutch Green Apt. 448',
    date: '12.09.2024 - 12.53 PM',
    type: 'Dental'
  },
  {
    id: '298347284',
    name: 'Marc,Cruz',
    address: '979 Immanuel Ferry Suite 526',
    date: '12.09.2024 - 12.53 PM',
    type: 'Animal Bite'
  },
  {
    id: '234637284',
    name: 'Alvin,Olpindo',
    address: '8587 Frida Ports',
    date: '12.09.2024 - 12.53 PM',
    type: 'Dental'
  }
];

export const DashboardC = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.logo}>
            <span className={styles.logoMain}>O</span>
            <span className={styles.logoSecondary}>PD</span>
          </div>
          <div className={styles.logoSubtitle}>
            <span className={styles.logoSubtitleMain}>Appointment</span>
            <span className={styles.logoSubtitleSecondary}>System</span>
          </div>
          
          {sidebarItems.map((item, index) => (
            <SidebarItem key={index} {...item} />
          ))}
        </aside>

        <main className={styles.mainContent}>
          <header className={styles.topBar}>
            <div className={styles.searchContainer}>
            <img src="/search.svg" alt="search" />
              <input type="text" className={styles.searchInput} placeholder="Search" aria-label="Search" />
            </div>
            
            <div className={styles.userControls}>
              <div className={styles.languageSelector}>
              <img src="/flag.png" alt="Flag" />
              <span>English</span>
              <img src="/dropdown.svg" alt="drop" /> 
            </div>
              
              <div className={styles.userProfile}>
              <img src="/avatar.png" alt="avatar" />                
              <div className={styles.userInfo}>
                  <div className={styles.userName}>Arvel</div>
                  <div className={styles.userRole}>Admin</div>
                </div>
              </div>
            </div>
          </header>

          <section className={styles.clientSection}>
            <h1 className={styles.sectionTitle}>Clients</h1>
            
            <div className={styles.filterBar}>
              <div className={styles.filterControls}>
              <img src="/filter.svg" alt="filter" />
                <span>Filter By</span>
                <div className={styles.filterDivider} />
                <span>Date</span>
                <img src="/dropdown2.svg" alt="dr2" />                
                <div className={styles.filterDivider} />
                <span>Type</span>
                <img src="/dropdown2.svg" alt="dr2" />                
                <div className={styles.filterDivider} />
                <span>Status</span>
                <img src="/dropdown2.svg" alt="dr2" />              
                </div>
              
              <button className={styles.resetFilter}>
              <img src="/refresh.svg" alt="refresh" />                
              Reset Filter
              </button>
            </div>

            <div className={styles.clientTable}>
              <div className={styles.tableHeader}>
                <div className={styles.headerCell}>ID</div>
                <div className={styles.headerCell}>NAME</div>
                <div className={styles.headerCell}>ADDRESS</div>
                <div className={styles.headerCell}>DATE</div>
                <div className={styles.headerCell}>TYPE</div>
              </div>

              {tableData.map((row, index) => (
                <TableRow key={index} {...row} />
              ))}

              <StatusFilter />
            </div>

          
          </section>
        </main>
      </div>
    </div>
  );
};

export default DashboardC;