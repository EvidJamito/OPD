import React from 'react';
import styles from './CDashboard.module.css';

export const StatusFilterC = () => {
  return (
    <div className={styles.statusFilterContainer}>
      <div className={styles.filterContent}>
        <div className={styles.filterTitle}>Select Client Status</div>
        <div className={styles.filterOptions}>
          <button className={styles.filterButton}>Completed</button>
          <button className={styles.filterButton}>Processing</button>
          <button className={styles.filterButton}>Rejected</button>
        </div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9620e369f80143dadbc7a70089805ebdae334cf00168d523be76b8d3ae4bddc?placeholderIfAbsent=true&apiKey=58d78413ab6541a2a210f886c618be44" className={styles.filterDivider} alt="" />
      <div className={styles.filterActions}>
        <p className={styles.filterNote}>*You can choose multiple Client Status</p>
        <button className={styles.applyButton}>Apply Now</button>
      </div>
    </div>
  );
};

export default StatusFilterC;