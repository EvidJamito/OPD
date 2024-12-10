import React from 'react';
import styles from './Calendar.module.css';

export const CalendarHeader = ({ currentMonth, setSelectedDate }) => {
  const handlePreviousMonth = () => {
    setSelectedDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setSelectedDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  return (
    <div className={styles.calendarHeader}>
      <button className={styles.todayButton} onClick={() => setSelectedDate(new Date())}>
        Today
      </button>

      {/* Buttons for navigating between months */}
      <button className={styles.previousButton} onClick={handlePreviousMonth}>
        Previous
      </button>
      <button className={styles.nextButton} onClick={handleNextMonth}>
        Next
      </button>
    </div>
  );
};
