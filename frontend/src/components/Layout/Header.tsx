import React from 'react';
import { AiFillQuestionCircle, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/bookingcare-2020.svg';
import styles from './Header.module.scss';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { language } from '../../features/home/homeSlice';
import { languageData } from '../../features/home/homeSlice';
import { setLang } from '../../features/home/homeSlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector(language);
  const currentLanguageData = useAppSelector(languageData);
  return (
    <div className={styles.header}>
      <div className={styles.menuLogo}>
        <div className={styles.menu}>
          <AiOutlineMenu size={25} color={'#969495'} />
        </div>
        <Link to=".">
          <div className={styles.logo}>
            <img src={logo} alt="logo" width={160} height={40} />
          </div>
        </Link>
      </div>
      <div className={styles.menuItems}>
        <nav>
          <ul>
            {currentLanguageData.header.HeadersLink.map((link) => (
              <li key={link.link}>
                <Link to={link.link}>
                  <h5>{link.title}</h5>
                  <p>{link.desc}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.help}>
        <Link to={currentLanguageData.header.support.link}>
          <AiFillQuestionCircle color="#45c3d2" size={18} />
          {currentLanguageData.header.support.name}
        </Link>
        <div className={styles.switchLang}>
          <button
            className={currentLanguage === 'en' ? styles.activeLang : ''}
            onClick={() => dispatch({ type: setLang.type, payload: 'en' })}
          >
            EN
          </button>
          {' | '}
          <button
            className={currentLanguage === 'vi' ? styles.activeLang : ''}
            onClick={() => dispatch({ type: setLang.type, payload: 'vi' })}
          >
            VI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
