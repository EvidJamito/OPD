import React from 'react';
import styles from './Reports.module.css';

export const RStatusBadge = ({ status }) => {
  const statusStyles = {
    completed: styles.statusCompleted,
    processing: styles.statusProcessing,
    rejected: styles.statusRejected
  };

  return (
    <div className={`${styles.statusBadge} ${statusStyles[status.toLowerCase()]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)} {/* Capitalizes the status */}
    </div>
  );
};
