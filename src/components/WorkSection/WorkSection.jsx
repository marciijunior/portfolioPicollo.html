// src/components/WorkSection/WorkSection.jsx

import React from 'react';
import styles from './WorkSection.module.css';

const GalleryItem = ({ videoUrl, title, caption }) => (
  <figure className={styles.gallery_item}>
    <iframe 
      className={styles.gallery_item__video} 
      src={videoUrl} 
      title={title} 
      frameBorder="0" 
      allowFullScreen
    ></iframe>
    <figcaption className={styles.gallery_item__caption}>{caption}</figcaption>
  </figure>
);

function WorkSection({ title, description, logoSrc, videos, isReversed = false }) {
  const headerClassName = isReversed
    ? `${styles.work_section__header} ${styles['work_section__header--reverse']}`
    : styles.work_section__header;

  return (
    <section className={styles.work_section}>
      <div className={headerClassName}>
        <img src={logoSrc} className={styles.work_section__logo} alt={`Logo de ${title}`} />
        <div className={styles.work_section__description}>
          <h2 className={styles.work_section__title}>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.work_section__gallery}>
        {videos.map((video, index) => (
          <GalleryItem 
            key={index} 
            videoUrl={video.url} 
            title={video.title} 
            caption={video.caption} 
          />
        ))}
      </div>
    </section>
  );
}

export default WorkSection;