import React from 'react';
import styles from './dashboard_components/Dashboard.module.css';
import { SidebarItem } from './dashboard_components/SidebarItem';
import { StatCard } from './dashboard_components/StatCard';
import { AppointmentRow } from './dashboard_components/AppointmentRow';

const sidebarItems = [
  { icon: '', label: 'Dashboard', isActive: true, path: '/dashboard' },
  { icon: '', label: 'Clients', isActive: false, path: '/clients' },
  { icon: '', label: 'Services', isActive: false, path: '/services' },
  { icon: '', label: 'Inbox', isActive: false, path: '/inbox' },
  { icon: '', label: 'Reports', isActive: false, path: '/reports' },
  { icon: '', label: 'Calendar', isActive: false, path: '/calendar' },
  { icon: '', label: 'Team', isActive: false, path: '/team' },
  { icon: '', label: 'Settings', isActive: false, path: '/settings' },
  { icon: '', label: 'Logout', isActive: false, path: '/logout' },
];

const stats = [
  { title: 'Pendings', value: '126', icon: '/pending.svg' },
  { title: 'Rejected', value: '8', icon: '/rejected.svg' },
  { title: 'Total Users', value: '350', icon: 'total.svg' }
];

const appointments = [
  {
    number: '1',
    id: '729348283',
    image: '/profile2.png',
    name: 'Analyn,sanches',
    mobile: '09475374823',
    datetime: '12.09.2024 - 12.53 PM',
    type: 'Dental',
    status: 'Accepted'
  },
  {
    number: '2',
    id: '298347284',
    image: '/profile1.png',
    name: 'Marc,Cruz',
    mobile: '095743748213',
    datetime: '12.09.2024 - 12.53 PM',
    type: 'Animal Bite',
    status: 'Pending'
  },
  {
    number: '3',
    id: '234637284',
    image: '/profile1.png',
    name: 'Alvin,Olpindo',
    mobile: '09875832512',
    datetime: '12.09.2024 - 12.53 PM',
    type: 'Dental',
    status: 'Rejected'
  }
];

export const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.logo}>
            <span className={styles.logoHighlight}>O</span>
            <span className={styles.logoText}>PD</span>
            <div className={styles.logoSubtext}>
              Appointment <span>System</span>
            </div>
          </div>

          <nav className={styles.sidebarNav}>
            {sidebarItems.map((item, index) => (
              <SidebarItem key={index} {...item} />
            ))}
          </nav>
        </aside>

        <main className={styles.mainContent}>
          <header className={styles.header}>
            <div className={styles.searchContainer}>
              <div className={styles.searchIcon} />
              <input 
                type="search" 
                className={styles.searchInput} 
                placeholder="Search"
                aria-label="Search"
              />
            </div>

            <div className={styles.headerActions}>
              <div className={styles.languageSelector}>
              <img src="/flag.png" alt="flag" />                 
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

              <button className={styles.notificationButton} aria-label="Notifications">
              <img src="/dropdown.svg" alt="drop" />              
              </button>
            </div>
          </header>

          <div className={styles.dashboardContent}>
            <h1 className={styles.pageTitle}>Dashboard</h1>

            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            <section className={styles.appointmentsSection}>
              <div className={styles.appointmentsHeader}>
                <h2 className={styles.sectionTitle}>Appointments</h2>
                <div className={styles.monthSelector}>
                  <span>October</span>
                  <img src="/dropdown.svg" alt="drop" />                 
                  </div>
              </div>

              <div className={styles.appointmentsTable}>
                <div className={styles.tableHeader}>
                  <div>No.#</div>
                  <div>Appointment #</div>
                  <div>Name</div>
                  <div>Mobile Number</div>
                  <div>Date-Time</div>
                  <div>Type</div>
                  <div>Status</div>
                </div>

                {appointments.map((appointment, index) => (
                  <AppointmentRow key={index} {...appointment} />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
