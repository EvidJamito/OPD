import React from 'react';
import { RStatusBadge as StatusBadge } from './RStatusBadge';
import styles from './Reports.module.css';

export const ReportTableRow = ({ id, name, address, date, type, status }) => {
  return (
    <div className={styles.tableRow}>
      <div className={styles.tableCell}>{id}</div>
      <div className={styles.tableCell}>{name}</div>
      <div className={styles.tableCell}>{address}</div>
      <div className={styles.tableCell}>{date}</div>
      <div className={styles.tableCell}>{type}</div>
      <div className={styles.tableCell}>
        <StatusBadge status={status} />
      </div>
    </div>
  );
};