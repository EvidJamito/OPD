import React from 'react';
import styles from './InboxLayout.module.css';

export function ITopbar() {
  return (
    <header className={styles.topBar}>
      <div className={styles.searchWrapper}>
        <form className={styles.searchContainer} role="search">
          <label htmlFor="globalSearch" className={styles['visually-hidden']}>
            Search
          </label>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/972be0c4b323d4eb89d4874e0df8388ef5955b39d64f5bc67b9893652f65ca63?placeholderIfAbsent=true&apiKey=58d78413ab6541a2a210f886c618be44"
            alt=""
            className={styles.searchIcon}
            aria-hidden="true"
          />
          <input
            id="globalSearch"
            type="search"
            className={styles.searchInput}
            placeholder="Search"
          />
        </form>
      </div>

      <div className={styles.userControls}>
        <div className={styles.languageSelector} tabIndex="0" role="button">
        <img src="/flag.png" alt="flag" />            
        <span>English</span>
        <img src="/dropdown.svg" alt="drop" />          
        </div>

        <div className={styles.userProfile} tabIndex="0" role="button">
        <img src="/avatar.png" alt="avatar" />            
        <div className={styles.userInfo}>
            <div className={styles.userName}>Moni Roy</div>
            <div className={styles.userRole}>Admin</div>
          </div>
          <img src="/dropdown.svg" alt="drop" />          </div>
      </div>
    </header>
  );
}

export default ITopbar;