import React from 'react';
import styles from './Calendar.module.css';

export const CTopBar = () => {
  return (
    <div className={styles.topBarBg}>
      <div className={styles.searchContainer}>
        <div className={styles.searchIcon}></div>
        <form className={styles.searchForm}>
          <label htmlFor="searchInput" className={styles.visuallyHidden}>Search</label>
          <input
            id="searchInput"
            type="search"
            className={styles.searchInput}
            placeholder="Search"
            aria-label="Search"
          />
        </form>
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
            <div className={styles.userName}>Moni Roy</div>
            <div className={styles.userRole}>Admin</div>
          </div>
          <img src="/dropdown.svg" alt="drop" /> 
          </div>
      </div>
    </div>
  );
};