import React, { useState } from 'react';
import CalendarLib from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CSidebar as Sidebar } from './CSidebar';
import { CTopBar as TopBar } from './CTopBar';
import { CalendarHeader } from './CalendarHeader';
import styles from './Calendar.module.css';

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className={styles.calendar}>
      <div className={styles.mainBg}>
        <div className={styles.layout}>
          {/* Sidebar */}
          <div className={styles.sidebarColumn}>
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className={styles.mainColumn}>
            <TopBar />
            <div className={styles.calendarContent}>
              <h1 className={styles.pageTitle}>Calendar</h1>

              {/* Calendar Wrapper */}
              <div className={styles.calendarWrapper}>
                <CalendarHeader
                  currentMonth={selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                  setSelectedDate={setSelectedDate}
                />

                {/* Calendar Grid */}
                <div className={styles.calendarGrid}>
                  <CalendarLib
                    onChange={setSelectedDate}
                    value={selectedDate}
                    tileClassName={({ date, view }) =>
                      view === 'month' && date.getDay() === 0 ? styles.weekendTile : ''
                    }
                    className={styles.reactCalendar}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
