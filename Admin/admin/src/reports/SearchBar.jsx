import React from 'react';
import styles from './Reports.module.css';

export const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <img 
        src="/search.svg" 
        alt="Search icon" 
        className={styles.searchIcon} 
      />
      <input
        type="search"
        className={styles.searchInput}
        placeholder="Search"
        aria-label="Search"
      />
    </div>
  );
};