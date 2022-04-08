import React from 'react';
import { AiFillQuestionCircle, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/bookingcare-2020.svg';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.menuLogo}>
        <div className={styles.menu}>
          <AiOutlineMenu size={25} color={'#969495'} />
        </div>
        <div className={styles.logo}>
          <img src={logo} alt="logo" width={160} height={40} />
        </div>
      </div>
      <div className={styles.menuItems}>
        <nav>
          <ul>
            <li>
              <Link to=".">
                <h5>Chuyên khoa</h5>
                <p>Tìm bác sĩ theo chuyên khoa</p>
              </Link>
            </li>
            <li>
              <Link to="admin">
                <h5>Cơ sở y tế</h5>
                <p>Chọn bệnh viện phòng khám</p>
              </Link>
            </li>
            <li>
              <Link to="counter">
                <h5>Bác sĩ</h5>
                <p>Chọn bác sĩ giỏi</p>
              </Link>
            </li>
            <li>
              <Link to="counter">
                <h5>Gói khám</h5>
                <p>Khám sức khỏe tổng quát</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.help}>
        <Link to="admin">
          <AiFillQuestionCircle color="#45c3d2" size={18} />
          Hỗ trợ
        </Link>
        <div className={styles.switchLang}>
          <button>EN</button>{' | '}
          <button className={styles.activeLang}>VI</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
