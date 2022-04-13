import React from 'react';
import HeaderSection from './HeaderSection/HeaderSection';
import styles from './HomePage.module.scss';
import ProminentSection from './ProminentSection/ProminentSection';
import Specialty from './PopularSection/Specialty/Specialty';
import HealthFacilities from './PopularSection/HealthFacilities/HealthFacilities';
import Doctor from './PopularSection/Doctor.tsx/Doctor';
import HandBook from './PopularSection/Handbook/Handbook';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <HeaderSection />
      <ProminentSection />
      <Specialty />
      <HealthFacilities />
      <Doctor />
      <HandBook />
    </div>
  );
};

export default HomePage;
