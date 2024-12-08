import React from 'react';
import styles from './InboxLayout.module.css';

const emails = [
    {
      id: 1,
      sender: 'Jullu Jalal',
      label: 'Primary',
      subject: 'Our Bachelor of Commerce program is ACBSP-accredited.',
      time: '8:38 AM'
    },
    {
      id: 2,
      sender: 'Minerva Barnett',
      label: 'Work',
      subject: 'Get Best Advertiser In Your Side Pocket',
      time: '8:13 AM'
    },
    {
      id: 3,
      sender: 'Peter Lewis',
      label: 'Friends',
      subject: 'Vacation Home Rental Success',
      time: '7:52 PM'
    }
  ];
  

export function EmailList() {
    return (
      <div className={styles.emailList} role="list">
        {emails.map((email) => (
          <div key={email.id} className={styles.emailItem} role="listitem" tabIndex="0">
            <div className={styles.emailCheckbox}>
              <input 
                type="checkbox" 
                id={`email-${email.id}`}
                className={styles.checkbox}
                aria-label={`Select email from ${email.sender}`}
              />
            </div>
            <div className={styles.emailContent}>
              <div className={styles.sender}>{email.sender}</div>
              <div className={styles.labelWrapper}>
                <span className={styles.emailLabel}>{email.label}</span>
                <span className={styles.subject}>{email.subject}</span>
              </div>
              <div className={styles.time}>{email.time}</div>
            </div>
          </div>
        ))}
        
        
      </div>
    );
  }