import React from 'react';
import styles from './Services.module.css';

export const ServiceCard = ({ image, title }) => {
  const handleMessageClick = () => {
    console.log(`Message clicked for ${title}`);
  };

  return (
    <div className={styles.serviceCard} role="article">
      <img loading="lazy" src={image} alt={`${title} service`} className={styles.serviceImage} />
      <h3 className={styles.serviceTitle}>{title}</h3>
      <button 
        onClick={handleMessageClick}
        className={styles.messageButton}
        aria-label={`Send message about ${title} service`}
      >
        <span className={styles.messageIcon} aria-hidden="true"></span>
        <span className={styles.messageText}>Message</span>
      </button>
    </div>
  );
};

export default ServiceCard