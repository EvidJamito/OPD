import React from 'react';
import { ISidebar as Sidebar } from './ISidebar';
import { ITopbar as TopBar } from './ITopbar';
import { EmailList } from './EmailList';
import styles from './InboxLayout.module.css';

export function InboxLayout() {
  return (
    <div className={styles.inboxContainer}>
      <div className={styles.layoutWrapper}>
        <Sidebar />
        <main className={styles.mainColumn}>
          <div className={styles.mainContent}>
            <TopBar />
            <section className={styles.emailSection}>
              <h1 className={styles.sectionTitle}>Inbox</h1>
              <EmailList />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}