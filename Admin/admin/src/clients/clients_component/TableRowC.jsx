import React from 'react';
import styles from './CDashboard.module.css';

export const TableRowC = ({ id, name, address, date, type }) => {
  return (
    <>
      <div className={styles.tableRow}>
        <div className={styles.cellId}>{id}</div>
        <div className={styles.cellName}>{name}</div>
        <div className={styles.cellAddress}>{address}</div>
        <div className={styles.cellDate}>{date}</div>
        <div className={styles.cellType}>{type}</div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/870cf40761e55ecc3999d14dc9f9abe4673432c3e5fb1a077cca9b5c4a97353b?placeholderIfAbsent=true&apiKey=58d78413ab6541a2a210f886c618be44" className={styles.rowDivider} alt="" />
    </>
  );
};


export default TableRowC;