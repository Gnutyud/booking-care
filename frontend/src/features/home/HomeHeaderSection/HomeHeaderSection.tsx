import React from 'react'
import styles from './HomeHeaderSection.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import HeaderOptionsList from './HeaderOptionsList';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { language } from '../homeSlice';
import { languageData } from '../homeSlice';

const HomeHeaderSection = () => {
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector(language);
  const currentLanguageData = useAppSelector(languageData);
  
  return (
    <div className={styles.homeHeader}>
        <div className={styles.homeHeaderSearch}>
          <div className={styles.searchContent}>
            <h1>
              NỀN TẢNG Y TẾ
              <span>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</span>
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
  )
}

export default HomeHeaderSection;
