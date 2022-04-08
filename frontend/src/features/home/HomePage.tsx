import React from 'react';
import HomeHeaderSection from './HomeHeaderSection/HomeHeaderSection';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <HomeHeaderSection />
    </div>
  );
};

export default HomePage;
