import { useAppSelector } from 'app/hooks';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { languageData } from '../homeSlice';
import HeaderOptionsList from './HeaderOptionsList';
import styles from './HeaderSection.module.scss';

const HeaderSection = () => {
  const currentLanguageData = useAppSelector(languageData);

  return (
    <div className={styles.homeHeader}>
      <div className={styles.homeHeaderSearch}>
        <div className={styles.searchContent}>
          <h1>
            {currentLanguageData.header.title.line1}
            <span>{currentLanguageData.header.title.line2}</span>
          </h1>
          <div className={styles.searchInput}>
            <input type="search" placeholder="Tìm bác sĩ" />
            <div className={styles.searchIcon}>
              <AiOutlineSearch size={20} />
            </div>
          </div>
          <div className={styles.downloadApp}>
            <button className={styles.chPlay}></button>
            <button className={styles.appStore}></button>
          </div>
        </div>
      </div>
      <HeaderOptionsList />
    </div>
  );
};

export default HeaderSection;
