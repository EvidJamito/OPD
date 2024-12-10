import React from 'react';
import styles from './Dashboard.module.css';
import { StatusBadge } from './StatusBadge';

export const AppointmentRow = ({ number, id, image, name, mobile, datetime, type, status }) => {
  return (
    <div className={styles.appointmentRow}>
      <div className={styles.appointmentNumber}>{number}</div>
      <div className={styles.appointmentId}>
        <img src={image} alt="" className={styles.appointmentImage} />
        <span>{id}</span>
      </div>
      <div className={styles.appointmentName}>{name}</div>
      <div className={styles.appointmentMobile}>{mobile}</div>
      <div className={styles.appointmentDateTime}>{datetime}</div>
      <div className={styles.appointmentType}>{type}</div>
      <StatusBadge status={status} />
    </div>
  );
};

export default AppointmentRow;