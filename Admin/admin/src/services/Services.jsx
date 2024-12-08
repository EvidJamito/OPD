import React from 'react';
import { ServiceCard } from './ServiceCard';
import { SSidebarItem as SidebarItem} from './SSidebarItem';
import styles from './Services.module.css';

const sidebarItems = [
  { icon: "", label: "Dashboard", isActive: false },
  { icon: "", label: "Clients", isActive: false },
  { icon: "", label: "Services", isActive: true },
  { icon: "", label: "Inbox", isActive: false },
  { icon: "", label: "Reports", isActive: false },
  { icon: "", label: "Calendar", isActive: false },
  { icon: "", label: "Team", isActive: false },
  { icon: "", label: "Settings", isActive: false },
  { icon: "", label: "Logout", isActive: false }
];

const services = [
  { image: "/checkup.png", title: "CHECK UP" },
  { image: "/animal.png", title: "ANIMAL BITE" },
  { image: "/medic.png", title: "MEDICAL" }
];

export const Services = () => {
  return (
    <div className={styles.servicesLayout}>
      <div className={styles.mainContainer}>
        <aside className={styles.sidebar}>
          <div className={styles.brandHeader}>
            <span className={styles.brandName}>O<span className={styles.brandNameDark}>PD </span></span>
            <span className={styles.brandSubtitle}>Appointment <span className={styles.brandSubtitleDark}>System</span></span>
          </div>
          
          <nav className={styles.sidebarNav}>
            {sidebarItems.map((item, index) => (
              <SidebarItem key={index} {...item} />
            ))}
          </nav>
        </aside>

        <main className={styles.mainContent}>
          <header className={styles.topBar}>
            <div className={styles.searchContainer}>
              <span className={styles.searchIcon}></span>
              <input type="search" className={styles.searchInput} placeholder="Search" aria-label="Search" />
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
                  <div className={styles.userName}>arvel</div>
                  <div className={styles.userRole}>Admin</div>
                </div>
              </div>
              <button className={styles.notificationButton} aria-label="Notifications">
              <img src="/dropdown.svg" alt="drop" />               
              </button>
            </div>
          </header>

          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Services</h1>
            <button className={styles.addServiceButton}>Add New Services</button>
          </div>

          <h2 className={styles.sectionTitle}>Available Services</h2>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Services